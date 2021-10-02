import axios from "axios";

const SET_ITEMS = "SET_ITEMS";

const setItems = (items) => ({
	type: SET_ITEMS,
	items,
});

export const fetchItems = () => {
	return async (dispatch) => {
		try {
			const { data: items } = await axios.get("/api/items");
			dispatch(setItems(items));
		} catch (error) {
			console.log("Error fetching store items.");
		}
	};
};

const initialState = {
	all: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case SET_ITEMS:
			return { ...state, all: action.items };
		default:
			return state;
	}
}
