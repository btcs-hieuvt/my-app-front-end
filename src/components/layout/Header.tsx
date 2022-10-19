import React, { useState } from 'react'
import { BsSearch, BsCart } from 'react-icons/bs'
import { Link, useLocation } from 'react-router-dom'
import { LOGO_URL, ROUTES } from '../../constants'
import SeacrhBar from '../SeacrhBar'

function Header() {
  const [showSearch, setShowSearch] = useState(false)
  const location = useLocation()

  return (
    <header className="w-full min-h-[60px] px-24 flex  items-center bg-black text-[#888888] font-['Helvetica'] border-b-[2px] border-b-[#44d62c]">
      <div className="w-[1200px] mx-auto flex  items-center justify-between text-condensed tracking-wide">
        <Link to={ROUTES.HOME} className="w-9 h-9">
          <img src={LOGO_URL} alt="Logo" className="w-9 h-9" />
        </Link>
        <div className=" flex item-center justify-between">
          {!showSearch ? (
            <div className="min-w-[1100px] flex justify-between">
              <Link
                to={ROUTES.HOME}
                className={`hover:text-[#fff] ${location.pathname === ROUTES.HOME ? 'text-[#fff]' : ''}`}
              >
                Home
              </Link>
              <Link
                to={ROUTES.STORE}
                className={`hover:text-[#fff] ${location.pathname === ROUTES.STORE ? 'text-[#fff]' : ''}`}
              >
                Store
              </Link>
              <Link
                to={ROUTES.PC}
                className={`hover:text-[#fff] ${location.pathname === ROUTES.PC ? 'text-[#fff]' : ''}`}
              >
                Pc
              </Link>
              <Link
                to={ROUTES.MOBILE}
                className={`hover:text-[#fff] ${location.pathname === ROUTES.MOBILE ? 'text-[#fff]' : ''}`}
              >
                Mobile
              </Link>
              <Link
                to={ROUTES.CONSOLE}
                className={`hover:text-[#fff] ${location.pathname === ROUTES.CONSOLE ? 'text-[#fff]' : ''}`}
              >
                Console
              </Link>
              <Link
                to={ROUTES.LIFESTYLE}
                className={`hover:text-[#fff] ${location.pathname === ROUTES.LIFESTYLE ? 'text-[#fff]' : ''}`}
              >
                Lifestyle
              </Link>
              <Link
                to={ROUTES.COMMUNITY}
                className={`hover:text-[#fff] ${location.pathname === ROUTES.COMMUNITY ? 'text-[#fff]' : ''}`}
              >
                Community
              </Link>
              <Link
                to={ROUTES.SUPPORT}
                className={`hover:text-[#fff] ${location.pathname === ROUTES.SUPPORT ? 'text-[#fff]' : ''}`}
              >
                Support
              </Link>
              {/* control */}
              <div className="flex item-center justify-around min-w-[120px]">
                <div>
                  <BsSearch
                    className="w-[18px] h-[18px] cursor-pointer hover:text-[#fff]"
                    onClick={() => setShowSearch(true)}
                  />
                </div>
                <div>
                  <BsCart className="w-[18px] h-[18px] cursor-pointer hover:text-[#fff]" />
                </div>
              </div>
            </div>
          ) : (
            <SeacrhBar setShowSearch={setShowSearch} />
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
