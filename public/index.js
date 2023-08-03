// Put all onload AJAX calls here, and event listeners

/*
USE THIS FILE IF PREPOPULATING INFO FROM A DATABASE, OR IF YOU NEED BETTER RESPONSE TO BUTTONS AND STUFF

jQuery(document).ready(function() {
    // On page-load AJAX Example
    
    //need ajax call on page load to get files and populate table
    jQuery.ajax({
        type: 'get',            //Request type
        dataType: 'json',       //Data type - we will use JSON for almost everything 
        url: '/fillTable',   //The server endpoint we are connecting to
        data: {
            data1: "InitialFill"
        },
        success: function (data) {
            //  Do something with returned object
            //    Note that what we get is an object, not a string, 
            //    so we do not need to parse it on the server.
            //    JavaScript really does handle JSONs seamlessly
            
            let table = document.getElementById("fileTable");
            let dropdown = document.getElementById("files");
            let dropdown2 = document.getElementById("files2");
            if(data.gpxNum > 0){
                table.deleteRow(1);
                dropdown.remove(0);
                dropdown2.remove(0);
            }
            let option = document.createElement("option");
            option.value = option.text = "--Nothing selected--";
            dropdown.add(option);
            let option2 = document.createElement("option");
            option2.value = option2.text = "--Nothing selected--";
            dropdown2.add(option2);
            for (var i = 0; i < data.gpxNum; i++) {
                let row = table.insertRow(i+1);
                let name = row.insertCell(0);
                let version = row.insertCell(1);
                let creator = row.insertCell(2);
                let numWpt = row.insertCell(3);
                let numRoute = row.insertCell(4);
                let numTrack = row.insertCell(5);
                name.innerHTML = '<a href=' + data.gpxName[i] + ' download >' + data.gpxName[i] + '</a>';
                version.innerHTML = data.gpxVersion[i];
                creator.innerHTML = data.gpxCreator[i];
                numWpt.innerHTML = data.gpxNumWpt[i];
                numRoute.innerHTML = data.gpxNumRte[i];
                numTrack.innerHTML = data.gpxNumTrk[i];
                let option = document.createElement("option");
                option.value = option.text = data.gpxName[i];
                dropdown.add(option);
                let option2 = document.createElement("option");
                option2.value = option2.text = data.gpxName[i];
                dropdown2.add(option2);
            }
            //We write the object to the console to show that the request was successful
            console.log(data); 
        },
        fail: function(error) {
            // Non-200 return, do something with error
            $('#blah').html("On page load, received error from server");
            console.log(error); 
        }
    });

    // Event listener form example , we can use this instead explicitly listening for events
    // No redirects if possible
    $('#someform').submit(function(e){
        $('#blah').html("Form has data: "+$('#entryBox').val());
        e.preventDefault();
        //Pass data to the Ajax call, so it gets passed to the server
        $.ajax({
            //Create an object for connecting to another waypoint
        });
    });
});
*/