import { Navigate } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes
import { useAuth } from "../Context/AuthContext";

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? element : <Navigate to="/" />;
};

// Add PropTypes validation
ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired, // Specify that 'element' is required
};

export default ProtectedRoute;
