import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from './routes';

export const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
};
