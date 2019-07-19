import React, { FC } from "react";
import { View, StyleSheet, Text } from "react-native";

import Button from "./Button";
import BookmarkBorder from "../svg/BookmarkBorder";

const MainActionBar: FC = props => {
	return (
		<View style={styles.root}>
			<View style={styles.subAction} />
			<View style={styles.mainAction}>
				<Button height="100%" width={60} color="white" >
                    <BookmarkBorder/>
                </Button>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	root: {
		flex: 1,
		flexDirection: "row",
		padding: 16,
		paddingBottom: 0
	},
	subAction: {
		flex: 1
	},
	mainAction: {
		flex: 1,
		// backgroundColor: "red",
		flexDirection: "row-reverse",
		alignItems: "center"
	}
});

export default MainActionBar;
