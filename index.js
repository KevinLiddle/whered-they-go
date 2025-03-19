const ANSWERS = {
  "A'ja Wilson": "South Carolina",
  "Aari McDonald": "Arizona",
  "Aerial Powers": "Michigan State",
  "Allie Quigley": "DePaul",
  "Allisha Gray": "South Carolina",
  "Amanda Zahui B.": "Minnesota",
  "Arella Guirantes": "Rutgers",
  "Ariel Atkins": "Texas",
  "Arike Ogunbowale": "Notre Dame",
  "Azura Stevens": "Connecticut",
  "Bella Alarie": "Princeton",
  "Betnijah Laney": "Rutgers",
  "Breanna Stewart": "Connecticut",
  "Briann January": "Arizona State",
  "Brianna Turner": "Notre Dame",
  "Bridget Carleton": "Iowa State",
  "Brionna Jones": "Maryland",
  "Brittney Griner": "Baylor",
  "Brittney Sykes": "Syracuse",
  "Candace Parker": "Tennessee",
  "Charli Collier": "Texas",
  "Chelsea Gray": "Duke",
  "Chennedy Carter": "Texas A&M",
  "Cheyenne Parker": "Middle Tennessee",
  "Courtney Vandersloot": "Gonzaga",
  "Courtney Williams": "South Florida",
  "Crystal Bradford": "Central Michigan",
  "Crystal Dangerfield": "Connecticut",
  "Danielle Robinson": "Oklahoma",
  "DeWanna Bonner": "Auburn",
  "Dearica Hamby": "Wake Forest",
  "DiDi Richards": "Baylor",
  "Diamond DeShields": "Tennessee",
  "Diana Taurasi": "Connecticut",
  "Elizabeth Williams": "Duke",
  "Emma Cannon": "Florida Southern",
  "Epiphanny Prince": "Rutgers",
  "Erica McCall": "Stanford",
  "Erica Wheeler": "Rutgers",
  "Isabelle Harrison": "Tennessee",
  "Jackie Young": "Notre Dame",
  "Jantel Lavender": "Ohio State",
  "Jasmine Thomas": "Duke",
  "Jazmine Jones": "Louisville",
  "Jessica Shepard": "Notre Dame",
  "Jewell Loyd": "Notre Dame",
  "Jonquel Jones": "George Washington",
  "Jordin Canada": "UCLA",
  "Kahleah Copper": "Rutgers",
  "Kaila Charles": "Maryland",
  "Katie Lou Samuelson": "Connecticut",
  "Kayla McBride": "Notre Dame",
  "Kayla Thornton": "UTEP",
  "Kelsey Mitchell": "Ohio State",
  "Kelsey Plum": "Washington",
  "Kia Vaughn": "Rutgers",
  "Kiah Stokes": "Connecticut",
  "Kristi Toliver": "Maryland",
  "Kylee Shook": "Louisville",
  "Lauren Cox": "Baylor",
  "Layshia Clarendon": "California",
  "Leaonna Odom": "Duke",
  "Lindsay Allen": "Notre Dame",
  "Marina Mabrey": "Notre Dame",
  "Megan Walker": "Connecticut",
  "Mercedes Russell": "Tennessee",
  "Michaela Onyenwere": "UCLA",
  "Monique Billings": "UCLA",
  "Moriah Jefferson": "Connecticut",
  "Myisha Hines-Allen": "Louisville",
  "Napheesa Collier": "Connecticut",
  "Natalie Achonwa": "Notre Dame",
  "Natasha Cloud": "St Joseph's",
  "Natasha Howard": "Florida State",
  "Natisha Hiedeman": "Marquette",
  "Nia Coffey": "Northwestern",
  "Nneka Ogwumike": "Stanford",
  "Rachel Banham": "Minnesota",
  "Riquna Williams": "Miami",
  "Ruthy Hebard": "Oregon",
  "Sabrina Ionescu": "Oregon",
  "Sami Whitcomb": "Washington",
  "Satou Sabally": "Oregon",
  "Shatori Walker-Kimbrough": "Maryland",
  "Shey Peddy": "Temple",
  "Skylar Diggins-Smith": "Notre Dame",
  "Sophie Cunningham": "Missouri",
  "Stefanie Dolson": "Connecticut",
  "Sue Bird": "Connecticut",
  "Sylvia Fowles": "Louisiana State",
  "Te'a Cooper": "Baylor",
  "Teaira McCowan": "Mississippi State",
  "Theresa Plaisance": "Louisiana State",
  "Tianna Hawkins": "Maryland",
  "Tiffany Hayes": "Connecticut",
  "Tiffany Mitchell": "South Carolina",
  "Tina Charles": "Connecticut",
  "Tyasha Harris": "South Carolina",
  "Victoria Vivians": "Mississippi State",

  // TODO: add WNBA players, groups of 4 (2 NBA, 2 WNBA), 3 guesses each with points according to # of guesses
  "Aaron Gordon": "Arizona",
  "Aaron Holiday": "UCLA",
  "Aaron Nesmith": "Vanderbilt",
  "Aaron Wiggins": "Maryland",
  "Admiral Schofield": "Tennessee",
  "Al Horford": "Florida",
  "Alec Burks": "Colorado",
  "Alex Caruso": "Texas A&M",
  "Alex Len": "Maryland",
  "Alfonzo McKinnie": "Wisconsin-Green Bay",
  "Amir Coffey": "Minnesota",
  "Andre Drummond": "Connecticut",
  "Andre Iguodala": "Arizona",
  "Andrew Wiggins": "Kansas",
  "Anthony Davis": "Kentucky",
  "Anthony Edwards": "Georgia",
  "Armoni Brooks": "Houston",
  "Austin Reaves": "Oklahoma",
  "Austin Rivers": "Duke",
  "Avery Bradley": "Texas",
  "Ayo Dosunmu": "Illinois",
  "Bam Adebayo": "Kentucky",
  "Ben McLemore": "Kansas",
  "Ben Simmons": "Louisiana State",
  "Blake Griffin": "Oklahoma",
  "Bobby Portis": "Arkansas",
  "Bones Hyland": "Virginia Commonwealth",
  "Brad Wanamaker": "Pittsburgh",
  "Bradley Beal": "Florida",
  "Brandon Boston Jr": "Kentucky",
  "Brandon Clarke": "Gonzaga",
  "Brandon Goodwin": "Florida Gulf Coast",
  "Brandon Ingram": "Duke",
  "Brook Lopez": "Stanford",
  "Bruce Brown": "Miami",
  "Bryn Forbes": "Michigan State",
  "Buddy Hield": "Oklahoma",
  "CJ Elleby": "Washington State",
  "CJ McCollum": "Lehigh",
  "Cade Cunningham": "Oklahoma State",
  "Caleb Martin": "Nevada-Reno",
  "Cam Reddish": "Duke",
  "Cam Thomas": "Louisiana State",
  "Cameron Johnson": "North Carolina",
  "Cameron Payne": "Murray State",
  "Caris LeVert": "Michigan",
  "Carmelo Anthony": "Syracuse",
  "Chimezie Metu": "Southern California",
  "Chris Boucher": "Oregon",
  "Chris Chiozza": "Florida",
  "Chris Duarte": "Oregon",
  "Chris Paul": "Wake Forest",
  "Christian Wood": "UNLV",
  "Chuma Okeke": "Auburn",
  "Coby White": "North Carolina",
  "Cody Martin": "Nevada-Reno",
  "Cody Zeller": "Indiana",
  "Cole Anthony": "North Carolina",
  "Collin Sexton": "Alabama",
  "Corey Kispert": "Gonzaga",
  "Cory Joseph": "Texas",
  "Craig Sword": "Mississippi State",
  "D'Angelo Russell": "Ohio State",
  "DJ Augustin": "Texas",
  "Dalano Banton": "Nebraska",
  "Damian Jones": "Vanderbilt",
  "Damian Lillard": "Weber State",
  "Damion Lee": "Drexel",
  "Daniel Gafford": "Arkansas",
  "Danny Green": "North Carolina",
  "Danuel House Jr": "Texas A&M",
  "Darius Garland": "Vanderbilt",
  "David Duke Jr": "Providence",
  "David Nwaba": "Cal Poly",
  "Davion Mitchell": "Baylor",
  "Davon Reed": "Miami",
  "Day'Ron Sharpe": "North Carolina",
  "De'Aaron Fox": "Kentucky",
  "De'Andre Hunter": "Virginia",
  "De'Anthony Melton": "Southern California",
  "DeAndre Jordan": "Texas A&M",
  "DeAndre' Bembry": "St Joseph's",
  "DeMar DeRozan": "Southern California",
  "DeMarcus Cousins": "Kentucky",
  "Dean Wade": "Kansas State",
  "Deandre Ayton": "Arizona",
  "Dejounte Murray": "Washington",
  "Delon Wright": "Utah",
  "Dennis Smith Jr": "North Carolina State",
  "Derrick Favors": "Georgia Tech",
  "Derrick Jones Jr": "UNLV",
  "Derrick Rose": "Memphis",
  "Derrick White": "Colorado",
  "Desmond Bane": "TCU",
  "Devin Booker": "Kentucky",
  "Devin Vassell": "Florida State",
  "Devonte' Graham": "Kansas",
  "Dewayne Dedmon": "Southern California",
  "Dillon Brooks": "Oregon",
  "Domantas Sabonis": "Gonzaga",
  "Donovan Mitchell": "Louisville",
  "Donte DiVincenzo": "Villanova",
  "Dorian Finney-Smith": "Florida",
  "Doug McDermott": "Creighton",
  "Draymond Green": "Michigan State",
  "Drew Eubanks": "Oregon State",
  "Duane Washington Jr": "Ohio State",
  "Duncan Robinson": "Michigan",
  "Dwight Powell": "Stanford",
  "Elfrid Payton": "Louisana-Lafayette",
  "Eric Bledsoe": "Kentucky",
  "Eric Gordon": "Indiana",
  "Eric Paschall": "Villanova",
  "Evan Mobley": "Southern California",
  "Frank Jackson": "Duke",
  "Franz Wagner": "Michigan",
  "Fred VanVleet": "Wichita State",
  "Gabe Vincent": "California-Santa Barbara",
  "Garrett Temple": "Louisiana State",
  "Garrison Mathews": "Lipscomb",
  "Gary Clark": "Cincinnati",
  "Gary Harris": "Michigan State",
  "Gary Payton II": "Oregon State",
  "Gary Trent Jr": "Duke",
  "George Hill": "Indiana-Purdue Indianapolis",
  "Georges Niang": "Iowa State",
  "Gordon Hayward": "Butler",
  "Grant Williams": "Tennessee",
  "Grayson Allen": "Duke",
  "Hamidou Diallo": "Kentucky",
  "Harrison Barnes": "North Carolina",
  "Hassan Whiteside": "Marshall",
  "Herbert Jones": "Alabama",
  "Immanuel Quickley": "Kentucky",
  "Isaac Okoro": "Auburn",
  "Isaiah Jackson": "Kentucky",
  "Isaiah Joe": "Arkansas",
  "Isaiah Roby": "Nebraska-Lincoln",
  "Isaiah Stewart": "Washington",
  "Ish Smith": "Wake Forest",
  "JT Thor": "Auburn",
  "Ja Morant": "Murray State",
  "JaMychal Green": "Alabama",
  "JaVale McGee": "Nevada-Reno",
  "Jaden McDaniels": "Washington",
  "Jae Crowder": "Marquette",
  "Jae'Sean Tate": "Ohio State",
  "Jakob Poeltl": "Utah",
  "Jalen Brunson": "Villanova",
  "Jalen McDaniels": "San Diego State",
  "Jalen Smith": "Maryland",
  "Jalen Suggs": "Gonzaga",
  "Jamal Murray": "Kentucky",
  "James Bouknight": "Connecticut",
  "James Harden": "Arizona State",
  "James Johnson": "Wake Forest",
  "James Wiseman": "Memphis",
  "Jaren Jackson Jr": "Michigan State",
  "Jarred Vanderbilt": "Kentucky",
  "Jarrett Allen": "Texas",
  "Javonte Green": "Radford",
  "Jaxson Hayes": "Texas",
  "Jaylen Brown": "California",
  "Jaylen Nowell": "Washington",
  "Jayson Tatum": "Duke",
  "Jeff Green": "Georgetown",
  "Jerami Grant": "Syracuse",
  "Jeremiah Robinson-Earl": "Villanova",
  "Jeremy Lamb": "Connecticut",
  "Jevon Carter": "West Virginia",
  "Jimmy Butler": "Marquette",
  "Joe Harris": "Virginia",
  "Joel Embiid": "Kansas",
  "John Collins": "Wake Forest",
  "John Konchar": "Indiana-Purdue Fort Wayne",
  "Jordan Clarkson": "Missouri",
  "Jordan McLaughlin": "Southern California",
  "Jordan Nwora": "Louisville",
  "Jordan Poole": "Michigan",
  "Jose Alvarado": "Georgia Tech",
  "Josh Christopher": "Arizona State",
  "Josh Green": "Arizona",
  "Josh Hart": "Villanova",
  "Josh Jackson": "Kansas",
  "Josh Okogie": "Georgia Tech",
  "Josh Richardson": "Tennessee",
  "Joshua Primo": "Alabama",
  "Jrue Holiday": "UCLA",
  "Juan Toscano-Anderson": "Marquette",
  "Julius Randle": "Kentucky",
  "Justin Holiday": "Washington",
  "Justin Robinson": "Virginia Tech",
  "Justise Winslow": "Duke",
  "KZ Okpala": "Stanford",
  "Karl-Anthony Towns": "Kentucky",
  "Kawhi Leonard": "San Diego State",
  "Keifer Sykes": "Wisconsin-Green Bay",
  "Keita Bates-Diop": "Ohio State",
  "Kelan Martin": "Butler",
  "Keldon Johnson": "Kentucky",
  "Kelly Olynyk": "Gonzaga",
  "Kelly Oubre Jr": "Kansas",
  "Kemba Walker": "Connecticut",
  "Kendrick Nunn": "Oakland",
  "Kenrich Williams": "TCU",
  "Kent Bazemore": "Old Dominion",
  "Kentavious Caldwell-Pope": "Georgia",
  "Keon Johnson": "Tennessee",
  "Kessler Edwards": "Pepperdine",
  "Kevin Durant": "Texas",
  "Kevin Huerter": "Maryland",
  "Kevin Love": "UCLA",
  "Kevin Porter Jr": "Southern California",
  "Kevon Looney": "UCLA",
  "Khem Birch": "UNLV",
  "Khris Middleton": "Texas A&M",
  "Killian Tillie": "Gonzaga",
  "Kira Lewis Jr": "Alabama",
  "Klay Thompson": "Washington State",
  "Kyle Anderson": "UCLA",
  "Kyle Guy": "Virginia",
  "Kyle Kuzma": "Utah",
  "Kyle Lowry": "Villanova",
  "Kyrie Irving": "Duke",
  "LaMarcus Aldridge": "Texas",
  "Lamar Stevens": "Penn State",
  "Lance Stephenson": "Cincinnati",
  "Landry Shamet": "Wichita State",
  "Larry Nance Jr": "Wyoming",
  "Lauri Markkanen": "Arizona",
  "Lonnie Walker IV": "Miami",
  "Lonzo Ball": "UCLA",
  "Luguentz Dort": "Arizona State",
  "Luka Garza": "Iowa",
  "Luke Kennard": "Duke",
  "Malachi Flynn": "San Diego State",
  "Malcolm Brogdon": "Virginia",
  "Malcolm Hill": "Illinois",
  "Malik Beasley": "Florida State",
  "Malik Monk": "Kentucky",
  "Marcus Morris Sr": "Kansas",
  "Marcus Smart": "Oklahoma State",
  "Markelle Fultz": "Washington",
  "Markieff Morris": "Kansas",
  "Marquese Chriss": "Washington",
  "Marvin Bagley III": "Duke",
  "Mason Plumlee": "Duke",
  "Matisse Thybulle": "Washington",
  "Matt Thomas": "Iowa State",
  "Maurice Harkless": "St John's",
  "Max Strus": "DePaul",
  "Michael Porter Jr": "Missouri",
  "Mikal Bridges": "Villanova",
  "Mike Conley": "Ohio State",
  "Mike Muscala": "Bucknell",
  "Miles Bridges": "Michigan State",
  "Mitchell Robinson": "Western Kentucky",
  "Mo Bamba": "Texas",
  "Monte Morris": "Iowa State",
  "Montrezl Harrell": "Louisville",
  "Moritz Wagner": "Michigan",
  "Mychal Mulder": "Kentucky",
  "Myles Turner": "Texas",
  "Naji Marshall": "Xavier",
  "Nassir Little": "North Carolina",
  "Naz Reid": "Louisiana State",
  "Nerlens Noel": "Kentucky",
  "Nic Claxton": "Georgia",
  "Nickeil Alexander-Walker": "Virginia Tech",
  "Nikola Vucevic": "Southern California",
  "Norman Powell": "UCLA",
  "OG Anunoby": "Indiana",
  "Obi Toppin": "Dayton",
  "Omer Yurtseven": "Georgetown",
  "Onyeka Okongwu": "Southern California",
  "Oshae Brissett": "Syracuse",
  "Otto Porter Jr": "Georgetown",
  "PJ Dozier": "South Carolina",
  "PJ Tucker": "Texas",
  "PJ Washington": "Kentucky",
  "Pascal Siakam": "New Mexico State",
  "Pat Connaughton": "Notre Dame",
  "Patrick Beverley": "Arkansas",
  "Patrick Williams": "Florida State",
  "Patty Mills": "St Mary's College of California",
  "Paul George": "Fresno State",
  "Paul Millsap": "Louisiana Tech",
  "Payton Pritchard": "Oregon",
  "Precious Achiuwa": "Memphis",
  "Quentin Grimes": "Houston",
  "RJ Barrett": "Duke",
  "Rajon Rondo": "Kentucky",
  "Reggie Bullock": "North Carolina",
  "Reggie Jackson": "Boston College",
  "Richaun Holmes": "Bowling Green",
  "Robert Covington": "Tennessee State",
  "Robert Williams III": "Texas A&M",
  "Robin Lopez": "Stanford",
  "Rodney Hood": "Duke",
  "Rodney McGruder": "Kansas State",
  "Romeo Langford": "Indiana",
  "Royce O'Neale": "Baylor",
  "Rudy Gay": "Connecticut",
  "Rui Hachimura": "Gonzaga",
  "Russell Westbrook": "UCLA",
  "Saben Lee": "Vanderbilt",
  "Saddiq Bey": "Villanova",
  "Santi Aldama": "Loyola-Maryland",
  "Scottie Barnes": "Florida State",
  "Semi Ojeleye": "Southern Methodist",
  "Seth Curry": "Duke",
  "Shai Gilgeous-Alexander": "Kentucky",
  "Shake Milton": "Southern Methodist",
  "Spencer Dinwiddie": "Colorado",
  "Stanley Johnson": "Arizona",
  "Stephen Curry": "Davidson",
  "Sterling Brown": "Southern Methodist",
  "Steven Adams": "Pittsburgh",
  "Svi Mykhailiuk": "Kansas",
  "TJ McConnell": "Arizona",
  "Taj Gibson": "Southern California",
  "Talen Horton-Tucker": "Iowa State",
  "Taurean Prince": "Baylor",
  "Terance Mann": "Florida State",
  "Terence Davis": "Mississippi",
  "Terrence Ross": "Washington",
  "Terry Rozier": "Louisville",
  "Terry Taylor": "Austin Peay",
  "Thaddeus Young": "Georgia Tech",
  "Thomas Bryant": "Indiana",
  "Tim Hardaway Jr": "Michigan",
  "Tobias Harris": "Tennessee",
  "Tony Bradley": "North Carolina",
  "Tony Snell": "New Mexico",
  "Torrey Craig": "South Carolina Upstate",
  "Trae Young": "Oklahoma",
  "Tre Jones": "Duke",
  "Tre Mann": "Florida",
  "Trendon Watford": "Louisiana State",
  "Trent Forrest": "Florida State",
  "Trevor Ariza": "UCLA",
  "Trey Burke": "Michigan",
  "Trey Lyles": "Kentucky",
  "Trey Murphy III": "Virginia",
  "Tristan Thompson": "Texas",
  "Troy Brown Jr": "Oregon",
  "Ty Jerome": "Virginia",
  "Tyler Cook": "Iowa",
  "Tyler Herro": "Kentucky",
  "Tyrese Haliburton": "Iowa State",
  "Tyrese Maxey": "Kentucky",
  "Tyus Jones": "Duke",
  "Udoka Azubuike": "Kansas",
  "Victor Oladipo": "Indiana",
  "Wayne Ellington": "North Carolina",
  "Wendell Carter Jr": "Duke",
  "Wesley Matthews": "Marquette",
  "Will Barton": "Memphis",
  "Willie Cauley-Stein": "Kentucky",
  "Yuta Watanabe": "George Washington",
  "Zach LaVine": "UCLA",
  "Zeke Nnaji": "Arizona",
  "Ziaire Williams": "Stanford",
  "Zion Williamson": "Duke",
  "Zylan Cheatham": "Arizona State",
};

