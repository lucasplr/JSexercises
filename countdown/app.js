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

  let futureDate = new Date(2022, 4, 17, 30, 0)

  const year = futureDate.getFullYear()
  const hours = futureDate.getHours()
  const minutes = futureDate.getMinutes()

  let month = months[futureDate.getMonth()]
  let day = weekdays[1]

  console.log(giveaway.textContent = `giveaways end on ${day}, ${month} ${year}`)
