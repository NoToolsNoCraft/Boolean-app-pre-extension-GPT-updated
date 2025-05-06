// --- DATA SOURCES ---
const jobTitleSuggestions = [
    "Product Manager", "Senior Product Manager", "Junior Product Manager",
    "Associate Product Manager", "Technical Product Manager", "Product Owner",
    "Digital Product Manager", "Lead Product Manager", "Group Product Manager",
    "Director of Product Management", "VP of Product", "Product Strategy Manager",
    "Product Development Manager",
    
    "Data Scientist", "Senior Data Scientist", "Junior Data Scientist",
    "Lead Data Scientist", "Machine Learning Scientist", "Applied Scientist",
    "Research Scientist", "Data Science Engineer", "AI Data Scientist",
    "Business Data Scientist", "Quantitative Researcher", "Quantitative Analyst (Quant)",
    
    "UI/UX Designer", "Senior UI/UX Designer", "Junior UI/UX Designer",
    "UX Designer", "UI Designer", "Product Designer", "Interaction Designer",
    "User Experience Researcher", "UX Researcher", "Visual Designer",
    "UX Architect", "Mobile UX Designer", "Web UI Designer", "UX Strategist",
    
    "Sales Representative", "Sales Associate", "Account Executive", "Account Manager",
    "Inside Sales Representative", "Outside Sales Representative", "Field Sales Representative",
    "Sales Development Representative (SDR)", "Business Development Representative (BDR)",
    "Territory Sales Manager", "Regional Sales Manager", "Enterprise Sales Executive",
    "Retail Sales Associate",
    
    "Graphic Designer", "Senior Graphic Designer", "Junior Graphic Designer",
    "Visual Designer", "Brand Designer", "Creative Designer",
    "Digital Designer", "Motion Graphic Designer", "3D Designer",
    "Production Artist", "Visual Content Creator", "Marketing Designer",
    "Print Designer", "Multimedia Designer",
    
    "Project Manager", "Senior Project Manager", "Junior Project Manager",
    "Technical Project Manager", "IT Project Manager", "Agile Project Manager",
    "Scrum Master", "Program Manager", "Project Coordinator",
    "Project Leader", "Implementation Manager", "Project Director",
    "Operations Project Manager",
    
    "DevOps Engineer", "Senior DevOps Engineer", "Junior DevOps Engineer",
    "Cloud DevOps Engineer", "DevOps Specialist", "Infrastructure Engineer",
    "Site Reliability Engineer (SRE)", "Platform Engineer", "Systems Reliability Engineer",
    "Automation Engineer", "Build and Release Engineer", "CI/CD Engineer",
    "DevOps Architect",

    "Software Engineer", "Senior Software Engineer", "Junior Software Engineer",
    "Frontend Engineer", "Backend Engineer", "Full Stack Engineer", "Full Stack Developer",
    "Frontend Developer", "Backend Developer", "Application Developer", "Mobile App Developer",
    "iOS Developer", "Android Developer", "Web Developer", "Embedded Software Engineer",
    "Cloud Engineer", "Platform Engineer", "Machine Learning Engineer", "AI Engineer",
    "Data Engineer", "DevOps Engineer", "Site Reliability Engineer (SRE)",
    "Security Engineer", "Software Architect", "Solutions Architect", "Technical Lead",
    "Software Development Engineer (SDE)", "Systems Engineer", "Game Developer", "Unity Developer",
    "Unreal Engine Developer", "Blockchain Developer", "Smart Contract Developer",
    "Software Development Manager", "Engineering Manager", "CTO (Chief Technology Officer)",

    "Marketing Specialist", "Marketing Manager", "Digital Marketing Specialist", "Digital Marketing Manager",
    "Social Media Specialist", "Social Media Manager", "Content Marketing Specialist", "Content Marketing Manager",
    "SEO Specialist", "SEO Manager", "PPC Specialist", "PPC Manager", "Email Marketing Specialist",
    "Email Marketing Manager", "Growth Marketing Manager", "Performance Marketing Specialist",
    "Performance Marketing Manager", "Brand Manager", "Brand Marketing Specialist", "Product Marketing Manager",
    "Product Marketing Specialist", "Marketing Communications Specialist", "Marketing Communications Manager",
    "Affiliate Marketing Manager", "Affiliate Marketing Specialist", "Influencer Marketing Specialist",
    "Influencer Marketing Manager", "Event Marketing Specialist", "Event Marketing Manager",
    "Demand Generation Manager", "B2B Marketing Specialist", "B2C Marketing Specialist", "Trade Marketing Specialist",
    "Marketing Campaign Manager", "Advertising Specialist", "Advertising Manager", "Market Research Analyst",
    "Market Research Manager", "Media Buyer", "Media Planner", "Community Manager", "Content Strategist",
    
    "HR Specialist", "HR Manager", "HR Assistant", "HR Coordinator", "HR Generalist", "HR Business Partner",
    "Talent Acquisition Specialist", "Talent Acquisition Manager", "Recruiter", "Technical Recruiter",
    "Human Resources Director", "Human Resources Assistant", "Human Resources Manager",
    "Employee Relations Specialist", "People Operations Specialist", "People Operations Manager",
    "Compensation and Benefits Specialist", "HR Consultant", "HR Administrator",
    "Staffing Specialist", "Organizational Development Specialist", "Training and Development Manager",
    "HRIS Analyst (Human Resources Information Systems Analyst)",

    "QA Engineer", "QA Analyst", "QA Tester", "Quality Assurance Engineer", "Quality Assurance Analyst",
    "Software QA Engineer", "QA Automation Engineer", "QA Automation Tester", "QA Manual Tester",
    "Quality Engineer", "Test Engineer", "Software Tester", "Quality Assurance Specialist",
    "QA Lead", "Senior QA Engineer", "Junior QA Engineer", "Manual QA Tester", "Automation QA Tester",
    "SDET (Software Development Engineer in Test)", "Quality Assurance Manager", "Quality Assurance Technician",
    "QA Coordinator", "QA Consultant", "Testing Specialist", "Test Automation Engineer", "Quality Control Analyst",
    "Quality Assurance Associate", "Functional Tester", "Performance Tester", "Regression Tester"
];

