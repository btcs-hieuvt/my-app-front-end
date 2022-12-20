import React from 'react'
import Banner from '../../components/banner'
import { SIZE } from '../../enum'

function CommunityPage() {
  return (
    <div className="mt-[60px]">
      <div className="w-full py-20 bg-[#44d62c]">
        <div className="w-[58%] mx-auto text-center text-lg text-black font-light space-y-3">
          <p>
            Welcome to the Razer Community – where millions of gamers connect to get our latest news, take part in
            giveaways, and interact with us be it live on stream, or through our posts.
          </p>
          <p>
            Have an awesome Razer setup you’d like to show us? Drawn a cool piece of fanart? Drop us a message or tag us
            @Razer on our social pages. You might just get featured and be rewarded with cool Razer swag.
          </p>
        </div>
      </div>
      <Banner
        textSize={SIZE.BIG}
        stringStyle="mb-3"
        description="WIN IT YOUR WAY"
        img="https://assets2.razerzone.com/images/pnx.assets/4ba81e9537f3b39f0ff8768ef1a2165c/razer-brand-campaign-2022-category-1920x700-desktop.jpg"
      />
      <Banner
        textSize={SIZE.BIG}
        stringStyle="mb-3"
        description="DON’T KNOW WHERE TO BEGIN? START YOUR JOURNEY HERE."
        img="https://assets2.razerzone.com/images/pnx.assets/a53db448965f99aee538831a3e3df0f1/razer-community.jpg"
      />
      <Banner
        textSize={SIZE.BIG}
        stringStyle="mb-3"
        description="WANT TO KNOW THE NEXT TIME WE GO LIVE ON STREAM?"
        img="https://assets2.razerzone.com/images/pnx.assets/0b335ec990ba572534f8215e14e8008c/razer-community-stream.jpg"
      />
      <Banner
        textSize={SIZE.BIG}
        description="GAME FOR SOME COMPETITION? LEARN MORE ABOUT TEAM RAZER."
        img="https://assets2.razerzone.com/images/pnx.assets/c76379f9591f69e1df778c1354aac718/razer-esports.jpg"
      />
      <div
        className="w-full min-h-[300px] mt-4 bg-contain bg-no-repeat bg-center scale-110 flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url("https://assets2.razerzone.com/images/pnx.assets/3200ecc76aead21f41906b9dfb123092/razer-community-giveaways.jpg")`,
        }}
      >
        <p className="w-[60%] text-center text-3xl tracking-tight font-light">
          JOIN OUR MILLIONS OF GAMERS TODAY BY FOLLOWING US ON:
        </p>
        <div className="w-[55%] flex justify-center">
          <div className="px-8 pt-8">
            <img
              className="w-16 h-16"
              src="https://assets2.razerzone.com/images/pnx.assets/cb702474cae6b8f5e25f72323e4430c0/facebook.svg"
              alt=""
            />
          </div>
          <div className="px-8 pt-8">
            <img
              className="w-16 h-16"
              src="https://assets2.razerzone.com/images/pnx.assets/cb702474cae6b8f5e25f72323e4430c0/instagram.svg"
              alt=""
            />
          </div>
          <div className="px-8 pt-8">
            <img
              className="w-16 h-16"
              src="https://assets2.razerzone.com/images/pnx.assets/cb702474cae6b8f5e25f72323e4430c0/twitter.svg"
              alt=""
            />
          </div>
          <div className="px-8 pt-8">
            <img
              className="w-16 h-16"
              src="https://assets2.razerzone.com/images/pnx.assets/cb702474cae6b8f5e25f72323e4430c0/youtube.svg"
              alt=""
            />
          </div>
          <div className="px-8 pt-8">
            <img
              className="w-16 h-16"
              src="https://assets2.razerzone.com/images/pnx.assets/cb702474cae6b8f5e25f72323e4430c0/tiktok.svg"
              alt=""
            />
          </div>
          <div className="px-8 pt-8">
            <img
              className="w-16 h-16"
              src="https://assets2.razerzone.com/images/pnx.assets/cb702474cae6b8f5e25f72323e4430c0/twitch.svg"
              alt=""
            />
          </div>
          <div className="px-8 pt-8">
            <img
              className="w-16 h-16"
              src="https://assets2.razerzone.com/images/pnx.assets/45dd94525553bfeeb5b34f4c636bda4e/discord-icon.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommunityPage
