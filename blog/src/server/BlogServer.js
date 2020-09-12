import http from "../axios/http-common";

class BlogServer{

    getAllBlogs(){
        return http.get();
    }
}