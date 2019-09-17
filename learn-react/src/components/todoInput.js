import React from 'react'

class TodoInput extends React.Component {
    constructor(props){
        super(props);
        this.state={
            value:'',
        }
    }

    render() {
        return (
            <form>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <input type="button" value="提交" onClick={this.handleSubmit}/>
            </form>
        )
    };

    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        })
    };
    handleSubmit = () => {
        this.props.handleSubmit(this.state.value);
        this.setState({
            value: '',
        })
    }
}

export default TodoInput