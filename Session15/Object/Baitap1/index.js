let State = true;
let stores = [
  { id: 1, name: "iphone5", count: 100, price: 2000 },
  { id: 2, name: "iphone6", count: 100, price: 3000 },
  { id: 3, name: "iphone7", count: 100, price: 4000 },
  { id: 4, name: "iphone8", count: 100, price: 5000 },
];
let carts = [];
while (State) {
  let input = prompt("Nhập vào 5 chữ cái C/R/U/D/E").toUpperCase();
  //C(Create) – Cho người dùng nhập vào tên sản phẩm muốn mua. Nếu có thêm chúng vào carts khi đó count trong stores của sản phẩn đó giảm đi 1
  if (input == "C") {
    createCarts();
  } else if (input == "R") {
    readCarts();
  } else if (input == "U") {
    updateCarts();
  } else if (input == "D") {
    deleteCarts();
  } else if (input == "E") {
    State = false;
  }
}

//C(Create) – Cho người dùng nhập vào tên sản phẩm muốn mua. Nếu có thêm chúng vào carts khi đó count trong stores của sản phẩn đó giảm đi 1
function createCarts() {
  let inputC = prompt("Nhập vào tên sản phẩm muốn mua");
  let product = stores.find((s) => s.name === inputC);
  if (product) {
    if (isProductInCart(inputC)) {
      increaseCount(inputC);
      decreaseCount(inputC);
    } else {
      addToCartArr(product);
      decreaseCount(inputC);
    }
    console.log("product", carts);
    console.log("product", stores);
  } else {
    console.log("product not found");
  }
}

//Xóa sản phẩm có trong giỏ hàng
function deleteCarts() {
  let deleteProduct = prompt("Nhập vào tên sản phẩm muốn xóa");
  let product1 = carts.find((s) => s.name === deleteProduct);
  let itemIndex = carts.findIndex((s) => s.name == deleteProduct);
  if (product1) {
    carts.splice(itemIndex, 1);
    console.log("product", carts);
  } else {
    console.log("product not found");
  }
}

//Update sản phẩm có trong giỏ hàng
function updateCarts() {
  let updateProduct = prompt("Nhập vào tên sản phẩm muốn update");
  let product1 = carts.find((s) => s.name == updateProduct);
  if (product1) {
    let updateProductNumber = Number(prompt("Nhập vào số lượng muốn update"));
    productNumber.count = updateProductNumber;
    console.log("product", carts);
  }
}

//Kiểm tra sản phẩm có trong giỏ hàng hay không
function isProductInCart(inputC) {
  return carts.some((item) => item.name == inputC);
}

//Kiểm tra sản phẩm có trong store
function isProductInStores(inputC) {
  return stores.some((item) => item.name == inputC);
}

//Tăng số lượng sản phẩm đã có trong giỏ hàng
function increaseCount(inputC) {
  let item = carts.find((item) => item.name == inputC);
  item.count++;
}

//Thêm sản phẩm vào giỏ hàng nếu sản phẩm chưa có trong giỏ hàng
function addToCartArr(product) {
  carts.push({ ...product, count: 1 });
}

//Giảm số lượng sản phẩm có trong store
function decreaseCount(inputC) {
  let item = stores.find((item) => item.name == inputC);
  item.count--;
}

//Tính tổng giá trị hóa đơn dựa trên giỏ hàng
function caculateBill() {
  let totalBill = carts.reduce((tolal, item) => {
    tolal + item.price * item.count, 0;
  });
  document.getElementById("demo").innerHTML = `Total Bill: ${totalBill}`;
}
