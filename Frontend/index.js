console.log("hello");
let f=document.getElementById("emp_form");
f.addEventListener("submit",((e)=>{
    e.preventDefault();
    let name=document.getElementById('empname').value;
    let empmail=document.getElementById('empmail').value;
    let num=document.getElementById('empmob').value;
    let gender=document.getElementById('gender').value;
    let dob=document.getElementById('dob').value;
    let dateofjoining=document.getElementById('dateofjoining').value;
    let qualification=document.getElementById('qualification').value;
    let previousexp=document.getElementById('previousexp').value;
    senddata(name,empmail,num,gender,dob,dateofjoining,qualification,previousexp);
}))

async function senddata(name,empmail,num,gender,dob,dateofjoining,qualification,previousexp){
   
   await fetch("http://127.0.0.1:3000/data",{
        method:"POST",
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify({
            name:name,
            empmail:empmail,
            num:num,
            gender:gender,
            dob:dob,
            dateofjoining:dateofjoining,
            qualification:qualification,
            previousexp:previousexp,

        })
    });
  
}

    