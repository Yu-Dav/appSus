export function ShowTime({ timeStamp }) {
    //make a condition for over a day and over a year...
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var d = new Date(timeStamp);
    var day = days[d.getDay()];
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
    // return hr + ":" + min + ampm + " ";
    var date = d.getDate();
    var month = months[d.getMonth()];
    var year = d.getFullYear();
    return day + " " + hr + ":" + min + ampm + " " + date + " " + month + " " + year;

}

