import React from 'react';
import TodoHeader from './todoHeader.js'
import TodoInput from './todoInput.js'
import TodoShow from './todoShow.js'

//redux相关
import {handleSubmitItem, handleDeleteItem} from '../actions/index.js'
import {connect} from 'react-redux'

//类型检测
import PropTypes from 'prop-types'


class ToDo extends React.Component {

    render() {
        const {listData, handleSubmit, handleRemove} = this.props;
        return (
            <div className="App">
                <TodoHeader/>
                <TodoInput handleSubmit={handleSubmit}/>
                <TodoShow listData={listData} handleRemove={handleRemove}/>
            </div>
        )
    };
}

//类型检测
ToDo.propTypes = {
    listData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            value: PropTypes.string.isRequired
        })
    ).isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleRemove: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {
        listData: state.listData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleSubmit: (inputValue) => dispatch(handleSubmitItem(inputValue)),
        handleRemove: (index) => dispatch(handleDeleteItem(index)),
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(ToDo);


export default App;



