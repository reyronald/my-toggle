// @flow
import React from "react";
import styled from "react-emotion";

const DEFAULT_WIDTH = 50;

const getColor = ({ on }) => (on ? "#3daeff" : "#d8d8d8");

const Container = styled("div")`
  border-radius: 100px;
  width: ${props => `${props.width || DEFAULT_WIDTH}px`};
  height: ${props => `${(props.width || DEFAULT_WIDTH) / 2}px`};
  cursor: pointer;
  background-color: ${props => getColor(props)};

  &:hover {
    opacity: 0.7;
    box-shadow: 0 0 ${props => `${(props.width || DEFAULT_WIDTH) / 10}px`}
      rgba(0, 0, 0, 0.5);
  }

  &,
  & > * {
    transition: 0.3s ease all;
  }

  & > * {
    border: ${props =>
      `${(props.width || DEFAULT_WIDTH) / 28}px solid ${getColor(props)}`};
    ${props => (props.on ? "transform: translate(100%, 0)" : null)};
  }
`;

const Ball = styled("div")`
  border-radius: 50%;
  width: 50%;
  height: 100%;
  background-color: white;
  box-sizing: border-box;
`;

export default class Toggle extends React.Component<{ width: number }> {
  static defaultProps = {
    width: 50
  };

  state = {
    on: false
  };

  toggle = () => {
    this.setState(({ on }) => ({ on: !on }));
  };

  render() {
    return (
      <Container
        onClick={this.toggle}
        on={this.state.on}
        width={this.props.width}
        {...this.props}
      >
        <Ball />
      </Container>
    );
  }
}
