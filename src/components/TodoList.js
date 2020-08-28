import React, { Component } from 'react';
import TodoItems from './TodoItems';

export default class TodoList extends Component {
    render() {
        const {items, handleClear, handleDelete, handleEdit} = this.props;
        return (
            <ul className='list-group my-5'>
                <h3 className='text-center mb-2'>To-do List</h3>
                {items.map(item => {
                    return <TodoItems handleDelete={() => handleDelete(item.id)} handleEdit={() => handleEdit(item.id)} key={item.id} title={item.item} /> 
                })}
                <button type='submit' 
                className='btn btn-block btn-danger mt-4'
                onClick={handleClear}>Clear List</button>
            </ul>
        )
    }
}
