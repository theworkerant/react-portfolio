export const GET_COMMENTS = 'get_comments'
export const getComments = () => async dispatch => {
  const response = await fetch('http://localhost:5000/comments')
  const json = await response.json()

  dispatch({
    type: GET_COMMENTS,
    payload: json
  })
}
export const POST_COMMENT = 'post_comment'
export const postComment = ({ name, comment }) => async dispatch => {
  let body = {
    username: name,
    comment
  }
  const response = await fetch('http://localhost:5000/comments', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  })
  const json = await response.json()
  console.log(json);
  dispatch({
    type: POST_COMMENT,
    payload: json
  })
}
