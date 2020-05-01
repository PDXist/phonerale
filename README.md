# phonerale
node.js meets twilio

prompt.js / action.js - lamdba function (node.js)

prompt_response.js / action_response.js - AWS API Gateway (REST):
Integration response Mapping Templates (application\json, status 200)

API Gateway - REST. Both POST to lambda functions. Integration request Mapping template should be application/x-www-form-urlencoded, template is integration_request.js for both APIs.

Also, set both APIs method response to application/xml

Twilio POST to prompt.js, which returns script and POST destination url after selection




