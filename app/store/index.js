import { EventEmitter } from 'events'
//import db config
import config from './config.js'

let firebase = require('firebase/app')
require('firebase/auth')
require('firebase/database')
  
  // Initialize Firebase
 firebase.initializeApp(config);

let db = firebase.database().ref()

//anonymous login
firebase.auth().signInAnonymously().catch(function(error) {
  	// Handle Errors here.
  	let errorCode = error.code;
  	let errorMessage = error.message;
  	if (errorCode === 'auth/operation-not-allowed') {
	    alert('You must enable Anonymous auth in the Firebase Console.');
  	} else {
    	console.error(error);
	}
});

const categoriesRef = db.child('categories')
const bookmarksRef = db.child('bookmarks')
const store = new EventEmitter()

let categories = {} //local copies
let bookmarks = {} //local copies

//change this to use child_added, child_removed, child_changed

db.on('value', (snapshot) => {
	var bookmarkData = snapshot.val()
	if (bookmarkData) {
		categories = bookmarkData.categories
		bookmarks = bookmarkData.bookmarks
		store.emit('data-updated', categories, bookmarks)
	}
})

store.addCategory = (category) => {
	categoriesRef.update(category)
}

store.deleteCategory = (catName) => {
	//first check if an 'Uncategorized' category exists, if not, create it
	if (!('Uncategorized' in categories)) {
		categoriesRef.update({'Uncategorized': 'white'})
	}
	for(var key in bookmarks){
		if (bookmarks[key].category === catName) {
			bookmarksRef.child(key).update({category: 'Uncategorized'})
		}
	}
	categoriesRef.child(catName).remove()
}

store.addBookmark = (bookmark) => {
	bookmarksRef.push(bookmark)
}

store.deleteBookmark = (id) => {
	bookmarksRef.child(id).remove()
}

export default store