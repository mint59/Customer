// @flow
import { compose } from 'recompose';

import ProfileScreen from './ProfileView';
import HelpScreen from './help';
import AgreementScreen from './Agreement';

export default compose()(ProfileScreen,HelpScreen,AgreementScreen);
