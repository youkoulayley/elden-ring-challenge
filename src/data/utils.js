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