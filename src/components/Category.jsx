import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import API from '../api';
import {
  setCategoryLinks,
  addCategoryLink,
} from '../actions/links';

const Category = ({
  id,
  name,
  links,
  setLinks,
  addLink,
}) => {
  useEffect(() => {
    API.fetchCategoryLinks(id)
      .then((links) => setLinks(id, links));
  }, []);

  return (
    <>
      <span>{ name }</span>
      {links && (
        <ul>
          {links.map(link => (
            <li key={link.id}>{ link.value }</li>
          ))}
        </ul>
      )}  
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  setLinks: (id, links) => dispatch(setCategoryLinks(id, links)),
  addLink: (id, data) => dispatch(addCategoryLink(id, data)),
});

export default connect(
  () => ({}),
  mapDispatchToProps
)(Category);