var isSignedIn = false;
var email = "";
var id_token = ""

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    email = profile.getEmail();

    document.getElementById("firstName").value = profile.getGivenName();
    document.getElementById("lastName").value = profile.getFamilyName();
    document.getElementById("img").src = profile.getImageUrl();

    console.log(googleUser.getBasicProfile);

    // The ID token you need to pass to your backend:
    id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);

    var signInButton = document.getElementById("GoogleSignIn");
    signInButton.style.display = "none";
    var landingAreaDiv = document.getElementById("particles-js");
    landingAreaDiv.style.display = "none";
    var onboardingDiv = document.getElementById("onboarding");
    onboardingDiv.style.display = "flex";
}

function makeApiCall() {
    var params = {
        // The ID of the spreadsheet to update.
        spreadsheetId: "1aUzqy4V1YrDpOGW2ysivK1Ti8ivg9XZbTXkPuUJQW0s",  // TODO: Update placeholder value.

        // The A1 notation of a range to search for a logical table of data.
        // Values will be appended after the last row of the table.
        range: 'Sheet1',  // TODO: Update placeholder value.

        // How the input data should be interpreted.
        valueInputOption: 'USER_ENTERED',  // TODO: Update placeholder value.

        // How the input data should be inserted.
        insertDataOption: 'INSERT_ROWS',  // TODO: Update placeholder value.
    };

    var valueRangeBody = {
        "majorDimension": "ROWS",
        "range": "Sheet1",
        "values": [
            [
                document.getElementById("firstName").value,
                document.getElementById("lastName").value,
                email,
                document.getElementById("img").src,
                document.getElementById("username")
            ]
        ]
    };

    var request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
    request.then(function(response) {
        // TODO: Change code below to process the `response` object:
        console.log(response.result);
    }, function(reason) {
        console.error('error: ' + reason.result.error.message);
    });
}

function initClient() {
    var API_KEY = 'AIzaSyDUhYR7KHQPRkvS7rUJYpnwjzxGdA_jJb4';
    var CLIENT_ID = '629976535368-0mrs4srv347tfffeigktd5c5ih7pqm51.apps.googleusercontent.com';
    var SCOPE = "https://www.googleapis.com/auth/spreadsheets";

    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);
    updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
}

function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}

function updateSignInStatus(isSignedIn) {
    if (isSignedIn) {
        makeApiCall();
    }
}

/*function createUser() {
    var API_KEY = 'AIzaSyDUhYR7KHQPRkvS7rUJYpnwjzxGdA_jJb4';
    var CLIENT_ID = '629976535368-0mrs4srv347tfffeigktd5c5ih7pqm51.apps.googleusercontent.com';
    var SCOPE = "https://www.googleapis.com/auth/spreadsheets";

    gapi.client.init({
        'apiKey': API_KEY,
        'clientId': CLIENT_ID,
        'scope': SCOPE,
        'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(function () {
        var params = {
            // The ID of the spreadsheet to update.
            spreadsheetId: '1aUzqy4V1YrDpOGW2ysivK1Ti8ivg9XZbTXkPuUJQW0s',  // TODO: Update placeholder value.

            // The A1 notation of a range to search for a logical table of data.
            // Values will be appended after the last row of the table.
            range: 'Sheet1',  // TODO: Update placeholder value.

            // How the input data should be interpreted.
            valueInputOption: 'USER_ENTERED',  // TODO: Update placeholder value.

            // How the input data should be inserted.
            insertDataOption: 'INSERT_ROWS',  // TODO: Update placeholder value.
        };

        var valueRangeBody = {
            "majorDimension": "ROWS",
            "range": "Sheet1",
            "values": [
                [
                    document.getElementById("firstName").value,
                    document.getElementById("lastName").value,
                    email,
                    document.getElementById("img").src,
                    document.getElementById("username")
                ]
            ]
        };

        var request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
        request.then(function (response) {
            console.log(response.result);
        }, function (reason) {
            console.error('error: ' + reason.result.error.message);
        });
    })

}*/

