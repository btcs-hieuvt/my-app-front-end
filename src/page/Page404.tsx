import { Link } from 'react-router-dom'

function Page404() {
  return (
    <div className="mt-[60px] relative">
      <div className="w-full h-[300px] bg-[#222] pt-8">
        <p className="uppercase py-8 text-[#44d62c] font-bold text-center text-6xl">Error 404</p>
        <p className="text-center">
          Oops, it seems Sneki Snek can’t find your link! Lead this cutie back to{' '}
          <Link to={'/'} className="text-[#44d62c] cursor-pointer hover:underline">
            Razer.com.
          </Link>{' '}
        </p>
      </div>
    </div>
  )
}

export default Page404
