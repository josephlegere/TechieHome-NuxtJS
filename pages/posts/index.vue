<template>
    <div>
		<v-sheet
            class="mx-auto"
            max-width="1200">

			<h3>Posts</h3>

			<Post v-for="post in sortPosts" :key="post._id" :id="post._id" :title="post.title" :thumbnail="post.display_image.formats.small.url" :summary="post.summary" :tags="post.tags" />
			<!-- <Post /> -->
		</v-sheet>

	</div>
</template>

<script>
import _ from "lodash";

import Post from '~/components/Post';
import { mapState } from 'vuex';

export default {
	name: 'Posts',
	methods: {
		compare(a, b) {
			let postA = new Date(a.createdAt);
			let postB = new Date(b.createdAt);

			let comparison = 0;
			if (postA.getTime() > postB.getTime()) {
				comparison = -1;
			} else if (postA.getTime() < postB.getTime()) {
				comparison = 1;
			}

			return comparison;
		}
	},
	computed: {
		...mapState({
			posts: state => state.posts.list
		}),
		sortPosts() {
			let _posts = _.cloneDeep(this.posts);
			return _posts.sort(this.compare);
		}
	},
	async asyncData({store}) {
		await store.dispatch('posts/get');
	},
	components: {
		Post
	}
}
</script>

<style>

</style>