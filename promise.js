function sayHello() {
    var d = $.Deferred();
    console.log('Deferred has been created.');

    setTimeout(function() {
        d.resolve();
        console.log( 'Timeout has been done. (resolved)' );
    }, 3000);

    console.log('Promise has been returned.');
    return d.promise();
}

sayHello().then(function() {
    alert('sayHello function has been done.');
});