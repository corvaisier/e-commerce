import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Footer from "./sections/footer"
import Home from "./pages/home"
import Contact from "./pages/contact"
import Insert from "./pages/insertAdminArticles"

function App() {
  return (
    <div className="App">
     <Router>
                    <div >
                        <div >
                            <h4>
                                <Link to="/" style={{ color: "black" }} >Home</Link>
                            </h4>
                            <h4>
                                <Link to="/insert" style={{ color: "black" }} >Insert articles</Link>
                            </h4>
                            <h4>
                                <Link to="/contact" style={{ color: "black" }} >Contact</Link>
                            </h4>
                        </div>
                        <hr />
                    </div>

                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/insert">
                            <Insert />
                        </Route>
                        <Route exact path="/contact">
                            <Contact />
                        </Route>
                    </Switch>
                </Router>

                <Footer/>
    </div>
  );
}

export default App;
