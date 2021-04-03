import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
    constructor() {
        super();
        this.state = { label: '' };
    }

    onLabelChange(e) {
        this.setState({
            label: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.addItem(this.state.label);
        this.setState({
            label: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)} className="form-item-add">
                <input
                    type='text'
                    className='input-add-form'
                    placeholder="enter item for added"
                    onChange={this.onLabelChange.bind(this)}
                    value={this.state.label} />
                <button className='btn btn-outline-primary'>
                    Add item
                </button>
            </form>
        );
    }
}