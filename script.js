//Content of our events array.
const events = [ 
  {
    "name": "Partial Solar Eclipse",
    "image": "https://static.toiimg.com/photo/msid-67384541/67384541.jpg?330192",
    "description": "This eclipse will be visible from most of Europe, northern Africa, the Middle East, and western parts of Asia.",
    "date": "25/10/22",
    "price": "Eclipse Glasses",
    "tags": ['moon', 'sun', 'eclipse']
  },
  {
    "name": "Total Lunar Eclipse",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/1f/Full_Eclipse_of_the_Moon_as_seen_in_from_Irvine%2C_CA%2C_USA_%2852075715442%29_%28cropped%29.jpg",
    "description": "The entire Moon will plunge into the Earth's umbra, the central, dark portion of its shadow.",
    "date": "07/11/22",
    "price": "Your bedtime",
    "tags": ['moon', 'eclipse']
  },
  {
    "name": "Leonid Meteor Shower",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Leonid_Meteor.jpg",
    "description": "The Leonids' shooting stars are visible between November 6 and 30, and peak on the night of November 17.",
    "date": "17/11/22",
    "price": "Your patience",
    "tags": ['meteor']
  },
  {
    "name": "Mars at Opposition",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1200px-OSIRIS_Mars_true_color.jpg",
    "description": "At opposition, Mars lies on the opposite side of Earth to the Sun, and shines red in the sky all night.",
    "date": "08/12/22",
    "price": "Good phone camera",
    "tags": ['mars']
  },
  {
    "name": "Geminid Meteors",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Geminids.jpg",
    "description": "One of the best meteor showers of the year, which peak on the night of December 13.",
    "date": "13/12/22",
    "price": "Your patience",
    "tags": ['meteor']
  },
  {
    "name": "Mercury at Greatest Elongation East",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mercury_in_true_color.jpg/800px-Mercury_in_true_color.jpg",
    "description": "The planet appears at its farthest distance from the Sun in the evening sky.",
    "date": "21/12/22",
    "price": "Good binoculars",
    "tags": ['mercury']
  },
  {
    "name": "Ursid Meteors",
    "image": "https://cdn.mos.cms.futurecdn.net/jbMDNKgcT55osBzpkW5ZjT-320-80.jpg",
    "description": "Catch the shooting stars of the last major meteor shower of the year, the Ursids.",
    "date": "22/12/22",
    "price": "Your patience",
    "tags": ['meteor']
  },
  {
    "name": "Super New Moon",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk-cJo958BPXo4vHrQCzx2FEGB07zFnz9fwA&usqp=CAU",
    "description": "This New Moon takes place very close to its perigee—the point on its orbit closest to the Earth.",
    "date": "23/12/22",
    "price": "Um... your eyes?",
    "tags": ['moon']
  },
  {
    "name": "Quadrantids Meteor Shower",
    "image": "https://skyandtelescope.org/wp-content/uploads/Quadrantid_Hankey_2011_S.jpg",
    "description": "The Quadrantids is an above average shower, with up to 40 meteors per hour at its peak.",
    "date": "03/01/22",
    "price": "Your patience",
    "tags": ['meteor']
  },
  {
    "name": "Saturn at Opposition",
    "image": "https://space-facts.com/wp-content/uploads/saturn-v2.jpg",
    "description": "The ringed planet will be at its closest approach to Earth and its face will be fully illuminated by the Sun.",
    "date": "14/08/22",
    "price": "A decent telescope",
    "tags": ['saturn']
  },
  {
    "name": "Neptune at Opposition",
    "image": "https://solarsystem.nasa.gov/system/feature_items/images/82_carousel_neptune_1.jpg",
    "description": "The blue giant planet will be at its closest approach to Earth and its face will be fully illuminated by the Sun.",
    "date": "16/09/22",
    "price": "An amazing telescope",
    "tags": ['neptune']
  },
  {
    "name": "Jupiter at Opposition.",
    "image": "https://solarsystem.nasa.gov/internal_resources/4909",
    "description": "The giant planet will be at its closest approach to Earth and its face will be fully illuminated by the Sun.",
    "date": "26/09/22",
    "price": "Good binoculars",
    "tags": ['jupiter']
  }
];

