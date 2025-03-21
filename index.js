const NBA_ANSWERS = [
  {
    "name": "Quentin Grimes",
    "colleges": [
      "University of Kansas",
      "University of Houston"
    ],
    "playerId": "1629656"
  },
  {
    "name": "Royce O'Neale",
    "colleges": [
      "University of Denver",
      "Baylor University"
    ],
    "playerId": "1626220"
  },
  {
    "name": "Brandon Clarke",
    "colleges": [
      "San Jose State University",
      "Gonzaga University"
    ],
    "playerId": "1629634"
  },
  {
    "name": "Keon Ellis",
    "colleges": [
      "University of Alabama"
    ],
    "playerId": "1631165"
  },
  {
    "name": "Jamal Murray",
    "colleges": [
      "University of Kentucky"
    ],
    "playerId": "1627750"
  },
  {
    "name": "Jordan Poole",
    "colleges": [
      "University of Michigan"
    ],
    "playerId": "1629673"
  },
  {
    "name": "Jonathan Isaac",
    "colleges": [
      "Florida State University"
    ],
    "playerId": "1628371"
  },
  {
    "name": "Gary Payton II",
    "colleges": [
      "Oregon State University"
    ],
    "playerId": "1627780"
  },
  {
    "name": "Kelly Oubre Jr.",
    "colleges": [
      "University of Kansas"
    ],
    "playerId": "1626162"
  },
  {
    "name": "Onyeka Okongwu",
    "colleges": [
      "University of Southern California"
    ],
    "playerId": "1630168"
  },
  {
    "name": "Trey Murphy III",
    "colleges": [
      "Rice University",
      "University of Virginia"
    ],
    "playerId": "1630530"
  },
  {
    "name": "Darius Garland",
    "colleges": [
      "Vanderbilt University"
    ],
    "playerId": "1629636"
  },
  {
    "name": "Jarrett Allen",
    "colleges": [
      "University of Texas - Austin"
    ],
    "playerId": "1628386"
  },
  {
    "name": "Jrue Holiday",
    "colleges": [
      "University of California - Los Angeles - UCLA"
    ],
    "playerId": "201950"
  },
  {
    "name": "Anthony Black",
    "colleges": [
      "University of Arkansas"
    ],
    "playerId": "1641710"
  },
  {
    "name": "Cameron Johnson",
    "colleges": [
      "University of Pittsburgh",
      "University of North Carolina at Chapel Hill",
    ],
    "playerId": "1629661"
  },
  {
    "name": "Santi Aldama",
    "colleges": [
      "Loyola University Maryland"
    ],
    "playerId": "1630583"
  },
  {
    "name": "Kyle Kuzma",
    "colleges": [
      "University of Utah"
    ],
    "playerId": "1628398"
  },
  {
    "name": "T.J. McConnell",
    "colleges": [
      "Duquesne University",
      "University of Arizona"
    ],
    "playerId": "204456"
  }
];

