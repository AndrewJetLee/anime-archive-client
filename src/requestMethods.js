import axios from "axios";

export const BASE_URL = "https://aa-anime-archive.herokuapp.com/api/"
export const ANIME_API = "http://kitsu.io/api/edge/"
export const JIKAN_API = "https://api.jikan.moe/v4/"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
    withCredentials: true, 
    credentials: "include"
})

export const apiRequest = axios.create({
    baseURL: ANIME_API,
})

export const jikanRequest = axios.create({
    baseURL: JIKAN_API,
})