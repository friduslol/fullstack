import {BrowserRouter, Route} from "react-router-dom";
import Home from './views/Home';
import Navbar from './components/Navbar';
import ChannelContextProvider from './contexts/ChannelContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ChannelContextProvider>
        <Navbar />
        <Route exact path="/" component={Home} />
        </ChannelContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
