import html2canvas from "html2canvas"
import { decode, encode, isValid } from "js-base64"
import { isValidDifficulty, isValidVersion, latestVersion } from "../data/utils"

export const exportAsImage = async (el) => {
    const canvas = await html2canvas(el, {height: 650, windowWidth: 1920, windowHeight: 1080})
    return encode(canvas.toDataURL("image/jpeg", 0.2))
}

export const generateInfoForSeedID = (difficulty, flask, talisman) => {
    const info = difficulty + "-" + flask + "-" + talisman + "-" + latestVersion().split("v")[1]

    return encode(info, true)
}

export const getInfoFromSeedID = (seedID) => {
    let difficulty = ""
    let flask = "0"
    let talismans = "0"
    let version = "v"

    const infob64 = seedID.split("-")[0]
    if (!isValid(infob64)) {
        return {difficulty, flask, talismans, version}
    }

    let info = ""
    try {
        info = decode(infob64).split("-")
    } catch (e) {
        return {difficulty, flask, talismans, version}
    }

    version = "v" + info[info.length - 1].replaceAll("*", "")
    if (!isValidVersion(version)) {
        version = "v"
        return {difficulty, flask, talismans, version}
    }

    difficulty = info[0]
    if (!isValidDifficulty(version, difficulty)) {
        difficulty = ""
        return {difficulty, flask, talismans, version}
    }

    switch (info.length) {
    case 3:
        flask = info[1]
        break
    case 4:
        flask = info[1]
        talismans = info[2]
        break
    }

    return {difficulty, flask, talismans, version}
}
