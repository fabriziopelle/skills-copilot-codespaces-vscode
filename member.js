function skillsMember() {
  var member = this; // 'this' refers to the object that called this function
  member.skills.forEach(function(skill) {
    console.log(member.name + ' knows ' + skill);
  });
}