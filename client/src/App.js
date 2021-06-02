import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UserAddressManager, CompareAddresses } from './components';

function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <UserAddressManager />
          </Route>
          <Route path="/compareaddresses">
            <CompareAddresses />
          </Route>
        </Switch>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
