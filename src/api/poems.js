import apiUrl from '../apiConfig'
import axios from 'axios'

export const getPoems = (user) => {
   return axios.get(apiUrl + '/poems',
    // {
    //   headers: {
    //     Authorization: `Bearer ${user.token}`
    //   }
    // }
  )
}

export const getPoem = (id) => {
   return axios.get(`${apiUrl}/poems/${id}`, {
    // headers: {
    //   Authorization: `Bearer ${user.token}`
    // }
  })
}

export const createPoem = (poem, user) => {
  return axios.post(
    `${apiUrl}/poems`,
    { poem: { ...poem } },
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}
// export const createPoem = (body, user) => {
//   console.log(body)
//   return axios({
//     url: apiUrl + '/poems',
//     method: 'POST',
//     data: {
//       poem: {
//         title: body.title,
//         writer: body.writer,
//         description: body.description
//           }
//         },
//     headers: { Authorization: `Bearer ${user.token}` }
    
//   })
// }

export const deletePoem = (id) => {
  return axios({
    url: apiUrl + `/poems/${id}`,
    method: 'DELETE'
  })
}

export const changePoem = (id, poem) => {
  return axios({
    url: apiUrl + `/poems/${id}`,
    method: 'PATCH',
    data: {
      poem
    }
  })
}
