
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("scroll").style.top = "0";
    } else {
        document.getElementById("scroll").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
}



//choose dept

var choose_dept = [
    {"name": "Accounting"},
    {"name": "Aerospace Engineering"},
    {"name": "American Studies"},
    {"name": "Anthropology"},
    {"name": "Applied Mathematics and Scientific Computation Program"},
    {"name": "Architecture"},
    {"name": "Art"},
    {"name": "Astronomy"},
    {"name": "Biochemistry"},
    {"name": "Bioengineering"},
    {"name": "Biological Sciences Undergraduate Program"},
    {"name": "Biology"},
    {"name": "Business"},
    {"name": "Chemical and Biomolecular Engineering"},
    {"name": "Chemistry and Biochemistry"},
    {"name": "Civil and Environmental Engineering"},
    {"name": "Communication"},
    {"name": "Computer Science"},
    {"name": "Economics"},
    {"name": "Education, Curriculum and Instruction"},
    {"name": "Electrical and Computer Engineering"},
    {"name": "English Language and Literature"},
    {"name": "Film Studies"},
    {"name": "Finance"},
    {"name": "Geography"},
    {"name": "Geology"},
    {"name": "Health Services Administration"},
    {"name": "History"},
    {"name": "Human Computer Interaction"},
    {"name": "Information science"},
    {"name": "Journalism"},
    {"name": "Landscape Architecture"},
    {"name": "Linguistics"},
    {"name": "Marketing"},
    {"name": "Mathematics"},
    {"name": "Mechanical Engineering"},
    {"name": "Natural Resources Management Program"},
    {"name": "Philosophy"},
    {"name": "Physics"},
    {"name": "Psychology"},
    {"name": "School of Languages, Literatures and Cultures"},
    {"name": "Sociology"},
    {"name": "Networking and Telecommunications Services"},
    {"name": "Theatre"},
    {"name": "Urban Studies and Planning"},
    {"name": "Veterinary Medicine"},
    {"name": "Women's Studies"},

], select = document.getElementById( 'department' );

for(department in choose_dept ) {
    select.add(new Option(choose_dept[department].name));
}

// timeslot---------


// var strColorOn = '#c6e7de';
var strColorOn = '#007bff';
var strColorOff = '#ffffff';

function GetHexValue(strRGBColor)
{
    var aryRGBValues;
    var strR;
    var strG;
    var strB;
    var strHexValue;

    strRGBColor = strRGBColor.replace(/\s*/g, '');
    strRGBColor = strRGBColor.replace(/rgb\(|\)/g, '');
    aryRGBValues = strRGBColor.split(',');
    strR = aryRGBValues[0];
    strG = aryRGBValues[1];
    strB = aryRGBValues[2];
    strHexValue = '#' + RGBtoHex(strR, strG, strB)
    return strHexValue.toLowerCase();
}

function RGBtoHex(strR, strG, strB)
{
    var intR = strR * 1;
    var intG = strG * 1;
    var intB = strB * 1;
    return intR.toString(16) + intG.toString(16) + intB.toString(16)
}

function ToggleTimeslot(tdTimeslot)
{
    var strBackgroundColor;

    if (tdTimeslot.style.backgroundColor == 'undefined' || tdTimeslot.style.backgroundColor == 'null' || tdTimeslot.style.backgroundColor == '')
    {
        tdTimeslot.style.backgroundColor = strColorOn;
        return;
    }
    strBackgroundColor = tdTimeslot.style.backgroundColor;
    if (strBackgroundColor.substr(0,1) != '#')
    {
        strBackgroundColor = GetHexValue(strBackgroundColor);
    }
    if (strBackgroundColor == strColorOff)
    {
        tdTimeslot.style.backgroundColor = strColorOn;
    }
    else
    {
        tdTimeslot.style.backgroundColor = strColorOff;
    }
}