const COLLEGES = {
  "Alabama": { conference: "", logo: "" },
  "Arizona State": { conference: "", logo: "" },
  "Arizona": { conference: "", logo: "" },
  "Arkansas": { conference: "", logo: "" },
  "Auburn": { conference: "", logo: "" },
  "Austin Peay": { conference: "", logo: "" },
  "Baylor": { conference: "", logo: "" },
  "Boston College": { conference: "", logo: "" },
  "Bowling Green": { conference: "", logo: "" },
  "Bucknell": { conference: "", logo: "" },
  "Butler": { conference: "", logo: "" },
  "Cal Poly": { conference: "", logo: "" },
  "California": { conference: "", logo: "" },
  "California-Santa Barbara": { conference: "", logo: "" },
  "Central Michigan": { conference: "", logo: "" },
  "Cincinnati": { conference: "", logo: "" },
  "Colorado": { conference: "", logo: "" },
  "Connecticut": { conference: "", logo: "" },
  "Creighton": { conference: "", logo: "" },
  "Davidson": { conference: "", logo: "" },
  "Dayton": { conference: "", logo: "" },
  "DePaul": { conference: "", logo: "" },
  "Drexel": { conference: "", logo: "" },
  "Duke": { conference: "", logo: "" },
  "Florida Gulf Coast": { conference: "", logo: "" },
  "Florida Southern": { conference: "", logo: "" },
  "Florida State": { conference: "", logo: "" },
  "Florida": { conference: "", logo: "" },
  "Fresno State": { conference: "", logo: "" },
  "George Washington": { conference: "", logo: "" },
  "Georgetown": { conference: "", logo: "" },
  "Georgia Tech": { conference: "", logo: "" },
  "Georgia": { conference: "", logo: "" },
  "Gonzaga": { conference: "", logo: "" },
  "Houston": { conference: "", logo: "" },
  "Illinois": { conference: "Big Ten", logo: "" },
  "Indiana": { conference: "", logo: "" },
  "Indiana-Purdue Fort Wayne": { conference: "", logo: "" },
  "Indiana-Purdue Indianapolis": { conference: "", logo: "" },
  "Iowa State": { conference: "", logo: "" },
  "Iowa": { conference: "", logo: "" },
  "Kansas State": { conference: "", logo: "" },
  "Kansas": { conference: "", logo: "" },
  "Kentucky": { conference: "", logo: "" },
  "Lehigh": { conference: "", logo: "" },
  "Lipscomb": { conference: "", logo: "" },
  "Louisana-Lafayette": { conference: "", logo: "" },
  "Louisiana State": { conference: "", logo: "" },
  "Louisiana Tech": { conference: "", logo: "" },
  "Louisville": { conference: "", logo: "" },
  "Loyola-Maryland": { conference: "", logo: "" },
  "Marquette": { conference: "", logo: "" },
  "Marshall": { conference: "", logo: "" },
  "Maryland": { conference: "", logo: "" },
  "Memphis": { conference: "", logo: "" },
  "Miami": { conference: "", logo: "" },
  "Michigan State": { conference: "", logo: "" },
  "Michigan": { conference: "", logo: "" },
  "Middle Tennessee": { conference: "", logo: "" },
  "Minnesota": { conference: "", logo: "" },
  "Mississippi State": { conference: "", logo: "" },
  "Mississippi": { conference: "", logo: "" },
  "Missouri": { conference: "", logo: "" },
  "Murray State": { conference: "", logo: "" },
  "Nebraska": { conference: "", logo: "" },
  "Nebraska-Lincoln": { conference: "", logo: "" },
  "Nevada-Reno": { conference: "", logo: "" },
  "New Mexico State": { conference: "", logo: "" },
  "New Mexico": { conference: "", logo: "" },
  "North Carolina State": { conference: "", logo: "" },
  "North Carolina": { conference: "", logo: "" },
  "Northern Colorado": { conference: "", logo: "" },
  "Northwestern": { conference: "", logo: "" },
  "Notre Dame": { conference: "", logo: "" },
  "Oakland": { conference: "", logo: "" },
  "Ohio State": { conference: "", logo: "" },
  "Oklahoma State": { conference: "", logo: "" },
  "Oklahoma": { conference: "", logo: "" },
  "Old Dominion": { conference: "", logo: "" },
  "Oregon State": { conference: "", logo: "" },
  "Oregon": { conference: "", logo: "" },
  "Penn State": { conference: "", logo: "" },
  "Pepperdine": { conference: "", logo: "" },
  "Pittsburgh": { conference: "", logo: "" },
  "Princeton": { conference: "", logo: "" },
  "Providence": { conference: "", logo: "" },
  "Radford": { conference: "", logo: "" },
  "Rutgers": { conference: "", logo: "" },
  "San Diego State": { conference: "", logo: "" },
  "South Carolina Upstate": { conference: "", logo: "" },
  "South Carolina": { conference: "SEC", logo: "" },
  "South Florida": { conference: "", logo: "" },
  "Southern California": { conference: "", logo: "" },
  "Southern Methodist": { conference: "", logo: "" },
  "St John's": { conference: "", logo: "" },
  "St Joseph's": { conference: "", logo: "" },
  "St Mary's College of California": { conference: "", logo: "" },
  "Stanford": { conference: "", logo: "" },
  "Syracuse": { conference: "", logo: "" },
  "TCU": { conference: "", logo: "" },
  "Temple": { conference: "", logo: "" },
  "Tennessee State": { conference: "", logo: "" },
  "Tennessee": { conference: "", logo: "" },
  "Texas A&M": { conference: "", logo: "" },
  "Texas": { conference: "", logo: "" },
  "UCLA": { conference: "", logo: "" },
  "UNLV": { conference: "", logo: "" },
  "UTEP": { conference: "", logo: "" },
  "Utah": { conference: "", logo: "" },
  "Vanderbilt": { conference: "", logo: "" },
  "Villanova": { conference: "", logo: "" },
  "Virginia Commonwealth": { conference: "", logo: "" },
  "Virginia Tech": { conference: "", logo: "" },
  "Virginia": { conference: "", logo: "" },
  "Wake Forest": { conference: "", logo: "" },
  "Washington State": { conference: "", logo: "" },
  "Washington": { conference: "", logo: "" },
  "Weber State": { conference: "", logo: "" },
  "West Virginia": { conference: "", logo: "" },
  "Western Kentucky": { conference: "", logo: "" },
  "Wichita State": { conference: "", logo: "" },
  "Wisconsin-Green Bay": { conference: "", logo: "" },
  "Wyoming": { conference: "", logo: "" },
  "Xavier": { conference: "", logo: "" },
};

