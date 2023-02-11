import React from 'react'
import {BsTelegram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://t.me/Mony0775" target="_blank"><BsTelegram/></a>
        <a href="https://github.com/Mony0775" target="_blank"><BsGithub/></a>
        <a href="https://www.facebook.com/profile.php?id=100029562860851" target="_blank"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials