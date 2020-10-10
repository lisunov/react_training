import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/';

// function WhoAmI({name, surname, link}) {
//   return (
//     <>
//       <h1>My name is {name}, surname - {surname}</h1>
//       <a href = {link} >My profile</a>
//     </>
//   )
// }

class WhoAmI extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   years: 26,
  //   //   nation: "RUS"
  //   // }
  //   //this.nextYear = this.nextYear.bind(this);
  //   // this.nextYear = () => {
  //   //   this.setState(state => ({
  //   //     years: ++state.years
  //   //   }));
  //   // }
  // }

  state = {
    years: 26,
    nation: "RUS"
  }

  nextYear = () => {
    this.setState(state => ({
      years: ++state.years
    }));
  }

  // nextYear() {
  //   this.setState(state => ({
  //     years: ++state.years
  //   }));
  // }
  render() {
    const {name, surname, link} = this.props;
    const {years} = this.state;
    return (
      <>
        <button onClick={this.nextYear}>++</button>
        <h1>My name is {name}, surname - {surname}, age - {years}</h1>
        <a href = {link} >My profile</a>
      </>
    )
  }
}

const All = () => {
  return (
    <>
      <WhoAmI name="John" surname={"Smith"} link={"facebook.com"}/>
      <WhoAmI name="Ivan" surname={"Petrov"} link={"facebook.com"}/>
      <WhoAmI name="Alex" surname={"Lisunoc"} link={"facebook.com"}/>
    </>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
