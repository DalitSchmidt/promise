function sendFormData( data ) {
    $.ajax({
        url: 'http://localhost/service.php',
        method: 'POST',
        data: data,

        success: function( response ) {
            return true;
        },

        error: function( xhr ) {
            return false;
        }
    });
}

$('button').on('click', function () {
    var details = {
        firstname: $('input[name=firstname]').val(),
        lastname: $('input[name=lastname]').val(),
        phone: $('input[name=phone]').val(),
        message: $('input[name=message]').val()
    };

    var newDetails = JSON.stringify( details );

    localStorage.setItem( 'form_details', newDetails );

    $('button').text('Submiting form, please wait..');

    $('button').attr('disabled', 'disabled')

    if ( sendFormData( newDetails ) == true ) {
        $('#contact-form').fadeOut('slow', function () {
            alert( "Success :)" );
        });
    } else {
        $('#contact-form').fadeOut('slow', function () {
            alert( "Failed" );
        });
    }
});