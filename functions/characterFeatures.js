module.exports = {
    getFeatures: function (classname) {
        let featureNames
        let featureDescriptions

        switch (classname) {
            case "Fighter":
                featureNames = [
                    `Fighting Style`, `Second Wind`, `Action Surge`, `Martial Archetype`,
                    `Ability Score Improvement`, `Extra Attack`, `Indomitable`,]
                featureDescriptions = [
                    `You adopt a particular style of fighting as your specialty. Choose a Fighting Style from the list of optional features. You can’t take the same Fighting Style option more than once, even if you get to choose again. <br/>
                        <span class='feature'>Archery</span>: You gain a +2 bonus to attack rolls you make with ranged weapons. <br/>
                        <span class='feature'>Defense</span>: While you are wearing armor, you gain a +1 bonus to AC. <br/>
                        <span class='feature'>Dueling</span>: When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon. <br/>
                        <span class='feature'>Great Weapon Fighting</span>: When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit. <br/>
                        <span class='feature'>Protection</span>: When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield. <br/>
                        <span class='feature'>Two-Weapon Fighting</span>: When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.`,
                    `You have a limited well of stamina that you can draw on to protect yourself from harm. On Your Turn, you can use a Bonus Action to regain Hit Points equal to 1d10 + your Fighter level. <br/>
                        Once you use this feature, you must finish a short or Long Rest before you can use it again.`,
                    `Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On Your Turn, you can take one additional action on top of your regular action and a possible Bonus Action. <br/>
                        Once you use this feature, you must finish a short or Long Rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn.`,
                    `At 3rd level, you choose an archetype that you strive to emulate in your Combat styles and Techniques, such as Champion. The archetype you choose grants you features at 3rd level and again at 7th, 10th, 15th, and 18th level.`,
                    `When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two Ability Scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.`,
                    `Beginning at 5th level, you can Attack twice, instead of once, whenever you take the Attack action on Your Turn. <br/>
                        The number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class.`,
                    `Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can’t use this feature again until you finish a Long Rest. <br/>
                        You can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level.`,
                ]
                return createFeatures(featureNames, featureDescriptions)
            case "Monk":

                featureNames = [
                    `Unarmored Defense`, `Martial Arts`, `Ki`, `Unarmored Movement`,
                    `Monastic Tradition`, `Deflect Missles`, `Ability Score Improvement`, `Slow Fall`,
                    `Extra Attack`, `Stunning Strike`, `Ki-Empowered Strikes`, `Stillness of Mind`,
                    `Evasion`, `Purity of Body`, `Tongue of the Sun and Moon`, `Diamond Soul`,
                    `Timeless Body`, `Empty Body`, `Perfect Soul`,
                ]
                featureDescriptions = [
                    `Beginning at 1st level, while you are wearing no armor and not wielding a Shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.`,
                    `Your practice of martial arts gives you mastery of Combat styles that use unarmed strikes and monk Weapons, which are shortswords and any simple Melee Weapons that don’t have the Two-Handed or heavy property. <br/>
                        You gain the following benefits while you are unarmed or wielding only monk Weapons and you aren’t wearing armor or wielding a Shield. <br/>
                        • You can use Dexterity instead of Strength for the Attack and Damage Rolls of your unarmed strikes and monk Weapons. <br/>
                        • You can roll a d4 in place of the normal damage of your Unarmed Strike or monk weapon. <br/>
                        • When you use the Attack action with an Unarmed Strike or a monk weapon on Your Turn, you can make one Unarmed Strike as a Bonus Action. <br/>`,
                    `Starting at 2nd level, your Training allows you to harness The Mystic energy of ki. Your access to this energy is represented by a number of ki points. Your monk level determines the number of points you have, as shown in the Ki Points column of the Monk table.
                        You can spend these points to fuel various ki features. You start knowing three such features: <br/><br/>
                        
                        <span class='feature'>Flurry of Blows</span> <hr/>
                        Immediately after you take the Attack action on Your Turn, you can spend 1 ki point to make two unarmed strikes as a Bonus Action. <br/><br/>
                        <span class='feature'>Patient Defense</span> <hr/>
                        You can spend 1 ki point to take the Dodge action as a Bonus Action on Your Turn. <br/><br/>
                        <span class='feature'>Step of the Wind</span> <hr/>
                        You can spend 1 ki point to take the Disengage or Dash action as a Bonus Action on Your Turn, and your jump distance is doubled for the turn. <br/><br/>
                        
                        You learn more ki features as you gain levels in this class. When you spend a ki point, it is unavailable until you finish a short or Long Rest, at the end of which you draw all of your expended ki back into yourself. You must spend at least 30 minutes of the rest meditating to regain your ki points.
                        Some of your ki features require your target to make a saving throw to resist the feature’s Effects. The saving throw DC is calculated as follows:
                        Ki save DC = 8 + your Proficiency Bonus + your Wisdom modifier`,
                    `Starting at 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a Shield. This bonus increases when you reach certain monk levels, as shown in the Monk table.
                        At 9th level, you gain the ability to move along vertical surfaces and across liquids on Your Turn without Falling during the move.`,
                    `When you reach 3rd level, you commit yourself to a monastic tradition, such as the Way of the Open Hand. Your tradition grants you features at 3rd level and again at 6th, 11th, and 17th level.`,
                    `Starting at 3rd level, you can use your Reaction to deflect or catch the missile when you are hit by a ranged weapon Attack. When you do so, the damage you take from the Attack is reduced by 1d 10 + your Dexterity modifier + your monk level.
                    If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free. If you catch a missile in this way, you can spend 1 ki point to make a ranged Attack (range 20 feet/60 feet) with the weapon or piece of Ammunition you just caught, as part of the same Reaction. You make this Attack with proficiency, regardless of your weapon proficiencies, and the missile counts as a monk weapon for the Attack.`,
                    `When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two Ability Scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.`,
                    `Beginning at 4th level, you can use your Reaction when you fall to reduce any Falling damage you take by an amount equal to five times your monk level.`,
                    `Beginning at 5th level, you can Attack twice, instead of once, whenever you take the Attack action on Your Turn.`,
                    `Starting at 5th level, you can interfere with the flow of ki in an opponent’s body. When you hit another creature with a melee weapon Attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be Stunned until the end of your next turn.`,
                    `Starting at 6th level, your unarmed strikes count as magical for the purpose of overcoming Resistance and immunity to nonmagical attacks and damage.`,
                    `Starting at 7th level, you can use your action to end one effect on yourself that is causing you to be Charmed or Frightened.`,
                    `At 7th level, your instinctive agility lets you dodge out of the way of certain area Effects, such as a blue dragon’s lightning breath or a Fireball spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.`,
                    `At 10th level, your mastery of the ki flowing through you makes you immune to disease and poison.`,
                    `Starting at 13th level, you learn to touch the ki of other minds so that you understand all spoken Languages. Moreover, any creature that can understand a language can understand what you say.`,
                    `Beginning at 14th level, your mastery of ki grants you proficiency in all Saving Throws. <br/>
                    Additionally, whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the second result.`,
                    `At 15th level, your ki sustains you so that you suffer none of the frailty of old age, and you can’t be aged magically. You can still die of old age, however. In addition, you no longer need food or water.`,
                    `Beginning at 18th level, you can use your action to spend 4 ki points to become Invisible for 1 minute. During that time, you also have Resistance to all damage but force damage. <br/>
                    Additionally, you can spend 8 ki points to cast the Astral Projection spell, without needing material Components. When you do so, you can’t take any other creatures with you.`,
                    `At 20th level, when you roll for Initiative and have no ki points remaining, you regain 4 ki points.`,
                ]
                return createFeatures(featureNames, featureDescriptions)

            case "Rogue":
                featureNames = [
                    `Expertise`, `Sneak Attack`, `Thieves' Cant`, `Cunning Action`,
                    `Roguish Archetype`, `Ability Score Improvement`, `Uncanny Dodge`, `Evasion`,
                    `Reliable Talent`, `Blindsense`, `Slippery Mind`, `Elusive`,
                    `Stroke of Luck`,
                ]
                featureDescriptions = [
                    `At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with Thieves’ Tools. Your Proficiency Bonus is doubled for any ability check you make that uses either of the chosen proficiencies. <br/>
                    At 6th level, you can choose two more of your proficiencies (in Skills or with thieves’ tools) to gain this benefit.`,
                    `Beginning at 1st level, you know how to strike subtly and exploit a foe’s distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an Attack if you have advantage on the Attack roll. The Attack must use a Finesse or a ranged weapon. <br/>
                    You don’t need advantage on the Attack roll if another enemy of the target is within 5 feet of it, that enemy isn’t Incapacitated, and you don’t have disadvantage on the Attack roll. <br/>
                    The amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table.`,
                    `During your rogue Training you learned thieves’ cant, a Secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves’ cant understands such messages. It takes four times longer to convey such a Message than it does to speak the same idea plainly. <br/>
                    In addition, you understand a set of Secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves’ guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a Safe House for thieves on the run.`,
                    `Starting at 2nd level, your quick thinking and agility allow you to move and act quickly. You can take a Bonus Action on each of your turns in Combat. This action can be used only to take the Dash, Disengage, or Hide action.`,
                    `At 3rd level, you choose an archetype that you emulate in the exercise of your rogue Abilities, such as Thief. Your archetype choice grants you features at 3rd level and then again at 9th, 13th, and 17th level.`,
                    `When you reach 4th level, and again at 8th, 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two Ability Scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.`,
                    `Starting at 5th level, when an attacker that you can see hits you with an Attack, you can use your Reaction to halve the attack’s damage against you.`,
                    `Beginning at 7th level, you can nimbly dodge out of the way of certain area Effects, such as a red dragon’s fiery breath or an Ice Storm spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.`,
                    `By 11th level, you have refined your chosen Skills until they approach perfection. Whenever you make an ability check that lets you add your Proficiency Bonus, you can treat a d20 roll of 9 or lower as a 10.`,
                    `Starting at 14th level, if you are able to hear, you are aware of the location of any hidden or Invisible creature within 10 feet of you.`,
                    `By 15th level, you have acquired greater mental Strength. You gain proficiency in Wisdom Saving Throws.`,
                    `Beginning at 18th level, you are so evasive that attackers rarely gain the upper hand against you. No Attack roll has advantage against you while you aren’t Incapacitated.`,
                    `At 20th level, you have an uncanny knack for succeeding when you need to. If your Attack misses a target within range, you can turn the miss into a hit. Alternatively, if you fail an ability check, you can treat The D20 roll as a 20. <br/>
                    Once you use this feature, you can’t use it again until you finish a short or Long Rest.`,
                ]
                return createFeatures(featureNames, featureDescriptions)

            case "Wizard":
                featureNames = [
                    `Spellcasting`, `Arcane Recovery`, `Arcane Tradition`, `Ability Score Improvement`,
                    `Spell Mastery`, `Signature Spells`,
                ]
                featureDescriptions = [
                    `tbc`,
                    `You have learned to regain some of your magical energy by studying your Spellbook. Once per day when you finish a Short Rest, you can choose expended Spell Slots to recover. The Spell Slots can have a combined level that is equal to or less than half your Wizard level (rounded up), and none of the slots can be 6th level or higher. <br/>
                    For example, if you’re a 4th-level Wizard, you can recover up to two levels worth of Spell Slots. You can recover either a 2nd-level spell slot or two 1st-level Spell Slots.`,
                    `When you reach 2nd level, you choose an arcane tradition, shaping your practice of magic through one of eight schools, such as Evocation. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level.`,
                    `When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two Ability Scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.`,
                    `At 18th level, you have achieved such mastery over certain Spells that you can cast them at will. <br/>
                        Choose a 1st-level Wizard spell and a 2nd-level Wizard spell that are in your Spellbook. <br/>
                        You can cast those Spells at their lowest level without expending a spell slot when you have them prepared. <br/>
                        If you want to cast either spell at a higher level, you must expend a spell slot as normal. <br/>
                    By spending 8 hours in study, you can exchange one or both of the Spells you chose for different Spells of the same levels.`,
                    `When you reach 20th level, you gain mastery over two powerful Spells and can cast them with little effort. Choose two 3rd-level Wizard Spells in your Spellbook as your signature Spells. You always have these Spells prepared, they don’t count against the number of Spells you have prepared, and you can cast each of them once at 3rd level without expending a spell slot. When you do so, you can’t do so again until you finish a short or Long Rest. <br/>
                    If you want to cast either spell at a higher level, you must expend a spell slot as normal.`,
                ]
                return createFeatures(featureNames, featureDescriptions)


        }
    },
    getSubclasses: function (classname) {
        let subclassNames
        let subclassDescriptions

        switch (classname) {
            case "Fighter":
                subclassNames = ['Elven Archer', 'Samurai']
                subclassDescriptions = [
                    `Elven archers have trained with the bow for more than a hundred years before most other races ever engage in their first battle. Their aim is true, and they consider archery an art, as much as it is a tool of war. <br/>
                        <span class="feature">Elven Archery</span>: At 3rd level, you may spend a bonus action to gain a bonus on one ranged attack roll equal 1/2 your proficiency bonus. <br/>
                        <span class="feature">Precise Targeting</span>: At 7th level, your attacks are so precise that all of your ranged attacks score a critical hit on a roll of 19-20. <br/>
                        <span class="feature">Volley</span>: At 10th level, you can use his action to make a ranged attack against any number of targets within a 20 foot cube. You make attacks as normal against each target. <br/>
                        <span class="feature">Perfect Aim</span>: At 15th level, the elven archer never suffers disadvantage on ranged attack rolls within 30 feet. <br/>
                        <span class="feature">Deadly Targeting</span>: At 18th level, the elven archer’s ranged attacks score critical hits on 18-20. <br/>
                    `,
                    `The samurai is a militaristic servant of a great leader, one who follows a strict code of adherence and is practiced in a number of martial and artistic doctrines. They live their lives by an honorable code, which dictates how they live, fight and die. <br/>
                        Masters of the art of warfare, they blend the art of combat into a single, deadly function. <br/>
                        <span class="feature">Way of the Warrior</span>: At 3rd level, the samurai gains proficiency with the katana. He can use longswords and katanas as finesse weapons. Samurai also gain the optional Honor statistic (see the DMG) and must hold loyalty, courage, veracity, compassion and honor as important, above all else. <br/>
                        In addition, choose one of the following abilities: <br/>
                            <span class="feature">One Cut</span>. As a bonus action, a samurai wielding a longsword (or katana) can make a single attack with their weapon against two adjacent foes within reach simultaneously. Use the single attack roll and damage against both targets. <br/>
                            <span class="feature">Mounted Archer</span>. You suffer no penalties for firing ranged weapons from the back of a mount. <br/>
                            <span class="feature">Courtier</span>. You gain a bonus equal to half of your proficiency bonus on all Insight and Persuasion skill checks. <br/>
                        <span class="feature"Ki Powers</span>: At 7th level, the samurai has learned to harness his ki, a vast reservoir of inner spiritual strength. <br/>
                        Choose from one of the following powers: <br/>
                            <span class="feature">Kiai Strike</span>. You can perform a kiai strike. When doing so, you add your Charisma bonus to attack and damage rolls. <br/>
                            <span class="feature">Kiai Shout</span>. You can perform a kiai shout. When you do, all enemies that can see and hear you within 30 feet must succeed at a Wisdom save or become frightened of you for a number of rounds equal to your Charisma modifier. <br/>
                            <span class="feature">Ki Awareness</span>. You may enter a Ki Awareness state as a bonus action. Entering this state allows imposes disadvantage on all attacks against and grants you advantage on Dexterity saves for one round. <br/>
                        Whichever ability you choose, you can use it once, and you must finish a short or long rest to do so again. At 10th, 15th, and 18th level you can perform that ability one additional time per rest. <br/>
                        <span class="feature">Death Before Dishonor</span>: At 10th level, the samurai’s code of honor is so strong he is much less likely to succumb to mundane temptations and even magical enchantments find it difficult to ensnare him. You gain proficiency with Wisdom saves. If you are already proficient with Wisdom saves, you instead gain a bonus of half your proficiency bonus to Wisdom saves. <br/>
                        <span class="feature">Banner</span>: At 15th level, the samurai’s name and banner are symbols of hope and righteousness. This banner serves to inspire and empower those around the samurai to greatness. All allies within 60’ gain +5 temporary hit points and a +1d4 bonus to attack rolls. These benefits last for one hour or as long as the samurai is not reduced to 0 hit points, incapacitated or dead, whichever comes first. <br/>
                        These bonuses do not stack with other bonuses to attacks or temporary hit points. <br/>
                        <span class="feature">Deathstroke</span>: At 18th level, whenever the samurai attacks with a shortsword, longsword, katana or bow, his weapons deal critical hits on natural 18s, 19s and 20s. <br/>
                        <span class="feature">Samurai Code</span>: **The code of the samurai is one of the balancing factors of the archetype. GMs should make sure that characters are living true to their archetype’s nature, and if not, ensure there are consequences.**
                    `,
                ]
                return createSubclasses(subclassNames, subclassDescriptions)
            case "Monk":
                break;
            case "Rogue":
                break;
            case "Wizard":
                break;
        }
    }
}

function createFeatures(featureNames, featureDescriptions) {
    let features = []
    featureNames.forEach((value, index) => {
        let featureToAdd = `
            <button 
                class="btn btn-primary-outline feature-name"
                type="button"
                data-toggle="popover"
                data-content="${featureDescriptions[index]}"
                style="color: white; text-shadow: 2px 2px black;"
                >
                ${featureNames[index]}
            </button>
        `
        features.push(featureToAdd)
    })

    return features;
}

function createSubclasses(subclassNames, subclassDescriptions) {
    let subclasses = []
    subclassNames.forEach((value, index) => {
        let subclassToAdd = `
            <div class="page-subclass page-content">
                <h2 style="color: white;">${subclassNames[index]}</h2>
                <p>
                    ${subclassDescriptions[index]}
                </p>
            </div>
        `
        subclasses.push(subclassToAdd)
    })
    return subclasses;
}