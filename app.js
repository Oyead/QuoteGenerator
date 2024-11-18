var quotes = [
    {
      content: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde",
    },
    {
      content:
        "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
      author: "Marilyn Monroe",
    },
    {
      content: "So many books, so little time.",
      author: "Frank Zappa",
    },
    {
      content:
        "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      author: "Albert Einstein",
    },
    {
      content: "A room without books is like a body without a soul.",
      author: "Marcus Tullius Cicero",
    },
    {
      content:
        "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
      author: "Bernard M. Baruch",
    },
    {
      content:
        "You've gotta dance like there's nobody watching,\nLove like you'll never be hurt,\nSing like there's nobody listening,\nAnd live like it's heaven on earth.",
      author: "William W. Purkey",
    },
    {
      content:
        "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
      author: "Dr. Seuss",
    },
    {
      content: "You only live once, but if you do it right, once is enough.",
      author: "Mae West",
    },
    {
      content: "Be the change that you wish to see in the world.",
      author: "Mahatma Gandhi",
    },
    {
      content:
        "In three words I can sum up everything I've learned about life: it goes on.",
      author: "Robert Frost",
    },
    {
      content:
        "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
      author: "J.K. Rowling",
    },
    {
      content:
        "Don't walk in front of me… I may not follow\nDon't walk behind me… I may not lead\nWalk beside me… just be my friend",
      author: "Albert Camus",
    },
    {
      content: "If you tell the truth, you don't have to remember anything.",
      author: "Mark Twain",
    },
    {
      content:
        'Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . ."',
      author: "C.S. Lewis",
    },
    {
      content:
        "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
      author: "Maya Angelou",
    },
    {
      content: "A friend is someone who knows all about you and still loves you.",
      author: "Elbert Hubbard",
    },
    {
      content:
        "To live is the rarest thing in the world. Most people exist, that is all.",
      author: "Oscar Wilde",
    },
    {
      content: "Always forgive your enemies; nothing annoys them so much.",
      author: "Oscar Wilde",
    },
    {
      content:
        "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
      author: "Martin Luther King Jr.",
    },
    {
      content:
        "Live as if you were to die tomorrow. Learn as if you were to live forever.",
      author: "Mahatma Gandhi",
    },
    {
      content: "We accept the love we think we deserve.",
      author: "Stephen Chbosky",
    },
    {
      content: "Without music, life would be a mistake.",
      author: "Friedrich Nietzsche",
    },
    ];
  var quotesContent = document.getElementById("content");
  var quotesAuthor = document.getElementById("author");
  
  var currentIndex = -1;
  function getRandomQuote() {
    var newIndex = Math.round(Math.random() * quotes.length);
    while (currentIndex === newIndex) {
      newIndex = Math.round(Math.random() * quotes.length);
    }
    currentIndex = newIndex;
    quotesContent.innerHTML = `- ${quotes[newIndex].content} -`;
    quotesAuthor.innerHTML = `- ${quotes[newIndex].author} -`;    
  }