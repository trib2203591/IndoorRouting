import { featureObjects } from "./featureObjects.js"
import { postIMDFFeature } from "../API/IMDFFeatures/postFeature.js"
// sub functions for handling details in a form ----------------------------------
export function prepareData(listOfLis) {
    let arr = []
    Array.from(listOfLis).forEach(liTag => {
        const liText = liTag.textContent || liTag.innerText
        arr.push(liText)
    })
    return arr
}

export function hide(element) {
    if (element.classList.contains('hidden')) return
    element.classList.add('hidden')
}

export function show(element) {
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden')
    }
}


//functions to init an element with selector and search--------------------------------------
export function initComboSearch(selectInputId) {
    const optionPaneId = `${selectInputId}OptionPane`
    const optionForSearchPaneId = `${selectInputId}OptionsForSearch`

    const selectInput = document.getElementById(selectInputId)
    const optionList = document.querySelectorAll(`#${optionPaneId} li`)
    const optionForSearch = document.getElementById(optionForSearchPaneId)

    // console.log('SELECT is ',selectInput)
    if (selectInput && optionForSearch) {
        document.addEventListener('click', function (event) {
            if (!selectInput.contains(event.target) && !optionForSearch.contains(event.target)) {
                optionForSearch.classList.add('hidden');
            }
        });

        selectInput.addEventListener('focus', function () {
            const hasInnerLi = optionForSearch.querySelector('li')
            if (hasInnerLi) {
                // console.log(optionForSearch.innerHTML)
                show(optionForSearch)
                return
            }

            let styleClasses = ['rounded-xl', 'border-1', 'mt-1', 'hover:bg-gray-200', 'p-3', 'cursor-pointer']
            const inputValue = selectInput.value.toLowerCase()
            catArray.forEach(cat => {
                if (cat.toLowerCase().indexOf(inputValue) > -1) {
                    show(optionForSearch)
                    const li = document.createElement('li')
                    li.textContent = cat

                    styleClasses.forEach(sl => {
                        li.classList.add(sl)
                    })

                    li.addEventListener('click', function () {
                        selectInput.value = cat
                        // selectInput.setAttribute('data-category',cat
                        optionForSearch.classList.add('hidden')
                    })
                    optionForSearch.appendChild(li)
                }
            })
        })

    }

    // prepare data for the search
    const catArray = prepareData(optionList)
    // console.log('after option list')

    selectInput.addEventListener('input', function () {
        optionForSearch.innerHTML = ''
        const v = document.querySelector('p')
        if (v) v.remove()
        if (selectInput.value == '') {
            hide(optionForSearch)
        }
        let found = false
        let styleClasses = ['rounded-xl', 'border-1', 'mt-1', 'hover:bg-gray-200', 'p-3', 'cursor-pointer']

        const inputValue = selectInput.value.toLowerCase()
        catArray.forEach(cat => {
            if (cat.toLowerCase().indexOf(inputValue) > -1) {
                found = true
                show(optionForSearch)
                const li = document.createElement('li')
                li.textContent = cat
                styleClasses.forEach(sl => {
                    li.classList.add(sl)
                })
                li.addEventListener('click', function () {
                    selectInput.value = cat
                    optionForSearch.classList.add('hidden')
                })
                optionForSearch.appendChild(li)
            }
        })
        if (!found) optionForSearch.innerHTML += "<p class='text-sm text-gray-500'>Không tìm thấy!</p>"

    })
}

