$(function () {
    $(".devour-burg").on("click", function (event) {

        let id = $(this).data("id");
        let newEat = $(this).data("newate");

        let newAte = {
            devoured: newEat
        };
        console.log("New devoured: "+newAte);

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newAte
        }).then(
            function () {
                console.log("changed devoured to", newEat);
               
                location.reload();
            }
        );
    })

$(".make-form").on("submit", function (event) {
    
    event.preventDefault();

    let newMonster = {
        name: $("#newMonster").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
    };
    console.log("New Burger Data: "+newMonster);

    // Send the POST request.
    $.ajax("/api/burgers", {
        type: "POST",
        data: newMonster
    }).then(
        function () {
            console.log("burger made");
            // Reload the page to get the updated list
            location.reload();
        }
    );
})
});