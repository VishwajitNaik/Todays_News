import { db } from './path-to-your-firebase-config'; // Import the Firebase database or Firestore instance

// ... (other imports and component code)

const News = () => {
  // ... (other state variables)

  const toggleFavorite = (article) => {
    const isFavorited = favorites.some((fav) => fav.title === article.title);

    if (isFavorited) {
      // Remove article from favorites
      setFavorites(favorites.filter((fav) => fav.title !== article.title));

      // Update Firebase: Remove article from user's favorites collection
      db.collection('users').doc('user-id').update({
        favorites: firebase.firestore.FieldValue.arrayRemove(article),
      });
    } else {
      // Add article to favorites
      setFavorites([...favorites, article]);

      // Update Firebase: Add article to user's favorites collection
      db.collection('users').doc('user-id').update({
        favorites: firebase.firestore.FieldValue.arrayUnion(article),
      });
    }
  };

  // ... (rest of the component code)
};

export default News;