export function initMultiChoices(selectInputId) {
    const optionPaneId = `${selectInputId}OptionPane`
    const optionForSearchPaneId = `${selectInputId}OptionsForSearch`
    const containerId = `${selectInputId}Container`
    const selectInput = document.getElementById(selectInputId)
    const optionList = document.querySelectorAll(`#${optionPaneId} li`)
    const optionForSearch = document.getElementById(optionForSearchPaneId)
    const tagsContainer = document.getElementById(containerId)
    // console.log('SELECT input is ',selectInput)

    if (selectInput && optionForSearch) {
        document.addEventListener('click', function (event) {
            if (!selectInput.contains(event.target) && !optionForSearch.contains(event.target)) {
                optionForSearch.classList.add('hidden');
            }
        });

        selectInput.addEventListener('focus', function () {
            const hasInnerLi = optionForSearch.querySelector('li')
            if (hasInnerLi) {
                // console.log(optionForSearch.innerHTML)
                show(optionForSearch)
                return
            }

            let styleClasses = ['rounded-xl', 'border-1', 'mt-1', 'hover:bg-gray-200', 'p-3', 'cursor-pointer']
            const inputValue = selectInput.value.toLowerCase()
            catArray.forEach(cat => {
                if (cat.toLowerCase().indexOf(inputValue) > -1) {
                    show(optionForSearch)
                    const li = document.createElement('li')
                    li.textContent = cat

                    styleClasses.forEach(sl => {
                        li.classList.add(sl)
                    })

                    li.addEventListener('click', function () {
                        const tagStyles = ['p-1', 'rounded-md', 'border-gray-200', 'border', 'mx-1', 'text-sm', 'h-fit', 'inline-block', 'mt-1', 'pr-2']
                        const chosenOpt = document.createElement('span')
                        chosenOpt.textContent = this.textContent
                        // console.log(chosenOpt)

                        const removeBtn = document.createElement('button')
                        removeBtn.textContent = 'x'
                        removeBtn.classList.add('text-gray-400', 'pr-2', 'mr-2', 'ml-2')

                        removeBtn.addEventListener('click', function () {
                            chosenOpt.remove()
                        });

                        chosenOpt.appendChild(removeBtn);
                        tagStyles.forEach(style => {
                            chosenOpt.classList.add(style)
                        })

                        tagsContainer.appendChild(chosenOpt)
                        // console.log("get text is ",chosenOpt.textContent.slice(0,-1))
                    })
                    optionForSearch.appendChild(li)
                }
            })
        })

    }

    // prepare data for the search
    const catArray = prepareData(optionList)

    selectInput.addEventListener('input', function () {
        optionForSearch.innerHTML = ''
        const v = document.querySelector('p')
        if (v) v.remove()
        if (selectInput.value == '') {
            hide(optionForSearch)
        }
        let found = false
        let styleClasses = ['rounded-xl', 'border-1', 'mt-1', 'hover:bg-gray-200', 'p-3', 'cursor-pointer']

        const inputValue = selectInput.value.toLowerCase()
        catArray.forEach(cat => {
            if (cat.toLowerCase().indexOf(inputValue) > -1) {
                found = true
                show(optionForSearch)
                const li = document.createElement('li')
                li.textContent = cat
                styleClasses.forEach(sl => {
                    li.classList.add(sl)
                })
                li.addEventListener('click', function () {
                    const tagStyles = ['p-1', 'rounded-md', 'border-gray-200', 'border', 'mx-1', 'text-sm', 'h-fit']
                    const chosenOpt = document.createElement('span')
                    chosenOpt.textContent = this.textContent

                    const removeBtn = document.createElement('button')
                    removeBtn.textContent = 'x'
                    removeBtn.classList.add('text-gray-400', 'pr-2', 'mr-1', 'ml-1')

                    removeBtn.addEventListener('click', function () {
                        chosenOpt.remove()
                    });

                    chosenOpt.appendChild(removeBtn);
                    tagStyles.forEach(style => {
                        chosenOpt.classList.add(style)
                    })

                    tagsContainer.appendChild(chosenOpt)
                })
                optionForSearch.appendChild(li)
            }
        })
        if (!found) optionForSearch.innerHTML += "<p class='text-sm text-gray-500'>Không tìm thấy!</p>"

    })
}

//functions to init each form after it is chosen--------------------------------------------
function initAmenityForm() {
    console.log('AMENITY FORM LOADED')
    initComboSearch('category')
    initMultiChoices('accessibility')
    initMultiChoices('unit')
    initComboSearch('address')
}

function initUnitForm() {
    console.log('UNIT FORM LOADED')
    initComboSearch('category')
    initMultiChoices('accessibility')
    initComboSearch('restriction')
    initComboSearch('level')
}

function initAddressForm() {
    console.log('ADDRESS FORM LOADED')
}

function initAnchorForm() {
    console.log('ANCHOR FORM LOADED')
    initComboSearch('address')
    initComboSearch('unit')
}

function initBuildingForm() {
    console.log('BUILDING FORM LOADED')
    initComboSearch('category')
    initComboSearch('restriction')
    initComboSearch('address')
}

