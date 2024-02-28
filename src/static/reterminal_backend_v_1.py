import servo_control as sc 
import relay_control as rc 
import time
import json

from fastapi import FastAPI, Query, WebSocket
import asyncio
from fastapi.middleware.cors import CORSMiddleware

# rs 485 related classes
myservo = sc.servo()
myrelay = rc.relay()

# ------- SERVO PATH FUNCTIONS -------------

def push_path_def(path_num: int, spd_num: int, dly_num: int, auto_num: int, type_num: int, acc_num: int,
                     dec_num: int):
    # Logic to configure path definition
    path_definitions[path_num] = {
        "spd_num": spd_num,
        "dly_num": dly_num,
        "auto_num": auto_num,
        "type_num": type_num,
        "acc_num": acc_num,
        "dec_num": dec_num
    }
    myservo.config_path_def(path_num,
                            spd_num,
                            dly_num,
                            auto_num,
                            type_num,
                            acc_num,
                            dec_num)
    print("PUSH PATH DEF COMPLETE")

def push_path_data(path_num: int, length: int):
    # Logic to configure path data
    path_data[path_num] = {"length": length}
    myservo.config_path_data(path_num,
                             length)
    print("PUSH PATH DATA COMPLETE")


# ---------------------- API START ------------------------
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace "*" with your frontend URL in production
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

# Mock data storage
path_definitions = {}
path_data = {}
relay_status = {}
eop_status = False
glob_delay = 2

#process status array for display
current_process_status = [
    "Waiting for start",
    "Infra heating",
    "Feed forward",
    "Cut down",
    "Cut up",
    "Milling",
    "Done",
    "Wait for approving"
]

# parameters
parameters = {
    'Speed':{
        1: 100,
        2: 200,
        3: 300,
        4: 400,
        5: 500,
        6: 600,
        7: 700,
        8: 800,
        9: 900,
        10: 1000,
        11: 1100,
        12: 1200,
        13: 1300,
        14: 1400,
        15: 1500,
        16: 1600
    },
    'Acceleration': {
        1: 100,
        2: 200,
        3: 300,
        4: 400,
        5: 500,
        6: 600,
        7: 700,
        8: 800,
        9: 900,
        10: 1000,
        11: 1100,
        12: 1200,
        13: 1300,
        14: 1400,
        15: 1500,
        16: 1600
    },
    'Deceleration': {
        1: 100,
        2: 200,
        3: 300,
        4: 400,
        5: 500,
        6: 600,
        7: 700,
        8: 800,
        9: 900,
        10: 1000,
        11: 1100,
        12: 1200,
        13: 1300,
        14: 1400,
        15: 1500,
        16: 1600
    }
}

# state
state = {
    "path_param" : 409/10e6,

    "null_cut":False,

    "error":[],

    "process_running":False,
    "mode":True,
    "autojump":False,
    "process_stopped_imm":False,
    "process_stopped_after":False,
    "process_paused":False,

    "manual_jump_good":False,    # bool for good/bad manual cut

    'single_infra_percentage':100,
    'single_infra_delay':3000,
    'single_count':100,
    'single_batch':20,
    'single_total_current':1,
    'single_batch_current':1,
    'single_cut_length':100,
    'single_cut_delay':200,
    'single_speed':1,
    'single_acceleration':1,
    'single_deceleration':1,
    'single_milling_placeholder':100,

    "array_index_done":10,
    'array_index_max':100,
    'array_current_index':11,
    'array_current_length':100,
    'array_current_cutdelay':200,
    'array_current_infradelay':2000,
    'array_current_infrapercent':60,
    'array_current_speed':500,
    'array_current_acc':200,
    'array_current_dec':300,
    'array_processed_length':500,

    'session_processed_length':600,
}

websocket_payload = {
    "mat_begin":True,
    "mat_end":True,
    "mill":True,
    "infra":True,
    "door":True,
    "cut_up":True,
    "cut_down":False,
    "batch_limit_reached":False,
    "manual_jump_trigger":False,
    "process_status":"cut_down",
}

