function createNPC_page() {
    createNPC_page_secured()
}

function createNPC_page_secured() {
    pageContent.innerHTML = `<h1> NPC Creation </h1>`
    pageContent.innerHTML += `

        <div class="container">
            
            <div class="input-group">
                <div class="input-group-prepend">
                    <label class="input-group-text">NPC Name</label>
                </div>
                    <input class="form-control" type="text" id="input_npcName"/>
            </div>

            <div class="row">
                <div class="col">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="input_npcAlignment">Alignment</label>
                        </div>
                            <select class="form-control" id="input_npcAlignment" onchange="checkAlignment()">
                                <option value="" selected disabled hidden>-- Select Alignment --</option>
                                <option value="Friendly">Friendly</option>
                                <option value="Neutral">Neutral</option>
                                <option value="Hostile">Hostile</option>
                            </select>
                    </div>
                </div>
            </div>

            <div id="professions" class="input-group" style="display: none;">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="input_profession">Profession</label>
                </div>
                    <select class="form-control" id="input_profession" onchange="checkProfession()">
                        <option value="" selected disabled hidden>-- Select Profession --</option>
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
                    </select>
            </div>

            <div id="shopList" class="input-group" style="display: none;">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="input_shopRef">Shop</label>
                </div>
                    <select class="form-control" id="input_shopRef">
                    <option value="" selected disabled hidden>-- Select Shop --</option>
                    </select>
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



        </div>
    `
}

$(function () {
    getShopIDs()
})

function checkAlignment(){
    let npcAlignment = $('#input_npcAlignment')
    if (npcAlignment.val() === 'Neutral'){
        $('#professions').show()
    } else {
        $('#professions').hide()
        $('#shopList').hide()
        $('#shopList').val('')
    }
    checkProfession()
}

function checkProfession() {
    // Priest, Shopkeeper, Innkeeper
    let professionShops = ['Shopkeeper', 'Innkeeper', 'Priest']
    let npcProfession = $('#input_profession')

    if (professionShops.includes(npcProfession.val())) {
        $('#shopList').show()
    } else {
        $('#shopList').hide()
        $('#shopList').val('')
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
            let shopReference = document.getElementById('input_shopRef')
            if (shopReference) {
                shopReference.innerHTML += shopIDs
            }
        }
    })
}

