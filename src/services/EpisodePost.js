import { myAxios } from "./Helper";
import { privateAxios } from "./Helper";

export const createEpisodePost = (episodePostData) => {
    return privateAxios
        .post(`/episode/post/story/post/${episodePostData.storyPostId}/create`, episodePostData)
        .then((response) => response.data);
};

export function getEpisodePostOfStoryPost(storyPostId) {
    return myAxios
        .get(`/episode/post/story/post/${storyPostId}`)
        .then((response) => response.data)
}

export const uploadEpisodeFile = (file, episodePostId) => {
    let formData = new FormData();
    formData.append("file", file);
    return privateAxios
        .post(`/episode/post/file/upload/${episodePostId}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then((response) => response.data);
};

