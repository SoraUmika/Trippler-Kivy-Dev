/**
 * Login page component.
 */
import React, { FC, useState } from "react";
import { StyleSheet, View, Text } from "react-native";

import Button from "./Button";
import Input from "./Input";
import KeyboardAvoidView from "./KeyboardAvoidView";

const LoginScreen: FC<any> = props => {
	const { navigate } = props.navigation;

	const [userName, setUserName] = useState({ value: "", error: false });
	const [password, setPassword] = useState({ value: "", error: false });

	return (
		<KeyboardAvoidView style={styles.container}>
			<View style={styles.top} />
			<View style={styles.form}>
				<Input
					width="80%"
					placeholder="User name"
					onChange={e => setUserName({ value: e.nativeEvent.text, error: false })}
					textContentType="username"
					autoCompleteType="username"
					error={userName.error}
				/>
				<Input
					width="80%"
					placeholder="Password"
					onChange={e => setPassword({ value: e.nativeEvent.text, error: false })}
					textContentType="password"
					autoCompleteType="password"
					secureTextEntry
					error={password.error}
				/>
				<Button
					width="80%"
					height={50}
					text="Login"
					color="black"
					textStyle={{ color: "white" }}
					onPress={() => {
						setUserName({ value: userName.value, error: !userName.value.trim() });
						setPassword({ value: password.value, error: !password.value.trim() });
						if (!(userName.error || password.error)) {
							console.log(userName.value, password.value);
						}
					}}
				/>
			</View>
			<View style={styles.bottom}>
				<Text style={styles.signUpText} onPress={() => navigate("Signup")}>
					sign up
				</Text>
			</View>
		</KeyboardAvoidView>
	);
};

const styles = StyleSheet.create({
	container: {},
	top: {
		flex: 2
	},
	form: {
		flex: 1,
		justifyContent: "space-around",
		alignItems: "center"
	},
	bottom: {
		flex: 1,
		flexDirection: "column-reverse"
	},
	signUpText: {
		textDecorationLine: "underline",
		textAlign: "right",
		right: "10%",
		bottom: "-20%",
		marginLeft: "auto",
		fontSize: 20
	}
});

export default LoginScreen;
