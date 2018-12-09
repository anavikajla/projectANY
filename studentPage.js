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

//
//
//     var countries = [
//         {"name": "Afghanistan", "code": "AF"},
//         {"name": "Åland Islands", "code": "AX"},
// ], select = document.getElementById( 'country' );
//
//     for(country in countries ) {
//         select.add( new Option(countries[country].name));
//     }