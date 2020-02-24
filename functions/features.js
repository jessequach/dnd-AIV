module.exports = {
    features: function (classname) {
        switch (classname) {
            case "Barbarian": return [
                `Rage <br/>
                On your turn, you can enter a rage as a Bonus Action. <br/>
                - You have advantage on Strength Checks and Strength Saving Throws. <br/>
                - When you make a melee weapon Attack using Strength, you gain a +2 bonus to the damage roll. This bonus increases as you level. <br/>
                - You have Resistance to bludgeoning, piercing, and slashing damage. <br/>
                `,
                `Unarmored Defense

                `,
                `Danger Sense

                `,
                `Reckless Attack

                `,
                `Primal Path

                `,
                `Ability Score Improvement

                `,
                `Extra Attack

                `,
                `Fast Movement

                `,
                `Feral Instinct

                `,
                `Brutal Critical

                `,
                `Relentless Rage

                `,
                `Persistent Rage

                `,
                `Indomitable Might

                `,
                `Primal Champion
                At 20th level, you embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24.
                `,
            ]
            case "Wizard": return [`wizard`, `placeholder`]
        }
    }
}