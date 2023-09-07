function initialize() {
	var mapCanvas = document.getElementById('map-canvas');
	var myLatlng = new google.maps.LatLng(37.483882, 127.011909);		
	var mapOptions = {			
		center: myLatlng, 
		zoom: 17, 
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(mapCanvas, mapOptions);

	var contentString = '<div style="width:100px;height:50px;">SSM</div>';		

	var infowindow = new google.maps.InfoWindow({
		content: contentString,
		size: new google.maps.Size(200,100)
	});

	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map, 
		draggable:true
	});
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map, marker);

		if (marker.getAnimation() != null) {
			marker.setAnimation(null);
		} else {
			marker.setAnimation(google.maps.Animation.BOUNCE);
		}
	});

	marker.setMap(map);
	
	function moveToLocation(lat, lng){
	var center = new google.maps.LatLng(lat, lng);
	map.panTo(center);
	}


	$(".map1").click(function(){
		moveToLocation(37.483882, 127.011909);
		marker = new google.maps.Marker({
        position: new google.maps.LatLng(37.483882, 127.011909),
        map: map
		});
		return false;
	});

	$(".map2").click(function(){
		moveToLocation(37.491630, 127.013106);
		marker = new google.maps.Marker({
        position: new google.maps.LatLng(37.491630, 127.013106),
        map: map
		});
		return false;
	});
	
	$(".map3").click(function(){
		moveToLocation(37.477991, 126.983595);
		marker = new google.maps.Marker({
        position: new google.maps.LatLng(37.477991, 126.983595),
        map: map
		});
		return false;
	});
	
	$(".map4").click(function(){
		moveToLocation(37.582533, 126.999180);
		marker = new google.maps.Marker({
        position: new google.maps.LatLng(37.582533, 126.999180),
        map: map
		});
		return false;
	});
	
	$(".map5").click(function(){
		moveToLocation(37.551907, 126.921080);
		marker = new google.maps.Marker({
        position: new google.maps.LatLng(37.551907, 126.921080),
        map: map
		});
		return false;
	});
	
	$(".map6").click(function(){
		moveToLocation(37.510482, 127.083875);
		marker = new google.maps.Marker({
        position: new google.maps.LatLng(37.510482, 127.083875),
        map: map
		});
		return false;
	});
}


google.maps.event.addDomListener(window, 'load', initialize);