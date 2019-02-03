import React from 'react';
import ReactDOM from "react-dom";

import AppProvider from '../../../src/components/AppProvider';

const theme = {
  colors: {
    topBar: {
      background: '#357997',
    },
  },
  logo: {
    width: 124,
    topBarSource:
      'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999',
    url: 'http://jadedpixel.com',
    accessibilityLabel: 'Jaded Pixel',
    contextualSaveBarSource:
      'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-gray.svg?6215648040070010999',
  },
};

export default class UXPinWrapper extends React.Component {
  render() {
    return <AppProvider theme={theme}>{this.props.children}</AppProvider>;
  }
}
