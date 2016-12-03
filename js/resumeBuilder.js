/*
 *  This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
  "name": "Hyunju",
  "role": "Web Developer",
  "contacts": {
    "email": "blackpost38@gmail.com",
    "github": "https://github.com/blackpost38",
    "blog": "https://blackpost38.github.io"
  },
  "welcomeMsg": "Hello, world!",
  "skills": ["JavaScript", "HTML", "CSS", "Python", "Hand-drip Coffee"],
  "bioPic": "images/me.png"
};

var works = {
  "jobs": [
    {
      "title": "Software Engineer",
      "employer": "Solidware",
      "dates": "2016.04 ~ current",
      "location": "Seoul, Korea",
      "description": "developed the web application for machine learning solution"
    },
    {
      "title": "Front-end Developer",
      "employer": "Yello Travel",
      "dates": "2015.04 ~ 2016.03",
      "location": "Seoul, Korea",
      "description": "developed the total travel agency platform"
    },
    {
      "title": "Web Developer",
      "employer": "Deawoo Information system",
      "dates": "2014.01 ~ 2015.03",
      "location": "Seoul, Korea",
      "description": "developed and maintained ERP system of the company"
    }
  ]
};

var education = {
  "schools": [
    {
      "name": "Chungnam University",
      "degree": "BA",
      "dates": "2007.02 ~ 2013.02",
      "location": "Deajeon, Korea",
      "major": "Consumer Science & Statistics"
    }
  ],
  "onlineCourses": [
    {
      "title": "JavaScript Basics",
      "school": "Udacity",
      "dates": "2016",
      "url": "https://classroom.udacity.com/courses/ud804"
    }
  ]
};

var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedHeaderRole);
$("#header").prepend(formattedHeaderName);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);
var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
$("#topContacts").append(formattedBlog);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  for (var skillIndex in bio.skills) {
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[skillIndex]);
    $("#skills").append(formattedSkills);
  }
}

function displayWork() {
  var jobs = works.jobs;
  for (var jobIndex in jobs) {
    var currentJob = jobs[jobIndex];
    $("#workExperience").append(HTMLworkStart);

    var lastWorkEntry = $(".work-entry").last();

    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", currentJob.employer);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", currentJob.title);
    lastWorkEntry.append(formattedWorkEmployer + formattedWorkTitle);

    var formattedWorkDates = HTMLworkDates.replace("%data%", currentJob.dates);
    lastWorkEntry.append(formattedWorkDates);

    var formattedWorkLocation = HTMLworkLocation.replace("%data%", currentJob.location);
    lastWorkEntry.append(formattedWorkLocation);

    var formattedWorkDescription = HTMLworkDescription.replace("%data%", currentJob.description);
    lastWorkEntry.append(formattedWorkDescription);
  }
}

displayWork();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x, y);
})

function locationizer (works) {
  var jobs = works.jobs;
  var locations = [];
  for (var index in jobs) {
    var currentJob = jobs[index];
    locations.push(currentJob.location);
  }

  return locations;
}

console.log(locationizer(works));

$("#main").append(internationalizeButton);

function inName (name) {
  var names = name.trim().split(' ');
  names[0] = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();
  names[1] = names[1].toUpperCase();
  return names.join(' ');
}

console.log(inName("Sebastian thrun") === "Sebastian THRUN");

var projects = {
  items: [
    {
      title: "DAVinCI LABS",
      dates: "2016.04 ~ Current",
      description: "Built a web application called DAVinCI LABS that is machine learning solution by React, GraphQL and NodeJS with 3 members",
      image: "images/project3.png"
    },
    {
      title: "Total Travel Agency Platform",
      dates: "2015.04 ~ 2016.03",
      description: "Built an admin page application by PHP, jQuery and Bootstrap with 4 members.",
      image: "images/project2.png"
    },
    {
      title: "ERP System maintenance",
      dates: "2014.01 ~ 2015.03",
      description: "Maintained purchasing system and Man-Hour management system. "
        + "Built the Man-Hour input system for mobile by Java, Oracle to improve accessibility "
        + "Integrated Man-Hour management system and Man-hour prediction system to improve HR team performance ",
      image: "images/project1.png"
    }
  ]
}

