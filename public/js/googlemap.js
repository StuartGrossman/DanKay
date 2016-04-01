var map;
console.log('trying to make map')
initMap();
		// var myOptions = {
		// 			zoom : 16,
		// 			center : latlng,
		// 			mapTypeId : google.maps.MapTypeId.ROADMAP,
		// 			styles : [{
		// 				"featureType" : "road",
		// 				"elementType" : "labels",
		// 				"stylers" : [{
		// 					"visibility" : "on"
		// 				}]
		// 			}, {
		// 				"featureType" : "poi",
		// 				"elementType" : "labels",
		// 				"stylers" : [{
		// 					"visibility" : "on"
		// 				}]
		// 			}, {
		// 				"featureType" : "transit",
		// 				"elementType" : "labels.text",
		// 				"stylers" : [{
		// 					"visibility" : "off"
		// 				}]
		// 			}],
		// 			zoomControl : true,
		// 			mapTypeControl : false,
		// 			streetViewControl : false,
		// 			scrollwheel : false
		// 		};
			


	//map build 

	function initMap() {
		 var map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: 38.834068, lng: -104.818902},  
		    zoom: 16,
		    scrollwheel: false
		  });
		 var latlng = new google.maps.LatLng(38.834068, -104.818902);
		 var marker = new google.maps.Marker({
					position : {lat: 38.834068, lng: -104.818902},
					map : map
				});
	}
	