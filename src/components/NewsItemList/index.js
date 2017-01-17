import React from 'react';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

import NewsItem from '../NewsItem';

const NewsItemList = ({ news }) => {
  const divider = i => {
    if (i < (news.length - 1)) {
      return <Divider inset={true} />
    }
  }

  const newsItems = news.map((item, i) => (
    <div>
      <NewsItem key={item.url} data={item} />
      {divider(i)}
    </div>
  ));

  return (
    <List>
      <Subheader>Today's News</Subheader>
      {newsItems}
    </List>
  );
};

export default NewsItemList;
