import html2canvas from "html2canvas"

export const exportAsImage = async (el) => {
    const canvas = await html2canvas(el)
    return btoa(canvas.toDataURL("image/jpeg", 0.2))
}

export const getDifficultyFromSeedID = (seedID) => {
    const difficulty = seedID.split("-")[0]

    if (difficulty.length !== 1) {
        return 0
    }

    return difficulty
}