console.log("main.js loading started ");

const span=["resultSpan_0","resultSpan_1","resultSpan_2"];
const counters=[0,0,0];



function changeResultSpanValue(index){
    const resultSpan=document.getElementById(span[index]);
    resultSpan.innerHTML=counters[index]
    console.log( "result span data " ,resultSpan)
    
}
function getId(event){
    const id=event.target.id;
    const value=event.target.value;
    console.log("value is" ,value);
    const data=id.split("_");
    console.log("data= "+data);
    const index=data[1];
    console.log("data= "+ data[1]);
    return index;
}
function increment(event){
    console.log("increment called" )
    console.log(event)
    const index=getId(event);
    console.log("index", index)
    counters[index]=counters[index]+1;
    changeResultSpanValue(index);
    console.log("the value for click is ",counters)
}

function decrement(event){
    console.log("increment called" )
    console.log(event)
    const index=getId(event);
    console.log("index", index)
    counters[index]=counters[index]-1;
    changeResultSpanValue(index);
}
function finalResult(){
    console.log(counters)
    let sum=0;
    for(i=0;i<counters.length;i++){
sum=sum+counters[i];
    }
    console.log(sum)
    let percent=(sum/300)*100
    const finalResul=document.getElementById("Final_result");
    finalResul.innerHTML=sum;
    const percentage=document.getElementById("percent");
    percentage.innerHTML=percent+"%";
    let pass=""
    if(percent>=50){
        pass="congratulation you have passed the exam!!!!"
    }
    else{
        pass="Sorry you have not passed the exam better luck next time!!" 
    }

   let message=document.getElementById("passed_failed");
   message.innerHTML=pass;
}

console.log("main.js loaded ");