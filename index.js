function displayDivOne() {
    let dayNum = document.getElementById('')
    var x = document.getElementById("timeone");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
} 
function displayDivTwo() {
    let dayNum = document.getElementById('')
    var x = document.getElementById("timetwo");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
} 

const presentation_hours = ["12.00","12.30","13.00","13.30","14.00","14.30","15.00","15,30","16.00","16.30","17.00","17.30","18.00","18.30","19.00","19.30","20.00","20.30","21.00"];
console.log(presentation_hours);
const jury_One =   [1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1];
const jury_Two =   [1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1];
const jury_Three = [1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0];
const jury_four =  [0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1];
// paralel durum
// aynı jürinin müsaitlik durumu
var arr_dayThree = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var arr_dayFour  = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];





var arrMayThird = {
    Length: [],
    Groups: []
}

var arrMayFourth = {
    LengthFourth: [],
    //Hours:[],
    GroupsFourth: []
}

let sumThird = 0;
let sumFourth = 0;

let GroupInput;
let input;

function bubleSort(arr, arrNum, n)
{
    var i, j, temp;
    var swapped;
    for(i = 0; i < n - 1; i++)
    {
        swapped = false;
        for(j = 0; j < n - i - 1; j++)
        {
            if(arr[j] < arr[j + 1])
            {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                temp = arrNum[j];
                arrNum[j] = arrNum[j + 1];
                arrNum[j + 1] = temp;

                swapped = true;
            }
        }
        if (swapped == false)
            break;
    }
}


var Status = true;
function reserve(dayArr, value, group){
    
    if(value==90){
        for(let i=0; i< 18; i++){
            let a,b,c;
            /*
            if(jury_One[i] + 
                jury_One[i+1] + 
                jury_One[i+2] == 3){
                    a = 1;
                }*/
            a = jury_One[i] + jury_Two[i] + jury_Three[i] + jury_four[i]; 
            b = jury_One[i+1] + jury_Two[i+1] + jury_Three[i+1] + jury_four[i+1]; 
            c = jury_One[i+2] + jury_Two[i+2] + jury_Three[i+2] + jury_four[i+2];

            if(a>2 && b>2 && c>2 && dayArr[i] == 0 && dayArr[i+1]==0 && dayArr[i+2]==0){

                dayArr[i]=group;
                dayArr[i+1]=group;
                dayArr[i+2]=group;
                Status = true;
                break;
            }
            else{
                Status = false;
            }
        }
    }
    if(value==60){
        for(let i=0; i< 18; i++){
            let a,b,c;
            a = jury_One[i] + jury_Two[i] + jury_Three[i] + jury_four[i]; 
            b = jury_One[i+1] + jury_Two[i+1] + jury_Three[i+1] + jury_four[i+1]; 

            if(a>2 && b>2 && dayArr[i] == 0 && dayArr[i+1] == 0){
                dayArr[i]=group;
                dayArr[i+1]=group;
                Status = true;
                break;
            }
            else{
                Status = false;
            }
        }
    }
    if(value==30){
        for(let i=0; i< 18; i++){
            let a,b,c;
            a = jury_One[i] + jury_Two[i] + jury_Three[i] + jury_four[i]; 
            if(a>2 && dayArr[i] == 0){
                dayArr[i]=group;
                Status = true;
                break;
            }
            else{
                
                Status = false;
            }
        }
    }
    return;
}
/*--------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------*/


function getInputValueThird(){
    var GroupInputt = document.getElementById("GroupInput").value;
    var inputValt = document.getElementById("input").value;

    let GroupInput = parseInt(GroupInputt);
    let inputVal = parseInt(inputValt);

    sumThird = 0;

    for(let i = 0; i< arrMayThird.Length.length; i++){
        sumThird += parseInt(arrMayThird.Length[i]);
    }

    if ((sumThird+inputVal)<=330){
        arrMayThird.Length.push(inputVal);
        arrMayThird.Groups.push(GroupInput);
    
        
        let n = arrMayThird.Length.length;
        bubleSort(arrMayThird.Length, arrMayThird.Groups, n);


        let ninetyCounter; 
        if(inputVal==90)
            ninetyCounter++;

       reserve(arr_dayThree, inputVal, GroupInput);
       if(Status==false || ninetyCounter>2){
           alert("this day is not avaible for you");
       }
       arr_dayThree = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

        //console.log(arr_dayThree);
        console.dir(arrMayThird);

        //alert("Succesful");
    }
    else{
        alert("This day is not avaible for you");
        return   
    }
    sumThird=0;
    for(let i = 0; i< arrMayThird.Length.length; i++){
        sumThird += parseInt(arrMayThird.Length[i]);
    }
    console.log(sumThird);

    if(sumThird>=300){

        for(let i = 0; i<arrMayThird.Length.length; i++){
            reserve(arr_dayThree, arrMayThird.Length[i], arrMayThird.Groups[i]);
        }
        console.log(arr_dayThree + "\n\n");

        var ab = -1;

        for(i = 0 ; i < arr_dayThree.length; i++){
            ab = arr_dayThree[i];
            if(ab != 0 && ab != arr_dayThree[i-1]){
                console.log(presentation_hours[i] + " is starting hour of group number " + ab);
            }
        }
    }
    return;
    


    
    
}




















function getInputValueFourth(){
    var GroupInputTwoo = document.getElementById("GroupInputTwo").value;
    var inputValTwoo = document.getElementById("inputTwo").value;

    let GroupInputTwo = parseInt(GroupInputTwoo);
    let inputValTwo = parseInt(inputValTwoo);

    console.log(sumThird);
    
    for(let i = 0; i< arrMayFourth.LengthFourth.length; i++){
        sumFourth += parseInt(arrMayFourth.LengthFourth[i]);
    }
    if(300-sumThird<(300-sumFourth) && sumThird+inputValTwo<300){
        alert("3 May 2020 sizin için daha uygun bir sunum tarihi")
        return
    }
    else if (sumFourth+inputValTwo<300){
        arrMayFourth.LengthFourth.push(inputValTwo);
        arrMayFourth.GroupsFourth.push(GroupInputTwo);
        sumFourth += inputValTwo;
        alert("Succesful");
        console.dir(arrMayFourth);
    }
    else{
        alert("This day have " + (300 - sumFourth) + " minuntes free");
        return 
        
    }
    //var inputValTwo = document.getElementById("inputHour").value;
    //arrMayThird.Hours.push(inputValTwo);   
    
}



//let n =  arrMayThird.Length.length;

//sort presentations decreasing order of time
//let temp;
//for (let i = 0; i < n; i++){
 
//}






