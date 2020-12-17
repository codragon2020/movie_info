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
        var url = "http://www.omdbapi.com/?apikey=" + apikey

        // Get request for the API call
        $.ajax({
            method: 'Get',
            url:url+"&t="+movie,
            success:function(data) {
                console.table(data);

                // Result to be displayed
                result = `
                <img style="float:left" class="img-thumnail" width="200" height="200" src="${data.Poster}"/>
                <h2>${data.Title}</h2>
                <h2>${data.Released}</h2>
                <h2>${data.Runtime}</h2>
                <h2>${data.Genre}</h2>
                <h2>${data.Director}</h2>
                <h2>${data.Actors}</h2>
                `
                // Actually displaying the result in html
                $("#result").html(result);

            }
        })
    })
})
