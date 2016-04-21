var data = '%data%';
var $header = $('#header');
var $education = $('#education');

var bio = {
	'name' : 'Diosa Taylor',
	'role' : 'Front-End Developer',
	'contacts' : {
		'mobile' : '0684169696', 
		'email' : 'diosataylor@yahoo.com',
		'github' : 'diosat91',
		'blogname' : 'From 50mm Away',
		'blog' : 'http://from50mmaway.blogspot.com',
		'location' : 'Amsterdam, Netherlands' 
		}, 
	'pic' : 'images/dio.png',
	'welcomeMessage' : "I make front-end interfaces. They're responsive like cats to cucumbers and beautiful like Tom Hardy in every Tom Hardy film.",
	'skills' : ['HTML', 'CSS', 'JS', 'Python', 'Photography', 'Writing', 'Mathematics'],
	display: function() {
		var formattedName = HTMLheaderName.replace(data, bio.name);
		var formattedRole = HTMLheaderRole.replace(data, bio.role);
		$header.prepend(formattedName + formattedRole);

		var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
		var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
		var formattedBlog = HTMLblog.replace('%blog%', bio.contacts.blog).replace('%blogname%', bio.contacts.blogname);
		var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
		var formattedBioPic = HTMLbioPic.replace(data, bio.pic);
		var formattedWelcomeMessage = HTMLwelcomeMessage.replace(data, bio.welcomeMessage);
		
		$('#topContacts').append(formattedMobile + formattedEmail + formattedGithub + formattedBlog + formattedLocation);
		$('#footerContacts').append(formattedMobile + formattedEmail + formattedGithub + formattedBlog + formattedLocation);
		$header.append(formattedBioPic + formattedWelcomeMessage);
		if (bio.skills.length) {
			$header.append(HTMLskillsStart);
		};
		for (var i = 0; i < bio.skills.length; i++) {
			var formattedSkill = HTMLskills.replace(data, bio.skills[i]);
			$('#skills').append(formattedSkill);
		};
	}
};

bio.display();

var work = {
	'jobs' : [
		{
			'employer': 'OnMarc',
			'title': 'Developer',
			'location': 'Houten, Netherlands',
			'dates': 'Feb 2016 - Present',
			'description': 'Responsibilities include building and maintaining front-end applications, designing websites from scratch and occasionally working with databases and helping maintain the back-end of existing products.'
		},
		{
			'employer': 'Clock Off',
			'title': 'Marketing Intern',
			'location': 'Dubai, UAE',
			'dates': 'March - May 2015',
			'description': "Worked as an intern for start-up website clockoff.com, a search engine for nightlife events and venues in Dubai. Produced a market analysis report detailing the site's market position, competition analysis and research into consumer behaviour. Aided in contacting venues and setting up their accounts and profile pages on the site. Planned a marketing campaign which included designing a range of promotional material and infographics on Photoshop and scheduling social media posts on Hootsuite. Wrote articles for the online magazine section of the site including reviews, how-to pieces and op-eds on Dubai expat culture."
		},
		{
			'employer': 'EF Education First',
			'title': 'ESL Teacher',
			'location': 'Ningbo, China',
			'dates': 'Feb 2014 - 2015',
			'description': 'Taught adults in a range of class settings, from six person Face-to-Face classes to Workshops and Life Clubs of up to twenty-five students. Detailed lesson planning and individual feedback were conducted to help students improve and enjoy classes. Was involved in teacher training and mentoring as well as extensive photography and video production for marketing and promotion purposes. Achieved a Band 4 certification (95%-100%) in the Cambridge English TKT Module One examination.'
		},
		{
			'employer': 'IFDS',
			'title': 'IT Intern',
			'location': 'Basildon, UK',
			'dates': 'July - Aug 2012',
			'description': 'Worked in UK & Thailand offices on a number of projects including the development of a financial app where I lead the design team and the integration of an automated web application testing tool into the IT department. Received training in financial crime prevention, business awareness and an overview of the financial services industry. Presentations to board of directors and colleagues improved communication skills.'
		}
	],
	display: function() {
		for (var j = 0; j < work.jobs.length; j++) {
			$('#workExperience').append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[j].employer);
			var formattedTitle = HTMLworkTitle.replace(data, work.jobs[j].title);
			var formattedLocation = HTMLworkLocation.replace(data, work.jobs[j].location);
			var formattedDates = HTMLworkDates.replace(data, work.jobs[j].dates);
			var formattedDescription = HTMLworkDescription.replace(data, work.jobs[j].description);
			$('.work-entry:last').append(formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription);
		};
	}
};

