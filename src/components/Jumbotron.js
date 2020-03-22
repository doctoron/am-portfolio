import React, { Component } from 'react';
import { Jumbotron, Container, Col, Row } from 'reactstrap';
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io"
import {
  DiHtml5,
  DiBootstrap,
  DiCss3,
  DiJavascript,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiMysql,
  DiGit,
  DiAngularSimple,
  DiFirebase,
} from "react-icons/di";

class Jumbo extends Component {
  constructor (props) {
    super(props);

    this.state = {
      tech: []
    };
  }
  tech = [
    {
      name: "html5",
      element: <DiHtml5 />
    },
    {
      name: "bootstrap",
      element: <DiBootstrap />
    },
    {
      name: "css",
      element: <DiCss3 />
    },
    {
      name: "javascript",
      element: <DiJavascript />
    },
    {
      name: "react",
      element: <DiReact />
    },
    {
      name: "node",
      element: <DiNodejsSmall />
    },
    {
      name: "mongodb",
      element: <DiMongodb />
    },
    {
      name: "mysql",
      element: <DiMysql />
    },
    {
      name: "angular",
      element: <DiAngularSimple />
    },
    {
      name: "github",
      element: <DiGit />
    },
    {
      name: "firebase",
      element: <DiFirebase />
    },
  ]

  styles = {
    jt: {
      background: 'linear-gradient(rgb(49,50,92, 0.5), rgb(0,0,0, 0.5))',
      color: 'white'
    },
    colBox: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      marginLeft: 20,
      marginRight: 20,
      minWidth: 200,
      marginTop: 20,
      marginBottom: 20
    }
  }
  render () {
    return (
      <div>
        <Jumbotron fluid style={this.styles.jt}>
          <Container fluid >
            <h1 style={{ fontSize: 43 }} className="hover-uppercase">ronald k. antonio</h1>
            <h5 style={{ color: "#ffffff" }}>&lt; Full-Stack WebDeveloper /&gt;</h5>
            <a href='https://www.linkedin.com/in/ronald-k-antonio/' target='_blank' rel="noopener noreferrer"><IoLogoLinkedin style={{ fontSize: 50, color: "#ffffff" }} /></a>
            <a href='https://github.com/doctoron' target='_blank' rel="noopener noreferrer"><IoLogoGithub style={{ fontSize: 50, color: "#ffffff" }} /></a>

            <Row>
              {<Col style={this.styles.colBox}>
                <h2 className="lead" style={{ color: "#ffffff" }}><strong><span className="hover-transform">People  Focused and Technology Friendly </span></strong></h2>
              </Col>}
            </Row>
          </Container>
        </Jumbotron>
      </div >
    );
  }
}
export default Jumbo;