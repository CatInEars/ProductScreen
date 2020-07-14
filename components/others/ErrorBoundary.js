import React from 'react';
// Не бейте, но это чисто что бы ворнинг убрать 

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  render() {
    if (!!this.state.hasError) {
      return (
        <Text>Error</Text>
      );
    }
    return (
      this.props.children
    );
  }
}