const WNBA_ANSWERS = [
  {
    "name": "Kelsey Mitchell",
    "colleges": [
      "Ohio State University"
    ],
    "playerId": "1628909"
  },
  {
    "name": "Alyssa Thomas",
    "colleges": [
      "University of Maryland"
    ],
    "playerId": "203826"
  },
  {
    "name": "Skylar Diggins-Smith",
    "colleges": [
      "University of Notre Dame"
    ],
    "playerId": "203400"
  },
  {
    "name": "Maddy Siegrist",
    "colleges": [
      "Villanova University"
    ],
    "playerId": "1641652"
  },
  {
    "name": "Ariel Atkins",
    "colleges": [
      "University of Texas - Austin"
    ],
    "playerId": "1628878"
  },
  {
    "name": "Satou Sabally",
    "colleges": [
      "University of Oregon"
    ],
    "playerId": "1630149"
  },
  {
    "name": "Alysha Clark",
    "colleges": [
      "Middle Tennessee State University",
      "Belmont University"
    ],
    "playerId": "202252"
  },
  {
    "name": "Emily Engstler",
    "colleges": [
      "Syracuse University",
      "University of Louisville"
    ],
    "playerId": "1631083"
  },
  {
    "name": "Stefanie Dolson",
    "colleges": [
      "University of Connecticut"
    ],
    "playerId": "203828"
  },
  {
    "name": "Kamilla Cardoso",
    "colleges": [
      "Syracuse University",
      "University of South Carolina"
    ],
    "playerId": "1642289"
  },
  {
    "name": "Kelsey Plum",
    "colleges": [
      "University of Washington"
    ],
    "playerId": "1628276"
  },
  {
    "name": "Lexie Brown",
    "colleges": [
      "University of Maryland",
      "Duke University"
    ],
    "playerId": "1628882"
  },
  {
    "name": "Alanna Smith",
    "colleges": [
      "Stanford University"
    ],
    "playerId": "1629501"
  },
  {
    "name": "Diamond DeShields",
    "colleges": [
      "University of North Carolina at Chapel Hill",
      "University of Tennessee"
    ],
    "playerId": "1628890"
  },
  {
    "name": "Jonquel Jones",
    "colleges": [
      "Clemson University",
      "George Washington University"
    ],
    "playerId": "1627673"
  },
  {
    "name": "Courtney Vandersloot",
    "colleges": [
      "Gonzaga University"
    ],
    "playerId": "202664"
  },
  {
    "name": "Natasha Howard",
    "colleges": [
      "Florida State University"
    ],
    "playerId": "203827"
  },
  {
    "name": "Queen Egbo",
    "colleges": [
      "Baylor University"
    ],
    "playerId": "1631031"
  },
  {
    "name": "Betnijah Laney-Hamilton",
    "colleges": [
      "Rutgers University"
    ],
    "playerId": "204335"
  }
];

