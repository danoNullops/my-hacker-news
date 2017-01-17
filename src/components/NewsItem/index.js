import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { ListItem } from 'material-ui/List';

import './style.css';

const NewsItem = ({ data, saveUserNewsItem }) => {
  const clickHandler = (e) => {
    e.preventDefault();
    console.log('Do teh save');
    saveUserNewsItem();
  };

  return (
    <a href={data.url} target="_blank">
      <ListItem
        primaryText={data.author}
        secondaryText={
          <p>
            {data.title}
          </p>
        }
        secondaryTextLines={2}
        rightIcon={
          <FlatButton
            label="Save"
            primary={true}
            className="save-btn"
            onClick={clickHandler.bind(this)}
          />
        }
      />
    </a>
  );
};

export default NewsItem;
