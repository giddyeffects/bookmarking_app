<template>
	<div id="links-container">
		<div id="toolbar">
			<div class="ui inverted icon fluid input">
				<input v-model="query" type="text" placeholder="Filter your links...">
				<i class="search icon"></i>
			</div>
		</div>
		<div class="ui relaxed divided selection list">
			<bookmark v-for="(bookmark, id) in filterByTitle(query)"
				:key="id"
				:id="id"
				:title="bookmark.title"
				:url="bookmark.url"
				:category="bookmark.category"
				:category-color="categories[bookmark.category]">
			</bookmark>
		</div>
	</div>
</template>

<script>
	import Bookmark from './Bookmark.vue'

	export default {
		data() {
			return {
				query: ''
			}
		},

		props: ['bookmarks', 'categories'],

		methods: {
			filterByTitle(filterValue) {
				var filteredBookmarks = {}
				for (var bookmark in this.bookmarks) {
					if (this.bookmarks[bookmark]['title'].indexOf(filterValue) > -1) {
						filteredBookmarks[bookmark] = this.bookmarks[bookmark]
					}
				}

				return filteredBookmarks
			}
		},

		components: {
			Bookmark
		}
	}
</script>