import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class TodoItems extends Component {
    render() {
        const {title, handleDelete, handleEdit} = this.props;
        return (
            <li className='list-group-item text-capitalize d-flex justify-content-between my-2'>
                <h6>{title}</h6>
                <div>
                    <span className='text-success mx-2' 
                    style={{"cursor": "pointer"}}
                    onClick={handleEdit}>
                        <FontAwesomeIcon icon='pen' />
                    </span>
                    <span className='text-danger mx-2' 
                    style={{"cursor": "pointer"}}
                    onClick={handleDelete}>
                        <FontAwesomeIcon icon='trash' />
                    </span>
                </div>
            </li>
        )
    }
}
