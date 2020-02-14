import { compose, withState } from 'recompose';

import StoreScreen from './StoreView';

export default compose(
//   withState('radioGroupsState', 'setRadioGroupsState', [0, 0]),
)(StoreScreen);
