// selectors 
export const getAllCategories = ({ categories }) => categories;
export const getPostCategory = ({ posts }, postCategory) => posts.find(post => post.category === postCategory);


const categoriesReducer = (statePart = [], action) => {
    switch (action.type) {
        default:
            return statePart;
    }
};

export default categoriesReducer;