const COLLEGES = {
  "Abilene Christian University": "Western Athletic Conference",
  "Alabama A&M University": "Southwestern Athletic Conference",
  "Alabama State University": "Southwestern Athletic Conference",
  "Alcorn State University": "Southwestern Athletic Conference",
  "American University": "Patriot League",
  "Appalachian State University": "Sun Belt Conference",
  "Arizona State University": "Big 12 Conference",
  "Arkansas State University": "Sun Belt Conference",
  "Auburn University": "Southeastern Conference",
  "Austin Peay State University": "ASUN Conference",
  "Ball State University": "Mid-American Conference",
  "Baylor University": "Big 12 Conference",
  "Bellarmine University": "ASUN Conference",
  "Belmont University": "Missouri Valley Conference",
  "Bethune-Cookman University": "Mid-Eastern Athletic Conference",
  "Boise State University": "Mountain West Conference",
  "Boston College": "Atlantic Coast Conference",
  "Boston University": "Patriot League",
  "Bowling Green State University": "Mid-American Conference",
  "Bradley University": "Missouri Valley Conference",
  "Brigham Young University": "Big 12 Conference",
  "Brown University": "Ivy League",
  "Bryant University": "America East Conference",
  "Bucknell University": "Patriot League",
  "Butler University": "Big East Conference",
  "California Baptist University": "Western Athletic Conference",
  "California Polytechnic State University - San Luis Obispo": "Big West Conference",
  "California State University - Bakersfield": "Big West Conference",
  "California State University - Fresno": "Mountain West Conference",
  "California State University - Fullerton": "Big West Conference",
  "California State University - Long Beach": "Big West Conference",
  "California State University - Northridge": "Big West Conference",
  "California State University - Sacramento": "Big Sky Conference",
  "Campbell University": "Big South Conference",
  "Canisius College": "Metro Atlantic Athletic Conference",
  "Central Connecticut State University": "Northeast Conference",
  "Central Michigan University": "Mid-American Conference",
  "Charleston Southern University": "Big South Conference",
  "Chicago State University": "Northeast Conference",
  "Clemson University": "Atlantic Coast Conference",
  "Cleveland State University": "Horizon League",
  "Coastal Carolina University": "Sun Belt Conference",
  "Colgate University": "Patriot League",
  "College of Charleston": "Coastal Athletic Association",
  "College of the Holy Cross": "Patriot League",
  "Colorado State University": "Mountain West Conference",
  "Columbia University": "Ivy League",
  "Coppin State University": "Mid-Eastern Athletic Conference",
  "Cornell University": "Ivy League",
  "Creighton University": "Big East Conference",
  "Dartmouth College": "Ivy League",
  "Davidson College": "Atlantic 10 Conference",
  "Delaware State University": "Mid-Eastern Athletic Conference",
  "DePaul University": "Big East Conference",
  "Drake University": "Missouri Valley Conference",
  "Drexel University": "Coastal Athletic Association",
  "Duke University": "Atlantic Coast Conference",
  "Duquesne University": "Atlantic 10 Conference",
  "East Carolina University": "American Athletic Conference",
  "East Tennessee State University": "Southern Conference",
  "Eastern Illinois University": "Ohio Valley Conference",
  "Eastern Kentucky University": "ASUN Conference",
  "Eastern Michigan University": "Mid-American Conference",
  "Eastern Washington University": "Big Sky Conference",
  "Elon University": "Coastal Athletic Association",
  "Fairfield University": "Metro Atlantic Athletic Conference",
  "Fairleigh Dickinson University": "Northeast Conference",
  "Florida A&M University": "Southwestern Athletic Conference",
  "Florida Atlantic University": "American Athletic Conference",
  "Florida Gulf Coast University": "ASUN Conference",
  "Florida International University": "Conference USA",
  "Florida State University": "Atlantic Coast Conference",
  "Fordham University": "Atlantic 10 Conference",
  "Furman University": "Southern Conference",
  "Gardner-Webb University": "Big South Conference",
  "George Mason University": "Atlantic 10 Conference",
  "George Washington University": "Atlantic 10 Conference",
  "Georgetown University": "Big East Conference",
  "Georgia Southern University": "Sun Belt Conference",
  "Georgia State University": "Sun Belt Conference",
  "Georgia Tech": "Atlantic Coast Conference",
  "Gonzaga University": "West Coast Conference",
  "Grambling State University": "Southwestern Athletic Conference",
  "Grand Canyon University": "Western Athletic Conference",
  "Hampton University": "Coastal Athletic Association",
  "Harvard University": "Ivy League",
  "High Point University": "Big South Conference",
  "Hofstra University": "Coastal Athletic Association",
  "Houston Christian University": "Southland Conference",
  "Howard University": "Mid-Eastern Athletic Conference",
  "Idaho State University": "Big Sky Conference",
  "Illinois State University": "Missouri Valley Conference",
  "Indiana State University": "Missouri Valley Conference",
  "Indiana University": "Big Ten Conference",
  "Indiana University-Purdue University - Indianapolis (IUPUI)": "Horizon League",
  "Iona University": "Metro Atlantic Athletic Conference",
  "Iowa State University": "Big 12 Conference",
  "Jackson State University": "Southwestern Athletic Conference",
  "Jacksonville State University": "ASUN Conference",
  "Jacksonville University": "ASUN Conference",
  "James Madison University": "Sun Belt Conference",
  "Kansas State University": "Big 12 Conference",
  "Kennesaw State University": "ASUN Conference",
  "Kent State University": "Mid-American Conference",
  "La Salle University": "Atlantic 10 Conference",
  "Lafayette College": "Patriot League",
  "Lamar University": "Southland Conference",
  "Lehigh University": "Patriot League",
  "Liberty University": "Conference USA",
  "Lindenwood University": "Ohio Valley Conference",
  "Lipscomb University": "ASUN Conference",
  "Long Island University": "Northeast Conference",
  "Longwood University": "Big South Conference",
  "Louisiana State University (LSU)": "Southeastern Conference",
  "Louisiana Tech University": "Conference USA",
  "Loyola Marymount University": "West Coast Conference",
  "Loyola University Chicago": "Atlantic 10 Conference",
  "Loyola University Maryland": "Patriot League",
  "Manhattan College": "Metro Atlantic Athletic Conference",
  "Marist College": "Metro Atlantic Athletic Conference",
  "Marquette University": "Big East Conference",
  "Marshall University": "Sun Belt Conference",
  "McNeese State University": "Southland Conference",
  "Mercer University": "Southern Conference",
  "Merrimack College": "Northeast Conference",
  "Miami University": "Mid-American Conference",
  "Michigan State University": "Big Ten Conference",
  "Middle Tennessee State University": "Conference USA",
  "Mississippi State University": "Southeastern Conference",
  "Mississippi Valley State University": "Southwestern Athletic Conference",
  "Missouri State University": "Missouri Valley Conference",
  "Monmouth University": "Coastal Athletic Association",
  "Montana State University": "Big Sky Conference",
  "Morehead State University": "Ohio Valley Conference",
  "Morgan State University": "Mid-Eastern Athletic Conference",
  "Mount St. Mary's University": "Metro Atlantic Athletic Conference",
  "Murray State University": "Missouri Valley Conference",
  "New Jersey Institute of Technology": "America East Conference",
  "New Mexico State University": "Conference USA",
  "Niagara University": "Metro Atlantic Athletic Conference",
  "Nicholls State University": "Southland Conference",
  "Norfolk State University": "Mid-Eastern Athletic Conference",
  "North Carolina A&T State University": "Coastal Athletic Association",
  "North Carolina Central University": "Mid-Eastern Athletic Conference",
  "North Carolina State University": "Atlantic Coast Conference",
  "North Dakota State University": "Summit League",
  "Northeastern University": "Coastal Athletic Association",
  "Northern Arizona University": "Big Sky Conference",
  "Northern Illinois University": "Mid-American Conference",
  "Northern Kentucky University": "Horizon League",
  "Northwestern State University of Louisiana": "Southland Conference",
  "Northwestern University": "Big Ten Conference",
  "Oakland University": "Horizon League",
  "Ohio State University": "Big Ten Conference",
  "Ohio University": "Mid-American Conference",
  "Oklahoma State University": "Big 12 Conference",
  "Old Dominion University": "Sun Belt Conference",
  "Oral Roberts University": "Summit League",
  "Oregon State University": "Pacific-12 Conference",
  "Penn State": "Big Ten Conference",
  "Pepperdine University": "West Coast Conference",
  "Portland State University": "Big Sky Conference",
  "Prairie View A & M University": "Southwestern Athletic Conference",
  "Presbyterian College": "Big South Conference",
  "Princeton University": "Ivy League",
  "Providence College": "Big East Conference",
  "Purdue University": "Big Ten Conference",
  "Purdue University - Fort Wayne": "Horizon League",
  "Queens University of Charlotte": "ASUN Conference",
  "Quinnipiac University": "Metro Atlantic Athletic Conference",
  "Radford University": "Big South Conference",
  "Rice University": "American Athletic Conference",
  "Rider University": "Metro Atlantic Athletic Conference",
  "Robert Morris University - Pennsylvania": "Horizon League",
  "Rutgers University": "Big Ten Conference",
  "Sacred Heart University": "Northeast Conference",
  "Saint Francis University": "Northeast Conference",
  "Saint Joseph's University": "Atlantic 10 Conference",
  "Saint Louis University": "Atlantic 10 Conference",
  "Saint Mary's College of California": "West Coast Conference",
  "Saint Peter's University": "Metro Atlantic Athletic Conference",
  "Sam Houston State University": "Conference USA",
  "Samford University": "Southern Conference",
  "San Diego State University": "Mountain West Conference",
  "San Jose State University": "Mountain West Conference",
  "Santa Clara University": "West Coast Conference",
  "Seattle University": "Western Athletic Conference",
  "Seton Hall University": "Big East Conference",
  "Siena College": "Metro Atlantic Athletic Conference",
  "South Carolina State University": "Mid-Eastern Athletic Conference",
  "South Dakota State University": "Summit League",
  "Southeast Missouri State University": "Ohio Valley Conference",
  "Southeastern Louisiana University": "Southland Conference",
  "Southern Illinois University Carbondale": "Missouri Valley Conference",
  "Southern Illinois University Edwardsville": "Ohio Valley Conference",
  "Southern Methodist University - SMU": "Atlantic Coast Conference",
  "Southern University & A&M College": "Southwestern Athletic Conference",
  "Southern Utah University": "Western Athletic Conference",
  "St. Bonaventure University": "Atlantic 10 Conference",
  "St. Francis College": "Northeast Conference",
  "St. John's University - New York": "Big East Conference",
  "Stanford University": "Atlantic Coast Conference",
  "Stephen F Austin State University": "Southland Conference",
  "Stetson University": "ASUN Conference",
  "Stonehill College": "Northeast Conference",
  "SUNY Binghamton University": "America East Conference",
  "SUNY Stony Brook University": "Coastal Athletic Association",
  "SUNY University at Albany": "America East Conference",
  "SUNY University at Buffalo": "Mid-American Conference",
  "Syracuse University": "Atlantic Coast Conference",
  "Tarleton State University": "Western Athletic Conference",
  "Temple University": "American Athletic Conference",
  "Tennessee State University": "Ohio Valley Conference",
  "Texas A&M University": "Southeastern Conference",
  "Texas A&M University - Commerce": "Southland Conference",
  "Texas A&M University - Corpus Christi": "Southland Conference",
  "Texas Christian University": "Big 12 Conference",
  "Texas Southern University": "Southwestern Athletic Conference",
  "Texas State University": "Sun Belt Conference",
  "Texas Tech University": "Big 12 Conference",
  "The Citadel": "Southern Conference",
  "Towson University": "Coastal Athletic Association",
  "Troy University": "Sun Belt Conference",
  "Tulane University": "American Athletic Conference",
  "United States Air Force Academy": "Mountain West Conference",
  "United States Military Academy": "Patriot League",
  "United States Naval Academy": "Patriot League",
  "University of Akron": "Mid-American Conference",
  "University of Alabama": "Southeastern Conference",
  "University of Alabama - Birmingham": "American Athletic Conference",
  "University of Arizona": "Big 12 Conference",
  "University of Arkansas": "Southeastern Conference",
  "University of Arkansas at Little Rock": "Ohio Valley Conference",
  "University of Arkansas at Pine Bluff": "Southwestern Athletic Conference",
  "University of California - Berkeley": "Atlantic Coast Conference",
  "University of California - Davis": "Big West Conference",
  "University of California - Irvine": "Big West Conference",
  "University of California - Los Angeles - UCLA": "Big Ten Conference",
  "University of California - Riverside": "Big West Conference",
  "University of California - San Diego": "Big West Conference",
  "University of California - Santa Barbara": "Big West Conference",
  "University of Central Arkansas": "ASUN Conference",
  "University of Central Florida": "Big 12 Conference",
  "University of Cincinnati": "Big 12 Conference",
  "University of Colorado - Boulder": "Big 12 Conference",
  "University of Connecticut": "Big East Conference",
  "University of Dayton": "Atlantic 10 Conference",
  "University of Delaware": "Coastal Athletic Association",
  "University of Denver": "Summit League",
  "University of Detroit Mercy": "Horizon League",
  "University of Evansville": "Missouri Valley Conference",
  "University of Florida": "Southeastern Conference",
  "University of Georgia": "Southeastern Conference",
  "University of Hawaii at Manoa": "Big West Conference",
  "University of Houston": "Big 12 Conference",
  "University of Idaho": "Big Sky Conference",
  "University of Illinois": "Big Ten Conference",
  "University of Illinois at Chicago": "Missouri Valley Conference",
  "University of Iowa": "Big Ten Conference",
  "University of Kansas": "Big 12 Conference",
  "University of Kentucky": "Southeastern Conference",
  "University of Louisiana": "Sun Belt Conference",
  "University of Louisiana - Monroe": "Sun Belt Conference",
  "University of Louisville": "Atlantic Coast Conference",
  "University of Maine": "America East Conference",
  "University of Maryland": "Big Ten Conference",
  "University of Maryland - Baltimore County": "America East Conference",
  "University of Maryland Eastern Shore": "Mid-Eastern Athletic Conference",
  "University of Massachusetts - Amherst": "Atlantic 10 Conference",
  "University of Massachusetts - Lowell": "America East Conference",
  "University of Memphis": "American Athletic Conference",
  "University of Miami": "Atlantic Coast Conference",
  "University of Michigan": "Big Ten Conference",
  "University of Minnesota": "Big Ten Conference",
  "University of Mississippi": "Southeastern Conference",
  "University of Missouri": "Southeastern Conference",
  "University of Missouri - Kansas City": "Summit League",
  "University of Montana": "Big Sky Conference",
  "University of Nebraska": "Big Ten Conference",
  "University of Nebraska at Omaha": "Summit League",
  "University of Nevada - Las Vegas": "Mountain West Conference",
  "University of Nevada - Reno": "Mountain West Conference",
  "University of New Hampshire": "America East Conference",
  "University of New Mexico": "Mountain West Conference",
  "University of New Orleans": "Southland Conference",
  "University of North Alabama": "ASUN Conference",
  "University of North Carolina - Greensboro": "Southern Conference",
  "University of North Carolina - Wilmington": "Coastal Athletic Association",
  "University of North Carolina Asheville": "Big South Conference",
  "University of North Carolina at Chapel Hill": "Atlantic Coast Conference",
  "University of North Carolina at Charlotte": "American Athletic Conference",
  "University of North Dakota": "Summit League",
  "University of North Florida": "ASUN Conference",
  "University of North Texas": "American Athletic Conference",
  "University of Northern Colorado": "Big Sky Conference",
  "University of Northern Iowa": "Missouri Valley Conference",
  "University of Notre Dame": "Atlantic Coast Conference",
  "University of Oklahoma": "Southeastern Conference",
  "University of Oregon": "Big Ten Conference",
  "University of Pennsylvania - Penn": "Ivy League",
  "University of Pittsburgh": "Atlantic Coast Conference",
  "University of Portland": "West Coast Conference",
  "University of Rhode Island": "Atlantic 10 Conference",
  "University of Richmond": "Atlantic 10 Conference",
  "University of San Diego": "West Coast Conference",
  "University of San Francisco": "West Coast Conference",
  "University of South Alabama": "Sun Belt Conference",
  "University of South Carolina": "Southeastern Conference",
  "University of South Carolina - Upstate": "Big South Conference",
  "University of South Dakota": "Summit League",
  "University of South Florida": "American Athletic Conference",
  "University of Southern California": "Big Ten Conference",
  "University of Southern Mississippi": "Sun Belt Conference",
  "University of St. Thomas - Minnesota": "Summit League",
  "University of Tennessee": "Southeastern Conference",
  "University of Tennessee - Chattanooga": "Southern Conference",
  "University of Tennessee - Martin": "Ohio Valley Conference",
  "University of Texas - Arlington": "Western Athletic Conference",
  "University of Texas - Austin": "Southeastern Conference",
  "University of Texas - El Paso": "Conference USA",
  "University of Texas - Rio Grande Valley": "Western Athletic Conference",
  "University of Texas - San Antonio": "American Athletic Conference",
  "University of the Incarnate Word": "Southland Conference",
  "University of the Pacific": "West Coast Conference",
  "University of Toledo": "Mid-American Conference",
  "University of Tulsa": "American Athletic Conference",
  "University of Utah": "Big 12 Conference",
  "University of Vermont": "America East Conference",
  "University of Virginia": "Atlantic Coast Conference",
  "University of Washington": "Big Ten Conference",
  "University of Wisconsin": "Big Ten Conference",
  "University of Wisconsin - Green Bay": "Horizon League",
  "University of Wisconsin - Milwaukee": "Horizon League",
  "University of Wyoming": "Mountain West Conference",
  "Utah State University": "Mountain West Conference",
  "Utah Tech University (Formerly Dixie State University)": "Western Athletic Conference",
  "Utah Valley University": "Western Athletic Conference",
  "Valparaiso University": "Missouri Valley Conference",
  "Vanderbilt University": "Southeastern Conference",
  "Villanova University": "Big East Conference",
  "Virginia Commonwealth University": "Atlantic 10 Conference",
  "Virginia Military Institute - VMI": "Big South Conference",
  "Virginia Tech": "Atlantic Coast Conference",
  "Wagner College": "Northeast Conference",
  "Wake Forest University": "Atlantic Coast Conference",
  "Washington State University": "West Coast Conference",
  "Weber State University": "Big Sky Conference",
  "West Virginia University": "Big 12 Conference",
  "Western Carolina University": "Southern Conference",
  "Western Illinois University": "Ohio Valley Conference",
  "Western Kentucky University": "Conference USA",
  "Western Michigan University": "Mid-American Conference",
  "Wichita State University": "American Athletic Conference",
  "William & Mary": "Coastal Athletic Association",
  "Winthrop University": "Big South Conference",
  "Wofford College": "Southern Conference",
  "Wright State University": "Horizon League",
  "Xavier University": "Big East Conference",
  "Yale University": "Ivy League",
  "Youngstown State University": "Horizon League",
};


