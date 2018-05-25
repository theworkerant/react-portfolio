import { GET_COMMENTS } from '../actions'

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
    default:
    return state
  }
}
