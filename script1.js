// dom selection
i=1;


const btnCreate = document.querySelector("#btnCreate");
const btnclear = document.querySelector("#btnClear");
var dataTable = document.getElementById("dataTable");


// function checkvalidity(){
//   if()
// }

btnCreate.onclick = function () {
  const objTextname = document.querySelector("#txtName").value;
  console.log(objTextname)
  const objtxtEmail = document.querySelector("#txtEmail").value;
  console.log(objtxtEmail)
  const objtxtMobile = document.querySelector("#txtMobile").value;
  console.log(objtxtMobile)


  if(objTextname==""){
    document.getElementById('username').innerHTML=`please enter Your Name`
    return false;
  }
  if((objTextname.length <=2 )|| (objTextname.length >20)){
    document.getElementById('username').innerHTML=` Name Must be in 2 to 20 character`
    return false;
  }
  if(!isNaN(objTextname)){
    document.getElementById('username').innerHTML=` Name Must be only in charaters`
    return false;

  }





  if(objtxtEmail==""){
    document.getElementById('email').innerHTML=`please enter Your Email;`
    return false;
  }
  if(objtxtEmail.indexOf('@')<=0){
    document.getElementById('email').innerHTML=`Invalid  Email Id;`
    return false;
  }







  if(objtxtMobile==""){
    document.getElementById('Mobile').innerHTML=`please enter Your MobileNO`
    return false;
  }
  if(isNaN(objtxtMobile)){
    document.getElementById('Mobile').innerHTML=`please enter Number`
    return false;
  }
  if(objtxtMobile.length !=10){
    document.getElementById('Mobile').innerHTML=`please enter 10 Number`
    return false;
  }
  



//   alert(objTextname.value + "" + objtxtEmail.value + "" + objtxtMobile.value);

  var objtr = document.createElement("tr");
  var objslno = document.createElement("td");
  var objNametd = document.createElement("td");
  var objEmailtd = document.createElement("td");
  var objMobiletd = document.createElement("td");

  //value get into new row
  
  objNametd.innerHTML=objTextname;
  objEmailtd.innerHTML=objtxtEmail;
  objMobiletd.innerHTML=objtxtMobile;
  objslno.innerHTML=i;

  //append all child to dom
  objtr.appendChild(objslno);
  objtr.appendChild(objNametd);
  objtr.appendChild(objEmailtd);
  objtr.appendChild(objMobiletd)
  dataTable.appendChild(objtr)
  i++;
};
btnclear.onclick=function(){
 
  document.querySelector("#txtName").value="";
  document.querySelector("#txtEmail").value="";
   document.querySelector("#txtMobile").value="";
 
 

}