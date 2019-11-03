//Initial Pseudo code for the assignment:
//create a list of superhero array
//assign the superheros array to a respective Btn on the HTML page

// Upon Click of each superhero button, display the related info by making an API call using AJAX method
// Display list of information of each superhero with Rating, title and any other related tags to display on HTML
//In the search bar, when the user enters a superhero name of their choice
// we should dynamically create a button on the searched name
// when the user clicks on the newly added button, it should once again display all related info...

//Superhero array
var superheroList = ["Superman", "Iron Man", "Batman", "Captain America", "Flash", "Thor", "Green Lantern", "Black Panther", "One Punch Man"];

//function to make an ajax call to get the queried list
function giphyDisplay(){

var superhero = $(this).attr("data-name");
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=tuHOptJN3WWLtwMil1BWJF8fU18JA1f5&q="+superhero+"&limit=10&offset=0&rating=G&lang=en";

//Making an AJAX call
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var giphyDiv = $("<div class ='superhero-giphy'>");
    console.log(response);
    var gifRating = $("<p>").text(response.rating);
    var gifTitle = $("<p>").text(response.title);
    var gifImage = $("<img>").attr("src",response.images.);

    $("#dynamic-btnview").empty();
    $("#dynamic-btnview").append(gifRating, gifTitle, gifImage);
  }
  )};
