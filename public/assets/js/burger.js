// Wait to attach handler until the DOM is fully loaded.
$(function() {
	$(".change-devoured").on("click", function(event) {
		var id = $(this).data("id");
		console.log(id)
		var isDevoured = {
			devoured: 1
		};

	$.ajax("/api/burgers/" + id, {
		type: "PUT",
		data: isDevoured
	}).then(
		function() {
			console.log("burger devoured", isDevoured);
			location.reload();
		});
	});

	$(".create-form").on("submit", function(event) {
		event.preventDefault();

		var newBurger = {
			burger_name: $("#burger").val().trim(),
			isDevoured: 0
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