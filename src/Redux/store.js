import thunkMiddleware from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import data from "../data";
import { includes } from "lodash";

const initalState = {
	usersData: [],
	isLoading: false,
	isError: false,
	errorMsg: "",
};

function reducer(state = initalState, action) {
	switch (action.type) {
		case "REQUEST_DATA":
			return {
				...state,
				isLoading: true,
				isError: false,
				errorMsg: "",
			};
		case "SUCCESS_DATA":
			return {
				...state,
				usersData: action.usersData,
				isLoading: false,
				isError: action.isError,
				errorMsg: action.errorMsg,
			};
		case "REQUEST_SEARCH":
			return {
				...state,
				isLoading: true,
				isError: false,
				errorMsg: "",
			};
		case "SUCCESS_SEARCH":
			return {
				...state,
				usersData: action.usersData,
				isLoading: false,
				isError: action.isError,
				errorMsg: action.errorMsg,
			};
		default:
			return state;
	}
}

export const requestData = (num) => (dispatch) => {
	dispatch({
		type: "REQUEST_DATA",
		usersData: [],
		isLoading: true,
		isError: false,
		errorMsg: "",
	});
	try {
		const result = data.slice(0, num);
		dispatch({
			type: "SUCCESS_DATA",
			usersData: result,
			isLoading: false,
			isError: false,
			errorMsg: "",
		});
	} catch (e) {
		dispatch({
			type: "SUCCESS_DATA",
			usersData: [],
			isError: true,
			errorMsg: e,
		});
	}
};
export const searchData = (value) => (dispatch) => {
	dispatch({
		type: "REQUEST_SEARCH",
		usersData: [],
		isLoading: true,
		isError: false,
		errorMsg: "",
	});
	try {
		const result = data.slice(0, 9).filter((item) => item.name.includes(value));
		dispatch({
			type: "SUCCESS_SEARCH",
			usersData: result,
			isLoading: false,
			isError: false,
			errorMsg: "",
		});
	} catch (e) {
		dispatch({
			type: "SUCCESS_SEARCH",
			usersData: [],
			isError: true,
			errorMsg: e,
		});
	}
};

export const store = createStore(reducer, applyMiddleware(thunkMiddleware));