const seniorityLevelsSuggestions = [
    "Senior", "Junior", "Lead", "Manager", "Director", "VP", "c-level", "Intern", "Associate", "Analyst",
];

const locationSuggestions = [
    "Remote",
    "Serbia", "Srbija",
    "Belgrade", "Beograd", "Novi Sad", "Niš", "Kragujevac", "Subotica", "Zrenjanin", "Pančevo", "Čačak", "Kraljevo", "Smederevo",
    
    "Germany", "Deutschland",
    "Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt", "Stuttgart", "Düsseldorf", "Dortmund", "Essen", "Leipzig",
    "Bremen", "Dresden", "Hanover", "Nuremberg", "Duisburg", "Bochum", "Wuppertal", "Bielefeld", "Bonn", "Münster",
    "Karlsruhe", "Mannheim", "Augsburg", "Wiesbaden", "Gelsenkirchen", "Mönchengladbach", "Braunschweig", "Chemnitz",
    "Kiel", "Aachen", "Halle", "Magdeburg", "Freiburg", "Krefeld", "Lübeck", "Oberhausen", "Erfurt", "Mainz",
    "Rostock", "Kassel", "Hagen", "Saarbrücken", "Hamm", "Mülheim", "Potsdam", "Ludwigshafen", "Oldenburg", "Leverkusen",
    "Osnabrück",
  
    "United Kingdom", "England",
    "London", "Birmingham", "Manchester", "Leeds", "Liverpool", "Sheffield", "Bristol", "Newcastle upon Tyne", "Sunderland", "Wolverhampton",
    "Nottingham", "Southampton", "Portsmouth", "Leicester", "Coventry", "Kingston upon Hull", "Bradford", "Stoke-on-Trent", "Derby", "Plymouth",
    "Luton", "Reading", "Northampton", "Milton Keynes", "Norwich", "Swindon", "Swansea", "Oxford", "Ipswich", "Peterborough",
    "York", "Blackpool", "Middlesbrough", "Bolton", "Stockport", "Brighton", "Hove", "Slough", "Gloucester", "Cambridge",
    "Watford", "Rotherham", "Exeter", "Gateshead", "Woking", "Cheltenham", "Doncaster", "Basingstoke", "Crawley",

    // Scotland
    "Scotland", "Edinburgh", "Glasgow", "Aberdeen", "Dundee", "Inverness", "Perth", "Stirling", "Ayr", "Paisley",
    "Livingston", "Dumfries", "Falkirk", "Kilmarnock", "Elgin", "Cumbernauld", "Hamilton", "East Kilbride", "Dundee", "Kirkwall",

    // Northern Ireland
    "Northern Ireland", "Belfast", "Derry", "Lisburn", "Newtownabbey", "Bangor", "Craigavon", "Coleraine", "Armagh", "Antrim",
    "Portadown", "Carrickfergus", "Larne", "Newry", "Ballymena", "Omagh", "Cookstown", "Ballyclare", "Holywood", "Magherafelt",

    // Ireland
    "Ireland", "Dublin", "Cork", "Limerick", "Galway", "Waterford", "Kilkenny", "Drogheda", "Sligo", "Dundalk",
    "Bray", "Ennis", "Wexford", "Tralee", "Letterkenny", "Navan", "Mullingar", "Athlone", "Carlow", "Clonmel",

    "France",
    "Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes", "Strasbourg", "Montpellier", "Bordeaux", "Lille",
  
    "Spain", "España",
    "Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza", "Málaga", "Murcia", "Palma", "Las Palmas", "Bilbao",
  
    "Italy", "Italia",
    "Rome", "Milan", "Naples", "Turin", "Palermo", "Genoa", "Bologna", "Florence", "Bari", "Catania",
  
    "Netherlands", "Nederland",
    "Amsterdam", "Rotterdam", "The Hague", "Utrecht", "Eindhoven", "Tilburg", "Groningen", "Almere", "Breda", "Nijmegen",
  
    "Sweden", "Sverige",
    "Stockholm", "Gothenburg", "Malmö", "Uppsala", "Västerås", "Örebro", "Linköping", "Helsingborg", "Jönköping", "Norrköping",
  
    "Poland", "Polska",
    "Warsaw", "Kraków", "Łódź", "Wrocław", "Poznań", "Gdańsk", "Szczecin", "Bydgoszcz", "Lublin", "Katowice",
  
    "Norway", "Norge",
    "Oslo", "Bergen", "Stavanger", "Trondheim", "Drammen", "Fredrikstad", "Porsgrunn", "Skien", "Kristiansand", "Ålesund",
  
    "Finland", "Suomi",
    "Helsinki", "Espoo", "Tampere", "Vantaa", "Oulu", "Turku", "Jyväskylä", "Lahti", "Kuopio", "Pori",
  
    "Denmark", "Danmark",
    "Copenhagen", "Aarhus", "Odense", "Aalborg", "Esbjerg", "Randers", "Kolding", "Horsens", "Vejle", "Roskilde",
  
    "Switzerland", "Schweiz",
    "Zurich", "Geneva", "Basel", "Bern", "Lausanne", "Winterthur", "Lucerne", "St. Gallen", "Lugano", "Biel/Bienne",
  
    "Austria", "Österreich",
    "Vienna", "Graz", "Linz", "Salzburg", "Innsbruck", "Klagenfurt", "Villach", "Wels", "Sankt Pölten", "Dornbirn",

    // Croatia
    "Croatia, Hrvatska",
    "Zagreb", "Split", "Rijeka", "Osijek", "Zadar", "Pula", "Slavonski Brod", "Karlovac", "Sisak", "Varaždin",

    // Romania
    "Romania, România",
    "Bucharest", "Cluj-Napoca", "Timișoara", "Iași", "Constanța", "Craiova", "Brașov", "Galați", "Ploiești", "Oradea",

    // Greece
    "Greece, Ελλάδα",
    "Athens", "Thessaloniki", "Patras", "Heraklion", "Larissa", "Volos", "Rhodes", "Ioannina", "Chania", "Kavala",

    // Hungary
    "Hungary, Magyarország",
    "Budapest", "Debrecen", "Szeged", "Miskolc", "Pécs", "Győr", "Nyíregyháza", "Kecskemét", "Székesfehérvár", "Szombathely",

    // Czech Republic, Czechia
    "Czech Republic, Česká republika",
    "Prague", "Brno", "Ostrava", "Plzeň", "Liberec", "Olomouc", "Ústí nad Labem", "Hradec Králové", "Pardubice", "Zlín",

    // Slovakia
    "Slovakia, Slovensko",
    "Bratislava", "Košice", "Prešov", "Žilina", "Nitra", "Banská Bystrica", "Trnava", "Martin", "Poprad", "Trenčín",

    // Bulgaria
    "Bulgaria, България",
    "Sofia", "Plovdiv", "Varna", "Burgas", "Ruse", "Stara Zagora", "Pleven", "Sliven", "Dobrich", "Shumen",

    // Slovenia
    "Slovenia, Slovenija",
    "Ljubljana", "Maribor", "Celje", "Kranj", "Velenje", "Koper", "Novo Mesto", "Ptuj", "Trbovlje", "Kamnik",

    // Bosnia and Herzegovina
    "Bosnia and Herzegovina, Bosna i Hercegovina",
    "Sarajevo", "Banja Luka", "Tuzla", "Zenica", "Mostar", "Bihać", "Doboj", "Brčko", "Prijedor", "Trebinje",

    // North Macedonia
    "North Macedonia, Северна Македонија",
    "Skopje", "Bitola", "Kumanovo", "Prilep", "Tetovo", "Ohrid", "Gostivar", "Veles", "Štip", "Strumica",

    // UAE
    "UAE", "United Arab Emirates", "Abu Dhabi", "Dubai", "Sharjah", "Al Ain", "Ajman", "Fujairah", "Ras Al Khaimah", "Umm Al-Quwain", "Khor Fakkan",
    "Al Fujairah", "Al Ruwais", "Al Sila", "Hatta", "Al Dhafra", "Al Maktoum", "Al Qusais", "Dubai Marina", "Deira", "Jumeirah",

        // Mexico
        "Mexico", "México",
        "Ciudad de México", "Guadalajara", "Monterrey", "Puebla", "Tijuana", "León", "Querétaro", "Cancún", "Mérida", "Toluca",
        "Zapopan", "Ecatepec", "Chihuahua", "San Luis Potosí", "Aguascalientes", "Saltillo", "Culiacán", "Hermosillo", "Morelia", "Tepic",
    
        // Brazil
        "Brazil", "Brasil",
        "São Paulo", "Rio de Janeiro", "Belo Horizonte", "Brasília", "Salvador", "Curitiba", "Fortaleza", "Manaus", "Recife", "Porto Alegre",
        "Campinas", "Goiânia", "Belém", "São Luís", "Maceió", "Natal", "João Pessoa", "Teresina", "Campo Grande", "Cuiabá",
    
        // Argentina
        "Argentina",
        "Buenos Aires", "Córdoba", "Rosario", "Mendoza", "La Plata", "Tucumán", "Mar del Plata", "Salta", "Santa Fe", "San Juan",
        "Resistencia", "Neuquén", "Santiago del Estero", "Corrientes", "Bahía Blanca", "Posadas", "Paraná", "San Luis", "Formosa", "Jujuy",
    
        // Peru
        "Peru", "Perú",
        "Lima", "Arequipa", "Trujillo", "Chiclayo", "Piura", "Cusco", "Iquitos", "Huancayo", "Tacna", "Pucallpa",
        "Juliaca", "Cajamarca", "Ayacucho", "Huaraz", "Tarapoto", "Ica", "Sullana", "Puno", "Moquegua", "Tumbes",
    
        // Chile
        "Chile",
        "Santiago", "Valparaíso", "Concepción", "La Serena", "Antofagasta", "Temuco", "Iquique", "Puerto Montt", "Copiapó", "Rancagua",
        "Chillán", "Arica", "Talca", "Punta Arenas", "Curicó", "Osorno", "Calama", "Quillota", "San Antonio", "Coquimbo",
    
        // Colombia
        "Colombia",
        "Bogotá", "Medellín", "Cali", "Barranquilla", "Cartagena", "Cúcuta", "Bucaramanga", "Pereira", "Santa Marta", "Manizales",
        "Ibagué", "Villavicencio", "Neiva", "Pasto", "Montería", "Armenia", "Sincelejo", "Valledupar", "Popayán", "Riohacha",
    

    // Canada
    "Canada, Canada",
    "Toronto", "Montreal", "Vancouver", "Calgary", "Edmonton", "Ottawa", "Winnipeg", "Quebec City", "Hamilton", "Kitchener",
    "London", "Markham", "Vaughan", "Brampton", "Surrey", "Richmond", "Burnaby", "Oakville", "Burlington", "Windsor",
    "Saskatoon", "St. John's", "Regina", "Victoria", "Halifax", "Red Deer", "Langley", "Nanaimo", "Kelowna", "Kamloops",

    // United States of America
"United States of America", "USA", "America", "US",


// Alabama
"Alabama", "Montgomery", "Birmingham", "Huntsville", "Mobile", "Tuscaloosa", "Auburn", "Decatur", "Dothan", "Madison", "Florence",

// Alaska
"Alaska", "Anchorage", "Fairbanks", "Juneau", "Wasilla", "Sitka", "Ketchikan", "Kenai", "Kodiak", "Bethel", "Palmer",

// Arizona
"Arizona", "Phoenix", "Tucson", "Mesa", "Chandler", "Glendale", "Scottsdale", "Peoria", "Tempe", "Flagstaff", "Surprise",

// Arkansas
"Arkansas", "Little Rock", "Fort Smith", "Fayetteville", "Springdale", "Jonesboro", "North Little Rock", "Conway", "Rogers", "Pine Bluff", "Bentonville",

// California
"California", "Los Angeles", "San Diego", "San Francisco", "San Jose", "Fresno", "Sacramento", "Long Beach", "Oakland", "Bakersfield", "Anaheim",

// Colorado
"Colorado", "Denver", "Colorado Springs", "Aurora", "Fort Collins", "Lakewood", "Thornton", "Arvada", "Boulder", "Westminster", "Pueblo",

// Connecticut
"Connecticut", "Bridgeport", "New Haven", "Stamford", "Hartford", "Waterbury", "Norwalk", "Danbury", "New Britain", "Greenwich", "Manchester",

// Delaware
"Delaware", "Wilmington", "Dover", "Newark", "Middletown", "Smyrna", "Georgetown", "Clayton", "Milford", "Seaford", "Rehoboth Beach",

// Florida
"Florida", "Miami", "Orlando", "Tampa", "Jacksonville", "St. Petersburg", "Hialeah", "Port St. Lucie", "Fort Lauderdale", "Tallahassee", "Cape Coral",

// Georgia
"Georgia", "Atlanta", "Augusta", "Columbus", "Macon", "Savannah", "Athens", "Sandy Springs", "Roswell", "Johns Creek", "Albany",

// Hawaii
"Hawaii", "Honolulu", "Hilo", "Kailua", "Kaneohe", "Pearl City", "Waipahu", "Mililani", "Makakilo", "Kapolei", "Ewa Beach",

// Idaho
"Idaho", "Boise", "Nampa", "Meridian", "Idaho Falls", "Pocatello", "Caldwell", "Twin Falls", "Lewiston", "Coeur d'Alene", "Rexburg",

// Illinois
"Illinois", "Chicago", "Aurora", "Naperville", "Joliet", "Rockford", "Bolingbrook", "Evanston", "Schaumburg", "Peoria", "Champaign",

// Indiana
"Indiana", "Indianapolis", "Fort Wayne", "Evansville", "South Bend", "Carmel", "Fishers", "Bloomington", "Gary", "Muncie", "Lafayette",

// Iowa
"Iowa", "Des Moines", "Cedar Rapids", "Davenport", "Sioux City", "Iowa City", "West Des Moines", "Ankeny", "Urbandale", "Ames", "Dubuque",

// Kansas
"Kansas", "Wichita", "Overland Park", "Kansas City", "Olathe", "Topeka", "Lawrence", "Shawnee", "Manhattan", "Lenexa", "Salina",

// Kentucky
"Kentucky", "Louisville", "Lexington", "Bowling Green", "Covington", "Richmond", "Owensboro", "Florence", "Georgetown", "Hopkinsville", "Frankfort",

// Louisiana
"Louisiana", "New Orleans", "Baton Rouge", "Shreveport", "Lafayette", "Lake Charles", "Kenner", "Bossier City", "Monroe", "Alexandria", "Slidell",

// Maine
"Maine", "Portland", "Lewiston", "Bangor", "Augusta", "South Portland", "Biddeford", "Auburn", "Sanford", "Saco", "Waterville",

// Maryland
"Maryland", "Baltimore", "Columbia", "Silver Spring", "Germantown", "Waldorf", "Ellicott City", "Bowie", "Hagerstown", "Frederick", "Rockville",

// Massachusetts
"Massachusetts", "Boston", "Worcester", "Springfield", "Lowell", "Cambridge", "New Bedford", "Brockton", "Quincy", "Lynn", "Fall River",

// Michigan
"Michigan", "Detroit", "Grand Rapids", "Warren", "Sterling Heights", "Ann Arbor", "Lansing", "Flint", "Dearborn", "Livonia", "Westland",

// Minnesota
"Minnesota", "Minneapolis", "Saint Paul", "Rochester", "Duluth", "Bloomington", "Plymouth", "St. Cloud", "Eagan", "Woodbury", "Maple Grove",

// Mississippi
"Mississippi", "Jackson", "Gulfport", "Biloxi", "Hattiesburg", "Southaven", "Ocean Springs", "Meridian", "Tupelo", "Madison", "Pearl",

// Missouri
"Missouri", "St. Louis", "Kansas City", "Springfield", "Columbia", "Independence", "Lee's Summit", "O'Fallon", "St. Charles", "St. Peters", "Blue Springs",

// Montana
"Montana", "Billings", "Missoula", "Great Falls", "Bozeman", "Butte", "Helena", "Kalispell", "Billings", "Havre", "Anaconda",

// Nebraska
"Nebraska", "Omaha", "Lincoln", "Bellevue", "Grand Island", "Kearney", "Fremont", "Hastings", "North Platte", "Papillion", "La Vista",

// Nevada
"Nevada", "Las Vegas", "Henderson", "Reno", "North Las Vegas", "Sparks", "Carson City", "Elko", "Mesquite", "Fallon", "Boulder City",

// New Hampshire
"New Hampshire", "Manchester", "Nashua", "Concord", "Derry", "Rochester", "Keene", "Portsmouth", "Londonderry", "Salem", "Bedford",

// New Jersey
"New Jersey", "Newark", "Jersey City", "Paterson", "Elizabeth", "Edison", "Toms River", "Hamilton", "Trenton", "Camden", "Passaic",

// New Mexico
"New Mexico", "Albuquerque", "Las Cruces", "Rio Rancho", "Santa Fe", "Roswell", "Farmington", "Clovis", "Carlsbad", "Hobbs", "Alamogordo",

// New York
"New York", "New York City", "Buffalo", "Rochester", "Yonkers", "Syracuse", "Albany", "New Rochelle", "Mount Vernon", "Schenectady", "Utica",

// North Carolina
"North Carolina", "Charlotte", "Raleigh", "Greensboro", "Durham", "Winston-Salem", "Fayetteville", "Cary", "High Point", "Gastonia", "Chapel Hill",

// North Dakota
"North Dakota", "Fargo", "Bismarck", "Grand Forks", "Minot", "West Fargo", "Mandan", "Williston", "Dickinson", "Jamestown", "Devils Lake",

// Ohio
"Ohio", "Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron", "Dayton", "Parma", "Canton", "Youngstown", "Lorain",

// Oklahoma
"Oklahoma", "Oklahoma City", "Tulsa", "Norman", "Broken Arrow", "Edmond", "Moore", "Midwest City", "Lawton", "Stillwater", "Enid",

// Oregon
"Oregon", "Portland", "Salem", "Eugene", "Gresham", "Hillsboro", "Beaverton", "Bend", "Medford", "Corvallis", "Albany",

// Pennsylvania
"Pennsylvania", "Philadelphia", "Pittsburgh", "Allentown", "Erie", "Reading", "Scranton", "Bethlehem", "Lancaster", "Harrisburg", "York",

// Rhode Island
"Rhode Island", "Providence", "Warwick", "Cranston", "Pawtucket", "East Providence", "Woonsocket", "Coventry", "North Providence", "Smithfield", "West Warwick",

// South Carolina
"South Carolina", "Columbia", "Charleston", "Greenville", "Rock Hill", "Mount Pleasant", "Spartanburg", "Sumter", "Goose Creek", "Aiken", "Myrtle Beach",

// South Dakota
"South Dakota", "Sioux Falls", "Rapid City", "Aberdeen", "Brookings", "Mitchell", "Yankton", "Pierre", "Huron", "Spearfish", "Watertown",

// Tennessee
"Tennessee", "Nashville", "Memphis", "Knoxville", "Chattanooga", "Clarksville", "Murfreesboro", "Franklin", "Jackson", "Johnson City", "Bartlett",

// Texas
"Texas", "Houston", "San Antonio", "Dallas", "Austin", "Fort Worth", "El Paso", "Arlington", "Corpus Christi", "Plano", "Laredo",

// Utah
"Utah", "Salt Lake City", "West Valley City", "Provo", "West Jordan", "Orem", "Sandy", "Ogden", "St. George", "Layton", "Taylorsville",

// Vermont
"Vermont", "Burlington", "South Burlington", "Rutland", "Barre", "Montpelier", "St. Johnsbury", "Middlebury", "Winooski", "Essex", "Colchester",

// Virginia
"Virginia", "Virginia Beach", "Norfolk", "Chesapeake", "Richmond", "Newport News", "Alexandria", "Hampton", "Roanoke", "Portsmouth", "Lynchburg",

// Washington
"Washington", "Seattle", "Spokane", "Tacoma", "Vancouver", "Bellevue", "Kent", "Everett", "Renton", "Yakima", "Bellingham",

// West Virginia
"West Virginia", "Charleston", "Huntington", "Morgantown", "Parkersburg", "Wheeling", "Weirton", "Fairmont", "Clarksburg", "Beckley", "Martinsburg",

// Wisconsin
"Wisconsin", "Milwaukee", "Madison", "Green Bay", "Kenosha", "Racine", "Appleton", "Waukesha", "Eau Claire", "Oshkosh", "Janesville",

// Wyoming
"Wyoming", "Cheyenne", "Casper", "Laramie", "Gillette", "Rock Springs", "Sheridan", "Evanston", "Jackson", "Cody", "Green River",
  ];

