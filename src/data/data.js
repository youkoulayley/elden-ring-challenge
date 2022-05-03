import {
    classData as v100class,
    constraintData as v100constraint,
    crystalTearData as v100crystalTear,
    difficultyData as v100difficulty,
    keepsakeData as v100keepsake,
    ruleData as v100rule,
    talismanData as v100talisman,
    weaponTypeData as v100weaponType,
} from "./v1.0.0/export"

import {
    classData as v101class,
    constraintData as v101constraint,
    crystalTearData as v101crystalTear,
    difficultyData as v101difficulty,
    keepsakeData as v101keepsake,
    ruleData as v101rule,
    talismanData as v101talisman,
    weaponTypeData as v101weaponType,
} from "./v1.0.1/export"

export const data = {
    "v1.0.0": {
        classes: v100class,
        constraints: v100constraint,
        crystalTears: v100crystalTear,
        talismans: v100talisman,
        difficulties: v100difficulty,
        keepsakes: v100keepsake,
        rules: v100rule,
        weaponTypes: v100weaponType,
    },
    "v1.0.1": {
        classes: v101class,
        constraints: v101constraint,
        crystalTears: v101crystalTear,
        talismans: v101talisman,
        difficulties: v101difficulty,
        keepsakes: v101keepsake,
        rules: v101rule,
        weaponTypes: v101weaponType,
    },
}