# current process
current_process_array = [

]


@app.get("/api/stop_motor")
def stop_motor():
    #myservo.stop_path()
    return {"message": "Motor stopped"}

@app.get("/api/stop_process")
def stop_motor():
    #myservo.stop_path()
    return {"message": "Process stopped"}


@app.get("/api/start_path")
def start_path(path_number: int = Query(..., title="Path Number")):
    #myservo.start_path(path_number)
    return {"message": f"Started path {path_number}"}


@app.post("/api/config_path_def")
def config_path_def(path_num: int, spd_num: int, dly_num: int, auto_num: int, type_num: int, acc_num: int,
                     dec_num: int):
    # Logic to configure path definition
    path_definitions[path_num] = {
        "spd_num": spd_num,
        "dly_num": dly_num,
        "auto_num": auto_num,
        "type_num": type_num,
        "acc_num": acc_num,
        "dec_num": dec_num
    }
    #myservo.config_path_def(path_num,
    #                        spd_num,
    #                        dly_num,
    #                        auto_num,
    #                        type_num,
    #                        acc_num,
    #                        dec_num)
    return {"message": f"Path definition configured for path {path_num}"}


@app.post("/api/config_path_data")
def config_path_data(path_num: int, length: int):
    # Logic to configure path data
    path_data[path_num] = {"length": length}
    #myservo.config_path_data(path_num,
    #                         length)
    return {"message": f"Path data configured for path {path_num}"}


@app.get("/api/relay")
def control_relay(relay_num: int = Query(..., title="Relay Number"),
                  status: bool = Query(..., title="Relay Status")):
    # Logic to control relay status
    #if status:
        #myrelay.turn_on_relay(relay_num)
    #else:
        #myrelay.turn_off_relay(relay_num)
    return {"message": f"Relay {relay_num} status set to {status}"}


@app.get("/api/get_relays")
def get_relays():
    # Logic to get relay status
    #status = myrelay.get_relays_status()
    status = True
    return {"relays": status}


@app.get("/api/get_eop")
def get_eop():
    # Logic to get end of path status
    #status = myservo.poll_eop()
    status = True
    return {"eop_status": status}

@app.get("/api/get_inputs")
def get_inputs():
    # Logic to get end of path status
    #status = myrelay.read_input()
    status = True
    print(status)
    return {"input_status": status}

@app.post("/api/config_path_param")
def config_path_param(path_param : float, param_index: int, param_type: str):
    # TODO implement parammeeter change
    # myservo.{...}
    return {"message":f"Path param changed to: {path_param}"}

# ---------------- MAIN WEBSOCKET -------------------------------
# update sensor data and 
old_state = None
async def check_state():
    global old_state
    
    if old_state != state:
        old_state = state.copy()
        return True
    else: 
        return False

websockets = []


