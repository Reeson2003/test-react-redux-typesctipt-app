import * as React from 'react';
import './App.css';
import Text from './components/Text';
import TextInput from './components/TextInput';
import {connect} from "react-redux";

interface AppProps {
    text: string,
    onSetText: () => void,
    onClearText: () => void
}

class App extends React.Component<AppProps> {
    render() {
        return (
            <div className="App">
                <div className={'text'}>
                    <Text text={this.props.text} onClick={this.props.onClearText}/>
                </div>
                <div className={'input'}>
                    <TextInput onSubmit={this.props.onSetText}/>
                </div>
            </div>
        );
    }
}

interface State {
    text: string
}

type Dispatch = (action: Actions) => void;

interface StateFromProps {
    text: string
}

interface DispatchFromProps {
    onSetText: (text: string) => void,
    onClearText: () => void
}

const mapStateToProps = (state: State): StateFromProps => {
    return {
        text: state.text
    };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchFromProps => {
    return {
        onSetText: (text) => {
            dispatch({
                type: 'SET_TEXT',
                text: text
            });
        },
        onClearText: () => {
            dispatch({
                type: 'CLEAR_TEXT'
            });
        }
    }
};

export default connect<StateFromProps, DispatchFromProps, void>(mapStateToProps, mapDispatchToProps)(App);

type Actions = SetTextAction | ClearTextAction;

type SetTextAction = {
    type: 'SET_TEXT',
    text: string
}

type ClearTextAction = {
    type: 'CLEAR_TEXT'
}

const initialStore = {
    text: ''
};

const textReducer = (store = initialStore, action: Actions) => {
    if (action.type === 'SET_TEXT')
        return {
            text: action.text
        };
    else if (action.type = 'CLEAR_TEXT')
        return {
            text: ''
        };
    else
        return store;
};

export const reducer = textReducer;