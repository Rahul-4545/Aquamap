import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import LoginForm from './pages/LoginForm';
import RegisterForm from './pages/RegisterForm';
import ReportProblems from './pages/ReportProblems';
import Feedback from './pages/Feedback';
import ShareIdeas from './pages/ShareIdeas';


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
          <Route
          path='feedb'
          element={<Feedback/>}
          />
          <Route
          path='shareideas'
          element={<ShareIdeas/>}
          />

        </Routes>
    </BrowserRouter>
  );
}

export default App;
