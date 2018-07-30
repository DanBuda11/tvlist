const main = document.getElementById('main');

// Better version to include where I'm at in the series, when new seasons are expected to come out, and
// distinctions between tv shows and movies. Still better version allows me to use a tiny mongoDB backend
// and easily update the list on the fly, including the last episode of something I watched and an easy
// "remove" button (and add).

// Hard-coded data just to get it up and running
const data = [
  {
    name: 'HBO',
    shows: ['Barry', 'Silicon Valley', 'Veep', 'The Wire', 'Blade Runner 2049'],
  },
  {
    name: 'Hulu',
    shows: ["The Handmaid's Tale"],
  },
  {
    name: 'Netflix',
    shows: [
      "Marvel's Luke Cage",
      'Marvels Iron Fist',
      'The Flash',
      'DCs Legends of Tommorrow',
      "Marvel's The Punisher",
      'Marvels Agents of Shield',
      'Walk Hard: The Dewey Cox Story',
      'Arrested Development',
      'Stranger Things',
      'House of Cards',
      'Gotham',
      "Marvel's Jessica Jones",
      'Arrow',
      "Marvel's The Defenders",
      "Marvel's Daredevil",
      'Better Call Saul',
      'Queer Eye',
    ],
  },
  {
    name: 'Vue',
    shows: [
      'Archer',
      'The Last Man on Earth',
      'Modern Family',
      'The Good Place',
      'Mr Robot',
      'The Walking Dead',
      'Rick & Morty',
      'Fear the Walking Dead',
      "It's Always Sunny in Philadelphia",
    ],
  },
  {
    name: 'Amazon',
    shows: ['The Man in the High Castle', 'Jack Ryan'],
  },
  {
    name: 'Library',
    shows: ['Pacific Rim: Uprising', 'Super Troopers 2'],
  },
  {
    name: 'Other',
    shows: [
      "Ocean's 8",
      'The Incredibles 2',
      'Jurassic World: Fallen Kingrom',
      'Ant-Man and the Wasp',
      'Mission Impossible: Fallout',
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
    // Create the h2 element for the channel name
    const channelName = `<div class="channelContainer"><h2>${
      channel.name
    }</h2>`;
    // Push the 1st half of the ul tag with class name into the array
    channelData.push(`${channelName}<ul class='${channel.name}'>`);
    // Interate over each show in the shows array and push into the array with an li tag
    channel.shows.forEach(show => {
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
