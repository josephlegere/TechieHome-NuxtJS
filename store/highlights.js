export const state = () => ({
  list: [],
  highlight: {}
});

// export const getters = {
//     allHighlights: state => state.highlights
// }

export const actions = {
  async get({ commit }) {
    const response = await this.$axios.get(`${process.env.cmsURL}/highlights`);
    //console.log(response.data[response.data.length - 1].Posts);
    commit("setHighlights", response.data[response.data.length - 1]);
  }
//   async show({ commit }, id) {
//     const response = await this.$axios.get(
//       `${process.env.cmsURL}/highlights/${id}`
//     );
//     commit("setHighlight", response.data);
//   }
};

export const mutations = {
    //setList: (state, highlights) => (state.list = highlights),
    setHighlights(state, highlights) {
        state.list = highlights.Posts;
        state.highlight = highlights;
    }
};
