import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {GrTwitter} from 'react-icons/gr'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/dishi-jain-8848401b8/" target={'_blank'}><BsLinkedin/></a>
        <a href="https://github.com/Dishi2003Jain" target={'_blank'}><FaGithub/></a>
        <a href="https://twitter.com/DishiJain171?t=FAulti0wbJy6KSAEpfXITA&s=08" target={'_blank'}><GrTwitter/></a>
        <a href="https://www.instagram.com/dishi._.nayak/" target={'_blank'}><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials