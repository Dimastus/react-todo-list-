import React, { Component } from 'react';
import './todo-header.css';

export default class TodoHeader extends Component {
    render() {
        let { toDo, done } = this.props;

        return (
            <div className='block-progress-task'>
                <span className="tasks-in-progress">{ toDo } to do,</span>
                <span className="tasks-done"> { done } done</span>
            </div>
        );
    }
}