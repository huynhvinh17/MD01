imgList = [
  "./background/301911577_496031362527378_7056792598744031404_n.jpg",
  "./background/305202548_501361755327672_7675789562873871510_n.jpg",
  "./background/306761264_509338857863295_5409347790217741166_n.jpg",
  "./background/309615984_524949346302246_324912928509720199_n.jpg",
  "./background/301579901_494681925995655_6474991491344466596_n.jpg",
  "./background/301575351_493624059434775_5168391747798735745_n.jpg",
  "./background/299421522_485522626911585_3415203535795552915_n.jpg",
  "./background/298197320_481711433959371_8140169431445500240_n.jpg",
];
let imgIndex = 0;
function imgChange() {
  let x = document.getElementById("myImg");
  imgIndex = (imgIndex + 1) % imgList.length;
  x.src = imgList[imgIndex];
}

let viewImg = document.getElementById("viewImgList");
let currentPosition = 0;

// Hàm để hiển thị danh sách hình ảnh
function displayImages() {
  imgList.forEach((imageUrl) => {
    const image = document.createElement("img");
    image.src = imageUrl;
    viewImgList.appendChild(image);
  });
}

function moveRight() {
  currentPosition -= 100;
}
// Gọi hàm để hiển thị danh sách hình ảnh
displayImages();
