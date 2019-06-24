import React from "react"
import "./App.css"
import axios from "axios"
import Users from "./Users"
import { string } from "postcss-selector-parser"

export default function App() {
  constructor(props){
    super(props)

    this.state = {
      image_url: string,
      name: string, 
      email: string, 
      phone: string,
      loading: false
    }

    async componentDidMount() {
      this.setState({ loading: true })
      const response = await axios.get("https://randomuser.me/api/?results=5")
      this.setState({ users: response.data, loading: false}) 
    }
  }

  return (
    <div>
      <Users />
    </div>
  )
}
