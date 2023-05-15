import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function RequireAuth({ children }) {
  const token = localStorage.getItem('token');

  if (!token) {
    if (!toast.isActive('loginError')) {
      toast.error('You must login to access this page.', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        toastId: 'loginError'
      });
    }

    return <Navigate to="/" />;
  }

  return <>{children}</>;
}
export default RequireAuth;