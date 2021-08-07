import { BrowserRouter, Route } from 'react-router-dom';
import SignUpForm from '../containers/SignUpForm';
import SignInForm from '../containers/SignInForm';
import Course from '../containers/Course';

const App = () => (
  <div>
    <BrowserRouter>
      <Route exact path="/" component={SignInForm} />
      <Route exact path="/signup" component={SignUpForm} />
      <Route exact path="/signin" component={SignInForm} />
      <Route exact path="/my_courses" component={Course} />
    </BrowserRouter>
  </div>
);

export default App;
