var imgArray = new Array("img/img1.jpg","img/img1.jpg",
						"img/img2.jpg","img/img2.jpg",
						"img/img3.jpg","img/img3.jpg",
						"img/img4.jpg","img/img4.jpg",
						"img/img5.jpg","img/img5.jpg",
						"img/img6.jpg","img/img6.jpg",
						"img/img7.jpg","img/img7.jpg");
var num_carte_choisie =0;
var back = "img/back.jpg";
var première;
var deuxième;
var hit = 0;

function click(index){
	if (num_carte_choisie == 0){
		première = index;
		document.images[index].src = imgArray[index];
		num_carte_choisie = 1;
	}else{
		num_carte_choisie = 2
		deuxième = index;
		document.images[index].src = imgArray[index];
	}
}

function controle(){
	if (imgArray[première]==imgArray[deuxième]) {
		hit++;
		num_carte_choisie = 0
	}else if (imgArray[première]!=imgArray[deuxième]) {
		document.images[première].src=back;
		document.images[deuxième].src=back;
		num_carte_choisie = 0
	}
	if (hit == imgArray.length/2) {
		document.getElementById("gagné").innerHTML = "Félicitation, vous avez gagné !";
	}
}

function fisherYates(){
	for (var i = 0; i<100; i++){
		var j = Math.floor(Math.random()*imgArray.length);
		var h = Math.floor(Math.random()*imgArray.length);
		imgArray[j] = imgArray[h];
		imgArray[h] = temp;
	}
}
