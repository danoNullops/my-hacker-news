import React from 'react';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

import NewsItem from '../NewsItem';

import './style.css';

const NewsItemList = ({ news, saveUserNewsItem }) => {
  const divider = i => {
    if (i < (news.length - 1)) {
      return <Divider inset={true} />
    }
  }

  const newsItems = news.map((item, i) => (
    <div key={item.objectID}>
      <NewsItem
        key={item.objectID}
        data={item}
        saveUserNewsItem={saveUserNewsItem}
      />
      {divider(i)}
    </div>
  ));

  return (
    <List className="NewsItemList">
      <Subheader>Today's News</Subheader>
      {newsItems}
    </List>
  );
};

export default NewsItemList;
