import { Outlet, Link, useLocation } from "react-router-dom";

function Layout() {
    const location = useLocation();
    console.log(location)
    return(
        <div  className='md:flex md:min-h-screen'>
            <aside className='md:w-1/4 bg-blue-800 px-5 py-10'>
                <h2 className='text-4xl font-black text-center text-white'>CRM Clientes</h2>
                <nav className="mt-10">
                    <Link
                        className={`${location.pathname === '/' ? 'text-blue-300' : 'text-white'} text-2xl block hover:text-blue-300`}
                        to="/">Clientes
                    </Link>
                    <Link className={`${location.pathname === '/clientes/nuevo' ? 'text-blue-300' : 'text-white'} text-2xl block hover:text-blue-300`}
                        to="/clientes/nuevo">Nuevo cliente
                    </Link>
                </nav>
            </aside>
            <div className='bg-gray-100 md:w-3/4 p-10 md:h-screen overflow-scroll'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout