var students = [
    {
        "username": "mark0548",
        "subject": "Physics",
        "price": "Free",
        "availability": "Mon:9am-12pm, Wed:1pm-5pm",
        "src": "pictures/tutor pic/pic1.jpg"
    },
    {
        "username": "saraK157",
        "subject": "Computer Science",
        "price": "Free",
        "availability": "Mon:12pm-5pm, Wed:10am-1pm",
        "src" :"pictures/tutor pic/pic2.jpeg"
    },
    {
        "username": "jhk53",
        "subject": "Education",
        "price": "Free",
        "availability": "Mon:9am-12pm, Wed:1pm-5pm",
        "src": "pictures/tutor pic/pic3.jpeg"
    },
    {
        "username": "cory123",
        "subject": "HCI",
        "price": "Free",
        "availability": "Mon:9am-12pm, Wed:1pm-5pm",
        "src":"pictures/blank_female.svg"
    },
    {
        "username": "jenny",
        "subject": "Physics",
        "price": "Free",
        "availability": "Mon:9am-12pm, Wed:1pm-5pm",
        "src": "pictures/blank_female.svg"
    },
    {
        "username": "johnm",
        "subject": "Computer Science",
        "price": "Free",
        "availability": "Mon:12pm-5pm, Wed:10am-1pm",
        "src" :"pictures/blank_male.svg"
    },
    {
        "username": "jhk53",
        "subject": "Education",
        "price": "Free",
        "availability": "Mon:9am-12pm, Wed:1pm-5pm",
        "src": "pictures/blank_female.svg"
    },
    {
        "username": "cory123",
        "subject": "Physics",
        "price": "Free",
        "availability": "Mon:9am-12pm, Wed:1pm-5pm",
        "src":"pictures/blank_female.svg"
    }
]

var options = {
    shouldSort: true,
    tokenize: true,
    findAllMatches: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [
        "subject"
    ]
};

var search = document.getElementById("subject");
search.onchange = function () {
    $("#parentDiv").html('');

}

function fuseSearch() {

    var fuse = new Fuse(students, options); // "list" is the item array
    var searchQuery = document.getElementById("subject");
    var result = fuse.search(searchQuery.value);
    console.log(result);
    var parentDiv = document.getElementById("parentDiv");
    parentDiv.innerHTML = '';
    
    for(r in result){

        var div1 = document.createElement("div");
        div1.classList += "col-md-4 ";
        parentDiv.appendChild(div1);
        var div2 = document.createElement("div");
        div2.classList += "card mb-4 shadow-sm";
        div1.appendChild(div2);

        var img1 = document.createElement("img");
        img1.classList += "card-img-top";
        img1.src = result[r].src;
        div2.appendChild(img1);

        var div3 = document.createElement("div");
        div3.id = "div3";
        div3.classList += "card-body";

        // adding info
        var p1 = document.createElement("p");
        p1.classList += "card-text";
        var node = document.createTextNode("");
        p1.appendChild(node);
        p1.innerHTML = "<b>Username: </b>" + result[r].username;
        div3.append(p1);


        var p2 = document.createElement("p");
        p2.classList += "card-text";
        node = document.createTextNode("");
        p2.appendChild(node);
        p2.innerHTML = "<b>Subject: </b>" + result[r].subject;
        div3.append(p2);
        var p3 = document.createElement("p");
        p3.classList += "card-text";
        node = document.createTextNode(result[r].price);
        p3.appendChild(node);
        p3.innerHTML = "<b>Price: </b>" + result[r].price;
        div3.append(p3);
        var p4 = document.createElement("p");
        p4.classList += "card-text";
        node = document.createTextNode(result[r].availability);
        p4.appendChild(node);
        p4.innerHTML = "<b>Availability: </b>" + result[r].availability;
        div3.append(p4);

        div2.appendChild(div3);

        var div4 = document.createElement("div");
        div4.classList += "d-flex justify-content-between align-items-center";
        div3.appendChild(div4);

        var div5 = document.createElement("div");
        div5.classList += "btn-group ml-5";
        div4.appendChild(div5);

        var button = document.createElement("button");
        button.classList += "btn btn-sm btn-outline-secondary";
        button.id = "modalBtn";
        $(button).attr("data-toggle", "modal");
        $(button).attr("data-target", "#myModal");
        button.textContent = "Set Up Appointment";
        div5.appendChild(button);
        
        var div6 = document.createElement("div");
        div6.classList += "modal fade";
        div6.id = "myModal";
        div6.tabIndex = 1;
        div6.role = "dialog";
        parentDiv.appendChild(div6);
        
        var div7 = document.createElement("div");
        div7.classList += "modal-dialog";
        div6.appendChild(div7);
        
        var div8 = document.createElement("div");
        div8.classList += "modal-content";
        div7.appendChild(div8);
        
        var div9 = document.createElement("div");
        div9.classList += "modal-header";
        div8.appendChild(div9);
        
        var modalTitle = document.createElement("h4");
        modalTitle.classList += "modal-title";
        modalTitle.id = "myModalLabel";
        modalTitle.innerHTML = "Appointment with <b>" + result[r].username + "<b>";
        div9.appendChild(modalTitle);

        var div10 = document.createElement("div");
        div10.classList += "modal-body";
        div8.appendChild(div10);

        var div11 = document.createElement("div");
        div11.classList += "modal-footer";
        div8.appendChild(div11);
        
        var btnClose = document.createElement("button");
        btnClose.classList += "btn btn-default";
        btnClose.type = "button";
        btnClose.id = "btnCloseModal"
        $(btnClose).attr("data-dismiss", "modal");
        btnClose.textContent = "Close";
        div11.appendChild(btnClose);

        var btnSendEmail = document.createElement("button");
        btnSendEmail.classList += "btn btn-primary";
        btnSendEmail.type = "button";
        btnSendEmail.textContent = "Email";
        div11.appendChild(btnSendEmail);
    }
}





