/** @format */

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyB67Osy2Mg0CdJE5IXIVuopwvCZ9aIJY3k",
	authDomain: "varun-portfolio-7d2e5.firebaseapp.com",
	projectId: "varun-portfolio-7d2e5",
	storageBucket: "varun-portfolio-7d2e5.appspot.com",
	messagingSenderId: "448222515954",
	databaseURL: "https://varun-portfolio-7d2e5-default-rtdb.firebaseio.com",
	appId: "1:448222515954:web:f1287d30238f8eca19766b",
	measurementId: "G-ZJ8KGER7ES"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
