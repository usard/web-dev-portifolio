import  {links} from '../data'
const Navbar =  () => {
    return (
        <nav className='bg-emerald-100'>
            <div className=' align-element py-4 flex flex-col  sm:flex-row sm:items-center sm:gap-x-16'>
                <h1 className='text-3xl font-bold'>Web<span className='text-emerald-600'>Dev</span></h1>
                <div className='links flex gap-5'>
                    {
                        links.map((link)=> {
                          return <a className='capitalize text-lg tracking-wide hover:text-emerald-600 duration-300' id={link.id} href={link.href} >{link.text} </a>
                        })
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar;