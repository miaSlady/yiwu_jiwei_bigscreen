
import { TAB_MAP } from '@/assets/js/config'
const { overview, party_manage, village_resolution, resources, village_engineering, farmers_build, property_manage, labor_employment, aid_relief } = TAB_MAP
const cityData = {
  2: {
    id: 2,
    name: '佛堂镇',
    value: '2%',
    left: '16vw',
    top: '51vh',
    box: {
      left: '18vw',
      top: '38vh'
    }
  },
  3: {
    id: 3,
    name: '赤岸镇',
    value: '3%',
    left: '16vw',
    top: '65vh',
    box: {
      left: '18vw',
      top: '51vh'
    }
  },
  4: {
    id: 4,
    name: '义亭镇',
    value: '4%',
    left: '10vw',
    top: '48vh',
    box: {
      left: '12vw',
      top: '35vh'
    }
  },
  5: {
    id: 5,
    name: '上溪镇',
    value: '4%',
    left: '5vw',
    top: '35vh',
    box: {
      left: '3vw',
      top: '21vh'
    }
  },
  6: {
    id: 6,
    name: '苏溪镇',
    value: '4%',
    left: '26vw',
    top: '21vh',
    box: {
      left: '22vw',
      top: '25vh'
    }
  },
  7: {
    id: 7,
    name: '大陈镇',
    value: '4%',
    left: '29vw',
    top: '11vh',
    box: {
      left: '22vw',
      top: '16vh'
    }
  },
  8: {
    id: 8,
    name: '稠城街道',
    value: '4%',
    left: '21vw',
    top: '35vh',
    box: {
      left: '16vw',
      top: '40vh'
    }
  },
  9: {
    id: 9,
    name: '福田街道',
    value: '4%',
    left: '24vw',
    top: '29vh',
    box: {
      left: '22vw',
      top: '14vh'
    }
  },
  10: {
    id: 10,
    name: '江东街道',
    value: '4%',
    left: '23vw',
    top: '40vh',
    box: {
      left: '22vw',
      top: '26vh'
    }
  },
  11: {
    id: 11,
    name: '稠江街道',
    value: '4%',
    left: '16vw',
    top: '42vh',
    box: {
      left: '15vw',
      top: '28vh'
    }
  },
  12: {
    id: 12,
    name: '北苑街道',
    value: '4%',
    left: '17vw',
    top: '33vh',
    box: {
      left: '15vw',
      top: '19vh'
    }
  },
  13: {
    id: 13,
    name: '后宅街道',
    value: '4%',
    left: '18vw',
    top: '26vh',
    box: {
      left: '15vw',
      top: '12vh'
    }
  },
  14: {
    id: 14,
    name: '廿三里街道',
    value: '4%',
    left: '30vw',
    top: '29vh',
    box: {
      left: '22vw',
      top: '14vh'
    }
  },
  15: {
    id: 15,
    name: '城西街道',
    value: '4%',
    left: '12vw',
    top: '35vh',
    box: {
      left: '10vw',
      top: '21vh'
    }
  }

}
const cityMap = {
  1: require('../img/map/city.png'),
  2: require('../img/map/city2.png'),
  3: require('../img/map/city3.png'),
  4: require('../img/map/city4.png'),
  5: require('../img/map/city5.png'),
  6: require('../img/map/city6.png'),
  7: require('../img/map/city7.png'),
  8: require('../img/map/city8.png'),
  9: require('../img/map/city9.png'),
  10: require('../img/map/city10.png'),
  11: require('../img/map/city11.png'),
  12: require('../img/map/city12.png'),
  13: require('../img/map/city13.png'),
  14: require('../img/map/city14.png'),
  15: require('../img/map/city15.png')
}
const boxMap = {
  [overview]: {
    box: [
      { name: '待审批事项数', value: '21345', field: '' },
      { name: '待审批事项数', value: '16731', field: '' }
    ],
    list: [
      { name: '实时审批事项总数', value: '21345' },
      { name: '当前预警数', value: '21345' }
    ],
    villageBox: [
      { name: '当前预警数', value: '21345' },
      { name: '待审批事项数', value: '21345' }
    ],
    villageList: [
      { name: '实时审批事项总数', value: '15' },
      { name: '当前预警数', value: '12' }
    ]
  },
  [party_manage]: {
    box: [
      { name: '正式党员数', value: '21345', field: '' },
      { name: '预备党员数', value: '16731', field: '' }
    ],
    list: [
      { name: '正式党员数', value: '21345' },
      { name: '预备党员数', value: '21345' }
    ],
    villageBox: [
      { name: '预备党员数', value: '2' },
      { name: '正式党员数', value: '80' }
    ],
    villageList: [
      { name: '正式党员数', value: '80' },
      { name: '预备党员数', value: '2' }
    ]
  },
  [village_resolution]: {
    box: [
      { name: '村民代表大会', value: '21345', field: '' },
      { name: '村务联席会议', value: '16731', field: '' }
    ],
    list: [
      { name: '当前预警数', value: '21345' }
    ],
    villageBox: [
      { name: '村民代表大会', value: '8' },
      { name: '村务联席会议', value: '67' }
    ],
    villageList: [
      { name: '当前预警数', value: '3' }
    ]
  },
  [resources]: {
    box: [
      { name: '资产数量', value: '21345', per: '处', field: '' },
      { name: '总金额', value: '16731', per: '万元', field: '' }
    ],
    list: [
      { name: '当前预警数', value: '21345' }
    ],
    villageBox: [
      { name: '资产数量', value: '18' },
      { name: '总金额', value: '85461', per: '万元' }
    ],
    villageList: [
      { name: '当前预警数', value: '1' }
    ]
  },
  [village_engineering]: {
    box: [
      { name: '工程数量', value: '38', field: '' },
      { name: '总金额', value: '16731', per: '万元', field: '' }
    ],
    list: [
      { name: '当前预警数', value: '21345' }
    ],
    villageBox: [
      { name: '工程数量', value: '5' },
      { name: '工程金额', value: '3327', per: '万元' }
    ],
    villageList: [
      { name: '当前预警数', value: '1' }
    ]
  },
  [farmers_build]: {
    box: [
      { name: '建房数量', value: '38', field: '' },
      { name: '总建筑面积', value: '16731', per: 'k㎡', field: '' }
    ],
    list: [
      { name: '当前预警数', value: '21345' }
    ],
    villageBox: [
      { name: '建房数量', value: '23' },
      { name: '总建筑面积', value: '2308', per: 'k㎡' }
    ],
    villageList: [
      { name: '当前预警数', value: '0' }
    ]
  },
  [property_manage]: {
    box: [
      { name: '年收入', value: '3802', per: '万元', field: '' },
      { name: '年支出', value: '6731', per: '万元', field: '' }
    ],
    list: [
      { name: '当前预警数', value: '21345' }
    ],
    villageBox: [
      { name: '年收入', value: '508', per: '万元' },
      { name: '年支出', value: '478', per: '万元' }
    ],
    villageList: [
      { name: '当前预警数', value: '0' }
    ]
  },
  [labor_employment]: {
    box: [
      { name: '派工人数', value: '3802', per: '人', field: '' },
      { name: '平均单价', value: '6731', per: '元', field: '' }
    ],
    list: [
      { name: '当前预警数', value: '21345' }
    ],
    villageBox: [
      { name: '派工人数', value: '352', per: '人' },
      { name: '平均单价', value: '200', per: '元' }
    ],
    villageList: [
      { name: '当前预警数', value: '2' }
    ]
  },
  [aid_relief]: {
    box: [
      { name: '补助人数', value: '3802', per: '人', field: '' },
      { name: '补助金额', value: '6731', per: '万元', field: '' }
    ],
    list: [
      { name: '当前预警数', value: '21345' }
    ],
    villageBox: [
      { name: '补助人数', value: '73', per: '人' },
      { name: '平均单价', value: '130540', per: '元' }
    ],
    villageList: [
      { name: '当前预警数', value: '2' }
    ]
  }
}
export {
  cityData,
  cityMap,
  boxMap
}
