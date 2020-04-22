    let score // to store the current score
    let duration = 10 // 10 seconds
    let startTime // start time
    let ended = true // boolean indicating if game is ended

    //taking all the DOM elements to use them is the js file
    const timerTxt = document.querySelector(".timer")
    const scoreTxt = document.querySelector(".score")
    const clicksTxt = document.querySelector(".clicks")
    const startBtn = document.querySelector(".start")
    const clickArea = document.querySelector(".clickarea")
    const firstPage = document.querySelector('#first_page')
    const secondPage = document.querySelector('#second_page')
    const firstTimmy = firstPage.querySelector('.timmy_img')
    const firstTiny = firstPage.querySelector('.tiny_img')

    // we define two functions for showing or hiding a HTML element such as the start button or images
    const show = function(elem) 
    {
      elem.style.display = 'inline'
    }

    const showBlock = function(elem)
    {
      elem.style.visibility = 'visible'
    }

    const hide = function(elem) 
    {
      elem.style.display = 'none'
    }

    // Function to start the game
    function startGame() 
    {
      hide(startBtn)
      score = -1
      ended = false
      startTime = new Date().getTime()

      // setting an interval
      let timerId = setInterval(function() 
      {
        let total = (new Date().getTime() - startTime) / 1000

        // while total lower than duration, we update timer and the clicks by seconds
        if (total < duration) 
        {
          timerTxt.textContent = total.toFixed(3)
          clicksTxt.textContent = (score / total).toFixed(2)
        } 
        else 
        {
          // otherwise, game is ended, we clear interval and we set game as ended
          ended = true
          clearInterval(timerId)
          // we call the end game method
          endGame()
        }
      }, 1)
  }

  // end game method
  function endGame() 
  {
    // we write final stats
    let clicsBySeconds = (score / duration).toFixed(2)
    timerTxt.textContent = duration.toFixed(3)
    clicksTxt.textContent = clicsBySeconds
    // we show start button to play an other game
    show(startBtn)

    // we display result to the user in delayed mode 
    //to update DOM elements just before the alert
    setTimeout(function() 
    {
      alert('You made ' + score + ' clicks in ' + duration + 
      ' seconds. It is ' + clicsBySeconds + 
      ' clicks by seconds. Try again!')
    }, 10)
  }

  function changePage()
  {
    hide(firstPage)
    showBlock(secondPage)
  }

  firstTimmy.addEventListener('click', function(e)
  {
    changePage()
  })

  // we set a click event listener on the start button
  startBtn.addEventListener("click", function(e) 
  {
    startGame()
  })

  // we add a click event listener on the click area div to update the score when the user will click
  clickArea.addEventListener("click", function(e) 
  {
    if (!ended) 
    {
      score++
      scoreTxt.textContent = score
    }
  })