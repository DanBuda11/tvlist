const main = document.getElementById('main');

const btn = document.querySelector('.btn');
const btnIcon = document.querySelector('.fas');

// Create empty array to store data (push) each time a data item is mapped over
let allData = [];

btn.addEventListener('click', () => {
  if (btnIcon.classList.contains('fa-book')) {
    btnIcon.classList.add('fa-tv');
    btnIcon.classList.remove('fa-book');
    renderBooks(books);
  } else {
    btnIcon.classList.remove('fa-tv');
    btnIcon.classList.add('fa-book');
    renderShows(data);
  }
});

const data = [
  {
    name: 'Amazon Prime Video',
    class: 'amazon',
    shows: [
      'The Man in the High Castle (start back up mid-season 2. season 4 will be the last season)',
      'Jack Ryan',
      'The Hunt (not out yet)',
      'Mr Robot (season 3. season 4 not out yet)',
      'The Boys',
      'Fleabag (seasons 1 & 2)',
    ],
  },
  {
    name: 'Austin Public Library',
    class: 'library',
    shows: ['Rocketman',],
  },
  {
    name: 'HBO Go',
    class: 'hbo',
    image: 'hbogo.png',
    link: 'https://play.hbogo.com/',
    shows: [
      'Barry',
      'Silicon Valley',
      'The Wire (Season 3+)',
      'Westworld',
    ],
  },
  {
    name: 'Hulu',
    class: 'hulu',
    shows: ["The Handmaid's Tale", 'The Strain (start at end of season 1)', 'The Venture Bros. (season 6? 7?)', "Marvel's Runaways",],
  },
  {
    name: 'Netflix',
    class: 'netflix',
    shows: [
      'The Flash',
      "DC's Legends of Tommorrow",
      "Marvel's The Punisher",
      "Marvel's Agents of S.H.I.E.L.D.",
      'Stranger Things',
      'Gotham',
      'Arrow',
      'Better Call Saul',
      'Queer Eye',
      'Altered Carbon',
      'Supergirl',
      'Black Lightning',
      'GLOW',
      'Narcos',
      'Narcos: Mexico',
      'Star Trek',
      'Star Trek: The Animated Series',
      'Star Trek: The Next Generation',
      'Star Trek: Deep Space Nine',
      'Star Trek: Voyager',
      'Star Trek: Enterprise',
    ],
  },
  {
    name: 'Playstation Vue',
    class: 'vue',
    shows: [
      'Modern Family',
      'Rick & Morty (season 4 starts Nov. 2019)',
      'Fear the Walking Dead',
      "It's Always Sunny in Philadelphia",
      "Schitt's Creek",
      'Archer (season 11)',
      'The Good Place',
      'The Walking Dead',
    ],
  },
  {
    name: 'Other',
    class: 'other',
    shows: [
      'John Wick 3',
      'Fast & Furious Presents: Hobbs & Shaw',
      'Archer (season 10)',
      'Star Trek: Discovery',
      'Batwoman',
    ],
  },
];

const books = [
  {
    series: "You Don't Know JS",
    titles: ['Types & Grammar', 'Async & Performance', 'ES6 & Beyond'],
  },
  {
    series: 'The Lost Chronicles Trilogy',
    titles: ['Dragons of the Highlord Skies', 'Dragons of the Hourglass Mage'],
  },
  {
    series: 'The War of Souls Trilogy',
    titles: [
      'Dragons of a Fallen Sun',
      'Dragons of a Lost Star',
      'Dragons of a Vanished Moon',
    ],
  },
  {
    series: 'Dark Disciple Trilogy',
    titles: ['Amber and Ashes', 'Amber and Iron', 'Amber and Blood'],
  },
  {
    series: 'The Raistlin Chronicles',
    titles: ['The Soulforge', 'Brothers in Arms'],
  },
  {
    series: 'Dragonlance Tales I',
    titles: [
      'The Magic of Krynn',
      'Kender, Gully Dwarves and Gnomes',
      'Love and War',
    ],
  },
  {
    series: 'Dragonlance Tales II',
    titles: ['The Reign of Istar', 'The Cataclysm', 'The War of the Lance'],
  },
  {
    series: 'Dragon Anthologies',
    titles: [
      'The Dragons of Krynn',
      'The Dragons at War',
      'The Dragons of Chaos',
    ],
  },
  {
    series: 'Requiem: Dragonfire Rain',
    titles: ['Blood of Dragons', 'Rage of Dragons', 'Flight of Dragons'],
  },
  {
    series: '',
    titles: ['Riddley Walker (Russell Hoban)'],
  },
  {
    series: '',
    titles: ['Practical Programming for Strength Training'],
  },
  {
    series: '',
    titles: ["The Heart of the Buddha's Teaching"],
  },
  {
    series: '',
    titles: ['Starting Strength'],
  },
];

// Function to interate over all data and do all the work
function renderShows(data) {
  // Work with each tv channel one at a time
  data.forEach(channel => {
    // This array to store html with h2 for title, and all shows as li within a ul
    let channelData = [];
    // Create the h2 element for the channel name and include a link if it exists

    const channelName = `<div class="channelContainer"><h2 class=${
      channel.class
    }>${channel.name}</h2>`;

    // Push the 1st half of the ul tag with class name into the array
    channelData.push(`${channelName}<ul class='${channel.class}list'>`);
    // Sort each show in the channel's shows alphabetically without "a", "an", "the".
    function strip(show) {
      return show.replace(/^(a |the |an )/i, '').trim();
    }
    const sortedShows = channel.shows.sort((a, b) =>
      strip(a) > strip(b) ? 1 : -1
    );

    // Iterate over each show in the shows array and push into the array with an li tag
    sortedShows.forEach(show => {
      channelData.push(`<li>${show}</li>`);
    });
    // Wrap the end of the array with the closing ul tag
    channelData.push('</ul></div>');
    // Push everything into the master array with all html data
    return allData.push(channelData.join(''));
  });
  // Render all mapped data to the screen
  main.innerHTML = allData.join('');
  allData = [];
}

function renderBooks(books) {
  books.map(book => {
    if (book.series !== '') {
      allData.push(`<ul class="bookSeries"><li><h3>${book.series}</h3></li>`);
      book.titles.map(title => {
        allData.push(`<li>${title}</li>`);
      });
      allData.push('</ul>');
    } else {
      allData.push(`<ul class="bookSeries"><li>${book.titles[0]}</li></ul>`);
    }
  });
  main.innerHTML = allData.join('');
  allData = [];
}

// Run the function for initial render
renderShows(data);
