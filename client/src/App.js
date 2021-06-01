import logo from './logo.svg';
import './App.css';

import { QueryClient, QueryClientProvider } from 'react-query'

import { UserAddressManager } from './components';

function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <UserAddressManager />
    </QueryClientProvider>
  );
}

export default App;
