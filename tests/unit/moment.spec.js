import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

import moment from '../../src/datePicker/moment.js'

describe('moment', () => {
  it('moment 存在.', () => {
    expect(moment).to.be.ok
  })
  it('getYearMonthDate', () => {
    let [year, month] = moment.getYearMonthDate(new Date(2019,7));
    expect(year).to.eq(2019)
    expect(month).to.eq(7)
  })
  it('firstDayOfMonth & lastDayOfMonth', () => {
    let date = new Date(2019, 7, 1);
    let firstDay = moment.firstDayOfMonth(date);
    let lastDay = moment.lastDayOfMonth(date);
    expect(firstDay.getDate()).to.eq(1)
    expect(lastDay.getDate()).to.eq(31)
  })
  it('addMonth & addYear', () => {
    let date = new Date(2019, 7, 1);
    let newDate1 = moment.addYear(date,1);
    let newDate2 = moment.addMonth(date,-1);
    expect(newDate1.getFullYear()).to.eq(2020)
    expect(newDate2.getMonth()).to.eq(6)
  })
  it('range', () => {
    let arr = moment.range(1,7);
    expect(JSON.stringify(arr)).to.eq('[1,2,3,4,5,6]')
  })
  it('pad2', () => {
    let d1 = `2019-${moment.pad2(7 + 1)}-${moment.pad2(4)}`;
    expect(d1).to.eq('2019-08-04')
    let d2 = `2019-${moment.pad2(9 + 1)}-${moment.pad2(11)}`;
    expect(d2).to.eq('2019-10-11')
  })
})
