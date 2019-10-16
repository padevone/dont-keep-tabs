import { actions } from '../actions/links';

const initialState = {
  items: [],
  categories: [],
};

export default (state = initialState, action) => {
  switch(action.type) {
    case actions.SET_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };
    case actions.ADD_CATEGORY:
      return {
        ...state,
        categories: [
          ...state.categories,
          action.category,
        ],
      };
    case actions.FETCH_CATEGORY_LINKS:
      return {
        ...state,
        categories: state.categories.map((category) => {
          if (category.id === action.categoryId) {
            return {
              ...category,
              links: action.links,
            };
          }

          return category;
        }),
      }
    case actions.FETCH_LINKS:
      return {
        ...state,
        items: action.links,
      };
    case actions.ADD_LINK:
      return {
        ...state,
        items: [
          ...state.items,
          action.link,
        ],
      };
    case actions.UPDATE_LINK:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              ...action.data,
            };
          }

          return item;
        }),
      };
    case actions.REMOVE_LINK:
      return {
        ...state,
        items: state.items.filter(({ id }) => id !== action.id),
      };
    default:
      return state;
  }
}