import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
export interface shoppingList {
  id: number
  keterangan: string;
  total: number;
  list: listProduk[]
}
export interface listProduk {
  harga: number;
  jumlah: number;
  nama: string
}
export const useShoppingListStore = defineStore('ShoppingListStore', {
 state: (): {shoppingList: shoppingList[] | null} => ({
  shoppingList: null
 }),
 actions: {
  setState(data: {shoppingList: shoppingList[] | null}) {
    this.shoppingList = data.shoppingList;
  }
 }
});
