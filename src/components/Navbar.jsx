import { appleImg, bagImg, searchImg } from '../utils'
import { navLists } from '../constants'
const Navbar = () => {
  return (
    <header className='w-full flex justify-between items-center py-5 sm:px-10 px-5'>
        <nav className='flex w-full screen-max-width'>
            <img src={appleImg} alt="Apple" height={18} width={14}/>
            <div className='flex flex-1 justify-center max-sm:hidden'>
                {navLists.map((navList, index) => (
                    <div key={index} href="/" className='px-5 text-gray cursor-pointer hover:text-white transition-all'>{navList}</div>
                ))}
            </div>
            <div className='flex items-baseline max-sm:justify-end max-sm:flex-1 gap-7'>
                <img src={searchImg} alt="Search" width={18} height={18} />
                <img src={bagImg} alt="Bag" width={18} height={18} />
            </div>
        </nav>
    </header>
  )
}

export default Navbar