// import { myAxios } from "./Helper";
import { myAxios, privateAxios } from "./Helper";

export const createStoryPost = (storyPostData) => {
    // console.log(storyPostData);
    return privateAxios
        .post(`/story/post/user/${storyPostData.userId}/category/${storyPostData.categoryId}/create`, storyPostData)
        .then((response) => response.data);
};

export const uploadPostImage = (image, postId) => {
    let formData = new FormData();
    formData.append("image", image);
    return privateAxios
        .post(`/story/post/image/upload/${postId}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then((response) => response.data);
};

export function deleteStoryPost(postId) {
    return privateAxios.delete(`/story/post/delete/${postId}`).then((response) => response.data);
};

export function userStoryPost(userId) {
    return myAxios.get(`/story/post/user/${userId}`).then((response) => response.data);
};

// export const update = (data) => {
//     return privateAxios.put(`story/update/${storyId}`, data)
//         .then((response) => response.data);
// }