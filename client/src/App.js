import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  LandingPage,
  // ProductPage,
  // ProductQueryPage,
  // ProductDetailsPage,
  // AboutPage,
  // NotFoundPage,
  // ContactPage,
  // LocationPage,
  // RegisterPage,
  SignInPage,
  SignUpPage,
  // ForgotPasswordPage,
  DashboardPage,
  // ResetPasswordPage,
  // CheckoutSuccessPage,
  // CategoriesPage,
} from './views';
import { Layout, RequireAuth } from './components';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<LandingPage />} />
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
