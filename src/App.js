import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import configStore from "./redux/store/store";

import UIErrorBoundary from "./components/common/UIErrorBoundary";

import Routes from "./Routes";

import "./styles/index.css";

function App() {
  return (
    <Provider store={configStore}>
      <HashRouter>
        <UIErrorBoundary>
          <Routes />
        </UIErrorBoundary>
      </HashRouter>
    </Provider>
  );
}

export default App;
