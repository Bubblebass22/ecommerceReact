import firebase from "../Config/firebase"
import "firebase/compat/auth";
import "firebase/compat/firestore";


export  async function create(payload){
    const responseUser = await firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
    console.log(responseUser.user.uid)
    const document = await firebase.firestore().collection("usuarios").add({
        name: payload.nombre,
        apellido: payload.apellido,
        userId: responseUser.user.uid,
    })

    return document
}

export async function login(email, password){
    const responseUser = await firebase.auth().signInWithEmailAndPassword(email, password)
    if(responseUser.user.uid){
        const userDocument = await firebase.firestore().collection("usuarios")
        .where("userId", "==", responseUser.user.uid)
        .get()
        
        return userDocument.docs[0].data()
    }
    return {}
}