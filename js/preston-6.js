function getUpdate(){
    var myday = new Date();
    var dayOfWeek = myday.getDay();
    var month = myday.getMonth();
    var dayOfMonth = myday.getDate();
    var year = myday.getFullYear();
    
var Months = ['January', 'Febrary', 'March', 'April', 'May', 'Jun', 'July',
'August', 'September', 'October', 'November', 'December'];
var weekdays = ['Sunday', 'Moday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


    text = weekdays[dayOfWeek] + ", " + dayOfMonth + " " + Months[month] + " " + year;
    
    
    document.getElementById('outputDiv').innerHTML = text;
    }