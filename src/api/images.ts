import bread from '../assets/bread.png'
import coffee from '../assets/coffee.png'
import croissant from '../assets/croissant.png'
import fries from '../assets/fries.png'
import noodles from '../assets/noodles.png'
import pizza from '../assets/pizza.png'
import pumpkin from '../assets/pumpkin.png'

const images = {
    bread,
    coffee,
    croissant,
    fries,
    noodles,
    pizza,
    pumpkin
}

const imageList = Object.values(images)

function randomImages(count: number): string[] {
    count = Math.min(imageList.length, count)

    const remainingImages = [...imageList]
    const result: string[] = []

    while (count > 0) {
        const index = randomNumber(count)

        console.log(`index ${index}, count ${count}, size ${remainingImages.length}`)

        result.push(remainingImages[index])
        remainingImages.splice(index, 1)

        count--;
    }

    return result
}

function randomNumber(limit: number) {
    const generated = Math.random() * (limit + 1);

    return Math.floor(generated)
}

export default images

export {
    randomImages
}