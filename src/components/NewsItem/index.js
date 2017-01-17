import React from 'react';
import ListItem from 'material-ui/List';

const NewsItem = (props) => (
  <ListItem
    primaryText="Test Title"
    secondaryText={
      <p>Some text here...</p>
    }
  />
);

export default NewsItem;
