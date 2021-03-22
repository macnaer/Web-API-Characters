import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// Connect redux to react
import store from "./store";
import { Provider } from "react-redux";

// CharacterList component
import CharacterList from "./Components/CharacterList/CharacterList";

// For Hoc
import { ApiStoreServiceProvider } from "./Components/api-service-context/api-service-context";
import ApiStoreService from "./Services/api-service";
const apiStoreService = new ApiStoreService();



const App = () => {
  return (
    <Provider store={store}>
      <ApiStoreServiceProvider value={apiStoreService}>
        <CharacterList />
      </ApiStoreServiceProvider>
    </Provider>
  )
}
ReactDOM.render(<App />, document.getElementById("root"));

