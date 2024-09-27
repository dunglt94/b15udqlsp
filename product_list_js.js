let productList = JSON.parse(localStorage.getItem('productList')) || [];
console.log(productList);
function addProduct() {
    let product = document.getElementById('add_product');
    if (product.value) {
        productList.push(product.value);
        product.value = '';
        updateLocalStorage();
        addToList();
    } else {
        alert('Please enter a product name');
    }
}
function addToList(product_name) {
    let list = '';
    for (let i = 0; i < productList.length; i++) {
        product_name = productList[i];
        list += `<tr>
                    <td class="products">${product_name}</td>
                    <td><button onclick="editProductName(${i})">Edit</button></td>
                    <td><button onclick="deleteProduct(${i})">Delete</button></td>
                 </tr>`;
    }
    document.getElementById('product_list').innerHTML = list;
    document.getElementById('number_of_product').innerHTML = `${productList.length} products`;

}
function updateLocalStorage() {
    localStorage.setItem('productList', JSON.stringify(productList));
}
function editProductName(index) {
    let newName = prompt('Sửa tên sản phẩm thành:');
    if (newName) {
        productList[index] = newName;
        updateLocalStorage();
        addToList();
    }
}
function deleteProduct(index) {
    productList.splice(index, 1);
    updateLocalStorage();
    addToList();
}
