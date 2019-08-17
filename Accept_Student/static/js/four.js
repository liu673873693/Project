/**
 * Created by ASUS on 2019/8/7.
 */
var x1=document.getElementsByClassName('write1')[0];
var x2=document.getElementsByClassName('write2')[0];
var x3=document.getElementsByClassName('write3')[0];
var y1=document.getElementsByClassName('img1')[0];
var y2=document.getElementsByClassName('img2')[0];
var y3=document.getElementsByClassName('img3')[0];

y1.addEventListener('click', function () {
    x1.style.opacity="1";
    x2.style.opacity="0";
    x3.style.opacity="0";
    y1.className="active1";
    y2.className="img2";
    y3.className="img3";
});
y2.addEventListener('click', function () {
    x2.style.opacity="1";
    x1.style.opacity="0";
    x3.style.opacity="0";
    y2.className="active2";
    y1.className="img1";
    y3.className="img3";
});
y3.addEventListener('click', function () {
    x3.style.opacity="1";
    x1.style.opacity="0";
    x2.style.opacity="0";
    y3.className="active3";
    y1.className="img1";
    y2.className="img2";
});
