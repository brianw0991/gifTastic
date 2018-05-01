
var animalArray= ["Bear", "Squirrel", "Brule's Rule's", "dog", "cat", "fail", "Ron Burgundy", "monkey", "random"];
var animalSearch;
var giphyArray = [];
renderButtons();

newButton();


$("body").on("click", ".animalButton", function(){
    $("#animals").empty();

    animalSearch = $(this).attr("data-name");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animalSearch + "&limit=10" + "&api_key=dc6zaTOxFJmzC";

$.ajax({
    url:queryURL,
    method: "GET"
}) .then(function(response) {
    // console.log(animalSearch);
    // console.log(response.data);

    for (var i = 0; i <response.data.length; i++) {
        // console.log(response.data[i]);

    $("#animals").prepend("<div class='outerContainer'><p class='title'>Rating: " + response.data[i].rating.toUpperCase() + "</p><div class='imageContainer'><img class='imagesReturned img-responsive center-block'" + "data-still='" + response.data[i].images.downsized_still.url + "'" + "data-animate='" + response.data[i].images.downsized.url + "'" + "data-state='still'" + "src='" + response.data[i].images.downsized_still.url + "'></div></div>");
        giphyArray.push(response.data[i].images.downsized.url);
    };
});


});

function newButton() {

    $("#addAnimal").on("click", function(event){

        event.preventDefault();

        var newAnimal = $("#animalInput").val().trim();

        animalArray.push(newAnimal);

        console.log(animalArray);

        renderButtons();
    });
    };


function renderButtons() {

    $("#animalGifs").empty();

    for (var i = 0; i < animalArray.length; i++) {

        var a = $("<button>");

        a.addClass("animalButton");

        a.attr("data-name", animalArray[i]);

        a.text(animalArray[i])

        $("#animalGifs").append(a);
    }

}; 

$("body").on("click", ".imagesReturned", function(event){

    var state = $(this).attr("data-state");
    var thisImgDataStill = $(this).attr("data-still");
    var thisImgDataAnimate = $(this).attr("data-animate");

    if(state === "still") {
        $(this).attr("src", thisImgDataAnimate);
        $(this).attr("data-state", "animate");
    }
    if(state !== "still"){
        $(this).attr("src", thisImgDataStill);
        $(this).attr("data-state", "still");

    }
});




    


