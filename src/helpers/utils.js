import html2canvas from "html2canvas"
import { valid } from "semver"

export const exportAsImage = async (el) => {
    const canvas = await html2canvas(el)
    return window.btoa(canvas.toDataURL("image/jpeg", 0.2))
}

export const getDifficultyFromSeedID = (seedID) => {
    const difficulty = seedID.split("-")[0]

    if (difficulty.length !== 1) {
        return 0
    }

    return difficulty
}

export const getRuleVersionFromSeedID = (seedID) => {
    const ruleVersion = seedID.split("-")[1]

    if (ruleVersion.length < 1) {
        return 0
    }

    const v = window.atob(ruleVersion)
    if (valid(v, {})) {
        return v
    }

    return 0
}
