import axios from 'axios';

const http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});


export const api = {

    getAllPosts: async () => {
        let response = await http.get('/albums/')
        return response.data;
    },
    getAlbum: async (index: any) => {
        let response = await http.get(`/albums/${index}/photos/`)
        return response.data;
    },
    getPhoto: async (index: any) => {
        let response = await http.get(`/photos/${index}/`)
        return response.data;
    }
}