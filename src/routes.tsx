import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Characters from 'pages/Characters';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Characters} />
      </Switch>
    </Router>
  );
};

export default Routes;
