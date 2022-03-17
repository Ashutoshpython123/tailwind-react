import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TalwindOne from "./components/TalwindOne"
import XX from "./XX"
import Ipfs from "./components/Ipfs"


function App() {
  return (
     <Router>
      <>
        <Switch>
          <Route exact path="/he" component={XX} />
          <Route exact path="/" component={TalwindOne} />
          <Route exact path="/ipfs" component={Ipfs} />

          


        </Switch>
      </>
    </Router>

  );
}

export default App;

