import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class TodoInput extends Component {
    render() {
        const {item, handleChange, handleSubmit, editItem} = this.props;
        return (
            <div className='card card-body my-3'>
                <form onSubmit={handleSubmit}>
                    <div className='input-group'>
                        <div className='input-group-prepend'>
                            <div className={editItem ? 'input-group-text text-white bg-success' 
                            :'input-group-text text-white bg-primary'}>
                                <span><FontAwesomeIcon icon='book' /></span>
                            </div>
                        </div>
                        <input type='text'
                        placeholder='Enter a To-do...' 
                        className='form-control'
                        value={item}
                        onChange={handleChange} />
                    </div>
                    <button type='submit' 
                    className={editItem ? 'btn btn-block btn-success mt-3' 
                    :'btn btn-block btn-primary mt-3'}
                    >{editItem ? 'Edit To-do' : 'Add To-do'}</button>
                </form>
            </div>
        )
    }
}
