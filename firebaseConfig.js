import firebase from "firebase/compat/app";

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/compat/auth";
import "firebase/compat/database";
//import "firebase/compat/firestore";
//import "firebase/compat/functions";
import "firebase/compat/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
  apiKey: "AIzaSyArJTOhSurBv6-FoCUAGnJhNDCJ-DZRhOI",
  authDomain: "sparta-myhoneytip-jiwoo.firebaseapp.com",
  databaseURL : "https://sparta-myhoneytip-jiwoo-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "sparta-myhoneytip-jiwoo",
  storageBucket: "sparta-myhoneytip-jiwoo.appspot.com",
  messagingSenderId: "285327101610",
  appId: "1:285327101610:web:87e5af0f04b5de3df3cad3",
  measurementId: "G-YSJ6NV4X6K"
};

//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()