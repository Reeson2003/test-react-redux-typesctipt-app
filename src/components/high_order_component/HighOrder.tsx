import * as React from "react";

import "./HighOrder.css"

const HighOrderComponent = <T extends{}>(Component: (React.ComponentClass<T>))=> {
    const result = class extends React.Component<T> {
        constructor(props:any) {
            super(props);
        }

        render() {
            console.log("HIGH ORDER COMPONENT");
            return <div className={"highOrderComponent"}>
                <Component {...this.props} {...this.state}/>
            </div>
        }
    }
    return result;
}

export default HighOrderComponent;