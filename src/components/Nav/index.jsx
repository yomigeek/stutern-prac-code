import React, {Component} from "react";
import Welcome from "./../Welcome";
import Button from "../Button";
import logo from "../../assets/logo.svg";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 90,
      name: "",
    };
  }

  render() {
    const name = "Yomi";
    const {pageTitle} = this.props;

    return (
      <>
        <img src={logo} />
        <div>My state: {this.state.count}</div>
        <div>{pageTitle}</div>
        <Welcome studentName={name} />
        <Button
          text={"Update Count"}
          buttonAction={() => this.setState({count: this.state.count + 1})}
          doubleClickAction={() => this.setState({count: this.state.count + 2})}
          cssClass="Button-primary"
        />
      </>
    );
  }
}

export default Nav;
