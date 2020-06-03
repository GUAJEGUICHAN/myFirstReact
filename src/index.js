import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

class ContactInfo extends React.Component {
  render() {
    return (
      <div>
        {this.props.contact.name} {this.props.contact.number}
      </div>
    );
  }
}

class Codelab extends React.Component {
  state = {
    value: 0,
    dataComponent: [
      {
        name: "박성일",
        number: "010-6366-6208"
      },
      {
        name: "김성일",
        number: "010-7377-6208"
      }
    ]
  };

  handleClick = () => {
    this.setState({
      value: this.state.value + 1
    });
  };

  render() {
    let text = "이게 뭡니까 제대로 됩니까?";
    const mapToComponent = data => {
      return data.map(contact => {
        return <ContactInfo contact={contact} />;
      });
    };

    return (
      <div>
        {mapToComponent(this.state.dataComponent)}
        <div>{text}</div>
        {this.props.name}안녕 드디어 됐다{this.props.number}
        <h2>{this.state.value}</h2>
        <button onClick={this.handleClick}>어서 누르지 못하겠는가!</button>
      </div>
    );
  }
}

Codelab.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number.isRequired
};
Codelab.defaultProps = {
  name: "unknown",
  number: 9999
};

class App extends React.Component {
  render() {
    return (
      <div>
        <Codelab name="신기방기" number={1} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
