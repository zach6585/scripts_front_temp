import {useState, lazy, Suspense} from 'react';
import './users.css';


const Signup = lazy(() => import('./signup'));
const Login = lazy(() => import('./login'));


const Users = () => {
    const [whichComponent, setWhichComponent] = useState("Login"); //Acts as a flag for which component needs to be rendered
    const [currComponent, setCurrComponent] = useState(<Login />); //Actual componenent being rendered
    const [buttonText, setButtonText] = useState("Don't have an account yet? Sign up here"); //Text within button being rendered

    const handleClick = (e) => {
        e.preventDefault();
        if (whichComponent === "Login"){
            setWhichComponent("Signup");
            setCurrComponent(<Signup />);
            setButtonText("Already have an account? Log in here");
        }
        else{
            setWhichComponent("Login");
            setCurrComponent(<Login />);
            setButtonText("Don't have an account yet? Sign up here");
            
        }
    }

    return(
        <Suspense fallback={<h1>Loading...</h1>}>
            {currComponent}
            <h3 id="fake_link_text" onClick={e => handleClick(e)}>{buttonText}</h3>
        </Suspense>
    )
}

export default Users;

