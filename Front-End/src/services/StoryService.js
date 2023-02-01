import { myAxios, privateAxios } from "./Helper";

export const createStory = (storyData) => {
    return privateAxios.post(`/story/user/${storyData.userId}/category/${storyData.categoryId}/create`, storyData)
        .then((response) => response.data);
}

export const uploadStoryImage = (image, storyId) => {
    let formData = new FormData();
    formData.append("image", image);
    return privateAxios
        .post(`/story/image/upload/${storyId}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then((response) => response.data);
};

export const loadAllStory = (categoryId) => {
    return myAxios.get("/story/category/" + categoryId).then((reponse) => reponse.data);
};

export const loadAll = () => {
    return myAxios.get("/story/all").then((response) => response.data);
}

//load single post of given id

export const load = (storyId) => {
    return myAxios.get("/story/" + storyId).then((reponse) => reponse.data);
};

export const loadByCategory = (categoryId) => {
    return myAxios.get("/story/category/" + categoryId).then((response) => response.data);
}

export const loadMythologyStory = () => {
    return myAxios.get("/story/25").then((reponse) => reponse.data);
};

export const loadCharacters = () => {
    return myAxios.get("/story/5").then((reponse) => reponse.data);
};

export const loadFestivals = () => {
    return myAxios.get("/story/26").then((reponse) => reponse.data);
};

export const loadTemples = () => {
    return myAxios.get("/story/8").then((reponse) => reponse.data);
};

