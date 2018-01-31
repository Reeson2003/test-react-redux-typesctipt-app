import * as React from 'react';

export interface TextProps {
    text: string,
    onClick: () => void
}

const Text = (props: TextProps) => (
    <h3 onClick={props.onClick}>
        {props.text}
    </h3>
);

export default Text;