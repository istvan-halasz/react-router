import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import ProducstPage from './pages/Products';
import RootLayout from './pages/Root';

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />,
//     <Route path="/products" element={<ProducstPage />} />
//   </Route>
// );

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProducstPage /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

//const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
