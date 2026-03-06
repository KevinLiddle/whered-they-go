const NBA_ANSWERS = [
  {
    "name": "Jeremiah Fears",
    "colleges": [
      "University of Oklahoma",
    ],
    "playerId": "1642847"
  },
  {
    "name": "Gilbert Arenas",
    "colleges": [
      "University of Arizona",
    ],
    "playerId": "2240"
  },
  {
    "name": "Jalen Williams",
    "colleges": [
      "Santa Clara University",
    ],
    "playerId": "1631114"
  },
  {
    "name": "Pascal Siakam",
    "colleges": [
      "New Mexico State University",
    ],
    "playerId": "1627783"
  },
  {
    "name": "Michael Carter-Williams",
    "colleges": [
      "Syracuse University",
    ],
    "playerId": "203487"
  },
  {
    "name": "Dejounte Murray",
    "colleges": [
      "University of Washington",
    ],
    "playerId": "1627749"
  },
  {
    "name": "Andre Drummond",
    "colleges": [
      "University of Connecticut",
    ],
    "playerId": "203083"
  },
  {
    "name": "Paul Reed",
    "colleges": [
      "DePaul University",
    ],
    "playerId": "1630194"
  },
  {
    "name": "",
    "colleges": [
      "",
    ],
    "playerId": ""
  },
  {
    "name": "",
    "colleges": [
      "",
    ],
    "playerId": ""
  },
  {
    "name": "",
    "colleges": [
      "",
    ],
    "playerId": ""
  },
  {
    "name": "",
    "colleges": [
      "",
    ],
    "playerId": ""
  },
  {
    "name": "",
    "colleges": [
      "",
    ],
    "playerId": ""
  },
  {
    "name": "",
    "colleges": [
      "",
    ],
    "playerId": ""
  },
  {
    "name": "",
    "colleges": [
      "",
    ],
    "playerId": ""
  },
  {
    "name": "",
    "colleges": [
      "",
    ],
    "playerId": ""
  },
  {
    "name": "",
    "colleges": [
      "",
    ],
    "playerId": ""
  },
  {
    "name": "",
    "colleges": [
      "",
    ],
    "playerId": ""
  },
  {
    "name": "",
    "colleges": [
      "",
    ],
    "playerId": ""
  },
  {
    "name": "",
    "colleges": [
      "",
    ],
    "playerId": ""
  },
  {
    "name": "",
    "colleges": [
      "",
    ],
    "playerId": ""
  },
];

const WNBA_ANSWERS = [
  {
    "name": "",
    "colleges": [
      ""
    ],
    "playerId": ""
  },
  {
    "name": "",
    "colleges": [
      ""
    ],
    "playerId": ""
  },
  {
    "name": "",
    "colleges": [
      ""
    ],
    "playerId": ""
  },
  {
    "name": "",
    "colleges": [
      ""
    ],
    "playerId": ""
  },
  {
    "name": "",
    "colleges": [
      ""
    ],
    "playerId": ""
  },
  {
    "name": "",
    "colleges": [
      ""
    ],
    "playerId": ""
  },
  {
    "name": "",
    "colleges": [
      ""
    ],
    "playerId": ""
  },
  {
    "name": "",
    "colleges": [
      ""
    ],
    "playerId": ""
  },
  {
    "name": "",
    "colleges": [
      ""
    ],
    "playerId": ""
  },
  {
    "name": "",
    "colleges": [
      ""
    ],
    "playerId": ""
  },
  {
    "name": "",
    "colleges": [
      ""
    ],
    "playerId": ""
  },
  {
    "name": "",
    "colleges": [
      ""
    ],
    "playerId": ""
  },
  {
    "name": "",
    "colleges": [
      ""
    ],
    "playerId": ""
  },
  {
    "name": "",
    "colleges": [
      ""
    ],
    "playerId": ""
  },
  {
    "name": "",
    "colleges": [
      ""
    ],
    "playerId": ""
  },
  {
    "name": "",
    "colleges": [
      ""
    ],
    "playerId": ""
  },
  {
    "name": "",
    "colleges": [
      ""
    ],
    "playerId": ""
  },
  {
    "name": "",
    "colleges": [
      ""
    ],
    "playerId": ""
  },
  {
    "name": "",
    "colleges": [
      ""
    ],
    "playerId": ""
  },
  {
    "name": "",
    "colleges": [
      ""
    ],
    "playerId": ""
  },
  {
    "name": "",
    "colleges": [
      ""
    ],
    "playerId": ""
  },
];

