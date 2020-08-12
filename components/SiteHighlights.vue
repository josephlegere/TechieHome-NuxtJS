<template>
    <v-item-group>
        <v-container>
            <v-row>
                <v-col
                    v-for="(item, i) in items"
                    :key="i"
                    :cols="cols"
                    :md="cols/items.length"
                >
                    <v-item>
                        <v-card
                            class="d-flex flex-column align-center"
                            height="500"
                            nuxt
                            :to="'/posts/' + item.post.id"
                        >
                            <v-img
                                class="align-end"
                                :src="cmsURL + item.post.display_image.formats.small.url"
                            />
                            <v-card-title class="headline">{{item.post.title}}</v-card-title>
                            <v-card-text>
                                {{item.post.summary}}
                            </v-card-text>
                        </v-card>
                    </v-item>
                </v-col>
            </v-row>
        </v-container>
    </v-item-group>
</template>

<script>
export default {
    data() {
        return {
            cols: 12,
            cmsURL: process.env.cmsURL
        }
    },
    props: {
        items: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>

</style>