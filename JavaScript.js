function clickme() {
    const input1 = document.querySelector("#name").value;
    const input2 = document.querySelector("#mail").value;
    const input3 = document.querySelector("#pw").value;

    

    if (input1 === "") {
        document.querySelector("#nameError").innerText = "Username required!";
    } else {
        document.querySelector("#nameError").innerText = "";
    }


    if (input2 === "") {
        document.querySelector("#mailError").innerText = "Email required!";
    } else {
        document.querySelector("#mailError").innerText = "";
    }


    if (input3 === "") {
        document.querySelector("#pwError").innerText = "Password required!";
    } else {
        document.querySelector("#pwError").innerText = "";
    }

}









