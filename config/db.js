import firebase from '@react-native-firebase/app'
import firestore from '@react-native-firebase/firestore';

class FirebaseService {

    async load(id) {
        const doc = await this.ref.doc(id).get();
        if (doc.exists) {
            return doc.data()
        } else {
            const defaultDoc = {
                name: "ABC",
                age: 2
            };
            await this.ref.doc(id).set(defaultDoc)
            return doc
        }
    }
}
export const firebaseService = new FirebaseService();