const main = document.getElementById('main');

const btn = document.querySelector('.btn');
const btnIcon = document.querySelector('.fas');

// Create empty array to store data (push) each time a data item is mapped over
let allData = [];

const data = [
  {
    name: 'Amazon Prime',
    class: 'amazon',
    shows: [
      'Jack Ryan',
      'Hunters',
      'The Boys',
      'Upload',
      'Undone',
      'The Expanse',
      'Invincible',
      "Tom Clancy's Without Remorse",
      "Clarkson's Farm",
    ],
  },
  {
    name: 'Apple TV+',
    class: 'apple',
    shows: ['Ted Lasso', 'For All Mankind', 'See', 'Mythic Quest - thru S1E1'],
  },
  {
    name: 'Austin Public Library',
    class: 'library',
    shows: [],
  },
  {
    name: 'Disney Plus',
    class: 'disneyplus',
    shows: [
      'The Mandalorian',
      'Cruella',
      'Black Widow',
      'The Bad Batch - thru S1E10',
      'Loki - thru S1E4',
      'Raya and the Last Dragon',
    ],
  },
  {
    name: 'HBO Max',
    class: 'hbo',
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
      'The New Mutants',
      'The Crime of the Century',
      'Tenet',
    ],
  },
  {
    name: 'Hulu',
    class: 'hulu',
    shows: [
      'The Orville',
      'Solar Opposites',
      'Justified',
      'MODOK',
      'Helstrom',
      'Freaks & Geeks',
    ],
  },
  {
    name: 'Netflix',
    class: 'netflix',
    shows: [
      'The Flash',
      "DC's Legends of Tommorrow",
      "Marvel's Agents of S.H.I.E.L.D.",
      'Stranger Things',
      'Arrow',
      'Better Call Saul',
      'Queer Eye',
      'Supergirl',
      'Black Lightning',
      'Narcos: Mexico',
      'The Crown',
      'The Witcher',
      'Castlevania',
      'Ozark',
      'Giri/Haji',
      'Dark',
      'The Umbrella Academy',
      'Cobra Kai',
      'Transformers: War for Cybertron',
      'Emily in Paris',
      'The English Game',
      'Disenchantment',
      'I Care A Lot',
      'Pacific Rim: The Black',
      'Master of None',
      'Project Power',
      'Ava',
      "Jupiter's Legacy",
    ],
  },
  {
    name: 'Paramount+',
    class: 'cbs',
    shows: ['Star Trek: Picard', 'Star Trek: Discovery', 'The Stand'],
  },
  {
    name: 'Peacock',
    class: 'peacock',
    shows: ['Brooklyn Nine-Nine'],
  },
  {
    name: 'YouTube TV',
    class: 'youtubetv',
    shows: [
      'Fear the Walking Dead - thru S6E13',
      'Rick & Morty - thru S5E3',
      'The Walking Dead - thru S10',
      'Archer - thru S11',
      "It's Always Sunny in Philadelphia - thru S14",
      'The Walking Dead: World Beyond - thru S1',
      'Resident Alien',
      'Stanley Tucci: Searching for Italy - thru S1',
    ],
  },
  {
    name: 'Other',
    class: 'other',
    shows: ['Hot Date', 'Batwoman - thru S2E9', 'Superman & Lois - thru S1E5'],
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
];

// Function to interate over all data and do all the work
function renderShows(data) {
  // Work with each tv channel one at a time
  data.forEach((channel) => {
    if (channel.shows.length > 0) {
      // This array to store html with h2 for title, and all shows as li within a ul
      const channelData = [];
      // Create the h2 element for the channel name

      const channelName = `<div class="channelContainer"><h2 class=${channel.class}>${channel.name}</h2>`;

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
