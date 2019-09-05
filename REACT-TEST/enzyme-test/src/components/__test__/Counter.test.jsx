import React from "react"
import { configure, shallow, mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Counter from "../Counter"

configure({ adapter: new Adapter() })

// testing event handler
describe("Counter tests", () => {
	it("Increment by 1 on button click", () => {
		const wrapper = mount(<Counter />)
		expect(wrapper.find("h1").get(0).props.children).toEqual(0) // make sure before you click it it is 0
		wrapper.find("button").simulate("click")
		expect(wrapper.find("h1").get(0).props.children).toEqual(1) // afterwards make sure this increments the value
	})
})

// yarn test -T nameofTEst will only run the testing for that particular set of tests