function GetTimeSlotValue(intTimeslot, strStartOrEnd)
{
    var strTimeslot;

    switch(intTimeslot)
    {
        case 1:
            if (strStartOrEnd == 'start')
            {
                strTimeslot = '9:00';
            }
            else
            {
                strTimeslot = '9:30';
            }
            break;
        case 2:
            if (strStartOrEnd == 'start')
            {
                strTimeslot = '9:30';
            }
            else
            {
                strTimeslot = '10:00';
            }
            break;
        case 3:
            if (strStartOrEnd == 'start')
            {
                strTimeslot = '10:00';
            }
            else
            {
                strTimeslot = '10:30';
            }
            break;
        case 4:
            if (strStartOrEnd == 'start')
            {
                strTimeslot = '10:30';
            }
            else
            {
                strTimeslot = '11:00';
            }
            break;
        case 5:
            if (strStartOrEnd == 'start')
            {
                strTimeslot = '11:00';
            }
            else
            {
                strTimeslot = '11:30';
            }
            break;
        case 6:
            if (strStartOrEnd == 'start')
            {
                strTimeslot = '11:30';
            }
            else
            {
                strTimeslot = '12:00';
            }
            break;
        case 7:
            if (strStartOrEnd == 'start')
            {
                strTimeslot = '12:00';
            }
            else
            {
                strTimeslot = '12:30';
            }
            break;
        case 8:
            if (strStartOrEnd == 'start')
            {
                strTimeslot = '12:30';
            }
            else
            {
                strTimeslot = '1:00';
            }
            break;
        case 9:
            if (strStartOrEnd == 'start')
            {
                strTimeslot = '1:00';
            }
            else
            {
                strTimeslot = '1:30';
            }
            break;
        case 10:
            if (strStartOrEnd == 'start')
            {
                strTimeslot = '1:30';
            }
            else
            {
                strTimeslot = '2:00';
            }
            break;
        case 11:
            if (strStartOrEnd == 'start')
            {
                strTimeslot = '2:00';
            }
            else
            {
                strTimeslot = '2:30';
            }
            break;
        case 12:
            if (strStartOrEnd == 'start')
            {
                strTimeslot = '2:30';
            }
            else
            {
                strTimeslot = '3:00';
            }
            break;
        case 13:
            if (strStartOrEnd == 'start')
            {
                strTimeslot = '3:00';
            }
            else
            {
                strTimeslot = '3:30';
            }
            break;
        case 14:
            if (strStartOrEnd == 'start')
            {
                strTimeslot = '3:30';
            }
            else
            {
                strTimeslot = '4:00';
            }
            break;
        case 15:
            if (strStartOrEnd == 'start')
            {
                strTimeslot = '4:00';
            }
            else
            {
                strTimeslot = '4:30';
            }
            break;
        case 16:
            if (strStartOrEnd == 'start')
            {
                strTimeslot = '4:30';
            }
            else
            {
                strTimeslot = '5:00';
            }
            break;
        default:
            strTimeslot = '';
    }
    return strTimeslot;
}

function GetSelectedTimeslots(strDay)
{
    var strTimeslots = '';
    var intLastSelectedTimeslot = -1;
    var strBackgroundColor;
    var intCounter;
    var intNumOfTimeslots = 16;

    intCounter = 1;
    while (intCounter <= intNumOfTimeslots)
    {
        strBackgroundColor = document.getElementById('td' + strDay + intCounter).style.backgroundColor;
        if (strBackgroundColor.substr(0,1) != '#')
        {
            strBackgroundColor = GetHexValue(strBackgroundColor);
        }
        if (strBackgroundColor == strColorOn)
        {
            if (intCounter != (intLastSelectedTimeslot + 1))
            {
                strTimeslots = strTimeslots + GetTimeSlotValue(intCounter, 'start');
            }
            intLastSelectedTimeslot = intCounter;
        }
        else
        {
            if (intCounter == (intLastSelectedTimeslot + 1))
            {
                strTimeslots = strTimeslots + '-' + GetTimeSlotValue(intLastSelectedTimeslot, 'end') + ', ';
            }
        }
        intCounter++
    }
    if (intLastSelectedTimeslot == intNumOfTimeslots)
    {
        strTimeslots = strTimeslots + '-' + GetTimeSlotValue(intLastSelectedTimeslot, 'end') + ', ';
    }
    strTimeslots = strTimeslots.substr(0, (strTimeslots.length - 2));
    if (strTimeslots == '-')
    {
        strTimeslots = '';
    }
    return strTimeslots;
}

function ViewSelectedTimeslots()
{
    var strMessage = '';

    strMessage = 'The following timeslots have been selected:' + '\n\n';
    strMessage = strMessage + 'Mon: ' + GetSelectedTimeslots('Mon') + '\n';
    strMessage = strMessage + 'Tue: ' + GetSelectedTimeslots('Tue') + '\n';
    strMessage = strMessage + 'Wed: ' + GetSelectedTimeslots('Wed') + '\n';
    strMessage = strMessage + 'Thu: ' + GetSelectedTimeslots('Thu') + '\n';
    strMessage = strMessage + 'Fri: ' + GetSelectedTimeslots('Fri');
    alert(strMessage);
}

var tutors = [
    {
        "username": "mark0548",
        "subject": "Physics",
        "price": "Free",
        "availability": "Mon:9am-12pm, Wed:1pm-5pm",
        "src": "pictures/tutor pic/pic1.jpg",
        "email": "mark@mark.com"
    },
    {
        "username": "saraK157",
        "subject": "Computer Science",
        "price": "Free",
        "availability": "Mon:12pm-5pm, Wed:10am-1pm",
        "src": "pictures/tutor pic/pic2.jpeg",
        "email": "sara@sara.com"
    },
    {
        "username": "jhk53",
        "subject": "Education",
        "price": "Free",
        "availability": "Mon:9am-12pm, Wed:1pm-5pm",
        "src": "pictures/tutor pic/pic3.jpeg",
        "email": "jhk@jhk.com"
    },
    {
        "username": "cory123",
        "subject": "HCI",
        "price": "Free",
        "availability": "Mon:9am-12pm, Wed:1pm-5pm",
        "src": "pictures/blank_female.svg",
        "email": "cory@cory.com"
    },
    {
        "username": "jenny",
        "subject": "Physics",
        "price": "Free",
        "availability": "Mon:9am-12pm, Wed:1pm-5pm",
        "src": "pictures/blank_female.svg",
        "email": "jenny@jenny.com"
    },
    {
        "username": "johnm",
        "subject": "Computer Science",
        "price": "Free",
        "availability": "Mon:12pm-5pm, Wed:10am-1pm",
        "src": "pictures/blank_male.svg",
        "email": "johnm@john.com"
    },
    {
        "username": "fellow345",
        "subject": "Education",
        "price": "Free",
        "availability": "Mon:9am-12pm, Wed:1pm-5pm",
        "src": "pictures/blank_female.svg",
        "email": "fellow@fellow.com"
    },
    {
        "username": "besttutor",
        "subject": "Physics",
        "price": "Free",
        "availability": "Mon:9am-12pm, Wed:1pm-5pm",
        "src": "pictures/blank_female.svg",
        "email": "tutor@tutor.com"
    }
]

var options = {
    shouldSort: true,
    tokenize: true,
    findAllMatches: true,
    threshold: 0.0,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [
        "subject",
        "username",
        "price",
        "availability"
    ]
};

populatePage(tutors);

// function noSearchQuery(){
//     var search = document.getElementById("search");
//     if(search.textContent == ""){
//         populatePage(tutors);
//     }
// }

function fuseSearch() {

    var search = document.getElementById("search");
    console.log(search.textContent);
    if (search.textContent === "") {
        populatePage(tutors);
    }

    var fuse = new Fuse(tutors, options);
    var searchQuery = document.getElementById("search");
    var result = fuse.search(searchQuery.value);
    var parentDiv = document.getElementById("parentDiv");
    parentDiv.innerHTML = '';
    populatePage(result);
}

function populatePage(result) {
    var parentDiv = document.getElementById("parentDiv");
    parentDiv.innerHTML = '';

    for (r in result) {

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
        // btnSendEmail.onclick = sendEmail(result[r].email);
        div11.appendChild(btnSendEmail);
    }

}

function sendEmail(emailId) {
    window.location.href =  'mailto:' + emailId;
}

