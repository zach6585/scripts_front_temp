import { useLocation, useNavigate } from 'react-router-dom';

const componentWrapper = (WrappedComponent) => props => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
      <WrappedComponent {...props}
      location={location}
      navigate={navigate} />
    )
  }

export default componentWrapper