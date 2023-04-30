const Reducer = (state, action) => {
  switch (action.type) {
    case "START":
      return {
        ...state,
        loading: true
      };
    case "COMPLETE":
      return {
        ...state,
        loading: false
      };
    case "FETCH_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload
      };
    case "FETCH_USER_DATA":
      return {
        ...state,
        user: action.payload
      };
    case "FETCH_POSTS":
      return {
        ...state,
        posts: action.payload
      };
    case "FETCH_FILTERED_POSTS":
      return {
        ...state,
        filteredPosts: action.payload
      };
    case "FILTER_POSTS_BY":
      return {
        ...state,
        filterPostsBy: action.payload
      };
    case "ADD_POST":
      return {
        ...state,
        posts: action.payload
      };
    case "DELETE_POST":
      return {
        posts: state.posts.filter(
          post => post.id !== action.payload
        )
      };
    default:
      throw new Error();
  }
};

export default Reducer;