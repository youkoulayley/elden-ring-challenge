import html2canvas from "html2canvas"
import { Base64 } from "js-base64"
import { latestVersion } from "../data/utils"

export const exportAsImage = async (el) => {
    const canvas = await html2canvas(el, {height: 650, windowWidth: 1920, windowHeight: 1080})
    return Base64.encode(canvas.toDataURL("image/jpeg", 0.2))
}

export const generateInfoForSeedID = (difficulty, flask, talisman) => {
    const info = difficulty + "-" + flask + "-" + talisman + "-" + latestVersion().split("v")[1]

    return Base64.encode(info, true)
}

export const getInfoFromSeedID = (seedID) => {
    const infob64 = seedID.split("-")[0]

    const info = Base64.decode(infob64).split("-")

    // not set info are set to 0
    const difficulty = info[0]
    let flask = "0"
    let talismans = "0"
    const version = "v" + info[info.length - 1].replaceAll("*", "")

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
