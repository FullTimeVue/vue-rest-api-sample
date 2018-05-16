import { checkResponse, post } from "@/helpers/http"

export function login(username, password) {
  return post('/login', {username, password})
        .then(checkResponse)
}


export function refreshToken() {
  return post('/token/refresh')
        .then(checkResponse)
}

