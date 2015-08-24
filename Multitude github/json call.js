$(function() {
	$.getJSON('http://citodev.metmuseum.org/MetTabletPrinterService/TicketPrinters');
    $('#jsonhere').append("<tr><td>"+jsonString.printerstatus.description+"</td><td>"+jsonstring.printerstatus.active+"/td");
});

if (active = 1){
	print("Active");}
	else{
		print("???");}
