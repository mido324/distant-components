import React, { Component } from 'react';
import CreditCardApplication from './CreditCardApplication';

export default class Footer extends Component {
  render() {
const {loggedInAs, isCreditCardHolder, setLoggedInAs, setIsCreditCardHolder} = this.props;
    return (
      <div className="footer">
        <div className="box" />
        <div className="box" />
        <div className="box">
          <CreditCardApplication loggedInAs ={loggedInAs}
             isCreditCardHolder = {isCreditCardHolder}
             setLoggedInAs = {this.setLoggedInAs } 
             setIsCreditCardHolder = {setIsCreditCardHolder}/>

        </div>
        <div className="box" />
      </div>
    )
  }
};
