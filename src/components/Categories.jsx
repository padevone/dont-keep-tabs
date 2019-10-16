import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import API from '../api';
import { setCategories, addCategory } from '../actions/links';
import Category from './Category';
import CategoryForm from './CategoryForm';


const Categories = ({
  categories,
  setCategories,
  addCategory,
}) => {
  useEffect(() => {
    API.fetchCategories()
      .then((items) => setCategories(items));
  }, []);

  const handleCreate = (data) => {
    API.addCategory(data).then(({ id }) => {
      addCategory({
        ...data,
        id,
      });
    });
  };

  return (
    <div>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <Category
              id={category.id}
              name={category.name}
              links={category.links}
            />
          </li>
        ))}
      </ul>

      <CategoryForm onCreate={handleCreate} />
    </div>
  );
};

const mapStateToProps = state => ({
  categories: state.links.categories,
});

const mapDispatchToProps = dispatch => ({
  setCategories: categories => dispatch(setCategories(categories)),
  addCategory: category => dispatch(addCategory(category)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Categories);