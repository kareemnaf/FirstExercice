// SET TABLE 
let users = [
    {
        id: "123456789",
        createdDate: "2021-01-06T00:00:00.000Z",
        state: "En validation",
        firstName: "Mohamed",
        lastName: "Taha",
        userName: "mtaha",
        registrationNumber: "2584",
    },
    {
        id: "987654321",
        createdDate: "2021-07-25T00:00:00.000Z",
        state: "Validé",
        firstName: "Hamid",
        lastName: "Orrich",
        userName: "horrich",
        registrationNumber: "1594",
    },
    {
        id: "852963741",
        createdDate: "2021-09-15T00:00:00.000Z",
        state: "Rejeté",
        firstName: "Rachid",
        lastName: "Mahidi",
        userName: "rmahidi",
        registrationNumber: "3576",
    }
];

    // LOAD PAGE
    window.onload = () => {
        loadTable(users);
        for(var i = 1; i <= users.length; i++)
        {
            if($('#btnState'+i).text() == 'En validation')
            {
                $('#btnState'+i).addClass("on-validation");
            }
            if($('#btnState'+i).text() === 'Validé')
            {
                $('#btnState'+i).addClass("valide");
            }
            if($('#btnState'+i).text() === 'Rejeté')
            {
                $('#btnState'+i).addClass("rejected");
            }
        }
    }

    // LOAD DATA ON TABLE
    function loadTable(users)
    {
        const tbody = document.getElementById('tbody');
        var counter = 0;
        var tableHtml = '';
        for(let user of users)
        {
            var date = new Date(user.createdDate);
            var userCreatedDate = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
            counter += 1;
            tableHtml += 
            `<tr>
                    <td>${user.id}</td>
                    <td>${userCreatedDate}</td>
                    <td><button class="btnState" id="btnState${counter}">${user.state}</button></td>
                    <td>${user.firstName}</td>
                    <td>${user.lastName}</td><td>${user.userName}</td>
                    <td>${user.registrationNumber}</td>
                    <td><button class="btnTrash fa fa-trash-o"></button></td>
            </tr>`;
        }
        tbody.innerHTML = tableHtml;
    }

    // ADD USER
    const form = document.querySelector("form");
    function addUser(e) 
    {
        e.preventDefault();
        const id = document.getElementById("id").value;
        const createdDate = document.getElementById("createdDate").value;
        const state = document.getElementById("state").value;
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const userName = document.getElementById("userName").value;
        const registrationNumber = document.getElementById("registrationNumber").value;
        const tbody = document.querySelector("tbody");
        if(id === '' || createdDate === '' || state === '' || firstName === '' || lastName === '' || userName === '' || registrationNumber === '')
        {
            $('.input').css("border","1px solid red");
            $('.error').text("Veuillez remplir toutes les entrées")
        }
        else
        {
            var len = users.length + 1;
            var date = new Date(createdDate);
            var userCreatedDate = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
            tbody.innerHTML += 
            `<tr>
                <td>${id}</td>
                <td>${userCreatedDate}</td>
                <td><button class="btnState" id="btnState${len}">${state}</button></td>
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${userName}</td>
                <td>${registrationNumber}</td>
                <td><button class="btnTrash fa fa-trash-o"></button></td>
            </tr>`;
            closeModal();
        }
    }
    form.addEventListener("submit", addUser);
    
    // DELETE USER
    const table = document.querySelector("table");
    function deleteUser(e) 
    {
        if (!e.target.classList.contains("btnTrash")) 
        {
          return;
        }
        const btn = e.target;
        btn.closest("tr").remove();
    }
    table.addEventListener("click", deleteUser);

    // OPEN MODAL AND CLOSE TABLE
    function openModal() {
        document.getElementById("id").value = '';
        document.getElementById("createdDate").value = '';
        document.getElementById("firstName").value = '';
        document.getElementById("lastName").value = '';
        document.getElementById("userName").value = '';
        document.getElementById("registrationNumber").value = '';
        document.getElementById('modal').style.display = 'block'; 
        document.getElementById('table').style.display = 'none'; 
        document.getElementById('btnAdd').style.display = 'none';
        document.body.style.background = 'lightgrey';
        $('.input').css("border","1px solid lightgray");
        $('.error').text("");
    }

    // CLOSE MODAL AND OPEN TABLE
    function closeModal() {
        document.getElementById('modal').style.display = 'none'; 
        document.getElementById('table').style.display = 'block'; 
        document.getElementById('btnAdd').style.display = 'block';
        document.body.style.background = 'white';
    }
