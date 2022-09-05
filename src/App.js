import ChatProject from './Components/ChatProject'
import TwitProject from './Components/TwitProject'
import NetflixProject from './Components/NetflixProject'
import Clothingbrand from './Components/Clothingbrand';
import Home from "./Pages/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Weather from './Components/Weather';
import { Helmet } from 'react-helmet'

function App() {
  return (
    <div className="App">
    <Helmet>
                <meta charSet="utf-8" />
                <title>My Portfolio</title>
        <link rel="canonical" href="http://mysite.com/example" />
     </Helmet>
    <BrowserRouter>
        <Routes>
          <Route path="/weather" element={<Weather />} />
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<ChatProject />} />
          <Route path="/flix" element={<NetflixProject />} />
          <Route path="/cloth" element={<Clothingbrand />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
