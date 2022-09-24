const quote = document.querySelector(".quotes")
const btn = document.querySelector("#new-quote")
const person = document.querySelector(".person")

const quotes = [{
    quote:
        `“I may not be where I need to be but I thank God I am not where I used to be.”`,
    person: `Joyce Meyer`
},
{
    quote:
        `“Fear is an inhibitor that has kept more people from fulfilling their destiny 
    than any other one emotion.”

`,
    person: "Tim LaHaye"
},
{
    quote:
        `“God uses those who seem ill-fitted for a significant life.”`,
    person: ` Charles Swindoll`
},
{
    quote:
        `“So what are we going to say about these things? If God is for us, who is against us?`,
    person: `ROMANS 8:31`
},
{
    quote:
        `““He only is my rock and my salvation, my fortress; I shall not be shaken.”`,
    person: `PSALM 62:6
`
    },
{
    quote:
        `“The mind is a wonderful problem-solving machine without which there exists not even a single problem.” `,
    person: `Mokokoma Mokhonoana
`
    },
{
    quote:
        `“No act of kindness, no matter how small, is ever wasted.
`,
    person: `Aesop
`
},


];


btn.addEventListener("click",function(){

    const random = Math.floor(Math.random() * quotes.length)
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person; 

    
})