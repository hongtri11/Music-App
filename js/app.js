// Song Class : Represents a song 
class Song {
  constructor(title, artist, genres) {
    this.title = title;
    this.artist = artist;
    this.genres = genres;
  }
}

// UI Class : Handle the UI tasks on user-screen 
class UI {
  static displaySong() {
    const storedSong = [
      {
        title: "Song One",
        artist: "TT",
        genres: "Kpop"
      }, 
      {
        title: "Song Two",
        artist: "AA",
        genres: "Vpop"
      }
    ];

    const songs = storedSong;

    // Review forEach loop in JavaScript 
    songs.forEach((song) => UI.addSongToList(song));

  }
  // Create the row to insert in the table body 
  static addSongToList(song) {
    // Grab elements in the DOM
    const list = document.querySelector("#song-list");
    // Create a table row element
    const row = document.createElement("tr");
    // Add the column in row
    row.innerHTML = `
      <td>${song.title}</td>
      <td>${song.artist}</td>
      <td>${song.genres}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;
    
    // Append the rows to the list
    list.appendChild(row);
  }

  static deleteSong(targetElement) {
    if (targetElement.classList.contains("delete")) {
      // Target the row (parent's element)
      targetElement.parentElement.parentElement.remove();
    }
  }


  static clearFields() {
    document.querySelector("#song").value = "";
    document.querySelector("#artist").value = "";
    document.querySelector("#genres").value = "";
  }
}

// Store Class : Handles local storage (on browser)

// Event: Display song
document.addEventListener("DOMContentLoaded", UI.displaySong);

/* Event: Add a song
1) Grab the form in DOM
2) Add event listener : submit
3) Prevent default behavior of submit to hold values
4) Grab the values in the form
5) Instanitate a book object using the grabbed values 
*/
document.querySelector("#music-form").addEventListener("submit", (e) => {
  e.preventDefault();
  
  const title = document.querySelector("#song").value;
  const artist = document.querySelector("#artist").value;
  const genres = document.querySelector("#genres").value;

  const song = new Song(title, artist, genres);

  console.log(song);

  // Add Song to List
  UI.addSongToList(song);

  // Clear the fields after submitting
  UI.clearFields();
});

// Event: Remove a song 
// To remove a song, we have to target the whole table body 
document.querySelector("#song-list").addEventListener("click", (e) => {
  // Get each of the target within the music form 
  console.log(e.target);
  UI.deleteSong(e.target);
});