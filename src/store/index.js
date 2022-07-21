import { makeAutoObservable } from 'mobx'

class TestStore {
  components = []
  comDetail = {
    attribute: {}
  }
  id = 0

  constructor() {
    // 自动监听所有属性
    makeAutoObservable(this)
  }

  // computed  是否具有缓存属性？ 用来优化一些重复刷新组件的地方？？
  // get price() {
  //   return `$${this.amount * 100}`
  // }

  // action
  addComponent(com) {
    this.components.push({
      ...com,
      id: ++this.id
    })
  }

  chooseComponents(com) {
    this.comDetail = this.components.find(item => com.id === item.id)
  }

  modifyStyle(type, style) {
    this.comDetail.attribute[type] = style
  }

  clear() {
    this.components = []
    this.comDetail = []
    this.id = 0
  }
}

export default new TestStore()