const cards = document.querySelector('.cards');
const allTags = [];

//Create a singular card
function createCard({name, image, description, date, price, tags}) {
  const card = document.createElement('div');

  //Create tags on cards and stores all different tags into 'allTags'
  function getTags() {
    let text = "";
    tags.forEach((tag) => {

      if (!allTags.includes(tag)) {
        allTags.push(tag);
      }
      text+= `<li>#${tag} </li>`
    });
    return text;
  }

  //Creates the main part of the card
  card.innerHTML = `
  <h3>${name}</h3>
  <div class="top">
    <img src="${image}" alt="Image of ${name}.">
    <p class="description">${description}</p>
  </div>
  <p class="date">Date: ${date}<p>
  <p class="price">Price: ${price}<p>
  <ul>
    ${getTags()}
  </ul>
  `;

  //Add 'card' class name for styling in css
  card.classList.add('card');
  cards.appendChild(card);
}

//'selected' is an array which will hold all of the tags selected from 'filter'
let selected = [];
//This function creates our filter buttons, changes the opacity of the filter buttons with addEventListener, and alters the contents of 'selected'
function addTagFilter() {
  const filter = document.querySelector('.filter');
  allTags.forEach((tag) => {
    const btn = document.createElement('button');
    btn.addEventListener('click', () => {
      btn.style.opacity = (btn.style.opacity === '1') ? '0.5' : '1';
      if (btn.style.opacity === '0.5') { //If this button was just deselected, remove tag from selected
        selected.splice(selected.indexOf(btn.textContent.slice(1)), 1);
      } else { //If this button was just selected, add tag to selected
        selected.push(btn.textContent.slice(1));
      }
      search(selected, ["tags"]); //Run this function to only display cards with the selected tags
    });

    btn.style.opacity = '1';
    btn.classList.add('filter-btn');
    btn.textContent = '#' + tag;
    filter.appendChild(btn);
  });
}

//This function acts as the filtering system for both our tag buttons and search bar, patterns = all our wanted matches, searches = the properties we are filtering in our array of objects (events)
function search(patterns, searches) {
  //'present' keeps track of which cards had matches (all are false by default)
  const present = new Array(events.length).fill(false);
  patterns.forEach(pattern => {
    for (let s of searches) {
      for (let j = 0; j < events.length; j++){
        //Use 'includes' if we are searching an array (tags), use 'test' if we are searching a string (name & description)
        const condition = (typeof(events[j][s]) === 'object') ? events[j][s].includes(pattern) : (new RegExp(pattern)).test(events[j][s].toLowerCase());
        if (condition) {
          present[j] = true;
        }
      }
    }
  });
  //Show all cards where a match was present, hide the rest.
  console.log(`present = ${present}`);
  const cards = document.querySelector('.cards').children;
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = (present[i] === true) ? 'flex' : 'none';
  }
}

//Here, this displays and hides our filter buttons as a smooth transition
const show = document.querySelector('.show-btn');
show.addEventListener('click', () => {
  show.style.opacity = (show.style.opacity === '1') ? '0.5' : '1';
  const filt = document.querySelector('.filter');
  if (show.style.opacity === '0.5') {
    filt.style.zIndex = '-1';
    filt.style.transform = 'translate(0, -100%)';
    selected = [];
    const currCards = document.querySelectorAll('.card');
    currCards.forEach(card => card.style.display = 'flex');
  } else {
    const filter = document.querySelectorAll('.filter > button');
    filter.forEach(child => child.style.opacity = '0.5');
    filt.style.transform = 'translate(0, 0)';
    const currCards = document.querySelectorAll('.card');
    currCards.forEach(card => card.style.display = 'none');
    setTimeout(() => {filt.style.zIndex = '1'}, 500)
  }
});

//Get data from the search bar if the search button has been pressed.
const searchBar = document.querySelector('form');
searchBar.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(searchBar);
  const arr = data.get('search-bar').toLowerCase().trim().split(/\s+/);
  search(arr, ["name", "description", "date", "price"])
});

//Create all of our crads for all of our objects in 'events'
events.forEach(e => createCard(e));
//Create our filter buttons using 'allTags'
addTagFilter();