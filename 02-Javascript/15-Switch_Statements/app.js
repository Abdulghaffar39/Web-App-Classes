// switch statements:
// How to start them

// if statement:
// var dayofweek = prompt('Write the name of any day.');


// if (dayofweek === 'saturday' || dayofweek === 'sunday'){

//     alert('Umdaa');
// }
// else if(dayofweek === 'friday'){

//     alert('Kia baat hai');
// }
// else{

//     alert('Working Day')
// }




if (condition1){

    //Body of if
}
else if(condition2){

    //Body of else if
}
else if(condition3){

    //Body of else if
}
else{

    //default if all conditions return false
}




// =================================================================================

// Switch statement:
var dayofweek = prompt('Write the name of any day.');


switch (dayofweek) {

    case 'saturday' :
        alert('Umdaa');
        break;

    case 'sunday' :
        alert('Umdaa');
        break;

    case 'friday' :
        alert('Kia baat hai');
        break;

    default :
        alert('Working Day')
}


switch (variable) {

    case 'variable value1' :
        alert('Do Something');
        break;

    case 'variable value2' :
        alert('Do Something');
        break;

    case 'variable value3' :
        alert('Do Something');
        break;

    default :
        alert('Default will perform if all case’s fail')
}


// =================================================================================

// case : case value (if statement) me else if or if ki traha kam karta hai
// default: default value (if statement) me else ki traha kam karti hai yani koi case na chalne ki surat me default chale ga
// break: break is liya lagaya hai agar nhi lagaye ge to sare case chal jayae ge
// switch statement if else ke mukable me zayada fast hai

// =================================================================================

