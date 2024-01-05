let State = true;
let stores = [
  { id: 1, name: "iphone5", count: 100 },
  { id: 2, name: "iphone6", count: 100 },
  { id: 3, name: "iphone7", count: 100 },
  { id: 4, name: "iphone8", count: 100 },
];
let carts = [];
while (State) {
  let input = prompt("Nhập vào 5 chữ cái C/R/U/D/E").toUpperCase();
  //C(Create) – Cho người dùng nhập vào tên sản phẩm muốn mua. Nếu có thêm chúng vào carts khi đó count trong stores của sản phẩn đó giảm đi 1
  if (input == "C") {
    let inputC = prompt("Nhập vào tên sản phẩm muốn mua");
    let temp = -1;
    let temp1 = -1;
    for (let i = 0; i < stores.length; i++) {
      if (stores[i].name == inputC) {
        temp = i;
      }
    }
    if (temp == -1) {
      console.log("Sản phẩm bạn muốn mua không có trong cửa hàng");
    }
    if (temp != -1) {
      for (let j = 0; j < carts.length; j++) {
        if (carts[j].name == inputC) {
          temp1 = j;
        }
      }
    }
    if (temp1 == -1) {
      carts.push(stores[temp]);
      stores[temp].count -= 1;
    } else {
      carts[temp1].count += 1;
    }
    console.log("Sản phẩm trong cửa hàng là", stores);
    console.log("Sản phẩm trong giở hàng là", carts);
  }

  //R(Read) – In ra toàn bộ các sản phẩm trong stores và carts
  else if (input == "R") {
    console.log("Sản phẩm trong store", stores);
    console.log("Sản phẩm trong carts", carts);
  }

  //U(Update)- Hỏi người dùng sản phẩm muốn update trong carts. Nếu tồn tại cho người dùng nhập vào số lượng muốn thay đổi và khi đó count trong stores cũng cập nhật theo. Update xong in lại stores và carts
  //   else if (input == "U") {
  //     let cartsUpdate = Number(prompt("Nhập vào vị trí muốn update trong carts"));
  //     let temp = -1;
  //     for (let i = 0; i < carts.length; i++) {
  //       if (i == cartsUpdate - 1) {
  //         temp = i;
  //       }
  //     }
  //     if (temp == -1) {
  //       console.log("Vị trí sản phẩm không có trong carts");
  //     } else {
  //       let cartsNumber = Number(
  //         prompt(`Nhập vào số lượng muốn thay đổi tại vị trí ${temp}`)
  //       );
  //       carts[temp].count = cartsNumber;
  //     }
  //     console.log("Sản phẩm trong carts sau khi update", carts);
  //   }
  else if (input == "U") {
    let inputU = prompt("Nhập vào tên sản phẩm muốn update");
    let temp = -1;
    for (let i = 0; i < carts.length; i++) {
      if (carts[i].name == inputU) {
        temp = i;
      }
    }
    if (temp == -1) {
      console.log("Sản phẩm bạn muốn update không có trong cửa hàng");
    } else {
      let countNumber = Number(prompt("Nhập vào số lượng sản phẩm"));
      carts[temp].count = countNumber;
    }
    console.log("Sản phẩm trong giở hàng là", carts);
  }

  //   else if (input == "D") {
  //     let deleteCarts = Number(prompt("Vị trí món hàng muốn xóa"));
  //     carts.splice(deleteCarts - 1, 1);
  //     console.log(`Giỏ hàng sau khi xóa là  : ${carts}`);
  //   }
  else if (input == "D") {
    let inputD = prompt("Nhập vào tên sản phẩm muốn xóa");
    let temp = -1;
    for (let i = 0; i < carts.length; i++) {
      if (carts[i].name == inputD) {
        temp = i;
      }
    }
    if (temp == -1) {
      console.log("Sản phẩm bạn muốn xóa không có trong cửa hàng");
    } else {
      carts.splice(temp, 1);
      console.log("Sản phẩm trong giở hàng sau khi xóa là", carts);
    }
  } else if (input == "E") {
    State = false;
  }
}
