
// Select some elements...
let header = document.querySelector('#page-header')
// console.log(header)
header.style.textAlign = "left"
// selects dogImages and creates border radius
let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i <dogImages.length; i++){
    dogImages[i].style.borderRadius = '50px'
    dogImages[i].style.transform = 'rotate(180deg)'
}
//selects dogNames, aligns text left
let dogNames = document.querySelectorAll('.dog-name')
for(let i = 0; i < dogNames.length; i++){
    dogNames[i].style.textAlign = 'left'
}
// console.log(dogNames)
//selects footertext and changes it's color
let footertext = document.querySelector('.footer')
footertext.style.color = 'red'

//select dogimages and flips them
// for(let i = 0; i < dogImages.length; i++){
//     dogImages[i].style.transform = '(90deg)'
// }
// console.log(dogImages)