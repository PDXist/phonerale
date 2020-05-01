console.log('Loading function');

exports.handler = function(event, context) {
    var output = {
        message: "Thanks for calling federales phoner allie! Please select one of the following platinum hit songs",
        options: [
			"Hero",
			"Drums of Death",
            "Black Sunday",
            "Road to El Rey",
			"I swore I'd never kill again",
			"Tribe",
			"Trouble",
			"When the Snow Falls",
			"Vendetta"
			]
    }
    context.succeed(output);
};