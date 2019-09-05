## Redux Counter App

Classnotes

- do the render first, what state and props are required
- if you're not rendering, you won't need states, props

- replace the intenral state with redux, which keeps it in a single store and controls how we change it
- need to add redux to the project (not particularly bound to react)
  > yarn add redux react-redux
- not setting a local state
- teh redux state is passe d through in the props (this.props.count)
- a different export function (no longer an default export)
- define a functio to specify what state to get out of redux. map this state/values out of a state to the props to gain access
- redux only suitable for larger application with more applications and states to access
- store is like a shared state (store and state are used interchangeably)

<Provider> is similar to Router with individually routes that are wrapped with a parent element which gives the routing functionality. Giving any child components with access to the redux store. The provider doesn't actually access the store.

Need to create a store in index.js

#### Reducer

Redux doesn't have a default state, because it is designed to be agnostic to your data structure. It makes no assumption about what and how you store your state. You have to proivde all configuration.

Expected the reducer to be a function - need to provide a function that will return the state so that it knows what the initial state is.

you can have more than one reducer

reducer must always return something because redux is expecting a state to be returned

# Approaches

To modularise the redux aspect of the application, there can be two approaches:

- put all the redux code into a redux componet
- OR put the reducer in the component
- take the initial state, mapStatetoProps function and the reducer function and put them into the component file itself (Counter.js) so that you define everything that it relates to in the one file (still maintains a props because the code has to go through redux). Convert the reducer function to export.
- And then re-import everythign back into index.js. Destructure the reducer but not the component itself when importing everything into index.js (entry point)

Ideal for a complex application where state has been shared.
