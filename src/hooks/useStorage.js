import { useState, useEffect } from "react";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // ref
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection("images");

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        const title = localStorage.getItem("title");
        const star = localStorage.getItem("rating");
        const notes = localStorage.getItem("notes");
        collectionRef.add({ url, createdAt, title, star, notes });
        setUrl(url);
        document.querySelector("form").style.display = "none";
        document.querySelector(".backdrop").style.display = "none";
        document.querySelector(".img-grid").style.display = "grid";
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
