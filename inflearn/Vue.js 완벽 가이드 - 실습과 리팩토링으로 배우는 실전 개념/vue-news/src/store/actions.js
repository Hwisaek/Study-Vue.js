import {
    fetchNewsList,
    fetchJobsList,
    fetchAskList,
    fetchUserInfo,
    fetchItemInfo
} from "../api/index.js";

export default {
    FETCH_NEWS({ commit }) {
        fetchNewsList()
            .then(response => {
                commit("SET_NEWS", response.data)
            })
            .catch(error => console.log(error))
    },
    FETCH_JOBS({ commit }) {
        fetchJobsList()
            .then((response) => {
                commit("SET_JOBS", response.data)
            })
            .catch((error) => console.log(error));
    },
    FETCH_ASKS({ commit }) {
        fetchAskList()
            .then((response) => {
                commit("SET_ASKS", response.data)
            })
            .catch((error) => console.log(error));
    },
    FETCH_USER({ commit }, userName) {
        fetchUserInfo(userName)
            .then((response) => {
                commit("SET_USER", response.data)
            })
            .catch((error) => console.log(error));
    },
    FETCH_ITEM({ commit }, id) {
        fetchItemInfo(id)
            .then((response) => {
                commit("SET_ITEM", response.data)
            })
            .catch((error) => console.log(error));
    }
}