const ACC = "Atlantic Coast Conference";
const AMERICAN = "American Athletic Conference";
const AMERICA_EAST = "America East Conference";
const ASUN = "ASUN Conference";
const ATLANTIC_10 = "Atlantic 10 Conference";
const BIG_10 = "Big 10";
const BIG_12 = "Big 12";
const BIG_EAST = "Big East Conference";
const BIG_SKY = "Big Sky Conference";
const BIG_SOUTH = "Big South Conference";
const BIG_WEST = "Big West Conference";
const CAA = "Coastal Athletic Association";
const CUSA = "Conference USA";
const HORIZON = "Horizon League";
const IVY_LEAGUE = "Ivy League";
const METRO_ATLANTIC = "Metro Atlantic Athletic Conference";
const MAC = "Mid-American Conference";
const MID_EASTERN = "Mid-Eastern Athletic Conference";
const MISSOURI_VALLEY = "Missouri Valley Conference";
const MOUNTAIN_WEST = "Mountain West Conference";
const NORTHEAST = "Northeast Conference";
const OHIO_VALLEY = "Ohio Valley Conference";
const PAC_12 = "Pacific-12 Conference";
const PATRIOT = "Patriot League";
const SEC = "Southeastern Conference";
const SOUTHERN = "Southern Conference";
const SOUTHLAND = "Southland Conference";
const SUMMIT = "Summit League";
const SUN_BELT = "Sun Belt Conference";
const SWAC = "Southwestern Athletic Conference";
const WAC = "Western Athletic Conference";
const WCC = "West Coast Conference";

