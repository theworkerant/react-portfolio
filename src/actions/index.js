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
export const postComment = ({ name, company, comment, projectId }) => async dispatch => {
  let body = {
    name,
    company,
    comment,
    project_id: projectId
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
  dispatch({
    type: POST_COMMENT,
    payload: json
  })
}

export const sendEmail = (values) => async dispatch => {
  const { name, email, phone, message } = values
  let body = {
    name,
    email,
    phone,
    message
  }
  const respone = await fetch('http://localhost:5000/send', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  })
}
