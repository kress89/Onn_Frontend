import React from 'react';
import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';

import PredictPage from './page/PredictPage';
import BaseLayout from './component/layout/BaseLayout';

function App() {
  return (
    <BaseLayout>
      <PredictPage />
    </BaseLayout>
  );
}

export default App;
