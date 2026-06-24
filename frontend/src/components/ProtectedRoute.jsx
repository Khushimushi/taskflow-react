import { Navigate } from "react-router-dom";  //llows redirecting users

function ProtectedRoute({ children }) {   //children: <Dashboard />
  
    const token = localStorage.getItem("token");  //reads token

    if (!token) {
        return <Navigate to="/login" />
    }

    return children;  //allows access
}

export default ProtectedRoute;