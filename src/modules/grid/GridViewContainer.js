import { compose, withState } from 'recompose';

import GridView from './GridView';

const listData = [
  {
    id: 1,
    name: 'Citizen',
    last: 'CITIZEN ECO-DRIVE',
    type: 'Limited Edition',
    date: '02/02/2020',
    datetime: '12.00',
    status: 'NEW',
    badgeColor: '#3cd39f',
  },
  {
    id: 2,
    name: 'Weeknight',
    last: 'NEXT-LEVEL WEAR',
    type: 'Office, prom or special parties is all dressed up',
    date: '02/02/2020',
    datetime: '05.00',
    timeFrom: true,
  },
];

export default compose(
  withState('tabIndex', 'setTabIndex', 0),
  // withState('tabs', 'setTabs', ['Grid', 'List 1', 'List 2']),
  withState('data', 'setData', listData),
)(GridView);
