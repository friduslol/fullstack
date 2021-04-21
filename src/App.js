import {BrowserRouter, Route} from "react-router-dom";
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <h1>TEST header</h1>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