const now = new Date();
const TWENTY_FOUR_HOURS_IN_MILLIS = 86400000;
const RELEASE_DAY = new Date("2025-03-20");
const MIN_GUESSES = 3;

const BLACK_SQUARE = String.fromCodePoint(0x2B1B);
const GREEN_SQUARE = String.fromCodePoint(0x1F7E9);
const RED_SQUARE = String.fromCodePoint(0x1F7E5);
const YELLOW_SQUARE = String.fromCodePoint(0x1F7E8);

const gameIndexFromQueryParams = new URL(window.location.toString()).searchParams?.get("g");
const gameIndex = gameIndexFromQueryParams ? parseInt(gameIndexFromQueryParams, 10) : Math.floor((now - RELEASE_DAY) / TWENTY_FOUR_HOURS_IN_MILLIS);
const gameNumber = gameIndex + 1;
const todayKey = `WTG-1-${gameNumber}`;
const todaysAnswers = [
  {
    league: "NBA",
    headshot: `https://cdn.nba.com/headshots/nba/latest/260x190/${NBA_ANSWERS[gameIndex]?.playerId}.png`,
    ...NBA_ANSWERS[gameIndex],
  },
  {
    league: "WNBA",
    headshot: `https://cdn.wnba.com/headshots/wnba/latest/260x190/${WNBA_ANSWERS[gameIndex]?.playerId}.png`,
    ...WNBA_ANSWERS[gameIndex],
  },
];

