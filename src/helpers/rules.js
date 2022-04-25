import { data } from "../data/data"

// Load all class and exclude them depending on the difficulty.
export const excludeClasses = (difficulty, ruleVersion) => {
    return data[ruleVersion].classes.filter((e) => {
        return !data[ruleVersion].rules.excludeClassesByDifficulty[difficulty].includes(e.id)
    })
}

// Load all keepsake and exclude them depending on the difficulty.
export const excludeKeepsakes = (difficulty, ruleVersion) => {
    return data[ruleVersion].keepsakes.filter((e) => {
        return !data[ruleVersion].rules.excludeKeepsakesByDifficulty[difficulty].includes(e.id)
    })
}

export const getCrystalTears = (crystalTears, ruleVersion) => {
    const toDelete = crystalTears.map(crystalTear => {
        return crystalTear.id
    })

    return data[ruleVersion].crystalTears.filter((e) => {
        return !toDelete.includes(e.id)
    })
}

export const getConstraints = (constraints, difficulty, ruleVersion) => {
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

export const getWeaponTypes = (weaponTypes, ruleVersion) => {
    const toDelete = weaponTypes.map(weaponType => {
        return weaponType.id
    })

    return data[ruleVersion].weaponTypes.filter((e) => {
        return !toDelete.includes(e.id)
    })
}
