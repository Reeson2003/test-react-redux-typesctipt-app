import * as React from 'react';

import "./Counter.css";
import {CSSProperties} from "react";
import {connect} from "react-redux";
import CounterActions from "./CounterActions";
import {draggable} from "../frame/Frame";
import {Store} from "../../store";

interface State {
    counterNumberStyle: CSSProperties;
    animationSpeed: number;
    logoStyle: CSSProperties;
}

interface Props {
    count: number;
    initPosX: number;
    initPosY: number;
    width: number;
    height: number;
    addCount:(delta:number)=>{};
}

const logo = require('../../logo.svg');

class Counter extends React.Component<Props & any, State> {
    state = {
        counterNumberStyle: {
            color: "#7f7"
        },
        animationSpeed: 0,
        logoStyle: (speed: number) => {
            return {
                animation: 'App-logo-spin-forward infinite ' + speed + 's linear'
            }
        }
    };

    increment = () => {
        this.changeCounter(1);
    };

    decrement = () => {
        this.changeCounter(-1);
    };

    changeCounter(delta: number) {
        const current = (this.props.count) < 0 ? 0 : this.props.count;
        this.setState({
            counterNumberStyle: {
                color: current < 10 ? "#7f7" : "#f77"
            }
        });
        this.props.addCount(delta);
    };

    startCountDown = () => {
        const id = setInterval(() => {
            if (this.props.count > 1) {
                this.decrement();
                this.startLogoRotation()
            }
            else {
                this.decrement();
                clearInterval(id);
                this.stopLogoRotation();
            }
        }, 1000)
    };

    startLogoRotation = () => {
        this.setState({
            animationSpeed: 1
        });
    };

    stopLogoRotation = () => {
        this.setState({
            animationSpeed: 0
        });
    };

    render() {
        return (
            <div className={"counter"}>
                <img src={logo} className="App-logo" alt="logo"
                     style={this.state.logoStyle(this.state.animationSpeed)}/>
                <h2 className={"counterHeader"}>Counter</h2>
                <div className={"buttonsHolder"}>
                    <button onClick={this.decrement} className={'minusButton'}>-</button>
                    <span className={"counterHolder"} style={this.state.counterNumberStyle}>{this.props.count}</span>
                    <button onClick={this.increment} className={'plusButton'}>+</button>
                </div>
                <button onClick={this.startCountDown} className={"startButton"}>Start</button>
            </div>
        )
    }
}

const mapStateToProps = (state: Store) => {
    return {
        count: state.counterStore.count
    }
};

const enhancer = (dispatch: Function) => {
    return {
        addCount(delta: number) {
            dispatch({type: CounterActions.ADD, payload: delta})
        }
    }
};

const counter = draggable({initPosX: 200, initPosY: 300, width: 250, height:182, zIndex: 0})(Counter);

export default connect(mapStateToProps, enhancer)(counter);