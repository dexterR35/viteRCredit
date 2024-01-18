import { db } from "./FirebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const Firestore = {
  addData: async (collectionName, data) => {
    try {
      const dataWithTimestamp = { ...data, timestamp: serverTimestamp() };
      const docRef = await addDoc(
        collection(db, collectionName),
        dataWithTimestamp
      );
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  },
};

export default Firestore;
