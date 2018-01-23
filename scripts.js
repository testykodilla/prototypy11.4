function telefon(marka, cena, kolor, aparat) {
	this.marka = marka;
	this.cena = cena;
	this.kolor = kolor;
	this.aparat = aparat;
};

telefon.prototype.mowDoMnie = function() {
	if (this.aparat == true) {
		console.log("Ten wyposażony w aparat fotograficzny telefon to " + this.marka + ", który kosztuje " + this.cena + ", a jego wariant kolorystyczny to " + this.kolor + ".")
	} else {
		console.log("Ten telefon to " + this.marka + " ,który kosztuje " + this.cena + ", a jego wariant kolorystyczny to " + this.kolor + ". Nie ma wbudowanej funkcji aparatu fotograficznego.")
}};

var iPhone5 = new telefon("Apple iPhone5", "3000zł", "szary", true);
var iPhone7 = new telefon("Apple iPhone7", "1000$", "złoty", false);
var mi = new telefon("Xiaomi cd-20", "500zł", "czarny", true);
var samsungGalaxy = new telefon("Samsung Galaxy", "3000zł", "zielony", false);

iPhone5.mowDoMnie();
iPhone7.mowDoMnie();
mi.mowDoMnie();
samsungGalaxy.mowDoMnie();