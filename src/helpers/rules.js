import { classData } from "../data/class.data"
import { constraintData } from "../data/constraint.data"
import { crystalTearData } from "../data/crystal-tear.data"
import { keepsakeData } from "../data/keepsake.data"
import { ruleData } from "../data/rule.data"
import { weaponTypeData } from "../data/weapon-type.data"

// Load all class and exclude them depending on the difficulty.
export const excludeClasses = (difficulty) => {
    return classData.filter((e) => {
        return !ruleData.excludeClassesByDifficulty[difficulty].includes(e.id)
    })
}

// Load all keepsake and exclude them depending on the difficulty.
export const excludeKeepsakes = (difficulty) => {
    return keepsakeData.filter((e) => {
        return !ruleData.excludeKeepsakesByDifficulty[difficulty].includes(e.id)
    })
}

export const getCrystalTears = (crystalTears) => {
    const toDelete = crystalTears.map(crystalTear => {
        return crystalTear.id
    })

    return crystalTearData.filter((e) => {
        return !toDelete.includes(e.id)
    })
}

export const getConstraints = (constraints, difficulty) => {
    const toDelete = constraints.map(constraint => {
        return constraint.id
    })

    constraints.forEach(constraint => {
        ruleData.uniqueConstraint.forEach(rule => {
            if (rule.includes(constraint.id)) {
                toDelete.push(...rule)
            }
        })
    })

    return constraintData.filter((e) => {
        return !toDelete.includes(e.id) && !ruleData.excludeConstraintsByDifficulty[difficulty].includes(e.id)
    })
}

export const getWeaponTypes = (weaponTypes) => {
    const toDelete = weaponTypes.map(weaponType => {
        return weaponType.id
    })

    return weaponTypeData.filter((e) => {
        return !toDelete.includes(e.id)
    })
}
