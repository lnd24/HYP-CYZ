/* Some function for Lecture object */

export function getSpeakers(lecture) {
    const arr = []
    for(let sp of lecture.speakers){
        arr.push(sp.name + " " + sp.surname)
    }
    return arr.join(", ")
}