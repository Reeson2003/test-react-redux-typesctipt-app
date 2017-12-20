import * as React from "react"
import asyncWrapped from "./AsyncWrapper";

interface State {
    text: string;
}

const randomInteger = (min: number, max: number) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
};

const delay = (ms: number) => {
    return new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            return resolve("AAA")
        }, ms);
    });
};

const asyncAwait = async (func: (text: string) => void) => {
    console.log("Knock, knock!");
    func("Knock, knock!");
    console.log(await delay(randomInteger(1000, 2000)));
    console.log("Who's there?");
    func("Who's there?");
    console.log(await delay(randomInteger(1000, 2000)));
    console.log("async/await!");
    func("async/await!");
};

class MockComponent extends React.Component<any, State> {
    state = {
        text: "NNNN"
    };

    changeState = () => {
        asyncAwait((text: string) => {
            this.setState({
                text: text
            })
        });
    };

    render() {
        return <div onClick={this.changeState}>MOCK {this.state.text}</div>
    }
}

export default asyncWrapped(MockComponent);