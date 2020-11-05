var map1;
var map2;
function initialize() {

    //Wedding Map
    var myLatlng1 = new google.maps.LatLng(13.075695, 80.235251);

    var mapOptions1 = {
        zoom: 17,
        center: myLatlng1
    }
    var map1 = new google.maps.Map(document.getElementById('map-canvas1'), mapOptions1);
    //Marker 1
    var heart = 'images/hearts4map.png';
    var marker1 = new google.maps.Marker({
        position: new google.maps.LatLng(13.074875, 80.235174),
        map: map1,
        title: 'Aringar Anna Arangam',
        icon: heart
    });

    //marker2
    var bus = 'images/bus.png';
    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(13.075523, 80.233068),
        map: map1,
        title: 'Bus Routes: 15, 15A, 15B, 15C, 15D, 27, 27B, 40, 41, 41C, 59, 101, 159',
        icon: bus
    });

    //marker3
    var bus = 'images/bus.png';
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(13.076149, 80.237831),
        map: map1,
        title: 'Bus Routes: 15, 15A, 15B, 15C, 15D, 27, 27B, 40, 41, 41C, 59, 101, 159',
        icon: bus
    });

    //info window0
    var arangam = '<b>Aringar Anna Arangam</b><br/>Dr.Gurusamy Road<br/>Chetpet, Chennai 31.'
    var infowindow0 = new google.maps.InfoWindow({
        content: arangam
    });
    google.maps.event.addListener(marker1, 'mouseover', function () {
        infowindow0.open(map1, marker1);
    });


    //info window1
    var busRoutes0 = '<b>Bus Routes:<br/>Pachiyappas College</b><br/>15, 15A, 15B, 15C, 15D, 27, 27B,<br/>40, 41, 41C, 59, 101, 159'
    var infowindow1 = new google.maps.InfoWindow({
        content: busRoutes0
    });
    google.maps.event.addListener(marker2, 'mouseover', function () {
        infowindow1.open(map1, marker2);
    });
    //info window2
    var busRoutes2 = '<b>Bus Routes:<br/>Tailors Road</b><br/>15, 15A, 15B, 15C, 15D, 27, 27B,<br/>40, 41, 41C, 59, 101, 159'
    var infowindow2 = new google.maps.InfoWindow({
        content: busRoutes2
    });
    google.maps.event.addListener(marker3, 'mouseover', function () {
        infowindow2.open(map1, marker3);
    });

    //*******************//
    //Reception Map
    var myLatlng2 = new google.maps.LatLng(10.971334, 76.968577);

    var mapOptions2 = {
        zoom: 16,
        center: myLatlng2
    }
    var map2 = new google.maps.Map(document.getElementById('map-canvas2'), mapOptions2);
    //Marker a
    var heart = 'images/hearts4map.png';
    var markerA = new google.maps.Marker({
        position: new google.maps.LatLng(10.971334, 76.968577),
        map: map2,
        title: 'Sangamam Mandapam',
        icon: heart
    });

    //info windowA
    var arangamA = '<b>Sangamam Mandapam</b><br/>Podanur Road<br/>Kurichi, Coimbatore 641024.'
    var infowindowA = new google.maps.InfoWindow({
        content: arangamA
    });
    google.maps.event.addListener(markerA, 'mouseover', function () {
        infowindowA.open(map2, markerA);
    });

    //markerb
    var bus = 'images/bus.png';
    var markerB = new google.maps.Marker({
        position: new google.maps.LatLng(10.971806, 76.966068),
        map: map2,
        title: 'Bus Stop: Podanur Pirivu',
        icon: bus
    });

    //info windowB
    var busrouteB = '<small>Bus Stop:</small><br/>Kurichi Pirivu/<br/>Podanur Pirivu'
    var infowindowB = new google.maps.InfoWindow({
        content: busrouteB
    });
    google.maps.event.addListener(markerB, 'mouseover', function () {
        infowindowB.open(map2, markerB);
    });




}
////function loadScript() {
//    var script = document.createElement('script');
//    script.type = 'text/javascript';
//    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
//      'callback=initialize';
//    document.body.appendChild(script);
//}

//window.onload = loadScript;

google.maps.event.addDomListener(window, 'load', initialize);