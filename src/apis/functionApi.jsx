const { axiosClient } = require("./baseApi");

const apiCommon = {
  getSuggestLocation: () => {
    const url = "suggestLocation";
    return axiosClient.get(url);
  },
  submitVoteLocation: (data) => {
    const url = `voteLocation`;
    return axiosClient.post(url, data);
  },
  addFavLocation: (data) => {
    const url = `favouriteLocation`;
    return axiosClient.post(url, data);
  }
};
export default apiCommon;
