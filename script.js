// Credit for app goes to https://www.youtube.com/watch?v=8iuPNq553U0
$(document).ready(function(){
    var apikey = "trilogy"
    
    $("#movieForm").submit(function(event){
        event.preventDefault();

        var movie = $("#movie").val()

        var result = ""

        var url = "http://www.omdbapi.com/?apikey=" + apikey

        $.ajax({
            method: 'Get',
            url:url+"&t="+movie,
            success:function(data) {
                console.log(data);

                result = `
                <img style="float:left" class="img-thumnail" width="200" height="200" src="${data.Poster}"/>
                <h2>${data.Title}</h2>
                <h2>${data.Released}</h2>
                <h2>${data.Runtime}</h2>
                <h2>${data.Genre}</h2>
                <h2>${data.Director}</h2>
                <h2>${data.Actors}</h2>
                `

                $("#result").html(result);

            }
        })
    })
})
