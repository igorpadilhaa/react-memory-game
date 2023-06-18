import { FC } from "react"

import images from "./api/images"
import restart from './assets/restart.png'
import play from './assets/play.png'
import settings from './assets/settings.png'

import style from './About.module.css'
import { NavLink } from "react-router-dom"

function ImageAssetItem(props: { image: string, url: string, originName: string, sourceName: string }) {
    return (
        <li>
            <img src={props.image} alt="" />
            <span>
                <a target="_blank" href={props.url}>{props.sourceName}</a> by {' '}
                {props.originName}
            </span>
        </li>
    )
}

function icons8Assets(assets: { image: string, name: string, url: string}[]) {
    return assets.map(asset => <ImageAssetItem image={asset.image} url={asset.url} originName="Icons8" sourceName={asset.name}/>)
}

const About: FC = () => {
    return (
        <main id={style.mainContent}>
            <h1>About the project</h1>
            <p>
                This game was a one month project, a study of how to use Storybook
                and explore some responsive layout ideias. 
                The source code is available <a target="_blank" href="https://github.com/igorpadilhaa/react-memory-game">here</a>
            </p>

            <NavLink to="/">Play game</NavLink>

            <h2>Assets</h2>
            <p>This project used third-party assets, follow a list of each one and their source</p>

            <ul className={style.assetsList}>
                {icons8Assets([
                    {
                        image: images.bread,
                        name: 'Kawaii Bread',
                        url: 'https://icons8.com/icon/XOacIk9edYrU/kawaii-bread'
                    },
                    {
                        image: images.coffee,
                        name: 'Kawaii Coffee',
                        url: 'https://icons8.com/icon/CrBE2rvowwqG/kawaii-coffee'
                    },
                    {
                        image: images.croissant,
                        name: 'Kawaii Croissant',
                        url: 'https://icons8.com/icon/g4uD3X6ySuK7/kawaii-croissant'
                    },
                    {
                        image: images.cupcake,
                        name: 'Kawaii Cupcake',
                        url: 'https://icons8.com/icon/E2ahcT6rPGks/kawaii-cupcake'
                    },
                    {
                        image: images.fries,
                        name: 'Kawaii French Fries',
                        url: 'https://icons8.com/icon/uJaWH7RDBEFn/kawaii-french-fries'
                    },
                    {
                        image: images.iceCream,
                        name: 'Kawaii Ice Cream',
                        url: 'https://icons8.com/icon/QV0i4lryUyhp/kawaii-ice-cream'
                    },
                    {
                        image: images.milk,
                        name: 'Kawaii Milk',
                        url: 'https://icons8.com/icon/tEYKnDD1btnq/kawaii-milk'
                    },
                    {
                        image: images.noodles,
                        name: 'Kawaii Noodles',
                        url: 'https://icons8.com/icon/pdaUCVHBnybR/kawaii-noodle'
                    },
                    {
                        image: images.pizza,
                        name: 'Kawaii Pizza',
                        url: 'https://icons8.com/icon/9LCW0wBXsX07/kawaii-pizza'
                    },
                    {
                        image: images.pumpkin,
                        name: 'Kawaii Pumpkin',
                        url: 'https://icons8.com/icon/sezglv9DeVAU/cute-pumpkin'
                    },
                    {
                        image: images.sushi,
                        name: 'Kawaii Sushi',
                        url: 'https://icons8.com/icon/APe94EeGZsx2/kawaii-sushi'
                    },
                    {
                        image: images.taco,
                        name: 'Kawaii Taco',
                        url: 'https://icons8.com/icon/Ms4VQMfgzHoG/kawaii-taco'
                    },
                    {
                        image: restart,
                        name: 'Restart',
                        url: 'https://icons8.com/icon/11676/restart'
                    },
                    {
                        image: play,
                        name: 'Play',
                        url: 'https://icons8.com/icon/398/play'
                    },
                    {
                        image: settings,
                        name: 'Settings',
                        url: 'https://icons8.com/icon/364/settings'
                    }
                ])}
            </ul>
        </main>
    )
}

export default About