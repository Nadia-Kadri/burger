// Wait to attach handler until the DOM is fully loaded.
$(function() {
	$(".change-devoured").on("click", function(event) {
		var id = $(this).data("id");
		var devoured = $(this).data("devoured");
		
		var isDevoured = {
			devoured: 1
		};

	if (!devoured) {
		console.log("you already ate that!");
		alert("You already ate that burger!")
	} else {
		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: isDevoured
		}).then(
			function() {
				console.log("burger devoured", isDevoured);
				location.reload();
			});
	}

	});

	$(".create-form").on("submit", function(event) {
		event.preventDefault();

		var newBurger = {
			burger_name: $("#burger").val().trim(),
			devoured: 0
		};

		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger
		}).then(
			function() {
				console.log("created new burger");
				location.reload();
			}
		);
	});
});