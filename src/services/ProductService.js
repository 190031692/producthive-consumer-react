import axios from 'axios';

const PRODUCTS_RESTAPI_URL = 'http://localhost:8088/producthive/api/products'

//Service layer interacting with Producthive RestAPI of the Springboot
//Using axios http library

class ProductService {

    static getProducts() {
        return axios.get(PRODUCTS_RESTAPI_URL);
    }



}

export default ProductService