// Credit for app goes to https://www.youtube.com/watch?v=8iuPNq553U0
$(document).ready(function(){
    
    // key owned by Trilogy
    var apikey = "trilogy"
    
    // Submit method to pull content from movieForm and run event function
    $("#movieForm").submit(function(event){
        event.preventDefault();

        // Variable used in url for API call 
        var movie = $("#movie").val()

        // Result will be displayed in html
        var result = ""

        // URL of the API data call
        var url = "https://www.omdbapi.com/?apikey=" + apikey

        // Get request for the API call
        $.ajax({
            method: 'Get',
            url:url+"&t="+movie,
            success:function(data) {
                console.table(data);

                // Result to be displayed
                result = `
                <img style="float:left" class="img-thumnail" width="200" height="200" src="${data.Poster}"/>
                <h5>Title: ${data.Title}</h5>
                <h5>Date Released: ${data.Released}</h5>
                <h5>Runtime: ${data.Runtime}</h5>
                <h5>Genre: ${data.Genre}</h5>
                <h5>Director: ${data.Director}</h5>
                <h5>Actors: ${data.Actors}</h5>
                `
                // Actually displaying the result in html
                $("#result").html(result);

            }
        })
    })
})