const CONFERENCES = {
  "Big Ten": "logo.com"
};

const GAMES = [
  [
    { name: "Dalton Knecht", headshot: undefined, colleges: ["Northern Colorado", "Tennessee"], league: "NBA" },
    { name: "A'ja Wilson", headshot: undefined, colleges: ["South Carolina"], league: "WNBA" }
  ]
];

const now = new Date();
const todayKey = `WTG-${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
const TWENTY_FOUR_HOURS_IN_MILLIS = 86400000;
const RELEASE_DAY = new Date();
const MIN_GUESSES = 3;

const BLACK_SQUARE = String.fromCodePoint(0x2B1B);
const GREEN_SQUARE = String.fromCodePoint(0x1F7E9);
const RED_SQUARE = String.fromCodePoint(0x1F7E5);

const gameIndex = Math.floor((now - RELEASE_DAY) / TWENTY_FOUR_HOURS_IN_MILLIS);
const gameNumber = gameIndex + 1;
const todaysAnswers = GAMES[gameIndex];

const getLeagueLogo = (league) => `./images/${league.toLowerCase()}-logo.png`;

const getHeadshot = ({ headshot, league }) =>
  headshot || getLeagueLogo(league);

const tokenizeCollege = (college, tokens = []) => {
  const trimmedCollege = college.trim();
  const spaceIndex = trimmedCollege.indexOf(" ");
  const newTokens = [...tokens, trimmedCollege];

  if (spaceIndex >= 0) {
    const rest = trimmedCollege.substring(spaceIndex + 1);
    return tokenizeCollege(rest, newTokens);
  }

  return newTokens;
}

const getMaxGuesses = (colleges) => MIN_GUESSES + 2 * (colleges.length - 1);

const isRoundCorrect = (colleges, guesses) => colleges.every((c) => guesses.includes(c))

const isRoundFinished = (colleges, guesses) => {
  const maxGuesses = getMaxGuesses(colleges);
  return isRoundCorrect(colleges, guesses) || guesses.length === maxGuesses;
};

const renderGuesses = (colleges, guesses) => {
  const maxGuesses = getMaxGuesses(colleges);

  return [...Array(maxGuesses)].map((_, guessIndex) => {
    const hasGuess = !!guesses[guessIndex];
    const guess = guesses[guessIndex];
    const isCorrect = colleges.includes(guess);

    const guessText = guess || `Guess ${guessIndex + 1}`
    const classes = Object.entries({
      correct: hasGuess && isCorrect,
      incorrect: hasGuess && !isCorrect,
    }).reduce((acc, [k, v]) => v ? `${acc} ${k}` : acc, "");

    return `<div class="row guess ${classes}">${guessText}</div>`;
  }).join("");
};

const renderPlayerSection = ({ name, headshot, colleges, league, roundIndex, guesses }) =>
  `
    <div class="player">
      <div class="round__player">
        <img
          class="round__player__headshot"
          src="${getHeadshot({ headshot, league })}"
          alt="${name}"
        />
        <h2 class="round__player__name">${name}</h2>
      </div>
      <div class="round__guesses">
        <div class="round__guesses__column">
          <div class="round__guesses__input">
            <input
              type="text"
              id="college-input-${roundIndex}"
              placeholder="NCAA school"
              ${isRoundFinished(colleges, guesses) ? "disabled" : ""}
            />
            <ol class="autosuggest" id="autosuggest-list-${roundIndex}"></ol>
          </div>
          ${renderGuesses(colleges, guesses)}
        </div>
      </div>
    </div>
  `;

const renderResultEmoji = (guesses, roundIndex) => {
  const colleges = todaysAnswers[roundIndex].colleges
  const maxGuesses = getMaxGuesses(colleges);

  return [...Array(maxGuesses)].map(
    (_, i) => {
      if (guesses.length <= i) {
        return BLACK_SQUARE;
      }

      if (colleges.includes(guesses[i])) {
        return GREEN_SQUARE;
      }

      return RED_SQUARE;
    }
  ).join("");
};

const renderResultModal = (todaysResults) => {
  const resultEmojiHTML = todaysResults.map((guesses, roundIndex) => {
    const leagueName = todaysAnswers[roundIndex].league.toLowerCase();
    return `
      <div class="league-results">
        <img src="${getLeagueLogo(leagueName)}" />
        <span>${renderResultEmoji(guesses, roundIndex)}</span>
      </div>
    `;
  }).join("");
  const resultEmojiText = `Where'd they go? #${gameNumber}\n` +
    todaysResults.map((guesses, roundIndex) => renderResultEmoji(guesses, roundIndex)).join("\n") +
    "\n";

  const winner = todaysResults.every(
    (guesses, roundIndex) => isRoundCorrect(todaysAnswers[roundIndex].colleges, guesses)
  );
  const partialWinner = todaysResults.some(
    (guesses, roundIndex) => isRoundCorrect(todaysAnswers[roundIndex].colleges, guesses)
  );

  let header = "AIR BALLLLLL";
  if (winner) {
    header = "<i>SWISHHHH</i>";
  } else if (partialWinner) {
    header = "1 for 1 ain't that bad";
  }

  const onCopy = () => {
    console.log(resultEmojiText);
    navigator.clipboard.writeText(resultEmojiText).then(() => {
    const copied = document.querySelector(".copied-popup");
    copied.style["opacity"] = "1";

    setTimeout(() => {
      copied.style["opacity"] = "0";
    }, 1500);
  });
  }

  const resultsModal = document.createElement("div");
  resultsModal.className = "results-modal";
  resultsModal.innerHTML = `
    <button id="close-results">&#x2715;</button>
    <h3 class="header">${header}</h3>
    <p>Let's run it back tomorrow</p>
    <div class="result-emoji">
      ${resultEmojiHTML}
    </div>
    <button id="copy-results">Copy Results</button>
  `;
  const body = document.querySelector("body");
  body.append(resultsModal);

  const copyButton = document.querySelector("#copy-results");
  copyButton.onclick = onCopy;

  const closeButton = document.querySelector("#close-results");
  closeButton.onclick = () => resultsModal.remove();
};

