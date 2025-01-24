const deckInfo = [
    ["2",'&hearts;' ,"Greenops", "red"],
    ["3",'&hearts;' ,"Artisan", "red" ],
    ["4",'&hearts;' ,"Horticulturist", "red" ],
    ["5",'&hearts;' ,"Engineer", "red" ],
    ["6",'&hearts;' ,"Community Manager", "red" ],
    ["7",'&hearts;' ,"Designer", "red" ],
    ["8",'&hearts;' ,"Entrepreneur" , "red"],
    ["9",'&hearts;' ,"Gardener" , "red"],
    ["10",'&hearts;' ,"Pilot" , "red"],
    ["J",'&hearts;' ,"Investor" , "red"],
    ["Q",'&hearts;' ,"Leader" , "red"],
    ["K",'&hearts;' ,"Elder" , "red"],
    ["A",'&hearts;' ,"Zookeeper" , "red"],
    ["2",'&diams;' ,"Solar gun" , "red"],
    ["3",'&diams;' ,"Sewing kit" , "red"],
    ["4",'&diams;' ,"Pruning tools" , "red"],
    ["5",'&diams;' ,"AR Glasses", "red" ],
    ["6",'&diams;' ,"Community Crest", "red" ],
    ["7",'&diams;' ,"Holoscreen", "red" ],
    ["8",'&diams;' ,"3-D Printer" , "red"],
    ["9",'&diams;' ,"Gardening Tools" , "red"],
    ["10",'&diams;' ,"Solar suit", "red" ],
    ["J",'&diams;' ,"Notebook & Pen", "red" ],
    ["Q",'&diams;' ,"White board & Pen", "red" ],
    ["K",'&diams;' ,"Dictaphone", "red" ],
    ["A",'&diams;' ,"Animal handling tools", "red" ],
    ["2",'&spades;' ,"A monster appears" ],
    ["3",'&spades;' ,"A rare earth metal is depleted" ],
    ["4",'&spades;' ,"Someone inherits a family garden" ],
    ["5",'&spades;' ,"There's trouble in non-solar lands" ],
    ["6",'&spades;' ,"A makerspace member is hogging all the tools" ],
    ["7",'&spades;' ,"A community manager is ambitious for more" ],
    ["8",'&spades;' ,"A community member is lost in the wilds" ],
    ["9",'&spades;' ,"A critical piece of solartech has gone missing..." ],
    ["10",'&spades;' ,"The Council makes a decision you disagree with" ],
    ["J",'&spades;' ,"A natural disaster occurs" ],
    ["Q",'&spades;' ,"Robots are uprising" ],
    ["K",'&spades;' ,"Your rival gains power" ],
    ["A",'&spades;' ,"You suffer a misfortune" ],
    ["2",'&clubs;' ,"The Wilds" ],
    ["3",'&clubs;' ,"Workshop" ],
    ["4",'&clubs;' ,"Greenhouse" ],
    ["5",'&clubs;' ,"Maker Space" ],
    ["6",'&clubs;' ,"Community Hub" ],
    ["7",'&clubs;' ,"Design Studio" ],
    ["8",'&clubs;' ,"Co-working Space" ],
    ["9",'&clubs;' ,"The Country" ],
    ["10",'&clubs;' ,"The Ocean" ],
    ["J",'&clubs;' ,"City Hub" ],
    ["Q",'&clubs;' ,"Ampitheater" ],
    ["K",'&clubs;' ,"The Chambers" ],
    ["A",'&clubs;' ,"Zoo" ],
];


var cards = [];
const showCards = (deckInfo) => {
  const cardContainer = document.getElementById('main-container');

  for(let i = 0; i < deckInfo.length; i +=1) {
    const faceValue = deckInfo[i][0];
        const suit = deckInfo[i][1];
    const facecontent = deckInfo[i][2];
        const suitColor = i < 26 ? 'suit-red' : 'suit-black';


        let card = `<section class="card-container"> <input type="checkbox" class="cardflip">
                      <div class="rectangle front-card">
                        <div class="left-container">
                          <span class="num-left ${suitColor}">${faceValue}</span>
                          <span class="suit-left ${suitColor}">${suit}</span>
                        </div>
                        <div class="face-image  ${suitColor}">${facecontent}</div>
                        <div class="right-container">
                          <span class="num-right ${suitColor}">${faceValue}</span>
                          <span class="suit-right ${suitColor}">${suit}</span>
                        </div>
                        <div class="rectangle back-card"></div>

                      </div>

                    </section>`;

        cardContainer.innerHTML += card;
        cards += card;

  }

}

function showcards() {
showCards(deckInfo);
}

function clearcards() {
  document.getElementById('main-container').innerHTML = "";
  document.getElementById('hand-container').innerHTML = "";
}

const showHand = (deckInfo) => {
  const cardContainer = document.getElementById('hand-container');
  for(let i = 0; i < 7; i +=1) {
    const temp = Math.floor(Math.random() * 52);
    const faceValue = deckInfo[temp][0];
        const suit = deckInfo[temp][1];
    const facecontent = deckInfo[temp][2];
    const color = deckInfo[temp][3];
    
    var suitColor = color == "red" ? 'suit-red' : 'suit-black';

        let card = `<section class="card-container"> <input type="checkbox" class="cardflip">
                      <div class="rectangle front-card">
                        <div class="left-container">
                          <span class="num-left ${suitColor}">${faceValue}</span>
                          <span class="suit-left ${suitColor}">${suit}</span>
                        </div>
                        <div class="face-image  ${suitColor}">${facecontent}</div>
                        <div class="right-container">
                          <span class="num-right ${suitColor}">${faceValue}</span>
                          <span class="suit-right ${suitColor}">${suit}</span>
                        </div>
                        <div class="rectangle back-card"></div>

                      </div>

                    </section>`;

        cardContainer.innerHTML += card;

  }

}

function dealhand() {
showHand(deckInfo);
}

const showStory = (deckInfo) => {
  const cardContainer = document.getElementById('main-container');
  for(let i = 0; i < 2; i +=1) {
    const temp = Math.floor(Math.random() * 52);
    const faceValue = deckInfo[temp][0];
        const suit = deckInfo[temp][1];
    const facecontent = deckInfo[temp][2];
    const color = deckInfo[temp][3];
    
    var suitColor = color == "red" ? 'suit-red' : 'suit-black';

        let card = `<section class="card-container"> <input type="checkbox" class="cardflip">
                      <div class="rectangle front-card">
                        <div class="left-container">
                          <span class="num-left ${suitColor}">${faceValue}</span>
                          <span class="suit-left ${suitColor}">${suit}</span>
                        </div>
                        <div class="face-image  ${suitColor}">${facecontent}</div>
                        <div class="right-container">
                          <span class="num-right ${suitColor}">${faceValue}</span>
                          <span class="suit-right ${suitColor}">${suit}</span>
                        </div>
                        <div class="rectangle back-card"></div>

                      </div>
                      </input>

                    </section>`;

        cardContainer.innerHTML += card;

  }

}

function dealstory() {
showStory(deckInfo);
}