const industrySuggestions = [
    "Agriculture", "Automotive", "Aerospace", "Banking", "Biotechnology", "Chemicals", "Construction", "Consulting", "Consumer Electronics", 
    "Consumer Goods", "Education", "Energy", "Entertainment", "Fashion", "Finance", "Healthcare", "Hospitality", "Human Resources", 
    "Information Technology", "Insurance", "Legal", "Manufacturing", "Media", "Mining", "Nonprofit", "Pharmaceutical", "Public Sector", 
    "Real Estate", "Retail", "Telecommunications", "Transportation", "Utilities", "Waste Management", "Food and Beverage", "Publishing", 
    "Technology", "Tourism", "Sports", "Marketing", "Advertising", "Wholesale", "E-commerce", "Art and Design", "Logistics", "Health and Wellness", 
    "Government", "Defense", "Financial Services", "Cryptocurrency", "Environmental Services", "Renewable Energy", "Luxury Goods", "Digital Media", 
    "Supply Chain", "Farming", "Textiles", "Printing", "Philanthropy", "Translation Services", "Event Management", "Music", "Film Production", 
    "Interior Design", "Public Relations", "Security Services", "Retail Banking", "Venture Capital", "Social Media", "Digital Marketing", 
    "Engineering", "Medical Devices", "Nanotechnology", "Artificial Intelligence", "Data Science", "Robotics", "Cloud Computing", "Cybersecurity",
    "Blockchain", "3D Printing", "Construction Equipment", "Investment Banking", "Real Estate Development", "Talent Acquisition", "Legal Services",
    "Event Planning", "Gaming", "Marine", "Space Exploration", "Charity", "Mergers and Acquisitions", "Coaching", "Franchise", "Subscription Services", "Software"
  ];

