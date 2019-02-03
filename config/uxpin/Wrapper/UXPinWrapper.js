import React from 'react';
import AppProvider from '../../../src/components/AppProvider';

export default function UXPinWrapper({ children }){
  return <AppProvider>{children}</AppProvider>;
}
