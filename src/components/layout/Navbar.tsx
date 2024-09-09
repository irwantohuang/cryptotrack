import { Link, useLocation } from 'react-router-dom'
import { menus } from '../../data/menus';

const Navbar = () => {
    const location = useLocation();
    return (
        <nav className='px-4'>
            <ul className='flex items-center gap-2 lg:gap-4'>
                { menus.map((menu) => (
                    <li key={ menu.id } className={`px-2 lg:px-6 py-1 rounded-full ${location.pathname === menu.path ? 'md:bg-gradient-to-br from-primary to-primary-black hover:scale-105 shadow-inner text-primary-white-200' : ''}`}>
                        <Link to={ menu.path } className={`hidden md:block text-lg font-semibold transition duration-150 hover:text-primary-white-300 ${location.pathname === menu.path ? 'text-primary-white-200' : 'text-primary-black'}`}>{ menu.name }</Link>
                        <Link to={ menu.path } className={`md:hidden hover:scale-110 transition-all duration-150 rounded shadow-inner flex items-center justify-center p-2 sm:p-3 ${location.pathname === menu.path ? 'bg-primary scale-105' : 'bg-primary-black-200 hover:bg-primary'}`}>
                            <menu.icon className='size-[28px] sm:size-[35px]' />
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar