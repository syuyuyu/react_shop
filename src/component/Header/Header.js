import React from 'react';
import IconLogo from "../icons/logo.svg";
import IconSearch from "../icons/search.svg"
import IconCart from "../icons/cart.svg"
import IconMoon from "../icons/cart.svg"

export default function Header(){
  return (
    <>
      <div className='header'>
        <div className="nav">
          <ul className="nav-left">
            <li><h4>男款</h4></li>
            <li><h4>女款</h4></li>
            <li><h4>最新消息</h4></li>
            <li><h4>客製商品</h4></li>
            <li><h4>聯絡我們</h4></li>
          </ul>
          <ul className="nav-right">
            <li className='nav-right-icon'>
              <img src={IconSearch} alt="img" />
            </li>
            <li className='nav-right-icon'>
              <img src={IconCart} alt="img" />
            </li>
            <li className='nav-right-icon'>
              <img src={IconMoon} alt="img" />
            </li>
          </ul>
        </div>
        <div className='header-logo'>
          <img src={IconLogo} alt="img" />
        </div>
      </div>
    </>
  )
}