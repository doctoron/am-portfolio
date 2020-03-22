import React, { Component } from 'react';
// import DocsViewer from 'react-google-docs-viewer';
import {
  Jumbotron,
  Container
} from 'reactstrap';

const divStyle = {
  width: '75vw',
  height: '100vh',
  overFlow: 'auto',
  alignContent: 'left',
  position: 'relative',
  top: 0,
  left: 0,
  right: 0
}

/* Feature detection */
class Resume extends Component {
  render () {
    return (
      /* This div connects to Microsoft OneDrive source generates iterative asynchronous errors 
      and recommends marking the event handler as passive as the remedy */
      <Jumbotron style={divStyle}>
        < Container >
          <div>
            <iframe className="embed-responsive-item" src="https://onedrive.live.com/embed?cid=C68CEB3BB169AA76&resid=C68CEB3BB169AA76%21458&authkey=ANp4XsKJ-D2ge4U&em=2"
              title="resume" width="100vw" height="100vh" frameBorder="0" scrolling="no" accessibility="true" zoom="100%">
            </iframe>
          </div >
        </Container>
      </Jumbotron>
    )
  }
};

export default Resume;