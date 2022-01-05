import {useAuth} from '../contexts/AuthContext'; 
import {Navigate} from 'react-router-dom'; 

export default function PrivateRoute({children}) {
  const {currentUser} = useAuth();
  console.log(currentUser); 
  console.log(children); 
  return currentUser ? children : <Navigate to="/login" />;
}