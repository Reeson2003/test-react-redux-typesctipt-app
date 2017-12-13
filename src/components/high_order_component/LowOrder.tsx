import * as React from "react";
import HighOrderComponent from "./HighOrder";

interface Props {
    text: string;
}

interface State {
    count: number;
}

export class LowOrder extends React.Component<Props, State> {
    constructor(props:any) {
        super(props);
        this.state = {
            count:0
        }
    }

    increment = ()=>{
        this.setState({
            count: this.state.count +1
        })
    }

    render() {
        return <h1 onClick={this.increment}>LOW ORDER COMPONENT {this.props.text} {this.state.count}</h1>
    }
}

const Wrapped = HighOrderComponent(LowOrder);

export default Wrapped;