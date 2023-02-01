import { myAxios } from "./Helper";
import { privateAxios } from "./Helper";

export const loadEpisodeById = (episodeId) => {
    return myAxios.get("/episode/" + episodeId).then((responce) => responce.data);
};

export const loadEpisodeOfStory = (storyId) => {
    return myAxios.get(`/episode/story/${storyId}`).then((responce) => responce.data);
};

export const createEpisode = (episodeData) => {
    return privateAxios
        .post(`/episode/story/${episodeData.storyId}/create`, episodeData)
        .then((response) => response.data);
};

export const placeFileName = (episodeData) => {

    return privateAxios

        .put(`/episode/place-file/${episodeData.episodeId}`, episodeData)

        .then((responce) => responce.data);

}