const main = document.getElementById('main');

const btn = document.querySelector('.btn');
const btnIcon = document.querySelector('.fas');

// Create empty array to store data (push) each time a data item is mapped over
let allData = [];

const data = [
  {
    name: 'Amazon Prime',
    color: 'F90',
    shows: [
      'Jack Ryan',
      'Hunters',
      'The Boys',
      'Upload',
      'Undone',
      'The Expanse',
      'Invincible',
      "Clarkson's Farm",
      'Reacher',
      'Wheel of Time',
      'The Lost City of Z',
    ],
  },
  {
    name: 'Apple TV+',
    color: '25312e',
    shows: [
      'Ted Lasso',
      'For All Mankind',
      'Mythic Quest',
      'Foundation',
      'Invasion',
      'The Morning Show',
    ],
  },
  {
    name: 'CW',
    color: '2ca8a8',
    shows: [],
  },
  {
    name: 'Disney Plus',
    color: '16265f',
    shows: [
      'The Mandalorian',
      'The Bad Batch',
      'Loki',
      'Marvel: What If',
      'Star Wars Visions',
      'Hawkeye',
      'Encanto',
    ],
  },
  {
    name: 'HBO Max',
    color: 'c400fd',
    image: 'hbogo.png',
    shows: [
      'Barry',
      'Westworld',
      'His Dark Materials',
      'Succession',
      'Perry Mason',
      'Lovecraft Country',
      'Raised by Wolves',
      'Doom Patrol',
      'Titans',
      'Station Eleven',
      'And Just Like That...',
    ],
  },
  {
    name: 'Hulu',
    color: '3dbb3d',
    shows: [
      'The Orville',
      'Solar Opposites',
      'MODOK',
      'Fear the Walking Dead - thru S7E8',
      'Rick & Morty',
      'Archer',
      "It's Always Sunny in Philadelphia",
      'Resident Alien',
      'Stanley Tucci: Searching for Italy',
      'Batwoman - thru S2',
      'Superman & Lois - thru S1',
      'Superstore',
      'Helstrom',
      'The  Great',
    ],
  },
  {
    name: 'Netflix',
    color: 'b9090b',
    shows: [
      'The Flash',
      "DC's Legends of Tommorrow",
      "Marvel's Agents of S.H.I.E.L.D.",
      'Stranger Things',
      'Better Call Saul',
      'Queer Eye',
      'Supergirl',
      'Black Lightning',
      'Narcos: Mexico',
      'The Crown',
      'The Witcher',
      'The Umbrella Academy',
      'Cobra Kai',
      'Emily in Paris',
      'Disenchantment',
      'Pacific Rim: The Black',
      'Master of None',
      'Masters of the Universe: Revelation',
      'Cowboy Bebop',
      'Arcane',
      'Tiger King: The Doc Antle Story',
      'Cowboy Bepop (Anime)',
      'Explained',
      'The Mind Explained',
    ],
  },
  {
    name: 'Peacock',
    color: 'fda002',
    shows: [],
  },
  {
    name: 'Pop',
    color: 'f0c61f',
    shows: ['Hot Date'],
  },
  {
    name: 'YouTube TV',
    color: 'f00',
    shows: [],
  },
  {
    name: 'Other',
    shows: ['The Walking Dead'],
  },
];

const books = [
  {
    series: "You Don't Know JS",
    titles: ['Types & Grammar', 'Async & Performance', 'ES6 & Beyond'],
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
  {
    series: '',
    titles: ['Ready Player Two'],
  },
  {
    series: '',
    titles: ['Mine!'],
  },
  {
    series: '',
    titles: ['Sludge'],
  },
];

// Function to interate over all data and do all the work
function renderShows(data) {
  // Work with each tv channel one at a time
  data.forEach((channel) => {
    if (channel.shows.length > 0) {
      // This array to store html with h2 for title, and all shows as li within a ul
      const channelData = [];
      // Create the h2 element for the channel name

      const channelName = `<div class="channelContainer"><h2 style="color:#${channel.color};">${channel.name}</h2>`;

      // Push the 1st half of the ul tag with class name into the array
      channelData.push(`${channelName}<ul class='${channel.class}list'>`);
      // Sort each show in the channel's shows alphabetically without "a", "an", "the".
      function strip(show) {
        return show.replace(/^(a |the |an )/i, '').trim();
      }
      const sortedShows = channel.shows.sort((a, b) =>
        strip(a) > strip(b) ? 1 : -1,
      );

      // Iterate over each show in the shows array and push into the array with an li tag
      sortedShows.forEach((show) => {
        channelData.push(`<li>${show}</li>`);
      });
      // Wrap the end of the array with the closing ul tag
      channelData.push('</ul></div>');
      // Push everything into the master array with all html data
      return allData.push(channelData.join(''));
    }
  });
  // Render all mapped data to the screen
  main.innerHTML = allData.join('');
  allData = [];
}

function renderBooks(books) {
  books.map((book) => {
    if (book.series !== '') {
      allData.push(`<ul class="bookSeries"><li><h3>${book.series}</h3></li>`);
      book.titles.map((title) => {
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

// Run the function for initial render
renderShows(data);