function initDetailForm() {
    console.log('DETAIL FORM LOADED')
    initComboSearch('level')
}

function initFixtureForm() {
    console.log('FIXTURE FORM LOADED')
    initComboSearch('category')
    initComboSearch('anchor')
    initComboSearch('level')
}

function initFootprintForm() {
    console.log('FOOTPRINT FORM LOADED')
    initComboSearch('category')
    initMultiChoices('building')
}

function initGeofenceForm() {
    console.log('GEOFENCE FORM LOADED')
    initComboSearch('category')
    initComboSearch('restriction')
    initComboSearch('correlation')
    initMultiChoices('building')
    initMultiChoices('level')
    initMultiChoices('parent')
}

function initKioskForm() {
    console.log('KIOSK FORM LOADED')
    initComboSearch('anchor')
    initComboSearch('level')
}

function initLevelForm() {
    console.log('LEVEL FORM LOADED')
    initComboSearch('category')
    initComboSearch('restriction')
    initComboSearch('address')
    initMultiChoices('building')

}

function initOccupantForm() {
    console.log('OCCUPANT FORM LOADED')
    initComboSearch('category')
    initComboSearch('anchor')
}

function initOpeningForm() {
    console.log('OPENING FORM LOADED')
    initComboSearch('category')
    initMultiChoices('accessibility')
    initComboSearch('level')
    initMultiChoices('accesscontrol')
    initComboSearch('doortype')
    initComboSearch('material')
    const door = document.getElementById('door')
    door.addEventListener('change', function () {
        const doorpart = document.getElementById('doordetail')
        if (door.checked) {
            doorpart.classList.remove('hidden')
        } else {
            if (!doorpart.classList.contains('hidden'))
                doorpart.classList.add('hidden')
        }
    })
}

function initRelationshipForm() {
    console.log('RELATIONSHIP FORM LOADED')
    initComboSearch('category')
}

function initSectionForm() {
    console.log('SECTION FORM LOADED')
    initComboSearch('category')
    initComboSearch('restriction')
    initMultiChoices('accessibility')
    initComboSearch('level')
    initComboSearch('address')
    initMultiChoices('parent')
}

function initVenueForm() {
    console.log('VENUE FORM LOADED')
    initComboSearch('category')
    initComboSearch('restriction')
    initComboSearch('address')
}
//functions to run the form's script after chosing a form-------------------------------------
export function initForm(featureType) {
    switch (featureType) {
        case 'Address':
            initAddressForm()
            break
        case 'Amenity':
            initAmenityForm()
            break
        case 'Unit':
            initUnitForm()
            break
        case 'Building':
            initBuildingForm()
            break
        case 'Anchor':
            initAnchorForm()
            break
        case 'Detail':
            initDetailForm()
            break
        case 'Fixture':
            initFixtureForm()
            break
        case 'Footprint':
            initFootprintForm()
            break
        case 'Geofence':
            initGeofenceForm()
            break
        case 'Kiosk':
            initKioskForm()
            break
        case 'Level':
            initLevelForm()
            break
        case 'Occupant':
            initOccupantForm()
            break
        case 'Opening':
            initOpeningForm()
            break
        case 'Relationship':
            initRelationshipForm()
            break
        case 'Section':
            initSectionForm()
            break
        case 'Venue':
            initVenueForm()
            break
    }
}

//functions to handle posting a feature------------------------------------------------

function getFeatureBody(featureType) {
    var body
    switch (featureType) {
        case 'Amenity':
            body = getAmenityObj()
            break;
        case 'Address':
            body = getAddressObj()
            break
        case 'Anchor':
            body = getAnchorObj()
            break
        case 'Building':
            body = getBuildingObj()
            break
        case 'Detail':
            body = getDetailObj()
            break
        case 'Fixture':
            body = getFixtureObj()
            break
        case 'Footprint':
            body = getFootprintObj()
            break
        case 'Geofence':
            body = getGeofenceObj()
            break
        case 'Kiosk':
            body = getKioskObj()
            break
        case 'Level':
            body = getLevelObj()
            break
        case 'Occupant':
            body = getOccupantObj()
            break
        case 'Opening':
            body = getOpeningObj()
            break
        case 'Relationship':
            body = getRelationshipObj()
            break
        case 'Section':
            body = getSectionObj()
            break
        case 'Unit':
            body = getUnitObj()
            break
        case 'Venue':
            body = getVenueObj()
            break
    }
    return body
}


