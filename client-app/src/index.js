import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// CharacterList component
import CharacterList from "./Components/CharacterList/CharacterList";

// Connect redux to react
import store from "./store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <CharacterList />
    </Provider>
  )
}
ReactDOM.render(<App />, document.getElementById("root"));

