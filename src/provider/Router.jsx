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
  {
    path: '/', Component: App,
    children: [
      { index: true, Component: () => <Navigate to="/store" replace /> },
      { path: 'store', Component: Store },
      { path: 'about', Component: About },
      { path: 'game/:slug', Component: DetailGames },
      { path: 'basket', Component: GameBasket },
      { path: 'wishlist', Component: WishList },
      { path: 'advancedsearch', Component: AdvancedSearch },
    ],
  },
  { path: '*', Component: ErrorPage },
])

export default router