export async function postFeature(featureType) {
    try {

        var feature = JSON.stringify(getFeatureBody(featureType));

        const response = await postIMDFFeature(feature, featureType);
        if (response.ok) {
            alert("Posted OK!");
        }
        else {
            var c = await response.json();
            alert(c.message);
        }
    }
    catch (e) {
        console.log(e);
    }
}

//functions for form-value handling-----------------------------------------

function generateUUIDv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (char) {
        const random = Math.random() * 16 | 0; // Lấy số ngẫu nhiên từ 0-15
        const value = char === 'x' ? random : (random & 0x3 | 0x8); // Đảm bảo đúng bit của UUID v4
        return value.toString(16); // Chuyển thành chuỗi hex
    });
}

function getFullGeom() {
    try {
        const geomChoices = document.querySelectorAll('[name="geom-type"]')
        var geomType
        var check = false
        Array.from(geomChoices).forEach(e => {
            if (e.checked) {
                geomType = e.value
                check = true
            }
        })
        if (check == false) {
            alert(`Vui lòng chọn dạng "${geomChoices[0].value}" hoặc "${geomChoices[1].value}"`)
            return
        }
        var coordinates
        const text = document.getElementById('geometry-coordinates').value
        try {
            if (text == '') {
                const obj = {
                    type: geomType,
                    coordinates: text
                }
                return obj
            }
            coordinates = JSON.parse(text)
        } catch (e) {
            // throw new Error("Định dạng JSON không hợp lệ.")
            throw new Error(e.message)
        }
        const obj = {
            type: geomType,
            coordinates: coordinates
        }
        return obj

    } catch (e) {
        alert(e.message)
    }
}

function getName() {
    const name = document.getElementById('name').value
    // console.log(name)
    return name
}

function getFromCombosearch(id) {
    try {
        const type = document.getElementById(`${id}-label`).textContent
        const opt = document.getElementById(id).value
        if (opt === '') {
            return opt
        }
        const obj = get2Array(id)
        const keys = obj.keys
        const values = obj.values
        const optId = changeToValidData(opt, keys, values, type)
        return optId
    } catch (e) {
        console.log(e.message)
    }
}


function getLevel() {
    return getFromCombosearch('level')
}
function get2Array(id) {
    try {
        var obj = {}
        const pane = document.getElementById(`${id}OptionPane`)
        const lis = pane.querySelectorAll('li')
        var values = []
        var keys = []
        Array.from(lis).forEach(li => {
            values.push(li.textContent)
            keys.push(li.getAttribute('data-cat'))
        })
        obj.keys = keys
        obj.values = values
        return obj
    } catch (e) {
        console.log(e)
        return
    }
}

function changeToValidData(valueToFind, keyArray, valueArray, type) {
    var oderth
    valueArray = valueArray.map(e => e.toLowerCase())
    oderth = valueArray.indexOf(valueToFind.toLowerCase())
    if (oderth < 0) {
        alert(`Giá trị "${type}" không hợp lệ. Vui lòng chọn từ danh sách có sẵn.`)
        return
    }
    var v = keyArray[oderth]
    return v
}

function getCategory() {
    return getFromCombosearch('category').toLowerCase()
}

function getMultiChoices(id) {
    const container = document.getElementById(`${id}Container`)
    const spans = container.querySelectorAll('span')
    var opts = []
    Array.from(spans).forEach(span => {
        if (!opts.includes(span.textContent.slice(0, -1)))
            opts.push(span.textContent.slice(0, -1))
    })
    var ids = []
    const obj = get2Array(id)
    const keys = obj.keys
    const values = obj.values
    opts.forEach(opt => {
        const id = changeToValidData(opt, keys, values)
        ids.push(id)
    })
    // console.log(ids)
    return ids
}

function getInput(id) {
    const value = document.getElementById(id).value
    return value
}

function getCoordinates() {
    try {
        const c = getInput('coordinates')
        if (c == '') return c
        const coordinates = JSON.parse(c)
        return coordinates
    } catch (e) {
        // throw new Error("Định dạng JSON không hợp lệ!")
        throw new Error(e.message)
    }
}

