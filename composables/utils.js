// Functions which can be exported
export function firstLetterUpperCase(text) {
    let words = text.split(" ")
    for(let i = 0; i < words.length; i++){
        let letters = words[i].split("")
        letters[0] = letters[0].toUpperCase()
        words[i] = letters.join("")
    }
    return words.join(" ")
}

export function getAvailablePaths() {
    return ["speakers", "lectures", "socials", "activities", "about", "contact", "daily-schedule"]
}

export function fixTime(activity) {
    for(let s of activity.schedule){
        s.startT = s.startT.substring(0,5)
        s.endT = s.endT.substring(0,5)
    }

}