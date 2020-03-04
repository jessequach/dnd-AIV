function createShop_page() {
    createShop_page_secured()
}

let shopName
let itemList = []
let printedItems = ""

function createShop_page_secured() {
    pageContent.innerHTML = '<h1> Shop Creation </h1>'
    pageContent.innerHTML += `

        <div class="container">
        
            <div class="input-group">
                <div class="input-group-prepend">
                    <label class="input-group-text">Shop Name</label>
                </div>
                    <input class="form-control" type="text" id="input_shopName"/>
            </div>

            <form id="itemForm">
            <div class="row">
                <div class="col">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <label class="input-group-text">Item Name</label>
                        </div>
                            <input type="text" class="form-control" id="input_itemName">
                    </div>
                </div>
                <div class="col">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <label class="input-group-text">Price (gp)</label>
                        </div>
                            <input type="number" class="form-control" id="input_itemPrice">
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="input_itemType">Type</label>
                            </div>
                                <select class="form-control" id="input_itemType" onchange="getSubtypes()">
                                    <option value="" selected disabled hidden>-- Select Type --</option>
                                    <option value="Adventuring Gear">Adventuring Gear</option>
                                    <option value="Armor">Armor</option>
                                    <option value="Magic Items">Magic Item</option>
                                    <option value="Services">Service</option>
                                    <option value="Tools">Tool</option>
                                    <option value="Weapons">Weapon</option>
                                </select>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="input_itemSubtype">Subtype</label>
                            </div>
                                <select class="form-control" id="input_itemSubtype">
                                </select>
                        </div>
                    </div>
                </div>
            </form>
            </div>
                <div id="itemList" style="padding-bottom: 1%;"></div>
                <button type="button" class="btn btn-primary" onclick="addItem()">Add Item</button>
                <button type="button" class="btn btn-primary" onclick="createShop()">Create Shop</button>

        </div>
    `
}

function addItem() {
    const itemName = document.getElementById('input_itemName').value
    const itemPrice = document.getElementById('input_itemPrice').value
    const itemType = document.getElementById('input_itemType').value
    const itemSubtype = document.getElementById('input_itemSubtype').value
    let newItem = { 'name': itemName, 'price': itemPrice, 'type': itemType, 'subtype': itemSubtype }
    itemList.push(newItem)
    document.getElementById('itemForm').reset()
    document.getElementById('input_itemName').focus()
    
    printedItems = document.getElementById('itemList')
    printedItems.innerHTML += `
    <div>
        ${newItem.name},
        ${newItem.price},
        ${newItem.type},
        ${newItem.subtype},
    </div>
    `
}

function changeSubtypes(subtypes) {
    let result = ""
    for (let subtype of subtypes) {
        result += `<option value="${subtype}">` + subtype + `</option>`
    }
    document.getElementById('input_itemSubtype').innerHTML = result
}

function getSubtypes() {
    let subtypes
    let type = document.getElementById('input_itemType')
    if (type.value != '') {
        switch (type.value) {
            case 'Armor':
                subtypes = ['None', 'Light', 'Medium', 'Heavy', 'Shield']
                changeSubtypes(subtypes)
                break;
            case 'Adventuring Gear':
                subtypes = ['None', 'Ammunition', 'Holy Symbol', 'Arcane Focus',]
                changeSubtypes(subtypes)
                break;
            case 'Magic Items':
                subtypes = ['None', 'Spell Scrolls/Gems', 'Potions']
                changeSubtypes(subtypes)
                break;
            case 'Services':
                subtypes = ['None', 'Spellcasting', 'Magic Appraisal', 'RIAS GREMORY']
                changeSubtypes(subtypes)
                break;
            case 'Tools':
                subtypes = ['None', `Artisan's Tools`, 'Musical Instrument']
                changeSubtypes(subtypes)
                break;
            case 'Weapons':
                subtypes = ['None', 'Simple Melee', 'Martial Melee', 'Simple Ranged', 'Martial Ranged']
                changeSubtypes(subtypes)
                break;
        }
    }
}



async function createShop() {
    // !! fix shopID to not have spaces !!
    shopName = document.getElementById('input_shopName').value
    shopID = shopName.replace(/\s|'/g,"")
    // add shop to firebase
    try {
        let documentReference = await firebase.firestore().collection(COLLECTION_SHOPS).doc(shopName).get()
        if (documentReference.exists) {
            alert('shop already exists')
        } else {
            await firebase.firestore().collection(COLLECTION_SHOPS).doc(shopID).set({
                'shopID': shopID,
                'name': shopName,
                'items': itemList
            })
            alert('added shop')
            itemList = []
            printedItems.innerHTML = ""
        }
    } catch (e) {
        alert('Error! ' + e)
    }
}