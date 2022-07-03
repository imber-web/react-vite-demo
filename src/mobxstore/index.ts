import { makeAutoObservable } from 'mobx'

const store = makeAutoObservable({
  data: {
    name: 'imber'
  },
  changeName: (val: string) => (store.data.name = val) // action
})

export default store
