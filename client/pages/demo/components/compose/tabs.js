/* eslint-disable react/jsx-filename-extension */
import React from 'react';

export default class Tabs extends React.Component {
  state = {
    activeIndex: 0,
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;
    const { activeIndex } = this.state;
    const newChildren = React.Children.map(children, (child, index) => {
      if (child.type) {
        return React.cloneElement(child, {
          active: activeIndex === index,
          onClick: () => this.setState({ activeIndex: index }),
        });
      }
      return child;
    });

    return (
      <React.Fragment>
        {newChildren}
      </React.Fragment>
    );
  }
}
