function cargarCabecera(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			cabecera(this);
		}
	};
	xhttp.open("GET", "/paginas/menus.xml", true);
	xhttp.send();
}

function cargarFooter(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			footer(this);
		}
	};
	xhttp.open("GET", "/paginas/menus.xml", true);
	xhttp.send();
}

function cabecera(xml) {
	var xmlDoc=xml.responseXML;
	var txt="";
	var x=xmlDoc.getElementsByTagName("CABECERA");
	var y=x[0].getElementsByTagName("ENTRADA");
	h="";
	for (var i=0;i<y.length;i++){
		txt=txt+'<li class="nav"><a class="nav" href="' + y[i].getElementsByTagName("DIRECCION")[0].childNodes[0].nodeValue + '">' + y[i].getElementsByTagName("NOMBRE")[0].childNodes[0].nodeValue + '</a> </li>';
	}
	document.getElementById("navVar").innerHTML=txt;
}; 

function footer(xml) {
	var xmlDoc=xml.responseXML;
	var txt="";
	var x=xmlDoc.getElementsByTagName("FOOTER");
	var y=x[0].getElementsByTagName("ENTRADA");
	h="";
	for (var i=0;i<y.length;i++){
		txt=txt+'<li> <a href="' + y[i].getElementsByTagName("DIRECCION")[0].childNodes[0].nodeValue + '">' + y[i].getElementsByTagName("NOMBRE")[0].childNodes[0].nodeValue + '</a> </li>';
	}
	document.getElementById("links-footer").innerHTML=txt;
}; 