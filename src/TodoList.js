import React, { Component } from 'react';
//import axios from 'axios';
import 'antd/dist/antd.css';
import store from './store/index.js';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getInitList } from './store/actionCreators';
import TodoListUI from './TodoListUI';
//import { List } from 'antd';


class TodoList extends Component{
	constructor(props) {
		super(props);
		this.state = store.getState();
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleItemDelete = this.handleItemDelete.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.handleStoreChange = this.handleStoreChange.bind(this);

		store.subscribe(this.handleStoreChange);
		
	}

	render() {
		return (
			
			<TodoListUI 
			inputValue={this.state.inputValue}
			list={this.state.list}
			handleInputChange={this.handleInputChange}
			handleBtnClick={this.handleBtnClick}
			handleItemDelete={this.handleItemDelete}

			/>

		)
	}
	handleInputChange(e) {
		const action = getInputChangeAction(e.target.value);
		store.dispatch(action);
	}

	handleItemDelete(index) {
		
		const action = getDeleteItemAction(index);
		store.dispatch(action);
	}

	//get new data from store and set it down
	handleStoreChange() {
		this.setState(store.getState()); 
		
	}
	handleBtnClick() {
		const action = getAddItemAction();
		store.dispatch(action);
	}

	componentDidMount() {
		const action = getInitList();
		//console.log(action);
		store.dispatch(action);
		
		
	}
}

export default TodoList;