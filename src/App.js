import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoInputs from './components/TodoInput';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faBook} from '@fortawesome/free-solid-svg-icons';
import {faPen} from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

library.add(faBook);
library.add(faPen);
library.add(faTrash);


export default class App extends Component {
  state = {
    items: [],
    id: Date.now(),
    item: '',
    editItem: false
  }
  handleChange = e => {
    this.setState({
      item: e.target.value
    })
    //console.log(this.state.item)
  }
  handleSubmit = e => {
    e.preventDefault()
    const newItem = {
      id: this.state.id,
      item: this.state.item
    }
    const updatedItem = [...this.state.items, newItem]
    //console.log(newItem)
    this.setState({
      items: updatedItem,
      id: Date.now(),
      item: '',
      editItem: false
    })
  }
  handleClear = e => {
    e.preventDefault();
    this.setState({
      items: []
    })
  }
  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    })
  }
  handleEdit = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const findItems = this.state.items.find(item => item.id === id);
    this.setState({
      items: filteredItems,
      id:id,
      item: findItems.item,
      editItem: true
    })
  }
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-10 col-md-8 mx-auto mt-4'>
            <h3 className='text-center'>To-do Input
            </h3>
            <TodoInputs item={this.state.item} 
            handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit} 
            editItem = {this.state.editItem}/>
            <TodoList items={this.state.items} 
            handleClear={this.handleClear} 
            handleDelete={this.handleDelete} 
            handleEdit={this.handleEdit} />
          </div>
        </div>
      </div>
    )
  }
}
