import React from 'react';
import { NavLink } from "react-router-dom";
import { useState } from "react";
import './header.css'
import Button from "../ui/button/button";



function Header() {

    const [isActive, setIsActive] = useState(true)

    return (
        <header className='header'>
            <nav className='navigation'>
                <ul>
                    <li>
                        <NavLink  to=''>
                            <img className='navbar-brand' src="https://wp.nkdev.info/youplay/wp-content/themes/youplay/assets/images/logo-light.png" alt="" />
                        </NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink className='navLink' to='games'>Games</NavLink>
                    </li>
                    <li>
                        <NavLink className='navLink' to='score'>Score</NavLink>
                    </li>
                    <li>
                        <NavLink className='navLink' to='news'>News</NavLink>
                    </li>
                    <li>
                        <NavLink className='navLink' to='about'>About</NavLink>
                    </li>
                </ul>
            </nav>
            <aside>
                <span className='dropdown dropdown-user'>
                    <button  onClick={() => setIsActive(!isActive)}>
                        <svg className='svg-inline--fa' viewBox="0 0 448 512" focusable='false' aria-hidden='true'>
                                    <path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                                </svg>
                        <span className='caret'></span>
                    </button>
                    <div className={isActive ? 'dropdown-menu clicked': 'dropdown-menu '} >
                        <div className='navbar-login-form'>
                            <form action="#" method='post'>
                                <label htmlFor='userName'>Username:</label>
                                <div><input className="login-form-inp" type="text" id='userName' name="userName" /></div>
                                <label htmlFor='password'>Password:</label>
                                <div><input className="login-form-inp" type="password" id='password' name="password" /></div>

                                <div className='checkbox'>
                                    <input className="login-form-checkbox" type="checkbox" id='checkbox' name="checkbox"/>
                                    <label htmlFor='checkbox'>Remember Me</label>
                                </div>
                                <Button type='submit' buttonSize='btn-small' children='Log In' />
                                <div className="lostPwd">
                                    <a className="lostPwd"  href="#" title="Password Lost and Found">Forgot password?</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </span>
                <span className='dropdown'>
                            <button  >
                                <svg className='svg-inline--fa' viewBox="0 0 512 512" focusable='false' aria-hidden='true'>
                                    <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                                </svg>
                            </button>
                        </span>
                <span className='dropdown'>
                            <button >
                                <svg className='svg-inline--fa' viewBox="0 0 576 512" focusable='false' aria-hidden='true'>
                                    <path fill="currentColor" d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path>
                                </svg>
                            </button>
                        </span>
            </aside>
        </header>
    );
}


export default Header
