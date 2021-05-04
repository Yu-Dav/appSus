export function ShowTime({ timeStamp }) {

    console.log(timeStamp)
    var d = new Date(timeStamp * 1000);
    // Hours part from the timestamp
    var hr = d.getHours();
    // Minutes part from the timestamp
    var min = "0" + d.getMinutes();
    // Seconds part from the timestamp

    var hr = d.getHours();
    var min = d.getMinutes();
    if (min < 10) {
        min = "0" + min;
    }
    var ampm = "am";
    if (hr > 12) {
        hr -= 12;
        ampm = "pm";
    }
    return hr + ":" + min + ampm + " ";

}




//todo- when over 24 hours add date

// var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var d = new Date();
// var day = days[d.getDay()];
// var hr = d.getHours();
// var min = d.getMinutes();
// if (min < 10) {
//     min = "0" + min;
// }
// var ampm = "am";
// if( hr > 12 ) {
//     hr -= 12;
//     ampm = "pm";
// }
// var date = d.getDate();
// var month = months[d.getMonth()];
// var year = d.getFullYear();
// var x = document.getElementById("time");
// x.innerHTML = day + " " + hr + ":" + min + ampm + " " + date + " " + month + " " + year;