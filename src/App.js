import React from 'react';
import './App.css';
import TodoList from './components/todo-list';
import TodoInput from './components/todo-input';
import ItemAddForm from './components/item-add-form';
import TodoHeader from './components/todo-header';

export default class App extends React.Component {
    state = {
        items: [
            { 'label': 'Drink Coffee', important: false, id: 1, done: false },
            { 'label': 'Make awesome app', important: true, id: 2, done: true },
            { 'label': 'Study React', important: false, id: 3, done: false },
            { 'label': 'Study JavaScript and other', important: false, id: 4, done: false }
        ],
        term: '',
        filter: 'all'
    };

    onDeleted(id) {
        this.setState(({ items }) => {
            const idx = items.findIndex(el => el.id === id);
            return { items: [...items.slice(0, idx), ...items.slice(idx + 1)] };
        });
    }

    onAdded(text) {
        let obj = {
            'label': text,
            important: false,
            done: false,
            id: this.state.items.length + 1
        };

        this.setState(({ items }) => {
            let newArray = [].concat(items);
            newArray.push(obj);

            return {
                items: newArray
            };
        });

        console.log(this.state);
    }

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex(el => el.id === id);
        let oldItem = arr[idx];
        let newItems = { ...arr[idx], [propName]: !oldItem[propName] };
        return [
            ...arr.slice(0, idx),
            newItems,
            ...arr.slice(idx + 1)
        ];
    }

    onToggleImportant(id) {
        this.setState(({ items }) => {
            return {
                items: this.toggleProperty(items, id, 'important')
            }
        });
    }

    onToggleDone(id) {
        this.setState(({ items }) => {
            return {
                items: this.toggleProperty(items, id, 'done')
            };
        });
    }

    onSearch(term) {
        this.setState({ term });
    }

    filterSearchItems() {
        let { items, term } = this.state;

        if (!term) {
            return items;
        }
        return items.filter(el => el.label.toLowerCase().includes(term));
    }

    filter(arr, name) {
        switch (name) {
            case 'all':
                return arr;
            case 'active':
                return arr.filter(el => !el.done);
            case 'done':
                return arr.filter(el => el.done);
            default:
                return arr;
        }
    }

    onFilterChange(filter) {
        this.setState({ filter });
    }

    render() {
        const { items, filter } = this.state;
        const doneCount = items.filter(el => el.done).length;
        const todoCount = items.length - doneCount;
        const visible = this.filter(this.filterSearchItems(), filter);

        return (
            <>
                <h1>React ToDo List</h1>
                <div className="container">
                    <TodoHeader
                        toDo={todoCount}
                        done={doneCount} />
                    <TodoInput
                        onSearch={this.onSearch.bind(this)}
                        onFilterChange={this.onFilterChange.bind(this)}
                        filter={filter} />
                    <TodoList
                        todos={visible}
                        onDeleted={this.onDeleted.bind(this)}
                        onToggleDone={this.onToggleDone.bind(this)}
                        onToggleImportant={this.onToggleImportant.bind(this)} />
                    <ItemAddForm
                        addItem={this.onAdded.bind(this)} />
                </div>
            </>
        );
    }
}