import { rsort } from "semver"
import { data } from "./data"

export const latestVersion = () => {
    const versions = []
    for (const version in data) {
        versions.push(version)
    }

    return rsort(versions, {})[0]
}

export const latestData = () => {
    return data[latestVersion()]
}

export const isValidVersion = (version) => {
    const versions = []

    for (const version in data) {
        versions.push(version)
    }

    return versions.includes(version)
}

export const isValidDifficulty = (version, difficulty) => {
    const difficulties = []

    for (const dif in data[version].difficulties) {
        difficulties.push(data[version].difficulties[dif].id)
    }

    return difficulties.includes(parseInt(difficulty))
}