var getRandomEmailForDomain = function(domain) {
    // Tip 1: Use the variable domain (this is your input), not exampleDomainName!
   var NameMail = Math.random().toString(36).substring(7);
   return Namemail + "@" + domain
    // Tip 2: use the following to generate a random string:
    // Math.random().toString(36).substring(7); This will output something like: hfj56s
};
// This is how the function will be caled
var exampleDomainName = 'google.com';
getRandomEmailForDomain(exampleDomainName);