var countries = [
    {"name": "Afghanistan", "code": "AF"},
    {"name": "Åland Islands", "code": "AX"},
    {"name": "Albania", "code": "AL"},
    {"name": "Algeria", "code": "DZ"},
    {"name": "American Samoa", "code": "AS"},
    {"name": "AndorrA", "code": "AD"},
    {"name": "Angola", "code": "AO"},
    {"name": "Anguilla", "code": "AI"},
    {"name": "Antarctica", "code": "AQ"},
    {"name": "Antigua and Barbuda", "code": "AG"},
    {"name": "Argentina", "code": "AR"},
    {"name": "Armenia", "code": "AM"},
    {"name": "Aruba", "code": "AW"},
    {"name": "Australia", "code": "AU"},
    {"name": "Austria", "code": "AT"},
    {"name": "Azerbaijan", "code": "AZ"},
    {"name": "Bahamas", "code": "BS"},
    {"name": "Bahrain", "code": "BH"},
    {"name": "Bangladesh", "code": "BD"},
    {"name": "Barbados", "code": "BB"},
    {"name": "Belarus", "code": "BY"},
    {"name": "Belgium", "code": "BE"},
    {"name": "Belize", "code": "BZ"},
    {"name": "Benin", "code": "BJ"},
    {"name": "Bermuda", "code": "BM"},
    {"name": "Bhutan", "code": "BT"},
    {"name": "Bolivia", "code": "BO"},
    {"name": "Bosnia and Herzegovina", "code": "BA"},
    {"name": "Botswana", "code": "BW"},
    {"name": "Bouvet Island", "code": "BV"},
    {"name": "Brazil", "code": "BR"},
    {"name": "British Indian Ocean Territory", "code": "IO"},
    {"name": "Brunei Darussalam", "code": "BN"},
    {"name": "Bulgaria", "code": "BG"},
    {"name": "Burkina Faso", "code": "BF"},
    {"name": "Burundi", "code": "BI"},
    {"name": "Cambodia", "code": "KH"},
    {"name": "Cameroon", "code": "CM"},
    {"name": "Canada", "code": "CA"},
    {"name": "Cape Verde", "code": "CV"},
    {"name": "Cayman Islands", "code": "KY"},
    {"name": "Central African Republic", "code": "CF"},
    {"name": "Chad", "code": "TD"},
    {"name": "Chile", "code": "CL"},
    {"name": "China", "code": "CN"},
    {"name": "Christmas Island", "code": "CX"},
    {"name": "Cocos (Keeling) Islands", "code": "CC"},
    {"name": "Colombia", "code": "CO"},
    {"name": "Comoros", "code": "KM"},
    {"name": "Congo", "code": "CG"},
    {"name": "Congo, The Democratic Republic of the", "code": "CD"},
    {"name": "Cook Islands", "code": "CK"},
    {"name": "Costa Rica", "code": "CR"},
    {"name": "Cote D'Ivoire", "code": "CI"},
    {"name": "Croatia", "code": "HR"},
    {"name": "Cuba", "code": "CU"},
    {"name": "Cyprus", "code": "CY"},
    {"name": "Czech Republic", "code": "CZ"},
    {"name": "Denmark", "code": "DK"},
    {"name": "Djibouti", "code": "DJ"},
    {"name": "Dominica", "code": "DM"},
    {"name": "Dominican Republic", "code": "DO"},
    {"name": "Ecuador", "code": "EC"},
    {"name": "Egypt", "code": "EG"},
    {"name": "El Salvador", "code": "SV"},
    {"name": "Equatorial Guinea", "code": "GQ"},
    {"name": "Eritrea", "code": "ER"},
    {"name": "Estonia", "code": "EE"},
    {"name": "Ethiopia", "code": "ET"},
    {"name": "Falkland Islands (Malvinas)", "code": "FK"},
    {"name": "Faroe Islands", "code": "FO"},
    {"name": "Fiji", "code": "FJ"},
    {"name": "Finland", "code": "FI"},
    {"name": "France", "code": "FR"},
    {"name": "French Guiana", "code": "GF"},
    {"name": "French Polynesia", "code": "PF"},
    {"name": "French Southern Territories", "code": "TF"},
    {"name": "Gabon", "code": "GA"},
    {"name": "Gambia", "code": "GM"},
    {"name": "Georgia", "code": "GE"},
    {"name": "Germany", "code": "DE"},
    {"name": "Ghana", "code": "GH"},
    {"name": "Gibraltar", "code": "GI"},
    {"name": "Greece", "code": "GR"},
    {"name": "Greenland", "code": "GL"},
    {"name": "Grenada", "code": "GD"},
    {"name": "Guadeloupe", "code": "GP"},
    {"name": "Guam", "code": "GU"},
    {"name": "Guatemala", "code": "GT"},
    {"name": "Guernsey", "code": "GG"},
    {"name": "Guinea", "code": "GN"},
    {"name": "Guinea-Bissau", "code": "GW"},
    {"name": "Guyana", "code": "GY"},
    {"name": "Haiti", "code": "HT"},
    {"name": "Heard Island and Mcdonald Islands", "code": "HM"},
    {"name": "Holy See (Vatican City State)", "code": "VA"},
    {"name": "Honduras", "code": "HN"},
    {"name": "Hong Kong", "code": "HK"},
    {"name": "Hungary", "code": "HU"},
    {"name": "Iceland", "code": "IS"},
    {"name": "India", "code": "IN"},
    {"name": "Indonesia", "code": "ID"},
    {"name": "Iran, Islamic Republic Of", "code": "IR"},
    {"name": "Iraq", "code": "IQ"},
    {"name": "Ireland", "code": "IE"},
    {"name": "Isle of Man", "code": "IM"},
    {"name": "Israel", "code": "IL"},
    {"name": "Italy", "code": "IT"},
    {"name": "Jamaica", "code": "JM"},
    {"name": "Japan", "code": "JP"},
    {"name": "Jersey", "code": "JE"},
    {"name": "Jordan", "code": "JO"},
    {"name": "Kazakhstan", "code": "KZ"},
    {"name": "Kenya", "code": "KE"},
    {"name": "Kiribati", "code": "KI"},
    {"name": "Korea, Democratic People's Republic of", "code": "KP"},
    {"name": "Korea, Republic of", "code": "KR"},
    {"name": "Kuwait", "code": "KW"},
    {"name": "Kyrgyzstan", "code": "KG"},
    {"name": "Lao People'S Democratic Republic", "code": "LA"},
    {"name": "Latvia", "code": "LV"},
    {"name": "Lebanon", "code": "LB"},
    {"name": "Lesotho", "code": "LS"},
    {"name": "Liberia", "code": "LR"},
    {"name": "Libyan Arab Jamahiriya", "code": "LY"},
    {"name": "Liechtenstein", "code": "LI"},
    {"name": "Lithuania", "code": "LT"},
    {"name": "Luxembourg", "code": "LU"},
    {"name": "Macao", "code": "MO"},
    {"name": "Macedonia, The Former Yugoslav Republic of", "code": "MK"},
    {"name": "Madagascar", "code": "MG"},
    {"name": "Malawi", "code": "MW"},
    {"name": "Malaysia", "code": "MY"},
    {"name": "Maldives", "code": "MV"},
    {"name": "Mali", "code": "ML"},
    {"name": "Malta", "code": "MT"},
    {"name": "Marshall Islands", "code": "MH"},
    {"name": "Martinique", "code": "MQ"},
    {"name": "Mauritania", "code": "MR"},
    {"name": "Mauritius", "code": "MU"},
    {"name": "Mayotte", "code": "YT"},
    {"name": "Mexico", "code": "MX"},
    {"name": "Micronesia, Federated States of", "code": "FM"},
    {"name": "Moldova, Republic of", "code": "MD"},
    {"name": "Monaco", "code": "MC"},
    {"name": "Mongolia", "code": "MN"},
    {"name": "Montserrat", "code": "MS"},
    {"name": "Morocco", "code": "MA"},
    {"name": "Mozambique", "code": "MZ"},
    {"name": "Myanmar", "code": "MM"},
    {"name": "Namibia", "code": "NA"},
    {"name": "Nauru", "code": "NR"},
    {"name": "Nepal", "code": "NP"},
    {"name": "Netherlands", "code": "NL"},
    {"name": "Netherlands Antilles", "code": "AN"},
    {"name": "New Caledonia", "code": "NC"},
    {"name": "New Zealand", "code": "NZ"},
    {"name": "Nicaragua", "code": "NI"},
    {"name": "Niger", "code": "NE"},
    {"name": "Nigeria", "code": "NG"},
    {"name": "Niue", "code": "NU"},
    {"name": "Norfolk Island", "code": "NF"},
    {"name": "Northern Mariana Islands", "code": "MP"},
    {"name": "Norway", "code": "NO"},
    {"name": "Oman", "code": "OM"},
    {"name": "Pakistan", "code": "PK"},
    {"name": "Palau", "code": "PW"},
    {"name": "Palestinian Territory, Occupied", "code": "PS"},
    {"name": "Panama", "code": "PA"},
    {"name": "Papua New Guinea", "code": "PG"},
    {"name": "Paraguay", "code": "PY"},
    {"name": "Peru", "code": "PE"},
    {"name": "Philippines", "code": "PH"},
    {"name": "Pitcairn", "code": "PN"},
    {"name": "Poland", "code": "PL"},
    {"name": "Portugal", "code": "PT"},
    {"name": "Puerto Rico", "code": "PR"},
    {"name": "Qatar", "code": "QA"},
    {"name": "Reunion", "code": "RE"},
    {"name": "Romania", "code": "RO"},
    {"name": "Russian Federation", "code": "RU"},
    {"name": "RWANDA", "code": "RW"},
    {"name": "Saint Helena", "code": "SH"},
    {"name": "Saint Kitts and Nevis", "code": "KN"},
    {"name": "Saint Lucia", "code": "LC"},
    {"name": "Saint Pierre and Miquelon", "code": "PM"},
    {"name": "Saint Vincent and the Grenadines", "code": "VC"},
    {"name": "Samoa", "code": "WS"},
    {"name": "San Marino", "code": "SM"},
    {"name": "Sao Tome and Principe", "code": "ST"},
    {"name": "Saudi Arabia", "code": "SA"},
    {"name": "Senegal", "code": "SN"},
    {"name": "Serbia and Montenegro", "code": "CS"},
    {"name": "Seychelles", "code": "SC"},
    {"name": "Sierra Leone", "code": "SL"},
    {"name": "Singapore", "code": "SG"},
    {"name": "Slovakia", "code": "SK"},
    {"name": "Slovenia", "code": "SI"},
    {"name": "Solomon Islands", "code": "SB"},
    {"name": "Somalia", "code": "SO"},
    {"name": "South Africa", "code": "ZA"},
    {"name": "South Georgia and the South Sandwich Islands", "code": "GS"},
    {"name": "Spain", "code": "ES"},
    {"name": "Sri Lanka", "code": "LK"},
    {"name": "Sudan", "code": "SD"},
    {"name": "Suriname", "code": "SR"},
    {"name": "Svalbard and Jan Mayen", "code": "SJ"},
    {"name": "Swaziland", "code": "SZ"},
    {"name": "Sweden", "code": "SE"},
    {"name": "Switzerland", "code": "CH"},
    {"name": "Syrian Arab Republic", "code": "SY"},
    {"name": "Taiwan", "code": "TW"},
    {"name": "Tajikistan", "code": "TJ"},
    {"name": "Tanzania, United Republic of", "code": "TZ"},
    {"name": "Thailand", "code": "TH"},
    {"name": "Timor-Leste", "code": "TL"},
    {"name": "Togo", "code": "TG"},
    {"name": "Tokelau", "code": "TK"},
    {"name": "Tonga", "code": "TO"},
    {"name": "Trinidad and Tobago", "code": "TT"},
    {"name": "Tunisia", "code": "TN"},
    {"name": "Turkey", "code": "TR"},
    {"name": "Turkmenistan", "code": "TM"},
    {"name": "Turks and Caicos Islands", "code": "TC"},
    {"name": "Tuvalu", "code": "TV"},
    {"name": "Uganda", "code": "UG"},
    {"name": "Ukraine", "code": "UA"},
    {"name": "United Arab Emirates", "code": "AE"},
    {"name": "United Kingdom", "code": "GB"},
    {"name": "United States Minor Outlying Islands", "code": "UM"},
    {"name": "Uruguay", "code": "UY"},
    {"name": "Uzbekistan", "code": "UZ"},
    {"name": "Vanuatu", "code": "VU"},
    {"name": "Venezuela", "code": "VE"},
    {"name": "Viet Nam", "code": "VN"},
    {"name": "Virgin Islands, British", "code": "VG"},
    {"name": "Virgin Islands, U.S.", "code": "VI"},
    {"name": "Wallis and Futuna", "code": "WF"},
    {"name": "Western Sahara", "code": "EH"},
    {"name": "Yemen", "code": "YE"},
    {"name": "Zambia", "code": "ZM"},
    {"name": "Zimbabwe", "code": "ZW"}
], select = document.getElementById('country');

