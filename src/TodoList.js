import React, { Component, Fragment } from 'react';
import './style.css';
import TodoItem from './TodoItem.js';

class TodoList extends Component{
	constructor(props) {
		super(props);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handlekeyUp = this.handlekeyUp.bind(this);
		this.handleItemClick = this.handleItemClick.bind(this);


		this.state = {
			inputValue: '',
			list: []
		}
	}
	handleInputChange(e) {
		this.setState({
			inputValue: e.target.value
		})
	}

	handlekeyUp(e) {
		//console.log(e.keyCode);
		if (e.keyCode === 13 && e.target.value !== '') {
			const list = [...this.state.list, this.state.inputValue];
			this.setState({
				list: list,
				inputValue: ''

			})
		}
	}

	handleItemClick (index) {
		const list = [...this.state.list];
		list.splice(index,1);
		this.setState({
			list: list
		})
		//alert(index);
	}

	getListItems() {
		//父子组件的概念
		//父组件通过属性的形式向子组件传递值
		return 	this.state.list.map((value, index) => {
			return( 
				<TodoItem 
					content={value} 
					key={index}
					index={index}
					deleteFunction={this.handleItemClick}
				/>
			)
		})
	}
	render() {
		return (
			<Fragment>
				<label htmlFor='myinput'> Please input: </label>
				<input 
					id= 'myinput'
					className = 'input'
					value = {this.state.inputValue}
					onChange = {this.handleInputChange}
					onKeyUp = {this.handlekeyUp}
				/>
				<ul>
				{this.getListItems()}
				</ul>
				

			</Fragment>
		);
	}
}

export default TodoList;