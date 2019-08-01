import React, { FC } from "react";
import { StyleSheet, View, Text } from "react-native";

import Modal from "./Modal";

interface Props {
	onHide: () => void;
	visible: boolean;
}

const FeedbackModal: FC<Props> = props => {
	const { onHide, visible } = props;

	return (
		<Modal
			onHide={onHide}
			visible={visible}
			style={styles.root}
			backgroundStyle={styles.background}
		>
			<Text>Help us to improve Tripplar ♥</Text>
		</Modal>
	);
};

const styles = StyleSheet.create({
	root: {
		backgroundColor: "white",
        borderRadius: 16,
        padding: 16
	},
	background: {
		alignItems: "center",
		justifyContent: "center"
	}
});

export default FeedbackModal;
