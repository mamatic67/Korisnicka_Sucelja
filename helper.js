import axios from 'axios';
// https://my-json-server.typicode.com/kula124/json-placeholder

// const instance = axios.create ({
//     baseUrl:' https://my-json-server.typicode.com/kula124/json-placeholder'

// })

// // export const getPosts = () =>
// //     instance.get('/posts').then((response) => response.data);

// export const getPosts = async() => {
//     const response = await instance.get('/posts');
//     const data = response.data;
//     return data;
// }

// export const getPostBySlug = async (slug) => {
//     const response = await instance.get(`/posts/?slug=${slug}`)
//     const data = response.data[0];
//     return data;
// }

const instance = axios.create({
    baseURL: 'https://my-json-server.typicode.com/kula124/json-placeholder',
});

export const getPosts = () =>
    instance.get('/posts').then((response) => response.data);

export const getPostBySlug = (slug) =>
    instance.get(`/posts/?slug=${slug}`).then((response) => response.data[0]);
