// src/components/Services/FirebaseService.js
import { firestore } from '../../firebase'; // Adjust the path accordingly
import firebase from 'firebase/app';
import 'firebase/firestore';

export const addFavoriteArticle = async (userId, article) => {
  try {
    await firestore.collection('favorites').doc(userId).set({
      articles: firebase.firestore.FieldValue.arrayUnion(article),
    }, { merge: true });
    console.log('Article added to favorites successfully!');
  } catch (error) {
    console.error('Error adding article to favorites:', error);
  }
};

export const getFavoriteArticles = async (userId) => {
  try {
    const doc = await firestore.collection('favorites').doc(userId).get();
    return doc.data()?.articles || [];
  } catch (error) {
    console.error('Error getting favorite articles:', error);
    return [];
  }
};
