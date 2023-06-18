import bread from '../assets/cards/bread.png'
import coffee from '../assets/cards/coffee.png'
import croissant from '../assets/cards/croissant.png'
import cupcake from '../assets/cards/cupcake.png'
import fries from '../assets/cards/fries.png'
import iceCream from '../assets/cards/ice-cream.png'
import milk from '../assets/cards/milk.png'
import noodles from '../assets/cards/noodles.png'
import pizza from '../assets/cards/pizza.png'
import pumpkin from '../assets/cards/pumpkin.png'
import sushi from '../assets/cards/sushi.png'
import taco from '../assets/cards/taco.png'

const images = {
    bread,
    coffee,
    croissant,
    cupcake,
    fries,
    iceCream,
    milk,
    noodles,
    pizza,
    pumpkin,
    sushi,
    taco
}

const imageList = Object.values(images)

function randomImages(count: number): string[] {
    count = Math.min(imageList.length, count)

    const remainingImages = [...imageList]
    const result: string[] = []

    while (count > 0) {
        const index = randomNumber(remainingImages.length)

        console.log(`index ${index}, count ${count}, size ${remainingImages.length}`)

        result.push(remainingImages[index])
        remainingImages.splice(index, 1)

        count--;
    }

    return result
}

function randomNumber(limit: number) {
    const generated = Math.random() * (limit);

    return Math.floor(generated)
}

export default images

export {
    randomImages
}