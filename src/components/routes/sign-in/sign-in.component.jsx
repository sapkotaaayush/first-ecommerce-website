import {signInWithGooglePopup} from '../../../utils/firebase/firebase.utils'
const SignIn = () => {
  const logGoogleUser = async ()=> {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>   
       <h1> this is a  sign in page</h1>
       <button onClick={{logGoogleUser}}> Signin with Google</button>
       </div>

  )
}

export default SignIn;