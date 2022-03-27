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

const presentation_hours = ["12.00","12.30","13.00","13.30","14.00","14.30","15.00","15.30","16.00","16.30","17.00","17.30","18.00","18.30","19.00","19.30","20.00","20.30","21.00"];
console.log(presentation_hours);

const jury_One =   [1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1];
const jury_Two =   [1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1];
const jury_Three = [1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0];
const jury_four =  [1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1];
var juries = [jury_One, jury_Two, jury_Three , jury_four];
// paralel durum
// aynı jürinin müsaitlik durumu
var arr_dayThree = [[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0]]; //[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; //
var arr_dayFour  = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

//arrMayThird[i].push(proje1)
//arrMayThird[i].push(proje2)



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

    let JuryAvaibility = [];
    if(value==90){
        
        for(let i=0; i< 18; i++){

            //console.log(i +". index")
            var avaible = 0;

            for(let a = 0; a < juries.length; a++){ //jürilerin arrayi ilerliyor
                JuryAvaibility[a] = juries[a][i] + juries[a][i+1] + juries[a][i+2];
               
                if(JuryAvaibility[a]>2){
                    avaible++; //buraya dön 
                 }
            }
            if(avaible >= 3){
                //console.log(avaible + " tur" + i);
                let a;
                for(let x=0; x<4; x++){
                    if(avaible >= 3 &&  dayArr[i][x]==0 && dayArr[i+1][x]==0 && dayArr[i+2][x]==0){
                        dayArr[i][x]=group;
                        dayArr[i+1][x]=group;
                        dayArr[i+2][x]=group;
                        Status = true;
                        break;
                    }
                    else{
                        avaible-3;
                    }
                } 
                break;   
            }
            else{
                Status = false;
            }
        }
    }
    if(value==60){


        for(let i=0; i< 18; i++){
            
            var avaible = 0;

            for(let a = 0; a < juries.length; a++){ //jürilerin arrayi ilerliyor
                JuryAvaibility[a] = juries[a][i] + juries[a][i+1];
               
                if(JuryAvaibility[a]>=2){
                    avaible++; //buraya dön
                }
            }

            if(avaible >= 3){

                for(let x=0; x<4; x++){
                    if(avaible >= 2 &&  dayArr[i][x]==0 && dayArr[i+1][x]==0){
                        dayArr[i][x]=group;
                        dayArr[i+1][x]=group;
                        Status = true;
                        break;
                    }
                    else{
                        avaible-2;
                    }
                }
                break;    
            }
            else{
                Status = false;
            }
        }
    }
    if(value==30){
        for(let i=0; i< 18; i++){
            var avaible = 0;

            for(let a = 0; a < juries.length; a++){ //jürilerin arrayi ilerliyor
                JuryAvaibility[a] = juries[a][i]
               
                if(JuryAvaibility[a]>=1){
                    avaible++; //buraya dön
                }
            }
                       
            if(avaible>=3){
                for(let x=0; x<4; x++){
                    if(avaible >= 1 &&  dayArr[i][x]==0){
                        dayArr[i][x]=group;
                        Status = true;
                        break;
                    }
                    else{
                        avaible-1;
                    }
                } 
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


    //console.log(juries[1][1]);

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
       arr_dayThree = [[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0]];

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

        for(i = 0 ; i < arr_dayThree.length; i++){
            for(j=0;j<4;j++){
                console.log(arr_dayThree[i][j] + "\n");
            }
            
        }
        var ab = -1;

        for(i = 0 ; i < arr_dayThree.length; i++){
            for(j=0;j<4;j++){
                ab = arr_dayThree[i][j];
                if(ab != 0 && ab != arr_dayThree[i-1]){
                    console.log(presentation_hours[i] + " is starting hour of group number " + ab);
                }
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