const getLeagueLogo = (league) => `./images/${league.toLowerCase()}-logo.png`;

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

const getRemainingConferences = (colleges, guesses) => {
  let remainingConferences = colleges.map((c) => COLLEGES[c]);
  guesses.forEach((g) => {
    if (colleges.includes(g)) {
      const confIndex = remainingConferences.indexOf(COLLEGES[g]);
      remainingConferences = remainingConferences.filter((_, i) => confIndex !== i);
    }
  });

  return remainingConferences;
};

const isCorrectConference = (colleges, guesses, guessIndex) => {
  const confsBefore = guessIndex === 0 ? colleges.map((c) => COLLEGES[c]) : getRemainingConferences(colleges, guesses.slice(0, guessIndex));
  return confsBefore.includes(COLLEGES[guesses[guessIndex]]);
};

const renderGuesses = (colleges, guesses) => {
  const maxGuesses = getMaxGuesses(colleges);

  return [...Array(maxGuesses)].map((_, guessIndex) => {
    const hasGuess = !!guesses[guessIndex];
    const guess = guesses[guessIndex];
    const isCorrect = colleges.includes(guess);
    const remainingConferences = getRemainingConferences(colleges, guesses);

    const guessText = guess || `Guess ${guessIndex + 1}`
    const classes = Object.entries({
      correct: hasGuess && isCorrect,
      incorrect: hasGuess && !isCorrect,
      correctConference: hasGuess && !isCorrect && isCorrectConference(colleges, guesses, guessIndex)
    }).reduce((acc, [k, v]) => v ? `${acc} ${k}` : acc, "");

    return `<div class="row guess ${classes}">${guessText}</div>`;
  }).join("");
};

