import React from 'react';
import { homeStore } from '../store';
import { Button } from 'reactstrap';
import {observer} from 'mobx-react';

class Home extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div>stored value: {homeStore.value}</div>
        <Button onClick={() => homeStore.value += 1}>Increment</Button>
      </React.Fragment>
    );
  }
}

export default observer(Home);
