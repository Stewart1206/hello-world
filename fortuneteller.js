/**********************************************************************************************************************
                                                  THE FORTUNE TELLER
***********************************************************************************************************************/

//Total Children Generator variable
var totalChildren = Math.floor(Math.random() * 11 );

//Name Arrays
const partnerFirst = ['Rocky ', 'Sylvester ', 'Arnold ', 'Connor ', 'Harry ','Donald ', 'Jesus ','Ronald '];
const partnerLast = ['Stallone', 'Balboa', 'Schwarzenegger', 'Potter', 'McGreggor', 'Christ', 'Trump', 'McDonald'];

//Location Array
const geoLocation = ['Narnia', 'Hogwarts', 'The Tower of London', 'The Tardis', 'Wonderland', 'The Land of Oz',
                     'your dreams', 'The Moon',]
//Job Array
const career = ['a Dolphin Shaver', 'a Penguin picker-upper', 'a Stuntman', 'Batman', 'a Yoga Guru', 'a Coffee Taster',
                'an Olympic Walker', 'a Gabber DJ', 'an Air Guitar Champion', 'a Solitaire Tournament Organiser'];

//Here we are creating a furtune telling function that will select at random strings from the Arrays we created.
function tellFortune () {
  /*Declaring our variables using the Arrays we created above and using arithmetic functions to pick random
  strings from the Arrays.*/
  var work = career[Math.floor(Math.random() * career.length)];
  var locator = geoLocation[Math.floor(Math.random() * geoLocation.length)];
  var fullName = partnerFirst[Math.floor(Math.random() * partnerFirst.length)] +
                 partnerLast[Math.floor(Math.random() * partnerLast.length)];
  //Telling the console to log a message combining strings with variables.
  document.write('<br><br>You will work as ' + work + ' in ' + locator + ' and will be married to ' +
             fullName + ' with a total of ' + totalChildren + ' children! Hurray!');
}
//We now create a simple prompt to make the script a little more interactive.
var name = prompt('Please enter your name: ' + ' ');
//Finally we are telling the console to log a message and run the function.
document.write('Hello ' + name + ', looking through my crystal ball I see in your future: ');
tellFortune();

/**********************************************************************************************************************
                                          Restart the code for more combinations!
***********************************************************************************************************************/