const renderCollegeChecklist = (colleges, guesses, i) => {
  const college = colleges[i];

  if (guesses.includes(college)) {
    return `<div class="round__found__college__correct">${college}</div>`;
  }

  if (isRoundFinished(colleges, guesses)) {
    return `<div class="round__found__college__incorrect">${college}</div>`;
  }

  return `<div class="round__found__college__pending">School ${i + 1}</div>`;
};

const renderPlayerSection = ({ name, headshot, colleges, league, roundIndex, guesses }) => {
  const numCorrectGuesses = new Set(colleges).intersection(new Set(guesses)).size;

  return `
    <div class="player">
      <div class="round__player">
        <img
          class="round__player__headshot"
          src="${headshot}"
          alt="${name}"
        />
        <h2 class="round__player__name">${name}</h2>
      </div>
      <div class="round__found">${colleges.map((_, i) => renderCollegeChecklist(colleges, guesses, i))}</div>
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
};

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

      if (isCorrectConference(colleges, guesses, i)) {
        return YELLOW_SQUARE;
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
  const resultEmojiText = `Where'd they go? Game Day #${gameNumber}\n` +
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
    header = "1 for 2 ain't that bad";
  }

  const onCopy = () => {
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
              const gameFinished = newResults.every((guesses, i) => isRoundFinished(todaysAnswers[i].colleges, guesses));
              if (gtag && gameFinished) {
                try {
                  const getNumCorrect =
                    (i) => newResults[i].filter((g) => todaysAnswers[i].colleges.includes(g)).length;

                  gtag('event', 'game_finished', {
                    'nba_result': `${getNumCorrect(0)}/${todaysAnswers[0].colleges.length}/${newResults[0].length}/${getMaxGuesses(todaysAnswers[0].colleges)}`,
                    'wnba_result': `${getNumCorrect(1)}/${todaysAnswers[1].colleges.length}/${newResults[1].length}/${getMaxGuesses(todaysAnswers[1].colleges)}`,
                  });
                } catch {}
              }
              updateResults();
            }
          )
        );
      } else {
        autosuggestList.innerHTML = "";
      }
    });
  };

  if (gameNumber > NBA_ANSWERS.length) {
    gameZone.innerHTML = `<h2 class="next-year">We'll see you in March</h2>`;
  } else {
    gameZone.innerHTML = `<h3 class="game-number">Game Day #${gameNumber}</h3>` + todaysResults.map((guesses, roundIndex) => {
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
  }
};

window.addEventListener("load", function () {
  updateResults();
})
