import React, { Component } from 'react';
import {
  Jumbotron,
  Container
} from 'reactstrap';
import MyBackgroundImage from '../assets/images/earthrise.jpg'

class Contact extends Component {
  styles = {
    bg: {
      backgroundImage: `url(${MyBackgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      minHeight: '100vh'
    },
    imgArea: {
      paddingLeft: 30,
      paddingRight: 30
    }

  }
  render () {
    return (
      <div className="Home" style={this.styles.bg} >
        <Jumbotron fluid>
          <Container>
            <div>
              <h3>Ronald K. Antonio</h3>

              <div className="LI-profile-badge" data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="ronald-antonio-83329b10">
                <a className="LI-simple-link" href='https://www.linkedin.com/in/ronald-k-antonio'>
                  <h5>LinkedIn: ronald-k-antonio</h5></a>
                <h5 >Mail: <a href="mailto: ronantonio@gmail.com">ronantonio@gmail.com</a> Phone: ‪(386) 753-4329‬ </h5></div>
            </div>
          </Container>
        </Jumbotron>

      </div>

    )
  }
}
export default Contact;