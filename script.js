document.getElementById("button").addEventListener('click',()=>{ str = document.getElementById("name").value;
    if(str.length>70)alert("Name cannot be more than 70 characters"); alert("You have successfully registered");
    })