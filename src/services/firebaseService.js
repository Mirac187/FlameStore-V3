import { db, auth, storage } from '../firebase.js'
import { 
  collection, addDoc, getDocs, doc, updateDoc, deleteDoc, 
  query, orderBy, limit, onSnapshot, serverTimestamp 
} from "firebase/firestore"
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth"

export const firebaseService = {
  // --- KİMLİK DOĞRULAMA ---
  async loginWithGoogle() {
    try {
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      return result.user
    } catch (error) {
      console.error("Google Auth Error:", error)
      throw error
    }
  },

  async logout() {
    try {
      await signOut(auth)
    } catch (error) {
      console.error("Logout Error:", error)
    }
  },

  // --- TOPLULUK AKIŞI (POSTS) ---
  async createPost(postData) {
    try {
      return await addDoc(collection(db, "posts"), {
        ...postData,
        createdAt: serverTimestamp(),
        likes: 0,
        comments: []
      })
    } catch (error) {
      console.error("Create Post Error:", error)
    }
  },

  subscribeToPosts(callback) {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"))
    return onSnapshot(q, (snapshot) => {
      const posts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      callback(posts)
    })
  },

  // --- MAĞAZA UYGULAMALARI (APPS) ---
  async publishApp(appData) {
    try {
      return await addDoc(collection(db, "apps"), {
        ...appData,
        downloads: 0,
        rating: 5.0,
        virustotalStatus: "🛡 Safe (0/65)",
        createdAt: serverTimestamp()
      })
    } catch (error) {
      console.error("Publish App Error:", error)
    }
  },

  subscribeToApps(callback) {
    const q = query(collection(db, "apps"), orderBy("createdAt", "desc"))
    return onSnapshot(q, (snapshot) => {
      const apps = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      callback(apps)
    })
  },

  // --- CANLI SOHBET (CHAT) ---
  async sendChatMessage(messageData) {
    try {
      return await addDoc(collection(db, "chats"), {
        ...messageData,
        timestamp: serverTimestamp()
      })
    } catch (error) {
      console.error("Chat Error:", error)
    }
  },

  subscribeToChat(callback) {
    const q = query(collection(db, "chats"), orderBy("timestamp", "asc"))
    return onSnapshot(q, (snapshot) => {
      const messages = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      callback(messages)
    })
  }
}
