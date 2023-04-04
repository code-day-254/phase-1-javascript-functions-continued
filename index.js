// code your solution here
function saturdayFun(activity="roller-skate") {
    console.log(`This Saturday, I want to ${activity}!`)
}
saturdayFun();
saturdayFun("bathe my dog")
//
function mondayWork(activity="go to the office") {
    console.log(`This Monday, I will ${activity}`)
}
mondayWork();
mondayWork("work from home")
//
function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    }
  }
  //wrapAdjective();