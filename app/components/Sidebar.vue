<template>
	<div>
		<div id="categories">
			<div id="cat-header">
				<h2><i class="bookmark icon"></i>Bookmark App</h2>
			</div>
			<div class="container">
				<h2>Categories
					<span class="clickable right-float"><i class="add icon" @click="addCategory" data-content="Add a new category" data-variation="small" title="Add a new category"></i></span>
				</h2>
				<div class="ui list">
					<div class="item clickable">
						<div class="content">
							<a href="" class="ui grey empty circular label"></a>
							<span @click="categorySelected('')">All</span>
						</div>
					</div>
					<div class="item clickable" v-for="(color, name) in categories">
						<div class="content">
							<a class="ui empty circular label" :class="color"></a>
							<span @click="categorySelected(name)" :class="{selected: selectedCategory === name}">{{ name }}</span>
							<i class="remove icon right-float" v-if="name !== 'Uncategorized'" @click="deleteCategory(name)" title="Delete Category"></i>
						</div>
					</div>
				</div>
				<button class="ui grey inverted basic icon circular button right-float" @click="addBookmark" title="Add a new bookmark"><i class="icon add"></i></button>
			</div>
		</div>
		<category-modal></category-modal>
		<bookmark-modal :categories="categories"></bookmark-modal>
	</div>
</template>

<script>
	import store from '../store'
	import CategoryModal from './CategoryModal.vue'
	import BookmarkModal from './BookmarkModal.vue'

	export default {
		data() {
			return {
				selectedCategory: ''
			}
		},
		
		props: ['categories'],

		components: {
			CategoryModal,
			BookmarkModal
		},

		methods: {
			addBookmark () {
				eventHub.$emit('add-bookmark') //@TODO using $emit but check what it should be
			},

			addCategory () {
				eventHub.$emit('add-category') //@TODO using $emit but check what it should be
			},

			deleteCategory (category) {
				store.deleteCategory(category)
			},

			categorySelected (category) {
				this.selectedCategory = category
				this.$emit('category-selected', category)
			}
		}
	}
</script>