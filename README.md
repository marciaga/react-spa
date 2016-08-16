### A React with Redux SPA via an Express app.

Install the dependencies:

`$ npm intall`

To run both Nodemon (watching the server-side files) and the Webpack Dev Server use the following commands in separate terminal windows:


```
$ npm run dev-nodemon
$ npm run dev-hot
```
The first command runs nodemon on port 3000.

The second command runs the Webpack Dev Server on port 8080.

This way, you can take full advantage of a hot reloading dev server *and* a reloading node server.

If you're just working on the client, you can just run:

`$ npm run dev`

This will run the node server, followed by the Webpack Dev Server in the same terminal window, which runs on port 8080.

TODO:
* No CSS implementation yet (check the package.json)
* Install Ava and write tests
* Axios is installed but we'll want to install Thunk as well