const COLLEGES = {
  "Abilene Christian University": WAC,
  "Alabama A&M University": SWAC,
  "Alabama State University": SWAC,
  "Alcorn State University": SWAC,
  "American University": PATRIOT,
  "Appalachian State University": SUN_BELT,
  "Arizona State University": BIG_12,
  "Arkansas State University": SUN_BELT,
  "Auburn University": SEC,
  "Austin Peay State University": ASUN,
  "Ball State University": MAC,
  "Baylor University": BIG_12,
  "Bellarmine University": ASUN,
  "Belmont University": MISSOURI_VALLEY,
  "Bethune-Cookman University": MID_EASTERN,
  "Boise State University": MOUNTAIN_WEST,
  "Boston College": ACC,
  "Boston University": PATRIOT,
  "Bowling Green State University": MAC,
  "Bradley University": MISSOURI_VALLEY,
  "Brigham Young University": BIG_12,
  "Brown University": IVY_LEAGUE,
  "Bryant University": AMERICA_EAST,
  "Bucknell University": PATRIOT,
  "Butler University": BIG_EAST,
  "California Baptist University": WAC,
  "California Polytechnic State University - San Luis Obispo": BIG_WEST,
  "California State University - Bakersfield": BIG_WEST,
  "California State University - Fresno": MOUNTAIN_WEST,
  "California State University - Fullerton": BIG_WEST,
  "California State University - Long Beach": BIG_WEST,
  "California State University - Northridge": BIG_WEST,
  "California State University - Sacramento": BIG_SKY,
  "Campbell University": BIG_SOUTH,
  "Canisius College": METRO_ATLANTIC,
  "Central Connecticut State University": NORTHEAST,
  "Central Michigan University": MAC,
  "Charleston Southern University": BIG_SOUTH,
  "Chicago State University": NORTHEAST,
  "Clemson University": ACC,
  "Cleveland State University": HORIZON,
  "Coastal Carolina University": SUN_BELT,
  "Colgate University": PATRIOT,
  "College of Charleston": CAA,
  "College of the Holy Cross": PATRIOT,
  "Colorado State University": MOUNTAIN_WEST,
  "Columbia University": IVY_LEAGUE,
  "Coppin State University": MID_EASTERN,
  "Cornell University": IVY_LEAGUE,
  "Creighton University": BIG_EAST,
  "Dartmouth College": IVY_LEAGUE,
  "Davidson College": ATLANTIC_10,
  "Delaware State University": MID_EASTERN,
  "DePaul University": BIG_EAST,
  "Drake University": MISSOURI_VALLEY,
  "Drexel University": CAA,
  "Duke University": ACC,
  "Duquesne University": ATLANTIC_10,
  "East Carolina University": AMERICAN,
  "East Tennessee State University": SOUTHERN,
  "Eastern Illinois University": OHIO_VALLEY,
  "Eastern Kentucky University": ASUN,
  "Eastern Michigan University": MAC,
  "Eastern Washington University": BIG_SKY,
  "Elon University": CAA,
  "Fairfield University": METRO_ATLANTIC,
  "Fairleigh Dickinson University": NORTHEAST,
  "Florida A&M University": SWAC,
  "Florida Atlantic University": AMERICAN,
  "Florida Gulf Coast University": ASUN,
  "Florida International University": CUSA,
  "Florida State University": ACC,
  "Fordham University": ATLANTIC_10,
  "Furman University": SOUTHERN,
  "Gardner-Webb University": BIG_SOUTH,
  "George Mason University": ATLANTIC_10,
  "George Washington University": ATLANTIC_10,
  "Georgetown University": BIG_EAST,
  "Georgia Southern University": SUN_BELT,
  "Georgia State University": SUN_BELT,
  "Georgia Tech": ACC,
  "Gonzaga University": WCC,
  "Grambling State University": SWAC,
  "Grand Canyon University": MOUNTAIN_WEST,
  "Hampton University": CAA,
  "Harvard University": IVY_LEAGUE,
  "High Point University": BIG_SOUTH,
  "Hofstra University": CAA,
  "Houston Christian University": SOUTHLAND,
  "Howard University": MID_EASTERN,
  "Idaho State University": BIG_SKY,
  "Illinois State University": MISSOURI_VALLEY,
  "Indiana State University": MISSOURI_VALLEY,
  "Indiana University": BIG_10,
  "Indiana University-Purdue University - Indianapolis (IUPUI)": HORIZON,
  "Iona University": METRO_ATLANTIC,
  "Iowa State University": BIG_12,
  "Jackson State University": SWAC,
  "Jacksonville State University": ASUN,
  "Jacksonville University": ASUN,
  "James Madison University": SUN_BELT,
  "Kansas State University": BIG_12,
  "Kennesaw State University": ASUN,
  "Kent State University": MAC,
  "La Salle University": ATLANTIC_10,
  "Lafayette College": PATRIOT,
  "Lamar University": SOUTHLAND,
  "Lehigh University": PATRIOT,
  "Liberty University": CUSA,
  "Lindenwood University": OHIO_VALLEY,
  "Lipscomb University": ASUN,
  "Long Island University": NORTHEAST,
  "Longwood University": BIG_SOUTH,
  "Louisiana State University (LSU)": SEC,
  "Louisiana Tech University": CUSA,
  "Loyola Marymount University": WCC,
  "Loyola University Chicago": ATLANTIC_10,
  "Loyola University Maryland": PATRIOT,
  "Manhattan College": METRO_ATLANTIC,
  "Marist College": METRO_ATLANTIC,
  "Marquette University": BIG_EAST,
  "Marshall University": SUN_BELT,
  "McNeese State University": SOUTHLAND,
  "Mercer University": SOUTHERN,
  "Merrimack College": NORTHEAST,
  "Miami University": MAC,
  "Michigan State University": BIG_10,
  "Middle Tennessee State University": CUSA,
  "Mississippi State University": SEC,
  "Mississippi Valley State University": SWAC,
  "Missouri State University": CUSA,
  "Monmouth University": CAA,
  "Montana State University": BIG_SKY,
  "Morehead State University": OHIO_VALLEY,
  "Morgan State University": MID_EASTERN,
  "Mount St. Mary's University": METRO_ATLANTIC,
  "Murray State University": MISSOURI_VALLEY,
  "New Jersey Institute of Technology": AMERICA_EAST,
  "New Mexico State University": CUSA,
  "Niagara University": METRO_ATLANTIC,
  "Nicholls State University": SOUTHLAND,
  "Norfolk State University": MID_EASTERN,
  "North Carolina A&T State University": CAA,
  "North Carolina Central University": MID_EASTERN,
  "North Carolina State University": ACC,
  "North Dakota State University": SUMMIT,
  "Northeastern University": CAA,
  "Northern Arizona University": BIG_SKY,
  "Northern Illinois University": MAC,
  "Northern Kentucky University": HORIZON,
  "Northwestern State University of Louisiana": SOUTHLAND,
  "Northwestern University": BIG_10,
  "Oakland University": HORIZON,
  "Ohio State University": BIG_10,
  "Ohio University": MAC,
  "Oklahoma State University": BIG_12,
  "Old Dominion University": SUN_BELT,
  "Oral Roberts University": SUMMIT,
  "Oregon State University": PAC_12,
  "Penn State": BIG_10,
  "Pepperdine University": WCC,
  "Portland State University": BIG_SKY,
  "Prairie View A & M University": SWAC,
  "Presbyterian College": BIG_SOUTH,
  "Princeton University": IVY_LEAGUE,
  "Providence College": BIG_EAST,
  "Purdue University": BIG_10,
  "Purdue University - Fort Wayne": HORIZON,
  "Queens University of Charlotte": ASUN,
  "Quinnipiac University": METRO_ATLANTIC,
  "Radford University": BIG_SOUTH,
  "Rice University": AMERICAN,
  "Rider University": METRO_ATLANTIC,
  "Robert Morris University - Pennsylvania": HORIZON,
  "Rutgers University": BIG_10,
  "Sacred Heart University": NORTHEAST,
  "Saint Francis University": NORTHEAST,
  "Saint Joseph's University": ATLANTIC_10,
  "Saint Louis University": ATLANTIC_10,
  "Saint Mary's College of California": WCC,
  "Saint Peter's University": METRO_ATLANTIC,
  "Sam Houston State University": CUSA,
  "Samford University": SOUTHERN,
  "San Diego State University": MOUNTAIN_WEST,
  "San Jose State University": MOUNTAIN_WEST,
  "Santa Clara University": WCC,
  "Seattle University": WCC,
  "Seton Hall University": BIG_EAST,
  "Siena College": METRO_ATLANTIC,
  "South Carolina State University": MID_EASTERN,
  "South Dakota State University": SUMMIT,
  "Southeast Missouri State University": OHIO_VALLEY,
  "Southeastern Louisiana University": SOUTHLAND,
  "Southern Illinois University Carbondale": MISSOURI_VALLEY,
  "Southern Illinois University Edwardsville": OHIO_VALLEY,
  "Southern Methodist University - SMU": ACC,
  "Southern University & A&M College": SWAC,
  "Southern Utah University": WAC,
  "St. Bonaventure University": ATLANTIC_10,
  "St. Francis College": NORTHEAST,
  "St. John's University - New York": BIG_EAST,
  "Stanford University": ACC,
  "Stephen F Austin State University": SOUTHLAND,
  "Stetson University": ASUN,
  "Stonehill College": NORTHEAST,
  "SUNY Binghamton University": AMERICA_EAST,
  "SUNY Stony Brook University": CAA,
  "SUNY University at Albany": AMERICA_EAST,
  "SUNY University at Buffalo": MAC,
  "Syracuse University": ACC,
  "Tarleton State University": WAC,
  "Temple University": AMERICAN,
  "Tennessee State University": OHIO_VALLEY,
  "Texas A&M University": SEC,
  "Texas A&M University - Commerce": SOUTHLAND,
  "Texas A&M University - Corpus Christi": SOUTHLAND,
  "Texas Christian University": BIG_12,
  "Texas Southern University": SWAC,
  "Texas State University": SUN_BELT,
  "Texas Tech University": BIG_12,
  "The Citadel": SOUTHERN,
  "Towson University": CAA,
  "Troy University": SUN_BELT,
  "Tulane University": AMERICAN,
  "United States Air Force Academy": MOUNTAIN_WEST,
  "United States Military Academy": PATRIOT,
  "United States Naval Academy": PATRIOT,
  "University of Akron": MAC,
  "University of Alabama": SEC,
  "University of Alabama - Birmingham": AMERICAN,
  "University of Arizona": BIG_12,
  "University of Arkansas": SEC,
  "University of Arkansas at Little Rock": OHIO_VALLEY,
  "University of Arkansas at Pine Bluff": SWAC,
  "University of California - Berkeley": ACC,
  "University of California - Davis": BIG_WEST,
  "University of California - Irvine": BIG_WEST,
  "University of California - Los Angeles - UCLA": BIG_10,
  "University of California - Riverside": BIG_WEST,
  "University of California - San Diego": BIG_WEST,
  "University of California - Santa Barbara": BIG_WEST,
  "University of Central Arkansas": ASUN,
  "University of Central Florida": BIG_12,
  "University of Cincinnati": BIG_12,
  "University of Colorado - Boulder": BIG_12,
  "University of Connecticut": BIG_EAST,
  "University of Dayton": ATLANTIC_10,
  "University of Delaware": CUSA,
  "University of Denver": SUMMIT,
  "University of Detroit Mercy": HORIZON,
  "University of Evansville": MISSOURI_VALLEY,
  "University of Florida": SEC,
  "University of Georgia": SEC,
  "University of Hawaii at Manoa": BIG_WEST,
  "University of Houston": BIG_12,
  "University of Idaho": BIG_SKY,
  "University of Illinois": BIG_10,
  "University of Illinois at Chicago": MISSOURI_VALLEY,
  "University of Iowa": BIG_10,
  "University of Kansas": BIG_12,
  "University of Kentucky": SEC,
  "University of Louisiana": SUN_BELT,
  "University of Louisiana - Monroe": SUN_BELT,
  "University of Louisville": ACC,
  "University of Maine": AMERICA_EAST,
  "University of Maryland": BIG_10,
  "University of Maryland - Baltimore County": AMERICA_EAST,
  "University of Maryland Eastern Shore": MID_EASTERN,
  "University of Massachusetts - Amherst": MAC,
  "University of Massachusetts - Lowell": AMERICA_EAST,
  "University of Memphis": AMERICAN,
  "University of Miami": ACC,
  "University of Michigan": BIG_10,
  "University of Minnesota": BIG_10,
  "University of Mississippi": SEC,
  "University of Missouri": SEC,
  "University of Missouri - Kansas City": SUMMIT,
  "University of Montana": BIG_SKY,
  "University of Nebraska": BIG_10,
  "University of Nebraska at Omaha": SUMMIT,
  "University of Nevada - Las Vegas": MOUNTAIN_WEST,
  "University of Nevada - Reno": MOUNTAIN_WEST,
  "University of New Hampshire": AMERICA_EAST,
  "University of New Mexico": MOUNTAIN_WEST,
  "University of New Orleans": SOUTHLAND,
  "University of North Alabama": ASUN,
  "University of North Carolina - Greensboro": SOUTHERN,
  "University of North Carolina - Wilmington": CAA,
  "University of North Carolina Asheville": BIG_SOUTH,
  "University of North Carolina at Chapel Hill": ACC,
  "University of North Carolina at Charlotte": AMERICAN,
  "University of North Dakota": SUMMIT,
  "University of North Florida": ASUN,
  "University of North Texas": AMERICAN,
  "University of Northern Colorado": BIG_SKY,
  "University of Northern Iowa": MISSOURI_VALLEY,
  "University of Notre Dame": ACC,
  "University of Oklahoma": SEC,
  "University of Oregon": BIG_10,
  "University of Pennsylvania - Penn": IVY_LEAGUE,
  "University of Pittsburgh": ACC,
  "University of Portland": WCC,
  "University of Rhode Island": ATLANTIC_10,
  "University of Richmond": ATLANTIC_10,
  "University of San Diego": WCC,
  "University of San Francisco": WCC,
  "University of South Alabama": SUN_BELT,
  "University of South Carolina": SEC,
  "University of South Carolina - Upstate": BIG_SOUTH,
  "University of South Dakota": SUMMIT,
  "University of South Florida": AMERICAN,
  "University of Southern California": BIG_10,
  "University of Southern Mississippi": SUN_BELT,
  "University of St. Thomas - Minnesota": SUMMIT,
  "University of Tennessee": SEC,
  "University of Tennessee - Chattanooga": SOUTHERN,
  "University of Tennessee - Martin": OHIO_VALLEY,
  "University of Texas - Arlington": WAC,
  "University of Texas - Austin": SEC,
  "University of Texas - El Paso": CUSA,
  "University of Texas - Rio Grande Valley": WAC,
  "University of Texas - San Antonio": AMERICAN,
  "University of the Incarnate Word": SOUTHLAND,
  "University of the Pacific": WCC,
  "University of Toledo": MAC,
  "University of Tulsa": AMERICAN,
  "University of Utah": BIG_12,
  "University of Vermont": AMERICA_EAST,
  "University of Virginia": ACC,
  "University of Washington": BIG_10,
  "University of Wisconsin": BIG_10,
  "University of Wisconsin - Green Bay": HORIZON,
  "University of Wisconsin - Milwaukee": HORIZON,
  "University of Wyoming": MOUNTAIN_WEST,
  "Utah State University": MOUNTAIN_WEST,
  "Utah Tech University (Formerly Dixie State University)": WAC,
  "Utah Valley University": WAC,
  "Valparaiso University": MISSOURI_VALLEY,
  "Vanderbilt University": SEC,
  "Villanova University": BIG_EAST,
  "Virginia Commonwealth University": ATLANTIC_10,
  "Virginia Military Institute - VMI": BIG_SOUTH,
  "Virginia Tech": ACC,
  "Wagner College": NORTHEAST,
  "Wake Forest University": ACC,
  "Washington State University": WCC,
  "Weber State University": BIG_SKY,
  "West Virginia University": BIG_12,
  "Western Carolina University": SOUTHERN,
  "Western Illinois University": OHIO_VALLEY,
  "Western Kentucky University": CUSA,
  "Western Michigan University": MAC,
  "Wichita State University": AMERICAN,
  "William & Mary": CAA,
  "Winthrop University": BIG_SOUTH,
  "Wofford College": SOUTHERN,
  "Wright State University": HORIZON,
  "Xavier University": BIG_EAST,
  "Yale University": IVY_LEAGUE,
  "Youngstown State University": HORIZON,
};


const now = new Date();
const TWENTY_FOUR_HOURS_IN_MILLIS = 86400000;
const RELEASE_DAY = new Date("2026-03-17 00:00:00-0500");
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
  const trimmedCollege = college.trim().replaceAll(/[^a-zA-Z0-9 ]/g, "");
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
  const remainingConfs = getRemainingConferences(colleges, guesses.slice(0, guessIndex));
  return remainingConfs.includes(COLLEGES[guesses[guessIndex]]);
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
      <div class="round__found">${colleges.map((_, i) => renderCollegeChecklist(colleges, guesses, i)).join('')}</div>
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
  } else if (gameNumber < 0) {
    gameZone.innerHTML = `<h2 class="countdown">Game time in ${Math.abs(gameIndex)} days...</h2>`;
  } else if (gameNumber === 0) {
    gameZone.innerHTML = `<h2 class="countdown">Rest up. We got a game tomorrow.</h2>`;
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
