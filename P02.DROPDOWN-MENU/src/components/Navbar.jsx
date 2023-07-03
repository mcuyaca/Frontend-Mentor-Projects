import {useState} from 'react';
import Logo from "../images/logo.svg";
import ArrowDown from "../images/icon-arrow-down.svg";
import ArrowUp from "../images/icon-arrow-up.svg";
import IconToDo from "../images/icon-todo.svg";
import IconCalendar from "../images/icon-calendar.svg";
import IconReminders from "../images/icon-reminders.svg";
import IconPlanning from "../images/icon-planning.svg";
import IconMenu from "../images/icon-menu.svg";
import IconClose from "../images/icon-close-menu.svg";


export default function Navbar () {

const [dropdown1,setDropdown1] = useState(false);
const [dropdown2,setDropdown2] = useState(false);    
const toggleDropdown1 = () => {setDropdown1(!dropdown1); setDropdown2(false); } 
const toggleDropdown2 = () => {setDropdown2(!dropdown2); setDropdown1(false); } 

const [menu,setMenu] = useState(true);
const toggleMenu = () => setMenu(!menu);

return (
    <nav className='Navbar'>
        <a className="Logo" href="#">
          <img src={Logo} alt="Logo"/>
        </a>

        <ul className="Pages">
          <li onClick={toggleDropdown1}><a href="#">Features<img className="Arrow" src={dropdown1 ? ArrowUp : ArrowDown}  /></a>
          
          <ul className={ dropdown1 ? "dropdown" : "hidden"}>
            <li><a href="#"><img className='Icon-Drop' src={IconToDo}/>Todo List</a></li>
            <li><a href="#"><img className='Icon-Drop' src={IconCalendar}/>Calendar</a></li>
            <li><a href="#"><img className='Icon-Drop' src={IconReminders}/>Reminders</a></li>
            <li><a href="#"><img className='Icon-Drop' src={IconPlanning}/>Planning</a></li>
            </ul>
          
          </li>
          <li onClick={toggleDropdown2}><a href="#">Company<img className="Arrow" src={dropdown2 ? ArrowUp : ArrowDown} /></a>
          <ul className={dropdown2 ? "dropdown" : "hidden"}>
            <li><a href="#">History</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Blog</a></li>
            </ul>
          </li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">About</a></li>
        </ul>

        <ul className="User">
          <li><a href="#">Login</a></li>
          <li><a href="#"><button>Register</button></a></li>
        </ul>
        
        <div className='Mobile-Navbar'>
        <img className='menu' src={menu ? IconMenu : IconClose} onClick={toggleMenu}  />
          <ul >
          <li  > Features </li>
          <li  > Features </li>
          <li  > Features </li>
          </ul>


        </div>
    </nav>
    )
    
}