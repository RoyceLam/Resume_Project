/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "John",
    "role": "Web developers",
    "contacts": {
        "mobile": "650-555-555",
        "email": "john@gmail.com",
        "github": "johnt",
        "location": "Hong Kong"
    },
    "welcomeMessage": "WELCOME TO MY PROFILE",
    "skills": ["HTML5", "CSS", "Python", "C++"],
    "biopic": "images/fry.jpg",
};

var education = {
    "schools": [{
            "name": "Udacity",
            "location": "Hong Kong",
            "degree": "Nanodegree",
            "majors": ["computer science", "graphic design"],
            "dates": "4/6/2010-9/7/2012",
            "url": "udacity.com"
        },
        {
            "name": "EDx",
            "degree": "Nanodegree",
            "location": "Hong Kong",
            "majors": ["computer science", "business management"],
            "dates": "4/6/2010-9/7/2012",
            "url": "www.udacity.com"
        }
    ],
    "onlineCourses": [{
        "title": "Nanodegree",
        "school": "Edx",
        "dates": "4/6/2010-9/7/2012",
        "url": "www.udacity.com"
    }]
};

var work = {
    "jobs": [{
        "employer": "Hexa6on Limited",
        "title": "IT Manager",
        "location": "Hong Kong",
        "dates": "In progress",
        "description": "check"
    }]
};

var projects = {
    "projects": [{
        "title": "Udacity",
        "dates": "from 2010 to In progress",
        "description": "Hong Kong",
        "images": ["images/197x148.gif"]
    }]
};
bio.display = function() {
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
    $("#topContacts,#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile), HTMLemail.replace("%data%", bio.contacts.email), HTMLgithub.replace("%data%", bio.contacts.github), HTMLlocation.replace("%data%", bio.contacts.location));
    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic), HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    $("#header").append(HTMLskillsStart);
    for (var skillcount = 0; skillcount < bio.skills.length; skillcount++) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[skillcount]));
    }
};

work.display = function() {
    $("#workExperience").append(HTMLworkStart);
    for (var job = 0; job < work.jobs.length; job++) {
        var formmattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formmattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formmattedEmployeTitle = formmattedEmployer + formmattedTitle;
        var formmattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formmattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formmattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formmattedEmployeTitle, formmattedDates, formmattedLocation, formmattedDescription);
    }
};
projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    for (var project = 0; project < projects.projects.length; project++) {
        var formattedtitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formmattedDescriptions = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        var formattedProjectimage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
        $(".project-entry:last").append(formattedtitle, formattedDates, formmattedDescriptions, formattedProjectimage);
    }
};
education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (var educations = 0; educations < education.schools.length; educations++) {
        var formattedName = HTMLschoolName.replace("%data%", education.schools[educations].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[educations].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[educations].dates);
        var formmattedLocation = HTMLschoolLocation.replace("%data%", education.schools[educations].location);
        var formmattedMajor = HTMLschoolMajor.replace("%data%", education.schools[educations].majors);
        $(".education-entry:last").append(formattedName + formattedDegree, formattedDates, formmattedLocation, formmattedMajor);
    }
    $(".education-entry:last").append(HTMLonlineClasses);
    for (var onlineCourse = 0; onlineCourse < education.onlineCourses.length; onlineCourse++) {
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.onlineCourses[onlineCourse].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
        var formmattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
        $(".education-entry:last").append(formattedSchoolName, formattedSchool, formattedOnlineDates, formmattedURL);
    }
};
$("#mapDiv").append(googleMap);
bio.display();
work.display();
projects.display();
education.display();
