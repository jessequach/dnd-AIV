module.exports = {
    features: function (classname) {
        switch (classname) {
            case "Barbarian":
                let barbarianFeatureNames = [`Rage`, `Unarmored Defense`, `Danger Sense`, `Reckless Attack`,
                    `Primal Path`, `Ability Score Improvement`, `Extra Attack`, `Fast Movement`, `Feral Instinct`,
                    `Brutal Critical`, `Relentless Rage`, `Persistent Rage`, `Indomitable Might`, `Primal Champion`]
                let barbarianFeatureData = [
                    `On your turn, you can enter rage as a Bonus Action <br/>
                While raging, gain the following benefits if you are not wearing heavy armor: <br/>
                - Advantage on Strength Checks and Strength Saving Throws.
                - +2 bonus to damage roll when using a melee weapon Attack using Strength. This bonus increases as you level.
                - Resistance to bludgeoning, piercing, and slashing damage.
                Cannot cast or concentrate on spellcasting while raging.
                Rage lasts 1 minute and will end early from being <br/>
                - knocked unconscious <br/>
                - turn ends without attacking a hostile since your last turn or taken damage since then. <br/>
                Can also end rage on turn as a Bonus Action.
                Must Long Rest before being able to rage again after raging the maximum # of times depending on your level.
                
                <div class=container>
                    <div class=row>
                        <div class=col>Level</div>
                        <div class=col>Maximum Rage</div>
                    </div>
                    <div class=row>
                        <div class=col>1</div>
                        <div class=col>2</div>
                    </div>
                    <div class=row>
                        <div class=col>3</div>
                        <div class=col>3</div>
                    </div>
                    <div class=row>
                        <div class=col>6</div>
                        <div class=col>4</div>
                    </div>
                    <div class=row>
                        <div class=col>12</div>
                        <div class=col>5</div>
                    </div>
                    <div class=row>
                        <div class=col>17</div>
                        <div class=col>6</div>
                    </div>
                </div>

                `,
                    `Armor Class = (10 + dexMod + conMod) when not wearing armor (excluding Shield).
                `,
                    `At 2nd level, you can sense when things nearby shouldn't be.
                `,
                    `ra`,
                    `pp`,
                    `asi`,
                    `ea`,
                    `fm`,
                    `fi`,
                    `bc`, `rr`, `pr`, `im`, `pc`
                ]

                return createFeatures(barbarianFeatureNames, barbarianFeatureData);

            case "Wizard": return [`wizard`, `placeholder`]
        }
    }
}

function createFeatures(fNames, fData) {
    let features = []

    // for (let index = fNames.length - 1; index >= 0; index--) {

    //     let featureToAdd = `
    //     <button 
    //         type="button"
    //         data-toggle="popover"
    //         data-content="${fData[index]}">
    //         ${fNames[index]}
    //     </button>
    //     `

    //     console.log('fNames[index]', `${fNames[index]}`)

    //     features.push(featureToAdd)
    // }

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
        console.log('fNames[index]', `${fNames[index]}`)

        features.push(featureToAdd)
    })

    return features;
}
