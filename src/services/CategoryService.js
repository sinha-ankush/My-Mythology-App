import { myAxios } from "./Helper";

export const loadAllCategories = () => {
  return myAxios.get('/category/all').then((respone) => {
    return respone.data;
  });
};