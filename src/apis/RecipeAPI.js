import { api } from "./axiosConfig"
//import { defineCancelApiObject } from "./configs/axiosUtils"

export const RecipeAPI = {
    get:async function(id){
        const response = await api.request({
            url: `/lookup.php?i=${id}`,
            method: "GET",
           
        })
        return response.data
    },
    search : async function (name){
        const response = await api.request({
            url: `/search.php?s=${name}`,
            method: "GET",
           
        })
        return response.data
    },
    getcategory: async function () {

    // make fetch request and store response
    const response = await api.request({
     url: "/categories.php",
     method: "GET"
    })
    return response.data.categories
  } 
  }