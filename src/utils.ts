import {getDatabase, ref, set, onValue, get, child } from 'firebase/database';
import { useShoppingListStore } from './stores/shoppingListStore';
export function listenAndGetAllData() {
    const reference = ref(getDatabase());
    onValue(reference, (snapshot) => {
        const data = snapshot.val();
        const listStore = useShoppingListStore();
        listStore.setState(data ?? []);
        console.log(data)
    });
}
export async function postShoppingName(data: {name: string, list:[]}) {
    try {
        const listStore = useShoppingListStore();
        const dataList = listStore.shoppingList ?? [];
        dataList.push({id: new Date().getTime(), keterangan: data.name, list: data.list, total: 0})
        console.log(dataList);
        const reference = ref(getDatabase());
        await set(reference, {shoppingList: dataList})
    } catch(err) {
        alert(err);
        console.log(err);
    }
    
    
    
}

export async function getDataById(id: number) {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `shoppingList`)).then((snapshot) => {
    if (snapshot.exists()) {
        console.log(snapshot.val());
    } else {
        console.log("No data available");
    }
    }).catch((error) => {
    console.error(error);
    });
    
}