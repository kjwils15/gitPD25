
/** Geolocation functions **/
function geoFunction(){
    navigator.geolocation.getCurrentPosition(success);
}
function success(pos) {
    var crd = pos.coords;
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
}


/** Registration validation functions **/
function passwordCheck(){
    //Get user input in password field
    var x = document.getElementById("password");

    //"If entered password does not meet a requirement"
    if (!x.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/) && x.value!="") {
        window.alert("Your password must contain a digit, a lowercase letter, and an uppercase letter.");
        x.value = "";
    }
}


/** Date of Birth validation functions **/
function dayCheck(){
    var d = document.getElementById("day");
    if (d.value.length==1 && d.value != "0"){
        d.value = "0"+d.value;
    }
    else if (d.value.length==2 && d.value !="0"){
        if (parseInt(d.value)>31){
            d.value = "31";
        }
    }
    if (d.value == "00"){
        d.value = "";
    }
}
function monthCheck(){
    var m = document.getElementById("month");
    if (m.value.length==1 && m.value != "0"){
        m.value = "0"+m.value;
    }
}
function yearCheck(){
    var d = new Date();
    var n = d.getFullYear();
    var y = document.getElementById("year");
    if (y.value.length == 4){
        if (parseInt(y.value)>n){
            y.value=n;
        }
        else if (parseInt(y.value)<1900){
            y.value="1900"
        }
    }
}
//Check for valid day-month combinations
function completeCheck(){
    var d = document.getElementById("day");
    var m = document.getElementById("month");
    var y = document.getElementById("year");
    if (d.value !="" && m.value !="" && y.value.length==4){
        dateCheck();
    }
}
function dateCheck(){
    var d = document.getElementById("day");
    var m = document.getElementById("month");
    var y = document.getElementById("year");
    if (m.value == "04" || m.value == "06" || m.value == "09" || m.value == "11"){
        if (parseInt(d.value)>30){
            d.value = "30";
        }
    }
    //Leap year validation
    else if (m.value == "02" && parseInt(y.value)%4>0){
        if (parseInt(d.value)>28){
            d.value = "28";
        }
    }
    else if (m.value == "02" && parseInt(y.value)%4==0){
        if (parseInt(d.value)>29){
            d.value = "29";
        }
    }
}
function zeroMonth(){
    var m = document.getElementById("month");
    if (m.value == "00"){
        m.value = "";
    }
    if (m.value.length = 2){
        if (parseInt(m.value)>12){
            m.value = "12";
        }
    }
}
function zeroDay(){
    var d = document.getElementById("day");
    if (d.value == "00"){
        d.value = "";
    }
    if (d.value.length = 2){
        if (parseInt(d.value)>31){
            d.value = "31";
        }
    }
}