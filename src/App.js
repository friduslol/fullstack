import {BrowserRouter, Route} from "react-router-dom";
import Home from './views/Home';
import Categories from './views/Categories';
import Details from './views/Details';
import Programs from "./views/Programs";
import Navbar from './components/Navbar';
import ChannelContextProvider from './contexts/ChannelContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ChannelContextProvider>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/category/programs/:id" component={Programs} />
        <Route exact path="/details/:id" component={Details} />
        </ChannelContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
