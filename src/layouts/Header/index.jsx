/**
 * Display the upper navbar
 * @return { HTMLElement }
 */
import { NavLink } from 'react-router-dom'
// import { Api } from '../../utils/api.js';
import { useSelector, useDispatch } from "react-redux";
import { getProfile,} from "../../store/store.js";
import logo from '../../assets/argentBankLogo.png';
import './header.css';
 
function Header() {
    const myProfile = useSelector((state) => state.profile);
    const dispatch = useDispatch();

    if(myProfile){
        console.log(myProfile)
        // const profileData =  Api('http://localhost:3001/api/v1/user/profile', { token: myToken});
        // console.log(profileData)
    }
    return (
            <nav className="main-nav">
                <NavLink to="/" className="main-nav-logo"  end>
                    <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo"/>
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
        <div>
            {myProfile&&<NavLink to="/profile" className="main-nav-item" end>
                <i className="fa fa-user-circle"></i> {myProfile.firstName}
            </NavLink>}
             {myProfile?(
                // 
             <NavLink to="#" className="main-nav-item" onClick={() => {dispatch(getProfile(""))}}>
                <i className="fa fa-sign-out"></i> Sign Out
            </NavLink>):
            (<NavLink to="/login" className="main-nav-item">
                <i className="fa fa-user-circle"></i> Sign In
            </NavLink>)}
        </div>
        </nav>
    );
 }
 
 export default Header;