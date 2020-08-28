<template>
    <v-container>
        <v-sheet>
            <v-card
                class="mx-auto"
                max-width="100%"
                tile
                flat
            >
                <v-img
                    class="white--text align-end"
                    height="200px"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                >
                </v-img>
            </v-card>
        </v-sheet>
        <v-sheet
            class="mx-auto"
            max-width="800">
            <v-card
                class="mx-auto"
                max-width="100%"
                tile
                flat
            >
                <v-card-title>{{post.title}}</v-card-title>

                <v-card-actions>
                    <v-list-item class="grow">
                        <v-list-item-avatar color="grey darken-3">
                            <v-img
                                class="elevation-6"
                                src="/joseph_headshot.jpg"
                            ></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>{{post.authors[0].name}}</v-list-item-title>
                            <v-list-item-subtitle>{{post.createdAt}}</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-row
                            align="center"
                            justify="end"
                        >
                            <v-btn icon>
                                <v-icon class="mr-1">mdi-heart</v-icon>
                            </v-btn>
                            <v-btn icon>
                                <v-icon class="mr-1">mdi-share-variant</v-icon>
                            </v-btn>
                        </v-row>
                    </v-list-item>
                </v-card-actions>
            </v-card>
        </v-sheet>

        <v-sheet
            class="mx-auto text-justify markdown"
            max-width="800">
                <span v-html="compiledMarkdown"></span>
        </v-sheet>

        <v-sheet
            class="mx-auto"
            max-width="800">
            <v-chip
                class="ma-2"
                v-for="(tag, i) in post.tags" :key="i"
            >
                {{tag.Tag}}
            </v-chip>
        </v-sheet>

        <v-sheet
            class="mx-auto"
            max-width="800">
            <v-card
                class="mx-auto"
                max-width="100%"
                tile
                flat
            >

                <v-card-actions>
                    <v-list-item class="grow">
                        <v-row
                            align="center"
                            justify="end"
                        >
                            <v-btn icon>
                                <v-icon class="mr-1">mdi-heart</v-icon>
                            </v-btn>
                            <v-btn icon>
                                <v-icon class="mr-1">mdi-share-variant</v-icon>
                            </v-btn>
                        </v-row>
                    </v-list-item>
                </v-card-actions>

                <v-divider></v-divider>

                <v-card-text v-for="(author, i) in post.authors" :key="i">
                    <v-list-item class="grow">
                        <v-list-item-avatar color="grey darken-3" size="60">
                            <v-img
                                class="elevation-6"
                                src="/joseph_headshot.jpg"
                            ></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content
                            two-line>
                            <v-list-item-title>{{author.name}}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ducimus ullam fuga expedita molestiae quae amet sed magni, quidem praesentium?
                    </div>
                </v-card-text>
            </v-card>
        </v-sheet>
    </v-container>
</template>

<script>
import { mapState } from 'vuex';
import marked from 'marked';

export default {
	name: 'Post',
	computed: {
		...mapState({
			post: state => state.posts.post
        }),
        compiledMarkdown: function() {
            return marked(this.post.content, { sanitize: true });
        }
	},
	async asyncData({store, error, params}) {
        await store.dispatch('posts/show', params.id)
            .then(e => {
                console.log(e)
                let _post = e;
                if (!_post.LiveSwitch) {
                    throw ({ statusCode: 404, message: 'Post not found' });
                }
            })
            .catch(e => {
                error(e);
            });
	}
}
</script>

<style scoped>
</style>