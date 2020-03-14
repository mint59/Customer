import React,{ useEffect, useState, useMemo } from 'react';
import HITSAPI from '../../../HISAPI'
import { compose, withState } from 'recompose';
// import logo from '../../../assets/images'

import ListView from './ListView';

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
  {
    id: 4,
    name: 'กฤติยา',
    last: 'พาคำสิง',
    type: 'ระบบไฟ',
    date: '02/02/2020',
    datetime: '12.30',
    status: 'NEW',
    badgeColor: 'green',
  },
  {
    id: 5,
    name: 'นภาพร',
    last: 'คำสิริ',
    type: 'ระบบน้ำ',
    date: '02/02/2020',
    datetime: '07.00',
    status: 'NEW',
    timeFrom: true,
  },
  {
    id: 6,
    name: 'Mad Perry',
    last: 'CITIZEN ECO-DRIVE',
    type: 'ระบบไฟ',
    date: '02/02/2020',
    datetime: '08.00',
    timeFrom: true,
    status: 'SALE',
    badgeColor: 'red',
  },
  {
    id: 7,
    name: 'นฤริกา',
    last: 'คำสิง',
    type: 'Limited Edition',
    date: '02/02/2020',
    datetime: '09.00',
    status: 'NEW',
    badgeColor: '#3cd39f',
  },
  {
    id: 8,
    name: 'นฤพงค์',
    last: 'แวนคำ',
    type: 'Office, prom or special parties is all dressed up',
    date: '02/02/2020',
    datetime: '10.00',
    status: 'NEW',
    timeFrom: true,
  },
  {
    id: 9,
    name: 'เอกภพ',
    last: 'จาดสิง',
    type: 'Office, prom or special parties is all dressed up',
    date: '02/02/2020',
    datetime: '14.00',
    timeFrom: true,
    status: 'SALE',
    badgeColor: '#ee1f78',
  },
  {
    id: 10,
    name: 'ยิ่งยง',
    last: 'ยอดประสิฐ',
    type: 'Limited Edition',
    date: '02/02/2020',
    datetime: '13.00',
    status: 'NEW',
    badgeColor: 'green',
  }
];

// export default compose(
//   // withState('tabIndex', 'setTabIndex', 0),
//   // withState('tabs', 'setTabs', ['งานวันนี้', 'งานที่ทำ']),
//   // withState('data', 'setData', model),
// )(ListView);
export default compose()(
  ListView,
);
