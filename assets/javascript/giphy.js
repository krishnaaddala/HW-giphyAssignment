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
$("#giphy-btndisplay").empty();
var superhero = $(this).attr("data-giphy");
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=tuHOptJN3WWLtwMil1BWJF8fU18JA1f5&q="+superhero+"&limit=10&offset=0&rating=G&lang=en";
console.log(superhero);
//Making an AJAX call
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var giphyDiv = $("<div class ='superhero-giphy'>");
    $("#giphy-btndisplay").append(giphyDiv);
    for (i=0; i< response.data.length; i++){
        console.log(response.data)
        var gifRating = $("<p>").text(response.data[i].rating);
        var gifTitle = $("<p>").text(response.data[i].title);
        var gifImage = $("<img>")
                        .attr("class",'super_hero_images')
                        .attr("src",response.data[i].images.original_still.url)
                        .attr('data-alt',response.data[i].images.original.url)
        $("#giphy-btndisplay").prepend( gifRating, gifTitle, gifImage);
    }
  }
)};

function addDynamicBtn(name){
    var dynamicBtn = $("<button>") 
        dynamicBtn.addClass("giphy-btn");
        dynamicBtn.attr("data-giphy", name);
        dynamicBtn.text(name);
        $("#dynamic-btnview").append(dynamicBtn);
}

//dynamically adding buttons for the declared array
  function addButtons(){
    console.log("print this")

    for(i=0;i< superheroList.length; i++){
        addDynamicBtn(superheroList[i]);
    }
}  

$("#add-giphy").on("click", function(event){
    event.preventDefault();
var superhero = $("#giphy-input").val().trim();
superheroList.push(superhero);
addDynamicBtn(superhero);

});

$(document).on("click", ".giphy-btn", giphyDisplay);

$(document).on("click",".super_hero_images", function() {
    img = this;
    var imgSrc = img.getAttribute("src");
    var imgAlt = img.getAttribute("data-alt");

    img.setAttribute("src", imgAlt);
    img.setAttribute("data-alt", imgSrc);


});