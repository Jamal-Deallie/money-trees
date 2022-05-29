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
  // SignInPage,
  // ForgotPasswordPage,
  DashboardPage,
  // ResetPasswordPage,
  // CheckoutSuccessPage,
  // CategoriesPage,
} from './views';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path='/' element={<DashboardPage />}>
          {/* 404 route */}
          {/* <Route path='*' element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
