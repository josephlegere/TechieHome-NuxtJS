<template>
    <div>
		<v-sheet
            class="mx-auto"
            max-width="1200">

			<h3>Posts</h3>

			<Post v-for="post in posts" :key="post._id" :id="post._id" :title="post.title" :thumbnail="post.display_image.formats.small.url" :summary="post.summary" :tags="post.tags" />
			<!-- <Post /> -->
		</v-sheet>

	</div>
</template>

<script>
import Post from '~/components/Post';
import { mapState } from 'vuex';

export default {
	name: 'Posts',
	computed: {
		...mapState({
			posts: state => state.posts.list
		})
	},
	async fetch({store}) {
		await store.dispatch('posts/get');
	},
	components: {
		Post
	}
}
</script>

<style>

</style>