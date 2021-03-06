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
    excludeConstraintsByDifficulty: {
        1: [ 2, 6, 7, 12, 13, 28, 29, 30, 31, 33, 34, 35, 36, 37 ],
        2: [ 7, 12, 13, 28, 30, 31, 34, 35 ],
        3: [ 7, 12, 13, 28, 30, 31 ],
        4: [ 32, 33 ],
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
