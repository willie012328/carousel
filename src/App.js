import { Provider } from "react-redux";

import configStore from "./redux/store/store";
import Carousel from './containers/carousel';
import "./styles/index.css";

function App() {
  return (
    <Provider store={configStore}>
      <Carousel />
    </Provider>
  );
}

export default App;
