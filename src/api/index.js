import axios from "axios";

const LOCAL = "http://localhost:3009/";
const PUBLIC = process.env.REACT_APP_URL_BASE;

const API = axios.create({ baseURL: PUBLIC });


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

// Product
export const getProduct = (page, limit, search) => API.get("/product", { params: { page, limit, search } });
export const getProductByBestSeller = () => API.get("/product/sort/best-seller");
export const getProductDetail = (id) => API.get(`/product/${id}`);
export const addProduct = (formData) => API.post("/product/add", formData);
export const updateProduct = (id, formData) => API.patch(`/product/update/${id}`, formData, {
    headers: {
        'Content-Type': 'multipart/form-data',
    },
});
export const deleteProduct = (id) => API.delete(`/product/delete/${id}`);


// Cart
export const getCart = () => API.get("/cart");
export const addToCart = (formData) => API.post("/cart/add", formData);
export const plusCart = (id) => API.post(`/cart/plus/${id}`);
export const minusCart = (id) => API.post(`/cart/minus/${id}`);

// Transaction
export const checkout = (formData) => API.post("/transaction/create", formData);
export const repay = (formData) => API.post("/transaction/midNotification", formData);
export const updateTransaction = (formData) => API.post("/transaction/updateStatus", formData);
export const getTransactionAdmin = (page, limit) => API.get("/transaction/AdminList", { params: { page, limit } });
export const getTransaction = (page, limit) => API.get("/transaction/listAllByUser", { params: { page, limit } });

// Wishlist
export const getWishlist = (page, limit) => API.get("/favourite", { params: { page, limit } });
export const addToWishlist = (formData) => API.post("/favourite/add", formData);
export const deleteWishlist = (id) => API.delete(`/favourite/delete/${id}`);

// Review
export const getReview = (id) => API.get(`/review/${id}`);
export const addReview = (formData) => API.post("/review/add", formData);

// Banner
export const getBanner = () => API.get("/banner");
export const getThisMonthBanner = () => API.get("/banner/v1/get-thisMonth");
export const getStoreBanner = () => API.get("/banner/v1/get-store");
export const getHomeCarousel = () => API.get("/banner/v1/get-homeCarousell");
export const getExploreProduct = () => API.get("/banner/v1/get-exploreProduct");
export const getNewArrival01 = () => API.get("/banner/v1/get-newArrival1");
export const getNewArrival02 = () => API.get("/banner/v1/get-newArrival2");
export const getNewArrival03 = () => API.get("/banner/v1/get-newArrival3");
export const getNewArrival04 = () => API.get("/banner/v1/get-newArrival4");
export const getBannerDetail = (id) => API.get(`/banner/${id}`);
export const editBanner = (id, formData) => API.post(`/banner/update/${id}`, formData, {
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