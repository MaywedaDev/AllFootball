import { initializeApp } from 'firebase/app'
import { getDatabase, get, ref, query, equalTo, child, orderByChild, limitToFirst } from 'firebase/database'
import { useState, useEffect } from 'react';



const useFireBase = (route, limit) => {
    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyBhhsjJ22kSYgAQkuk9YgmSjWp6EP_jHqM",
        authDomain: "allfootball-md.firebaseapp.com",
        projectId: "allfootball-md",
        storageBucket: "allfootball-md.appspot.com",
        messagingSenderId: "886608966936",
        appId: "1:886608966936:web:3a8ec7ab0ad4941f3c9a6d"
    };

    const [data, setData] = useState(null)

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app)

  useEffect(() => {
   if (limit){
        get(query(ref(db, route), limitToFirst(limit))).then((snapshot) => {
            if (snapshot.exists()) {
              //console.log(snapshot.val());
              setData(snapshot.val())
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });
    } else{
        get(child(ref(db), route)).then((snapshot) => {
            if (snapshot.exists()) {
              //console.log(snapshot.val());
              setData(snapshot.val())
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });
    }

  }, [route, limit])

  return data
  
}

export default useFireBase

