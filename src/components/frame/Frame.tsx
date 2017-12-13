import * as React from 'react';

import './Frame.css'

interface ExternalProps {
    style?: React.CSSProperties;
}

export interface InjectedProps {
    posX: number;
    posY: number;
    mouseX?: number;
    mouseY?: number;
    isMouseDown: boolean;
}

interface Options {
    initPosX: number;
    initPosY: number;
    width: number;
    height: number;
    zIndex: number;
}

interface State {
    posX: number;
    posY: number;
    width: number;
    height: number;
    mouseX?: number;
    mouseY?: number;
    zIndex: number;
    isMouseDown: boolean;
}

const initialState: State = {
    posX: 100,
    posY: 100,
    width: 300,
    height: 300,
    zIndex: 0,
    isMouseDown: false
};

const _initPos: Options = {
    initPosX: 100,
    initPosY: 50,
    width: 300,
    height: 300,
    zIndex: 0
};

export const draggable = (initPos: Options = _initPos) =>
    <TOriginalProps extends {}>(Component: (React.ComponentClass<TOriginalProps & InjectedProps>
        | React.StatelessComponent<TOriginalProps & InjectedProps>)) => {
        type ResultProps = TOriginalProps & ExternalProps;
        const result = class Frame extends React.Component<ResultProps, State> {
            static displayName = `Draggable(${Component.displayName || Component.name})`;

            constructor(props: any) {
                super(props);
                if (initPos) {
                    this.state = {
                        posX: initPos.initPosX,
                        posY: initPos.initPosY,
                        width: initPos.width,
                        height: initPos.height,
                        zIndex: initPos.zIndex,
                        isMouseDown: false
                    };
                } else {
                    this.state = initialState;
                }
            }

            handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
                this.setState({
                    posX: this.state.posX,
                    posY: this.state.posY,
                    mouseX: e.pageX,
                    mouseY: e.pageY,
                    width: this.state.width,
                    height: this.state.height,
                    isMouseDown: true,
                    zIndex: this.state.zIndex + 1
                });
            }

            handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
                if (this.state.mouseX && this.state.mouseY) {
                    if (this.state.isMouseDown) {
                        this.setState({
                            posX: this.state.posX + e.pageX - this.state.mouseX,
                            posY: this.state.posY + e.pageY - this.state.mouseY,
                            mouseX: e.pageX,
                            mouseY: e.pageY,
                            width: this.state.width,
                            height: this.state.height,
                            isMouseDown: this.state.isMouseDown
                        });
                    }
                }
            }

            handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
                this.setState({
                    posX: this.state.posX,
                    posY: this.state.posY,
                    isMouseDown: false
                });
            };

            render(): JSX.Element {
                return <div className={'farme'} style={{
                    width: this.state.width,
                    height: this.state.height,
                    position: 'fixed',
                    left: this.state.posX,
                    top: this.state.posY,
                    zIndex: this.state.zIndex
                }}>
                    <div className={'frameHeader'}
                         onMouseDown={this.handleMouseDown}
                         onMouseMove={this.handleMouseMove}
                         onMouseUp={this.handleMouseUp}
                         onMouseLeave={this.handleMouseUp}>
                    </div>
                    <div className={'frameContent'}>
                        <Component {...this.props} {...this.state} />
                    </div>
                </div>
            }
        };
        return result;
    };
