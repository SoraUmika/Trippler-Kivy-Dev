/**
 * Button component.
 *
 * @precondition The height prop >= 8.
 *
 * @param {string} color The color of the button.
 * @param {number|string} [width] The width of the button.
 * @param {number} height The height of the button.
 * @param {function} [onPress] The callback when pressed.
 * @param {StyleProp<ViewStyle>} [style] The style applied to the button.
 * @param {StyleProp<ViewStyle>} [contentStyle] The style of the View that contains the content.
 */
import React, { Component } from "react";
import { StyleSheet, View, StyleProp, ViewStyle } from "react-native";

import { objectsEqual } from "../util";

interface Props {
	color: string;
	width?: number | string;
	height: number | string;
	onPress?: Function;
	style?: StyleProp<ViewStyle>;
	contentStyle?: StyleProp<ViewStyle>;
}

interface State {
	down: boolean;
}

export default class Button_ extends Component<Props, State> {
	state: State = {
		down: false
	};

	onTouchDown = () => {
		this.setState({ down: true });
		this.props.onPress && this.props.onPress();
	};

	onTouchUp = () => {
		this.setState({ down: false });
	};

	shouldComponentUpdate(nextProps: Props, nextState: State) {
		return nextState.down !== this.state.down || !objectsEqual(nextProps, this.props);
	}

	render() {
		const { color, width, height, style, children, contentStyle } = this.props;
		const { down } = this.state;
		return (
			<View
				style={[style, { width: width, height: height, flex: 0 }]}
				onTouchStart={this.onTouchDown}
				onTouchEnd={this.onTouchUp}
			>
				<View
					style={{
						...styles.button,
						...contentStyle as object,
						backgroundColor: color,
						flex: 1,
						top: down ? 8 : 0
					}}
				>
					<View style={styles.textContainer}>{children}</View>
				</View>
				<View
					style={{
						...styles.shadow,
						backgroundColor: color,
						opacity: 0.2
					}}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		borderRadius: 8,
		zIndex: 2
	},
	textContainer: {
		flex: 1,
		justifyContent: "center"
	},
	shadow: {
		height: 16,
		top: -8,
		zIndex: 1,
		borderBottomLeftRadius: 8,
		borderBottomRightRadius: 8
	}
});
