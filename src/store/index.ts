import {combineReducers} from "redux";
import CounterReducer from "../components/counter/CounterReducer";
import TimerReducer from "../components/timer/TimerReducer";
import {CounterStore} from "../components/counter/CounterStore";
import {TimerStore} from "../components/timer/TimerStore";

export default combineReducers({
    counterStore: CounterReducer,
    timerStore: TimerReducer
})

export interface Store {
    counterStore: CounterStore;
    timerStore: TimerStore;
}
