import CounterActions from "./CounterActions";
import {AnyAction} from "redux";
import {CounterStore, initialCounterStore} from "./CounterStore";

const CounterReducer = (state: CounterStore = initialCounterStore, action: AnyAction) => {
    switch (action.type) {
        case CounterActions.ADD:
            return {
                count: state.count + action.payload
            }
    }
    return state;
};

export default CounterReducer