@app.websocket("/api/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    websockets.append(websocket) 

    await websocket.send_json(state)

    try:
        while True:
            for ws in websockets:
                state_changed = await check_state()
                if state_changed:
                    print("State WS")
                    await ws.send_json(state)
                await asyncio.sleep(0.1)
    except Exception as e:
        print(e)
        websockets.remove(websocket)  

# -------------------- FRONTEND COMMUNICATION ENDPOINTS ----------------
@app.post("/api/update/single")
def update_single(data: dict):
    print(data)
    if 'Single_Infra_Percentage' in data:
        state["single_infra_percentage"] = int(data['Single_Infra_Percentage'])

    if 'Single_Infra_Delay' in data:
        state["single_infra_delay"] = int(data['Single_Infra_Delay'])

    if 'Single_Count' in data:
        state["single_count"] = int(data['Single_Count'])

    if 'Single_Batch' in data:
        state["single_batch"] = int(data['Single_Batch'])

    if 'Single_Cut_Length' in data:
        state["single_cut_length"] = int(data['Single_Cut_Length'])

    if 'Single_Cut_Delay' in data:
        state["single_cut_delay"] = int(data['Single_Cut_Delay'])

    if 'Single_Speed' in data:
        state["single_speed"] = int(data['Single_Speed'])

    if 'Single_Acceleration' in data:
        state["single_acceleration"] = int(data['Single_Acceleration'])

    if 'Single_Deceleration' in data:
        state["single_deceleration"] = int(data['Single_Deceleration'])

    if 'Single_Milling_Placeholder' in data:
        state["single_milling_placeholder"] = int(data['Single_Milling_Placeholder'])

    if 'Single_Total_Current' in data:
        state["single_total_current"] = int(data['Single_Total_Current'])

    if 'Single_Batch_Current' in data:
        state["single_batch_current"] = int(data['Single_Batch_Current'])

    return {"message": "done"}

@app.post("/api/update/array")
def update_single(data: dict):
    if 'Single_Infra_Percentage' in data:
        pass
    return {"message": ""}

@app.post("/api/update/process")
def update_process(data: dict):
    if 'Mode' in data:
        state["mode"] = data['Mode']
    if 'AutoJump' in data:
        if data['AutoJump'] == "change":
            if state["autojump"]:
                state["autojump"] =   False
            else: 
                state["autojump"] = True
    return {"message": ""}

@app.post("/api/update/parameter")
def update_parameter(data: dict):
    return {"message": ""}

@app.get("/api/unload")
def unload():
    print(f"Unload")
    push_path_def(path_num=1,
                        spd_num=3,
                        dly_num=0,
                        auto_num=0,
                        type_num=2,
                        acc_num=5,
                        dec_num=5)
    push_path_data(path_num=1,
                length=500)
    myservo.start_path(1)
    return {"message": "success"}

@app.get("/api/load")
def load():
    print(f"Load")
    push_path_def(path_num=1,
                        spd_num=3,
                        dly_num=0,
                        auto_num=0,
                        type_num=2,
                        acc_num=5,
                        dec_num=5)
    push_path_data(path_num=1,
                length=-500)
    myservo.start_path(1)
    return {"message": "success"}

@app.get("/api/cut_up")
def cut_up():
    print(f"Cut up")
    myrelay.turn_off_relay(0)
    return {"message": "success"}

@app.get("/api/cut_down")
def cut_down():
    print(f"Cut down")
    myrelay.turn_on_relay(0)
    return {"message": "success"}

@app.get("/api/feed")
def feed(length: int = Query(..., title="Length")):
    print(f"Feed: {length}")
    push_path_def(path_num=1,
                        spd_num=3,
                        dly_num=0,
                        auto_num=0,
                        type_num=2,
                        acc_num=5,
                        dec_num=5)
    push_path_data(path_num=1,
                length=length)
    myservo.start_path(1)
    return {"message": "success"}

@app.get("/api/pause")
def pause():
    print("Pause process")
    # pause logic
    state["process_paused"] = True
    return {"message": "success"}

@app.get("/api/resume")
def resume():
    print("Resume process")
    # resume logic
    state["process_paused"] = False
    return {"message": "success"}

@app.get("/api/stop_after")
def stop_after():
    print("Stop process after")
    state['process_stopped_after'] = True
    return {"message": "success"}

@app.get("/api/stop_immidietly")
def stop_imm():
    print("Stop process immidietly")
    state['process_stopped_imm'] = True
    return {"message": "success"}

@app.get("/api/reset_batch_popup")
def reset_batch():
    print("Reset batch popup")
    state['batch_limit_reached'] = False
    return {"message": "success"}

@app.get("/api/reset_manual_jump_trigger")
def reset_manual_jump(success: bool = Query(..., title="Success")):
    print("Reset manualjump popup")
    state['manual_jump_good'] = success
    state['manual_jump_trigger'] = False
    return {"message": "success"}

@app.get("/api/get_params")
def get_params():
    return parameters

# --------- MAIN PROCESS LOGIC -----------
async def async_start_process():
    if state["process_running"]:
        print("Process already running")
        return
    
    # cut up
    myrelay.turn_off_relay(4)
    if not state['process_stopped_imm']:
                while(myrelay.read_input()[0] != 0):
                    myrelay.turn_off_relay(0)
                    await asyncio.sleep(0.05)
                    # stop imm
                    if state["process_stopped_imm"]:
                        print("Process stopped immidietly")
                        break
                    # pause
                    if state["process_paused"]:
                        print("Process paused")
                        # turn off infra
                        while state["process_paused"]:
                            await asyncio.sleep(0.05)
    
    state["process_running"] = True
    
    # switch between modes
    if(state["mode"] == False):
        # single length mode
        
        # loop for single values
        for i in range(state["single_count"]):

            # config path 
            push_path_def(path_num=1,
                        spd_num=state["single_speed"],
                        dly_num=0,
                        auto_num=0,
                        type_num=2,
                        acc_num=state['single_acceleration'],
                        dec_num=state['single_deceleration'])
            push_path_data(path_num=1,
                        length=state['single_cut_length'])

            if not state['process_stopped_imm']:
                if state["single_batch_current"] -1 == state['single_batch']:
                    # batch finished, wait for batch zero from frontend
                    state['batch_limit_reached'] = True
                    while state["single_batch_current"] -1 == state['single_batch']:
                        await asyncio.sleep(0.05)
                        if state["process_stopped_imm"]:
                            print("Process stopped immidietly")
                            # turn off infra
                            break

            print(f"Single Process Element: {i}")
            print(f"Infra delay: {state['single_infra_delay']}")
            print(f"Infra percentage: {state['single_infra_percentage']}")
            print(f"Cut length: {state['single_cut_length']}")
            print(f"Cut delay: {state['single_cut_delay']}")
            print(f"Speed: {state['single_speed']}")
            print(f"Acceleration: {state['single_acceleration']}")
            print(f"Deceleration: {state['single_deceleration']}")
            print(f"Milling placeholder: {state['single_milling_placeholder']}")
            
            # ******* infra *********
            if not state['process_stopped_imm']:
                # start infra
                infra_start_time = time.time()
                while time.time() - infra_start_time < state["single_infra_delay"]/1000.0:
                    await asyncio.sleep(0.05)
                    if state["process_paused"]:
                        print("Process paused")
                        # turn off infra
                        while state["process_paused"]:
                            await asyncio.sleep(0.05)
                            infra_start_time = time.time()

                    if state["process_stopped_imm"]:
                        print("Process stopped immidietly")
                        # turn off infra
                        break
            if state['process_stopped_imm']:
                print("Breaking single process")
                break

            # ********** feed fwd ***********
            if not state['process_stopped_imm']:
                # start working path
                start_pos = myservo.get_axis_pos()
                myservo.start_path(1)
                while(int(myservo.poll_eop()) != 1):
                    await asyncio.sleep(0.05)
                    # stop imm
                    if state["process_stopped_imm"]:
                        print("Process stopped immidietly")
                        myservo.start_path(1000)
                        break
                    # pause
                    if state["process_paused"]:
                        print("Process paused")
                        # stop motor
                        myservo.start_path(1000)
                        pause_pos = myservo.get_axis_pos()
                        remaining_length = -abs(int(pause_pos)-int(start_pos))*state["path_param"]
                        while state["process_paused"]:
                            await asyncio.sleep(0.05)
                        push_path_data(path_num=1,
                                       length=remaining_length)
                        await asyncio.sleep(0.1)
                        # TODO: implement pause properly: NEED TO READ SERVO POSITION
            if state['process_stopped_imm']:
                print("Breaking single process")
                break

            # *********** cut ************** 
            if not state['process_stopped_imm']:
                myrelay.turn_on_relay(0)
                while(myrelay.read_input()[1] != 0):
                    myrelay.turn_on_relay(0)
                    await asyncio.sleep(0.1)
                    # stop imm
                    if state["process_stopped_imm"]:
                        print("Process stopped immidietly")
                        break
                    # pause
                    if state["process_paused"]:
                        print("Process paused")
                        while state["process_paused"]:
                            await asyncio.sleep(0.05)
            if state['process_stopped_imm']:
                print("Breaking single process")
                break

            # wait after cut
            start_tmp = time.time()
            if not state['process_stopped_imm']:
                while((time.time() - start_tmp)*1000 < state['single_cut_delay']):
                    await asyncio.sleep(0.1)
                    # stop imm
                    if state["process_stopped_imm"]:
                        print("Process stopped immidietly")
                        break
                    # pause
                    if state["process_paused"]:
                        print("Process paused")
                        while state["process_paused"]:
                            await asyncio.sleep(0.05)
            if state['process_stopped_imm']:
                print("Breaking single process")
                break

            # cut up
            if not state['process_stopped_imm']:
                myrelay.turn_off_relay(0)
                while(myrelay.read_input()[0] != 0):
                    myrelay.turn_off_relay(0)
                    await asyncio.sleep(0.1)
                    # stop imm
                    if state["process_stopped_imm"]:
                        print("Process stopped immidietly")
                        break
                    # pause
                    if state["process_paused"]:
                        print("Process paused")
                        while state["process_paused"]:
                            await asyncio.sleep(0.05)
            if state['process_stopped_imm']:
                print("Breaking single process")
                break

            # ************ milling **********
            if not state['process_stopped_imm']:
                pass
            if state['process_stopped_imm']:
                print("Breaking single process")
                break

            # ************ wait for approve ******
            if not state['process_stopped_imm']:
                if not state['autojump']:
                    # wait for approve from frontend
                    state['manual_jump_trigger'] = True
                    while state["manual_jump_trigger"]:
                        await asyncio.sleep(0.05)
                        if state['process_stopped_imm']:
                            print("Breaking single process")
                            break
            if state['process_stopped_imm']:
                print("Breaking single process")
                break


            # incerement current count states
            if not state['process_stopped_imm'] and (state['manual_jump_good'] or state['autojump']):
                state['single_total_current'] = state['single_total_current'] + 1
                state['single_batch_current'] = state['single_batch_current'] + 1
            state['manual_jump_good'] = False 
            
            if not state['process_stopped_imm']:
                if state["single_batch_current"] -1 == state['single_batch']:
                    # batch finished, wait for batch zero from frontend
                    state['batch_limit_reached'] = True
                    while state["single_batch_current"] -1 == state['single_batch']:
                        await asyncio.sleep(0.05)
                        if state["process_stopped_imm"]:
                            print("Process stopped immidietly")
                            # turn off infra
                            break
            

                    

            if state["process_stopped_after"]:
                print("Stopping process because of STOP_AFTER")
                break


    else:
        # array length mode
        
        # loop for array values
        for element in current_process_array:
            print(element)

    #...
    print("Process done")
    state["process_running"] = False
    state["process_paused"] = False
    state["process_stopped_imm"] = False
    state["process_stopped_after"] = False
    state['approve_manual_jump'] = False,
    state['manual_jump_good'] = False
    return

@app.get("/api/start_process")
async def start_process():
    if state["process_running"]:
        return {"message": "Process already running"}

    asyncio.create_task(async_start_process())  
    return {"message": "Process started successfully"}

@app.get("/api/get_state")
def get_state():
    # TODO imlement, return the current state of the backend
    pass
    
# TODO define app.onstartup process for monitoring sensor values
# ... (async monitor every 100 ms)


if __name__ == "__main__":
    import uvicorn

    myrelay.begin_relay_serial()
    myservo.begin()

    uvicorn.run(app, host="0.0.0.0", port=8000)
