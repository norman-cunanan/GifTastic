$(document).ready(function() {

	//initial animal buttons shown
	var initialAnimals = ["Dog", "Cat", "Fish", "Snake"];


	//adding new Buttons
	function addButtons () {

		$("#animalButtons").empty();

		for (var i = 0; i < initialAnimals.length; i++) {

			var a = $("<button>");

			a.addClass("animal");

			a.attr("data-name", initialAnimals[i]);

			a.text(initialAnimals[i]);

			$("#animalButtons").append(a);
		}
	}

	//showing GiFs on screen
	function displayAnimalGif () {

		var animal = $(this).attr("data-name");

		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=dc6zaTOxFJmzC&limit=6";

        $.ajax ({
        	url: queryURL,
        	method: "GET"
        })

        .done(function(response){
        	
        	console.log(queryURL);

        	console.log(response);
        	
        	$("#animals").empty();

        	var results = response.data;

        	for (var i = 0; i < results.length; i++){

        		var animalDiv = $("#animals");

        		var p = $("<p>").text("Rating: " + results[i].rating);

        		var animalImage = $("<img>");

        		// still GIF and moving gif
        		var stillImage = results[i].images.fixed_height_still.url

        		var movingImage = results[i].images.fixed_height.url

        		animalImage.attr("src", stillImage);

        		animalDiv.prepend(p);
        		animalDiv.prepend(animalImage);

        	}
        });

	}

	//adding a button when clicked
	$("#addAnimal").on("click", function(event){

		event.preventDefault();

		var animals = $("#animal-input").val();

		initialAnimals.push(animals);

		addButtons();


	});

/////////////////////////////////////////////////////////////////////
	
	// moving Image not working...maybe .gif or scope???
	$(".gif").on("click", function() {
		var state = animalImage.attr("src");

		if (state === stillImage) {
        	animalImage.attr("src", movingImage);
        	console.log("Still Image");
      	} else {
        	animalImage.attr("src", stillImage);
        	console.log("Moving Image");
      	}


	});

	$(document).on("click", ".animal", displayAnimalGif);


	addButtons();





});
