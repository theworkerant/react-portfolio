import { GET_COMMENTS, POST_COMMENT } from '../actions'

const initialState = {
  comments: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_COMMENTS:
    return {
      ...state,
      comments: action.payload
    }
    case POST_COMMENT:
    console.log('posted');
    return {
      ...state,
      comments: state.comments.concat(action.payload)
    }
    default:
    return state
  }
}