const skillsSuggestions = [
    // Web Development
    "HTML", "CSS", "JavaScript", "React", "Angular", "Vue.js", "Node.js", "Express.js", "Bootstrap", "Sass", 
    "jQuery", "Webpack", "TypeScript", "Gatsby", "Next.js", "GraphQL", "RESTful APIs", "Docker", "Kubernetes", "Git",
    "Jest", "Mocha", "Redux", "NPM", "Yarn", "Firebase", "WebSockets", "PWA (Progressive Web Apps)", "SEO",
    
    // Front-End Development
    "HTML5", "CSS3", "React Native", "Vue.js", "Bootstrap", "Tailwind CSS", "SASS", "Responsive Design", 
    "JavaScript (ES6+)", "jQuery", "TypeScript", "Front-End Frameworks", "Material UI", "Design Systems", 
    "CSS Preprocessors", "Canvas API", "SVG", "Web Accessibility (WCAG)", "GraphQL", "Angular", "D3.js",
    
    // Back-End Development
    "Node.js", "Express.js", "Python", "Java", "Ruby", "PHP", "C#", "Go", "Swift", "Rust", "Spring Boot",
    "Flask", "Django", "Laravel", "ASP.NET", "Ruby on Rails", "MongoDB", "PostgreSQL", "MySQL", "SQLite",
    "NoSQL", "GraphQL", "WebSocket", "Apache", "Nginx", "Redis", "JWT", "OAuth", "API Development",
    "Microservices", "Serverless Architecture", "Docker", "Kubernetes", "AWS", "Azure", "Google Cloud Platform", 
    "Terraform", "Cloud Functions", "CI/CD", "Jenkins", "GitLab CI", "Bitbucket Pipelines", "Vault", "Apache Kafka",
    
    // Mobile Development
    "Java", "Kotlin", "Swift", "Objective-C", "React Native", "Flutter", "Xamarin", "Ionic", "Cordova",
    "Android SDK", "iOS Development", "Firebase", "Xcode", "Android Studio", "UI/UX Design", "RESTful APIs", 
    "SQLite", "Push Notifications", "App Store Deployment", "Google Play Store", "App Analytics", "Crashlytics",
    
    // Data Science & Machine Learning
    "Python", "R", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-Learn", "TensorFlow", "Keras", "PyTorch",
    "Jupyter Notebooks", "SQL", "NoSQL", "Big Data", "Hadoop", "Spark", "ETL", "Data Visualization", "Data Cleaning", 
    "ML Algorithms", "Neural Networks", "Deep Learning", "AI", "NLP (Natural Language Processing)", "Time Series Analysis", 
    "Anaconda", "AWS SageMaker", "Google Cloud AI", "Azure Machine Learning", "Data Warehousing", "HDFS", "Apache Flink",
    
    // DevOps & Cloud Engineering
    "Docker", "Kubernetes", "Terraform", "AWS", "Azure", "Google Cloud Platform", "Jenkins", "Ansible", "Puppet",
    "Chef", "Git", "CI/CD", "GitLab", "Bitbucket", "CloudFormation", "CloudWatch", "Nginx", "Apache", "Vagrant",
    "Linux", "Bash", "Shell Scripting", "AWS Lambda", "Azure Functions", "Cloud Security", "Scaling", "Load Balancing",
    
    // Cybersecurity
    "Penetration Testing", "Network Security", "Firewall Configuration", "Encryption", "Ethical Hacking", "OWASP", 
    "SIEM", "Malware Analysis", "Incident Response", "Risk Assessment", "Vulnerability Management", "Wireshark",
    "Kali Linux", "Metasploit", "CompTIA Security+", "CEH", "CISSP", "SOC", "GDPR", "Firewall Management", "Cloud Security",
    
    // UI/UX Design
    "Figma", "Sketch", "Adobe Suite", "Adobe XD", "Photoshop", "Illustrator", "InVision", "Wireframing", "Prototyping", "User Research",
    "UI/UX Design", "Responsive Design", "Interaction Design", "Usability Testing", "User Personas", "Information Architecture",
    "User Flows", "Design Systems", "Mobile UI/UX", "User-Centered Design", "Heuristic Evaluation", "Axure RP",
    
    // Game Development
    "Unity", "Unreal Engine", "C#", "C++", "Blender", "3D Modeling", "Game Design", "VR (Virtual Reality)", "AR (Augmented Reality)",
    "Game Physics", "AI in Games", "Game Monetization", "Game Prototyping", "Multiplayer Games", "Game Animation", 
    "Physics Engines", "Shader Programming", "Game Engines", "Game Testing", "Level Design", "Game Art", "Game Sound Design",
    
    // Digital Marketing
    "SEO", "Google Analytics", "Google Ads", "Facebook Ads", "PPC (Pay-Per-Click)", "Social Media Marketing", "Content Marketing", 
    "Email Marketing", "Affiliate Marketing", "Branding", "Copywriting", "Marketing Automation", "Conversion Optimization", 
    "Influencer Marketing", "Growth Hacking", "Google Tag Manager", "CRM (Customer Relationship Management)", "SEM", "Marketing Strategy",
    
    // Project Management
    "Agile", "Scrum", "Jira", "Trello", "Kanban", "Project Planning", "Risk Management", "Stakeholder Communication", "Gantt Charts",
    "PMP", "PRINCE2", "Lean", "Waterfall", "Time Management", "Budgeting", "Team Collaboration", "Sprint Planning", "Project Scheduling", 
    "Project Documentation", "Project Scope", "Resource Allocation", "Project Deliverables", "Stakeholder Analysis", "Conflict Resolution",
    
    // Business Analysis & Consulting
    "Business Analysis", "Requirements Gathering", "SWOT Analysis", "Business Process Mapping", "Gap Analysis", "Stakeholder Management",
    "Cost-Benefit Analysis", "Risk Assessment", "Change Management", "Lean Six Sigma", "Process Improvement", "Market Research", 
    "Strategic Planning", "Consulting", "Agile Transformation", "Project Management", "Business Intelligence", "Data Analysis", 
    "CRM Systems", "Salesforce", "ERP", "Vendor Management", "Customer Experience", "Operational Efficiency", "Budget Management",
    
    // Finance & Accounting
    "Accounting", "Financial Reporting", "Excel", "QuickBooks", "Xero", "Financial Analysis", "Budgeting", "Forecasting", "Audit",
    "Financial Modeling", "Tax Preparation", "Accounts Payable", "Accounts Receivable", "Cost Accounting", "General Ledger",
    "ERP Systems", "CPA", "CFA", "Financial Planning", "Investment Banking", "Mergers & Acquisitions", "Risk Management",
    "Corporate Finance", "Valuation", "Cash Flow Management", "Fundraising", "Private Equity", "Venture Capital",
    
    // Sales & Customer Service
    "Salesforce", "CRM", "Cold Calling", "Lead Generation", "Negotiation", "Client Relations", "Account Management", "B2B Sales",
    "B2C Sales", "Inside Sales", "Customer Support", "Customer Experience", "Relationship Building", "Sales Strategy", "Customer Retention",
    "Product Knowledge", "Sales Reporting", "Sales Forecasting", "E-commerce Sales", "Cross-Selling", "Upselling", "Team Collaboration", 
    "Customer Feedback", "Problem Solving", "Sales Presentations", "Sales Negotiation", "Email Outreach",

    // Quality Assurance Engineer
    "Manual Testing", "Automated Testing", "Selenium", "Cypress", "JUnit", "TestNG", "Postman", "Jira", "Bug Tracking", 
    "Test Case Design", "Test Plan", "Smoke Testing", "Regression Testing", "Performance Testing", "Load Testing", 
    "Usability Testing", "API Testing", "Unit Testing", "Integration Testing", "Acceptance Testing", "Functional Testing", 
    "Cross-browser Testing", "Cross-platform Testing", "Test Automation Frameworks", "Automation Scripting", "Appium", 
    "Robot Framework", "Katalon Studio", "Quality Center", "CI/CD", "DevOps", "Agile Methodology", "Scrum", "Kanban", 
    "Test Execution", "Test Reporting", "Version Control (Git)", "SQL for Testing", "Database Testing", "Test Metrics", 
    "JUnit", "Mockito", "Cucumber", "TDD (Test-Driven Development)", "BDD (Behavior-Driven Development)", "Test Coverage", 
    "Bug Reporting", "Test Automation Strategies", "Mobile Testing", "Security Testing", "User Acceptance Testing (UAT)", "Playwright",

  ];

  const companySuggestions = [
    // Tech Giants
    "Google", "Alphabet", "Microsoft", "Apple", "Amazon", "Meta", "Facebook", "Instagram", "WhatsApp", "Tesla",
    "Nvidia", "Samsung", "Intel", "AMD", "Qualcomm", "IBM", "Oracle", "SAP", "Salesforce", "Adobe",
    "Cisco", "Dropbox", "Zoom", "Spotify", "Netflix", "Uber", "Airbnb", "Twitter", "TikTok", "ByteDance",
    "Snap Inc.", "Slack", "Atlassian", "GitHub", "GitLab", "Red Hat", "Shopify", "Squarespace", "Wix", "Cloudflare",
  
    // Big Consulting & IT Services
    "Accenture", "Capgemini", "TCS", "Infosys", "Wipro", "Cognizant", "Deloitte", "PwC", "EY", "KPMG",
    "McKinsey & Company", "Boston Consulting Group", "Bain & Company", "HCL Technologies", "NTT Data", "Tech Mahindra", "IBM Consulting", "ThoughtWorks", "EPAM", "ZS Associates",
  
    // Financial Services
    "JPMorgan Chase", "Goldman Sachs", "Morgan Stanley", "Bank of America", "Wells Fargo", "Citigroup", "American Express", "Visa", "Mastercard", "PayPal",
    "Stripe", "Square", "Robinhood", "Charles Schwab", "Capital One", "HSBC", "Barclays", "Deutsche Bank", "BNP Paribas", "UBS",
  
    // Automotive
    "Toyota", "Volkswagen", "BMW", "Mercedes-Benz", "Ford", "General Motors", "Honda", "Hyundai", "Kia", "Stellantis",
    "Tesla", "Porsche", "Volvo", "Audi", "Nissan", "Mazda", "Renault", "Lucid Motors", "Rivian", "BYD",
  
    // Consumer & Retail
    "Walmart", "Costco", "Target", "Best Buy", "IKEA", "Carrefour", "Aldi", "Lidl", "The Home Depot", "Lowe’s",
    "eBay", "Alibaba", "Shein", "Temu", "Flipkart", "Mercado Libre", "Rakuten", "JD.com", "Zalando", "Wayfair",
  
    // Fashion & Apparel
    "Nike", "Adidas", "Puma", "Under Armour", "Zara", "H&M", "Uniqlo", "Lululemon", "Levi's", "Patagonia",
    "Gucci", "Prada", "Louis Vuitton", "Chanel", "Hermès", "Balenciaga", "Burberry", "Versace", "Ralph Lauren", "Tommy Hilfiger",
  
    // Food & Beverage
    "McDonald’s", "Starbucks", "Coca-Cola", "PepsiCo", "Nestlé", "Unilever", "Kraft Heinz", "Danone", "Heineken", "Anheuser-Busch",
    "Domino’s", "KFC", "Subway", "Chipotle", "Burger King", "Red Bull", "Monster Energy", "Papa John’s", "Wendy’s", "Dunkin’",
  
    // Health & Pharma
    "Pfizer", "Moderna", "Johnson & Johnson", "AstraZeneca", "Roche", "Novartis", "Sanofi", "GSK", "Merck", "AbbVie",
    "Bayer", "Boehringer Ingelheim", "Amgen", "Regeneron", "Biogen", "Teva", "Takeda", "Bristol Myers Squibb", "Eli Lilly", "CSL",
  
    // Luxury & Lifestyle
    "LVMH", "Richemont", "Rolex", "Cartier", "Tiffany & Co.", "Estée Lauder", "L'Oréal", "Sephora", "Chanel", "Dior",
  
    // Airlines & Travel
    "Delta", "American Airlines", "United Airlines", "Emirates", "Qatar Airways", "Air France", "Lufthansa", "Singapore Airlines", "Ryanair", "Southwest Airlines",
  
    // Logistics & Transport
    "DHL", "FedEx", "UPS", "Maersk", "C.H. Robinson", "DB Schenker", "XPO Logistics", "Cainiao", "Grab", "Lyft",
  
    // Energy
    "ExxonMobil", "Shell", "Chevron", "BP", "TotalEnergies", "Saudi Aramco", "Equinor", "Eni", "Petrobras", "Schlumberger",
  
    // Renewable & Clean Tech
    "Enphase Energy", "First Solar", "NextEra Energy", "Sunnova", "Ørsted", "Vestas", "Sunrun", "Siemens Gamesa", "Plug Power", "Brookfield Renewable",
  
    // Real Estate & PropTech
    "Zillow", "Redfin", "Opendoor", "Airbnb", "Compass", "RE/MAX", "CBRE", "Jones Lang LaSalle", "WeWork", "Prologis",
  
    // Hardware & Electronics
    "Sony", "Panasonic", "LG", "Sharp", "Philips", "ASUS", "Acer", "Lenovo", "Dell", "HP",
  
    // Other Influential Brands
    "TikTok", "WeChat", "Discord", "OpenAI", "SpaceX", "Blue Origin", "Palantir", "Bloomberg", "Reuters", "BBC"
  ];
  

