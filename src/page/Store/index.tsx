import ListCategory from '../../components/ListCategory'
import { Outlet } from 'react-router-dom'

function StorePage() {
  return (
    <div className="mt-[60px] mb-10">
      {/* category */}
      <div className="w-full bg-black">
        <div className="w-[1232px] mx-auto pt-10 px-4">
          <div className="h-[142px] pb-10 flex items-center justify-evenly font-sans">
            <ListCategory />
          </div>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default StorePage
