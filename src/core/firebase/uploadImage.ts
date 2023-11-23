import storage from "./config";
import { uploadBytes, getDownloadURL, ref } from "firebase/storage";

export const uploadImage = async (file: Blob) => {
  const storageRef = ref(storage, crypto.randomUUID());
  return await uploadBytes(storageRef, file).then((snapshot) =>
    getDownloadURL(snapshot.ref)
  );
};
