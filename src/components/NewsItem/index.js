import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { ListItem } from 'material-ui/List';
import Moment from 'react-moment';

import './style.css';

const NewsItem = ({ data, saveUserNewsItem }) => {
  const clickHandler = (e) => {
    e.preventDefault();
    console.log('Do teh save');
    saveUserNewsItem(data);
  };

  const saveBtn = () => {
    return saveUserNewsItem
      ? <FlatButton label="Save" primary={true} className="save-btn" onClick={clickHandler.bind(this)} />
      : <span></span>;
  };

  return (
    <a href={data.url} target="_blank">
      <ListItem
        primaryText={
          <span>
            {data.author}
            <span className="date">
              <Moment
                format="YYYY-MM-DD HH:mm:ss"
                date={data.created_at}
              />
            </span>
          </span>
        }
        secondaryText={
          <p>
            {data.title}
          </p>
        }
        secondaryTextLines={2}
        rightIcon={saveBtn()}
      />
    </a>
  );
};

export default NewsItem;
