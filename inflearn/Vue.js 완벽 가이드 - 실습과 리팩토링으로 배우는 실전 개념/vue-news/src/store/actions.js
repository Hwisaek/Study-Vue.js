import {
    fetchNewsList,
    fetchJobsList,
    fetchAskList,
    fetchUserInfo,
    fetchItemInfo,
    fetchList
} from "../api/index.js";

export default {
    // FETCH_NEWS({ commit }) {
    //     return fetchNewsList()
    //         .then(response => {
    //             commit("SET_NEWS", response.data);
    //             return response;
    //         })
    //         .catch(error => console.log(error))
    // },
    async FETCH_NEWS({ commit }) {
        try {
            const response = await fetchNewsList();
            commit("SET_NEWS", response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    async FETCH_JOBS({ commit }) {
        try {
            const response = await fetchJobsList();
            commit("SET_JOBS", response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    async FETCH_ASKS({ commit }) {
        const response = await fetchAskList();
        commit("SET_ASKS", response.data);
        return response;
    },
    async FETCH_USER({ commit }, userName) {
        try {
            const response = await fetchUserInfo(userName);
            commit("SET_USER", response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    async FETCH_ITEM({ commit }, id) {
        try {
            const response = await fetchItemInfo(id);
            commit("SET_ITEM", response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    async FETCH_LIST({ commit }, pageName) {
        const response = await fetchList(pageName);
        commit("SET_LIST", response.data);
        return response;
    },
}