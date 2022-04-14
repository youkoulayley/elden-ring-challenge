export const getDifficultyFromSeedID = (seedID) => {
    const difficulty = seedID.split('-')[0];
    if (difficulty.length !== 1) {
        console.log("difficulty not found")
        return 0
    }

    return difficulty
}