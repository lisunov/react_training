import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import nextId from "react-id-generator";

import './app.css';
// import style from './App.module.css';
import styled from 'styled-components';

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

const StyledAppBlock = styled(AppBlock)`
  background-color: grey;
`;

export default class App extends Component {

  state = {
    data : [
      {label: "Going to learn react", important: false, id: 'we', like: true},
      {label: "That is so good", important: true, id: 'wer'},
      {label: "I need a break...", important: false, id: 'sdf'}
    ],
    term:''
  };

  deleteItem = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex((elem) =>
        elem.id === id);
        const newData = [...data.slice(0, index), ...data.slice(index+1)];
        return {
          data: newData
        };
    });
  }

  addItem = (label) => {
    this.setState(({data}) => {
      const newItem = {
        id: nextId(),
        label: label,
        important: false
      };
      return {
        data: [...data, newItem]
      };
    });
  }

  onToggle = (id, fieldName) => {
    this.setState(({data}) => {
      const index = data.findIndex((elem) =>
        elem.id === id);
      const oldItem = data[index];
      let newItem;
      if (fieldName === 'important') {
        newItem = {...oldItem, important: !oldItem.important};
      } else if (fieldName === 'like') {
        newItem = {...oldItem, like: !oldItem.like};
      }
      const newData = [...data.slice(0, index), newItem, ...data.slice(index+1)];
      return {
        data: newData
      };
    });
  }

  searchItems = (items, term) => {
    if (term.length === 0) {
      return items
    } else {
      return items.filter((item) => {
        return item.label.toLowerCase().includes(term.toLowerCase());
      })
    }
  };

  onUpdateSearch = (term) => {
    this.setState(({data}) => {
      return {
        data:data,
        term:term
      }
    })
  };

  render() {
    const {data, term} = this.state;
    const visiblePosts = this.searchItems(data, term);

    return (
      <AppBlock>
        <AppHeader
          posts={this.state.data}
        />
        <div className="search-panel d-flex">
          <SearchPanel
            onUpdateSearch = {this.onUpdateSearch}/>
          <PostStatusFilter/>
        </div>
        <PostList
          posts={visiblePosts}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggle}
          onToggleLike={this.onToggle}
        />
        <PostAddForm
          onAddItem={this.addItem}/>
      </AppBlock>
    );
  }
}