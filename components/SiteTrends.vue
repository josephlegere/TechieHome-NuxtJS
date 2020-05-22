<template>
    <v-item-group>
        <v-container>
            <v-row>
                <v-col
                    v-for="(item, i) in items"
                    :key="i"
                    cols="6"
                    :md="cols/items.length"
                >
                    <v-item>
                        <v-card
                            class="d-flex align-center"
                            height="110"
                            nuxt
                            to="/shop/1"
                        >
                            <v-img
                                class="align-end white--text"
                                :src="item.img"
                            >
                                <v-card-title class="headline">{{item.title}}</v-card-title>
                            </v-img>
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
            cols: 12
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