export const state = () => ({
	list: [],
	highlightObj: {}
});

export const actions = {
	async get({ commit }) {
		const response = await this.$axios.get(`${process.env.cmsURL}/highlights`);
		//console.log(response.data[response.data.length - 1].Posts);
		commit("setHighlights", response.data[response.data.length - 1]);
	}
};

export const mutations = {
    //setList: (state, highlights) => (state.list = highlights),
    setHighlights(state, highlights) {
        state.list = highlights.Posts;
		state.highlightObj = highlights;
    }
};
