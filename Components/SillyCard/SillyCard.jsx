const Card = [
    {
        "name": "Link",
        "quote": "I'm so hungry, I could eat an octorok!",
        "imageUrl": "https://i.redd.it/lb7muaemn6091.jpg"
    },
    {
        "name": "Zelda",
        "quote": "You've got to be kidding me!",
        "imageUrl": "https://images.nintendolife.com/e4083c3c1159f/zelda-the-wand-of-gamelon-cd-i.900x.jpg"
    },
    {
        "name": "Ganon",
        "quote": "You must die!",
        "imageUrl": "https://www.svg.com/img/gallery/the-embarrassing-zelda-games-that-ended-up-on-philips-cd-i/l-intro-1610035352.jpg"
    },
    {
        "name": "Gwonam",
        "quote": "Squadallah! We're off!",
        "imageUrl": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/5/5f/Gwonam_2.png/revision/latest/scale-to-width-down/250?cb=20110930015357"
    },
    {
        "name": "Morshu",
        "quote": "Sorry Link, I can't give credit. Come back when you're a little..Mmmmmmh...richer",
        "imageUrl": "https://i.kym-cdn.com/entries/icons/facebook/000/001/965/Morshu_-_Original__HD_1080__0-5_screenshot.jpg"
    },
    {
        "name": "King Harkinian",
        "quote": "That's what all true warriors strive for!",
        "imageUrl": "https://www.giantbomb.com/a/uploads/original/0/7395/2530133-11.png"
    }
]

export default function SillyCard() {
    return(
        <ol className="displayCard">{
            Card.map(data => (
                <h2>{data.name}</h2>,
                <p>{data.quote}</p>,
                <img src={data.imageUrl} alt=""></img>
            ))
            }
        </ol>)
}