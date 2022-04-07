function Album(title, artist, year) {
  this.title = title;

  this.artist = artist;

  this.year = year;

  this.play = function () {
    console.log(
      `Title is ${this.title}.Artist is ${this.artist} and year is ${this.year}`
    );
  };
}

var darkside = new Album("Dark Side of the Cheese", "Pink Mouse", 1971);

darkside.play();
