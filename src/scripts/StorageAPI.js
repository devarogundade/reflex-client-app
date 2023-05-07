import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL
} from "firebase/storage";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyB1T4iKToAXhyA9EIJrDvxstZfntkLJNVg",
    authDomain: "reflex-ddeba.firebaseapp.com",
    projectId: "reflex-ddeba",
    storageBucket: "reflex-ddeba.appspot.com",
    messagingSenderId: "407511163875",
    appId: "1:407511163875:web:1edb4355ebcf35537276d6",
    measurementId: "G-4DKGY60RKY"
  };

const StorageAPI = {
    upload(blob, name) {
        const firebaseApp = initializeApp(firebaseConfig);
        getAnalytics(firebaseApp);

        return new Promise((resolve, reject) => {
            console.log('Uploading video ...');
            const storage = getStorage();
            const storageRef = ref(storage, `faces/${name}`);
            const uploadTask = uploadBytesResumable(storageRef, blob);
            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                },
                (error) => {
                    console.log(error);
                    console.error('firebase', error);
                    reject(error);
                },
                async () => {
                    await getDownloadURL(uploadTask.snapshot.ref)
                    resolve(`https://storage.googleapis.com/crossart-aea81.appspot.com/faces/${name}`);
                }
            );
        });
    }
}

export default StorageAPI