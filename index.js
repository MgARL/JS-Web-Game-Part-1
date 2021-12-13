//Function NewImage
function newImage(image, srcString, leftPosition, bottomPosition) {
    image = document.createElement('img')
    image.src = srcString
    image.style.position = 'fixed'
    image.style.left = leftPosition
    image.style.bottom = bottomPosition
    document.body.append(image)

    return image
}

//invoking Assets to Screen

newImage('greenCharacter', 'assets/green-character.gif', '100px', '100px')

newImage('pineTree', 'assets/pine-tree.png','450px', '200px')

newImage('tree', 'assets/tree.png', '200px', '300px')

newImage('pillar', 'assets/pillar.png', '350px', '100px')

newImage('crate', 'assets/crate.png', '150px', '200px')

newImage('well', 'assets/well.png', '500px', '425px')

// let sword = newImage('sword', 'assets/sword.png', '500px', '405px')

// sword.addEventListener('click', () => {
//     sword.remove()
// } )

//Items Function

function newItem(item, srcStr, posLeft, posBottom) {
    item = newImage(item, srcStr, posLeft, posBottom)

    item.addEventListener('dblclick', function(){
        item.remove()
    })
}

newItem('sword', 'assets/sword.png', '500px', '405px')

newItem('shield', 'assets/shield.png', '165px', '185px')

newItem('staff', 'assets/staff.png', '600px', '100px')

//background Image
