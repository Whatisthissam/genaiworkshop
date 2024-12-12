const facts = [
    "Cricket is like the OG of sports, been around since the 16th century!",
    "The longest cricket match lasted 12 days. Talk about commitment!",
    "Cricket balls are legit hard. They can knock you out if you're not careful!",
    "The first-ever international cricket game was played between the USA and Canada. Who knew?",
    "Sachin Tendulkar is the GOAT of cricket with 100 international centuries!",
    "Cricket is played in over 100 countries. It's a whole vibe!",
    "The Ashes series is like the ultimate showdown between England and Australia. It's lit!"
];

document.getElementById('factButton').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('factDisplay').textContent = facts[randomIndex];
});
