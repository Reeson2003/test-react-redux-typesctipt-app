import * as React from "react";
import {connect} from "react-redux";
import {TimerStore} from "./TimerStore";
import {Store} from "../../store";
import {draggable} from "../frame/Frame";
import TimerActions from "./TimerActions";
import "./Timer.css"


class Timer extends React.Component<TimerStore & any> {
    setDate = ()=>{
       this.props.setCurrentDate(new Date());
    };

    componentDidMount() {
        setInterval(this.setDate, 1000);
    }

    render() {
        return <div className="timer">{this.props.currentTime.toLocaleTimeString()}</div>
    }
}

const mapStateToProps = (state: Store) => {
    return {
        currentTime: state.timerStore.currentTime
    }
};

const enhancer = (dispatch:Function)=>{
    return {
        setCurrentDate(date:Date) {
            dispatch({type: TimerActions.SET_CURRENT_TIME, payload: date})
        }
    }
};

const draggableTimer = draggable()(Timer);

export default connect(mapStateToProps, enhancer)(draggableTimer);