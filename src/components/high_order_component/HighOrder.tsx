import * as React from "react";

import "./HighOrder.css"

export interface InjectedProps {
    style?:React.CSSProperties
}

const HighOrderComponent = <TOriginalProps extends{}>(Component: (React.ComponentClass<TOriginalProps & InjectedProps>))=> {
    const result = class extends React.Component<TOriginalProps & InjectedProps> {
        static displayName = `Wrapped(${Component.name})`

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