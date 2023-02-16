import { Products } from "./Products.js";
class ProductsManager {
    constructor() {
        this.products = []
    }

    increaseId = () => {
        const count = this.products.length;
        const idIcrease = (count > 0) ? this.products[count - 1].id + 1 : 1;
        return idIcrease;
    }

    addProduct(product) {
        if (!this.products.find((pro) => pro.code === product.code)) {
            product['id'] = this.increaseId();
            this.products.push(product);
        }
    }

    getProducts() {
        // this.products.forEach((pro) => {
        //     console.log(pro.getProductsJson());
        // });
        return this.products;
    }

    getProductById(id) {
        if (this.products.find((pro) => pro.id === id)) {
            return this.products.find((pro) => pro.id === id);
        } else {
            return 'Not found';
        }
    }
}

const product0 = new Products('Remera Termica Azul', 'Remera Termica Azul', 'https://d3ugyf2ht6aenh.cloudfront.net/stores/861/003/products/termica_alfest_std_francia1-8de388be3afb0ad00a16149965294081-1024-1024.jpg', '0', '3200');

const product1 = new Products ('Pantalon Termico Rojo','Pantalon Termico Rojo','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToQYpMuvLn7rJUFzFb_E-Np93CFfoAqeyJYQ&usqp=CAU', '1', '5000' );

const product2 = new Products ('Remera Termica Blanca','Remeta Termica Blanca', 'https://d3ugyf2ht6aenh.cloudfront.net/stores/409/305/products/termica-blanca-costado1-f6b92a762a5f9c095215838512433411-1024-1024.webp', '2', '6000');

const product3 = new Products ('Pantalon Blanco Termico', 'Pantalon Termico Blanco' ,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjnTq5DJETraBR-i3a_w4lDr-cFMV1ELzphw&usqp=CAU', '4', '7000' );

const productManager = new ProductsManager();

productManager.addProduct(product0);
productManager.addProduct(product1);
productManager.addProduct(product2);
productManager.addProduct(product3);

console.log(productManager.getProducts());
console.log(productManager.getProductById(1));
console.log(productManager.getProductById(3));