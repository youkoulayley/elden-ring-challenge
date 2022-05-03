import { data } from "../data/data"

export const getConstraints = (ruleVersion, constraints, difficulty) => {
    const toDelete = constraints.map(constraint => {
        return constraint.id
    })

    constraints.forEach(constraint => {
        data[ruleVersion].rules.uniqueConstraint.forEach(rule => {
            if (rule.includes(constraint.id)) {
                toDelete.push(...rule)
            }
        })
    })

    return data[ruleVersion].constraints.filter((e) => {
        return !toDelete.includes(e.id) && !data[ruleVersion].rules.excludeConstraintsByDifficulty[difficulty].includes(e.id)
    })
}

// Load all class and exclude them depending on the difficulty.
export const excludeClasses = (ruleVersion, difficulty) => {
    return data[ruleVersion].classes.filter((e) => {
        return !data[ruleVersion].rules.excludeClassesByDifficulty[difficulty].includes(e.id)
    })
}

// Load all keepsake and exclude them depending on the difficulty.
export const excludeKeepsakes = (ruleVersion, difficulty, constraints) => {
    let keepsakes = data[ruleVersion].keepsakes.filter((e) => {
        return !data[ruleVersion].rules.excludeKeepsakesByDifficulty[difficulty].includes(e.id)
    })

    if (data[ruleVersion].rules.excludeKeepsakesByConstraints === undefined) {
        return keepsakes
    }

    for (const key in constraints) {
        keepsakes = keepsakes.filter((e) => {
            if (data[ruleVersion].rules.excludeKeepsakesByConstraints[constraints[key].id] === undefined) {
                return true
            }

            return !data[ruleVersion].rules.excludeKeepsakesByConstraints[constraints[key].id].includes(e.id)
        })
    }

    return keepsakes
}

// Load all weapon types and exclude them depending on constraints.
export const excludeWeaponTypes = (ruleVersion, weaponTypes, constraints) => {
    const toDelete = weaponTypes.map(weaponType => {
        return weaponType.id
    })

    let selectedWeaponTypes = data[ruleVersion].weaponTypes.filter((e) => {
        return !toDelete.includes(e.id)
    })

    if (data[ruleVersion].rules.excludeWeaponTypesByConstraints === undefined) {
        return selectedWeaponTypes
    }

    for (const key in constraints) {
        selectedWeaponTypes = selectedWeaponTypes.filter((e) => {
            if (data[ruleVersion].rules.excludeWeaponTypesByConstraints[constraints[key].id] === undefined) {
                return true
            }

            return !data[ruleVersion].rules.excludeWeaponTypesByConstraints[constraints[key].id].includes(e.id)
        })
    }

    return selectedWeaponTypes
}

// Load all crystal tears and exclude them depending on constraints.
export const excludeCrystalTears = (ruleVersion, crystalTears, constraints) => {
    const toDelete = crystalTears.map(crystalTear => {
        return crystalTear.id
    })

    let selectedCrystalTears = data[ruleVersion].crystalTears.filter((e) => {
        return !toDelete.includes(e.id)
    })

    if (data[ruleVersion].rules.excludeCrystalTearByConstraints === undefined) {
        return selectedCrystalTears
    }

    for (const key in constraints) {
        selectedCrystalTears = selectedCrystalTears.filter((e) => {
            if (data[ruleVersion].rules.excludeCrystalTearByConstraints[constraints[key].id] === undefined) {
                return true
            }

            return !data[ruleVersion].rules.excludeCrystalTearByConstraints[constraints[key].id].includes(e.id)
        })
    }

    return selectedCrystalTears
}

// Enforce talismans if the keepsake is a talisman.
export const enforceTalismans = (ruleVersion, keepsake) => {
    if (data[ruleVersion].rules.enforceTalismansByKeepsake === undefined) {
        return []
    }

    return data[ruleVersion].talismans.filter((e) => {
        if (data[ruleVersion].rules.enforceTalismansByKeepsake[keepsake.id] === undefined) {
            return false
        }

        return data[ruleVersion].rules.enforceTalismansByKeepsake[keepsake.id].includes(e.id)
    })
}

// Load all talismans and exclude them depending on constraints.
export const excludeTalismans = (ruleVersion, talismans, constraints) => {
    const toDelete = talismans.map(talisman => {
        return talisman.id
    })

    let selectedTalismans = data[ruleVersion].talismans.filter((e) => {
        return !toDelete.includes(e.id)
    })

    if (data[ruleVersion].rules.excludeTalismansByConstraints === undefined) {
        return selectedTalismans
    }

    for (const key in constraints) {
        selectedTalismans = selectedTalismans.filter((e) => {
            if (data[ruleVersion].rules.excludeTalismansByConstraints[constraints[key].id] === undefined) {
                return true
            }

            return !data[ruleVersion].rules.excludeTalismansByConstraints[constraints[key].id].includes(e.id)
        })
    }

    return selectedTalismans
}