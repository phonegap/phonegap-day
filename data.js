// data.js
export class Talk {
  validate(props = []) {
    props.forEach(item => {
      if(!Object.prototype.hasOwnProperty.call(this, item)) {
        throw `Talk is missing property ${item}`;
      }
    });
  }
}
export class Workshop extends Talk {
  constructor(props){
    super();
    Object.assign(this,props);
    this.validate(['title', 'speakerSlug','description']);
  }
}
export class Session extends Talk {
  constructor(props){
    super();
    Object.assign(this,props);
    this.validate(['time', 'title', 'speakerSlug', 'description']);
  }
}
export default {
  speakers: [
    {
      avatar: "/img/bio/audrey.jpg",
      twitter: "aud_rey_so",
      slug: "audrey",
      name: "Audrey So",
      title: "Software developer on the PhoneGap team",
      bio: "Audrey is a software developer on the PhoneGap team at Adobe and currently works on Cordova tooling. In her spare time, she loves reading, learning, listening to podcasts, binge watching crime TV shows, and spending time with her family.",
      conferences: ["us2017"]
    },
    {
      avatar: "/img/bio/johnwargo.jpg",
      twitter: "johnwargo",
      slug: "johnwargo",
      name: "John Wargo",
      title: "Principal Program Manager for Mobile Center at Microsoft",
      bio: "John is a professional software developer, writer, presenter, father, husband, and Geek. For the last 12 years or so, he’s focused on enterprise mobility and building mobile apps. He’s an author of 6 books on mobile development, including 4 on PhoneGap/Apache Cordova, and was a contributor to the Apache Cordova project. He also loves tinkering with IoT, building and writing about projects for Arduino, Particle Photon, Raspberry Pi, and more. He’s currently a Principal Program Manager for Mobile Center at Microsoft",
      conferences: ["us2017"]
    },
    {
      avatar: "/img/bio/greg_bulmash.png",
      twitter: "YiddishNinja",
      slug: "bulmash",
      name: "Greg Bulmash",
      title: "Tech Evangelist at Amazon",
      bio: "Greg Bulmash started in tech by publishing jokes and humorous essays to his own web site, eventually rising to become Senior Editor of the Internet Movie Database (IMDb.com). In 2005, he dusted off his BASIC programming skills from the 80s, taught himself some of the programming languages that power the web, and pivoted into a career writing code and communicating with developer audiences. He currently works as a Technical Evangelist for Login with Amazon, and in his spare time he runs Seattle CoderDojo, a volunteer group where local tech professionals help kids learn computer programming. He's spoken at OSCON, CascadiaJS, DevNexus, Developer Week, CodeMotion Amsterdam, and other meetups and conferences about web development, programming, and teaching kids how to code.",
      conferences: ["us2017"]
    },
    {
      avatar: "/img/bio/nicole_alexander.jpg",
      twitter: "Nikimari",
      slug: "nicole",
      name: "Nicole Alexander",
      title: "Professor of Marketing at NY University",
      bio: "Nicole M. Alexander is a Professor of Marketing at New York University and most recently lead Nielsen's Innovation Practice across Greater China helping brands on their end-to-end innovation processes. She teaches and talks globally on AI, data privacy, and the legal and cultural implications of technology. When not at work Nicole is an avid globe-trotter and sports enthusiast.",
      conferences: ["us2017"]
    },
    {
      avatar: "/img/bio/gregavola.jpg",
      twitter: "gregavola",
      slug: "gregavola",
      name: "Greg Avola",
      title: "CTO and Co-Founder for Untappd",
      bio: "Living in the craft beer haven of New York City, Greg is the CTO and Co-Founder for Untappd. After experiencing Rare Vos for the first time, he instantly fell in love with craft beer. While some people enjoy reading books or watching movies, Greg's passion is to code. With that being said, after Tim and Greg came up with the idea of Untappd, Greg had a working prototype the next day. Being able to combine his passion for development and craft beer allowed Untappd to be born. In January of 2016, Untappd merged with Next Glass which allowed Greg to work on Untappd in a full-time role as CTO of both companies. Prior to Untappd, Greg was a Senior Software Engineer at ABC News in New York City responsible for mobile and web products.",
      conferences: ["us2017"]
    },
    {
      avatar: "/img/bio/shazron.jpg",
      twitter: "shazron",
      slug: "shazron",
      name: "Shazron Abdullah",
      title: "Senior Computer Scientist, Adobe",
      bio: "Based in San Francisco, by way of Vancouver, Canada and Singapore, Shaz has nearly two decades of software development experience getting with the nitty gritty of Windows, OS X and iOS and probably helped code something you know. Currently he helps maintain the iOS platform of Apache Cordova and Adobe PhoneGap and has been part of the project for quite some time.",
      conferences: ["us2016","eu2016","eu2017"],
      twitterCard: {
        eu2017: '/img/speaker-cards/eu2017/shazron.png'
      },
    },{
      avatar: "/img/bio/ericalli.jpg",
      twitter: "two2twelve",
      slug: "ericalli",
      name: "Eric Alli",
      title: "Web Designer, Developer, and Musician",
      bio: "Eric is a San Francico based designer & engineer who enjoys building useful products for niche spaces and sharing his affinity for music and art.",
      conferences: ["us2016"]
    },{
      avatar: "/img/bio/alexblom.jpg",
      twitter: "AlexBlom",
      slug: "alexblom",
      name: "Alex Blom",
      title: "Partner, Isle of Code",
      bio: "Alex Blom is the lead maintainer of ember-cordova. He is also Managing Partner at Isle of Code, an Ember/Hybrid focused shop in Toronto.",
      conferences: ["us2016", "eu2017", "us2017"],
      twitterCard: {
        eu2017: '/img/speaker-cards/eu2017/alexblom.png'
      },
    },{
      avatar: "/img/bio/garthdb.jpg",
      twitter: "GarthDB",
      slug: "GarthDB",
      name: "Garth Braithwaite",
      title: "FED, Adobe",
      bio: "Garth is a person.",
      conferences: ["us2016"]
    },{
      avatar: "/img/bio/michaelbrooks.jpg",
      twitter: "mwbrooks",
      slug: "michaelbrooks",
      name: "Michael Brooks",
      title: "Senior Software Barista, Adobe",
      bio: "Orphaned as a child, Michael Brooks was raised by his elderly Uncle Ben and Aunt May. Academically gifted, he displayed an uncanny affinity for Computer Science with speciality in signal processing and computer vision. While attending a developer meetup at the age of 26, Michael was bitten on the hand by a radioactive Nitobi employee, empowering him with the company’s proportional open source belief, community, and ability to ship products. Now disguised as mwbrooks and teamed with Adobe, Michael slings between vim, GitHub, Twitter, and IRC to protect the innocent, confront evil, and make PhoneGap & Apache Cordova a safer framework for the future of application development.",
      conferences: ["us2016"]
    },{
      avatar: "/img/bio/raymondcamden.jpg",
      twitter: "raymondcamden",
      slug: "raymondcamden",
      name: "Raymond Camden",
      title: "Developer Advocate, IBM",
      bio: "Raymon is a 42 year old married father of six living in beautiful Lafayette, Louisiana. His primary technical focus is on the MobileFirst platform, web standards and client-side development. Most of his time is spent writing, researching, or presenting. When he's not behind a computer, he's an avid XBox/PS4 player, he enjoys movies, and he reads like crazy.",
      conferences: ["us2016"]
    },{
      avatar: "/img/bio/cianclarke.jpg",
      twitter: "cianclarke",
      slug: "cianclarke",
      name: "Cian Clarke",
      title: "Software Engineer, Red Hat Mobile",
      bio: 'Cian is a Software Engineer on the Red Hat Mobile Team. An early technologist, he founded his own web consultancy business at 16. Cian was a member of the original FeedHenry mobile team, since acquired by Red Hat. At Red Hat, Cian builds functionality for the Mobile Application Platform, and also helps with solutions architecture and evangelism. In addition to his day job, he also regularly blogs about the intersection of all things mobile, microservices and Node.js. Cian is originally from Waterford, Ireland, and currently resides in Boston, Massachusetts.',
      conferences: ["us2016"]
    },{
      avatar: "/img/bio/doncoleman.jpg",
      twitter: "doncoleman",
      slug: "doncoleman",
      name: "Don Coleman",
      title: "Director, Chariot Solutions",
      bio: 'Don enjoys hacking with phones, Arduino and other hardware. He has written PhoneGap plugins for Bluetooth and NFC. Don is the co-author of "Make:Bluetooth" and "Beginning NFC".',
      conferences: ["us2016", "us2017"]
    },{
      avatar: "/img/bio/davidfrahm.jpg",
      twitter: "davidfrahm",
      slug: "davidfrahm",
      name: "David Frahm",
      title: "Product Creator, Sworkit",
      bio: "Mobile and frontend developer focused on Ionic SDK and AngularJS apps, with a strong background in UX, Agile, eXtreme Programming, and startup growth. Living in the Midwest and contributing to the world.",
      conferences: ["us2016"]
    },{
      avatar: "/img/bio/chrisgosselin.jpg",
      slug: "chrisgosselin",
      name: "Chris Gosselin",
      title: "Full-stack developer, Rangle.io",
      bio: "Chris is a full-stack developer at Rangle.io, a Toronto-based development firm, where he works on creating high-end enterprise mobile apps. Chris' interest in coding started as a teen when he created a variant of a popular board game for his programming class. Since then he has contributed to various open source projects, growth-hacked a startup, and worked extensively on both server-side and client-side projects. When he’s not programming he enjoys rock climbing.",
      conferences: ["us2016"]
    },{
      avatar: "/img/bio/deanhaddock.jpg",
      twitter: "systemconscious",
      slug: "deanhaddock",
      name: "Dean Haddock",
      title: "Managing Director, StoryCorps",
      bio: "Dean Haddock is the Managing Director of Digital & Technical Innovation for StoryCorps, the national oral history project--one of the largest collections of human voices ever assembled--and popular NPR/PBS broadcast. He and his team design and build apps, websites and other platforms to further StoryCorps' mission of recording and preserving the stories of everyday people across the US and around the world. Most recently Dean led StoryCorps' 2015 $1m TED Prize initiative to build a mobile app and platform that anyone can use to record and archive oral history interviews permanently at the Library of Congress. He is a Nieman Foundation Visiting Fellow, a Knight Foundation Prototype Fund awardee, a two-time Google Fellow to the Personal Democracy Forum and a civic hacktivist.",
      conferences: ["us2016", "eu2016"]
    },{
      avatar: "/img/bio/ryanhanna.jpg",
      twitter: "heryandotus",
      slug: "ryanhanna",
      name: "Ryan Hanna",
      title: "VP of Engineering, Sworkit",
      bio: "Ryan began learning to code online in 2012 and grew his side project into a top Health and Fitness app with over 20 million users. He is also a co-organizer of codebar.io in Brighton, England.",
      conferences: ["us2016","eu2017"],
      twitterCard: {
        eu2017: '/img/speaker-cards/eu2017/ryanhanna.png'
      },
    },{
      avatar: "/img/bio/mikehartington.jpg",
      twitter: "mhartington",
      slug: "mikehartington",
      name: "Mike Hartington",
      title: "Front End Developer, Ionic",
      bio: "Mike is a front-end developer who has used Ionic since its alpha. As Ionic’s developer advocate, Mike manages the Ionic Forum, serves as a resource to developers, and writes technical documentation. When he’s not working, you can find him relaxing with a beer and guitar.",
      conferences: ["us2016", "us2017"]
    },{
      avatar: "/img/bio/shawnjansepar.jpg",
      twitter: "shawnjan8",
      slug: "shawnjansepar",
      name: "Shawn Jansepar",
      title: "Engineering Manager, Mobify",
      bio: "Shawn loves to hack both on the front-end and back-end, with a heavy focus on the user experience. When he isn't hacking, you likely find him playing hockey/video games, eating, or travelling. Shawn has a BSc in Computer Science from Simon Fraser University in Vancouver.",
      conferences: ["us2016"]
    },{
      avatar: "/img/bio/aniskadri.jpg",
      twitter: "aniskadri",
      slug: "aniskadri",
      name: "Anis Kadri",
      title: "Software Engineer, Adobe",
      bio: "Anis is a Software Engineer at Adobe. He works on PhoneGap and Cordova full-time and has been contributing to the project since its early inception. Lately, he’s been interested in trying to introduce  PhoneGap solutions to the enterprise world.",
      conferences: ["us2016", "eu2016"]
    },{
      avatar: "/img/bio/timkim.jpg",
      twitter: "timkim",
      slug: "timkim",
      name: "Tim Kim",
      title: "Expert Keyboard Masher, Adobe",
      bio: "During the day, Tim works on the PhoneGap project mostly focusing on the PhoneGap Developer App. By night, Tim dons his special terry cloth bath robe and makes cool 3D art usually about something from the 80's. In between, he's probably eating a sandwich.",
      conferences: ["us2016", "us2017"]
    },{
      avatar: "/img/bio/reneelance.jpg",
      twitter: "geekystardust",
      slug: "reneelance",
      name: "Renée Lance",
      title: "Solutions Consultant, Adobe",
      bio: "Renée is a seasoned Web and UX designer and now an Adobe Solutions Consultant evangelizes Creative Cloud, Document Cloud and digital innovation. With more than 10 years experience with digital design, Renée is a passionate professional who is dedicated in developing solutions for business and creative professionals ensuring they remain competitive and deliver engaging customer experiences. Her creative-thinking skills and technical experience assist customers deliver innovative outcomes for creative and non-traditional creative industries.",
      conferences: ["us2016"]
    },{
      avatar: "/img/bio/brucelefebvre.jpg",
      twitter: "brucelefebvre",
      slug: "brucelefebvre",
      name: "Bruce Lefebvre",
      title: "Computer Scientist, Adobe",
      bio: "Bruce is a programmer at Adobe focused on bringing Experience Manager and the open web together. As a member of the mobile R&D team, he’s most recently been focused on the AEM + PhoneGap integration. When not at his desk he can usually be found outside on his bike..",
      conferences: ["us2016", "eu2016"]
    },{
      avatar: "/img/bio/simonmacdonald.jpg",
      twitter: "macdonst",
      slug: "simonmacdonald",
      name: "Simon MacDonald",
      title: "Senior Software Engineer, Adobe",
      bio: "Simon has over fifteen years of development experience and has worked on a variety of projects including object oriented databases, police communication systems, speech recognition and unified messaging. His current focus is contributing to the open source PhoneGap project to enable developers to create cross platform mobile applications using Web technologies. Simon’s been building web applications since the days they were written using shell scripts and he still has nightmares about those dark days.",
      conferences: ["us2016","eu2016","eu2017"],
      twitterCard: {
        eu2017: '/img/speaker-cards/eu2017/simonmacdonald.png'
      },
    },{
      avatar: "/img/bio/purplecabbage.jpg",
      twitter: "purplecabbage",
      slug: "purplecabbage",
      name: "Jesse MacFadyen",
      title: "Sr. Computer Scientist, Adobe",
      bio: "Jesse is a primordial PhoneGap contributor that has been around long enough to see many phonegap-killers come and go. He has written plugins for everything from the device accelerometer to bluetooth connected wearables like the ms-band, across windows, windows phone, android and ios. A self-proclaimed prolific procrastinator, Jesse often loses interest before he has a chance to fi",
      conferences: ["us2016","eu2016","eu2017", "us2017"],
      twitterCard: {
        eu2017: '/img/speaker-cards/eu2017/purplecabbage.png'
      },
    },{
      avatar: "/img/bio/alexismenard.jpg",
      twitter: "darktears",
      slug: "alexismenard",
      name: "Alexis Menard",
      title: "Software Engineer, Intel",
      bio: "Alexis Menard is a software engineer working at Intel in Oregon as part of the Open Source Technology Center. Here his main focus is on the ever evolving Web Platform, which includes work on W3C standards as well as Blink/Chromium. In the latter projects, he serves as both developer and code reviewer. Alexis is also working on Crosswalk, an HTML5 runtime/webview for Android and Windows where he does a bit of everything. Prior to Intel, Alexis worked on QtWebKit and WebKit itself at the Brazilian Nokia research center known as INdT. Before moving to Brazil, Alexis worked out of Norway, mostly on the Qt framework as a part of Nokia (former Trolltech). He is also a former KDE contributor where he contributed mostly to Plasma, the desktop shell of KDE.",
      conferences: ["us2016"]
    },{
      avatar: "/img/bio/lokimeyburg.jpg",
      twitter: "lokimeyburg",
      slug: "lokimeyburg",
      name: "Loki Meyburg",
      title: "Product Guy, Mobify",
      bio: "Loki is also the creator of Stacker, an open source project to kickstart the development of iOS apps. Previously he was the first employee at Medeo, a medical startup, that was acquired in 2014. Graduated with Honours in Business and Computer Science from the University of British Columbia.",
      conferences: ["us2016"]
    },{
      avatar: "/img/bio/martinposchenrieder.jpg",
      twitter: "mposchenrieder",
      slug: "martinposchenrieder",
      name: "Martin Poschenrieder",
      title: "Founder, testmunk",
      bio: "Martin has been working in the mobile industry for most of the past decade. He began his career as an intern for one of the few German handset manufacturers, years before Android and iPhone were launched. After involvement with several app projects, he soon realized that one of the biggest pain-points in development was mobile app testing. In order to ease this pain, he started Testmunk. Testmunk is based in Silicon Valley, and provides automated app testing over the cloud.",
      conferences: ["us2016"]
    },{
      avatar: "/img/bio/brianrinaldi.jpg",
      twitter: "remotesynth",
      slug: "brianrinaldi",
      name: "Brian Rinaldi",
      title: "Developer Content Manager, Telerik",
      bio: "Brian is the Developer Content Manager at Telerik where he helps the Developer Relations team create top notch content for the developer community on the Telerik Developer Network. He is also co-editor of Mobile Web Weekly.",
      conferences: ["us2016"]
    },{
      avatar: "/img/bio/ryanjsalva.jpg",
      twitter: "ryanjsalva",
      slug: "ryanjsalva",
      name: "Ryan J Salva",
      title: "JavaScript Developer",
      bio: "JavaScript developer, Apache Cordova committer, Visual Studio program manager, CrossFitter, sci-fi connoisseur and whiskey enthusiast. With over 15 years of experience in software development, it’s hard to find a corner of the web where he hasn’t worked, but the important thing to know is this: Ryan is a passionate storyteller with deep insight into market forces, technology, user experience and design. Today, he owns tooling for cross-platform mobile app development at Microsoft. Tomorrow, the world.",
      conferences: ["us2016", "eu2016"]
    },{
      avatar: "/img/bio/hollyschinsky.jpg",
      twitter: "devgirlFL",
      slug: "hollyschinsky",
      name: "Holly Schinsky",
      title: "Senior Software Engineer, Adobe",
      bio: "Holly works on the PhoneGap team at Adobe with a heavy focus on Developer Advocacy and Education via her blogging, sample apps and workshops. In her free time she’s usually found running, driving a carpool or hanging out with her family.",
      conferences: ["us2016","eu2016","eu2017", "us2017"],
      twitterCard: {
        eu2017: '/img/speaker-cards/eu2017/hollyschinsky.png'
      },
    },{
      avatar: "/img/bio/bobspencer.jpg",
      slug: "bobspencer",
      name: "Bob Spencer",
      title: "Software Architect, Intel",
      bio: "Bob Spencer is a software architect in Intel's Open Source Technology Center where for the past decade his work has been centered on open source developer tools and SDKs. He is the community manager on the Crosswalk Project team. In his free time he will be biking, backpacking, or hanging with his family.",
      conferences: ["us2016"]
    },{
      avatar: "/img/bio/masahirotanaka.jpg",
      slug: "masahirotanaka",
      name: "Masahiro Tanaka",
      title: "CEO, Monaca Corporation",
      bio: "Masa is the CEO of Monaca Corporation, the company behind Japan's #1 hybrid app development tools, Monaca and Onsen UI. He started his company as a pioneer in web and mobile communities in Japan, writing numerous PHP books and initiating Cordova meetups. Masa still maintains a leadership role within mobile and IoT communities in Japan and overseas as a hybrid app development vanguard and framework trendsetter.",
      conferences: ["us2016","eu2016","eu2017", "us2017"]
    },{
      avatar: "/img/bio/jedwatson.jpg",
      slug: "jedwatson",
      twitter: "jedwatson",
      name: "Jed Watson",
      title: "Founder, Thinkmill",
      bio: "Jed is a founder of Thinkmill, a web and mobile app development agency in Sydney, and has been writing JavaScript since IE6 was new and exciting. A prolific open source contributor, Jed is the driving force behind KeystoneJS - the node.js content management platform - and several major React.js libraries including Elemental UI and TouchstoneJS, which is a UI Framework for hybrid mobile apps.",
      conferences: ["us2016"]
    },{
      avatar: "/img/bio/nickvanweerdenburg.jpg",
      slug: "nickvanweerdenburg",
      twitter: "n1cholasv",
      name: "Nick Van Weerdenburg",
      title: "Founder, Rangle.io",
      bio: "Nick is Rangle.io’s founder, first developer, and now leads the company’s business development and strategy activities. Nick first did server-side JavaScript in 1997 and has 15 years of experience in web software in diverse roles and industries. He is a firm believer in the thin-server, full-JavaScript stack and an active speaker, delivering about a dozen talks each year.",
      conferences: ["us2016"]
    },{
      avatar: "/img/bio/tommywilliams-1.jpg",
      twitter: "therealdevgeeks",
      slug: "tommywilliams",
      name: "Tommy Williams",
      title: "Sr. Computer Scientist, Adobe",
      bio: "Tommy is a guitarist, aging punk, and app developer finally working on the PhoneGap team at Adobe. He is focussed on helping developers make beautiful, performant, and secure mobile apps with the web technologies that he loves. He is also a strong advocate for privacy particularly where it intersects app development. Tommy enjoys talking in the third person, vegan food, beer, attempts at humour, and trying to sound humble through self-deprecation.",
      conferences: ["us2016", "eu2017"],
      twitterCard: {
        eu2017: '/img/speaker-cards/eu2017/tommywilliams.png'
      },
    },{
      avatar: "/img/bio/tjvantoll.jpg",
      twitter: "tjvantoll",
      slug: "tjvantoll",
      name: "TJ VanToll",
      title: "Senior Developer Advocate, Telerik",
      bio: "TJ VanToll is a front-end developer, author, and a senior developer advocate for Telerik. TJ has over a decade of web development experience, including a few years working on the jQuery team. Nowadays, he spends his time helping web developers build mobile apps through projects like Cordova and NativeScript. TJ is @tjvantoll on Twitter and tjvantoll on GitHub.",
      conferences: ["us2016"]
    },{
      avatar: "/img/bio/saniyusuf.jpg",
      twitter: "saniyusuf",
      slug: "saniyusuf",
      name: "Sani Yusuf",
      title: "Founder, HAIBRID",
      bio: "Sani runs a startup called HAIBRID that uses cross-platform mobile development techniques to create innovative ​mobile ​ solutions. Sani also co-manages the Ionic UK community in UK and has had stints with companies like Microsoft, Huddlebuy & Anritsu in the past.",
      conferences: ["eu2016","eu2017"],
      twitterCard: {
        eu2017: '/img/speaker-cards/eu2017/saniyusuf.png'
      },
    },{
      avatar: "/img/bio/remysharp.jpg",
      twitter: "rem",
      slug: "remysharp",
      name: "Remy Sharp",
      title: "Founder, ffconf",
      bio: "Remy is the founder and curator of ffconf, the UK based JavaScript conference. He also ran jQuery for Designers, co-authored Introducing HTML5 (adding all the JavaScripty bits) and likes to grumble on Twitter. Whilst he's not writing articles or running and speaking at conferences, he runs his own development and training company in Brighton called Left Logic. And he built these too: Confwall, jsbin.com, html5demos.com, responsivepx.com, nodemon, mit-license.org, snapbird.org, 5 minute fork and jsconsole.com!",
      conferences: ["eu2016"]
    },{
      avatar: "/img/bio/kerrishotts.jpg",
      twitter: "kerrishotts",
      slug: "kerrishotts",
      name: "Kerri Shotts",
      title: "Developer, Author, Photographer",
      bio: "Kerri Shotts is a Developer Advocate at Adobe. As an IT Consultant, she used PhoneGap/Cordova to develop enterprise apps for her clients. She is the author of five books about PhoneGap and serves as a moderator on the Adobe PhoneGap forums and the PhoneGap Google Group. She started programming on a lowly Commodore 64, and has a fondness for retro technology.",
      conferences: ["eu2016","eu2017", "us2017"],
      twitterCard: {
        eu2017: '/img/speaker-cards/eu2017/kerrishotts.png'
      },
    },{
      avatar: "/img/bio/nielsleenheer.jpg",
      twitter: "rakaz",
      slug: "nielsleenheer",
      name: "Niels Leenheer",
      title: "Founder, Salonhub",
      bio: "Niels is a founder of Salonhub and creates web applications for a living. He has been using PhoneGap professionally for the last five years. In his free time he runs one of the largest Open Device Labs in the world, created the HTML5test.com website and has recently given a number of talks about Smart TV and game console browsers. He loves to research obscure browsers and submit bug reports.",
      conferences: ["eu2016"]
    },{
      avatar: "/img/bio/wildabeast.jpg",
      slug: "wildabeast",
      name: "Ryan Willoughby",
      title: "Software Engineer, Adobe",
      bio: "Ryan works on PhoneGap Build and Cordova. He recently watched The Mist and threw a can of Old Milwaukee at the television in frustration. Not the bourbon sour though.",
      conferences: ["eu2016"]
    },{
      avatar: "/img/bio/stevesgill-1.jpg",
      twitter: "stevesgill",
      slug: "stevesgill",
      name: "Steve Gill",
      title: "Software Engineer, Adobe",
      bio: "Originally from Vancouver but currently living in San Francisco, Steve has been part of the PhoneGap team since 2009! He currently works on the tooling for Cordova and helps with releases. Outside of hacking, he loves hockey, biking, yoga and traveling!",
      conferences: ["eu2016", "eu2017"]
    },{
      avatar: "/img/bio/martijnwalraven.jpg",
      twitter: "martijnwalraven",
      slug: "martijnwalraven",
      name: "Martijn Walraven",
      title: "Core Developer, Meteor Development Group",
      bio: "Martin works on mobile support for the Meteor JavaScript app platform, including the Cordova integration. He is also the creator of Meteor iOS, which integrates native iOS apps with Meteor.",
      conferences: ["eu2016"]
    },{
      avatar: "/img/bio/brettrudd.jpg",
      twitter: "brettrudd",
      slug: "brettrudd",
      name: "Brett Rudd",
      title: "Development Lead, Adobe",
      bio: "Brett is a cordova committer and also the development team lead for Adobe’s PhoneGap Build. PhoneGap Build allows you to create mobile apps using HTML, CSS, and JavaScript - and then easily compile them for multiple platforms in the cloud. It has built over 2 million apps and assists developers during prototyping, development and all the way through signing and packaging for App Store submittal. Brett has no hobbies.",
      conferences: ["eu2016"]
    },{
      avatar: "/img/bio/denisradin.jpg",
      twitter: "PixelsCommander",
      slug: "denisradin",
      name: "Denis Radin",
      title: "Front-end Engineer, Liberty Global",
      bio: "Front-end engineer working on ‘embedded JavaScript’ in Liberty Global (Ziggo, UPC). Passionate about UI experiments and performance optimization. Launching JavaScript into space and stratosphere in spare time and believe this is a sunrise of interactive revolution. Blogging at PixelsCommander.com",
      conferences: ["eu2016"]
    },{
      avatar: "/img/bio/eddyverbruggen.jpg",
      twitter: "eddyverbruggen",
      slug: "eddyverbruggen",
      name: "Eddy Verbruggen",
      title: "Cordova plugins hacker, Telerik",
      bio: "Eddy is the author of many PhoneGap plugins. Over the past few years, he created popular plugins such as SocialSharing, Calendar, and Toast. What started as an open source hobby resulted in him teaming up with Telerik with the goal to increase the quality of the Cordova plugin ecosystem. These days, Eddy is the maintainer of the Telerik Verified Plugins Marketplace at plugins.telerik.com",
      conferences: ["eu2016"]
    },{
      avatar: "/img/bio/andreasschacherbauer.jpg",
      slug: "andreasschacherbauer",
      name: "Andreas Schacherbauer",
      title: "Head of SDK, Wikitude",
      bio: "Andreas has been developing Wikitude's augmented reality SDK from the ground up. He leads the SDK engineering group within Wikitude and is actively developing the first PhoneGap Plugin for augmented reality for more than 4 years.",
      conferences: ["eu2016"]
    },{
      avatar: "/img/bio/raphaelkubodacosta.jpg",
      slug: "raphaelkubodacosta",
      name: "Raphael Kubo Da Costa",
      title: "Software Engineer, Intel",
      bio: "Raphael is a software engineer working on web engines and web technologies at Intel's Open Source Technology Center. He has been working on Crosswalk since its creation, and is responsible for its infrastructure, release engineering and everything required for making it work great for everyone, including Cordova users. Raphael currently lives in Amsterdam, a city he is still getting to know, and likes to scratch his itches by contributing to other open source projects in his free time, from FreeBSD to KDE.",
      conferences: ["eu2016"]
    },{
      avatar: "/img/bio/timlancina.jpg",
      twitter: "timlancina",
      slug: "timlancina",
      name: "Tim Lancina",
      title: "Developer, Ionic",
      bio: "Tim is a developer at Ionic working on tooling. When not trying to get computers to do what he wants, he is usually playing soccer, traveling, or enjoying a good book.",
      conferences: ["eu2016"]
    },{
      avatar: "/img/bio/evanschultz.jpg",
      twitter: "e_p82",
      slug: "evanschultz",
      name: "Evan Schultz",
      title: "JavaScript Architect, Rangle.io",
      bio: "Evan is a passionate software developer with nearly 10 years experience. As a seasoned JavaScript architect he adapts to new technologies, and has contributed to many team-based projects, whilst mentoring other developers. Evan leads and contributes to the Rangle.io’s guidelines, code reviews and training material. He educates peers and clients and writes about development best practices for Rangle.io’s blog, http://blog.rangle.io/",
      conferences: ["eu2016"]
    },{
      avatar: "/img/bio/bertrandkarerangabo.jpg",
      twitter: "codenarian",
      slug: "bertrandkarerangabo",
      name: "Bertrand Karerangabo",
      title: "Developer, Rangle.io",
      bio: "Bertrand's a full-stack web developer with extensive experience building complex applications in ReactJS on web & native platforms.",
      conferences: ["eu2016"]
    },{
      avatar: "/img/bio/davidbarth.jpg",
      slug: "davidbarth",
      name: "David Barth",
      title: "Engineering Manager, Canonical",
      bio: 'David heads up the Webapps Team at Canonical, the makers of Ubuntu. David and his team’s involvement in Ubuntu app development is centered on the integration of web technologies into the core of the Ubuntu platform. This includes the development of the Oxide project, a modern webview optimized to run on Ubuntu, the Ubuntu Cordova port, and more generally JS frameworks related to developing apps and "scopes" on Ubuntu.',
      conferences: ["eu2016"]
    },{
      avatar: "/img/bio/joebowser.jpg",
      twitter: "infil00p",
      slug: "joebowser",
      name: "Joe Bowser",
      title: "Senior Computer Scientist, Adobe Systems Inc.",
      bio: 'Joe is one of the co-creators of PhoneGap, and originally wrote the Android implementation. He is the longest contributing member of the Apache Cordova project and the Project Management Committee (PMC). When he is not working on Cordova, he is working on various other projects, which often include open source hardware like the Arduino, 360 video, as well as building, flying and crashing quadcopters.',
      conferences: ["eu2017"],
      twitterCard: {
        eu2017: '/img/speaker-cards/eu2017/joebowser.png'
      },
    },{
      avatar: "/img/bio/edouardlafargue.jpg",
      slug: "edouardlafargue",
      name: "Edouard Lafargue",
      title: "Solution Architect, Adobe",
      bio: "Ed has been with Adobe for 6 years working first in Europe and now in the US as a Solution Architect for the Adobe Marketing Cloud. As a life long technology enthusiast, Ed likes to apply his skills to bring creative solutions to technical challenges, whether he does this for Adobe's customers, or as part of his volunteer engagement with non-profits like Safecast.org",
      conferences: ["eu2017"],
      twitterCard: {
        eu2017: '/img/speaker-cards/eu2017/edouardlafargue.png'
      },
    },{
      avatar: "/img/bio/timoernst.jpg",
      twitter: "timo_ernst",
      slug: "timoernst",
      name: "Timo Ernst",
      title: "Software Engineer, Freelance",
      bio: "Timo is a Freelance Software Engineer, Youtuber and Blogger with focus on UI design, working with latest frontend technologies. Living the dream of creating mind-blowing mobile apps using the power of HTML5, CSS3 and JavaScript",
      conferences: ["eu2017"],
      twitterCard: {
        eu2017: '/img/speaker-cards/eu2017/timoernst.png'
      },
    },{
      avatar: "/img/bio/filmaj.jpg",
      twitter: "filmaj",
      slug: "filmaj",
      name: "Fil Maj",
      title: "Master Exploder, Adobe",
      bio: "Fil works for Adobe on the PhoneGap team, and was part of Nitobi, the company responsible for the birth of PhoneGap. Fil took a slight career detour and worked for Sauce Labs, where he picked up a focus on reliability, testing and enabling sustainable software engineering. Fil is now back with Adobe and the PhoneGap team, where he strives to apply these learnings.",
      conferences: ["eu2017"],
      twitterCard: {
        eu2017: '/img/speaker-cards/eu2017/filmaj.png'
      },
    },{
      avatar: "/img/bio/maxlynch.jpg",
      twitter: "maxlynch",
      slug: "maxlynch",
      name: "Max Lynch",
      title: "Co-Founder, Ionic",
      bio: " Max is co-founder of Ionic, focusing on making it easy for web developers to build top quality apps across the app store, mobile web, and desktop. Max lives in Madison, WI with his wife and son, is a soccer (football) fan, and an avid gamer.",
      conferences: ["eu2017"],
      twitterCard: {
        eu2017: '/img/speaker-cards/eu2017/maxlynch.png'
      },
    },{
      avatar: "/img/bio/andreasfotschl.jpg",
      slug: "andreasfotschl",
      name: "Andreas Fötschl",
      title: "Director Solution Architecture, Wikitude",
      bio: "Andreas already played around with Augmented Reality on Android Simulators prior to the release of the first Android device. He is meanwhile assisting customers in software architecture and integration of Wikitude’s product suite.",
      conferences: ["eu2017"],
      twitterCard: {
        eu2017: '/img/speaker-cards/eu2017/andreasfotschl.png'
      },
    }
  ],
  sessions: {
    us2016: [
      {
        time: "8:30am-9:00am",
        title: "Registration and breakfast"
      },
      new Session({
        time: "9:00am-9:15am",
        title: "PhoneGap kick off",
        speakerSlug: "michaelbrooks",
        description: "Stop! Wait a moment. Close your eyes. Are they closed? Yea? Alright! Now take a deep breath. No, this isn't yoga. This may be your last relaxing moment for the next two days.<br/><br/>Ahead of you are some amazing presentations from developers in our community. Developers like you, who have contributed their time, talent, and energy to move hybrid mobile app developement forward. PhoneGap Day is an event for you. It's a place for you to meet the people behind the scenes, share your work, and leave your mark on the next version of PhoneGap and Apache Cordova.<br/><br/>Now it's time to enjoy some code, drinks, and powder on the PhoneGap Team!",
      }),
      new Session({
        time: "9:15am-9:50am",
        title: "Mind the Gap: Supercharge your PhoneGap workflow",
        speakerSlug: "ericalli",
        description: "Developing a complex and sustainable PhoneGap app can present many challenges. As your app grows, a seamless development workflow is crucial. Can you efficiently deploy and test in different environments? What are your pain points when implementing new functionality? How can you organize all the facets of your app with minimal effort? Mind the gap focuses on some of the ways you can create a development workflow that automates these inefficiencies, boosts scalability and most of all, preserves developer sanity.",
      }),
      new Session({
        time: "9:50am-10:10am",
        title: "Automated App Testing: A pain or cure?",
        speakerSlug: "martinposchenrieder",
        description: "You want to ship an app you can be proud of, without bugs or defects. You want it delivered quickly. However, the testing process is looked at as simply a ‘necessary evil’ and there is never enough time in the day to test everything manually. Automated testing claims to be the answer but you’ve found it ‘hard to set up’ and ‘difficult to maintain’. Is going back to pure manual testing the answer? Hiring more resources? What is the right balance between manual and automated testing? Can I make automated testing easier? What are some of the current testing trends? From my experience working with many small and large companies, I hope to share my observations, and answer some of these questions.",
      }),
      new Session({
        time: "10:10am-10:30am",
        title: "Finding the sweet spot - blending the best of native and web",
        speakerSlug: ["shawnjansepar","lokimeyburg"],
        description: "Choose the best technology for the job. Too often projects begin as hybrid apps, but switch to native for performance reasons. But it’s almost never the case that all features of your app need to be fully native. Today, many apps such as Amazon, Basecamp, Yelp and more take a blended approach. We'll guide you through case studies of how we build high performance apps that blend the best of native and web and highlight lessons we've learned along the way.",
      }),
      {
        time: "10:30am-10:40am",
        title: "BREAK"
      },
      new Session({
        time: "10:40am-11:00",
        title: "Ionic: Version 2 and Beyond",
        speakerSlug: "mikehartington",
        description: "Ionic 1.0 has enabled many web developers to become mobile app developers. With the arrival of Angular 2 and its changes, and with ES6 being finalized, development has been improved yet again. How will that impact Ionic? In this session, we’ll compare Ionic 1 and Ionic 2 and go over what we've learned, what improvements we're making to Ionic, and how easy it will be to develop apps with Ionic 2.",
      }),
      new Session({
        time: "11:00am-11:25am",
        title: "The Story of an App: How StoryCorps Built and Launched the StoryCorps.me Beta Platform and What We've Learned So Far",
        speakerSlug: "deanhaddock",
        description: "Dean Haddock shares the story of the StoryCorps app, from early prototypes to the TED Prize and beyond.",
      }),
      new Session({
        time: "11:25am-12:05pm",
        title: "PhoneGap Applications with Ember: Lessons learned",
        speakerSlug: "alexblom",
        description: "The benefits of hybrid applications are obvious (less code, simpler code, iterate faster). Developers often make quick pace, boot their app and then hit a wall trying to make it 'feel native'. This talk will discuss lessons learned & optimization techniques from having built many apps with Ember & phonegap. While this talk uses Ember & Ember packages, the tools and techniques discussed generically apply to any Phonegap application. "
      }),
      new Session({
        time: "12:05pm-12:25pm",
        speakerSlug: "masahirotanaka",
        title: "Using Monaca Cloud to enhance Cordova development",
        description: ''
      }),
      {
        time: "12:25pm-1:15pm",
        title: "LUNCH"
      },
      new Session({
        time: "1:15pm-1:35pm",
        title: "Session: Cordova Plugin Roundup",
        speakerSlug: "tjvantoll",
        description: "In last few years Cordova plugins have become the cornerstone of many high-quality Cordova and PhoneGap applications. In just the last year, we at Telerik have grown our curated Cordova plugins marketplace from small handful of plugins to now 65 and counting. In this talk you’ll learn about the latest greatest in the Cordova plugin world, including plugins for the Apple Watch, Mapbox maps, and a whole lot more."
      }),
      new Session({
        time: "1:35pm-2:15pm",
        title: "PhoneGap and React.js",
        speakerSlug: "jedwatson",
        description: "React.js has been changing the way web developers build user interfaces for the web, but what about hybrid mobile apps, where jQuery Mobile and Angular remain the most popular frameworks? In this talk Jed will review the advantages and challenges of React for mobile, why it is an exciting framework to use, and how to integrate the React ecosystem into your development workflow."
      }),
      new Session({
        time: "2:15pm-2:35pm",
        title: "When the heck is 4/8/2016?",
        speakerSlug: "raymondcamden",
        description: "This talk will cover basic internationalization, globalization issues with Cordova apps. I'll talk about the Globalization plugin (and how to work around the async nature of the plugin), the Intl class, and other options. Also, I'll discuss why you should give a damn as a developer."
      }),
      new Session({
        time: "2:35pm-2:55pm",
        title: "Fixing Continuous Delivery for Mobile.",
        speakerSlug: "nickvanweerdenburg",
        description: "Manual builds and app store approval lags make it near impossible to have an effective mobile continuous delivery process. In turn, this hurts our attempts to be truly Agile with our mobile projects. The solution? Per-pull request deployment through CircleCI, CodePush and a custom CodePush loader in your app. This enables hands-free, automated deployment from commit to a user device, radically changing your testing, validation, and your user feedback processes."
      }),
      new Session({
        time: "2:55pm-3:25pm",
        title: "Making Enterprise Sh_t",
        speakerSlug: "brucelefebvre",
        description: "Does the idea of writing enterprise software conjure up images of bland user interfaces, XML-based configuration, and IE8 compatibility? The folks on Adobe’s Experience Manager Apps team have been working hard at avoiding these stereotypes, while building a platform for delivering and managing mobile apps for enterprise customers. This talk will provide a glimpse into the following: What are the perks of including a content management system in my app dev arsenal? Which tools are available for me to take full advantage of Adobe’s Marketing Cloud solutions? As a developer, what open source goodness can I try out today?"
      }),
      new Session({
        time: "3:25pm-3:45pm",
        title: "The Crosswalk Advantage – a powerful runtime for your Cordova Apps",
        speakerSlug: "bobspencer",
        description: "Discover how to add advanced capabilities to your PhoneGap applications with very little effort. The Crosswalk runtime gives your application the ability to use the newest, just-released features on all platforms with predictable behavior."
      }),
      {
        time: "3:45pm-4:00pm",
        title: "BREAK"
      },
      new Session({
        time: "4:00pm-4:30pm",
        title: "Build and Market Your App: Small Team Success",
        speakerSlug: "ryanhanna",
        description: "This talk will provide the tools and methodologies to help any solo developer or small team build and then market their app to ensure it has the best chance for success. We'll take a transparent look at the early beginnings of Sworkit to where it is now. From a single developer to a team of 10 employees, and from 10 downloads to 10 million. This talk will be a combination of the development and marketing lessons learned and implemented along the way."
      }),
      new Session({
        time: "4:30pm-5:00pm",
        title: "Generate for AEM and PhoneGap: Design Evolution 3.0 - D2W",
        speakerSlug: "reneelance",
        description: "Taking design to the digital environment has traditionally been time consuming, resource intensive and something designers and developers have been challenged with since the inception of designing for the web. So what if we had the ability to take design compositions from within Photoshop or Illustrator (or any other design tool if there really is any other) and directly turn them into and app, website or email marketing with a one button click? Something that seems too good to be true doesn’t it, well maybe not. This talk will show new Adobe innovation still in the labs, which look at streamlining workflows and rapid prototyping for App creation with Adobe AEM and PhoneGap."
      }),
      new Session({
        time: "5:00pm-5:20pm",
        title: "Loading native code (plugins) dynamically for the enterprise",
        speakerSlug: "shazron",
        description: "Hot-code reload for html/css/js is so 2015, everyone can do it. You probably thought you couldn't hot-reload plugin native code, well you were wrong! I'll show you how (and maybe bake a cake)."
      }),
      new Session({
        time: "5:20pm-5:40pm",
        title: "Microsoft Visual Studio",
        speakerSlug: "ryanjsalva",
        description: "TBA"
      }),
      {
        time: "6:00pm-8:00pm",
        title: "Pub mixer: Drinks and appetizers right after the conference."
      }
    ],
    eu2016 :[
      {
        time: "8:30am-9:00am",
        title: "Registration"
      },
      {
        time: "9:00am-9:15am",
        title: "PhoneGap Kickoff",
        speakerSlug: "simonmacdonald"
      },
      new Session({
        time: "9:15am-9:55am",
        title: "Common PhoneGap Gotchas",
        speakerSlug: "kerrishotts",
        description: "Your users deserve a great experience when they launch your app! Be sure to avoid these common gotchas! The talk would focus on various practices that one should use to avoid a poor user experience, including responding to device events, slow/fast taps, providing affordances, faster animations, designing responsively, a quick touch on security, and also how to handle network connectivity (or lack thereof)."
      }),
      new Session({
        time: "9:55am-10:15am",
        title: "Do we still need a server? P2P web applications distribution on mobile landscape",
        speakerSlug: "denisradin",
        description: "WebRTC becomes first class citizen on web platform and opens us vast sea of possibilities. P2P applications distribution is one of them which can reduce operational costs (by reducing server load and latency) and decentralize access to web content by building self maintainable CDN of user`s devices. So what should we expect from this technology and how big is impact of using P2P distributed content for mobile web world?"
      }),
      new Session({
        time: "10:15am-10:35am",
        title: "Handling the keyboard in hybrid applications",
        speakerSlug: "timlancina",
        description: "Many developers encounter problems with the keyboard while building apps, regardless of the platform they're targeting. Whether it's covering content at the bottom of the screen or messing up your app's layout as the browser tries to bring focused elements into view, getting the keyboard to interact nicely with your content, while still having good UX, can be a challenge. This talk will outline some of the problems specific to handling the keyboard in hybrid apps and go over the different approaches to solving those problems."
      }),
      {
        time: "10:35am-11:00am",
        title: "Break"
      },
      new Session({
        time: "11:00am-11:20am",
        title: "Comparing Dutch Banking App Architectures",
        speakerSlug: "eddyverbruggen",
        description: "<p>Let's be honest. Cordova doesn't immediately come to mind when you want to build an app used daily by millions of users to manage their bank accounts. However, there may be good reasons to do so and in this session we'll explore the why and how of 3 recent approaches medium and large Dutch banks have taken.</p><p>I'll share my first-hand experience and opinion about these approaches and extract a few tips and tricks that can be applied to Cordova apps in general.</p>"
      }),
      new Session({
        time: "11:20am-11:40am",
        title: "Quantifiable performance",
        speakerSlug: "brucelefebvre",
        description: "It can be difficult to pinpoint exactly when that lightning fast, yet smooth as silk app of yours started showing it's first signs of jank. First a dropped frame, next a choppy animation.. In this talk we'll introduce tools and processes that you can use today to start metering the performance of your app in key scenarios, helping you identify issues before your users do. We'll get there with the help of your browser's DevTools, Appium, and browser-perf."
      }),
      new Session({
        time: "11:40am-12:00pm",
        title: "Progressive enhancement for mobile apps: exploring the continuum between Cordova and React Native",
        speakerSlug: "martijnwalraven",
        description: "<p>Rather than looking at Cordova and React Native as two separate technologies that mobile developers have to choose between, these approaches can be seen as part of a continuum that allows for progressive enhancement. It should be possible to build apps from a shared codebase that work out of the box on both desktop and mobile devices, but that can be iterated on to get you all the way to a fully native user experience for the parts where this makes sense.</p><p>The React programming model is especially suited for this, both because of its focus on composability, and because it has shown that a JavaScript UI framework does not have to be dependent on the DOM. This talk will explore how this model makes it possible to reuse components between web and native platforms, and may even allow for ways to seamlessly mix native views and web elements within a single component tree. It will also discuss ongoing work on establishing a common API surface for accessing device-native features.</p>"
      }),
      new Session({
        time: "12:00pm-12:20pm",
        title: "Fixing Continuous Delivery for Mobile",
        speakerSlug: "evanschultz",
        description: "Manual builds and app store approval lags make it near impossible to have an effective mobile continuous delivery process. In turn, this hurts our attempts to be truly Agile with our mobile projects. The solution? Per-pull request deployment through CircleCI, CodePush and a custom CodePush loader in your app. This enables hands-free, automated deployment from commit to a user device, radically changing your testing, validation, and your user feedback processes."
      }),
      {
        time: "12:20pm-1:20pm",
        title: "Lunch"
      },
      new Session({
        time: "1:20pm-2:00pm",
        title: "The State of the Gap",
        speakerSlug: "remysharp",
        description: "<p>\"PhoneGap is a polyfill, and the ultimate purpose of PhoneGap is to cease to exist\" – Brian LeRoux, SPACELORD!1!! at Adobe, 2012.</p><p>Clearly PhoneGap, and Cordova are still required today, but when is it really needed? Did the web ever catch up? Do we always need to turn to a PhoneGap shell for all our solutions?</p>"
      }),
      new Session({
        time: "2:00pm-2:20pm",
        title: "Using Monaca Cloud to enhance Cordova development",
        speakerSlug: "masahirotanaka",
        description: ''
      }),
      new Session({
        time: "2:20pm-2:40pm",
        title: "Hybrid Apps Powering African Mobile Solutions",
        speakerSlug: "saniyusuf",
        description: "With one of the youngest and fast growing populations around, it is a great opportunity to shine a light on how developers in the developing world (Africa) are changing the world with Hybrid solutions. This talk was inspired by months travelling in Africa meeting real developers using Hybrid technologies. This talk will also highlight some of the goodness they are doing and also discuss some challenges faced by these innovators like slower internet connections & supporting legacy mobile devices."
      }),
      new Session({
        time: "2:40pm-2:55pm",
        title: "What's new with PhoneGap Build",
        speakerSlug: "brettrudd",
        description: '',
      }),
      new Session({
        time: "2:55pm-3:15pm",
        title: "Simulating Plugins in the Browser",
        speakerSlug: "ryanjsalva",
        description: "I'll talk about how and why you can continue develop in the browser even after you've added hardware-dependent plugins like the barcode scanner."
      }),
      {
        time: "3:15pm-3:45pm",
        title: "Break"
      },
      new Session({
        time: "3:45pm-4:05pm",
        title: "Making Apps for the Big Screen",
        speakerSlug: "nielsleenheer",
        description: "When PhoneGap was first released, its goal was to become obsolete. On mobile that never happened. However, if you want to create an app for a Smart TV, set-top box or game console, you will find web apps are almost always natively supported. And in many cases it is the only way to build apps. This talk will focus on the different platforms that are out there, the SDKs that you can use, and the practical problems you are going to encounter when you port your apps to the big screen."
      }),
      new Session({
        time: "4:05pm-4:25pm",
        title: "Crosswalk Project Empowers PhoneGap Apps",
        speakerSlug: "raphaelkubodacosta",
        description: "The Crosswalk Project web runtime gives web applications a predictable environment to run in with world class performance. Use new, cutting-edge, or experimental APIs and extensions and deploy complex web applications with confidence. This sessions explores how Crosswalk solves fragmentation challenges across the full range of target mobile devices, improves web app performance, and opens up opportunities to use new APIs for 3D cameras, WebVR, and more. Adding the Crosswalk pluggable webview has never been easier. So much goodness for so little work!"
      }),
      new Session({
        time: "4:25pm-5:05pm",
        title: "Case Study: StoryCorps App",
        speakerSlug: "deanhaddock",
        description: "Dean Haddock shares the story of the StoryCorps app, from early prototypes to the TED Prize and beyond."
      }),
      {
        time: "5:05pm-5:20pm",
        title: "Closing Remarks",
        speakerSlug: "shazron"
      },
      {
        time: "5:30pm",
        title: "Networking Pub Mixer"
      }
    ],
    us2017: [
      {
        time: "9:00am-9:30am",
        title: "Registration and Breakfast"
      },
      {
        time: "9:30am-9:45am",
        title: "PhoneGap kick off",
      },
      new Session({
        time: "9:45am-10:30am",
        title: "Modern JavaScript and PhoneGap",
        speakerSlug: "kerrishotts",
        description: 'JavaScript is changing with new versions of the standard now releasing every year, and lots of proposals being considered for inclusion. Most mobile devices can only support this new world with the help of automation, module loaders and bundlers, and transpilers… but if all of those words sound a little scary, don’t worry — it’s easy to build a workflow that integrates modern JavaScript and PhoneGap together, and in this session we’ll show you how!',
      }),
      new Session({
        time: "10:30am-10:50am",
        title: "Stencil.js and the future of components",
        speakerSlug: "mikehartington",
        description: "Have you ever found an awesome component online, but couldn't use it because it's written for a different framework? For too long now, frameworks have gotten in the way of developers sharing code that they've written. With different APIs to work with, developers would have to rewrite a component multiple times to be able to work with React, Angular, Vue, or even Ember. Enter Web Components. Built on open web standards, Web Components provide a way for creating reusable components that can work within every framework, and even outside of them. Find out what Ionic’s been experimenting with and see why Web Components are the way of the future.",
      }),
      {
        time: "10:50am-11:10am",
        title: "BREAK"
      },
      new Session({
        time: "11:10am-11:30am",
        title: "TBD",
        speakerSlug: "nicole",
        description: ""
      }),
      new Session({
        time: "11:30am-12:10pm",
        title: "TBD",
        speakerSlug: "gregavola",
        description: ""
      }),
      {
        time: "12:10pm-1:10pm",
        title: "LUNCH"
      },
      new Session({
        time: "1:10pm-1:50pm",
        title: "Performant Animations for Hybrid Apps",
        speakerSlug: "alexblom",
        description: "<p>Adding animations to web and hybrid apps can be challenging. Aside from choosing technique, you are often left with jank and less than desirable performance - sometimes even after following best practices for animations.</p><p>This talk will cover:</p><ol><li>What are my choices when animating?;</li><li>What are the tradeoffs / how do I decide?;</li><li>What are the common pitfalls?;</li><li>How do I debug performance problems?;</li><li>Getting a smooth animation.</li>",
      }),
      new Session({
        time: "1:50pm-2:10pm",
        title: "TBD",
        speakerSlug: "masahirotanaka",
        description: ""
      }),
      new Session({
        time: "2:10pm-2:30pm",
        title: "TBD",
        speakerSlug: "purplecabbage",
        description: ""
      }),
      new Session({
        time: "2:30pm-2:50pm",
        title: "Rolling Your Own Multi-Platform Voice Assistant",
        speakerSlug: "bulmash",
        description: "Voice is the new IU of choice, and while most mobile platforms have some voice functionality built in, cloud-based voice APIs are making it possible to create a unified voice-powered experience that follows you from mobile to desktop to… Walk through building a voice-powered PhoneGap app on desktop and mobile, using Amazon’s Lex and Polly services from AWS to voice-enable your apps",
      }),
      {
        time: "2:50pm-3:10pm",
        title: "BREAK"
      },
      {
        time: "3:10pm-3:30pm",
        title: "TBD"
      },
      new Session({
        time: "3:30pm-4:10pm",
        title: "TBD",
        speakerSlug: "johnwargo",
        description: ""
      }),
      {
        time: "4:10pm-4:50pm",
        title: "Henry Zhu"
      },
      {
        time: "4:50pm-5:10pm",
        title: "Closing remarks"
      },
    ],
    eu2017: [
      {
        time: "8:30am-9:00am",
        title: "Registration and Breakfast"
      },
      new Session({
        time: "9:00am-9:20am",
        title: "State of Cordova/PG",
        speakerSlug: "stevesgill",
        description: '',
      }),
      new Session({
        time: "9:20am-10:00am",
        title: "Modern JavaScript and PhoneGap",
        speakerSlug: "kerrishotts",
        description: "JavaScript is changing with new versions of the standard now releasing every year, and lots of proposals being considered for inclusion. Most mobile devices can only support this new world with the help of automation, module loaders and bundlers, and transpilers… but if all of those words sound a little scary, don’t worry — it’s easy to build a workflow that integrates modern JavaScript and PhoneGap together, and in this session we’ll show you how!"
      }),
      new Session({
        time: "10:00am-10:20am",
        title: "Augmented Reality - flavours and challenges",
        speakerSlug: "andreasfotschl",
        description: "Thanks to Niantic the world now knows what augmented reality is. But did you know that the AR technology behind Pokemon Go is already more than 8 years old? In this session, Andreas will give you an overview of the three main categories of AR technology, what they are capable of and how they will empower your Cordova-based app."
      }),
      {
        time: "10:20am-10:50am",
        title: "Break"
      },
      new Session({
        time: "10:50am-11:30am",
        title: "Building Phonegap apps with ember-cordova",
        speakerSlug: 'alexblom',
        description: "This talk will provide new users with a brief introduction to Ember and why it is well suited for a hybrid context. We'll take a brief tour of the core parts, and how to achieve fast rendering speeds. Then, we'll introduce the ember-cordova library and its ecosystem of adapted plugins and tools (such as Icon/Splash generation and Livereload)",
      }),
      {
        time: "11:30am-11:50am",
        title: "TBD"
      },
      new Session({
        time: "11:50am-12:10pm",
        title: "4 Way Databinding For An Offline Mobile Experience",
        speakerSlug: "saniyusuf",
        description: "In today's world, mobile is the primary way we access the internet for our very many important activities. The problem is a lot of apps work great online but become unusable offline. Image if you could not search the previous emails on you mail app when you had no Internet? Creating an offline experience can be challenging with soo many things to worry about like, how best to Sync when the internet comes back or how best to handle conflicts when multiple users change the same data offline? This talk will showcase how we can use PouchDB to achieve 4-way data binding by keeping the Model, View, Serve & Offline Data all in sync while providing the user with a mature offline experience."
      }),
      {
        time: "12:10pm-1:10pm",
        title: "Lunch"
      },
      new Session({
        time: "1:10pm-1:30pm",
        title: "Grow the Community",
        speakerSlug: "shazron",
        description: ''
      }),
      new Session({
        time: "1:30pm-2:10pm",
        title: "Building PhoneGap apps with Vue.js and Framework7",
        speakerSlug: "timoernst",
        description: "Vue.js has gained a lot of popularity in the past few years. Since January this year it is finally possible to create native-looking apps with the power of Vue.js, PhoneGap and Framework7. This talk will give a brief introduction to these new libraries as well as demonstrate how developers can get most out of them, including live demos and code examples."
      }),
      new Session({
        time: "2:10pm-2:40pm",
        title: "Web Components: creating reusable user interface",
        speakerSlug: "masahirotanaka",
        description: "",
      }),
      new Session({
        time: "2:40pm-3:00pm",
        title: "WebVR: Getting Started with A-Frame and VR View",
        speakerSlug: "joebowser",
        description: "Any developer with a modern Android or iOS device and a cardboard viewer can get started making unique experiences relatively quickly. This introductory talk will go over the basics of AFrame will discuss how to to use standard web development practices to bring these experiences quickly across devices, whether they be Cardboard or Daydream-based devices, or Desktop-based VR devices such as the Oculus Rift or HTC Vive. Due to cost and accessibility, this talk will primarily focus on Daydream and Cardboard."
      }),
      new Session({
        time: "3:00pm-3:20pm",
        title: "Cordova and Citizen Science",
        speakerSlug: "edouardlafargue",
        description: "Ed will be presenting Safecast:Drive, an Android app that interfaces with the bGeigie Nano Geiger counter, and enables volunteers to submit their nuclear radiation surveys to Safecast.org. The talk will cover the challenges of building a complex app that includes mapping, USB and BLE with good performance, reliability and low power usage , as well as the strong requirements to make it easy to use for non technical volunteers.<br/>Safecast is an international, volunteer-centered organization devoted to open citizen science for the environment. You can find more information at <a href='http://www.safecast.org'>www.safecast.org</a>"
      }),
      {
        time: "3:20pm-3:50pm",
        title: "Break"
      },
      new Session({
        time: "3:50pm-4:30pm",
        title: "Sworkit: From Side Project to Full Time Venture",
        speakerSlug: "ryanhanna",
        description: "<p>Sworkit had very modest beginnings in 2012 with a humble goal: Build something fun to help Ryan learn to code, and maybe get 100 downloads.</p><p>Now with millions of users and over 45 million workouts completed, Sworkit has gone from a solo side project to a global fitness platform.</p><p>We'll take a transparent look at the key events and build decisions that helped Sworkit get to where it is today. Find out about the various technologies employed at each phase of Sworkit's growth, how to market an app with no budget, and how to successfully generate revenue.</p>"
      }),
      new Session({
        time: "4:30pm-4:50pm",
        title: "Performance Hacks from the Ionic team",
        speakerSlug: "maxlynch",
        description: "Building a fast HTML5 mobile app UI framework is no small task. In this talk I'll share what we've learned optimizing everything from scroll performance, to animation, keyboard interactivity, repaints/reflows, and more."
      }),
      new Session({
        time: "4:50pm-5:10pm",
        title: "Music Exploration in PhoneGap",
        speakerSlug: "purplecabbage",
        description: "What can you do with sound in phonegap? In this talk I'll explore what you can accomplish with sound in apps from music to noise. How to build a metronome, where timing is crucial. How to build an instrument, where pitch is critical. How to combine the 2 to make a sequencer. Then we'll look at what it takes to make a phonegap synthesizer."
      }),
      {
        time: "5:30pm",
        title: "PUB MIXER"
      },
    ],
  },
  workshops: {
    us2016: [
      {
        time: "8:30am - 9:00am",
        title: "Registration and breakfast"
      },
      {
        time: "9:00am-10:30am",
        sessions: [
          new Workshop({
            title: "PhoneGap Beginner",
            speakerSlug: "GarthDB",
            description: "This workshop will provide an introduction to PhoneGap, the philosophy behind it, and how to get started quickly using a variety of different tools available. You will learn how to create a simple mobile app using the PhoneGap CLI, PhoneGap Desktop App, PhoneGap Developer App, and more. You'll then learn how to extend the app with plugins, manipulate it with hooks, and debug it with the various tools available. By the end of this beginner workshop, you will walk away with a solid understanding of what PhoneGap is all about and how to use it for your next project."
          }),
          new Workshop({
            title: "Hands-on Bluetooth Low Energy",
            speakerSlug: "doncoleman",
            description: "You’ve heard a lot about Bluetooth low energy, but do you understand how it works? This workshop will give you a chance to get hands-on experience building PhoneGap applications that interact with Bluetooth Smart devices. We will cover Bluetooth LE concepts like services and characteristics while we are building the software. The mobile application will be written with PhoneGap so it will run on iOS or Android. The phone will control hardware via Bluetooth LE, and automatically receive notifications when something changes on the peripheral. Participants will be required to bring a laptop and are encouraged to bring a Bluetooth LE-capable iOS or Android phone. There will be a limited number of phones that people can borrow for the workshop. Familiarity with at least one programming language is helpful but not required. A list of required free software will be sent to attendees before the workshop."
          }),
          new Workshop({
            title: "App Privacy and Security for PhoneGap Developers",
            speakerSlug: "tommywilliams",
            description: "Our mobile devices are rich targets packed full of sensors, and ripe for the harvesting of personal information. All too often, developers on deadlines leave security and privacy concerns until the last minute, or don't get around to them at all. This workshop will show not only the importance of security and privacy, but some basic steps we as developers can take to ensure our apps are a safe place for our users (not to mention keeping the app safe from those same users). From avoiding XSS, understanding the whitelist and CSP, to ensuring that what data we do collect is kept safe. This workshop will give you a better understanding of how to ensure privacy and security are a part of your app from day one."
          }),
        ]
      },
      {
        time: "10:30am-10:45am",
        title: "Break"
      },
      {
        time: "10:45am-12:00pm",
        sessions: [
          new Workshop({
            title: "App submission",
            speakerSlug: "timkim",
            description: "Submitting an app."
          }),
          new Workshop({
            title: "Building an App with Ionic 2",
            speakerSlug: "mikehartington",
            description: "You've built Ionic apps before, but now that V2 is out, what can you expect? In this session, we'll look at an Ionic 1 app and go through the process of building its Ionic 2 equivalent."
          }),
          new Workshop({
            title: "PhoneGap Intermediate",
            speakerSlug: "hollyschinsky",
            description: "<p>In this workshop we'll walk through creating an app from start to finish. Throughout the process we'll gain an understanding of:</p><ul><li>Common mobile app development paradigms (navigation, view stacks)</li><li>Popular mobile framework options</li><li>Mobile UI design patterns (flat vs. material design)</li><li>Performance tips</li><li>App configuration (preferences, permissions, icons/splashscreens) And more!</li></ul>"
          }),
        ]
      },
      {
        time: "12:00pm-1:00pm",
        title: "Lunch"
      },
      {
        time: "1:00pm-2:00pm",
        sessions: [
          new Workshop({
            title: "Build the Amazon App",
            speakerSlug: ["shawnjansepar", "lokimeyburg"],
            description: "A workshop on quickly building a hybrid app with feature parity to Amazon's app with a mix of native and web interfaces. In this workshop we will guide you through building a commerce-enabled app with feature parity to the Amazon iOS app using a combination of web and native components using Astro, our latest SDK built on top of Cordova."
          }),
          new Workshop({
            title: "Memory Leaks in Hybrid Mobile Apps.",
            speakerSlug: "chrisgosselin",
            description: "An investigation into how memory leaks effect hybrid applications and how to track them down."
          }),
          new Workshop({
            title: "Cordova Plugins in Action",
            speakerSlug: ["brianrinaldi", "tjvantoll"],
            description: "Do you love Cordova plugins? So do we! At Telerik we maintain a Cordova plugins marketplace at plugins.telerik.com/cordova, and we’re up to 65 free plugins and counting. In this workshop you’ll install a wide variety of plugins to see how they work in action. You’ll learn about the various ways you can install and test plugins—from the Cordova CLI, to premium tooling available in the Telerik Platform. Come with a laptop and ready to learn about plugins you can use in your next app."
          }),
        ]
      },
      {
        time: "2:00pm-3:30pm",
        sessions: [
          new Workshop({
            title: "REPEAT PhoneGap Beginner",
            speakerSlug: "GarthDB",
            description: "This workshop will provide an introduction to PhoneGap, the philosophy behind it, and how to get started quickly using a variety of different tools available. You will learn how to create a simple mobile app using the PhoneGap CLI, PhoneGap Desktop App, PhoneGap Developer App, and more. You'll then learn how to extend the app with plugins, manipulate it with hooks, and debug it with the various tools available. By the end of this beginner workshop, you will walk away with a solid understanding of what PhoneGap is all about and how to use it for your next project."
          }),
          new Workshop({
            title: "Embedding PhoneGap natively: The Hybrid Sweet Spot",
            speakerSlug: "aniskadri",
            description: "Many developers choose to build native navigation and transitions into their apps but use webviews for the main content, allowing them to realize a large cost and time savings while making their app available to a wider range of users quickly. This approach also provides the ability to push timely updates without app store approval hassles. With this model, only a small native code-base needs to be maintained per platform, and it’s typically the static elements of the app rather than the main content, thus more manageable. Note: iOS only."
          }),
          new Workshop({
            title: "Plugins are Everything, and Everything is a Plugin!",
            speakerSlug: "purplecabbage",
            description: "Jesse has been writing PhoneGap plugins since before there were plugins.  In this deep dive workshop Jesse will cover all the requirements of making great plugins, from conception to testing to publishing. He will also share some secrets from his bag'o'tricks and demonstrate some interesting uses for plugins you may not have thought of. Come ready to build!"
          }),
        ]
      },
      {
        time: "3:30pm-3:45pm",
        title: "Break"
      },
      {
        time: "3:45pm-4:45pm",
        sessions: [
          new Workshop({
            title: "Supercharge your Hybrid Apps with Microservices for Mobile",
            speakerSlug: "cianclarke",
            description: "In this hands-on session, we will first build a simple Cordova based mobile app using the barcode scanner plugin. Then, we’ll build a microservice written in Node.js to retrieve some hard-to-get data. Along the way, we’ll explore the benefits of this approach, and why hybrid mobile apps are really just an extension of microservices to the client side. Participants only need to bring a laptop with a modern web browser, and will leave the session primed with practical experience building microservices for their mobile apps."
          }),
          new Workshop({
            title: "Hands on: Create advanced apps with the Crosswalk runtime",
            speakerSlug: "alexismenard",
            description: "Join Crosswalk architect, Alexis Menard, in a hands-on lab where you will discover how to leverage the power of Crosswalk in your web and hybrid applications and take advantage of the latest web innovations across Android, iOS, and Windows."
          }),
          new Workshop({
            title: "Optimizing Performance and User Interface",
            speakerSlug: "masahirotanaka",
            description: "Performance was a major concern among hybrid app developers for many years, which has been dramatically improved by the computing power and the performant web views. However, it does not mean you can build an app that runs smoothly without any prior knowledge. This session will describe some of the best practices to analyze, measure and improve the app, ensuring its better user experience."
          }),
        ]
      },
      {
        time: "4:45pm-6:00pm",
        sessions: [
          new Workshop({
            title: "PhoneGap Push Notifications",
            speakerSlug: "simonmacdonald",
            description: "In this workshop we'll walk through adding push notification capabilities to your application. You'll learn how to set up a Google Cloud Messaging project for Android notifications and adding push capabilities to your iOS certificate and provisioning profiles. You'll gain an understanding of how to register with your remote push service and handle incoming notifications. Advanced topics will include how to add action buttons, responding to silent push notifications and testing using node.js."
          }),
          new Workshop({
            title: "REPEAT Hands-on Bluetooth Low Energy",
            speakerSlug: "doncoleman",
            description: ""
          }),
          new Workshop({
            title: "Visual Studio",
            speakerSlug: "ryanjsalva",
            description: ""
          }),
        ]
      }
    ],
    eu2016: [
      {
        time: "9:00am-9:30am",
        title: "Registration"
      },
      {
        time: "9:30am-11:00am",
        sessions: [
          new Workshop({
            title: "PhoneGap Essentials",
            speakerSlug: "hollyschinsky",
            description: "In this workshop we'll learn the essential building blocks needed for building apps with PhoneGap while actually building a fully functioning app. Some concepts we'll cover include: <ul><li>Common mobile app development paradigms (navigation, view stacks)</li><li>Mobile UI design patterns (flat vs. material design)</li><li>Performance tips</li><li>App debugging</li><li>App configuration (preferences, permissions, icons/splash screens)</li><li>Using plugins</li></ul>"
          }),
          new Workshop({
            title: "Plugins are Everything, and Everything is a Plugin!",
            speakerSlug: "purplecabbage",
            description: "Jesse has been writing PhoneGap plugins since before there were plugins. In this deep dive workshop Jesse will cover all the requirements of making great plugins, from conception to testing to publishing. He will also share some secrets from his bag'o'tricks and demonstrate some interesting uses for plugins you may not have thought of. Come ready to build!"
          }),
        ]
      },
      {
        time: "11:00am-11:15am",
        title: "Break"
      },
      {
        time: "11:15am-12:15pm",
        sessions: [
          new Workshop({
            title: "Hot Updates of your PhoneGap apps using CodePush and Ionic 2",
            speakerSlug: ["evanschultz","bertrandkarerangabo"],
            description: "<p>Submitting new builds through the Apple App Store approval process can slow down getting important bug fixes and features to your users. In this workshop, you will learn how to make use of Microsoft's CodePush services to deploy your PhoneGap applications updates directly to users.</p><p>At the end of the workshop, attendees will understand the foundations of using CodePush to update their PhoneGap applications.</p><p>This workshop will cover:<ul><li>Setting up CodePush</li><li>Getting started with a basic Ionic 2 Application</li><li>Hooking up CodePush into your application</li><li>Managing deployments and rollbacks</li></ul></p><p>Prerequisites:<ul><li>node</li><li>git</li><li>CodePush CLI tools installed</li><li>ionic2 CLI tools installed</li><li>Xcode</li></ul>"
          }),
          new Workshop({
            title: "Creating the ideal Cordova dev environment",
            speakerSlug: "ryanjsalva",
            description: "We'll geek out over strategies for managing Node + NPM, customizing the command line with bash scripts, tricking out your code editor with plugins, optimizing your edit/preview/debug development loop, choosing devices for your hardware library, and streamlining deployment with continuous integration/release."
          }),
        ]
      },
      {
        time: "12:15pm-1:15pm",
        sessions: [
          new Workshop({
            title: "Augmented reality apps with PhoneGap",
            speakerSlug: "andreasschacherbauer",
            description: "In this workshop we will what augmented reality has to offer and how to integrate AR functionality into your PhoneGap/Cordova app. We will have a look how to create AR experiences using Wikitude's JavaScript API."
          }),
          new Workshop({
            title: "Embedding PhoneGap in a native app",
            speakerSlug: ["aniskadri","eddyverbruggen"],
            description: "Many developers choose to build native navigation and transitions into their apps but use webviews for the main content, allowing them to realize a large cost and time savings while making their app available to a wider range of users quickly. This approach also provides the ability to push timely updates without app store approval hassles. With this model, only a small native code-base needs to be maintained per platform, and it’s typically the static elements of the app rather than the main content, thus more manageable."
          }),
        ]
      },
      {
        time: "1:15pm-2:15pm",
        title: "Lunch"
      },
      {
        time: "2:15pm-3:45pm",
        sessions: [
          new Workshop({
            title: "App Privacy and Security for PhoneGap Developers",
            speakerSlug: "stevesgill",
            description: "Our mobile devices are rich targets packed full of sensors, and ripe for the harvesting of personal information. All too often, developers on deadlines leave security and privacy concerns until the last minute, or don’t get around to them at all. This workshop will show not only the importance of security and privacy, but some basic steps we as developers can take to ensure our apps are a safe place for our users (not to mention keeping the app safe from those same users). From avoiding XSS, understanding the whitelist and CSP, to ensuring that what data we do collect is kept safe. This workshop will give you a better understanding of how to ensure privacy and security are a part of your app from day one."
          }),
          new Workshop({
            title: "PhoneGap Push Notifications",
            speakerSlug: "simonmacdonald",
            description: "In this workshop we'll walk through adding push notification capabilities to your application. You'll learn how to set up a Google Cloud Messaging project for Android notifications and adding push capabilities to your iOS certificate and provisioning profiles. You'll gain an understanding of how to register with your remote push service and handle incoming notifications. Advanced topics will include how to add action buttons, responding to silent push notifications and testing using node.js."
          }),
        ]
      },
      {
        time: "3:45pm-4:45pm",
        sessions: [
          new Workshop({
            title: "Learn React with Onsen UI 2",
            speakerSlug: "masahirotanaka",
            description: "<p>In this workshop, you will understand how to develop beautiful apps using React and Onsen UI 2. You will learn React and how to effectively use it for developing Cordova apps.</p><p>Level: Beginner to Intermediate.</p>"
          }),
          new Workshop({
            title: "Developing Cordova apps on Ubuntu devices",
            speakerSlug: "davidbarth",
            description: "We'll walk you through the basics of getting a development environment ready for Cordova on Ubuntu, talk about specific aspects of the Ubuntu application model and security, and run a couple of demos to illustrate the capabilities of the platform and of the Ubuntu Oxide webview. With Ubuntu spanning across Desktop, mobile and IOT with converged laptop / tablet device, this will be the opportunity to see how Cordova apps can literally stretch across form factors."
          }),
        ]
      },
      {
        time: "4:45pm-5:00pm",
        title: "Break"
      },
      {
        time: "5:00pm-6:00pm",
        sessions: [
          new Workshop({
            title: "PhoneGap Build",
            speakerSlug: "wildabeast",
            description: "Let the people who work on PhoneGap Build show you how to use the service efficiently, hands on. You'll learn how to build a simple cross-platform mobile app with Build, how to add and use plugins, and how to sign your apps for publishing to app stores, all while avoiding platform SDKs. We'll welcome questions, feature requests and feedback for improving the service."
          }),
          new Workshop({
            title: "App Submission",
            speakerSlug: "shazron",
            description: "This workshop will cover best practices when submitting an app."
          }),
        ]
      }
    ],
    us2017: [
      {
        time: "9:30am-10:00am",
        title: "Registration and breakfast"
      },
      {
        time: "10:00am-11:30am",
        sessions: [
          new Workshop({
            title: "Testing PhoneGap Apps",
            speakerSlug: "audrey",
            description: "<p>Building and maintaining high quality PhoneGap apps, like all software, involves testing. In this lab we will cover the following topics, as we work through instrumenting a real app with a test suite to improve it's quality, help avoid regressions and speed up development:</p><ul><li>What is testing, and why do it?</li><li>Unit testing</li><li>Integration testing</li><li>Continuous integration</li></ul>"
          }),
          new Workshop({
            title: "Hands-on Bluetooth Low Energy",
            speakerSlug: "doncoleman",
            description: "You’ve heard a lot about Bluetooth low energy, but do you understand how it works? This workshop will give you a chance to get hands-on experience building PhoneGap applications that interact with Bluetooth Smart devices. We will cover Bluetooth LE concepts like services and characteristics while we are building the software. The mobile application will be written with PhoneGap so it will run on iOS or Android. The phone will control hardware via Bluetooth LE, and automatically receive notifications when something changes on the peripheral. Participants will be required to bring a laptop and are encouraged to bring a Bluetooth LE-capable iOS or Android phone. There will be a limited number of phones that people can borrow for the workshop. Familiarity with at least one programming language is helpful but not required. A list of required free software will be sent to attendees before the workshop."
          }),
        ]
      },
      {
        time: "11:30am-12:30pm",
        title: "Lunch"
      },
      {
        time: "12:30pm-2:00pm",
        sessions: [
          new Workshop({
            title: "Creating Voxel Art for WebVR!",
            speakerSlug: "timkim",
            description: ""
          }),
          new Workshop({
            title: "Plugins",
            speakerSlug: ["kerrishotts","purplecabbage"],
            description: "In this deep dive workshop we will cover all the requirements of making great plugins, from conception to testing to publishing. We will also share some secrets from his bag'o'tricks and demonstrate some interesting uses for plugins you may not have thought of. Come ready to build!"
          }),
        ]
      },
      {
        time: "2:00pm-2:30pm",
        title: "Break"
      },
      {
        time: "2:30pm-4:00pm",
        sessions: [
          new Workshop({
            title: "PWAs",
            speakerSlug: "hollyschinsky",
            description: "In this workshop you'll learn how to build an app that leverages the best of what Progressive Web Apps and PhoneGap have to offer. PWA's are all the rage as of late, but they're currently not supported on iOS, and mobile browsers still don't support every API for accessing certain sensors and hardware features. In this workshop you'll learn how you can build an app that can run as both a PWA and a hybrid app with PhoneGap."
          }),
          {
            title: "TBD",
            speakerSlug: "",
          },
        ]
      },
    ],
    eu2017: [
      {
        time: "9:30am-10:00am",
        title: "Registration"
      },
      {
        time: "10:00am-11:30am",
        sessions: [
          new Workshop({
            title: "Testing PhoneGap Apps",
            speakerSlug: "filmaj",
            description: "<p>Building and maintaining high quality PhoneGap apps, like all software, involves testing. In this lab we will cover the following topics, as we work through instrumenting a real app with a test suite to improve it's quality, help avoid regressions and speed up development:</p><ul><li>What is testing, and why do it?</li><li>Unit testing</li><li>Integration testing</li><li>Continuous integration</li></ul>"
          }),
          new Workshop({
            title: "Hacking the A-Frame: An Introduction to WebVR",
            speakerSlug: ["joebowser","shazron"],
            description: "This workshop will cover the basics of working with A-Frame, a WebVR framework developed by Mozilla, and will have attendees create and extend an existing WebVR example to support additional 360 images. It will also cover packaging an project developed in AFrame inside a Cordova application, and the various things to consider when developing WebVR for Mobile."
          }),
        ],
      },
      {
        time: "11:30am-12:30pm",
        title: "Lunch"
      },
      {
        time: "12:30pm-2:00pm",
        sessions: [
          new Workshop({
            title: "Cross Platform Progressive Web Apps",
            speakerSlug: "hollyschinsky",
            description: "In this workshop you'll learn how to build an app that leverages the best of what Progressive Web Apps and PhoneGap have to offer. PWA's are all the rage as of late, but they're currently not supported on iOS, and mobile browsers still don't support every API for accessing certain sensors and hardware features. In this workshop you'll learn how you can build an app that can run as both a PWA and a hybrid app with PhoneGap."
          }),
          new Workshop({
            title: "Creating a Modern PhoneGap Plugin",
            speakerSlug: ["kerrishotts","purplecabbage"],
            description: "Creating a PhoneGap plugin doesn’t have to be scary, and it isn’t all that difficult! In this workshop you’ll learn how to create a simple plugin, how to structure your plugin for multi-platform support, how to add it to your projects, and how to test it thoroughly using Cordova’s plugin testing framework."
          }),
        ],
      },
      {
        time: "2:00pm-2:30pm",
        title: "Break"
      },
      {
        time: "2:30pm-4:00pm",
        sessions: [
          new Workshop({
            title: "PhoneGap Push Notifications",
            speakerSlug: "simonmacdonald",
            description: "In this workshop we'll walk through adding push notification capabilities to your application. You'll learn how to set up a Firebase Cloud Messaging project for Android notifications and adding push capabilities to your iOS certificate and provisioning profiles. You'll gain an understanding of how to register with your remote push service and handle incoming notifications. Advanced topics will include how to add action buttons, responding to silent push notifications and testing using node.js."
          }),
          new Workshop({
            title: "App Privacy and Security for PhoneGap Developers",
            speakerSlug: "tommywilliams",
            description: "Our mobile devices are rich targets packed full of sensors, and ripe for the harvesting of personal information. All too often, developers on deadlines leave security and privacy concerns until the last minute, or don't get around to them at all. This workshop will show not only the importance of security and privacy, but some basic steps we as developers can take to ensure our apps are a safe place for our users (not to mention keeping the app safe from those same users). From avoiding XSS, understanding the whitelist and CSP, to ensuring that what data we do collect is kept safe. This workshop will give you a better understanding of how to ensure privacy and security are a part of your app from day one."
          }),
        ]
      }
    ],
  },
  routes: function () {
    const routes = this.speakers.reduce(function (previousValue, currentValue, index){
      if (currentValue.conferences.indexOf("eu2017") >= 0) {
        previousValue.push("/eu2017/speaker/"+currentValue.slug);
      }
      if (currentValue.conferences.indexOf("us2017") >= 0) {
        previousValue.push("/us2017/speaker/"+currentValue.slug);
      }
      return previousValue;
    }, ["/","/us2017/","/eu2017/"]);
    return routes;
  },
  findSessionBySpeakerSlug: function(slug, conferenceSlug) {
    var sessions = []
    for (var i = 0; i < this.sessions[conferenceSlug].length; i++) {
      if(Array.isArray(this.sessions[conferenceSlug][i].speakerSlug)){
        for (var j = 0; j < this.sessions[conferenceSlug][i].speakerSlug.length; j++) {
          if(this.sessions[conferenceSlug][i].speakerSlug[j] == slug) {
            sessions.push(this.sessions[conferenceSlug][i]);
          }
        }
      } else {
        if(this.sessions[conferenceSlug][i].speakerSlug == slug) {
          sessions.push(this.sessions[conferenceSlug][i]);
        }
      }
    }
    return sessions;
  },
  findSpeakerBySlug: function (slug) {
    for (var i = 0; i < this.speakers.length; i++) {
      if(this.speakers[i].slug == slug){
        return this.speakers[i];
      }
    }
    return null;
  },
  findSpeakersByConference: function(conferenceSlug) {
    var id = 0;
    var newSpeakerSet = this.speakers.filter(function(speaker){
      if (speaker.conferences.indexOf(conferenceSlug) >= 0){
        id++;
        speaker.id = `${conferenceSlug}-${id}`;
        return true;
      } else {
        return false;
      }
    });
    newSpeakerSet.sort(function(a,b) {
      if(a.slug < b.slug) return -1;
      if(a.slug > b.slug) return 1;
      return 0;
    });
    return newSpeakerSet;
  },
  findWorkshopBySpeakerSlug: function(slug, conferenceSlug) {
    let sessions = [];
    for (var i = 0; i < this.workshops[conferenceSlug].length; i++) {
      var time = this.workshops[conferenceSlug][i].time
      var workshopTime = this.workshops[conferenceSlug][i]
      if(workshopTime.hasOwnProperty('sessions')){
        for (var j = 0; j < workshopTime.sessions.length; j++) {
          if(Array.isArray(workshopTime.sessions[j].speakerSlug)){
            for (var k = 0; k < workshopTime.sessions[j].speakerSlug.length; k++) {
              if(workshopTime.sessions[j].speakerSlug[k] == slug){
                var session = workshopTime.sessions[j];
                session.time = time;
                sessions.push(session);
              }
            }
          } else {
            if(workshopTime.sessions[j].speakerSlug == slug){
              var session = workshopTime.sessions[j];
              session.time = time;
              sessions.push(session);
            }
          }
        }
      }
    }
    return sessions;
  }
}
