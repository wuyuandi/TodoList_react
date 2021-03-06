import React from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';

const TodoListUI = (props) => {
	return	(
		<div>
		<div style={{marginTop: '10px', marginLeft: '10px'}}>
		<Input 
			value={props.inputValue} 
			placeholder='todo info'
			onChange={props.handleInputChange}
			style={{width: '300px', marginRight: '10px'}}/>
		


		<Button type="primary" onClick={props.handleBtnClick}>Submit</Button>
		<List
			style={{marginTop: '10px', width:'300px'}}
  			bordered
  			dataSource={props.list}
  			renderItem={(item, index) => (
    		<List.Item onClick={() => {props.handleItemDelete(index)}}>
    			 {item}
    		</List.Item>
  			)}
		/>

		</div>
		</div>
	)


}


export default TodoListUI;