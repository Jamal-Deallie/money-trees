import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  LandingPage,
  SignInPage,
  SignUpPage,
  DashboardPage,
} from './views';
import { Layout, RequireAuth, RedirectRoute } from './components';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route element={<RedirectRoute />}>
            <Route index element={<LandingPage />} />
          </Route>

          <Route element={<RequireAuth />}>
            <Route path='dashboard' element={<DashboardPage />} />
          </Route>
          <Route path='signin' element={<SignInPage />} />
          <Route path='signup' element={<SignUpPage />} />
          {/* 404 route */}
          {/* <Route path='*' element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
