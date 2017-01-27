var image = new Array("img/img1.jpg","img/img2.jpg","img/img3.jpg","img/img4.jpg","img/img5.jpg","img/img6.jpg","img/img7.jpg");
var tab = new Array

for (i=0; i<image.length; i++){
	tab.push("<img src='"+image[i]+"'>")
	tab.push("<img src='"+image[i]+"'>")	
}

document.getElementById("conteneur").innerHTML = tab;

