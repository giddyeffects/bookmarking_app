<template>
	<div id="bookmark-modal" class="ui small modal">
		<i class="close icon"></i>
		<div class="header">Add a new bookmark</div>
		<div class="content">
			<form class="ui form">
				<div class="field">
					<label>Bookmark Title</label>
					<input type="text" v-model="bookmarkTitle" placeholder="Enter a title for your bookmark">
				</div>
				<div class="field">
					<label>Bookmark URL</label>
					<input type="text" v-model="bookmarkUrl" placeholder="Enter a URL for your bookmark">
				</div>
				<div class="field">
					<label>Bookmark category</label>
					<select v-model="bookmarkCategory" class="ui simple dropdown">
						<option value="">Select a category</option>
						<template v-for="(color, name) in categories">
							<option :value="name">{{ name }}</option>
						</template>
					</select>
				</div>
			</form>
		</div>
		<div class="actions">
			<div @click="addBookmark" class="ui inverted purple button">Add</div>
		</div>
	</div>
</template>

<script>
	import store from '../store'

	export default {
		data () {
			return {
				bookmarkTitle: '',
				bookmarkUrl: '',
				bookmarkCategory: ''
			}
		},

		props: ['categories'],

		created () {
		  	eventHub.$on('add-bookmark', this.showBmModal)
		},

		beforeDestroy () {
		  	eventHub.$off('add-bookmark', this.showBmModal)
		},

		methods: {
			addBookmark() {
				const newBookmark = {
					title: this.bookmarkTitle,
					url: this.bookmarkUrl,
					category: this.bookmarkCategory
				}
				store.addBookmark(newBookmark)
				$('#bookmark-modal').modal('hide')
			},

			showBmModal() {
				this.bookmarkTitle = this.bookmarkUrl = this.bookmarkCategory = ''
				$('#bookmark-modal').modal('show')
			}
		},

		/*events: {
			'add-bookmark': function() {
				this.bookmarkTitle = this.bookmarkUrl = this.bookmarkCategory = ''
				$('#bookmark-modal').modal('show')
			}
		}*/
	}
</script>