const updateResults = () => {
  const todaysResults = JSON.parse(window.localStorage.getItem(todayKey) || "[[],[]]");

  const gameZone = document.getElementById("game-zone");

  const setupEventListeners = (roundIndex) => {
    const collegeInput = document.getElementById(`college-input-${roundIndex}`);
    const autosuggestList = document.getElementById(`autosuggest-list-${roundIndex}`);

    collegeInput.addEventListener("input", (inputEvent) => {
      const inputValue = inputEvent.target.value;
      const suggestions = Object.keys(COLLEGES).filter(
        (college) => tokenizeCollege(college).some(
          (collegePart) =>
            inputValue.trim().length > 0 &&
              collegePart.toLowerCase().startsWith(inputValue.trim().toLowerCase())
        )
      );

      if (suggestions.length > 0) {
        autosuggestList.innerHTML = suggestions.map(
          (suggestion) => `<li class="college">${suggestion}</li>`
        ).join("");

        Array.from(autosuggestList.getElementsByClassName("college")).map(
          (collegeElement) => collegeElement.addEventListener(
            "click",
            (clickEvent) => {
              const newResults = todaysResults.map((guesses, i) => {
                const colleges = todaysAnswers[i].colleges;
                const maxGuesses = getMaxGuesses(colleges);

                if (roundIndex === i) {
                  return [...guesses, collegeElement.innerText];
                }

                return guesses;
              });
              window.localStorage.setItem(todayKey, JSON.stringify(newResults));
              updateResults();
            }
          )
        );
      } else {
        autosuggestList.innerHTML = "";
      }
    });
  };

  gameZone.innerHTML = `<h3 class="game-number">#${gameNumber}</h3>` + todaysResults.map((guesses, roundIndex) => {
    return renderPlayerSection({ ...todaysAnswers[roundIndex], guesses, roundIndex });
  }).join("<hr />");

  let todaysGameComplete = true;

  todaysResults.forEach((guesses, roundIndex) => {
    setupEventListeners(roundIndex);

    if (!isRoundFinished(todaysAnswers[roundIndex].colleges, guesses)) {
      todaysGameComplete = false;
    }
  });

  if (todaysGameComplete) {
    renderResultModal(todaysResults);
  }
};

window.addEventListener("load", function () {
  updateResults();
})
