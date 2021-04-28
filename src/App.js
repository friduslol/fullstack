import {BrowserRouter, Route} from "react-router-dom";
import Home from './views/Home';
import Categories from './views/Categories';
import Details from './views/Details';
import Programs from "./views/Programs";
import Navbar from './components/Navbar';
import User from "./views/User";
import ChannelContextProvider from './contexts/ChannelContext';
import UserContextProvider from "./contexts/UserContext";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ChannelContextProvider>
        <UserContextProvider>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/category/programs/:id" component={Programs} />
        <Route exact path="/details/:id" component={Details} />
        <Route exact path="/User" component={User} />
        </UserContextProvider>
        </ChannelContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
