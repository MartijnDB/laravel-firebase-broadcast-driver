import firebase from "firebase"
import Vue from 'vue'

export default firebase
    .initializeApp({
        apiKey: process.env.MIX_FB_API_KEY,
        authDomain: process.env.MIX_FB_AUTH_DOMAIN,
        databaseURL: process.env.MIX_FB_DB_URL,
        storageBucket: process.env.MIX_FB_STORAGE_BUCKET
    })
    .database()
