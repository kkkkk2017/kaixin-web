// // Assuming Navigo and Squirrelly are already included...

// // Create a new router instance
// const router = new Navigo('/');

// // Load and render a Hogan template for a route
// function loadAndRenderTemplate(templateName, data) {
//     fetch(`/templates/${templateName}.mustache`)
//         .then(response => response.text())
//         .then(template => {
//             const compiled = Hogan.compile(template);
//             const rendered = compiled.render(data);
//             document.getElementById("content").innerHTML = rendered;
//         });
// }

// // Define your routes
// router
//     .on('index.html', () => {
//         loadAndRenderTemplate("research", {
//             publications: [
//                 { title: "Examining the Impact of Uncontrolled Variables on Physiological Signals in User Studies for Information Processing Activities", 
//                 authors: "Kaixin Ji, Damiano Spina, Danula Hettiachchi, Flora Salim, and Falk Scholer",
//                 year: "2023",
//                 conference: " Proceedings of the 46th International ACM SIGIR Conference on Research and Development in Information Retrieval.",
//                 link: "https://dl.acm.org/doi/10.1145/3539618.3591981",
//                 abstract: "" },
//                 { title: "Towards Detecting Tonic Information Processing Activities with Physiological Data",
//                 conference: "Adjunct Proceedings of UbiComp/ISWC 2023",
//                 year: "2023",
//                 authors: "Kaixin Ji, Damiano Spina, Danula Hettiachchi, Flora Salim, and Falk Scholer",
//                 link:"",
//                 abstract: "" },
//             ],
//             work:[{
//                 year: 2023,
//                 teach: [
//                     { title: "Guest Lecture", 
//                     company: "RMIT",
//                     // starttime: "2023",
//                     // duration: 0 == 1,
//                     // endtime: "2023",
//                     description: ["Eye-tracking for Online Buyer Behaviours"]
//                 },
//                 ]
//             },
        
//             {
//                 year: 2022,
//                 teach:  [
//                     { title: "Research Assistant", 
//                     company: "RMIT",
//                     starttime: "Sept.",
//                     endtime: "Dec. 2022",
//                     description: ["Project: understanding user’s information disclosure behavioural in emotions and contexts"]
//                 },
//                     { title: "Teaching Assistant", 
//                         company: "RMIT",
//                         starttime: "June",
//                         // duration: 0 == 0,
//                         endtime: "Nov.",
//                         description: ["Building IT System (IT-product development cycles)"]
//                     },
//                     { title: "Teaching Assistant", 
//                         company: "RMIT",
//                         duration: 0 == 0,
//                         starttime: "June",
//                         endtime: "July",
//                         description: ["Programming Bootcamp 1 (essential JAVA)", "Programming Bootcamp 2 (essential Python) "]
//                     },
//                     ],


//             }
//         ],  
//             others: [
//                 {year: 2023,
//                 other: [
//             { title: "The Web Search Revolution Event (Organising Committee)", 
//                 link: "https://www.admscentre.org.au/event/web-search-revolution/",
//                 time: "Aug.",
//                 description: ""
//             },
//             { title: "Turing TIN Data Study Group", 
//                 link: "https://www.turing.ac.uk/events/turing-tin-data-study-group-february-2023",
//                 time: "Feb.",
//                 description: "| Project: Defining Wild Places across the UK using Social and Physical Datasets (The John Muir Trust)"
//             },
//             {
//                 title: "ADM+S summer school",
//                 link: "",
//                 time: "Feb.",
//                 description: "",
//             },]},
//             {year: 2022,
//             other: [
//             {
//                 title: "CIDDA CReD Research Day (Organising Committee)",
//                 link: "https://rmit-ir.github.io/cred/",
//                 time: "Nov.",
//                 description: "",
//             },
//             {
//                 title: "ADM+S Dark-Ad Hackathon",
//                 link: "https://www.admscentre.org.au/darkads-hackathon/",
//                 time: "Nov. ",
//                 description: "",
//             },]}
//             ]
//         });
//     })
//     .resolve();
