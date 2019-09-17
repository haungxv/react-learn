import React from 'react'

class TodoShow extends React.Component {
    render() {
        const {listData} = this.props;
        const listShow = listData.map((item, index) => {
            return (
                <div key={item.value}>
                    <span>{index + 1}、{item.value}</span>
                    <button onClick={(e) => this.props.handleRemove(index, e)}>已完成</button>
                </div>
            )
        });
        return (
            <div>{listShow}</div>
        )
    }
}

export default TodoShow