// axios to the project
import axios from "axios"
// axios let you create more than one instance


export default axios.create({
  baseURL: "http://localhost:4000/api/students"
  // add any objects to configure the axios 
})