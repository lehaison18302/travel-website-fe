const { getApi, postApi } = require("./baseApi");

export const searchLocation = async () => {
    const locationId = "123"; // ID của địa điểm cần sửa
    const updatedData = { name: "Tên địa điểm mới", address: "456 DEF Street" };
    try {
        const response = await putApi(locationId, updatedData);
        console.log("Cập nhật thành công:", response);
    } catch (err) {
        console.error("Lỗi khi cập nhật địa điểm:", err);
    }
};

export const getSuggestLocation = async () =>{
    let data = await getApi("suggestLocation");
    return data 
}

export const submitVoteLocation = async (data) =>{
    let response = await postApi("voteLocation", data); ///voteLocation
    return response 
}

export const addFavLocation = async (data) =>{
    let response = await postApi("favouriteLocation", data); ///voteLocation
    return response 
}