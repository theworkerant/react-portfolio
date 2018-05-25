import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import CommentsReducer from './comments_reducer'

const rootReducer = combineReducers({
  comments: CommentsReducer,
  form
})

export default rootReducer
