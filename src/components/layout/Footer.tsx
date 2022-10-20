import React from 'react'
import { TiSocialFacebook, TiSocialInstagram, TiSocialTwitter } from 'react-icons/ti'
function Footer() {
  return (
    <div className="w-full h-[371px] bg-[#111] text-[#999]">
      <div className="w-[1200px] h-full mx-auto py-[25px] pr-[30px] text-xs">
        {/* conteny */}
        <div className="w-full flex columns-5 ">
          <div className="px-3 min-w-[238px]">
            <ul>
              <li className="text-[#fff] mb-3">Shop</li>
              <li className="hover:text-[#fff] hover:underline mb-3 cursor-pointer">RazerStore</li>
              <li className="hover:text-[#fff] hover:underline mb-3 cursor-pointer">RazerCafe</li>
              <li className="hover:text-[#fff] hover:underline mb-3 cursor-pointer">Store Location</li>
              <li className="hover:text-[#fff] hover:underline mb-3 cursor-pointer">Purchase Programs</li>
              <li className="hover:text-[#fff] hover:underline mb-3 cursor-pointer">Education</li>
              <li className="hover:text-[#fff] hover:underline mb-3 cursor-pointer">Exclusives</li>
              <li className="hover:text-[#fff] hover:underline mb-3 cursor-pointer">RazerStore Rewards</li>
              <li className="hover:text-[#fff] hover:underline mb-3 cursor-pointer">Newsletter</li>
            </ul>
          </div>
          <div className="px-3 min-w-[238px]">
            <ul>
              <li className="text-[#fff] mb-3">Explore</li>
              <li className="hover:text-[#fff] hover:underline mb-3 cursor-pointer">Technology</li>
              <li className="hover:text-[#fff] hover:underline mb-3 cursor-pointer">Chroma RGB</li>
              <li className="hover:text-[#fff] hover:underline mb-3 cursor-pointer">Concepts</li>
              <li className="hover:text-[#fff] hover:underline mb-3 cursor-pointer">Esport</li>
              <li className="hover:text-[#fff] hover:underline mb-3 cursor-pointer">Collabs</li>
            </ul>
          </div>
          <div className="px-3 min-w-[238px]">
            <ul>
              <li className="text-[#fff] mb-3">Support</li>
              <li className="hover:text-[#fff] hover:underline mb-3 cursor-pointer">get Help</li>
              <li className="hover:text-[#fff] hover:underline mb-3 cursor-pointer">Registration & Warranty</li>
              <li className="hover:text-[#fff] hover:underline mb-3 cursor-pointer">RazerStore Support</li>
              <li className="hover:text-[#fff] hover:underline mb-3 cursor-pointer">RazerCare</li>
              <li className="hover:text-[#fff] hover:underline mb-3 cursor-pointer">Manage Razer ID</li>
              <li className="hover:text-[#fff] hover:underline mb-3 cursor-pointer">Support Videos</li>
              <li className="hover:text-[#fff] hover:underline mb-3 cursor-pointer">Accessibility Statement</li>
            </ul>
          </div>
          <div className="px-3 min-w-[238px]">
            <ul>
              <li className="text-[#fff] mb-3">Company</li>
              <li className="hover:text-[#fff] hover:underline mb-3 cursor-pointer">About Us</li>
              <li className="hover:text-[#fff] hover:underline mb-3 cursor-pointer">Careers</li>
              <li className="hover:text-[#fff] hover:underline mb-3 cursor-pointer">Press Room</li>
              <li className="hover:text-[#fff] hover:underline mb-3 cursor-pointer">zVentures</li>
              <li className="hover:text-[#fff] hover:underline mb-3 cursor-pointer">Contact Us</li>
            </ul>
          </div>
          <div className="px-3 min-w-[238px] text-[#44d62c]">
            <h1 className="text-sm pr-2 pb-1">FOR GAMERS. BY GAMERS.™</h1>
            <div className="w-full flex items-center justify-end px-6 text-lg">
              <div className="cursor-pointer w-[30px] h-[30px] mx-[5px] rounded-full border border-[#44d62c] flex justify-center items-center scale-[0.85]">
                <TiSocialFacebook />
              </div>
              <div className="cursor-pointer w-[30px] h-[30px] mx-[5px] rounded-full border border-[#44d62c] flex justify-center items-center scale-[0.85]">
                <TiSocialInstagram />
              </div>
              <div className="cursor-pointer w-[30px] h-[30px] mx-[5px] rounded-full border border-[#44d62c] flex justify-center items-center scale-[0.85]">
                <TiSocialTwitter />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[98%] h-[0.1px] mx-3 my-4 bg-[#999] pr-4"></div>
        {/* copy right */}
        <div className="flex items-center px-3 justify-between">
          <div className="flex items-center">
            <p className="mr-9">Copyright © 2022 Razer Inc. All rights reserved.</p>
            <div className="flex items-center">
              <div className="pr-4 border-r-[1px] border-[#999] cursor-pointer hover:text-[#fff] hover:underline">
                Site Map
              </div>
              <div className="px-4 border-r-[1px] border-[#999] cursor-pointer hover:text-[#fff] hover:underline">
                Legal Terms
              </div>
              <div className="px-4 border-r-[1px] border-[#999] cursor-pointer hover:text-[#fff] hover:underline">
                Privacy Policy
              </div>
              <div className="pl-4 hover:text-[#fff] hover:underline cursor-pointer">Cookie Policy</div>
            </div>
          </div>

          <div className="float-right">Clone by Vu Trung Hieu</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
