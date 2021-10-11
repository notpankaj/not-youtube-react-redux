import './_header.scss'

import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'


const Header = ({handleToggleSidebar}) => {



    return (
        <div className="header">
            <FaBars onClick={() => handleToggleSidebar()}  className="header__menu" size={26} />
            <img
                src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
                alt=''
                className='header__logo'
            />
            
            <form action="">
                <input type="text" placeholder="search"/>
                <button type="submit"><AiOutlineSearch size={22}/></button>
            </form>

            <div className="header__icons">
                <MdNotifications size={28}/>
                <MdApps size={28} />
                <img 
                    src="https://lh3.googleusercontent.com/ogw/ADea4I48ZRBJc1N5wsSAJxl6QGV10o1MutGKhu-SD3ci=s83-c-mo" 
                    alt="avatar"
                 />
            </div>

        </div>
    )
}

export default Header
