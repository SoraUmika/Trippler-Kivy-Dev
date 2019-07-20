import React, {Component} from "react";
import Svg, {Path, SvgProps} from "react-native-svg";

export default class ArrowDownward extends Component<SvgProps> {
    
    shouldComponentUpdate() {
        return false;
    }
    
    render() {
        return (
            <Svg width={24} height={24} viewBox="0 0 24 24" {...this.props}>
                <Path fill="none" d="M0 0h24v24H0V0z" />
                <Path d="M11 5v11.17l-4.88-4.88c-.39-.39-1.03-.39-1.42 0-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L13 16.17V5c0-.55-.45-1-1-1s-1 .45-1 1z" />
            </Svg >
        )
    }

}

