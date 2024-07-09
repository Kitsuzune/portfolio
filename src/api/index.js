import axios from "axios";

const LOCAL = "http://localhost:3009/";
const PUBLIC = process.env.REACT_APP_URL_BASE;

const API = axios.create({ baseURL: LOCAL });


API.interceptors.request.use((req) => {
    if (localStorage.getItem("_auth")) {
        req.headers.Authorization = `Bearer ${localStorage.getItem("_auth")}`;
    } else {
        delete req.headers.Authorization;
    }
    return req;
});

// Auth
export const login = (formData) => API.post("/login", formData);
export const register = (formData) => API.post("/register", formData);
export const changePassword = (formData) => API.post("/change-password", formData);

// Profile
export const getProfileDetail = () => API.get("/profile/detail");
export const updateProfileDetail = (formData) => API.put("/profile/detail", formData);
export const getProfilePicture = () => API.get("/profile/picture");
export const updateProfilePicture = (formData) => API.put("/profile/picture", formData, {
    headers: {
        'Content-Type': 'multipart/form-data',
    },
});



// export const register = (formData) => API.post("/api/register", formData);
// export const logOut = () => API.delete("/api/user/logout");

// export const getBooks = (page) => API.get("/api/books", { params: { page } });
// export const createBook = (formData) => API.post("/api/books/add", formData);
// export const updateBook = (book_id, formData) => API.put(`/api/books/${book_id}/edit`, formData);
// export const getSingleBook = (book_id) => API.get(`/api/books/${book_id}`);
// export const deleteBook = (book_id) => API.delete(`/api/books/${book_id}`);