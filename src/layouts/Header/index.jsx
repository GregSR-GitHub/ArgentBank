/**
 * Display the upper navbar
 * @return { HTMLElement }
 */
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { newToken } from "../../store/store.js";
import logo from '../../assets/argentBankLogo.png';
import './header.css';
 
function Header() {
    const myToken = useSelector((state) => state.token);
    const dispatch = useDispatch();

    if(myToken){
        console.log(myToken)
    }
    return (
            <nav className="main-nav">
                <NavLink to="/" className="main-nav-logo"  end>
                    <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo"/>
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
        <div>
            {myToken&&<NavLink to="/user" className="main-nav-item" end>
                <i className="fa fa-user-circle"></i>
                Tony
            </NavLink>}
             {myToken?(
                // 
             <NavLink to="#" className="main-nav-item" onClick={() => {dispatch(newToken(""))}}>
                <i className="fa fa-sign-out"></i>
                Sign Out
            </NavLink>):
            (<NavLink to="/sign-in" className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                Sign In
            </NavLink>)}
        </div>
        </nav>
    );
 }
 
 export default Header;