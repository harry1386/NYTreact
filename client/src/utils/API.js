import axios from "axios";

export default {
    //saving articles
    saveArticle: function(articleData) {
        return axios.post("/api/articlesRoutes", articleData);
    }
}