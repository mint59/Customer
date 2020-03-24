import { compose, withState } from 'recompose';

import LoginScreen from './LoginView';
import ForGotScreen from './forgot'

export default compose(withState('isExtended', 'setIsExtended', false))(
    LoginScreen, ForGotScreen
);
