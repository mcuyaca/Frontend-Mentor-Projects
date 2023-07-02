import {useState} from 'react';
import Logo from "../images/logo.svg";
import ArrowDown from "../images/icon-arrow-down.svg";
import ArrowUp from "../images/icon-arrow-up.svg";
import IconToDo from "../images/icon-todo.svg";
import IconCalendar from "../images/icon-calendar.svg";
import IconReminders from "../images/icon-reminders.svg";
import IconPlanning from "../images/icon-planning.svg";


export default function Navbar () {

const [arrow,setArrow] = useState(ArrowDown);
const [dropFeatures,setDropFeatures] = useState(false);

const arrowClick = () => { if (arrow === ArrowDown) {  setArrow(ArrowUp); setDropFeatures(true); }else{ setArrow(ArrowDown);} };

const menuFeatures = () => {
            <ul className="dropdown">
            <li><a href="#"><img className='Icon-Drop' src={IconToDo}/>Todo List</a></li>
            <li><a href="#"><img className='Icon-Drop' src={IconCalendar}/>Calendar</a></li>
            <li><a href="#"><img className='Icon-Drop' src={IconReminders}/>Reminders</a></li>
            <li><a href="#"><img className='Icon-Drop' src={IconPlanning}/>Planning</a></li>
            </ul>
            }

return (
    <nav className="Navbar">
        <a className="Logo" href="#">
          <img src={Logo} alt="Logo"/>
        </a>

        <ul className="Pages">
          <li><a href="#">Features<img className="Arrow"src={arrow} onClick={arrowClick} /></a>
   
          


          </li>
          <li><a href="#">Company<img className="Arrow"src={ArrowDown}/></a>
          <ul className="dropdown">
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

    </nav>
    )
    
}