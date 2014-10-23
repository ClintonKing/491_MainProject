//document.addEventListener("deviceReady", onDeviceReady, false);

//contains code for camera

$( document ).ready(function() {
    console.log( "ready!" );
    loadFlyer();
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
       
};

function loadFlyer(){
    var flyerListRef = new Firebase('https://ezflyer.firebaseio.com//flyers')
    
    var flyersToDisplay = 8;
    var flyerListView = flyerListRef.limit(flyersToDisplay);
    
    flyerListRef.once('value', function(dataSnapshot){
        var listItems = "";
        // store dataSnapshot for use in examples below
        flyerListView = dataSnapshot.val();
        console.log(flyerListView);
        
        $.each(flyerListView, function(key, val){
            var flyer = [];
            
            console.log('Key: ' + key + ' Val: ' + val)
            flyer.push(key);
            $.each(val, function(key, val){
                flyer.push(val);
            });
            
            listItems += '<div class="mason"><a href="#" data-reveal-id="' + flyer[5] + '"><img src="' + flyer[3] + '"></a></div>';
            listItems += '<div id="' + flyer[5] + '" class="reveal-modal" data-reveal>';
            listItems += '<h2>' + flyer[5] + '</h2>';
            listItems += '<p>' + flyer[2] + '</p>';
            listItems += '<p><b>Date: </b>' + flyer[1] + '</p>';
            listItems += '<p><b>Time: </b>' + flyer[6] + '</p>';
            listItems += '<p><b>Location: </b>' + flyer[4] + '</p>';
            listItems += '<a href="index.html">Close</a>';
            listItems += '</div>'
            //re-implement class="close-reveal-modal" later to last link.
        });
        
        $("#masonBox").html(listItems);
       
        
    });
    
    
    
}












