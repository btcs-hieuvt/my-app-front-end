import React from 'react'
import Banner from '../../components/banner'
import CartNews from '../../components/card/CartNews'
import { SIZE } from '../../enum'

function PCPage() {
  return (
    <div className="mt-[60px] mb-10 w-full mx-auto">
      <div className="w-full bg-[#111] py-12">
        <div className="w-[60%] mx-auto ">
          <p className="text-center text-4xl text-[#44d62c] mb-4">LAPTOPS & DESKTOPS</p>
          <p className="text-lg text-center text-[#999] font-light">
            Razer systems are crafted to provide the ultimate performance for gaming and work. Enjoy desktop power made
            mobile with our gaming and productivity laptops, or go all-out for your build as you assemble the most
            powerful aRGB Chroma powered battlestation.
          </p>
        </div>
      </div>
      <div className=" bg-[#252525] py-6">
        <div className="w-[80%] mx-auto grid grid-cols-3 gap-4">
          <CartNews
            img="https://assets2.razerzone.com/images/pnx.assets/381e915d58d2b9759725c30a9f2c3a0f/razer-blade-15-2022-laptop-500x500.jpg"
            title="LAPTOPS"
            description="Sleek high-performance gaming laptops"
          />
          <CartNews
            img="https://assets2.razerzone.com/images/pnx.assets/381e915d58d2b9759725c30a9f2c3a0f/desktops-components-category--500x500.jpg"
            title="DESKTOPS & COMPONENTS"
            description="Engineered for enthusiasts and designed for performance"
          />
          <CartNews
            img="https://assets2.razerzone.com/images/pnx.assets/381e915d58d2b9759725c30a9f2c3a0f/accessories-category-500x500.jpg"
            title="ACCESSORIES"
            description="Crafting the perfect gaming experience"
          />
        </div>
      </div>
      <div className="w-full bg-[#111] py-12">
        <div className="w-[60%] mx-auto ">
          <p className="text-center text-4xl text-[#44d62c] mb-4">PERIPHERALS</p>
          <p className="text-lg text-center text-[#999] font-light">
            The most powerful rigs mean nothing without the high-performance gear to match. Understand what it means to
            wield the unfair advantage as you experience industry-leading levels of precision, control, and immersion.
          </p>
        </div>
      </div>
      <div className=" bg-[#252525] py-6">
        <div className="w-[80%] mx-auto grid grid-cols-3 gap-4">
          <CartNews
            img="https://assets2.razerzone.com/images/pnx.assets/8127df0df8433ada296a732b23f3b9b4/mice-category-500x500.jpg"
            title="MICE"
            description="Pixel-perfect precision for any hand size and grip style"
          />
          <CartNews
            img="https://assets2.razerzone.com/images/pnx.assets/8127df0df8433ada296a732b23f3b9b4/mousemats-category-500x500.jpg"
            title="MOUSE MATS"
            description="Soft, hard, and hybrid designs to enhance your control"
          />
          <CartNews
            img="https://assets2.razerzone.com/images/pnx.assets/8127df0df8433ada296a732b23f3b9b4/keyboards-category-500x500.jpg"
            title="KEYBOARDS"
            description="Optical, mechanical, and every type in between"
          />
          <CartNews
            img="https://assets2.razerzone.com/images/pnx.assets/8127df0df8433ada296a732b23f3b9b4/headsets-category-500x500.jpg"
            title="HEADSETS"
            description="Tuned for gaming, lifestyle, or a perfect mix of both"
          />
          <CartNews
            img="https://assets2.razerzone.com/images/pnx.assets/8127df0df8433ada296a732b23f3b9b4/speakers-category-500x500.jpg"
            title="SPEAKERS"
            description="Set the soundstage for full-range immersion"
          />
          <CartNews
            img="https://assets2.razerzone.com/images/pnx.assets/8127df0df8433ada296a732b23f3b9b4/chairs-category-500x500.jpg"
            title="CHAIRS"
            description="Perfecting the science of comfort and support"
          />
        </div>
      </div>
      <Banner
        textSize={SIZE.MEDIUM}
        stringStyle="mb-3"
        title="COMPLETE YOUR SETUP"
        description="A Color For Every Style"
        img="https://assets2.razerzone.com/images/pnx.assets/cd2d636f26bd91dd99923c71b9e84a83/complete-your-setup-campaign-category-banner-desktop.jpg"
      />
      <div className="w-full bg-[#111] py-12">
        <div className="w-[60%] mx-auto ">
          <p className="text-center text-4xl text-[#44d62c] mb-4">SOFTWARE</p>
          <p className="text-lg text-center text-[#999] font-light">
            Providing an optimal gaming experience to over 100 million users, Razer's software platforms are designed to
            enhance the performance of our gear and your PC—from custom keybinds to personalized Chroma effects, game
            optimizations to immersive audio, and more.
          </p>
        </div>
      </div>
      <div className=" bg-[#252525] py-6">
        <div className="w-[80%] mx-auto grid grid-cols-3 gap-4">
          <CartNews
            img="https://assets2.razerzone.com/images/pnx.assets/cf07588e1e08bf7767da32b1181bc4bf/razer-synapse-category-500x500.jpg"
            title="RAZER SYNAPSE"
            description="Maximize your unfair advantage with Razer Synapse 3, the unified cloud-based hardware configuration tool that takes your Razer devices to the next level. "
          />
          <CartNews
            img="https://assets2.razerzone.com/images/pnx.assets/cf07588e1e08bf7767da32b1181bc4bf/razer-chroma-rgb-category-500x500.jpg"
            title="RAZER CHROMA™ RGB"
            description="Experience full RGB customization and deeper immersion with the world’s largest lighting ecosystem that supports hundreds of games and thousands of devices."
          />
          <CartNews
            img="https://assets2.razerzone.com/images/pnx.assets/cf07588e1e08bf7767da32b1181bc4bf/razer-cortex-category-500x500.jpg"
            title="RAZER CORTEX"
            description="Unlock your PC’s full potential and enhance your gameplay with Razer: Cortex."
          />
          <CartNews
            img="https://assets2.razerzone.com/images/pnx.assets/cf07588e1e08bf7767da32b1181bc4bf/thx-spatial-audio-category-500x500.jpg"
            title="THX SPATIAL AUDIO"
            description="Unlock full customization with a surround sound application featuring more extensive audio calibration and custom-tuned game profiles."
          />
          <CartNews
            img="https://assets2.razerzone.com/images/pnx.assets/cf07588e1e08bf7767da32b1181bc4bf/71-surround-sound-category-500x500.jpg"
            title="7.1 SURROUND SOUND"
            description="Experience accurate positional sound for the competitive advantage."
          />
          <CartNews
            img="https://assets2.razerzone.com/images/pnx.assets/cf07588e1e08bf7767da32b1181bc4bf/streamer-companion-app-category-500x500.jpg"
            title="STREAMER COMPANION APP"
            description="Put on a show for your stream by customizing how your Seiren Emote or Emote display reacts to your audience."
          />
        </div>
      </div>
      <div
        className={`w-full min-h-[300px] mt-9 bg-contain bg-no-repeat bg-center scale-125 relative`}
        style={{
          backgroundImage: `url("https://assets2.razerzone.com/images/pnx.assets/d20a9f320f5d60e2b92043b7d4cc2f7a/ms-audio-banner-desktop.jpg")`,
        }}
      >
        <div className="absolute right-[-240px] w-[60%] h-full mx-auto flex items-center">
          <div className="w-[480px]">
            <p className="text-xl text-[#44d62c] my-4">PLAYTIME. ANYTIME</p>
            <div className="text-base text-[#888] space-y-1 font-light">
              <p>Play the latest games with graphics that rival reality.</p>
              <p>DirectX 12 enables breathtaking, immersive graphics at high frame rates*.</p>
            </div>
            <img
              className="scale-90 my-3"
              src="https://assets2.razerzone.com/images/pnx.assets/d20a9f320f5d60e2b92043b7d4cc2f7a/windows11-button.jpg"
              alt=""
            />
            <span className="text-xs font-light text-[#888]">
              *DirectX 12 Ultimate available with supported games, graphics chips, and requires the latest Windows 11
              update with updated hardware drivers.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PCPage
