const express=require("express");
const app=express();
const cors=require("cors");
const mysql=require("mysql2");
const bodyparser=require("body-parser");
app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded(extended=true));
const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"Bhadri@4316",
    database:"crud"
});
app.get("/get",(err,res)=>{
    const selectq="SELECT * FROM employees;";
    db.query(selectq,(err,result)=>{
        if(err){
            console.log("err");
        }
        else{
            return res.send(result);
        }
    })
})
app.post('/data',(req,res)=>{
        const q="INSERT INTO employees(emp_name,emp_mail,emp_mob,gender,dob,dateofjoining,qualification,previousexp) VALUES (?,?,?,?,?,?,?,?);";
        db.query(q,[req.body.name,req.body.empmail,req.body.num,req.body.gender,req.body.dob,req.body.dateofjoining,req.body.qualification,req.body.previousexp],(res,err)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log(res);
            }
        })
    
})
app.listen(3000,(req,res)=>{
    console.log("listening to port 3000");
})