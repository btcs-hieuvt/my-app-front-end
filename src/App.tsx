import { Routes, Route } from 'react-router-dom'
import DefaultLayout from './components/layout/DefautLayout'
import useGetAllCateGory from './hooks/useGetAllCateGory'
import useGetAllProduct from './hooks/useGetAllProduct'
import useGetProductsByCategory from './hooks/useGetProductsByCategory'
import useGetQuantityItemCart from './hooks/useGetQuantityItemCart'
import Cart from './page/Cart'
import CommunityPage from './page/Community'
import ConsolePage from './page/Console'
import HomePage from './page/Home'
import LifestylePage from './page/Lifestyle'
import MobilePage from './page/Mobile'
import Page404 from './page/Page404'
import PCPage from './page/pc'
import ProductDetail from './page/ProductDetail'
import SearchPage from './page/Search'
import StorePage from './page/Store'
import Audio from './page/Store/Audio'
import Chair from './page/Store/Chair'
import Console from './page/Store/Console'
import Keyboard from './page/Store/Keyboard'
import MainStore from './page/Store/MainStore'
import Mice from './page/Store/Mice'
import SupportPage from './page/Support'

function App() {
  useGetAllProduct()
  useGetAllCateGory()
  useGetProductsByCategory()
  useGetQuantityItemCart()
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="store" element={<StorePage />}>
            <Route index element={<MainStore />} />
            <Route path="Keyboard" element={<Keyboard />} />
            <Route path="Mice" element={<Mice />} />
            <Route path="Audio" element={<Audio />} />
            <Route path="Chair" element={<Chair />} />
            <Route path="Console" element={<Console />} />
          </Route>
          <Route path="pc" element={<PCPage />} />
          <Route path="console" element={<ConsolePage />} />
          <Route path="mobile" element={<MobilePage />} />
          <Route path="lifestyle" element={<LifestylePage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="detail/:id" element={<ProductDetail />} />
          <Route path="search/:slug" element={<SearchPage />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
