import { myAxios } from "./Helper";

export const loadAllStoryPosts = () => {
    return myAxios.get('/story/post/all').then((response) => {
        return response.data;
    });
}

export const loadAllFeedback = () => {
    return myAxios.get('/feedback/all').then((response) => {
        return response.data;
    });
}