// import axios from '@nuxtjs/axios';

export const state = () => ({
    list: [],
    post: {}
})

// export const getters = {
//     allPosts: state => state.posts
// }

export const actions = {
    async get({ commit }) {
        const response = await this.$axios.get(`${process.env.cmsURL}/posts`);
        commit('setList', response.data);
    },
    async show({ commit }, id) {
        const response = await this.$axios.get(`${process.env.cmsURL}/posts/${id}`);
        commit('setPost', response.data);
    }
}

export const mutations = {
    setList: (state, posts) => (state.list = posts),
    setPost(state, post) { state.post = post }
}