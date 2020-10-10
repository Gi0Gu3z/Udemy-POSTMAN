var domain = 'yahoo.com';
var getRandomEmailForDomain = function(domain) {
   var NameMail = Math.random().toString(36).substring(7);
   return NameMail + "@" + domain;
} 




let i;
for ( i = 1; i < 4; i++) {
  pm.environment.set("boardName", "My Board " + i);
}

Math.random().toString

for ()

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}

function name(params) { 
  
pm.test. 


}






let jsonData = pm.respone.json();
for (let filter of jsonData.filter) {
  if (jsonData.filter.name == "MANUFACTURER") {
   let filter = jsonData.filter;
  }
  
  pm.test("Your test name", function () {
  filter.name.to.eqal("MANUFACTURER");
  filter.isAllowed.to.be.true;

  })


}





let jsonData = pm.response.json();
let manufacturer;
for (let filter of jsonData.filters) {
  if (filter.name == "MANUFACTURER") {
   manufacturer = filter;
   console.log(manufacturer);
  }
}
  pm.test("Your test name", function () {
  pm.expect(manufacturer.name).to.eql("MANUFACTURER");
  pm.expect(manufacturer.isAllowed).to.be.false;
  })