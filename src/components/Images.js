import React, { Component } from 'react';
import {
  Card,
  Button,
  CardTitle,
  CardText,
  CardDeck,
  CardBody
} from 'reactstrap';

import data from './../projects.json'

import {
  DiCss3,
  DiHtml5,
  DiReact,
  DiJavascript,
  DiBootstrap,
  DiAppstore,
  DiAndroid,
  DiMongodb,
  DiMysql,
  DiNodejsSmall,
  DiAngularSimple,
  DiGit,
} from "react-icons/di";

import TechModal from './TechModal';

class Images extends Component {
  constructor (props) {
    super(props);
    this.state = {
      modal: false,
      currentProject: {}
    };

    this.toggle = this.toggle.bind(this);
  }
  handleTechClick (data) {
    this.setState({ currentProject: data })
    this.toggle()
  }
  toggle () {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  //project.tech
  displayIcons (tech) {
    return (
      <div>
        {tech.includes('html5') ?
          <DiHtml5 style={{ fontSize: 50, color: "#4DA9F2" }}
          />
          : null}
        {tech.includes('bootstrap') ?
          <DiBootstrap style={{ fontSize: 50, color: "black" }}
          />
          : null}
        {tech.includes('css') ?
          <DiCss3 style={{ fontSize: 50, color: "#1572B6" }}
          />
          : null}
        {tech.includes('javascript') ?
          <DiJavascript style={{ fontSize: 50, color: "#F0DB4F" }}
          />
          : null}
        {tech.includes('react') ?
          <DiReact style={{ fontSize: 50, color: "#80D8F7" }}
          />
          : null}
        {tech.includes('node') ?
          <DiNodejsSmall style={{ fontSize: 50, color: "#83CD29" }}
          />
          : null}
        {tech.includes('mongodb') ?
          <DiMongodb style={{ fontSize: 50, color: "#4FAA41" }}
          />
          : null}
        {tech.includes('mysql') ?
          <DiMysql style={{ fontSize: 50, color: "#FFFFFF" }}
          />
          : null}
        {tech.includes('android') ?
          <DiAndroid style={{ fontSize: 50, color: "#a4c639" }}
          />
          : null}
        {tech.includes('android') ?
          <DiAndroid style={{ fontSize: 50, color: "black" }}
          />
          : null}
        {tech.includes('appstore') ?
          <DiAppstore style={{ fontSize: 50, color: "black" }}
          />
          : null}
        {tech.includes('angular') ?
          <DiAngularSimple style={{ fontSize: 50, color: "black" }}
          />
          : null}
        {tech.includes('github') ?
          <DiGit style={{ fontSize: 50, color: "#1572B6" }}
          />
          : null}
      </div>
    )
  }

  render () {
    return (
      <CardDeck>
        {data.map(project => (
          <Card
            key={project.id}
            style={{ minWidth: 300, marginTop: 30 }}
            className="image-card">
            <CardBody>
              <CardTitle
                style={{ fontSize: 30, color: 'limegreen' }}>
                {project.name}
              </CardTitle>
              <CardText
                style={{ color: "#ffffff", fontSize: 20 }}>
                {project.description}
              </CardText>
              <div
                style={{ marginTop: 20, marginBottom: 20 }}>
                {this.displayIcons(project.tech)}
              </div>
              <Button
                style={{ backgroundColor: "#E23C61" }}
                onClick={() => this.handleTechClick(project)}>
                more info
                </Button>
              <a
                href={project.deployedURL}
                target="_blank"
                rel="noopener noreferrer">
                <Button
                  style={{ marginLeft: 5, marginRight: 5, backgroundColor: "#2A6771" }}>
                  see project
                  </Button>
              </a>
              {project.codebase ?
                <a
                  href={project.codebase}
                  target="_blank"
                  rel="noopener noreferrer">
                  <Button
                    style={{ backgroundColor: "#ED6F2E" }}>
                    github
                    </Button>
                </a>
                : null
              }
            </CardBody>
          </Card>
        ))}

        <TechModal isOpen={this.state.modal} toggle={this.toggle} project={this.state.currentProject}
        />

      </CardDeck>
    );
  }
};

export default Images;