function timeOfDayGreeting(time, myName) {
  // const time = whatever you passs in in the first slot
  // console.log("Good " + time + ", "+myName+"!")

  if (!time) {
    console.log("hey I need time over here!")
    return
  } else if (!myName) {
    console.log("hey I need a name over here!")
  }

  console.log(`Good ${time}, ${myName}!`)
}

timeOfDayGreeting()
timeOfDayGreeting("evening", "Michelle")
timeOfDayGreeting("twilight vampires")
