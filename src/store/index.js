import { makeAutoObservable } from 'mobx'

class TestStore {
  components = []
  comDetail = {
    attribute: {}
  }
  id = 0
  cli = ''
  ui = 'van-'

  constructor() {
    // 自动监听所有属性
    makeAutoObservable(this)
  }

  // computed
  // get price() {
  //   return `$${this.amount * 100}`
  // }

  // action

  add() {
    this.num++
  }
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
    console.log(this.comDetail)
  }

  chooseUi(type, value) {
    this[type] = value
  }

  clear() {
    this.components = []
    this.comDetail = []
    this.id = 0
  }
}

export default new TestStore()
