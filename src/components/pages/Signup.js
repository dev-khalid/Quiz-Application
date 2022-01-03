 
import SignupForm from '../SignupForm';
import Illustration from '../Illustration';
 
const Signup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className='column'>
        <Illustration />
        <SignupForm />
      </div>
    </>
  );
};

export default Signup;
