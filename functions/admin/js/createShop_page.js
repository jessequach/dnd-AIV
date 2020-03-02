function createShop_page() {
    createShop_page_secured()
}

let shopName
let itemList = []

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

                <button type="button" class="btn btn-primary" onclick="addItem()">Add Item</button>

        </div>

        <button tyoe="button" class="btn btn-primary" onclick="createShop()">Create Shop</button>
    `
}

function addItem() {
    shopName = document.getElementById('input_shopName').value
    const itemName = document.getElementById('input_itemName').value
    const itemPrice = document.getElementById('input_itemPrice').value
    const itemType = document.getElementById('input_itemType').value
    const itemSubtype = document.getElementById('input_itemSubtype').value
    let newItem = { 'name': itemName, 'price': itemPrice, 'type': itemType, 'subtype': itemSubtype }
    itemList.push(newItem)
    console.log('current item list: ', itemList)
    document.getElementById('itemForm').reset()
    document.getElementById('input_itemName').focus()
}

async function createShop() {
    // add shop to firebase
    try {
        await firebase.firestore().collection(COLLECTION_SHOPS).doc(shopName)
            .set({
                'items:': itemList
            })

        alert('added shop')
    } catch (e) {
        alert('Error! ' + e)
    }
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

function changeSubtypes(subtypes) {
    let result = ""
    for (let subtype of subtypes) {
        result += `<option value="${subtype}">` + subtype + `</option>`
    }
    document.getElementById('input_itemSubtype').innerHTML = result
}