for (country in countries) {
    select.add(new Option(countries[country].name));
}

var ddlCountry = document.getElementById('country');
var ddlStates = document.getElementById('state');
// console.log(selectedCountry);

ddlCountry.onchange = function () {
    var selectedCountry = ddlCountry.options[ddlCountry.selectedIndex].value;
    if (selectedCountry == "United States") {


        var states = [
            {
                "name": "Alabama",
                "abbreviation": "AL"
            },
            {
                "name": "Alaska",
                "abbreviation": "AK"
            },
            {
                "name": "American Samoa",
                "abbreviation": "AS"
            },
            {
                "name": "Arizona",
                "abbreviation": "AZ"
            },
            {
                "name": "Arkansas",
                "abbreviation": "AR"
            },
            {
                "name": "California",
                "abbreviation": "CA"
            },
            {
                "name": "Colorado",
                "abbreviation": "CO"
            },
            {
                "name": "Connecticut",
                "abbreviation": "CT"
            },
            {
                "name": "Delaware",
                "abbreviation": "DE"
            },
            {
                "name": "District Of Columbia",
                "abbreviation": "DC"
            },
            {
                "name": "Federated States Of Micronesia",
                "abbreviation": "FM"
            },
            {
                "name": "Florida",
                "abbreviation": "FL"
            },
            {
                "name": "Georgia",
                "abbreviation": "GA"
            },
            {
                "name": "Guam Gu",
                "abbreviation": "GU"
            },
            {
                "name": "Hawaii",
                "abbreviation": "HI"
            },
            {
                "name": "Idaho",
                "abbreviation": "ID"
            },
            {
                "name": "Illinois",
                "abbreviation": "IL"
            },
            {
                "name": "Indiana",
                "abbreviation": "IN"
            },
            {
                "name": "Iowa",
                "abbreviation": "IA"
            },
            {
                "name": "Kansas",
                "abbreviation": "KS"
            },
            {
                "name": "Kentucky",
                "abbreviation": "KY"
            },
            {
                "name": "Louisiana",
                "abbreviation": "LA"
            },
            {
                "name": "Maine",
                "abbreviation": "ME"
            },
            {
                "name": "Marshall Islands",
                "abbreviation": "MH"
            },
            {
                "name": "Maryland",
                "abbreviation": "MD"
            },
            {
                "name": "Massachusetts",
                "abbreviation": "MA"
            },
            {
                "name": "Michigan",
                "abbreviation": "MI"
            },
            {
                "name": "Minnesota",
                "abbreviation": "MN"
            },
            {
                "name": "Mississippi",
                "abbreviation": "MS"
            },
            {
                "name": "Missouri",
                "abbreviation": "MO"
            },
            {
                "name": "Montana",
                "abbreviation": "MT"
            },
            {
                "name": "Nebraska",
                "abbreviation": "NE"
            },
            {
                "name": "Nevada",
                "abbreviation": "NV"
            },
            {
                "name": "New Hampshire",
                "abbreviation": "NH"
            },
            {
                "name": "New Jersey",
                "abbreviation": "NJ"
            },
            {
                "name": "New Mexico",
                "abbreviation": "NM"
            },
            {
                "name": "New York",
                "abbreviation": "NY"
            },
            {
                "name": "North Carolina",
                "abbreviation": "NC"
            },
            {
                "name": "North Dakota",
                "abbreviation": "ND"
            },
            {
                "name": "Northern Mariana Islands",
                "abbreviation": "MP"
            },
            {
                "name": "Ohio",
                "abbreviation": "OH"
            },
            {
                "name": "Oklahoma",
                "abbreviation": "OK"
            },
            {
                "name": "Oregon",
                "abbreviation": "OR"
            },
            {
                "name": "Palau",
                "abbreviation": "PW"
            },
            {
                "name": "Pennsylvania",
                "abbreviation": "PA"
            },
            {
                "name": "Puerto Rico",
                "abbreviation": "PR"
            },
            {
                "name": "Rhode Island",
                "abbreviation": "RI"
            },
            {
                "name": "South Carolina",
                "abbreviation": "SC"
            },
            {
                "name": "South Dakota",
                "abbreviation": "SD"
            },
            {
                "name": "Tennessee",
                "abbreviation": "TN"
            },
            {
                "name": "Texas",
                "abbreviation": "TX"
            },
            {
                "name": "Utah",
                "abbreviation": "UT"
            },
            {
                "name": "Vermont",
                "abbreviation": "VT"
            },
            {
                "name": "Virgin Islands",
                "abbreviation": "VI"
            },
            {
                "name": "Virginia",
                "abbreviation": "VA"
            },
            {
                "name": "Washington",
                "abbreviation": "WA"
            },
            {
                "name": "West Virginia",
                "abbreviation": "WV"
            },
            {
                "name": "Wisconsin",
                "abbreviation": "WI"
            },
            {
                "name": "Wyoming",
                "abbreviation": "WY"
            }
        ], select = document.getElementById('state');


        for (var s in states) {
            select.add(new Option(states[s].name));
        }
    } else {
        ddlStates.add(new Option("Not in USA"));
    }
}


