import axios from "axios"

export const api = axios.create({
  baseURL: "http://localhost:4000/" // where you are sending requests to 
})

// add token things down here 
// telling axios what the token is and tell axios whenver there is a request form now on as the bearertoken  
// axios is looking for a bearer token from the serverside
export const setJwt = (token) => {
  // access and set the defaults for the api which will apply to all calls 
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`
}