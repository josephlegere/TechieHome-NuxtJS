export const state = () => ({
    list: [],
    banner: {}
});

export const actions = {
    async get({ commit }) {
        const response = await this.$axios.get(`${process.env.cmsURL}/banners`);
        //console.log(response.data[response.data.length - 1].BannerItems);
        commit("setBanners", response.data[response.data.length - 1]);
    }
};

export const mutations = {
    //setList: (state, banners) => (state.list = banners),
    setBanners(state, banners) {
        state.list = banners.BannerItems;
        state.banner = banners;
    }
};
