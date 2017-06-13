// Event listener to respond to "Show another quote" button clicks
// When user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Array of quotes
const quotes = [
  {
    quote: "Sometimes when you innovate, you make mistakes. It is best to " +
      "admit them quickly, and get on with improving your other innovations.",
    source: "Steve Jobs",
    citation: "Steve Jobs, the Journey is the Reward",
    year: "1988",
    tags: ["technology", "inspiration"]
  },
  {
    quote: "You can't just ask customers what they want and then try to give " +
      "that to them. By the time you get it built, they'll want something new.",
    source: "Steve Jobs",
    citation: "Interview with Inc. Magazine",
    year: "1989",
    tags: ["technology", "business"]
  },
  {
    quote: "What a computer is to me is it's the most remarkable tool that " +
      "we have ever come up with. It's the equivalent of a bicycle for our minds.",
    source: "Steve Jobs",
    citation: "Memory and Imagination: New Pathways to the Library of Congress",
    year: "1991",
    tags: ["technology"]
  },
  {
    quote: "Being the richest man in the cemetery doesn't matter to me... " +
      "Going to bed at night saying we've done something wonderful... that's " +
      "what matters to me.",
    source: "Steve Jobs",
    citation: "The Wall Street Journal",
    year: "1993",
    tags: ["inspiration"]
  },
  {
    quote: "Have the courage to follow your heart and intuition. They " +
      "somehow know what you truly want to become.",
    source: "Steve Jobs",
    tags: ["inspiration"]
  },
  {
    quote: "You can't connect the dots looking forward; you can only connect " +
      "them looking backwards. So you have to trust that the dots will " +
      "somehow connect in your future. You have to trust in something - " +
      "your gut, destiny, life, karma, whatever. This approach has never let " +
      "me down, and it has made all the difference in my life.",
    source: "Steve Jobs",
    tags: ["inspiration"]
  }
];

// Temporary storage for one round of the quote set
let currentQuotes = [];
timer = window.setInterval(printQuote, 10000);

function getRandomQuote(){
// If a quote is requested and the current set is empty, refill it with quotes array
  if(currentQuotes.length === 0){
    currentQuotes = currentQuotes.concat(quotes);
  }
// Splice a random quote from the current set of quotes, this ensures all
// quotes will randomly be shown once before repeating
  let randomQuote = currentQuotes.splice((Math.floor(Math.random() * currentQuotes.length)), 1)[0];
  console.log(randomQuote.quote);
  return randomQuote;
}

function getRandomColor(){
// Generate a random number between 0 and 255 to construct rgb values
  return Math.floor(Math.random() * 255);
}

function printQuote(){
// Invoke changeBackgroundColor() to change background to a random color when
// a new quote is requested
  changeBackgroundColor();
  let quote = getRandomQuote();
  // Construct innerHTML string from quote object properties
  let quoteString =
    `<p class="quote"> ${quote.quote} </p>` +
    `<p class="source"> ${quote.source}`;
    // Only add HTML for citation and year if property is present
  if(quote.citation){
    quoteString += `<span class="citation"> ${quote.citation} </span>`;
  }
  if(quote.year){
    quoteString += `<span class="year"> ${quote.year} </span>`;
  }
  quoteString += `</p>`;
  // Update quotebox div with constructed HTML sting of quote object properties
  document.getElementById('quote-box').innerHTML = quoteString;

  // Add new timer whenever new quote is rendered, if quote is not requested
  // by pressing loadQuote button, a new quote is rendered every 30 seconds
  window.clearTimeout(timer);
  timer = window.setInterval(printQuote, 30000);
}

function changeBackgroundColor(){
// Invoke getRandomColor() for red, green, and blue and combine into a string
// to create a random color for body background-color value
  let r = getRandomColor();
  let g = getRandomColor();
  let b = getRandomColor();
  let color = `rgb(${r}, ${g}, ${b})`;
  document.querySelector('body').style.backgroundColor = color;
}

// Invoke for initial quote
printQuote();
