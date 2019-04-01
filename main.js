const main = document.getElementById('main');

// Better version to include where I'm at in the series, when new seasons are expected to come out, and
// distinctions between tv shows and movies. Still better version allows me to use a tiny mongoDB backend
// and easily update the list on the fly, including the last episode of something I watched and an easy
// "remove" button (and add).

// Hard-coded data just to get it up and running
const data = [
  {
    name: 'Amazon Prime Video',
    class: 'amazon',
    shows: ['The Man in the High Castle', 'Jack Ryan', 'Battlestar Galactica'],
  },
  {
    name: 'Austin Public Library',
    class: 'library',
    shows: ['A Star is Born', 'Bohemian Rhapsody', 'That Thing You Do!'],
  },
  {
    name: 'HBO Go',
    class: 'hbo',
    image: 'hbogo.png',
    link: 'https://play.hbogo.com/',
    shows: [
      'Barry',
      'Silicon Valley',
      'Veep',
      'The Wire',
      'Blade Runner 2049',
      'Westworld',
      'Tomb Raider',
      'Game of Thrones',
    ],
  },
  {
    name: 'Hulu',
    class: 'hulu',
    shows: ["The Handmaid's Tale", 'The Last Man on Earth'],
  },
  {
    name: 'Netflix',
    class: 'netflix',
    shows: [
      'The Flash',
      "DC's Legends of Tommorrow",
      "Marvel's The Punisher",
      "Marvel's Agents of S.H.I.E.L.D.",
      'Arrested Development',
      'Stranger Things',
      'Gotham',
      "Marvel's Jessica Jones",
      'Arrow',
      "Marvel's Daredevil",
      'Better Call Saul',
      'Queer Eye',
      'Altered Carbon',
      'Maniac',
      'Supergirl',
      'Black Lightning',
      'The Good Place',
      'Narcos',
      'Narcos: Mexico',
      'The Haunting of Hill House',
      'Star Wars: The Clone Wars: Lost Missions',
    ],
  },
  {
    name: 'Playstation Vue',
    class: 'vue',
    shows: [
      'Archer',
      'Modern Family',
      'Mr. Robot',
      'The Walking Dead',
      'Rick & Morty',
      'Fear the Walking Dead',
      "It's Always Sunny in Philadelphia",
      "Schitt's Creek",
    ],
  },
  {
    name: 'Other',
    class: 'other',
    shows: [
      'First Man',
      'Spider-Man: Into the Spider-Verse',
      'Happytime Murders',
      'Fantastic Beasts 2',
      'Creed 2',
      'Aquaman',
      'Bumblebee',
      'Vice',
    ],
  },
];

// Function to interate over all data and do all the work
function render(data) {
  // Create empty array to store data (push) each time a channel is mapped over
  let allData = [];
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
}

// Run the function
render(data);
