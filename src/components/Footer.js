import React, { Component } from 'react';
import { Jumbotron, CardFooter } from 'reactstrap';
import { DiReact } from "react-icons/di";
import '../App.css'

const bullet = '\u2022';
const copyright = '\u00A9';

class Footer extends Component {
  render (props) {
    return (
      // console.log(props.match.params.categoryName)
      <div>
        {
          (URLSearchParams === "my-resume") ?
            <div>
              <CardFooter className="footer">
                <p>Portfolio powered by <DiReact style={{ color: "#80D8F7", fontSize: 35 }} /></p>
                <h6>Photo courtesy of <a href='https://www.nasa.gov/image-feature/goddard/lro-earthrise-2015'>NASA</a> <br />
                                    Copyright © 2019 Antonio's Magnet {bullet} Ronald K. Antonio</h6>
              </CardFooter>
            </div>
            :
            <div>
              <Jumbotron fluid>
                <CardFooter>
                  <div>
                  </div>
                </CardFooter>
              </Jumbotron>
              <CardFooter className="footer">
                <p>Portfolio powered by <DiReact style={{ color: "#80D8F7", fontSize: 35 }} /></p>
                <h6>Photo courtesy of <a href='https://www.nasa.gov/image-feature/goddard/lro-earthrise-2015'>NASA</a> <br />
                  Copyright {copyright} 2019 Antonio's Magnet {bullet} Ronald K. Antonio</h6>
              </CardFooter>
            </div >
        }
      </div>
    );
  };
};

export default Footer;




