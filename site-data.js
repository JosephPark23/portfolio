window.ACCENT = "#AD781B";

window.FONTS = {
  heading: "'Spectral', Georgia, serif",
  body:    "'Hanken Grotesk', system-ui, sans-serif",
  label:   "'Space Mono', ui-monospace, monospace"
};

window.SITE_DATA = {

  profile: {
    name: "Joseph Park",
    bio: `Hello! As a brief bit of background about myself, my name is Joseph and I am a rising senior at Ardsley High School, NY. My interests include privacy, applied cryptography, network security, cyber-physical systems security, and sometimes the intersection of all of them! My main interest right now is privacy, and protecting data from being misused or shared against a user's will - some examples of questions that motivate my current research are... How can we protect digital rights or digital safety? How can we assert control over how our data is used (data sovereignty)? How do we protect against surveillance (anonymity)? How can we use new technologies to resolve some of these questions?

    I am a big fan of puzzles (personally I like sudokus and crosswords), and an even bigger fan of CTFs; I also lead my school's computer science club. My hobbies include playing soccer, skateboarding, writing, and reading. I play violin a lot (though I often forget to practice) and my two favorite movies are Little Miss Sunshine and Oppenheimer. Show recommendations are welcome!`,
    location: "Greenburgh, New York",
    interests: [
      { label: "Puzzles",           note: "" },
      { label: "Violin",            note: "" },
      { label: "Soccer",            note: "" },
      { label: "Reading & writing", note: "" },
      { label: "Movies",            note: "" },
      { label: "CS club",           note: "" }
    ],
    primaryLinks: [
      { label: "GitHub", url: "https://github.com/JosephPark23" },
      { label: "Email",  url: "mailto:joseph0701p@gmail.com" }
    ]
  },

  sections: {
    work:  "Selected Works & Activities",
    other: "Miscellaneous Activities"
  },

  work: [

    {
      title: "DJI Drone Security and Intrusion Detection Research @ GMU Cyber Innovation Lab",
      tag: "Research",
      years: "SUMMER 2025 - SPRING 2026",
      role: "Student Researcher & Intern",
      status: "Completed",
      description: "I had a really cool opportunity to hack a DJI drone (the Neo) through George Mason University's Living Cyber Innovation Lab! I did a two-phase research project: first, I completed pentesting and a vulnerability assessment; based on the security flaws I found, I created an IDRS (Intrusion Detection/Response System) to protect DJI drone users. The published conference paper and project repository are below (manuscript available on the repo):",
      bullets: [
        "1st place, High School Category, AIAA Region I Student Conference; conference paper published in the AIAA ARC conference proceedings.",
        "4th place in Computer Science and the New York Invents Award at the Westchester Science & Engineering Fair; 3rd place (Engineering & Technology) at the Tri-County Science Fair."
      ],
      results: [],
      technologies: [],
      links: [
        { label: "Repository",            url: "https://github.com/JosephPark23/drone-idrs-2025" },
        { label: "Conference Paper DOI",  url: "https://doi.org/10.2514/6.2026-114726" },
        { label: "Poster",                url: "https://github.com/JosephPark23/drone-idrs-2025/blob/main/presentations/WESEF%20poster.pdf" },
        { label: "Presentation",          url: "https://github.com/JosephPark23/drone-idrs-2025/blob/main/presentations/AIAA%20Conf%20Slides.pdf" },
        { label: "Demo video",            url: "" }
      ],
      image: "", imageAlt: ""
    },

    {
      title: "Genomic Data Privacy Research @ Yale Applied Cryptography Lab",
      tag: "Research",
      years: "SUMMER 2026",
      role: "Student Researcher & Intern",
      status: "In progress",
      description: "This summer, I am working on a project at Yale University's Applied Cryptography Lab with Assistant Professor Fan Zhang, extending upon the 2026 iDASH Privacy & Security Workshop's Secure Genome Analysis Competition, Track 2 (Gene-Disease Research Activity Logging System). The goal is to develop an efficient collaborative data-sharing and data-analysis application for genomic information using Ethereum smart contracts. Exciting times ahead!",
      bullets: [
        "Planned submission to 2026 iDASH Privacy & Security Workshop's Secure Genome Analysis Competition's Track 2 (Gene-Disease Research Activity Logging System)"
      ],
      results: [],
      technologies: [],
      links: [
        { label: "Competition Description", url: "https://humangenomeprivacy.org/2026/competition-tasks.html#:~:text=Track%202%3A%20Gene%2DDisease%20Research%20Activity%20Logging%20System%20for%20Collaborative%20Data%20Analysis" },
        { label: "Paper",  url: "" },
        { label: "Poster", url: "" }
      ],
      image: "", imageAlt: ""
    },

    {
      title: "Ardsley Innovate",
      tag: "Leadership",
      years: "GRADES 9–PRESENT",
      role: "President",
      status: "",
      description: "I lead my school's computer science club: we primarily run CyberPatriot (a club-record season this year!) and co-host an annual local hackathon with Girls Who Code.",
      bullets: [
        "Led the varsity CyberPatriot team to 1st overall in New York State and four of five teams to the semifinals (including two all-freshman teams).",
        "Wrote a Linux competition guide and built a club wiki; taught new members Linux to raise Linux scores by roughly 30–50%.",
        "Helped run the club's annual interscholastic hackathon, organized sponsors, and updated and maintained the hackathon website.",
        "Antagonized librarian because we ate Oreos in the library during CyberPatriot"
      ],
      results: [],
      technologies: [],
      links: [
        { label: "ArdsleyHacks", url: "https://www.ardsleyhacks.org/" },
        { label: "Wiki",         url: "https://sponge-answer-0b6.notion.site/f53f271076f44766859fac59e7385c74?v=362df23e495a8055b59b000cbeb74b88" }
      ],
      image: "", imageAlt: ""
    },

    {
      title: "Capture-the-Flag Competitions",
      tag: "Competition",
      years: "GRADES 9-PRESENT",
      role: "Learned a lot!",
      status: "",
      description: "I compete individually in national cybersecurity and capture-the-flag competitions.",
      bullets: [],
      results: [
        {
          competition: "National Cyber League",
          season: "Fall 2025",
          result: "14th of 1,046 in the High School Bracket · 84th of 7,873 in the Full Bracket.",
          url: "./uploads/fall2025.pdf",
          linkLabel: "Score report",
          report: "", reportLabel: ""
        },
        {
          competition: "National Cyber League",
          season: "Spring 2026",
          result: "32nd of 1,392 in the High School Bracket.",
          url: "./uploads/spring2026.pdf",
          linkLabel: "Score report",
          report: "", reportLabel: ""
        },
        {
          competition: "CMU picoCTF",
          season: "Spring 2025",
          result: "69th of 1,817 in the High School Bracket.",
          url: "https://learn.cylabacademy.org/events/74/scoreboards?scoreboard=4878&page=2#:~:text=jospar",
          linkLabel: "Scoreboard",
          report: "", reportLabel: ""
        },
        {
          competition: "U.S. Cyber Challenge — Cyber Quest",
          season: "Winter 2025",
          result: "58th nationally; qualified for the 2025 and 2026 U.S. Cyber Challenge camps.",
          url: "https://uscc.cyberquests.org/winter2025_scoreboard.php#:~:text=jospar0",
          linkLabel: "Scoreboard",
          report: "", reportLabel: ""
        }
      ],
      technologies: [],
      links: [],
      image: "", imageAlt: ""
    },

    {
      title: "Science Olympiad",
      tag: "STEM",
      years: "GRADES 8-PRESENT",
      role: "",
      status: "",
      description: "Hopefully this year we can make states!",
      bullets: [
        "Regional medals: 1st in Dynamic Planet, 1st in Materials Science; 2nd in Air Trajectory; 2nd in Bungee Drop; 3rd in Astronomy."
      ],
      results: [],
      technologies: [],
      links: [],
      image: "", imageAlt: ""
    }

  ],

  other: [

    {
      title: "Violin",
      tag: "Music",
      years: "Since 3rd grade",
      role: "1st Violinist / Second Chair", status: "Should I play viola?",
      description: "My poor violin, which I frequently forget to practice, has been through a lot. I play in my school's chamber orchestra, GWYOA (county-wide symphonic orchestra), and Area All-State Ensembles. I also play in charity concerts and assisted living homes.",
      bullets: [
        "Second Chair (1st Violin) in the school chamber orchestra and a member of GWYOA; performed at David Geffen Hall at Lincoln Center.",
        "All-State Audition Scores: 97 and 98"
      ],
      results: [], links: [], image: "", imageAlt: ""
    }

  ],

  academics: {
    gpa: "3.90 / 4.00",
    gpaNote: "",

    testing: {
      apNote: "Taken May 2025 & May 2026",
      apExams: [
        "Computer Science A",
        "Chemistry",
        "English Language",
        "United States History",
        "Computer Science Principles"
      ],
      apScore: "5",
      psat: "1510 / 1520"
    },

    coursework: [
      { name: "AP Computer Science A",        featured: true },
      { name: "AP Chemistry",                 featured: true },
      { name: "AP English Language",          featured: true },
      { name: "AP United States History",     featured: true },
      { name: "AP Computer Science Principles", featured: true },
      { name: "Science Research II",          featured: true },
      { name: "Pre-Calculus Honors",          featured: true },
      { name: "Chemistry Honors",             featured: false },
      { name: "Geometry/Trigonometry Honors", featured: false },
      { name: "Spanish III Honors",           featured: false },
      { name: "Spanish IV Honors",            featured: false },
      { name: "Science Research I",           featured: false }
    ],

    planned: [
      { name: "AP Calculus BC",              featured: true },
      { name: "AP Physics 1",                featured: true },
      { name: "Science Research III",        featured: true },
      { name: "AP United States Government",  featured: true },
      { name: "AP English Literature",       featured: true },
      { name: "AP Spanish",                  featured: true },
      { name: "AP Psychology",               featured: true },
      { name: "Chamber Orchestra",           featured: true }
    ]
  },

  contact: {
    intro: "I have a repo with my 2025 research portfolio, along with some old python projects:",
    links: [
      { label: "Email",  url: "mailto:joseph0701p@gmail.com" },
      { label: "GitHub", url: "https://github.com/JosephPark23" },
      { label: "Résumé", url: "" }
    ]
  }

};
