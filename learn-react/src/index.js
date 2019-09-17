import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';

//定义store
import {createStore} from 'redux';
import rootReducer from './reducers/index.js'

//根据reducer函数通过createStore()创建store
const store = createStore(rootReducer);

ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
);


//简单计数器
// import React, { Component } from 'react'
// import PropTypes from 'prop-types'   //类型检查
// import ReactDOM from 'react-dom'
// import { createStore } from 'redux'
// import { Provider, connect } from 'react-redux'
//
// // 定义counter组件
// class Counter extends Component {
//     render() {
//         const { value, onIncreaseClick } = this.props;
//         return (
//             <div>
//                 <span>{value}</span>
//                 <button onClick={onIncreaseClick}> +1</button>
//             </div>
//         )
//     }
// }
// //对Counter组件接受的props进行类型检查
// Counter.propTypes = {
//     value: PropTypes.number.isRequired,
//     onIncreaseClick: PropTypes.func.isRequired
// };
//
// // action
// const increaseAction = { type: 'increase' };
//
// // reducer   基于原有state根据action得到新的state
// function counter(state = { count: 1 }, action) {
//     const count = state.count;
//     switch (action.type) {
//         case 'increase':
//             return { count: count + 1 };
//         default:
//             return state
//     }
// }
//
// //store
// // 根据reducer函数通过createStore()创建store
// const store = createStore(counter);
//
// //  将state映射到Counter组件的props
// function mapStateToProps(state) {
//     return {
//         value: state.count
//     }
// }
//
// //  将action映射到Counter组件的props
// //  传入dispatch，dispatch中传入的事action
// function mapDispatchToProps(dispatch) {
//     return {
//         onIncreaseClick: () => dispatch(increaseAction)
//     }
// }
//
// //  传入上面两个函数参数，将Counter组件变为App组件
// const App = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Counter);
//
// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// );
