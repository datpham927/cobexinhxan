/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { LogoTiktok, logoFb, logoTiktokMobile } from '../../assets'

const Header = () => {
  return (
    <div className='flex shadow-md h-[70px] w-full shrink-0 items-center bg-gradient-to-r from-teal-200 to-pink-200 bg-center bg-no-repeat bg-cover bg-scroll overflow-hidden max-h-full px-6'>
      <a className="flex mobile:hidden gap-2 w-4/12 items-center " target="_blank" href='https://www.facebook.com/profile.php?id=61559340073007' >
        <img className='h-8 rounded-sm' src={logoFb} />
      </a>
      <div className="flex justify-center gap-2 mobile:w-full w-4/12 items-center bg-white rounded-xl">
        <img className='w-10 h-10 rounded-full' src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-1/481087146_122160749624311335_6183392406473433427_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=1&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=KnoQNZdR28oQ7kNvgG1zA3e&_nc_oc=AdhE5zrNo2FbBqU6KnIAUuJ0W1Ci1FO1ku-XC5FLF8Xi9eqOM0pY6jqGYZTzSqAX_1KqCCHwCFsvLZYgpuHy7zyH&_nc_zt=24&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=AZJwfLWH5OBfF_oCyiqzBgq&oh=00_AYBicQk0S4wTiNXVBxwgE5mpBt_JBKu5S8kNCANMNiV0RA&oe=67C7BEE5" />
        <span>𝓒𝑜̂ 𝐵𝓮́ 𝓧𝑖𝓷ℎ 𝑋𝓪̆́𝑛</span>
      </div>
      <a className="flex mobile:hidden justify-end w-4/12" target="_blank" href='https://www.tiktok.com/@tamconcophat' >
        <span className='mobile:hidden'> {LogoTiktok} </span>
        <img className='mobile:block w-10 h-10 rounded-lg hidden' src={logoTiktokMobile} />
      </a>
    </div>
  )
}

export default Header
