import html2canvas from "html2canvas"
import { valid } from "semver"

export const exportAsImage = async (el) => {
    const canvas = await html2canvas(el)
    return window.btoa(canvas.toDataURL("image/jpeg", 0.2))
}

export const getInfoFromSeedID = (seedID) => {
    const infob64 = seedID.split("-")[0]
    return window.atob(infob64)
}

export const getDifficultyFromSeedID = (seedID) => {
    const difficulty = getInfoFromSeedID(seedID).split("-")[0]
    if (1 <= difficulty <= 4) {
        return difficulty
    }

    return 0
}

export const getFlaskOfWondrousPhysickFromSeedID = (seedID) => {
    if (getInfoFromSeedID(seedID).split("-")[1] === "1") {
        return 1
    }

    return 0
}

export const getRuleVersionFromSeedID = (seedID) => {
    const ruleVersion = "v" + getInfoFromSeedID(seedID).split("-")[2]
    if (ruleVersion.length < 1) {
        return ""
    }

    if (valid(ruleVersion, {})) {
        return ruleVersion
    }

    return ""
}
