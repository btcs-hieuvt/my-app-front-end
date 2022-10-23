import React from 'react'
import Banner from '../../components/banner'
import { SIZE } from '../../enum'

function HomePage() {
  return (
    <>
      <div className="mt-[60px]">
        <Banner
          textSize={SIZE.BIG}
          stringStyle="mb-3"
          title="RAZERCON2022"
          description="A DIGITAL CELEBRATION FOR GAMERS. BY GAMERS."
          img="https://assets2.razerzone.com/images/pnx.assets/d24672112ff237ece31fd792eb39dba6/razercon2022-homepage-desktop1x.jpg"
        />
        <Banner
          textSize={SIZE.BIG}
          stringStyle="mb-3"
          title="RAZER EDGE"
          description="THE ULTIMATE ANDROID GAMING HANDHELD"
          img="https://assets2.razerzone.com/images/pnx.assets/d24672112ff237ece31fd792eb39dba6/razer-edge-homepage-desktop.jpg"
        />
        <Banner
          textSize={SIZE.BIG}
          stringStyle="mb-3"
          title="RAZER QUARTZ, MERCURY & WHITE"
          description="BOLD. FRESH. CLEAN."
          img="https://assets2.razerzone.com/images/pnx.assets/d24672112ff237ece31fd792eb39dba6/razer-quartz-mercury-white-homepage-desktop.jpg"
        />
      </div>
      {/* banner medium size */}
      <div className=" grid grid-cols-2 gap-2 mb-3">
        <Banner
          textSize={SIZE.MEDIUM}
          title="NEW RAZER BLADE 14"
          description="ULTRA QUARTZ. ULTRA POWERFUL."
          img="https://assets2.razerzone.com/images/pnx.assets/84d0946021d11b959bda0545c4d4c234/razer-blade14-quartz-2022-950x580-desktop.jpg"
        />
        <Banner
          textSize={SIZE.MEDIUM}
          title="RAZER BLUE SCREEN"
          description="SET THE STAGE"
          img="https://assets2.razerzone.com/images/pnx.assets/84d0946021d11b959bda0545c4d4c234/razer-blue-screen-b-950x580-desktop.jpg"
        />
        <Banner
          textSize={SIZE.MEDIUM}
          title="THE PROS' CHOICE"
          description="ESPORTS GEAR SPECIALS"
          img="https://assets2.razerzone.com/images/pnx.assets/84d0946021d11b959bda0545c4d4c234/league-of-legends-worlds-b-950x580-desktop.jpg"
        />
        <Banner
          textSize={SIZE.MEDIUM}
          title="MARVEL'S SPIDER-MAN REMASTERED"
          description="INCLUDED WITH SELECT RAZER BLADES"
          img="https://assets2.razerzone.com/images/pnx.assets/84d0946021d11b959bda0545c4d4c234/blade-game-bundle-b-950x580-desktop.jpg"
        />
        <Banner
          textSize={SIZE.MEDIUM}
          title="WIRELESS CONTROLLER & CHARGING STAND"
          description="RAZER LIMITED EDITION"
          img="https://assets2.razerzone.com/images/pnx.assets/84d0946021d11b959bda0545c4d4c234/uqcs-razer-edition-950x580-desktop.jpg"
        />
        <Banner
          textSize={SIZE.MEDIUM}
          title="RAZER | SONIC THE HEDGEHOG"
          description="NOW AVAILABLE ON RAZER CUSTOMS"
          img="https://assets2.razerzone.com/images/pnx.assets/84d0946021d11b959bda0545c4d4c234/sega-sonic-customs-2021-b-950x580-desktop.jpg"
        />
      </div>
    </>
  )
}

export default HomePage
