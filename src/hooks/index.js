import { makeAutoObservable, runInAction } from 'mobx'

class TestStore {
  amount = 1 // observable state
  data // observable state

  constructor() {
    // 自动监听所有属性
    makeAutoObservable(this)
  }

  // computed
  get price() {
    return `$${this.amount * 100}`
  }

  // action
  increment() {
    this.amount++
  }
}

export default new TestStore()
