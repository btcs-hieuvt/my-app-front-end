import Banner from '../../components/banner'
import { SIZE } from '../../enum'

function LifestylePage() {
  return (
    <div className="mt-[60px]">
      <div className="py-12 w-full bg-[#111]">
        <div className="uppercase w-[70%] mx-auto text-4xl text-[#44d62c] font-light text-center tracking-wide">
          Lifestyle
        </div>
      </div>
      <Banner
        textSize={SIZE.MEDIUM}
        stringStyle="mb-3"
        title="CHAIRS"
        description="Discover the support you need to power through gaming marathons."
        img="https://assets2.razerzone.com/images/pnx.assets/0666dc773bd5460ed41bf6e1a1ebad3a/lifestyle-chairs-category-banner.jpg"
      />
      <Banner
        textSize={SIZE.MEDIUM}
        stringStyle="mb-3"
        title="SNEKI SNEK ANIMATION SERIES"
        description="Can’t get enough of our adorable cutie? Catch Sneki Snek and friends in an all-new season as they continue to show why sustainability is important!"
        img="https://assets2.razerzone.com/images/pnx.assets/f016346e8c8e71ae1ad6731d95943a86/sneki-snek-s2-desktop-cat-banner.jpg"
      />
      <Banner
        textSize={SIZE.MEDIUM}
        stringStyle="mb-3"
        title="COLLABS"
        description="We’re always looking to keep our gear fresh, and it doesn’t get any better than working with other brands that we as gamers love and get hype for."
        img="https://assets2.razerzone.com/images/pnx.assets/25525a620ccdb5488244fde60674f5e0/collabs-category-1920x700-desktop.jpg"
      />
      <Banner
        textSize={SIZE.MEDIUM}
        stringStyle="mb-3"
        title="RESPAWN"
        description="A gamer’s mind is the most important tool on the virtual battlefield. Help tap into your full potential with our mental performance drink mix or gum to take on the competition."
        img="https://assets2.razerzone.com/images/pnx.assets/3bb1bbc90757131821e400fa6ada15dd/lifestyle-respawn.jpg"
      />
    </div>
  )
}

export default LifestylePage
