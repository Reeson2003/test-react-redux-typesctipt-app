import * as React from 'react';
import {Component} from "react";

export default class TextInput extends Component<TextInputProps> {
    private textInput: HTMLInputElement;

    render() {
        return (
            <div>
                <input type="text" ref={(el: HTMLInputElement) => {
                    this.textInput = el
                }}/>
                <button onClick={() => {
                    this.props.onSubmit(this.textInput.value);
                }}>Submit
                </button>
            </div>
        );
    };
};

export interface TextInputProps {
    onSubmit: (text: string) => void;
}