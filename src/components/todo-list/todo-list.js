import React, { Component } from 'react';
import TodoListItem from "../todo-list-item";
import './todo-list.css';

export default class TodoList extends Component {
    getItems() {
        let { todos, onDeleted, onToggleImportant, onToggleDone } = this.props;

        return todos.map(item => {
            let { id, ...itemProps } = item;

            return (
                <TodoListItem
                    key={id}
                    {...itemProps}
                    onDeleted={() => onDeleted(id)}
                    onToggleDone={() => onToggleDone(id)}
                    onToggleImportant={() => onToggleImportant(id)} />
            );
        });
    }

    render() {
        let result = this.getItems();

        return (
            <ul>{result}</ul>
        );
    }
}