function readURL(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#img').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#imgInp").change(function () {
    readURL(this);
});


//
// //--------time slot---------
//
//
//
//
// var strColorOn = '#c6e7de';
// var strColorOff = '#ffffff';
//
// function GetHexValue(strRGBColor)
// {
//     var aryRGBValues;
//     var strR;
//     var strG;
//     var strB;
//     var strHexValue;
//
//     strRGBColor = strRGBColor.replace(/\s*/g, '');
//     strRGBColor = strRGBColor.replace(/rgb\(|\)/g, '');
//     aryRGBValues = strRGBColor.split(',');
//     strR = aryRGBValues[0];
//     strG = aryRGBValues[1];
//     strB = aryRGBValues[2];
//     strHexValue = '#' + RGBtoHex(strR, strG, strB)
//     return strHexValue.toLowerCase();
// }
//
// function RGBtoHex(strR, strG, strB)
// {
//     var intR = strR * 1;
//     var intG = strG * 1;
//     var intB = strB * 1;
//     return intR.toString(16) + intG.toString(16) + intB.toString(16)
// }
//
// function ToggleTimeslot(tdTimeslot)
// {
//     var strBackgroundColor;
//
//     if (tdTimeslot.style.backgroundColor == 'undefined' || tdTimeslot.style.backgroundColor == 'null' || tdTimeslot.style.backgroundColor == '')
//     {
//         tdTimeslot.style.backgroundColor = strColorOn;
//         return;
//     }
//     strBackgroundColor = tdTimeslot.style.backgroundColor;
//     if (strBackgroundColor.substr(0,1) != '#')
//     {
//         strBackgroundColor = GetHexValue(strBackgroundColor);
//     }
//     if (strBackgroundColor == strColorOff)
//     {
//         tdTimeslot.style.backgroundColor = strColorOn;
//     }
//     else
//     {
//         tdTimeslot.style.backgroundColor = strColorOff;
//     }
// }
//
// function GetTimeSlotValue(intTimeslot, strStartOrEnd)
// {
//     var strTimeslot;
//
//     switch(intTimeslot)
//     {
//         case 1:
//             if (strStartOrEnd == 'start')
//             {
//                 strTimeslot = '9:00';
//             }
//             else
//             {
//                 strTimeslot = '9:30';
//             }
//             break;
//         case 2:
//             if (strStartOrEnd == 'start')
//             {
//                 strTimeslot = '9:30';
//             }
//             else
//             {
//                 strTimeslot = '10:00';
//             }
//             break;
//         case 3:
//             if (strStartOrEnd == 'start')
//             {
//                 strTimeslot = '10:00';
//             }
//             else
//             {
//                 strTimeslot = '10:30';
//             }
//             break;
//         case 4:
//             if (strStartOrEnd == 'start')
//             {
//                 strTimeslot = '10:30';
//             }
//             else
//             {
//                 strTimeslot = '11:00';
//             }
//             break;
//         case 5:
//             if (strStartOrEnd == 'start')
//             {
//                 strTimeslot = '11:00';
//             }
//             else
//             {
//                 strTimeslot = '11:30';
//             }
//             break;
//         case 6:
//             if (strStartOrEnd == 'start')
//             {
//                 strTimeslot = '11:30';
//             }
//             else
//             {
//                 strTimeslot = '12:00';
//             }
//             break;
//         case 7:
//             if (strStartOrEnd == 'start')
//             {
//                 strTimeslot = '12:00';
//             }
//             else
//             {
//                 strTimeslot = '12:30';
//             }
//             break;
//         case 8:
//             if (strStartOrEnd == 'start')
//             {
//                 strTimeslot = '12:30';
//             }
//             else
//             {
//                 strTimeslot = '1:00';
//             }
//             break;
//         case 9:
//             if (strStartOrEnd == 'start')
//             {
//                 strTimeslot = '1:00';
//             }
//             else
//             {
//                 strTimeslot = '1:30';
//             }
//             break;
//         case 10:
//             if (strStartOrEnd == 'start')
//             {
//                 strTimeslot = '1:30';
//             }
//             else
//             {
//                 strTimeslot = '2:00';
//             }
//             break;
//         case 11:
//             if (strStartOrEnd == 'start')
//             {
//                 strTimeslot = '2:00';
//             }
//             else
//             {
//                 strTimeslot = '2:30';
//             }
//             break;
//         case 12:
//             if (strStartOrEnd == 'start')
//             {
//                 strTimeslot = '2:30';
//             }
//             else
//             {
//                 strTimeslot = '3:00';
//             }
//             break;
//         case 13:
//             if (strStartOrEnd == 'start')
//             {
//                 strTimeslot = '3:00';
//             }
//             else
//             {
//                 strTimeslot = '3:30';
//             }
//             break;
//         case 14:
//             if (strStartOrEnd == 'start')
//             {
//                 strTimeslot = '3:30';
//             }
//             else
//             {
//                 strTimeslot = '4:00';
//             }
//             break;
//         case 15:
//             if (strStartOrEnd == 'start')
//             {
//                 strTimeslot = '4:00';
//             }
//             else
//             {
//                 strTimeslot = '4:30';
//             }
//             break;
//         case 16:
//             if (strStartOrEnd == 'start')
//             {
//                 strTimeslot = '4:30';
//             }
//             else
//             {
//                 strTimeslot = '5:00';
//             }
//             break;
//         default:
//             strTimeslot = '';
//     }
//     return strTimeslot;
// }
//
// function GetSelectedTimeslots(strDay)
// {
//     var strTimeslots = '';
//     var intLastSelectedTimeslot = -1;
//     var strBackgroundColor;
//     var intCounter;
//     var intNumOfTimeslots = 16;
//
//     intCounter = 1;
//     while (intCounter <= intNumOfTimeslots)
//     {
//         strBackgroundColor = document.getElementById('td' + strDay + intCounter).style.backgroundColor;
//         if (strBackgroundColor.substr(0,1) != '#')
//         {
//             strBackgroundColor = GetHexValue(strBackgroundColor);
//         }
//         if (strBackgroundColor == strColorOn)
//         {
//             if (intCounter != (intLastSelectedTimeslot + 1))
//             {
//                 strTimeslots = strTimeslots + GetTimeSlotValue(intCounter, 'start');
//             }
//             intLastSelectedTimeslot = intCounter;
//         }
//         else
//         {
//             if (intCounter == (intLastSelectedTimeslot + 1))
//             {
//                 strTimeslots = strTimeslots + '-' + GetTimeSlotValue(intLastSelectedTimeslot, 'end') + ', ';
//             }
//         }
//         intCounter++
//     }
//     if (intLastSelectedTimeslot == intNumOfTimeslots)
//     {
//         strTimeslots = strTimeslots + '-' + GetTimeSlotValue(intLastSelectedTimeslot, 'end') + ', ';
//     }
//     strTimeslots = strTimeslots.substr(0, (strTimeslots.length - 2));
//     if (strTimeslots == '-')
//     {
//         strTimeslots = '';
//     }
//     return strTimeslots;
// }
//
// function ViewSelectedTimeslots()
// {
//     var strMessage = '';
//
//     strMessage = 'The following timeslots have been selected:' + '\n\n';
//     strMessage = strMessage + 'Mon: ' + GetSelectedTimeslots('Mon') + '\n';
//     strMessage = strMessage + 'Tue: ' + GetSelectedTimeslots('Tue') + '\n';
//     strMessage = strMessage + 'Wed: ' + GetSelectedTimeslots('Wed') + '\n';
//     strMessage = strMessage + 'Thu: ' + GetSelectedTimeslots('Thu') + '\n';
//     strMessage = strMessage + 'Fri: ' + GetSelectedTimeslots('Fri');
//     alert(strMessage);
// }
