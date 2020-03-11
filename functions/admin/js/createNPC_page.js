function createNPC_page() {
    createNPC_page_secured()
}

let actionList = []

function createNPC_page_secured() {
    pageContent.innerHTML = `<h1> NPC Creation </h1>`
    pageContent.innerHTML += `

        <div class="container">
            
            <div id="name" class="input-group">
                <div class="input-group-prepend">
                    <label class="input-group-text">Name</label>
                </div>
                    <input class="form-control" type="text" id="input_npcName"/>
            </div>

            <div id="alignment_and_health" class="row">
                <div class="col">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="input_npcAlignment">Alignment</label>
                        </div>
                            <select class="form-control" id="input_npcAlignment" onchange="checkAlignment()">
                                <option value="" selected disabled hidden>-- Select Alignment --</option>
                                <option value="Neutral">Neutral</option>
                                <option value="Hostile">Hostile</option>
                            </select>
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="input_npcHealth">Health</label>
                            </div>
                                <input class="form-control" type="number" id="input_npcHealth"/>
                        </div>
                    </div>
                </div>
            </div>

            <div id="neutralOnly" class="row" style="display: none;">
                <div class="col">                
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="input_npcProfession">Profession</label>
                        </div>
                            <select class="form-control" id="input_npcProfession">
                                <option value="" selected hidden>-- Select Profession --</option>
                                <option value="Aristocrat">Aristocrat</option>
                                <option value="Artisan">Artisan</option>
                                <option value="Beggar">Beggar</option>
                                <option value="Farmer">Farmer</option>
                                <option value="Fisher">Fisher</option>
                                <option value="Innkeeper">Innkeeper</option>
                                <option value="Logger">Logger</option>
                                <option value="Miner">Miner</option>
                                <option value="Priest">Priest</option>
                                <option value="Shopkeeper">Shopkeeper</option>
                                <option value="other">Other</option>
                            </select>
                    </div>
                </div>
                <div class="col">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="input_npcShopRef">Shop</label>
                        </div>
                            <select class="form-control" id="input_npcShopRef">
                            <option value="" selected hidden>-- Select Shop --</option>
                            <option value="">None</option>
                            </select>
                    </div>
                </div>
            </div>

            <div id="hostileOnly" style="display: none;">
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="input_npcAC">Armor Class</label>
                                </div>
                                    <input class="form-control" type="number" id="input_npcAC"/>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="input_npcSpeed">Speed</label>
                                </div>
                                    <input class="form-control" type="number" id="input_npcSpeed"/>
                            </div>
                        </div>
                    </div>
                </div>
                <form id="actionForm">
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <label class="input-group-text" for="input_npcActionName">Action Name</label>
                                    </div>
                                        <input class="form-control" type="text" id="input_npcActionName"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <label class="input-group-text" for="input_npcActionDesc">Action Description</label>
                                    </div>
                                        <textarea class="form-control" id="input_npcActionDesc" rows="4"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

                    <div id="actionList"></div>
                    <button type="button" class="btn btn-primary" style="margin-bottom: 3%" onclick="addAction()">Add Action</button>
            </div>

            <div id="stats" class="row">
                <div class="col">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <label class="input-group-text">STR</label>
                        </div>
                        <input class="input_stat form-control" type="number" min="6" max="16" value="3" id="input_str"/>
                    </div>
                </div>
                <div class="col">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <label class="input-group-text">DEX</label>
                        </div>
                        <input class="input_stat form-control" type="number" min="6" max="16" value="3" id="input_dex"/>
                    </div>
                </div>
                <div class="col">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <label class="input-group-text">CON</label>
                        </div>
                        <input class="input_stat form-control" type="number" min="6" max="16" value="3" id="input_con"/>
                    </div>
                </div>
                <div class="col">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <label class="input-group-text">INT</label>
                        </div>
                        <input class="input_stat form-control" type="number" min="6" max="16" value="3" id="input_int"/>
                    </div>
                </div>
                <div class="col">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <label class="input-group-text">WIS</label>
                        </div>
                        <input class="input_stat form-control" type="number" min="6" max="16" value="3" id="input_wis"/>
                    </div>
                </div>
                <div class="col">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <label class=" input-group-text">CHA</label>
                        </div>
                        <input class="input_stat form-control" type="number" min="6" max="16" value="3" id="input_cha"/>
                    </div>
                </div>
            </div>

            <div id="skills" class="input-group">
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

            <button class="btn btn-primary" onclick="randomizeStats()">Randomize Stats</button>
            <button class="btn btn-primary" onclick="createNPC()">Create NPC</button>

        </div>
    `
}

