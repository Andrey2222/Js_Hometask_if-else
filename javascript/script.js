var RUB = 0.5, DOL = 27, EUR = 30;
var GRN = +prompt("сколько денег ві хотиет поменять");
var RUB1 = GRN / RUB;
var DOL1 = GRN / DOL;
var EUR1 = GRN / EUR;
if (isNaN(GRN)) {
	alert ("Оу Оу а ну не балуйся и вводи число");
}else {
	alert("В рублях вы получите " + RUB1 + "\n" + "В долларах вы получите " + DOL1 + "\n" + "В евро вы получите " + EUR1); 
	var change = prompt ("В какую валюту вы хотите перевести свои деньги");
	if ((change == "$") | (change == "dollar") | (change == "доллар"))  {
		alert(DOL1 + "Доларов");
		var realy = confirm("вы действительно хотите поменять " + GRN +"гривен на" + DOL1 + "долларов");
		if (realy == true) {
			alert("SPASIBO");
		}else {
			alert("PRIXODI v DRUGOI RAZ");
		}
	}else if ((change == "€") | (change == "euro") | (change == "евро")) {
		alert(EUR1 + "Евро");
		var realy = confirm("вы действительно хотите поменять " + GRN +"гривен на" + EUR1 + "евро");
		if (realy == true) {
			alert("SPASIBO");
		}else {
			alert("PRIXODI v DRUGOI RAZ");
		}
	}else if ((change == "₽") | (change == "rub") | (change == "рубль")) {
		alert(RUB1 + "рублей");
		var realy = confirm("вы действительно хотите поменять " + GRN +"гривен на" + RUB1 + "рублей");
		if (realy == true) {
			alert("SPASIBO");
		}else {
			alert("PRIXODI v DRUGOI RAZ");
		}
	}else {
		alert("єто не верно");
	}
}



// var login = ("tango");
// var pasword = ("robot");
// var enter = prompt ("введите логин");
// if (enter == login) {
// 	var pas = prompt("введите пароль");
// 	if (pas == pasword) {
// 		alert("Привет Админ");
// 	}else {
// 		alert("Пароль не правильный")
// 	}
// }else {
// 	alert("Такого админа не существует");
// }


