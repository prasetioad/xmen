import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../src/pages/Hero'
import HeroDetil from '../src/pages/HeroDetil'
import Skill from '../src/pages/Skill'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/detil" component={HeroDetil} />
        <Route path="/skill" component={Skill} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
