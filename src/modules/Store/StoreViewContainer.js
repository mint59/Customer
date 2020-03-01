import { compose, withState } from 'recompose';

import StoreScreen from './StoreView';

    const listData = [
        {
          id: 1,
          name: 'สิริพร',
          last: 'แสนสุข',
          type: 'ระบบไฟ',
          date: '02/02/2020',
          datetime: '12.00',
          status: 'NEW',
          badgeColor: '#3cd39f',
        },
        {
          id: 2,
          name: 'พิมวีณัส',
          last: 'สมคำ',
          type: 'ระบบน้ำ',
          date: '02/02/2020',
          datetime: '05.00',
          status: 'NEW',
          timeFrom: true,
        },
        {
          id: 3,
          name: 'กฤตินี',
          last: 'แสงแก้ว',
          type: 'ระบบไฟ',
          date: '02/02/2020',
          datetime: '11.00',
          timeFrom: true,
          status: 'SALE',
          badgeColor: '#ee1f78',
        },
    ];

    export default compose(
      withState('tabIndex', 'setTabIndex', 0),
      withState('data', 'setData', listData),
    
//   withState('radioGroupsState', 'setRadioGroupsState', [0, 0]),
)(StoreScreen);
