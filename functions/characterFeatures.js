module.exports = {
    features: function (classname) {
        let featureNames
        let featureDescription

        switch (classname) {
            case "Fighter": return [`testdata`]
            case "Monk":

                featureNames = [
                    `Unarmored Defense`,`Martial Arts`,              `Ki`,                 `Flurry of Blows`, 
                    `Patient Defense`,  `Step of the Wind`,          `Unarmored Movement`, `Monastic Tradition`,
                    `Deflect Missles`,  `Ability Score Improvement`, `Slow Fall`,          `Extra Attack`,
                    `Stunning Strike`,  `Ki-Empowered Strikes`,      `Stillness of Mind`,  `Evasion`,
                    `Purity of Body`,   `Tongue of the Sun and Moon`,`Diamond Soul`,       `Timeless Body`, 
                    `Empty Body`,       `Perfect Soul`,              `Monastic Traditions`,
                ]
                featureDescription = [
                    `While not wearing armor and not wielding a shield, AC equals (10 + monkDexMod + monkWisMod)`,
                    `Mastery of Combat styles that use unarmed strikes and monk Weapons. <span id=&quot; popover-italics &quot;>(Shortswords/simple Melee Weapons that don't have 2h or heavy property)</span> <br/>
                    Gain the following benefits while unarmed or wielding only Monk weapons while not wearing armor or Shield. <br/>
                    • Can use Dex instead of Str for the Attack and Damage Rolls of your unarmed strikes and monk Weapons. <br/>
                    • Can roll a d4 in place of the normal dage of Unarmed Strike or monk weapon. <br/>
                    • When Attack action with an Unarmed Strike or Monk weapon on Your Turn, can make one Unarmed Strike as a Bonus Action. `,
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