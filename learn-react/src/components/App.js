// import React from 'react';
// import TodoHeader from './todoHeader.js'
// import TodoInput from './todoInput.js'
// import TodoShow from './todoShow.js'
//
// import store from '../store/index.js'
// import {initListAction, handleDeleteItem, handleSubmitItem} from '../actions/index.js'
// import {HANDLE_SUBMIT} from "../actions/types";
//
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = store.getState();
//         store.subscribe(this.handleStoreChange);
//     }
//
//     render() {
//         return (
//             <div className="App">
//                 <TodoHeader/>
//                 <TodoInput handleSubmit={this.handleSubmit}/>
//                 <TodoShow listData={this.state.listData} handleRemove={this.handleRemove}/>
//             </div>
//         )
//     };
//
//     componentDidMount() {
//         let action = initListAction();
//         store.dispatch(action);
//     }
//
//     componentWillUnmount() {
//         //卸载
//     }
//
//     handleStoreChange = () => {
//         this.setState(store.getState());
//     };
//
//     handleSubmit = (value) => {
//         const action = {
//             type: HANDLE_SUBMIT,
//             inputValue: value,
//         };
//         store.dispatch(action);
//
//         // this.setState({
//         //     listData: [...this.state.listData, {
//         //         id: this.state.listData.length + 1,
//         //         value: value,
//         //     }],
//         // });
//     };
//
//     handleRemove = (id, e) => {
//         this.setState({
//             listData: this.state.listData.filter((item, index) => {
//                 return id !== index
//             }),
//         })
//     }
// }
//
// export default App;



