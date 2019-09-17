import {HANDLE_SUBMIT, HANDLE_DELETE, INIT_LIST} from "../actions/types.js";

const defaultData = {
    listData: []
};

const todos = (state = defaultData, action) => {
    const listData = state.listData;
    switch (action.type) {
        case HANDLE_SUBMIT:
            return {
                listData: [...listData, {
                    id: listData.length + 1,
                    value: action.inputValue
                }]
            };
        case HANDLE_DELETE:
            return {
                listData: listData.filter((item, index) => {
                    return action.index !== index
                })
            };
        case INIT_LIST:
            let newState = JSON.parse(JSON.stringify(state));
            newState.listData = action.data || [];
            return newState;
        default:
            return state
    }
};
export default todos