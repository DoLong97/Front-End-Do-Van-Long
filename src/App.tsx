import React from 'react';
import { AppLayout } from './components/layout/AppLayout';
import { AppRouter } from './router/AppRouter';

function App() {
  return (
    <AppLayout>
      <AppRouter/>
    </AppLayout>
  );
}

export default App;
