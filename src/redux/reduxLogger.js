export default function reduxLogger({ getState }) {
	return next => action => {
		const prevState = getState();
		const returnValue = next(action);
		const nextState = getState();

		console.log("-".repeat(40));
		console.log(`${action.type} payload=${action.payload}`);
		for (let stateGroup in prevState) {
			if (prevState[stateGroup] != nextState[stateGroup]) {
				for (let state in prevState[stateGroup]) {
					if (prevState[stateGroup][state] != nextState[stateGroup][state]) {
						console.log(
							`${stateGroup}.${state}\t${prevState[stateGroup][state]} -> ${nextState[stateGroup][state]}`
						);
					}
				}
			}
		}

		return returnValue;
	};
}
