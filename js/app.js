document.addEventListener("deviceReady", onDeviceReady, false);

//contains code for camera

$( document ).ready(function() {
    console.log( "ready!" );
    
});



function updateFlyer(){
      var flyerListRef = new Firebase('https://ezflyer.firebaseio.com//flyers')
    
    var flyName = $('#flyNameInput').val();
    var flyDesc = $('#flyDescInput').val();
    var flyDate = $('#flyDateInput').val();
    var flyTime = $('#flyTimeInput').val();
    var flyPlace = $('#flyPlaceInput').val();
    var flyImage = $('#flyImageInput').val();
    
    //var newFlyerRef = flyerListRef.child(flyName);
    flyerListRef.push({ name:flyName, desc:flyDesc, date:flyDate, time:flyTime, location:flyPlace, image:flyImage });
    console.log(flyName);
    
    document.getElementById("newFlyerForm").reset();
    
}

















function capturePhoto(){
    navigator.camera.getPicture(uploadPhoto,null,{sourceType:1,quality:60});
}

function uploadPhoto(data){


    cameraPic.src = data;
    navigator.notification.alert(
        'Your photo has been uploaded', //message
        okay,  //callback
        'Photo Uploaded', //title
        'Ok'  //button name
    );
}

function okay(){

}


//maps stuff

function onDeviceReady(){
    console.log("onDeviceReady()");
    navigator.geolocation.getCurrentPosition(generateMap, onError);
    console.log(position);
}
