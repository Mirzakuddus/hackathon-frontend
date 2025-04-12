import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Page/LandingPage';
import LoginPage from './Page/LoginPage';
import SignupPage from './Page/SignupPage';
import Dashboard from './Page/Dashboard';
import ProjectInputPage from './Page/ProjectInputPage';
import ProjectPreviewPage from './Page/ProjectPreviewPage';
import CostEstimationPage from './Page/CostEstimationPage';
import AISuggestionsPage from './Page/AISuggestionsPage';
import CompareCostPage from './Page/CompareCostPage';
import ProtectedRoutes from './Page/ProtectedRoutes';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';


function App() {
  // const {user}=useSelector(store=>store.auth);


  // useEffect(() => {
  //   console.log(user)
  // }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/signuppage" element={<SignupPage />} />
          
          {/* Protected Routes */}
          <Route path="/dashboard" element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          } />
          <Route path="/project-input" element={
            <ProtectedRoutes>
              <ProjectInputPage />
            </ProtectedRoutes>
          } />
          <Route path="/compare-cost" element={
            <ProtectedRoutes>
              <CompareCostPage />
            </ProtectedRoutes>
          } />
          <Route path="/cost-optimisation" element={
            <ProtectedRoutes>
              <CostEstimationPage />
            </ProtectedRoutes>
          } />
          <Route path="/ai-suggestion" element={
            <ProtectedRoutes>
              <AISuggestionsPage />
            </ProtectedRoutes>
          } />
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