work.display();

var projects = {
	'projects' : [
		{
			'title': 'Portfolio Site',
			'dates': 'April 2016',
			'description': 'A responsive portfolio site with examples of my work and accompanying links.',
			'images': ['images/port.png']
		}
	],
	display: function() {
		for (var i = 0; i < projects.projects.length; i++) {
			$('#projects').append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace(data, projects.projects[i].title);
			var formattedDates = HTMLprojectDates.replace(data, projects.projects[i].dates);
			var formattedDescription = HTMLprojectDescription.replace(data, projects.projects[i].description);
			var formattedImage = HTMLprojectImage.replace(data, projects.projects[i].images);
			$('.project-entry:last').append(formattedTitle + formattedDates + formattedDescription + formattedImage);
		};
	}
};

projects.display();

var education = {
	'schools' : [
		{
			'name': 'Cardiff University',
			'url': 'http://www.cardiff.ac.uk/',
			'degree': 'Bsc',
			'dates': '2013',
			'location': 'Cardiff, UK',
			'majors': ['Maths']
		},
		{
			'name': 'Leeds College of Art',
			'url': 'http://www.leeds-art.ac.uk/',
			'degree': 'Art Foundation Diploma',
			'dates': '2010',
			'location': 'Leeds, UK',
			'majors': ['Art']
		}
	],
	'onlineCourses' : [
		{
			'title': 'Intro to Programming Nanodegree',
			'school': 'Udacity',
			'date': 'Jan - March 2016',
			'url': 'https://www.udacity.com/course/intro-to-programming-nanodegree--nd000'
		},
		{
			'title': 'Front-End Web Developer Nanodegree',
			'school': 'Udacity',
			'date': 'March 2016 - Present',
			'url': 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
		}
	],
	display: function() {
		for (var k = 0; k < education.schools.length; k++) {
			$education.append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace(data, education.schools[k].name).replace('%url%', education.schools[k].url);
			var formattedDegree = HTMLschoolDegree.replace(data, education.schools[k].degree);
			var formattedSchoolDates = HTMLschoolDates.replace(data, education.schools[k].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace(data, education.schools[k].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace(data, education.schools[k].majors);
			$('.education-entry:last').append(formattedSchoolName + formattedDegree + formattedSchoolDates + formattedSchoolLocation + formattedSchoolMajor);
		};
		if (education.onlineCourses.length > 0) {
			$education.append(HTMLonlineClasses);
		};
		for (var g = 0; g < education.onlineCourses.length; g++) {
			$education.append(HTMLschoolStart);
			var formattedOnlineTitle = HTMLonlineTitle.replace(data, education.onlineCourses[g].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace(data, education.onlineCourses[g].school);
			var formattedOnlineDates = HTMLonlineDates.replace(data, education.onlineCourses[g].date);
			var formattedOnlineURL = HTMLonlineURL.replace(data, education.onlineCourses[g].url);
			$('.education-entry:last').append(formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineURL);
		};
	}
};

education.display();

$('#main').append(internationalizeButton);

function inName (name) {
	var lowCase = name.toLowerCase();
    var firstCap = lowCase[0].toUpperCase() + lowCase.slice(1);
    var secCap = firstCap.search(' ') + 1;
    var rest = firstCap.slice(secCap);
    var finalName = firstCap.slice(0, (secCap)) + rest.toUpperCase();
    console.log(finalName);
    return finalName;
}

$('#mapDiv').append(googleMap);

