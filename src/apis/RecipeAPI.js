import { api } from "./axiosConfig"


export const RecipeAPI = {
    getRandomRecipe:async function(){
        const response = await api.request({
            url: `/random.php`,
            method: "GET",
           
        })
        return response.data.meals
    },
    getRecipe : async function (name){
        const response = await api.request({
            url: `/search.php?s=${name}`,
            method: "GET",
           
        })
        return response.data.meals
    },
    getcategories: async function () {

    // make fetch request and store response
    const response = await api.request({
     url: "/categories.php",
     method: "GET"
    })
    return response.data.categories
  } 
  }