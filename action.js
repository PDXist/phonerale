console.log('Loading function');

exports.handler = function(event, context) {
    options = [ 
	"<Play>https://s3-us-west-2.amazonaws.com/dadoanalcock.com/assets/hero.mp3</Play>",
	"<Play>https://s3-us-west-2.amazonaws.com/dadoanalcock.com/assets/dod.mp3</Play>",
	"<Play>https://s3-us-west-2.amazonaws.com/dadoanalcock.com/assets/bsun.mp3</Play>",
	"<Play>https://s3-us-west-2.amazonaws.com/dadoanalcock.com/assets/elrey.mp3</Play>",
	"<Play>https://s3-us-west-2.amazonaws.com/dadoanalcock.com/assets/isink.mp3</Play>",
	"<Play>https://s3-us-west-2.amazonaws.com/dadoanalcock.com/assets/tribe.mp3</Play>",
	"<Play>https://s3-us-west-2.amazonaws.com/dadoanalcock.com/assets/troub.mp3</Play>",
	"<Play>https://s3-us-west-2.amazonaws.com/dadoanalcock.com/assets/wtsf.mp3</Play>",
	"<Play>https://s3-us-west-2.amazonaws.com/dadoanalcock.com/assets/ven.mp3</Play>"
    ]
        
   qryObject = parseQuery(event.reqbody);
   
   context.succeed(options[qryObject['Digits']-1]);
};

function parseQuery(qstr) {
        var query = {};
        var a = qstr.substr(0).split('&');
        for (var i = 0; i < a.length; i++) {
            var b = a[i].split('=');
            query[decodeURIComponent(b[0])] = decodeURIComponent(b[1] || '');
        }
        return query;
}