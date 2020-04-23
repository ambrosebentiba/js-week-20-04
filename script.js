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
          // WE CALL THE ENDGAME FUNCTION
          endGame()
        }
      }, 1)
  }

  // END GAME FUNCTION
  function endGame() 
  {
    // WRITING FINAL STATS 
    let clicsBySeconds = (score / duration).toFixed(2)
    timerTxt.textContent = duration.toFixed(3)
    clicksTxt.textContent = clicsBySeconds
    // BUTTON SHOWING BACK TO MAKE THE GAME REPLAYABLE
    show(startBtn)

    // DISPLAYING RESULTS TO THE USER IN DELAYED MODE
    //TO UPDATE THE USER JUST BEFORE THE ALERT
    setTimeout(function() 
    {
      if(score <= 19) 
      {
        window.location.href = "pages/0_19.html"
      }
      else if(score > 19 && score <= 39) 
      {
        window.location.href = "pages/20_39.html"
      }
      else if(score > 39 && score <= 59) 
      {
        window.location.href = "pages/40_59.html"
      }
      else if(score > 59 && score <= 79) 
      {
        window.location.href = "pages/60_79.html"
      }
      else if(score > 79 && score <= 99) 
      {
        window.location.href = "pages/80_99.html"
      }
      else
      {
        window.location.href = "pages/over_100.html"
      }
    }, 10)
  }

  // WE SET A CLICK EVENT LISTENER ON THE START BUTTON
  startBtn.addEventListener("click", function(e) 
  {
    startGame()
    choosePic()
  })

  // we add a click event listener on the click area div to update the score when the user will click
  clickArea.addEventListener("click", function(e) 
  {
    if (!ended) 
    {
      score++
      scoreTxt.textContent = score
    }
    tap()
  })

  // PART CONCERNING SWITCHES BETWEEN MENUS AND CHARACTERS

  // FIRST PAGE ELEMENTS
  const firstPage = document.querySelector('#first_page')
  const firstTimmy = firstPage.querySelector('.timmy_img')
  const firstTiny = firstPage.querySelector('.tiny_img')

  // SECOND PAGE ELEMENTS
  const secondPage = document.querySelector('#second_page')
  let timmyWeights = secondPage.querySelector('.sport_boy')
  let tinyWeights = secondPage.querySelector('.sport_girl')



  function changePage()
  {
    hide(firstPage)
    showBlock(secondPage)
  }

  firstTimmy.addEventListener('click', function(e)
  {
    changePage()
    tinyWeights.style.display = 'none'
  })  
  
  firstTiny.addEventListener('click', function(e)
  {
    changePage()
    timmyWeights.style.display = 'none'
  })

  const myPicsTiny = new Array("player_characters_SIJS/GIF/jumping_girl.gif", "player_characters_SIJS/GIF/running_girl.gif", "player_characters_SIJS/GIF/pushup_girl.gif")  
  
  const myPicsTimmy = new Array("player_characters_SIJS/GIF/jumping_boy.gif", "player_characters_SIJS/GIF/running_boy.gif", "player_characters_SIJS/GIF/pushup_boy.gif")

  function choosePic()
  {
    let randomNum = Math.floor(Math.random() * myPicsTiny.length)
    tinyWeights.src = myPicsTiny[randomNum]
    timmyWeights.src = myPicsTimmy[randomNum]
  }

  const tap = function()
  {
    clickArea.style.border = 'solid 2px #AAAAAA'
    setTimeout(function()
    {
      clickArea.style.border = 'solid 2px #FFEEE325'
    }, 100)
  }