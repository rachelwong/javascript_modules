# Single-page react application (SPA)

- browser doesn't refresh/reload the whole application
- internal state-SPA, what it renders is dependent on the state
- location-based SPA: instead of tracking what components are rendered based on the state, it is dependent on the URL

`yarn react-router-dom`

Need to destructure what is inside the react-router-dom in your import statement

```
import { BrowserRouter, Route } from "react-router-dom"
```

When you have the router, you don't need the getView method or the state.

### React-router-dom

Adding an `exact` attribut to your `<Route>` means that the route will go exactly to that url, instead of just any part of it matching.

```
<Route exact path='/entry' component={NewEntryView} />
```

To pass in props in your route, change the convention to `render` instead of `component` and pass in the component as props argument

Here we are passing in the categories state into the CategorySelection view as props

````
						<Route
							exact
							path='/category'
							render={props => <CategorySelectionView categories={this.state.categories} />}
						/>
```

The `<Link>` component is similar to an anchor tag. This needs to be added ot the destructuring. The `to` attribute replaces the `href`.

```
<Link to='/'>Home</Link>

```


When passing in the whole object, you can destructure the props argument (object) can converting it into an array so that you can access each of the individual properties inside the props object.

```
						<Route
							exact
							path='/entry/new/:id'
							render={props => <NewEntryView {...props} categories={this.state.categories} />}
						/>
```

#### Inversion of control
- by passing throuhg addEntry a function and,inturn pasing it to the form, we are essentially teh control from the button and calling it up
````
