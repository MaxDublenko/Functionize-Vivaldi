// Vivald JS Example

// When a Season Button is Clicked
document.getElementById('summerBtn').addEventListener('click', setSummer);
document.getElementById('autumnBtn').addEventListener('click', setAutumn);
document.getElementById('winterBtn').addEventListener('click', setWinter);
document.getElementById('springBtn').addEventListener('click', setSpring);

// Function to change season name/ change concerto text
function setSeasonText(season) {
  document.getElementById('season-text').innerHTML = season;
}

// Function to change main image
function setMainImage(season_image) {
  document.getElementById('main-img').src = season_image;
}

// Function to change page background color
function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

// Function to change audio source
function changeAudioSource(song) {
  document.getElementById('song').src = song;
}

//Function to remove active class from all buttons
function removeClass() {
  document.getElementById('springBtn').classList.remove('activeBtn');
  document.getElementById('summerBtn').classList.remove('activeBtn');
  document.getElementById('autumnBtn').classList.remove('activeBtn');
  document.getElementById('winterBtn').classList.remove('activeBtn');
}

// Function to add active class to clicked button
function addClass(id, new_class) {
  document.getElementById('id').classList.add('new_class');
}

// Event Functions
function setSummer() {
    // - change concerto text
    setSeasonText('summer');

    // - change main image
    setMainImage('images/summer.jpg');

    // - change page background color
    changeBackgroundColor('#1BA848');

    // - change audio source
    changeAudioSource('songs/vivaldi-summer.mp3');

    // - remove active class from all buttons
    removeClass();

    // - add active class to clicked button
    addClass('summerBtn', 'activeBtn')
}

function setAutumn() {
    // - change concerto text
    setSeasonText('autumn');

    // - change main image
    setMainImage('images/autumn.jpg');

    // - change page background color
    changeBackgroundColor('#FE6732');

    // - change audio source
    changeAudioSource('songs/vivaldi-autumn.mp3');

    // - remove active class from all buttons
    removeClass();

    // - add active class to clicked button
    addClass('autumnBtn', 'activeBtn')
}

function setWinter() {
    // - change concerto text
    setSeasonText('winter');

    // - change main image
    setMainImage('images/winter.jpg');

    // - change page background color
    changeBackgroundColor('#1C64B9');

    // - change audio source
    changeAudioSource('songs/vivaldi-winter.mp3');

    // - remove active class from all buttons
    removeClass();

    // - add active class to clicked button
    addClass('winterBtn', 'activeBtn')
}

function setSpring() {
    // - change concerto text
    setSeasonText('spring');

    // - change main image
    setMainImage('images/spring.jpg');

    // - change page background color
    changeBackgroundColor('#0E94D1');

    // - change audio source
    changeAudioSource('songs/vivaldi-spring.mp3');

    // - remove active class from all buttons
    removeClass();

    // - add active class to clicked button
    addClass('springBtn', 'activeBtn')
}
