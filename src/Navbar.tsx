import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation();
    return (
        <div className='text-red-500 text-center'>
            <h1>{location.pathname}</h1>
            <div className='flex items-center gap-2'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    )
}

export default Navbar