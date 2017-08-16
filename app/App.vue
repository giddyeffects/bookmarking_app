<template>
	<div id="app">
		<sidebar :categories="categories" @category-selected="setSelectedCategory"></sidebar>
		<bookmark-list 
			:bookmarks="bookmarks | filterByCategory(selectedCategory)" 
			:categories="categories">	
		</bookmark-list>
	</div>
</template>

<script>
	import store from './store'
	import Sidebar from './components/Sidebar.vue'
	import BookmarkList from './components/BookmarkList.vue'
	import { filterByCategory } from './filters'

	export default {
		components: {
			Sidebar,
			BookmarkList
		},

		data() {
			return {
				categories: {},
				bookmarks: {},
				selectedCategory: ''
			}
		},

		filters: {
			filterByCategory
		},

		created() {
			store.on('data-updated', this.updateListings)
		},

		methods: {
			//set the bookmarks and categories data properties to the new ones received from the store
			updateListings (categories, bookmarks) {
				this.categories = categories
				this.bookmarks = bookmarks
			},

			setSelectedCategory (category) {
				this.selectedCategory = category
				console.log('selected category is '+category)
			}
		}
	}
</script>