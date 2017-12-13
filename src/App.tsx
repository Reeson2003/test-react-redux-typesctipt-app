import * as React from 'react';
import './App.css';
import Counter from "./components/counter/Counter";
import Timer from "./components/timer/Timer";
import {LowOrder, default as Wrapped} from "./components/high_order_component/LowOrder";


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <LowOrder text={"AAA"}/>
                <Wrapped text={"BBB"} style={{background: "red"}}/>
                <Counter/>
                <Timer/>
                <Counter/>
            </div>
        );
    }
}

export default App;
