const noun = ['Mizormac', 'PS Hitsquad', 'CB', 'Suspect', 'Digga D', 'Loski', 'Kwengface', 'Nito NB', 'LD', 'Incognito'];
const verb = ['splashed', 'got splashed by', 'shot at', 'got bun by', 'nicked', 'got nicked by', "M'd", "got M'd by", 'made song with', 'dissed'];
const noun2 = ['Yanko', '2Smokeyy', 'T.Scam', 'AbzSav', 'Gully', 'Richi', 'SJ', 'PR S.A.D', 'Rondo Montana', 'Karma'];
const nounIndex = getRandomNumber(noun.length);
const verbIndex = getRandomNumber(noun.length);
const noun2Index = getRandomNumber(noun.length);
const randomMessage = `${noun[nounIndex]} ${verb[verbIndex]} ${noun2[noun2Index]}!`;
console.log(randomMessage);

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}