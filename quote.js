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
            var dtq = data.quote;
            var dta = data.author;
            var attrValue = "https://twitter.com/intent/tweet?text=" + dtq + " - " + dta;

            console.log(data);

            $("#tweetLink").prop("href",attrValue);
            $("#quoteBox").html("<h3 class='flow-text'>" + dtq + "</h3>");
            $("#quoteAuthor").html("<h6 class='flow-text blue-text text-darken-1'>- " + dta + "</h6>");
           
        },
        error: function(err) {
            console.log(err);
        },
        beforeSend: function(xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "li7CFnVytCmshu5vqwd6FMFiEyoXp1Wv4u2jsnnSx2D8MFAHFF"); // Mashape key
        },

        
    });
}