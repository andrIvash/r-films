import React, { PureComponent } from 'react';
import Socials from '../Socials';

export default class Footer extends PureComponent {
  state = {
    socials: [{ name: 'fb' }, { name: 'tw' }, { name: 'ln' }]
  }

  render() {
    return (
      <footer className='footer app__footer'>
          footer
          <Socials socials={this.state.socials} />
      </footer>
    );
  }
}

