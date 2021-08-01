import React, { Component } from 'react';
class UIErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'hasError': false,
      'error': null,
      'info': null
    };
  }

  componentDidCatch(error, info) {
    console.log('Error:', error);
    console.log('Info:', info);

    this.setState({
      'hasError': true,
      'error': error,
      'info': info
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>

        </div>
      );
    } else {
      return this.props.children;
    }
  }
}

export default UIErrorBoundary;
