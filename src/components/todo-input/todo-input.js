import React, { Component } from 'react';
import './todo-input.css';

export default class TodoInput extends Component {
    constructor() {
        super();
        this.state = { label: '' };
    }

    onLabelChange(e) {
        let { onSearch } = this.props;

        this.setState({
            label: e.target.value
        }, () => {
            onSearch(this.state.label.toLowerCase());
        });
    }

    render() {
        let buttons = [
            { name: 'all', label: 'All' },
            { name: 'active', label: 'Active' },
            { name: 'done', label: 'Done' },
        ];
        let { onFilterChange } = this.props;

        return (
            <div className="block-item-search">
                <input
                    type="text"
                    name="todo-input"
                    id="todo-input"
                    placeholder="enter item for search"
                    className="todo-input"
                    onChange={this.onLabelChange.bind(this)} />
                <span className="btn-group mr-md-2 mb-2 mb-md-0">
                    {
                        buttons.map(({name, label}) => {
                            return (
                                <button
                                    key={name}
                                    className={this.props.filter === name ? 'btn btn-primary' : 'btn btn-outline-primary'}
                                    onClick={() => onFilterChange(name)} >
                                    {label}
                                </button>);
                        })
                    }
                </span>
            </div>
        );
    }
}