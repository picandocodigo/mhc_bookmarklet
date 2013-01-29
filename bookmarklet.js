(function() {
    var bookmarklet = {
        init: function() {
            var discount = new Number(prompt("What's the current discount?", "0"));
            var reg = /\d+\.*\d*/;

            $('b').each(function(){
                if( $(this).text().match(reg) ){
                    price = new Number( $(this).text() );
                    $(this).text(discount * price / 100);
                }
            });
        }
    };

    if (typeof jQuery=='undefined') {
        jq = document.createElement( 'script' ); jq.type = 'text/javascript'; jq.async = true;
        jq.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js';
        jq.onload=bookmarklet.init;
        document.body.appendChild(jq);
    }
    else {
        bookmarklet.init();
    }
})();