function getDisplayCoordinates() {
    try {
        const c = getInput('display-coordinates')
        if (c == '') return c
        const coordinates = JSON.parse(c)
        return coordinates
    } catch (e) {
        // throw new Error("Định dạng JSON không hợp lệ!")
        throw new Error(e.message)
    }
}

function getAltName() {
    const altname = document.getElementById('alt-name').value
    return altname
}

function getAddressObj() {
    var addobj = featureObjects.Address
    const id = generateUUIDv4()
    addobj.id = id
    const adrs = getInput('address')
    addobj.properties.address = adrs
    const locality = getInput('locality')
    addobj.properties.locality = locality
    const province = getInput('province')
    addobj.properties.province = province
    const country = getInput('country')
    addobj.properties.country = country
    const postal_code = getInput('postalcode')
    addobj.properties.postal_code = postal_code
    const postal_code_ext = getInput('postalcodeext')
    addobj.properties.postal_code_ext = postal_code_ext
    const postal_code_vanity = getInput('postalcodevanity')
    addobj.properties.postal_code_vanity = postal_code_vanity
    // console.log(addobj)
    return addobj

}

function getAmenityObj() {
    try {
        var obj = featureObjects.Amenity
        const id = generateUUIDv4()
        obj.id = id

        const category = getCategory()
        obj.properties.category = category
        const access = getMultiChoices('accessibility')
        obj.properties.accessibility = access
        const name = getName()
        obj.properties.name = {
            "vi": name
        }
        const alt_name = getAltName()
        obj.properties.alt_name = {
            "vi": alt_name
        }
        obj.properties.phone = getInput('phone')
        obj.properties.website = getInput('website')
        obj.properties.hours = getInput('hour')
        obj.properties.address_id = getFromCombosearch('address')
        obj.properties.unit_ids = getMultiChoices('unit')
        obj.properties.correlation_id = getInput('correlation')
        const coordinates = getCoordinates()
        obj.geometry.coordinates = coordinates
        return obj
    } catch (e) {
        alert(e.message)
        return obj
    }
}

function getAnchorObj() {
    var obj = featureObjects.Anchor
    try {
        obj.id = generateUUIDv4()
        obj.geometry.coordinates = getCoordinates()
        obj.properties.address_id = getFromCombosearch('address')
        obj.properties.unit_id = getFromCombosearch('unit')
        return obj
    } catch (e) {
        alert(e.message)
        return obj
    }
}

function getBuildingObj() {
    try {
        var obj = featureObjects.Building
        obj.id = generateUUIDv4()
        obj.properties.category = getCategory()
        obj.properties.restriction = getFromCombosearch('restriction')
        var nae = getName()
        obj.properties.name = {
            "vi": nae
        }
        var ane = getAltName()
        obj.properties.alt_name = {
            "vi": ane
        }
        obj.properties.display_point.coordinates = getDisplayCoordinates()
        obj.properties.address_id = getFromCombosearch('address')
        return obj
    } catch (e) {
        alert(e.message)
        return obj
    }
}

function getDetailObj() {
    var obj = featureObjects.Detail
    try {
        obj.id = generateUUIDv4()
        obj.geometry = getFullGeom()
        obj.properties.level_id = getLevel()
        return obj
    } catch (e) {
        alert(e.message)
        return obj
    }
}

function getFixtureObj() {
    var obj = featureObjects.Fixture
    try {
        obj.id = generateUUIDv4()
        obj.geometry = getFullGeom()
        obj.properties.category = getCategory()
        const n = getName()
        obj.properties.name = {
            "vi": n
        }
        const an = getAltName()
        obj.properties.alt_name = {
            "vi": an
        }
        obj.properties.display_point.coordinates = getDisplayCoordinates()
        obj.properties.anchor_id = getFromCombosearch('anchor')
        obj.properties.level_id = getLevel()
        return obj
    } catch (e) {
        console.log(e.message)
        return obj
    }
}

function getFootprintObj() {
    var obj = featureObjects.Footprint
    try {
        obj.id = generateUUIDv4()
        obj.geometry = getFullGeom()
        obj.properties.category = getCategory()
        obj.properties.name = {
            "vi": getName()
        }
        obj.properties.building_ids = getMultiChoices('building')
        return obj
    } catch (e) {
        alert(e.message)
        return obj
    }
}

