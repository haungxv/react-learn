import {HANDLE_DELETE, HANDLE_SUBMIT, INIT_LIST} from "./types";


//提交
export const handleSubmitItem = (inputValue) => ({
    type: HANDLE_SUBMIT,
    inputValue
});

//删除
export const handleDeleteItem = (index) => ({
    type: HANDLE_DELETE,
    index
});

//初始化数据
export const initListAction = (data) => ({
    type: INIT_LIST,
    data
});