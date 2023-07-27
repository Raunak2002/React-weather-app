import React, { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import DarkMode from './DarkMode';
import {auth,provider} from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { signInWithPopup,signOut } from "firebase/auth";
import {selectUserEmail, setSignOutState, setUserLoginDetails} from "../features/userSlice";

export default function Header() {
    const dispatch = useDispatch();
    const username = useSelector(selectUserEmail);
    const navigate = useNavigate();
    
    useEffect(() => {
        !username && navigate("./")
    }, [username]);

    const handleSubmit = () => {
        if(!username){
        signInWithPopup(auth,provider).then((data)=>{
            setUser(data.user.email);
        }).catch((error) => {
            console.log("Caught error Popup closed");
        });
        }
        else if(username){
            signOut(auth).then(()=>{
                dispatch(setSignOutState())
            }).catch((error) => {
                console.log("Caught error Popup closed");
            });
            console.log(username);
        }
    };   
    
    function setUser(user){
        dispatch(
            setUserLoginDetails({                                  // {} action.payload is an json file
                email: user,
            })
        );
    };

    return (
        <div className="header">
            <div><img className='header-img' src='https://careers.celebaltech.com/assets/img/celebal.png' alt='logo'></img></div>
            <div className='nav'>
                <ul className='nav-ul'>
                    <Link to={"/"}><li>Home</li></Link>
                    {username && <Link to={"/saved"}><li>Saved</li></Link>}
                    {username ? (<li onClick={handleSubmit}>Log Out</li>):<li onClick={handleSubmit}>Log In</li>}
                    {!username && <Link to={"/contact"}><li>Contact</li></Link>}
                </ul>
            </div>
            <div><DarkMode/></div>
        </div>
    )
}