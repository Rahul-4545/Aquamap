import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import LoginForm from './pages/LoginForm';
import RegisterForm from './pages/RegisterForm';
import ReportProblems from './pages/ReportProblems';
import Feedback from './pages/Feedback';
import Shareideas from './pages/Shareideas';
import Profile from './pages/Profile';
import Home from './pages/Home'



function App() {
  return (
    <BrowserRouter>
        <Routes>
          

        <Route
             path=''
             element={<Home/>}
          />
          <Route
             path='loginform'
             element={<LoginForm/>}
          />

          <Route
            path='signup'
            element={<RegisterForm/>}
          />
          <Route
          path='dummy'
          element={<ReportProblems/>}
          />
          <Route
          path='feedb'
          element={<Feedback/>}
          />
          <Route
          path='shareideas'
          element={<Shareideas/>}
          />
          <Route
          path='profile'
          element={<Profile/>}
          />

          <Route
          path='Home'
          element={<Home/>}
          />
          
         

        </Routes>
    </BrowserRouter>
  );
}

export default App;
