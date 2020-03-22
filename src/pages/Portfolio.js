import React, { Component } from 'react';
import Jumbo from '../components/Jumbotron';
import MyBackgroundImage from '../assets/images/earthrise.jpg'

import {
  DiCss3,
  DiHtml5,
  DiReact,
  DiJavascript,
  DiBootstrap,
  DiMongodb,
  DiMysql,
  DiNodejsSmall,
  DiHeroku,
  DiAngularSimple
} from "react-icons/di";
import Images from '../components/Images';


class Portfolio extends Component {
  styles = {
    bg: {
      backgroundImage: `url(${MyBackgroundImage})`,
      opacity: '0.9',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
    },
    imgArea: {
      paddingLeft: 30,
      paddingRight: 30
    }
  }
  render () {
    return (
      <div className="Home" style={this.styles.bg} >
        <Jumbo />
        <DiReact style={{ fontSize: 30, color: "#80D8F7" }} />
        <DiNodejsSmall style={{ fontSize: 30, color: "#83CD29" }} />
        <DiAngularSimple style={{ fontSize: 30, color: "FFFFFF" }} />
        <DiHtml5 style={{ fontSize: 30, color: "#E44D26" }} />
        <DiCss3 style={{ fontSize: 30, color: "#2572B6" }} />
        <DiBootstrap style={{ fontSize: 30, color: 'purple' }} />
        <DiJavascript style={{ fontSize: 30, color: "#F0DB4F" }} />
        <DiHeroku style={{ fontSize: 30, color: "purple" }} />
        <DiMongodb style={{ fontSize: 30, color: "#4FAA41" }} />
        <DiMysql style={{ fontSize: 30, color: "#FFFFFF" }} />
        <div style={this.styles.imgArea}>
          <Images />
        </div>
      </div >
    );
  }
}
export default Portfolio;