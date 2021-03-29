/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji';

const illustration = {
	animated: true, // set to false to use static SVG
};

const greeting = {
	username: 'Natalia Stewart',
	title: "Hi, I'm Natalia",
	subTitle: emoji(
		'A passionate Full Stack Software Developer 🚀 having an experience of designing and building Web applications with JavaScript / Reactjs / Nodejs and many other libraries and frameworks.'
	),
	resumeLink:
		'https://docs.google.com/document/d/1rzBB377vlhXJYGihEc30htOl5yi99Fx28xSxDSUniAw/edit?usp=sharing',
	displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
	github: 'https://github.com/nataliastewart',
	// linkedin: "https://www.linkedin.com/in/",
	gmail: 'natmirandac@gmail.com',
	// gitlab: "https://gitlab.com/",
	facebook: 'https://www.facebook.com/nataliasstewart/',
	// medium: 'https://medium.com/@davidrakosi',
	// stackoverflow: 'https://stackoverflow.com/users/13263979/drakosi',
	instagram: 'https://www.instagram.com/nataliacoding/',
	// twitter: 'https://twitter.com/davidrakosi_',
	display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
	title: 'What I do',
	subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
	skills: [
		emoji(
			'⚡ Develop highly interactive Front end / User Interfaces for your web applications'
		),
		emoji('⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks'),
		emoji(
			'⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean'
		),
	],

	/* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

	softwareSkills: [
		{
			skillName: 'html-5',
			fontAwesomeClassname: 'fab fa-html5',
		},
		{
			skillName: 'css3',
			fontAwesomeClassname: 'fab fa-css3-alt',
		},
		{
			skillName: 'sass',
			fontAwesomeClassname: 'fab fa-sass',
		},
		{
			skillName: 'JavaScript',
			fontAwesomeClassname: 'fab fa-js',
		},
		{
			skillName: 'reactjs',
			fontAwesomeClassname: 'fab fa-react',
		},
		{
			skillName: 'nodejs',
			fontAwesomeClassname: 'fab fa-node',
		},
		// {
		// 	skillName: 'swift',
		// 	fontAwesomeClassname: 'fab fa-swift',
		// },
		{
			skillName: 'npm',
			fontAwesomeClassname: 'fab fa-npm',
		},
		{
			skillName: 'sql-database',
			fontAwesomeClassname: 'fas fa-database',
		},
		{
			skillName: 'firebase',
			fontAwesomeClassname: 'fas fa-fire',
		},
	],
	display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
	display: false, // Set false to hide this section, defaults to true
	schools: [
		{
			schoolName: 'Harvard University',
			logo: require('./assets/images/harvardLogo.png'),
			subHeader: 'Master of Science in Computer Science',
			duration: 'September 2017 - April 2019',
			desc: 'Participated in the research of XXX and published 3 papers.',
			descBullets: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit'],
		},
		{
			schoolName: 'Stanford University',
			logo: require('./assets/images/stanfordLogo.png'),
			subHeader: 'Bachelor of Science in Computer Science',
			duration: 'September 2013 - April 2017',
			desc:
				'Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...',
			descBullets: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit'],
		},
	],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
	viewSkillBars: true, //Set it to true to show Proficiency Section
	experience: [
		{
			Stack: 'Frontend / Design', //Insert stack or technology you have experience in
			progressPercentage: '90%', //Insert relative proficiency in percentage
		},
		{
			Stack: 'Backend',
			progressPercentage: '70%',
		},
		{
			Stack: 'Programming',
			progressPercentage: '90%',
		},
	],
	displayCodersrank: true, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
	display: true, //Set it to true to show workExperiences Section
	experience: [
		{
			role: 'Web Developer Mentor',
			company: 'Lambda School',
			companylogo: require('./assets/images/LambdaLogo.png'),
			date: 'October 2020 – December 2020',
			desc: 'Changing lives of developers one line of code at a time.',
			descBullets: [
				'Providing support and guidance to student mentee in one-on-one sessions two times per week.',
				'Sharing industry insights to help mentee become a highly qualified web developer candidate.',
				'Custom building applications',
				'Coaching',
				'Project Leader',
			],
		},
		// {
		// 	role: 'Product Owner (PSD2)',
		// 	company: 'Erste Bank',
		// 	companylogo: require('./assets/images/ersteLogo.jpg'),
		// 	date: 'July 2019 – September 2020',
		// 	desc:
		// 		'I lead software developers building the API for the bank in order to fulfil the PSD2 regulation requirements.',
		// },
		// {
		// 	role: 'Junior Information Security & Systems Representative',
		// 	company: 'Vodafone',
		// 	companylogo: require('./assets/images/vodafoneLogo.png'),
		// 	date: 'November 2018 – July 2019',
		// 	desc:
		// 		"I've conducted internal audit making sure the organization is compliant with the GDPR.",
		// },
	],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
	githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
	githubUserName: 'drakosi99', // Change to your github username to view your profile in Contact Section.
	showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
	display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
	title: 'Big Projects',
	subtitle: 'SOME OF MY PROJECTS ',
	projects: [
		{
			image: require('./assets/images/Screenshot 2021-03-28 134854.png'),
			projectName: 'Amazon - Clone',
			projectDesc:
				'A full E-commerce experience: the frontend I developed with React and using Context API to manage state. The backend I handled using Firebase to deploy the API url. Also I implemented Payment Process with STRIPE.',
			footerLink: [
				{
					name: 'Visit Website',
					url: 'https://clone-d3b78.web.app/',
				},
				//  you can add extra buttons here.
			],
		},
		{
			image: require('./assets/images/wunderlist.jpg'),
			projectName: 'Wunderlist - Deployed a Web API',
			projectDesc:
				'I was responsible for building and deploying a Web API following the REST architectural pattern using the Express Framework. Node.Js',
			footerLink: [
				{
					name: 'Visit Website',
					url: 'https://wunderlist-app.netlify.app/index.html',
				},
				//  you can add extra buttons here.
			],
		},
		{
			image: require('./assets/images/Todolist.jpg'),
			projectName: 'To-do list',
			projectDesc:
				'A project with CRUD operations that drives the application. An on-boarding process for a new general user. Ability to easily create / setup a to do list item. Ability to easily edit / update / mark items as complete 4. Ability to completely delete an item - React - Redux - JavaScript',
			footerLink: [
				{
					name: 'Visit Website',
					url: 'https://wunderlist3-ui.netlify.app/index.html',
				},
			],
		},
		{
			image: require('./assets/images/BudgetTracker.png'),
			projectName: 'Budget Tracker',
			projectDesc:
				'In this react budget app I built a budget app from scratch, getting data from a real API and saving to local storage - It is a fast and responsive website because I used Bootstrap - front-end open source.',
			footerLink: [
				{
					name: 'Visit Website',
					url: 'https://budget-tracker-phi.vercel.app/',
				},
				//  you can add extra buttons here.
			],
		},
	],
	display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
	title: emoji('Achievements And Certifications 🏆 '),
	subtitle:
		'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',

	achievementsCards: [
		{
			title: 'Google Code-In Finalist',
			subtitle:
				'First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.',
			image: require('./assets/images/codeInLogo.webp'),
			footerLink: [
				{
					name: 'Certification',
					url: '',
				},
				{
					name: 'Award Letter',
					url: '',
				},
				{
					name: 'Google Code-in Blog',
					url: '',
				},
			],
		},
		{
			title: 'Google Assistant Action',
			subtitle:
				'Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.',
			image: require('./assets/images/googleAssistantLogo.webp'),
			footerLink: [
				{
					name: 'View Google Assistant Action',
					url: '',
				},
			],
		},

		{
			title: 'PWA Web App Developer',
			subtitle: 'Completed Certifcation from SMIT for PWA Web App Development',
			image: require('./assets/images/pwaLogo.webp'),
			footerLink: [
				{ name: 'Certification', url: '' },
				{
					name: 'Final Project',
					url: '',
				},
			],
		},
	],
	display: false, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
	title: 'Blogs',
	subtitle:
		'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',

	blogs: [
		{
			url:
				'https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae',
			title: 'Win a Google Assistant Tshirt and $200 in Google Cloud Credits',
			description:
				'Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?',
		},
		{
			url: 'https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e',
			title: 'Why REACT is The Best?',
			description:
				'React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.',
		},
	],
	display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
	title: 'TALKS',
	subtitle: emoji(''),

	talks: [
		{
			title: '',
			subtitle: '',
			slides_url: '',
			event_url: '',
		},
	],
	display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
	title: emoji('Podcast 🎙️'),
	subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

	// Please Provide with Your Podcast embeded Link
	podcast: [''],
	display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
	title: emoji('Contact Me ☎️'),
	subtitle:
		'Discuss a project or just want to say hi? My Inbox is open for all.',
	number: '(732) 443 6412',
	email_address: 'natmirandac@gmail.com',
};

// Twitter Section

const twitterDetails = {
	userName: 'davidrakosi_', //Replace "twitter" with your twitter username without @
	display: false, // Set true to display this section, defaults to false
};

export {
	illustration,
	greeting,
	socialMediaLinks,
	skillsSection,
	educationInfo,
	techStack,
	workExperiences,
	openSource,
	bigProjects,
	achievementSection,
	blogSection,
	talkSection,
	podcastSection,
	contactInfo,
	twitterDetails,
};
