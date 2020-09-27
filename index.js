var domain = 'yahoo.com'
var getRandomEmailForDomain = function(domain) {
   var NameMail = Math.random().toString(36).substring(7);
   return NameMail + "@" + domain;
}