// --- CONFIG ---
const suggestionSources = {
    "jobTitles": jobTitleSuggestions,
    "excludeJobTitles": jobTitleSuggestions,
    "seniorityLevels": seniorityLevelsSuggestions,
    "excludeseniorityLevels": seniorityLevelsSuggestions,
    "locations": locationSuggestions,
    "excludelocations": locationSuggestions,
    "industries": industrySuggestions,
    "excludeindustries": industrySuggestions,
    "mandatorySkills": skillsSuggestions,
    "niceSkills": skillsSuggestions,
    "currentCompanies": companySuggestions,
    "pastCompanies": companySuggestions,
    "excludeCompanies": companySuggestions,
};

// --- FUNCTIONS ---
function displaySuggestions(input, suggestions, sectionId) {
    clearSuggestions(sectionId);

    const suggestionContainer = document.createElement("div");
    suggestionContainer.classList.add("suggested-results");

    suggestions.forEach(suggestion => {
        const suggestionElement = document.createElement("div");
        suggestionElement.classList.add("suggestion");
        suggestionElement.textContent = suggestion;
        suggestionElement.onclick = () => {
            input.value = suggestion;
            clearSuggestions(sectionId);
        };
        suggestionContainer.appendChild(suggestionElement);
    });

    document.getElementById(sectionId).appendChild(suggestionContainer);
}

