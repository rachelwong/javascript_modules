import React from "react"
import { configure, shallow, mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16" // default export, destructure not necessary
import List from "../List"

configure({ adapter: new Adapter() })

// group tests together with a describe statement
// wrapper creates an instance of the component and wraps it in an object which has the enzyme methods in it to perform testing on that component instance (use the shallow function)
describe("List tests", () => {
	it("renders list-items", async () => {
		const items = ["one", "two", "three"]
		const wrapper = mount(<List items={items} />)
		// await wrapper.instance().componentDidMount() // test whether lifecycle methods did fire

		// if you have a button renderd, you can simulate clicks on the button. whether
		// wrapper.find("button").simulate("click")
		console.log(wrapper.debug())

		// Phantom JEST provides a phantom browser DOM which mounts the component on a phantom DOM outside of the browser DOM. to test as if it was being rendered in a browser

		// Test if the list itself is defined
		expect(wrapper.find(".list-items")).toBeDefined()
		// Expect correct number of items are rendered
		// does the list have the expected number of items rendered in the query selector. if it doesn't the component is broken
		expect(wrapper.find(".item")).toHaveLength(items.length)
	})

	it("renders a specific list item", () => {
		const items = ["Thor", "Sigfrid", "Freya"]
		//change from shallow to mount
		const wrapper = mount(<List items={items} />)

		//Check if a specific item was rendered in the list
		// can't use expect in isolation and need to chain on a method
		// .toBeTruthy means if it returns correctly, then the output matches expected tests
		expect(
			wrapper.contains(
				<li key='Thor' className='item'>
					Thor
				</li>
			)
		).toBeTruthy()
	})

	it("renders correct text in item", () => {
		const items = ["Thor", "Sigfrid", "Freya"]
		const wrapper = mount(<List items={items} />)
		// the get is to get the first item at position 0
		// get will retrieve the component, and then can access the props
		// the children is referring to any child of the <li className="item"></li> which is the text between the <li> </li>
		expect(wrapper.find(".item").get(0).props.children).toEqual("Thor")
	})
})

// Jest is the default testing suite so running yarn test still works. it is part of the create-react-app
// cam delete the default app.test.js

// shallow allows you isolate the children and be selective about how and what you test.  especially if you want to test the top-level test and then use mount to test something else

// mount test is an integration test rather than a unit test.
