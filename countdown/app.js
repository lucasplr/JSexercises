const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
  const giveaway = document.querySelector(".giveaway")
  const deadline = document.querySelector(".deadline")
  const items = document.querySelectorAll(".deadline-format h4")

//new function to add 10 days every time that the project is opened

  let tempDate = new Date()
  let tempYear = tempDate.getFullYear()
  let tempMonth = tempDate.getMonth()
  let tempDay = tempDate.getDate()



  let days = document.querySelector(".days")
  let hrs = document.querySelector(".hours")
  let mins = document.querySelector(".mins")
  let secs = document.querySelector(".secs")

  //let futureDate = new Date(2022, 4, 25,17, 30, 0)

  const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0)

  const year = futureDate.getFullYear()
  const hours = futureDate.getHours()
  const minutes = futureDate.getMinutes()
  const date = futureDate.getDate()

  let month = months[futureDate.getMonth()]
  let day = weekdays[futureDate.getDay()]

  console.log(giveaway.textContent = `giveaways end on ${day}, ${date}${month} ${year}, ${hours}:${minutes}`)


  // future time in ms
  const futureTime = futureDate.getTime()

  function getRemainingTime(){
    const today = new Date().getTime()
    const t = futureTime - today
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60m
    //1d = 24hrs

    //values in ms
    const oneDay = 24 * 60 * 60 * 1000
    const oneHour = 60 * 60 * 1000
    const oneMinute = 60 * 1000
    const oneSecond = 1000

    let days = Math.floor(t / oneDay)
    let hours = Math.floor ((t % oneDay)/ oneHour)
    let minutes = Math.floor((t % oneHour)/ oneMinute)
    let seconds = Math.floor((t % oneMinute)/ oneSecond)

    // set values array

    const values = [days, hours, minutes, seconds]

    function format(item){
      if (item < 10){
        return item = `0${item}`
      }
      return item
    }

    items.forEach(function(item, index){
      item.innerHTML = format(values[index])
    })
    if (t < 0){
      clearInterval(countdown)
      deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired</h4>`
    }

  }
  //countdown
  let countdown = setInterval(getRemainingTime, 1000)

  getRemainingTime()

  /*
My version of the math

    hrs.textContent = Math.floor((((t/oneDay) - Math.floor(t/oneDay))*oneDay)/oneHour)

    mins.textContent = Math.floor(((((((t/oneDay) - Math.floor(t/oneDay))*oneDay)/oneHour) - Math.floor((((t/oneDay) - Math.floor(t/oneDay))*oneDay)/oneHour))*oneHour)/oneMinute)

    secs.textContent = Math.floor((((((((((t/oneDay) - Math.floor(t/oneDay))*oneDay)/oneHour) - Math.floor((((t/oneDay) - Math.floor(t/oneDay))*oneDay)/oneHour))*oneHour)/oneMinute) - Math.floor(((((((t/oneDay) - Math.floor(t/oneDay))*oneDay)/oneHour) - Math.floor((((t/oneDay) - Math.floor(t/oneDay))*oneDay)/oneHour))*oneHour)/oneMinute))*oneMinute)/oneSecond)

  */