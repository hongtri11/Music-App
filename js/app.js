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
      <td><a href="#" class="btn btn-danger btn-sm">X</a></td>
    `;
    
    // Append the rows to the list
    list.appendChild(row);
  }
}

// Store Class : Handles local storage (on browser)

// Event: Display song
document.addEventListener("DOMContentLoaded", UI.displaySong);



// Event: Add a song

// Event: Remove a song 