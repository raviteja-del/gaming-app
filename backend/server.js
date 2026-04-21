const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const games = [
    {
        id: 1,
        name: "GTA V",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg",
        video: "https://cdn.coverr.co/videos/coverr-driving-in-the-city-1561/1080p.mp4",
        trailer: "https://www.youtube.com/embed/QkkoHAzjnUs",
        description: "Grand Theft Auto V is an open-world action-adventure game set in Los Santos. Players can explore a massive world, complete missions, drive vehicles, and experience dynamic gameplay.",
        rating: "⭐ 4.8",
        genre: "Action, Open World",
        platform: "PC, PlayStation, Xbox",
        release: "2013"
    },
    {
        id: 2,
        name: "Call of Duty",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1938090/header.jpg",
        video: "https://cdn.coverr.co/videos/coverr-soldier-walking-5176/1080p.mp4",
        trailer: "https://www.youtube.com/embed/bH1lHCirCGI",
        description: "Call of Duty is a high-intensity first-person shooter featuring realistic combat, multiplayer battles, and cinematic campaigns.",
        rating: "⭐ 4.7",
        genre: "FPS, Shooter",
        platform: "PC, PlayStation, Xbox",
        release: "2022"
    },
    {
        id: 3,
        name: "PUBG",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/578080/header.jpg",
        video: "https://cdn.coverr.co/videos/coverr-gaming-setup-1608/1080p.mp4",
        trailer: "https://www.youtube.com/embed/uCd6tbUAy6o",
        description: "PUBG is a battle royale game where players parachute onto an island and fight to be the last one standing.",
        rating: "⭐ 4.5",
        genre: "Battle Royale",
        platform: "PC, Mobile, Console",
        release: "2017"
    },
    {
        id: 4,
        name: "FIFA 24",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2195250/header.jpg",
        video: "https://cdn.coverr.co/videos/coverr-football-stadium-1560/1080p.mp4",
        trailer: "https://www.youtube.com/embed/XhP3Xh4LMA8",
        description: "FIFA 24 delivers realistic football gameplay with licensed teams, leagues, and immersive stadium experience.",
        rating: "⭐ 4.6",
        genre: "Sports",
        platform: "PC, PlayStation, Xbox",
        release: "2023"
    },
    {
        id: 5,
        name: "Minecraft",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1675200/header.jpg",
        video: "https://cdn.coverr.co/videos/coverr-block-building-1590/1080p.mp4",
        trailer: "https://www.youtube.com/embed/MmB9b5njVbA",
        description: "Minecraft is a sandbox game where players build, explore, and survive in a block-based world.",
        rating: "⭐ 4.9",
        genre: "Sandbox, Survival",
        platform: "PC, Mobile, Console",
        release: "2011"
    }
];

/* GET ALL GAMES */
app.get('/games', (req, res) => {
    res.json(games);
});

/* GET SINGLE GAME */
app.get('/games/:id', (req, res) => {
    const game = games.find(g => g.id == req.params.id);

    if (!game) {
        return res.status(404).json({ message: "Game not found" });
    }

    res.json(game);
});

/* SERVER START */
app.listen(5000, () => {
    console.log("🚀 Server running on http://localhost:5000");
});
