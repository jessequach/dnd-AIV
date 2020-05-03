function createCharacter_page() {
    createCharacter_page_secured()
}

let characterPicture2Add; // file selected by addCharacterPicture button

function createCharacter_page_secured() {
    pageContent.innerHTML = '<h1> Character Creation </h1>'
    pageContent.innerHTML += `

        <div class="container">

            <div class="row">
                <div class="col">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <label class="input-group-text">First Name</label>
                        </div>
                            <input class="form-control" type="text" id="input_firstName"/>
                    </div>
                </div>
                <div class="col">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <label class="input-group-text">Last Name</label>
                        </div>
                            <input class="form-control" type="text" id="input_lastName"/>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="input_class">Class</label>
                            </div>
                                <select class="form-control" id="input_class">
                                    <option value="" selected disabled hidden>-- Select Class --</option>
                                    <option value="Barbarian">Barbarian</option>
                                    <option value="Bard">Bard</option>
                                    <option value="Cleric">Cleric</option>
                                    <option value="Druid">Druid</option>
                                    <option value="Fighter">Fighter</option>
                                    <option value="Monk">Monk</option>
                                    <option value="Paladin">Paladin</option>
                                    <option value="Ranger">Ranger</option>
                                    <option value="Rogue">Rogue</option>
                                    <option value="Sorcerer">Sorcerer</option>
                                    <option value="Warlock">Warlock</option>
                                    <option value="Wizard">Wizard</option>
                                </select>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="input_race">Race</label>
                            </div>
                                <select class="form-control" id="input_race">
                                    <option value="" selected disabled hidden>-- Select Race --</option>
                                    <option value="Dragonborn">Dragonborn</option>
                                    <option value="Dwarf">Dwarf</option>
                                    <option value="Elf">Elf</option>
                                    <option value="Gnome">Gnome</option>
                                    <option value="Half-Elf">Half-Elf</option>
                                    <option value="Halfling">Halfling</option>
                                    <option value="Half-Orc">Half-Orc</option>
                                    <option value="Human">Human</option>
                                    <option value="Tiefling">Tiefling</option>
                                </select>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="input_alignment">Alignment</label>
                            </div>
                                <select class="form-control" id="input_alignment">
                                    <option value="" selected disabled hidden>-- Select Alignment --</option>
                                    <option value="Lawful Good">Lawful Good</option>
                                    <option value="Neutral Good">Neutral Good</option>
                                    <option value="Chaotic Good">Chaotic Good</option>
                                    <option value="Lawful Neutral">Lawful Neutral</option>
                                    <option value="True Netural">True Netural</option>
                                    <option value="Lawful Neutral">Lawful Neutral</option>
                                    <option value="Lawful Evil">Lawful Evil</option>
                                    <option value="Neutral Evil">Neutral Evil</option>
                                    <option value="Chaotic Evil">Chaotic Evil</option>
                                </select>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <label class="input-group-text">STR</label>
                        </div>
                        <input class="input_stat form-control" type="number" min="3" max="18" value="3" id="input_str"/>
                    </div>
                </div>
                <div class="col">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <label class="input-group-text">DEX</label>
                        </div>
                        <input class="input_stat form-control" type="number" min="3" max="18" value="3" id="input_dex"/>
                    </div>
                </div>
                <div class="col">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <label class="input-group-text">CON</label>
                        </div>
                        <input class="input_stat form-control" type="number" min="3" max="18" value="3" id="input_con"/>
                    </div>
                </div>
                <div class="col">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <label class="input-group-text">INT</label>
                        </div>
                        <input class="input_stat form-control" type="number" min="3" max="18" value="3" id="input_int"/>
                    </div>
                </div>
                <div class="col">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <label class="input-group-text">WIS</label>
                        </div>
                        <input class="input_stat form-control" type="number" min="3" max="18" value="3" id="input_wis"/>
                    </div>
                </div>
                <div class="col">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <label class=" input-group-text">CHA</label>
                        </div>
                        <input class="input_stat form-control" type="number" min="3" max="18" value="3" id="input_cha"/>
                    </div>
                </div>
            </div>

            <div class="input-group">
                <div class="input-group-prepend">
                    <label class="input-group-text">Skills</label>
                </div>
                <select multiple class="form-control" id="input_skills">
                    <option value="Acrobatics">Acrobatics</option>
                    <option value="Animal Handling">Animal Handling</option>
                    <option value="Arcana">Arcana</option>
                    <option value="Athletics">Athletics</option>
                    <option value="Deception">Deception</option>
                    <option value="History">History</option>
                    <option value="Insight">Insight</option>
                    <option value="Intimidation">Intimidation</option>
                    <option value="Investigation">Investigation</option>
                    <option value="Medicine">Medicine</option>
                    <option value="Nature">Nature</option>
                    <option value="Perception">Perception</option>
                    <option value="Performance">Performance</option>
                    <option value="Persuasion">Persuasion</option>
                    <option value="Religion">Religion</option>
                    <option value="Sleight of Hand">Sleight of Hand</option>
                    <option value="Stealth">Stealth</option>
                    <option value="Survival">Survival</option>
                </select>
            </div>

            <div class="form-group">
                Character Appearance: <input type="file" id="addCharacterPicture" value="upload"/>
            </div>
            
            <button class="btn btn-primary" type="button" onclick="createCharacter()">Create Character</button>

        </div>

    `;

    const addCharacterPicture = document.getElementById('addCharacterPicture')
    addCharacterPicture.addEventListener('change', e => {
        characterPicture2Add = e.target.files[0]
        console.log('file upload', characterPicture2Add)
    })
}


