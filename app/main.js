import Vue from 'vue'
import App from './App.vue'

// This is the event hub we'll use in every
// component to communicate between them.
window.eventHub = new Vue()

new Vue({
	el: '#myapp',
	components: { App }
})