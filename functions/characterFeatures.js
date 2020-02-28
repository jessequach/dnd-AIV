module.exports = {
    features: function (classname) {
        let featureNames
        let featureDescription

        switch (classname) {
            case "Fighter": return [`testdata`]
            case "Monk":

                featureNames = [
                    `Unarmored Defense`, `Martial Arts`, `Ki`, `Flurry of Blows`,
                    `Patient Defense`, `Step of the Wind`, `Unarmored Movement`, `Monastic Tradition`,
                    `Deflect Missles`, `Ability Score Improvement`, `Slow Fall`, `Extra Attack`,
                    `Stunning Strike`, `Ki-Empowered Strikes`, `Stillness of Mind`, `Evasion`,
                    `Purity of Body`, `Tongue of the Sun and Moon`, `Diamond Soul`, `Timeless Body`,
                    `Empty Body`, `Perfect Soul`, `Monastic Traditions`,
                ]
                featureDescription = [
                    `Beginning at 1st level, while you are wearing no armor and not wielding a Shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.`,
                    `Your practice of martial arts gives you mastery of Combat styles that use unarmed strikes and monk Weapons, which are shortswords and any simple Melee Weapons that don’t have the Two-Handed or heavy property. <br/>
                        You gain the following benefits while you are unarmed or wielding only monk Weapons and you aren’t wearing armor or wielding a Shield. <br/>
                        • You can use Dexterity instead of Strength for the Attack and Damage Rolls of your unarmed strikes and monk Weapons. <br/>
                        • You can roll a d4 in place of the normal damage of your Unarmed Strike or monk weapon. <br/>
                        • When you use the Attack action with an Unarmed Strike or a monk weapon on Your Turn, you can make one Unarmed Strike as a Bonus Action. <br/>`,
                    `Starting at 2nd level, your Training allows you to harness The Mystic energy of ki. Your access to this energy is represented by a number of ki points. Your monk level determines the number of points you have, as shown in the Ki Points column of the Monk table.
                        You can spend these points to fuel various ki features. You start knowing three such features: Flurry of Blows, Patient Defense, and Step of the Wind. You learn more ki features as you gain levels in this class.
                        When you spend a ki point, it is unavailable until you finish a short or Long Rest, at the end of which you draw all of your expended ki back into yourself. You must spend at least 30 minutes of the rest meditating to regain your ki points.
                        Some of your ki features require your target to make a saving throw to resist the feature’s Effects. The saving throw DC is calculated as follows:
                        Ki save DC = 8 + your Proficiency Bonus + your Wisdom modifier`,
                    `Immediately after you take the Attack action on Your Turn, you can spend 1 ki point to make two unarmed strikes as a Bonus Action.`,
                    `You can spend 1 ki point to take the Dodge action as a Bonus Action on Your Turn.`,
                    `You can spend 1 ki point to take the Disengage or Dash action as a Bonus Action on Your Turn, and your jump distance is doubled for the turn.`,
                    `Starting at 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a Shield. This bonus increases when you reach certain monk levels, as shown in the Monk table.
                        At 9th level, you gain the ability to move along vertical surfaces and across liquids on Your Turn without Falling during the move.`,
                    `When you reach 3rd level, you commit yourself to a monastic tradition, such as the Way of the Open Hand. Your tradition grants you features at 3rd level and again at 6th, 11th, and 17th level.`,
                    `Starting at 3rd level, you can use your Reaction to deflect or catch the missile when you are hit by a ranged weapon Attack. When you do so, the damage you take from the Attack is reduced by 1d 10 + your Dexterity modifier + your monk level.
                    If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free. If you catch a missile in this way, you can spend 1 ki point to make a ranged Attack (range 20 feet/60 feet) with the weapon or piece of Ammunition you just caught, as part of the same Reaction. You make this Attack with proficiency, regardless of your weapon proficiencies, and the missile counts as a monk weapon for the Attack.`,
                    `When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two Ability Scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.`,
                    `Beginning at 4th level, you can use your Reaction when you fall to reduce any Falling damage you take by an amount equal to five times your monk level.`,
                    `Beginning at 5th level, you can Attack twice, instead of once, whenever you take the Attack action on Your Turn.`,
                    `Starting at 5th level, you can interfere with the flow of ki in an opponent’s body. When you hit another creature with a melee weapon Attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be Stunned until the end of your next turn.`,
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                ]
                return createFeatures(featureNames, featureDescription)
            case "Wizard": return [`testdata`]
            case "Rogue": return [`testdata`]

        }
    }
}

function createFeatures(fNames, fData) {
    let features = []
    fNames.forEach((value, index) => {
        let featureToAdd = `
            <button 
                class="feature-name"
                type="button"
                data-toggle="popover"
                data-content="${fData[index]}">
                ${fNames[index]}
            </button>
        `
        features.push(featureToAdd)
    })

    return features;
}