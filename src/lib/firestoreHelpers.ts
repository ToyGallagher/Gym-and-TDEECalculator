import { db } from "./firebase"; // Firestore instance
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function saveToFirestore(formData: any, userId: string) {
  try {
    const docRef = await addDoc(collection(db, "contactSubmissions"), {
      ...formData,
      userId: userId,
      createdAt: serverTimestamp(), // Firebase Timestamp
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
}