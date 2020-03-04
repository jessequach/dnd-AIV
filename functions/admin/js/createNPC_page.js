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

            <div class="input-group-prepend">
                <div class="input-group-text" for="input_shopRef">Shop</label>
            </div>
                <select class="form-control" id="input_shopRef">
                </select>

        </div>
    `
}

$(function(){
    getShopIDs()
})

function getShopIDs() {
    $.ajax({
        url: 'shops/',
        type: 'GET',
        dataType: 'json',
        success: (shops) => {
            let shopIDs = ""
            for (let shop of shops){
                shopIDs += `<option value="${shop['id']}">` + shop['id'] + `</option>`
            }
            document.getElementById('input_shopRef').innerHTML = shopIDs
        }
    })
}

