import {NavLink} from "react-router-dom";

const Header = () => (
    <header className='header'>
            <div className='container'>
                    <NavLink className='navLink' to=''>
                        <img src="https://wp.nkdev.info/youplay/wp-content/themes/youplay/assets/images/logo-light.png" alt="" />
                    </NavLink>
                    <NavLink  to='gameList'>GameList</NavLink>
                    <NavLink  to='score'>Score</NavLink>
                    <NavLink  to='news'>News</NavLink>
                    <NavLink  to='about'>About</NavLink>
            </div>
    </header>
)

export default Header
