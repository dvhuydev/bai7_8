let arr = [];
function btnInsertArr() {

    arr = strToNumArr(rawArray.value);
    console.log(arr)

    document.getElementById("array").innerHTML = arr;
}


function strToNumArr(str) {
    let rawArr = str.split(" ");
    let changedArr = new Array(0);

    // Remove extra spaces
    for (let i = 0; i < rawArr.length; i++) {
        if (rawArr[i] === "") {
            rawArr.splice(i, 1);
            i--;
        } else rawArr[i] = Number(rawArr[i]);
    }

    // String Array to Number Array
    if (rawArr.length === 1) changedArr.push(Number(str));
    else {
        rawArr.forEach((element) => {
            changedArr.push(element);
        });
    }

    for (let i = 0; i < changedArr.length; i++)
        changedArr[i] = Number(changedArr[i]);
    return changedArr;
}


// Bài 1
function tinhTongSoDuong() {
    var sum = 0;
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    document.getElementById("result1").innerHTML = 'Tổng số dương: ' + sum;
}
document.getElementById("btnTinhTong").onclick = tinhTongSoDuong;


// Bài 2
function demSoDuong() {
    var count = 0;
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] >= 0) {
            count++;
        }
    }
    document.getElementById("result2").innerHTML = 'Số dương:  ' + count;
}
document.getElementById("btnDemSo").onclick = demSoDuong;


// Bài 3
function timMin() {
    // giả xử số đầu tiên = min 
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    document.querySelector('#result3').innerHTML = 'Số nhỏ nhất: ' + min;
}
document.querySelector("#btnTimMin").onclick = timMin;


// Bài 4
function timSoDuongNhoNhat() {
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            arr2.push(arr[i]);
        } else {
            min = 'Mảng không có phần tử dương!';
        }
    }
    var min = arr2[0];
    for (var j = 0; j < arr2.length; j++) {
        if (arr2[j] < min) {
            min = arr2[j];
        }
    }
    document.querySelector('#result4').innerHTML = 'Số dương nhỏ nhất: ' + min;
}
document.querySelector('#btnTimSoDuongNhoNhat').onclick = timSoDuongNhoNhat;


// Bài 5
function timSoChanCuoiCung() {
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
        arr2.push(arr[i])
    }
    var soChanCuoi = "";
    for (var i = arr2.length - 1; i >= 0; i--) {
        if (arr2[i] % 2 == 0) {
            soChanCuoi = arr2[i];
            break;
        } else {
            soChanCuoi = "Mảng không có số chẵn!"
        }
    }
    document.querySelector('#result5').innerHTML = soChanCuoi;
}
document.querySelector('#btnTimSoChan').onclick = timSoChanCuoiCung;

// Bài 6

var hoanDoi = document.querySelector('#btnDoiCho');
var bReset = document.querySelector('#btnReset');
hoanDoi.addEventListener('click',function (){
    doiCho();
    hoanDoi.style.display = "none";
    bReset.style.display = "block";
});
bReset.addEventListener('click', function(){
    reset();
    hoanDoi.style.display = "block";
    bReset.style.display = "none";
});

function doiCho() {
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
        arr2.push(arr[i])
    }
    for (var i = 0; i < arr2.length-1; i++) {
        var viTri1 = Number(document.querySelector('#index1').value);
        var viTri2 = Number(document.querySelector('#index2').value);
        var temp = arr2[viTri1]
        arr2[viTri1] = arr2[viTri2];
        arr2[viTri2] = temp;
    }
    document.querySelector('#result6').innerHTML = 'Mảng sau khi đổi: ' + arr2;
}

function reset(){
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
        arr2.push(arr[i])
    }
    document.querySelector('#result6').innerHTML =  'Mảng sau khi đổi: ' + arr2;
}

// Bài 7
function sapXepTangDan(){
    var arr2 = []
    for(var i = 0 ; i < arr.length; i++){
        arr2.push(arr[i])
    }
    for(var i = 0 ; i < arr2.length -1 ; i ++){
        for(var j = 0 ; j < arr2.length; j++){
            if(arr2[j] > arr2[j+1]){
                var temp = arr2[j];
                arr2[j] = arr2[j+1];
                arr2[j+1] = temp;
            }
        }
    }
   document.querySelector('#result7').innerHTML = 'Mảng sau khi sắp xếp: ' + arr2;
}
document.querySelector('#btnSapXep').onclick = sapXepTangDan;

// Bài 8
function checkSNT(number) {
    if (number <= 1){
       return 0
    }
    for(var j = 2 ; j <= Math.sqrt(number) ; j++){
        if(number % j == 0){
            return 0
        }
    }
    return 1;
}
function timSoNguyenToDauTien() {
    var soNTTien = 0;
    for(var i = 0 ; i <= arr.length;i++){
        
        if(checkSNT(arr[i])){
            soNTTien = arr[i];
            break;
        }else{
            soNTTien = -1;
        }
    }
  document.querySelector('#result8').innerHTML = soNTTien;
}
document.querySelector('#btnSoNguyenToDauTien').onclick = timSoNguyenToDauTien;

// Bài 9
function themSo1() {
    var n = Number(document.querySelector("#num1").value);
    arr.push(n);
    document.getElementById("result9").innerHTML = arr;
}
document.getElementById("btnThem1").onclick = themSo1;

function demSoNguyen() {
    
    var countSoNguyen = 0;
    for(var i = 0; i < arr.length ; i++){
        if(Number.isInteger(arr[i])){
            countSoNguyen++;
        }
    }
    document.querySelector('#result10').innerHTML = 'Số nguyên : ' + countSoNguyen;
}
document.querySelector('#btnDemSoNguyen').onclick = demSoNguyen;

// Bài 10
function soSanhAmVaDuong() {
    var countDuong = 0;
    var countAm = 0
    var content = '';
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] >= 0) {
            countDuong++;
        }else if( arr[i] < 0){
            countAm++;
        }
    }
    if(countDuong > countAm){
        content = 'Số dương ' + '>' + ' Số âm';
    }else if(countDuong < countAm){
        content = 'Số âm ' + '>' + ' Số dương';
    }else{
        content = 'Số dương ' + '=' + ' Số âm';
    }
    document.querySelector('#result11').innerHTML = content;
}
document.querySelector('#btnSoSanh').onclick = soSanhAmVaDuong;