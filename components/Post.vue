<template>
    <v-card
        class="ma-4 pa-2"
        nuxt
        :to="'/posts/' + id">
        <v-row no-gutters>
            <v-col
                cols="12"
                md="4"
                class="d-flex justify-center">
                <v-img
                    aspect-ratio="1.7"
                    class="grey darken-4"
                    :src="cmsURL + thumbnail" />
            </v-col>
            <v-col
                cols="12"
                md="8">
                    <v-card-title>{{title}}</v-card-title>
                    <v-card-text>
                        {{summary}}
                    </v-card-text>
                    <v-sheet>
                        <v-chip
                            class="ma-2"
                            v-for="(tag, i) in tags" :key="i"
                        >
                            {{tag.Tag}}
                        </v-chip>
                    </v-sheet>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            cmsURL: process.env.cmsURL
        }
    },
    props: {
        id: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        thumbnail: {
            type: String,
            required: true
        },
        summary: {
            type: String,
            required: true
        },
        tags: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>

</style>