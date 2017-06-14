$(document).ready(function() {
    getQuoteFn();

    $("#getQuote").on('click', function() {
        getQuoteFn();
    });
   
});


function getQuoteFn() {
    $.ajax({

        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=', // The URL to the API.

        type: 'GET',

        //data: {}, // Additional parameters here

        dataType: 'json',

        success: function(data) {

            console.log(data);

            $("#quoteBox").html("<h3 class='flow-text'>" + data.quote + "</h3>");
            $("#quoteAuthor").html("<em><h6 class='flow-text blue-text text-lighten-4'>- " + data.author + "</h6></em>");

            // document.getElementById("quote").innerHTML = data.source;
        },

        error: function(err) {
            alert(err);
        },

        beforeSend: function(xhr) {

            xhr.setRequestHeader("X-Mashape-Authorization", "li7CFnVytCmshu5vqwd6FMFiEyoXp1Wv4u2jsnnSx2D8MFAHFF"); // Mashape key

        }
    });
}

