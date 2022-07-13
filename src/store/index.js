import { makeAutoObservable } from 'mobx'

class TestStore {
  components = []
  comDetail = {}
  id = 0

  constructor() {
    // 自动监听所有属性
    makeAutoObservable(this)
  }

  // computed
  // get price() {
  //   return `$${this.amount * 100}`
  // }

  // action
  addComponent(com, name) {
    this.components.push({
      ...com,
      name,
      id: ++this.id
    })
    console.log(this.components)
  }
}

export default new TestStore()
