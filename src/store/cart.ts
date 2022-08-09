import {defineStore} from 'pinia'

interface ItemType {
    id: number,
    name: string
}
export const useCart = defineStore('cart', {
    state: () => ({
        items: [] as ItemType[]
    }),
    actions: {
        addItem (item: ItemType) {
            this.items.push(item)
        }
    }
})