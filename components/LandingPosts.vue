<template>
    <div>
        <h3 class="text-center">Recent Posts</h3>
        <v-row>

            <v-col
                v-for="(post, i) in recents"
                cols="12"
                :md="(i === 0 ? 12 : 6)"
                :key="i"
            >
                <v-card
                    class="d-flex flex-column align-center"
                >
                    <v-img
                        class="align-end white--text"
                        :src="post.img"
                    >
                        <v-card-title class="headline">{{post.title}}</v-card-title>
                    </v-img>
                    <v-card-text>
                        {{post.summary}}
                    </v-card-text>
                </v-card>
            </v-col>

        </v-row>
    </div>
</template>

<script>
export default {
    props: {
        recents: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>

</style>