export const ruleData = {
    excludeClassesByDifficulty: {
        1: [ 10 ],
        2: [],
        3: [ 7, 8 ],
        4: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
    },
    excludeKeepsakesByDifficulty: {
        1: [ 1, 10 ],
        2: [],
        3: [],
        4: [ 2, 3, 4, 5, 6, 7, 8, 9 ],
    },
    excludeKeepsakesByConstraints: {
        2: [ 4 ],
        4: [ 5 ],
        8: [ 6 ],
        11: [ 3, 6, 8, 9 ],
        15: [ 6 ],
        31: [ 2, 10 ],
    },
    excludeConstraintsByDifficulty: {
        1: [ 2, 6, 7, 12, 13, 28, 29, 30, 31, 33, 34, 35, 36, 37 ],
        2: [ 7, 12, 13, 28, 30, 31, 34, 35 ],
        3: [ 7, 12, 13, 28, 30, 31 ],
        4: [ 32, 33 ],
    },
    excludeWeaponTypesByConstraints: {
        5: [ 13, 25 ],
        16: [ 24 ], // All reapers apply bleeding
    },
    excludeTalismansByConstraints: {
        3: [ 78, 79 ],
        5: [ 22, 37, 38, 39, 43, 61, 62, 64, 72, 86 ],
        8: [ 85 ],
        9: [ 73 ],
        13: [ 48 ],
        14: [ 60 ],
        16: [ 34 ],
    },
    enforceTalismansByKeepsake: {
        2: [ 17 ],
        10: [ 49 ],
    },
    excludeCrystalTearByConstraints: {
        30: [ 1, 3, 24, 25 ],
        37: [ 4 ],
    },
    uniqueConstraint: [
        [ 1, 2 ], // One rule for golden seed / crystal tears
        [ 6, 41, 42, 43, 44, 45, 46, 47 ], // One rule for stats
        [ 7, 12, 13, 30 ], // Only one expert challenge at once
        [ 18, 48 ], // Demi Gods or all remembrances
        [ 19, 20, 21, 22, 23, 24 ], // We can't have two endings
        [ 25, 29, 39 ], // Armor or not
        [ 26, 27, 28 ], // One roll type is allowed
        [ 31, 32, 33, 34 ], // One rule for talismans
    ],
}
