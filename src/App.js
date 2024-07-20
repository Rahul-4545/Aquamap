import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import LoginForm from './pages/LoginForm';
import RegisterForm from './pages/RegisterForm';
import ReportProblems from './pages/ReportProblems';

function App() {
  return (
    <BrowserRouter>
        <Routes>

          <Route
             path=''
             element={<LoginForm/>}
          />

          <Route
            path='signup'
            element={<RegisterForm/>}
          />
          <Route
          path='Map'
          element={<ReportProblems/>}
          />

        </Routes>
    </BrowserRouter>
  );
}

export default App;
