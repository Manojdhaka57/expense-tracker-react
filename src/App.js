import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/Routes';
import { AuthProvider } from './providers/AuthProvider';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
