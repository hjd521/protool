import {setInter} from '../prototype/index.js'
describe('测试setInter', () => {
  test('font', () => {
    expect(setInter('测试文字')).toBe(0)
  });
  test('part', ()=> {
    expect(setInter('1.22')).toBe(1)
  });
  test('number', () =>  {
    expect(setInter('01.22')).toBe(0)
  })
})