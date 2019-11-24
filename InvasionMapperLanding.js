window.onload = function(){
	//XMLHttpRequest 
	var request = new XMLHttpRequest();
	var url = "http://cs.sfasu.edu/351/invaders.json";
	var invader;
	
	request.onload = function(){
		if(request.status==200){
			invader = JSON.parse(request.responseText);
			table_chart();
			coord();
		}
	}//request
	request.open("Get",url);
	request.send();
	
	//function for table
	function table_chart(){
		var table = document.getElementById("invader_table");
		
	for(var i = 0; i < invader.length; i++){
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		var td1 = document.createElement("td");
		var td2 = document.createElement("td");
		var td3 = document.createElement("td");
		
		td.innerHTML=invader[i].alleg;
		td1.innerHTML=invader[i].armored;
		td2.innerHTML=invader[i].weapon;
		td3.innerHTML=invader[i].location;
		
		tr.appendChild(td);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		table.appendChild(tr);
	}
		
	}//table
	
	//function for Google map
	function coord(){

		//center and create map
		var latLong1 = new google.maps.LatLng(31.621072,-94.646264);

		var mapOptions = {
			zoom: 15,
			center: latLong1,
			mapTypeId: google.maps.MapTypeId.SATELLITE
		};
		
		var mapDiv = document.getElementById("map_div");
		var myMap = new google.maps.Map(mapDiv, mapOptions);
		
		//iterate through the array to create markers
		for(var i = 0; i < invader.length; i++){
			var latLong = new google.maps.LatLng(invader[i].lat, invader[i].lng);
		
			var markerOptions = {
				position: latLong,
				map: myMap,
				title: invader[i].alleg
			}

		
			new google.maps.Marker(markerOptions);
		}
		
	}//coord
	
	
}//anonomous function