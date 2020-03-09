function createNPC_page() {
    createNPC_page_secured()
}

function createNPC_page_secured() {
    pageContent.innerHTML = `<h1> NPC Creation </h1>`
    pageContent.innerHTML += `

        <div class="container">
            
            <div class="input-group">
                <div class="input-group-prepend">
                    <label class="input-group-text">Name</label>
                </div>
                    <input class="form-control" type="text" id="input_npcName"/>
            </div>

            <div class="row">
                <div class="col">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="input_npcAlignment">Alignment</label>
                        </div>
                            <select class="form-control" id="input_npcAlignment">
                                <option value="" selected>-- Select Alignment --</option>
                                <option value="Friendly">Friendly</option>
                                <option value="Neutral">Neutral</option>
                                <option value="Hostile">Hostile</option>
                            </select>
                    </div>
                </div>
            </div>

            <div id="professions" class="input-group">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="input_npcProfession">Profession</label>
                </div>
                    <select class="form-control" id="input_npcProfession">
                        <option value="" selected>-- Select Profession --</option>
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

            <div id="shopList" class="input-group">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="input_npcShopRef">Shop</label>
                </div>
                    <select class="form-control" id="input_npcShopRef">
                    <option value="" selected disabled hidden>-- Select Shop --</option>
                    <option value="">None</option>
                    </select>
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
                shopIDs += `<option value="${shop['id']}">` + shop['id'] + `</option>`
            }
            let shopReference = document.getElementById('input_npcShopRef')
            if (shopReference) {
                shopReference.innerHTML += shopIDs
            }
        }
    })
}

async function createNPC() {
    const npcName = document.getElementById('input_npcName').value
    const npcID = npcName.replace(/\s|'/g, "")
    const npcAlignment = document.getElementById('input_npcAlignment').value
    const npcProfession = document.getElementById('input_npcProfession').value
    const npcShopID = document.getElementById('input_npcShopRef').value
    const npcStats = getStats()

    // add npc to firebase
    try {
        let documentReference = await firebase.firestore().collection(COLLECTION_SHOPS).doc(npcID).get()
        if (documentReference.exists) {
            alert('shop already exists')
        } else {
            await firebase.firestore().collection(COLLECTION_NPCS).doc(npcID).set({
                'npcID': npcID,
                'name': npcName,
                'alignment': npcAlignment,
                'profession': npcProfession,
                'shopID': npcShopID,
                'stats': npcStats
            })
            alert('added npc')
            itemList = []
            printedItems.innerHTML = ""
        }
    } catch (e) {
        alert('Error! ' + e)
    }
}

