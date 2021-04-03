import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {
    render() {
        let { label,
              id,
              onDeleted,
              onToggleImportant,
              onToggleDone,
              important,
              done } = this.props;
        let classNames = '';

        if (important) {
            classNames += ' mainLine'
        } else {
            classNames += ''
        }

        if (done) {
            classNames += ' done'
        } else {
            classNames += ''
        }

        return (
            <li>
                <span
                    key={id}
                    className={classNames}
                    onClick={onToggleDone} >
                    {label}
                </span>
                <span className="btn-group">
                    <button onClick={onDeleted} className="btn btn-outline-danger">&times;</button>
                    <button onClick={onToggleImportant} className="btn btn-outline-warning">!</button>
                </span>
            </li>
        );
    }
}