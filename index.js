var domain = 'yahoo.com';
var getRandomEmailForDomain = function(domain) {
   var NameMail = Math.random().toString(36).substring(7);
   return NameMail + "@" + domain;
} 




let i;
for ( i = 1; i < 4; i++) {
  pm.environment.set("boardName", "My Board " + i);
}





function name(params) {
   
}