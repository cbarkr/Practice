/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let timeArr = s.split(":");
    let hour = parseInt(timeArr[0]);
    let hourString = hour.toString();
    
    if (hour == 12){
        hour = 0;
        hourString = "00";
    }
    
    if (s.indexOf("PM") != -1){
        hour += 12;
        hourString = hour.toString();
    }
    
    timeArr[0] = hourString.length === 1 ? "0" + hourString : hourString;    
    timeArr[2] = timeArr[2].replace("AM", "");
    timeArr[2] = timeArr[2].replace("PM", "");
    
    s = timeArr.join(":");
    
    return s;
}
