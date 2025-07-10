import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import routes from "./routes/routes";
import ScrollToTop from "./components/ScrollToTop"; 

const AppRoutes = () => {
  const element = useRoutes(routes);
  return element;
};

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <AppRoutes />
    </Router>
  );
}

export default App;
