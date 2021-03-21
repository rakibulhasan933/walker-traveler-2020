import React from 'react';

import Main from './components/Main';
import { AuthProvider } from './utils/useAuth';

function App() {
  return (
    <>
      <AuthProvider>
        <Main />
      </AuthProvider>
    </>
  );
}

export default App;
