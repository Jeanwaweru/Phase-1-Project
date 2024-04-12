var selectedRow= null;

//Show Alerts
function showAlert(message,className){
    const div= document.createElement("div");
    div.className =`alert alert-${className}`;

    div.apprehendChild(document.createTextNode(message));
    const container=document.querySelector(".container");
    const main=docunment.querySelector(".main");
    container.insertBefore(div,main);

    setTimeout(()=>document.querySelector(".alert").remove(),3000)
}

//Clear All Fields
function clearFields(){
    document.querySelector("Name").value="";
    document.querySelector("Email").value="";
    document.querySelector("phoneNumber").value="";
    document.querySelector("address").value="";

}

//Add Data
document.querySelector("#user-form").addEventListener("submit",(e)=>{
    e.preventDefault();

    //Get form values
    const Name=document.querySelector("#Name").value;
    const Email=document.querySelector("#Email").value;
    const phoneNumber=document.querySelector("#phoneNumber").value;
    const address=document.querySelector("#address").value;

    //Validate
    if (Name=="" || Email=="" || phoneNumber==""|| address==""){
        showAlert("Please fill in all fields","danger")
    }
    else{
        if(selectedRow==null){
            const list=document.querySelector("#user-list");
            const row=document.createElement("tr");

            row.innerHTML=`
            <td>${Name}</td>
            <td>${Email}</td>
            <td>${phoneNumber}</td>
            <td>${address}</td>
            <td>
            <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
            <a href="#" class="btn btn-warning btn-sm update">Update</a>
            <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
            `;
            list.appendChild(row);
            selectedRow=null;
            showAlert("User Added","success");
        }
        else{
            selectedRow.children[0].textContent=Name;
            selectedRow.children[1].textContent=Email;
            selectedRow.children[2].textContent=phoneNumber;
            selectedRow.children[3].textContent=address;
            selectedRow=null;
            showAlert("user info edited","info");
        }
        clearFields();
    }
});

//EDit Data
document.querySelector("#user-list").addEventListener("click",(e)=>{
    target=e.target;
    if(target.classList.contains("edit")){
        selectedRow=target.parentElement.parentElement;
        document.querySelector("#Name").value=selectedRow.children[0].textContent;
        document.querySelector("#Email").value=selectedRow.children[1].textContent;
        document.querySelector("#phoneNumber").value=selectedRow.children[2].textContent;
        document.querySelector("#address").valuselectedRow.children[3].textContent;
    }
});

//Delete data
document.querySelector("#user-list").addEventListener("click", (e) =>{
    target= e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("User Data Deleted","danger");
    }
})