function getGeofenceObj() {
    var obj = featureObjects.Geofence
    try {
        obj.id = generateUUIDv4()
        obj.geometry = getFullGeom()
        obj.properties.category = getCategory()
        obj.properties.restriction = getFromCombosearch('restriction')
        obj.properties.name = {
            "vi": getName()
        }
        obj.properties.alt_name = {
            "vi": getAltName()
        }
        obj.properties.correlation_id = getInput('correlation')
        obj.properties.display_point.coordinates = getDisplayCoordinates()
        obj.properties.building_ids = getMultiChoices('building')
        obj.properties.level_ids = getMultiChoices('level')
        obj.properties.parents = getMultiChoices('parent')
        return obj
    } catch (e) {
        alert(e.message)
        return obj
    }
}

function getKioskObj() {
    var obj = featureObjects.Kiosk
    try {
        obj.id = generateUUIDv4()
        obj.geometry = getFullGeom()
        obj.properties.name = {
            "vi": getName()
        }
        obj.properties.alt_name = {
            "vi": getAltName()
        }
        obj.properties.anchor_id = getFromCombosearch('anchor')
        obj.properties.display_point.coordinates = getDisplayCoordinates()
        obj.properties.level_id = getFromCombosearch('level')
        return obj
    } catch (e) {
        alert(e.message)
        return obj
    }
}

function getLevelObj() {
    var obj = featureObjects.Level
    try {
        obj.id = generateUUIDv4()
        obj.geometry = getFullGeom()
        obj.properties.category = getCategory()
        obj.properties.restriction = getFromCombosearch('restriction')
        obj.properties.ordinal = parseInt(getInput('ordinal'))

        obj.properties.outdoor = getInput('outdoor') === 'true' ? true : false
        obj.properties.name = {
            "vi": getName()
        }
        obj.properties.short_name = {
            "vi": getInput('shortname')
        }
        obj.properties.display_point.coordinates = getDisplayCoordinates()
        obj.address_id = getFromCombosearch('address')
        obj.building_ids = getMultiChoices('building')
        return obj
    } catch (e) {
        alert(e.message)
        return obj
    }
}

function getOccupantObj() {
    var obj = featureObjects.Occupant
    try {
        obj.id = generateUUIDv4()
        obj.properties.category = getCategory()
        obj.properties.name = {
            "vi": getName()
        }
        obj.properties.phone = getInput('phone')
        obj.properties.website = getInput('website')
        obj.properties.hours = getInput('hour')
        const s = getInput('start')
        const e = getInput('end')
        const m = getInput('modified')
        if (e === '' && s === '' && m === '') {
            obj.properties.validity = null
        }
        else {
            obj.properties.validity.start = s
            obj.properties.validity.end = e
            obj.properties.validity.modified = m
        }
        obj.properties.anchor_id = getFromCombosearch('anchor')
        obj.properties.correlation_id = getInput('correlation')
        return obj
    } catch (e) {
        alert(e.message)
        return obj
    }
}

function getOpeningObj() {
    var obj = featureObjects.Openings
    try {

        obj.id = generateUUIDv4()
        try {
            const co = getInput('geometry-coordinates')
            obj.geometry.coordinates = JSON.parse(co)
        } catch (e) {
            throw new Error("Định dạng JSON của dữ liệu hình học không hợp lệ.")
        }

        obj.properties.category = getCategory()
        obj.properties.accessibility = getMultiChoices('accessibility')
        obj.properties.access_control = getMultiChoices('accesscontrol')
        var checkbox = document.getElementById('door')
        if (checkbox.checked) {
            obj.properties.door.type = getFromCombosearch('type')
            obj.properties.door.automatic = getInput('automatic')
            obj.properties.door.material = getFromCombosearch('material')
        } else {
            obj.properties.door = null
        }
        obj.properties.name = {
            "vi": getName()
        }
        obj.properties.alt_name = {
            "vi": getAltName()
        }
        obj.properties.display_point.coordinates = getDisplayCoordinates()
        obj.properties.level_id = getLevel()
        return obj
    } catch (e) {
        alert(e.message)
        return obj
    }
}

