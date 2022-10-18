// Entry point for the build script in your package.json
import "@hotwired/turbo-rails";
import "./controllers";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Greeting from "./components/Greetings";
import store from "./redux/configureStore";

function App() {
  return (
    <Provider store={store}>
      <Greeting />
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
