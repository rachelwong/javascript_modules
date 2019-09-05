# React Minimal Template

[React](https://github.com/facebook/react) + [Styled Components](https://www.styled-components.com/) + [Parcel](https://github.com/parcel-bundler/parcel) template with minimal dependencies.

## Pre-requisites

Install [Parcel](https://parceljs.org/) globally:

```bash
npm i -g parcel
```

### Usage

To create a new app:

1. Visit the [template generator](https://github.com/flynnwebdev/react-template/generate) page for this repo.
2. Enter a name for your new project.
3. Clone your new project repo to your local machine.
4. Install dependencies with either 'yarn install' or 'npm install'

## Development

To start the development server run:

```bash
yarn start
```

This will run Parcel to build and package the app, and automatically open [http://localhost:1234](http://localhost:1234) in your browser.

Parcel will remain in watch mode, automatically rebuilding and hot reloading on file changes.

## Production

To create a deployment-ready production build:

```bash
yarn build
```

This will bundle your application in the `build` folder.

## Clean

If your app isn't working or building correctly, you can delete the build and cache folders with:

```bash
yarn clean
```

## License

This project is licensed under the **MIT License** - see the [LICENSE](https://github.com/miljan-fsd/parcel-react-app/blob/master/LICENSE) file for details.