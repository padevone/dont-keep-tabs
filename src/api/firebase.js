import app from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const collections = {
  CATEGORIES: 'categories',
  LINKS: 'links',
};

class FirebaseAPI {
  constructor() {
    app.initializeApp(config);

    this.firestore = app.firestore();
  }

  async fetchCategories() {
    const snapshot = await this.firestore
      .collection(collections.CATEGORIES)
      .get();

    return snapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id,
    }))
  }

  addCategory(data) {
    return this.firestore
      .collection(collections.CATEGORIES)
      .add();
  }

  removeCategory(id) {
    return this.firestore
      .collection(collections.CATEGORIES)
      .delete(id)
  }

  async fetchCategoryLinks(id) {
    const snapshot = await this.firestore
      .collection(collections.LINKS)
      .where('categoryId', '==', id)
      .get();

    return snapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id,
    })) || [];
  }

  async addCategoryLink(categoryId, data) {
    return this.firestore
      .collection(collections.links)
      .add({
        ...data,
        categoryId,
      })
  }

  async fetchLinks() {
    const docs = await this.firestore
      .collection('links')
      .get();

    const links = docs.docs.map((doc) => {
      const data = doc.data();

      return {
        ...data,
        id: doc.id,
      };
    });

    return links

  }

  addLink(link) {
    return this.firestore
      .collection('links')
      .add(link);
  }

  updateLink(id, data) {
    return this.firestore
      .collection('links')
      .doc(id)
      .update(data);
  }

  removeLink(id) {
    return this.firestore
      .collection('links')
      .doc(id)
      .delete();
  }
  
}

export default FirebaseAPI;
