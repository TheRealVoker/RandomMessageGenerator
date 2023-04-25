const quotes = [
    {
        quote: "Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.",
        person: "Socrates",
        
    },
    {
        quote: "Whatever you are, be a good one.",
        person: "Abraham Lincoln"
    },
    {
        quote: "Don't be afraid to give up the good to go for the great.",
        person: "John D. Rockefeller"
    },
    {
        quote: "Everything comes to him who hustles while he waits.",
        person: "Thomas Edison"
    },
    {
        quote: "Great things are done by a series of small things brought together.",
        person: "Vincent Van Gogh"
    },
    {
        quote: "Amateus sit around and wait for inspiration. The rest of us just get up and go to work.",
        person: "Stephen King"
    },
    {
        quote: "If you don't get out of the box you've been raised in, you won't understand how much bigger the world is.",
        person: "Angelina Jolie"
    }
];

const messages = ["Time for your daily does of inspiration.", "Your motivation for the day.", "A positive quote for the day.", "quote of the day."]

const randomQuotes = (arr) => {
    arrIndex = Math.floor(Math.random() * quotes.length);
    return quotes[arrIndex].quote + " " + quotes[arrIndex].person;
}

const randomMessages = (arr) => {
    arrIndex = Math.floor(Math.random() * messages.length);
    return messages[arrIndex] + "\n";
}


console.log(randomMessages() + randomQuotes())



