import { createBrowserRouter, Navigate } from 'react-router'
import App from '../components/App'
import Store from '../components/Store'
import About from '../components/About'
import DetailGames from '../components/DetailGames'
import GameBasket from '../components/GameBasket'
import WishList from '../components/WishList'
import AdvancedSearch from '../components/AdvancedSearch'
import ErrorPage from '../components/ErrorPage'

const router = createBrowserRouter([
  { path: '/', element: <App />,
    children: [
      { index: true, element: <Navigate to="/store" replace /> },
      { path: 'store', element: <Store /> },
      { path: 'about', element: <About /> },
      { path: 'game/:slug', element: <DetailGames /> },
      { path: 'basket', element: <GameBasket /> },
      { path: 'wishlist', element: <WishList /> },
      { path: 'advancedsearch', element: <AdvancedSearch /> },
    ],
  },
  { path: '*', element: <ErrorPage /> },
])

export default router