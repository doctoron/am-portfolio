import React, { Component } from 'react';
import {
  Card,
  CardTitle,
  CardText,
  CardBody
} from 'reactstrap';
import '../App.css';

import MyBackgroundImage from '../assets/images/earthrise.jpg';

class AboutMe extends Component {
  styles = {
    bg: {
      backgroundImage: `url(${MyBackgroundImage})`,
      opacity: '0.9',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
    },
    imgArea: {
      paddingLeft: '16%',
      paddingRight: '16%'
    },
    aboutArea: {
      textAlign: 'left',
      paddingLeft: '12vw',
      paddingRight: '12vw',
      color: '#ffffff',
      backgroundColor: "#000000",
      opacity: '1.0',
      fontWeight: 'bold'
    },
    aboutBody: {
      minHeight: '100vh',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    text: {
      textAlign: 'left',
      fontWeight: 'normal',
      paddingLeft: '20vw',
      paddingRight: '20vw',
      minHeight: '100vh',
      textColor: 'royalblue',

    }

  }
  render () {
    return (
      <div className="About" style={this.styles.bg} >
        <Card body inverse style={{ backgroundColor: '#000000', opacity: 0.7 }}>
          <CardBody color="#ffffff">
            <CardTitle><h3 style={{ color: '#f1f1f1' }}>About Ron</h3></CardTitle>
          </CardBody>
          <CardBody>
            <CardText className="text" style={this.styles.aboutArea}>
              Ronald K. Antonio is the founder of Antonio's Magnet, a Full-Stack Web
              Developer and Contract Consultant who draws from diverse experiences.  As
              an IT professional and former Registered Respiratory Therapist, he is
              conversant in the MERN and MEAN stack SDLC.  He has built networks from the
              ground up, designed and launched websites, installed VoIP infrastructure,
              performed database conversions and met demanding timelines. He brings insight
              as a capable leader and responsible team member who bridges the dual competencies
              of empathetic thought with formidible technology skills.</CardText>
          </CardBody>

          <CardBody>
            <CardText className="text" style={this.styles.aboutArea}>
              As graduate of the UCF Full-Stack Development Program, Ron's expertise
              covers tools and technologies from ES6 JavaScript, CSS, HTML, React.js,
              Bootstrap, backend Node, Express, MongoDB, MySQL and can adapt to create
              solutions for any setting.  Highly motivated, Ron is a committed life-long
              learner and has added Angular, Redux, and Hooks to his stack.</CardText>
          </CardBody>

          <CardBody >
            <CardText className="text" style={this.styles.aboutArea}>
              Ron is a professional and interacts comfortably with diverse groups, stakeholders,
              subject matter experts as well as the 'techno-shy'.  He is committed and take ownership
              for the success through the phases of the SDLC in an Agile work environment.
              He is passionate about working on projects that provide continuous
              opportunities for learning, and takes pride in participating in meaningful
              endeavors that have the greatest impact to improve the lives of others.  <a href="https://antoniosmagnet.com/#/contact">Contact </a>him with your project specifictions and take the next steps to realizing your vision. </CardText>
          </CardBody>
        </Card>
      </div >
    )
  }
}
export default AboutMe;