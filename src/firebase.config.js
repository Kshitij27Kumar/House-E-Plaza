// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyAUUaH10d_vyW2eQmxk_QIn8yw_E71SDaQ',
  authDomain: 'house-e-plaza.firebaseapp.com',
  projectId: 'house-e-plaza',
  storageBucket: 'house-e-plaza.appspot.com',
  messagingSenderId: '969740315867',
  appId: '1:969740315867:web:38c18c2a4bab3f159530fe',
}

// Initialize Firebase
initializeApp(firebaseConfig)

export const db = getFirestore()
