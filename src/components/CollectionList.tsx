/**
 * List of collection items, displayed in collection section of main page.
 * 
 * TODO auto reads the collections from store.
 * TODO edge transparency.
 */
import React, { Component } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import CollectionItem from "./CollectionItem";

export default class CollectionList extends Component {
	render() {
		return (
			<ScrollView style={styles.container} bounces indicatorStyle="white">
				<CollectionItem businessId=":)"/>
				<CollectionItem businessId="hello"/>
				<CollectionItem businessId="test"/>
				<CollectionItem businessId=":)"/>
				<CollectionItem businessId="hello"/>
				<CollectionItem businessId="test"/>
				<CollectionItem businessId=":)"/>
				<CollectionItem businessId="hello"/>
				<CollectionItem businessId="test"/>
				<CollectionItem businessId=":)"/>
				<CollectionItem businessId="hello"/>
				<CollectionItem businessId="test"/>
				<CollectionItem businessId=":)"/>
				<CollectionItem businessId="hello"/>
				<CollectionItem businessId="test"/>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
