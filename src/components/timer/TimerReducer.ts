import {initialTimerStore, TimerStore} from "./TimerStore";
import {AnyAction} from "redux";
import TimerActions from "./TimerActions";


const TimerReducer = (state: TimerStore = initialTimerStore, action: AnyAction) => {
    if (action.type === TimerActions.SET_CURRENT_TIME)
        return {
            currentTime: action.payload
        };
    return state;
};

export default TimerReducer