import React, { Component } from 'react';

class TodoItem extends Component {
	constructor(props) {
		super(props);
		this.handleItemClick = this.handleItemClick.bind(this)
	}

	handleItemClick() {
	//改变父组件中的list数据
	//子组件要和父组件通信，需要父组件传递过来的方法(function）
		const { deleteFunction, index} = this.props;
		deleteFunction(index);
	}

	render() {
		const { content } = this.props;
		return <li onClick={this.handleItemClick}>{content}</li>
	}
}

export default TodoItem;