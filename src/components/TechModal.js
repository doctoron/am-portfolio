import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CardImg
} from 'reactstrap';

class TechModal extends React.Component {
  displayTechList (techArray) {
    // console.log(techArray);
    // techArray.split(',')
  }


  render () {
    const { project } = this.props
    const technology = this.props.project.tech
    // console.log(this.props)
    // console.log(this.props.project.tech)
    return (
      <div>
        <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className}>
          <ModalHeader toggle={this.props.toggle}>{project.name}</ModalHeader>
          <CardImg top src={this.props.project.image} alt="Need an image"
            style={{
              width: '100%',
              maxHeight: 500,
              objectFit: 'contain'
            }} />
          <ModalBody >
            {project.modalDesc}
            {this.displayTechList(technology)}
          </ModalBody>
          <ModalFooter>
            {project.codebase ?
              <a href={project.codebase} target="_blank" rel="noopener noreferrer"><Button color="primary">View Code on GitHub</Button></a> : null}
            {project.deployedURL ?
              <a href={project.deployedURL} target="_blank" rel="noopener noreferrer"><Button color="primary">See the Live App</Button></a> : null}{' '}
            <Button color="primary" onClick={this.props.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default TechModal;