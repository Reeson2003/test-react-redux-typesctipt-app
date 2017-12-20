import * as React from "react";

const asyncWrapped = <Props extends {}, State extends {}>(Component: React.ComponentClass<Props>) => {
    return class AsyncWrapped extends React.Component<Props, State> {
        componentWillMount() {

        }

        render() {
            console.log("ASYNC WRAPPED " + Component.name);
            return <Component {...this.props}/>;
        }
    }
};

export default asyncWrapped;