function filterSuggestions(input, sectionId) {
    const query = input.value.toLowerCase();
    const allSuggestions = suggestionSources[sectionId] || [];
    const filtered = allSuggestions.filter(item => item.toLowerCase().startsWith(query));

    if (query.length === 0 || !filtered.length) {
        clearSuggestions(sectionId);
        return;
    }

    displaySuggestions(input, filtered, sectionId);
}

function clearSuggestions(sectionId) {
    const suggestionContainers = document.querySelectorAll(`#${sectionId} .suggested-results`);
    suggestionContainers.forEach(container => container.remove());
}

// --- CLICK OUTSIDE TO CLOSE ---
document.addEventListener("click", (event) => {
    const allInputs = [
        { inputId: "jobTitlesInput", containerId: "jobTitles" },
        { inputId: "excludeJobTitlesInput", containerId: "excludeJobTitles" },
        { inputId: "seniorityLevelsInput", containerId: "seniorityLevels" },
        { inputId: "excludeseniorityLevelsInput", containerId: "excludeseniorityLevels" },
        { inputId: "locationsInput", containerId: "locations" },
        { inputId: "excludelocationsInput", containerId: "excludelocations" },
        { inputId: "industrySuggestionsInput", containerId: "industries" },
        { inputId: "excludeIndustriesInput", containerId: "excludeindustries" },
        { inputId: "companySuggestionsInput", containerId: "currentCompanies" },
        { inputId: "companySuggestionsInput", containerId: "pastCompanies" },
        { inputId: "companySuggestionsInput", containerId: "excludeCompanies" },
    ];

    allInputs.forEach(({ inputId, containerId }) => {
        const input = document.getElementById(inputId);
        const container = document.getElementById(containerId);

        const clickedInside = input && (input.contains(event.target) || container?.contains(event.target));

        if (!clickedInside) {
            clearSuggestions(containerId);
        }
    });
});
