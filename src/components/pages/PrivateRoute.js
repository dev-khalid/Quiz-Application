import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
export default function PrivateRoute() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  useEffect(() => {
    if (currentUser) {
      navigate('/');
    } else {
      navigate('/login');
    }
  }, [currentUser, navigate]);
}
