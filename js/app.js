document.addEventListener("deviceReady", onDeviceReady, false);

//contains code for camera

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
