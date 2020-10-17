import React from 'react'
import './app-header.css'
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  h1 {
    font-size: 26px;
    color: ${props => props.colored?'red':'black'};
    :hover {
      color: blue;
    }
  }
  h2 {
    font-size: 1.2rem;
    color: grey;
  }
`;

const AppHeader = ({posts}) => {
  return (<Header as='a'>
    <h1>Aleksei Lisunov</h1>
    <h2>{posts.length} записей, из них понравилось {countLikes(posts)}</h2>
  </Header>)
};

const countLikes = (posts) => {
  const res = posts.reduce(function(count, currentPost){
    return count + (currentPost.like ? 1 : 0);
  }, 0);
  return res;
}

const countImportant = (posts) => {
  const res = posts.reduce(function(count, currentPost){
    return count + (currentPost.important ? 1 : 0);
  }, 0);
  return res;
}

export default AppHeader;