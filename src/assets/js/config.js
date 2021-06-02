export const BASEURL = 'http://47.103.34.28:8037/ttvillage'// 测试服

// tab配置
export const TAB_MAP = {
  /** 总览 */
  overview: 1,
  /** 党务管理 */
  party_manage: 2,
  /** 村务决议 */
  village_resolution: 3,
  /** 资产资源管理 */
  resources: 4,
  /** 村级工程 */
  village_engineering: 5,
  /** 农民建房 */
  farmers_build: 6,
  /** 财务管理 */
  property_manage: 7,
  /** 劳务用工 */
  labor_employment: 8,
  /** 补助救助 */
  aid_relief: 9
}
// 时间日期转化器
export const CUSTOMDATE = (now, type, separate) => { // type
  now = new Date(now)
  separate = separate || '/'
  var day = now.getDay()
  var year = now.getFullYear()
  var month = now.getMonth() + 1 > 9 ? now.getMonth() + 1 : '0' + (now.getMonth() + 1)
  var date = now.getDate() > 9 ? now.getDate() : '0' + now.getDate()
  var hour = now.getHours() > 9 ? now.getHours() : '0' + now.getHours()
  var minute = now.getMinutes() > 9 ? now.getMinutes() : '0' + now.getMinutes()
  var second = now.getSeconds() > 9 ? now.getSeconds() : '0' + now.getSeconds()
  var weeks = new Array('星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六')
  if (type == 1) return year + separate + month + separate + date
  else if (type == 2) return year + separate + month + separate + date + ' ' + weeks[day] + ' ' + +hour + ':' + minute + ':' + second
  else return year + separate + month + separate + date + ' ' + hour + ':' + minute + ':' + second
}
