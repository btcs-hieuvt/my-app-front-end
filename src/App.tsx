import { Routes, Route } from 'react-router-dom'
import DefaultLayout from './components/layout/DefautLayout'
import CommunityPage from './page/Community'
import ConsolePage from './page/Console'
import HomePage from './page/Home'
import LifestylePage from './page/Lifestyle'
import MobilePage from './page/Mobile'
import PCPage from './page/pc'
import StorePage from './page/Store'
import SupportPage from './page/Support'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/pc" element={<PCPage />} />
          <Route path="/console" element={<ConsolePage />} />
          <Route path="/mobile" element={<MobilePage />} />
          <Route path="/lifestyle" element={<LifestylePage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/support" element={<SupportPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
