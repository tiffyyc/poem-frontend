import apiUrl from '../apiConfig'
import axios from 'axios'

export const getPoems = (genre) => {
  return axios({
    url: apiUrl + `/poems/?genre=${genre}`,
    method: 'GET'
  })
}
export const getPoem = (id) => {
  return axios({
    url: apiUrl + `/poems/${id}`,
    method: 'GET'
  })
}

export const createPoem = (body) => {
  console.log(body)
  return axios({
    url: apiUrl + '/poems/',
    method: 'POST',
    data: {
      poem: {
        title: body.title,
        genre: body.genre,
        owner: body.owner,
        description: body.description
      }
    }
  })
}

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
