## PropTypes

Pure functional component = no state and it doesn't affect anything else outside of itself. it purely uses the props and outputs it.

if you rename `app.js` to `app.jsx` you need to restart the server

watch sass and restart the server if you change `app.css` to `app.scss`

Below are all invalid

```
				<PercentageStat label='Class 1' total='0' score={203} />
				<PercentageStat label='Class 2' total={0} />
				<PercentageStat label='Class 3' score={() => {}} />
				<PercentageStat label='Class 4' total={{}} score='0' />
```

Because it was initially declared in `PercentageStat.jsx` in the function as expecting a number

```
export default function PercentageStat({ label, score = 0, total = Math.max(1, score) }) {
```

## Prop types

`yarn add prop-types`

When you use prop-types, there needs to be an export default statement at the bottom

```
PercentageStat.propTypes = {
  label: PropTypes.oneOf(["Maths", "Arts", "Science"]).isRequired, // this specifies label must be one of what is in the array
	label: PropTypes.string.isRequired,
	score: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired
}
```

Specify the types of the properties that can be passed thorughout. Declare this outside of the functional component

It doesn't enforce the type but provides console errors if you provide the wrong properties in.

# Default props

You can specify the default props as part of React.

```
PercentageStat.defaultProps = {
	score: 0
}
```

Like proptypes, it is also declared outside of the functional component but just above the export default statement at the end.

`rcc` - class component boilerplate
`rcf` - functional component boilerplate
`rcon` - default constructor

### Form

value attribute is from the state to the input field
to update the tstate, when input field then that is updated by event listener method
