import "firebase/compat/firestore";
import firebase from "../Config/firebase";





export async function getAllProductos(buscar){
   //return instance.get(`https://api.mercadolibre.com/sites/MLA/search?q=${buscar}`)
   return await firebase.firestore().collection("productos")
   .orderBy("title", "asc")
   .startAt(buscar)
   .endAt(buscar+"\uf8ff")   
   .get()

}  
    


export async function getById(id){
    //return instance.get(`https://api.mercadolibre.com/items/${id}`)
    return await firebase.firestore().doc(`productos/${id}`).get()

}

export async function create(payload){
    return await firebase.firestore().collection("productos").add(payload)
}

export async function update(id,payload){
    return await firebase.firestore().doc(`productos/${id}`).set(payload)
}

export async function deleteProducto(id){
    return await firebase.firestore().doc(`productos/${id}`).delete()
}