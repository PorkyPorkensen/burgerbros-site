import { collection, getDocs } from "firebase/firestore";
import  db  from "../firebase"; // adjust path if needed

export async function fetchBurgers() {
  const querySnapshot = await getDocs(collection(db, "burgers"));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function fetchOthers() {
  const querySnapshot = await getDocs(collection(db, "others"));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}