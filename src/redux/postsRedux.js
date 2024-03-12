//selectors
export const getAllPosts = (state => state.posts);

// actions
const createActionName = actionName => `app/posts/${actionName}`;



// action creators
export const removePost = payload => ({ type: 'REMOVE_POST', payload});
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case 'REMOVE_POST':
      return statePart.filter((post) => post.id !== action.payload);
    default:
      return statePart;
  };
};

export default postsReducer;