// Returns character proficient skills as an array
function getSkills() {
    return arr = Array.from(document.getElementById("input_skills").options)
        .filter(option => option.selected)
        .map(option => option.value)
}

// Returns list of element object (ex: character stats) as a map
function getStats() {
    const obj = document.getElementsByClassName('input_stat')
    const statNames = ["STR", "DEX", "CON", "INT", "WIS", "CHA"]
    let statPoints = []
    let result = {};
    for (let n = obj.length >>> 0; n--;) {
        statPoints[n] = obj[n].value
        result[statNames[n]] = statPoints[n]
    }
    return result
}

// Returns hit dice corresponding with chosen class 
function getHitDice() {
    const _class = document.getElementById('input_class').value
    const classes = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard']
    const hitDices = [12, 8, 8, 8, 10, 8, 10, 10, 8, 6, 8, 6]
    let classesHitDices = {};
    for (let n = 0; n < classes.length; n++) {
        classesHitDices[classes[n]] = hitDices[n];
    }
    return classesHitDices[_class]
}

// Takes a stat value as a parameter and returns the stat modifier
function getStatModifier(stat) {
    return Math.floor((stat - 10) / 2)
}

function getBaseHP() {
    const hitDice = getHitDice()
    const CONSTITUTION = document.getElementById('input_con').value
    console.log('hitDice: ' + hitDice)
    console.log('con modifier: '+ getStatModifier(CONSTITUTION))
    return hitDice + getStatModifier(CONSTITUTION)
}

// Creates character
async function createCharacter() {
    const firstName = document.getElementById('input_firstName').value
    const lastName = document.getElementById('input_lastName').value
    const _class = document.getElementById('input_class').value
    const race = document.getElementById('input_race').value
    const alignment = document.getElementById('input_alignment').value
    const stats = getStats()
    const skills = getSkills()
    const hitdice = getHitDice()
    const hp = getBaseHP()

    // add character to firebase
    try {
        const image = Date.now() + characterPicture2Add.name
        const ref = firebase.storage().ref(STORAGE_CHARACTERS + image)
        const taskSnapshot = await ref.put(characterPicture2Add)
        const image_url = await taskSnapshot.ref.getDownloadURL()

        await firebase.firestore().collection(COLLECTION_CHARACTERS).doc()
            .set({
                firstName, lastName, _class, race, alignment, stats, skills, image, image_url,
                'exp': 0, 'level': 1, hitdice, hp
            })

        alert('added character')

    } catch (e) {
        alert('Error! ' + e)
    }

}