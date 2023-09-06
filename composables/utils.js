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
    return ["speakers", "lectures", "activities", "about", "contact", "daily-schedule"]
}