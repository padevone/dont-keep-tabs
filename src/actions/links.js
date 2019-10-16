export const actions = {
  SET_CATEGORIES: 'SET_CATEGORIES',
  ADD_CATEGORY: 'ADD_CATEGORY',
  FETCH_CATEGORY_LINKS: 'FETCH_CATEGORY_LINKS',
  ADD_CETEGORY_LINK: 'ADD_CETEGORY_LINK',
  FETCH_LINKS: 'FETCH_LINKS',
  ADD_LINK: 'ADD_LINK',
  UPDATE_LINK: 'UPDATE_LINK',
  REMOVE_LINK: 'REMOVE_LINK',
};

export const setCategories = categories => ({
  type: actions.SET_CATEGORIES,
  categories,
});

export const addCategory = category => ({
  type: actions.ADD_CATEGORY,
  category,
});

export const setCategoryLinks = (categoryId, links) => ({
  type: actions.FETCH_CATEGORY_LINKS,
  categoryId,
  links,
});

export const addCategoryLink = (categoryId, data) => ({
  type: actions.ADD_CETEGORY_LINK,
  categoryId,
  data,
});

export const fetchLinks = links => ({
  type: actions.FETCH_LINKS,
  links,
});

export const addLink = link => ({
  type: actions.ADD_LINK,
  link,
});

export const updateLink = (id, data) => ({
  type: actions.UPDATE_LINK,
  id,
  data,
});

export const removeLink = (id) => ({
  type: actions.REMOVE_LINK,
  id,
});