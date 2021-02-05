import React from 'react';
import {AuthProvider} from './AuthProvider';
import Routs from './Routes';

export default function Providers() {
  return (
    <AuthProvider>
      <Routs />
    </AuthProvider>
  );
}
