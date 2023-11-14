import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import {FaSquareXTwitter} from 'react-icons/fa6';
import heroSvg from '../assets/hero.svg'

const Hero = () => {
    return (
        <div className='bg-emerald-50'>
            <div className='align-element py-24 sm:px-16 grid md:grid-cols-2 items-center'>
                <article>
                    <h1 className='text-6xl font-bold '>I'm Anvesh</h1>
                    <p className='capitalize tracking-wider text-2xl mt-4 text-slate-500'>full stack developer</p>
                    <p className='tracking-wide text-lg capitalize mt-1 text-slate-700'>tracking ideas into interactive reality</p>
                    <div className='icons flex gap-x-3 mt-1'>
                       <a href="#github">
                        <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300'></FaGithubSquare>
                       </a>
                       <a href="#linkedin">
                        <FaLinkedin className='h-8 w-8  text-slate-500  hover:text-black duration-300'></FaLinkedin>
                       </a>
                       <a href="#twitter">
                        <FaSquareXTwitter className='h-8 w-8 text-slate-500 hover:text-black duration-300'></FaSquareXTwitter>
                       </a>
                    </div>
                </article>
                <article className='hidden md:block'>
                    <img className='h-80' src={heroSvg} alt="" />
                </article>
            </div>

        </div>

    )
}

export default Hero;