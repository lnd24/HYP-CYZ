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

// Second Level Path
export function getAvailablePaths() {
    return ["speakers", "lectures", "socials", "activities", "about", "contact", "daily_schedule"]
}

/* for Lecture object: Get Lecture's speakers as a single String */
export function getSpeakers(lecture) {
    const arr = []
    for(let sp of lecture.speakers){
        arr.push(sp.name + " " + sp.surname)
    }
    return arr.join(", ")
}

/* for Speaker object: Get Speaker's lecture as a single String */

export function getLectures(speaker) {
    const arr = []
    for (let l of speaker.lectures){
        arr.push(l.title)
    }
    return arr.join(", ")
}

/* split an array into arrays of n elements */
export function showN(array, n) {
    const arr = []

    for (let i = 0; i < array.length; i = i + n) {
        arr.push(array.slice(i,i+n))
    }
    return arr
}
