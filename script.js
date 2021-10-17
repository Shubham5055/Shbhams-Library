var selectedRow=null

function onformSubmit (){
    if(validate())
    {
    var formdata = readformdata();
    if(selectedRow==null)
    {
           insertnewrecord(formdata);
    }
    else
    {
        updateRecord(formdata);
    }
    resetform();
}
}
function readformdata (){
    var formdata={};
    formdata["name"]=document.getElementById("name").value;
    formdata["email"]=document.getElementById("email").value;
    formdata["photo"]=document.getElementById("photo").value;
    formdata["age"]=document.getElementById("age").value;
    formdata["gender"]=document.getElementById("gender").value;
    formdata["photo"]=document.getElementById("photo").value;
    formdata["address"]=document.getElementById("address").value;
    return formdata;

}

function insertnewrecord(data){
    var table = document.getElementById("Data1").getElementsByTagName('tbody')[0];
    var newrow = table.insertRow(table.length);
    cell1=newrow.insertCell(0);
    cell1.innerHTML=data.name;
    cell2=newrow.insertCell(1);
    cell2.innerHTML=data.email;
    cell3=newrow.insertCell(2);
    cell3.innerHTML=data.phone;
    cell4=newrow.insertCell(3);
    cell4.innerHTML=data.age;
    cell5=newrow.insertCell(4);
    cell5.innerHTML=data.gender;
    cell6=newrow.insertCell(5);
    cell6.innerHTML=data.photo;
    cell7=newrow.insertCell(6);
    cell7.innerHTML=data.address;
    cell7=newrow.insertCell(7);
    cell7.innerHTML=`<a onClick="onEdit(this)">Update</a>
                    <a onClick="ondelete(this)">Delete</a>`;
   
   
}
function resetform(){
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("phone").value="";
    document.getElementById("age").value="";
    document.getElementById("gender").value="";
    document.getElementById("photo").value="";
    document.getElementById("address").value="";
    selectedRow=null;


}
function onEdit(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementById("name").value=selectedRow.cells[0].innerHTML;
    document.getElementById("email").value=selectedRow.cells[1].innerHTML;
    document.getElementById("phone").value=selectedRow.cells[2].innerHTML;
    document.getElementById("age").value=selectedRow.cells[3].innerHTML;
    document.getElementById("gender").value=selectedRow.cells[4].innerHTML;
    document.getElementById("photo").value=selectedRow.cells[5].innerHTML;
    document.getElementById("address").value=selectedRow.cells[6].innerHTML;
}

function updateRecord(formdata){
    selectedRow.cells[0].innerHTML=formdata.name;
    selectedRow.cells[1].innerHTML=formdata.email;
    selectedRow.cells[2].innerHTML=formdata.phone;
    selectedRow.cells[3].innerHTML=formdata.age;
    selectedRow.cells[4].innerHTML=formdata.gender;
    selectedRow.cells[5].innerHTML=formdata.photo;
    selectedRow.cells[6].innerHTML=formdata.address;

}

function ondelete(td){
    if(confirm("Are you sure want to delete data?")){
    row=td.parentElement.parentElement;
    document.getElementById("Data1").deleteRow(row.rowIndex);
    resetform();
    }
}
function validate(){
    isvalid=true;
    if(document.getElementById("name").value==""){
        isvalid=false;
        document.getElementById("fullnameValidationError").classList.remove("hide");
    }
    else if(document.getElementById("email").value=="")
    {
        isvalid=false;
        document.getElementById("fullemailValidationError").classList.remove("hide"); 
    }
    else if(document.getElementById("phone").value=="")
    {
        isvalid=false;
        document.getElementById("phoneValidationError").classList.remove("hide"); 
    }
    else if(document.getElementById("age").value=="")
    {
        isvalid=false;
        document.getElementById("ageValidationError").classList.remove("hide"); 
    }
    else if(document.getElementById("gender").value=="")
    {
        isvalid=false;
        document.getElementById("genderValidationError").classList.remove("hide"); 
    }
    else if(document.getElementById("photo").value=="")
    {
        isvalid=false;
        document.getElementById("photoValidationError").classList.remove("hide"); 
    }
    else if(document.getElementById("address").value=="")
    {
        isvalid=false;
        document.getElementById("addressValidationError").classList.remove("hide"); 
    }
    else{
        isvalid=true;
        if(!document.getElementById("fullnameValidationError").classList.contains("hide")){
            document.getElementById("fullnameValidationError").classList.add("hide");
        }
    }
    return isvalid;
}