$(document).ready(function () {
    getShopIDs()
})

$(window).on('load', function () {
    randomizeStats()
})

function checkAlignment(){
    let npcAlignment = $('#input_npcAlignment')
    if (npcAlignment.val() === 'Neutral'){
        $('#neutralOnly').show()
        $('#hostileOnly').hide()
        $('#input_npcAC').val(0)
        $('#input_npcSpeed').val(0)
    } else {
        $('#neutralOnly').hide()
        $('#hostileOnly').show()
        $('#input_npcProfession').val('')
        $('#input_npcShopRef').val('')        
    }
}

function randomStat(min, max) {
    return Math.floor(Math.random() * (1 + max - min)) + min
}

function randomizeStats() {
    let stats = document.getElementsByClassName('input_stat')
    for (let i = 0; i < stats.length; i++) {
        stats[i].value = randomStat(6, 16)
    }
}

function getShopIDs() {
    $.ajax({
        url: 'shops/',
        type: 'GET',
        dataType: 'json',
        success: (shops) => {
            let shopIDs = ""
            for (let shop of shops) {
                shopIDs += `<option value="${shop['id']}">${shop['id']}</option>`
            }
            let shopReference = document.getElementById('input_npcShopRef')
            if (shopReference) {
                shopReference.innerHTML += shopIDs
            }
        }
    })
}

function addAction(){
    const actionName = document.getElementById('input_npcActionName').value
    const actionDesc = document.getElementById('input_npcActionDesc').value
    let newAction = { 'action': actionName, 'description': actionDesc }
    actionList.push(newAction)
    document.getElementById('actionForm').reset()
    document.getElementById('input_npcActionName').focus()
    
    let printedActions = document.getElementById('actionList')
    printedActions.innerHTML += `
    <div>
        ${newAction.action}:
        ${newAction.description}
    </div>
    `
}

async function createNPC() {
    const npcName = document.getElementById('input_npcName').value
    const npcID = npcName.replace(/\s|'/g, "")
    const npcAlignment = document.getElementById('input_npcAlignment').value
    const npcProfession = document.getElementById('input_npcProfession').value
    const npcShopID = document.getElementById('input_npcShopRef').value
    const npcAC = document.getElementById('input_npcAC')
    const npcSpeed = document.getElementById('input_npcSpeed')
    const npcStats = getStats()
    const npcSkills = getSkills()

    // add npc to firebase
    try {
        let documentReference = await firebase.firestore().collection(COLLECTION_SHOPS).doc(npcID).get()
        if (documentReference.exists) {
            alert('shop already exists')
        } else {
            if (npcAlignment === 'Neutral'){ // Add a Neutral NPC
                await firebase.firestore().collection(COLLECTION_NPCS).doc(npcID).set({
                    'npcID': npcID,
                    'name': npcName,
                    'alignment': npcAlignment,
                    'profession': npcProfession,
                    'shopID': npcShopID,
                    'stats': npcStats,
                    'skills': npcSkills,
                })
            } else { // Add a Hostile NPC

            }
            await firebase.firestore().collection(COLLECTION_NPCS).doc(npcID).set({
                'npcID': npcID,
                'name': npcName,
                'alignment': npcAlignment,
                'ac': npcAC,
                'speed': npcSpeed,
                'stats': npcStats,
                'skills': npcSkills,
            })
            alert('added npc')
            itemList = []
            printedItems.innerHTML = ""
        }
    } catch (e) {
        alert('Error! ' + e)
    }
}

