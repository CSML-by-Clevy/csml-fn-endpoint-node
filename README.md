# CSML - Custom Fn endpoint for nodejs

Create your own functions in nodejs to use in your own [CSML](https://csml.dev) chatbot! Find more information about custom CSML function runtimes in [this documentation](https://docs.csml.dev/language/custom-code-execution).

## Installation

To launch this project, create a .env file based on the contents of .env.example, then run:

```
npm install
npm start
```

## Adding new functions

You can add new functions in the `app/functions/` directory, similar to how the example function already works. Once you are ready with your new function, you can add it to the `app/functions/index.js` file and restart the project.

You can then call the new function with `Fn("my_new_func", param1="someval", param2="anotherval")` in your CSML code.

If you want, you can also add new test cases under the `test/` directory just like the `example.function.js`
