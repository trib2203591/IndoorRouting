// export function initComboSearch(optionPaneId, selectInputId) {
//     const selectInput = document.getElementById(selectInputId)
//     const optionList = document.querySelectorAll(`#${optionPaneId} li`)
//     const optionPane = document.getElementById(optionPaneId)

//     console.log('init combosearch run', optionPaneId, selectInputId)
//     if (selectInput && optionPane) {
//         selectInput.addEventListener('focus', function () {
//             console.log('active focus')
//             optionPane.classList.remove('hidden')
//         })

//         document.addEventListener('click', function (event) {
//             if (!selectInput.contains(event.target) && !optionPane.contains(event.target)) {
//                 optionPane.classList.add('hidden');
//             }
//         });

//         optionList.forEach(function (option) {
//             // console.log('click')
//             option.addEventListener('click', function () {
//                 const text = this.textContent
//                 const value = this.getAttribute('data-cat').toLowerCase()
//                 // console.log(value)
//                 selectInput.setAttribute('value', text)
//                 selectInput.setAttribute('catId', value)
//                 optionPane.classList.add('hidden')
//             })
//         })

//         //search
//         selectInput.addEventListener('keyup', function () {
//             // console.log('hehe')
//             optionPane.classList.remove('hidden')
//             const notFoundMessage = optionPane.querySelector('p')
//             if (notFoundMessage) notFoundMessage.remove()

//             const filter = selectInput.value.toUpperCase()
//             console.log('filter is ', filter)
//             let found = false
//             // var li = optionPane.getElementsByTagName('li')
//             // Array.from(li).forEach(item => {
//             Array.from(optionList).forEach(item=>{
//                 const textValue = item.textContent || item.innerText
//                 if (textValue.toUpperCase().indexOf(filter) > -1) {
//                     item.style.display = ''
//                     found = true
//                 } else {
//                     item.style.display = 'none'
//                 }

//                 // item.addEventListener('click', function () {
//                 //     console.log('this is ',this)
//                 //     const text = this.textContent || this.innerText
//                 //     console.log(text)
//                 //     const value = this.getAttribute('data-cat').toLowerCase()
//                 //     // console.log(value)
//                 //     console.log(selectInput)
//                 //     // selectInput.setAttribute('value', text)
//                 //     // selectInput.setAttribute('catId', value)
//                 //     optionPane.classList.add('hidden')
//                 // })
//             })

//             if (!found) {
//                 if (!optionPane.querySelector('p')) optionPane.innerHTML += "<p class='text-gray-500 text-sm'>Không tìm thấy!</p>"
//             }
//         })
//     }
//     // console.log('get here')
// }
// // document.addEventListener('DOMContentLoaded', function () {
   
// //     console.log('AMENITY DOM LOADED')
// //     initComboSearch('options', 'selectInput')
// //     initComboSearch('accessOptions', 'accessSelectInput')
// // })

// // export function initAmenityForm() {
// //     initComboSearch('options', 'selectInput')
// //     initComboSearch('accessOptions', 'accessSelectInput')
// // }