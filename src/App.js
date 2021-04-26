import {BrowserRouter, Route} from "react-router-dom";
import Home from './views/Home';
import Details from './views/Details';
import Navbar from './components/Navbar';
import ChannelContextProvider from './contexts/ChannelContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ChannelContextProvider>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/details/:name" component={Details} />
        </ChannelContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