function getRelationshipObj() {
    var obj = featureObjects.Relationship
    try {
        obj.id = generateUUIDv4()
        obj.properties.category = getCategory()
        obj.properties.direction = getInput('direction')
        obj.properties.hours = getInput('hour')
        obj.properties.origin = getInput('origin')
        obj.properties.intermediary = getInput('intermediary')
        obj.properties.destination = getInput('destination')
        return obj
    } catch (e) {
        alert(e.message)
        return obj
    }
}

function getSectionObj() {

    var obj = featureObjects.Section
    try {
        obj.id = generateUUIDv4()
        obj.geometry = getFullGeom()
        obj.properties.category = getCategory()
        obj.properties.restriction = getFromCombosearch('restriction')
        obj.properties.accessibility = getMultiChoices('accessibility')
        obj.properties.name = {
            "vi": getName()
        }
        obj.properties.alt_name = {
            "vi": getAltName()
        }
        obj.properties.display_point.coordinates = getDisplayCoordinates()
        obj.properties.level_id = getLevel()
        obj.properties.address_id = getFromCombosearch('address')
        obj.properties.correlation_id = getInput('correlation')
        obj.properties.parents = getMultiChoices('parent')
        return obj
    } catch (e) {
        alert(e.message)
        return obj
    }
}

function getUnitObj() {
    var obj = featureObjects.Unit

    try {
        obj.id = generateUUIDv4()
        obj.geometry = getFullGeom()
        obj.properties.category = getCategory()
        obj.properties.restriction = getFromCombosearch('restriction')
        obj.properties.accessibility = getMultiChoices('accessibility')
        obj.properties.name = {
            "vi": getName()
        }
        obj.properties.alt_name = {
            "vi": getAltName()
        }
        obj.properties.display_point.coordinates = getDisplayCoordinates()
        obj.properties.level_id = getLevel()
        return obj
    } catch (e) {
        alert(e.message)
        return obj
    }
}

function getVenueObj() {
    //     "id": "",
    //     "type": "Feature",
    //     "feature_type": "venue",
    //     "geometry": {},
    //     "properties": {
    //       "category": "",
    //       "restriction": null,
    //       "name": {},
    //       "alt_name": null,
    //       "hours": "",
    //       "website": "",
    //       "phone": "",
    //       "display_point": {
    //         "type": "Point",
    //         "coordinates": []
    //       },
    //       "address_id": ""
    //     }
    //   }
    var obj = featureObjects.Venue
    try {
        obj.id = generateUUIDv4()
        obj.geometry = getFullGeom()
        obj.properties.category = getCategory()
        obj.properties.restriction = getFromCombosearch('restriction')
        obj.properties.name = {
            "vi":getName()
        }
        obj.properties.alt_name = {
            "vi":getAltName()
        }
        obj.properties.hours = getInput('hour')
        obj.properties.website = getInput('website')
        obj.properties.phone = getInput('phone')
        obj.properties.display_point.coordinates = getDisplayCoordinates()
        obj.properties.address_id = getFromCombosearch('address')
        return obj
    } catch (e) {
        alert(e.message)
        return obj
    }
}
export async function createGeoJson() {
    const rightPane = document.getElementById('json-review')
    rightPane.value = ''
    const currentFT = document.getElementById('currentFeature').value
    // return
    var body
    switch (currentFT) {
        case 'Amenity':
            body = getAmenityObj()
            break;
        case 'Address':
            body = getAddressObj()
            break
        case 'Anchor':
            body = getAnchorObj()
            break
        case 'Building':
            body = getBuildingObj()
            break
        case 'Detail':
            body = getDetailObj()
            break
        case 'Fixture':
            body = getFixtureObj()
            break
        case 'Footprint':
            body = getFootprintObj()
            break
        case 'Geofence':
            body = getGeofenceObj()
            break
        case 'Kiosk':
            body = getKioskObj()
            break
        case 'Level':
            body = getLevelObj()
            break
        case 'Occupant':
            body = getOccupantObj()
            break
        case 'Opening':
            body = getOpeningObj()
            break
        case 'Relationship':
            body = getRelationshipObj()
            break
        case 'Section':
            body = getSectionObj()
            break
        case 'Unit':
            body = getUnitObj()
            break
        case 'Venue':
            body = getVenueObj()
            break
    }
    rightPane.value = JSON.stringify(body, null, 4)
    return
}
