
let id = document.createElement("div")
id.setAttribute("id", "time")

let c =new Audio("clock-alarm-8761.mp3")

let loopOptions = (n,element) =>{
  for(let i=0;i<=n;i++){
    let option = document.createElement("option");
    let a = '0'+ i;
    option.setAttribute("value",subStr(a));
    option.innerHTML=subStr(a)
    element.appendChild(option)
  }  
}

let style = document.createElement("style")
style.innerHTML = `#time{text-align: center;margin-top: 5rem;padding: 0;display: grid;font-size: 50px;color: cadetblue;background-image: linear-gradient(45deg, #ebcdcd, #96b58d);}

#alarmSet{
  display:flex;
  justify-content:center;
  margin-top:4rem;
  gap:10px;
}

label{
  margin-left: -8px;
  font-size: 19px;
  font-family: monospace;
  font-weight: 700;
  color: brown;
}

button {
  border: none;
  font-size: 15px;
  font-family: monospace;
  padding: 4px;
}

p{
  color:cadetblue;
  font-size:15px;
  font-family:monospace;
  margin-left:auto;
}

#testId{
  margin-right:auto;
  margin-left:auto;
  padding:8px;
  height:32px;
  margin-top:auto;
  margin-bottom:auto;
  background: lightgrey;
  border: 1px solid black;
}

div#reslt{
  background: antiquewhite;
  width: 55%;
  margin-right: auto;
  margin-left: auto;
  text-align:center;
  justify-content:center;
  margin-top:2em;
}

`

document.head.append(style)
document.body.append(id)

let alarmContainer = document.createElement("form");
alarmContainer.setAttribute("id","alarmSet");
let select = document.createElement("select");
select.setAttribute("id","select");
alarmContainer.append(select)

loopOptions(25,select)

let Hr = document.createElement("label");
Hr.innerHTML = "hr"
alarmContainer.appendChild(Hr);

let select1 = document.createElement("select");
select1.setAttribute("id","select");
alarmContainer.append(select1)

loopOptions(60,select1)

let Min = document.createElement("label");
Min.innerHTML = "min"
alarmContainer.appendChild(Min);


let select3 = document.createElement("select");
select3.setAttribute("id","select");
alarmContainer.append(select3)

loopOptions(60,select3)

let Sec = document.createElement("label");
Sec.innerHTML = "sec"
alarmContainer.appendChild(Sec);

let btn = document.createElement("button");
btn.innerHTML = "Set Alarm Clock";
alarmContainer.append(btn)
document.body.append(alarmContainer)

let resulDiv = document.createElement("div");
resulDiv.setAttribute("id","reslt");

let para = document.createElement("p");
para.setAttribute("id","p");
resulDiv.append(para);

let paratbn = document.createElement("button");
paratbn.setAttribute("id","testId");

let timeLeft = document.createElement("div");
timeLeft.setAttribute("id","timeleft");
document.body.append(timeLeft)


let alarmSet=""
let Interval;
let b="";

let a = () => {
  setInterval(() => {
    let time = new Date();
    b = time.toTimeString().replace("GMT+0530 (India Standard Time)", "").trim();
    id.innerHTML = b
    para.innerHTML = alarmSet != 0 ?"Alarm is set for " + alarmSet:"";
    if(alarmSet !=0){
      resulDiv.style.display = "flex"
      paratbn.innerHTML = "x"
      resulDiv.append(paratbn);
    }else{
      resulDiv.style.display = "none"
    }

    if(alarmSet === b){
      Interval =  setInterval(async()=>{
        await c.play()
      },1000)
            
      Interval()
      }
  }, 1000)

  
}


btn.addEventListener('click',(e)=>{
  e.preventDefault();
  let alarm_time = `${select.value}:${select1.value}:${select3.value}`
  resulDiv.style.display = "flex"
  alarmSet = alarm_time.trim()
  document.body.append(resulDiv);

})

function subStr(s){
  let c=""
  if(s.length == 3){
    c = s.substring(1)
  }
  let d =""
  if(s.length == 2){
    d = s
  }
  return c.concat(d);
}





paratbn.addEventListener('click',(e)=>{
  e.preventDefault()
  resulDiv.remove()
  clearInterval(Interval)
})

a()