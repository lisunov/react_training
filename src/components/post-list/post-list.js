import React from 'react'
import PostListItem from '../post-list-item';
import { ListGroup} from 'reactstrap';
import './post-list.css'

const PostList = ({posts, onDelete, onToggleImportant, onToggleLike}) => {

    let elements = [];
    for (let item of posts) {
      const {id, label} = item;
      if (id && label) {
        elements.push( (
          <li key={id} className={'list-group-item'}>
            <PostListItem
              {...item}
              onDelete={()=>onDelete(id)}
              onToggleImportant={()=>onToggleImportant(id, 'important')}
              onToggleLike={()=>onToggleLike(id, 'like')}
            />
          </li>
        ));
      }
    }

  return (
    <ListGroup className="app-list">
      {elements}
    </ListGroup>
  );
};

export default PostList;