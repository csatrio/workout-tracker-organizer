import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import pages from './containers';
import { hot } from 'react-hot-loader/root';

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

type Props = {
  history: History;
};

const root = ({ history }: Props) => (
  <Provider history={history}>
    <Router>
      <Switch>
        {Object.keys(pages).map(path => {
          // @ts-ignore
          return <Route path={path} component={pages[path]} key={path}/>;
        })}
      </Switch>
    </Router>
  </Provider>
);

const Root = hot(root);

document.addEventListener('DOMContentLoaded', () =>
  render(
    <AppContainer>
      <Root history={history}/>
    </AppContainer>,
    document.getElementById('root')
  )
);
