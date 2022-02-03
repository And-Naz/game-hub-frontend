import {NavLink} from "react-router-dom";

const Header = () => (
    <header className='header'>
            <div className='containe'>
                    <NavLink className='navLink' to=''>Home</NavLink>
                    <NavLink className='navLink' to='gameList'>GameList</NavLink>
                    <NavLink className='navLink' to='score'>Score</NavLink>
                    <NavLink className='navLink' to='news'>News</NavLink>
                    <NavLink className='navLink' to='about'>About</NavLink>
            </div>
    </header>
)

export default Header
