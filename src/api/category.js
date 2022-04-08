import request from "@/utils/request";

export  const findAllCategory = () =>{
    return request('/home/category/head', 'get')
}