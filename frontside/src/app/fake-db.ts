import { Car } from "./models/car-model";
import { ConceptCar } from "./models/concept-car-model";
import { Engine } from "./models/engine-model";
import { Gearbox } from "./models/gearbox-model";

export const ENGINES: Engine[] = [
    {
        id: 1,
        volume: 3.5,
        type: 'petrol',
        configuration: 'V6 turbo',
        power: 421
    },
    {
        id: 2,
        volume: 5.0,
        type: 'petrol',
        configuration: 'V8',
        power: 478
    },
    {
        id: 3,
        volume: 5.7,
        type: 'petrol',
        configuration: 'V8',
        power: 377
    },
    {
        id: 4,
        volume: 4.6,
        type: 'petrol',
        configuration: 'V8',
        power: 301
    },
    {
        id: 5,
        volume: 3.5,
        type: 'petrol',
        configuration: 'V6',
        power: 311
    },
    {
        id: 6,
        volume: 3.5,
        type: 'petrol',
        configuration: 'V6',
        power: 277
    },
    {
        id: 7,
        volume: 2.5,
        type: 'petrol',
        configuration: 'I4',
        power: 204
    },
    {
        id: 8,
        volume: 2.0,
        type: 'petrol',
        configuration: 'I4 turbo',
        power: 241
    },
    {
        id: 9,
        volume: 2.0,
        type: 'petrol',
        configuration: 'I4',
        power: 178
    }
]

export const GEARBOXES: Gearbox[] = [
    {
        id: 1,
        type: 'auto',
        gearCount: 10,
        clutchCount: 1
    },
    {
        id: 2,
        type: 'auto',
        gearCount: 8,
        clutchCount: 1
    },
    {
        id: 3,
        type: 'auto',
        gearCount: 7,
        clutchCount: 1
    },
    {
        id: 4,
        type: 'auto',
        gearCount: 6,
        clutchCount: 1
    },
    {
        id: 5,
        type: 'cvt',
        gearCount: 0,
        clutchCount: 0
    }
]

export const CARS: Car[] = [
    {
        id: 1,
        modelName: 'IS',
        body: 'sedan',
        assetUrls: ['../../../assets/images/IS.png', '../../../assets/images/IS-STATE.jpg'],
        startingPrice: 39000,
        engine: [ENGINES[4], ENGINES[7]],
        gearBox: [GEARBOXES[1], GEARBOXES[3]],
        dimensions: [4710, 1840, 1430]
    },
    {
        id: 2,
        modelName: 'ES',
        body: 'sedan',
        assetUrls: ['../../../assets/images/ES.png', '../../../assets/images/ES-STATE.jpg'],
        startingPrice: 40000,
        engine: [ENGINES[4], ENGINES[5], ENGINES[8]],
        gearBox: GEARBOXES[1],
        dimensions: [4970, 1850, 1420]
    },
    {
        id: 3,
        modelName: 'LS',
        body: 'sedan',
        assetUrls: ['../../../assets/images/LS.png', '../../../assets/images/LS-STATE.jpg'],
        startingPrice: 76000,
        engine: ENGINES[0],
        gearBox: [GEARBOXES[0], GEARBOXES[1]],
        dimensions: [5230, 1880, 1450]
    },
    {
        id: 4,
        modelName: 'UX',
        body: 'suv',
        assetUrls: ['../../../assets/images/UX.png', '../../../assets/images/UX-STATE.jpg'],
        startingPrice: 33000,
        engine: ENGINES[8],
        gearBox: GEARBOXES[0],
        dimensions: [4500, 1830, 1520]
    },
    {
        id: 5,
        modelName: 'NX',
        body: 'suv',
        assetUrls: ['../../../assets/images/NX.png', '../../../assets/images/NX-STATE.jpg'],
        startingPrice: 37610,
        engine: ENGINES[7],
        gearBox: GEARBOXES[3],
        dimensions: [4630, 1850, 1630]
    },
    {
        id: 6,
        modelName: 'RX',
        body: 'suv',
        assetUrls: ['../../../assets/images/RX.png', '../../../assets/images/RX-STATE.jpg'],
        startingPrice: 45170,
        engine: ENGINES[4],
        gearBox: GEARBOXES[1],
        dimensions: [4880, 1880, 1700]
    },
    {
        id: 7,
        modelName: 'GX',
        body: 'suv',
        assetUrls: ['../../../assets/images/GX.png', '../../../assets/images/GX-STATE.jpg'],
        startingPrice: 53250,
        engine: ENGINES[3],
        gearBox: GEARBOXES[3],
        dimensions: [4880, 1880, 1880]
    },
    {
        id: 8,
        modelName: 'LX',
        body: 'suv',
        assetUrls: ['../../../assets/images/LX.png', '../../../assets/images/LX-STATE.jpg'],
        startingPrice: 86730,
        engine: ENGINES[2],
        gearBox: GEARBOXES[1],
        dimensions: [5080, 1980, 1900]
    },
    {
        id: 9,
        modelName: 'RC',
        body: 'coupe',
        assetUrls: ['../../../assets/images/RC.png', '../../../assets/images/RC-STATE.jpg'],
        startingPrice: 42220,
        engine: [ENGINES[4], ENGINES[7]],
        gearBox: GEARBOXES[1],
        dimensions: [4700, 1830, 1390]
    },
    {
        id: 10,
        modelName: 'LC',
        body: 'coupe',
        assetUrls: ['../../../assets/images/LC.png', '../../../assets/images/LC-STATE.jpg'],
        startingPrice: 93050,
        engine: ENGINES[1],
        gearBox: GEARBOXES[0],
        dimensions: [4750, 1900, 1350]
    },
    {
        id: 11,
        modelName: 'UX-HYBRID',
        body: 'hybrid',
        assetUrls: ['../../../assets/images/UX-H.png', '../../../assets/images/UX-STATE.jpg'],
        startingPrice: 35200,
        engine: ENGINES[8],
        gearBox: GEARBOXES[4],
        dimensions: [4500, 1830, 1520]
    },
    {
        id: 12,
        modelName: 'NX-HYBRID',
        body: 'hybrid',
        assetUrls: ['../../../assets/images/NX-HYBRID.png', '../../../assets/images/NX-STATE.jpg'],
        startingPrice: 40160,
        engine: ENGINES[7],
        gearBox: GEARBOXES[4],
        dimensions: [4630, 1850, 1630]
    },
    {
        id: 13,
        modelName: 'ES-HYBRID',
        body: 'hybrid',
        assetUrls: ['../../../assets/images/ES-HYBRID.png', '../../../assets/images/ES-STATE.jpg'],
        startingPrice: 41910,
        engine: [ENGINES[4], ENGINES[5]],
        gearBox: GEARBOXES[4],
        dimensions: [4970, 1850, 1420]
    },
    {
        id: 14,
        modelName: 'RC F',
        body: 'performance',
        assetUrls: ['../../../assets/images/RCF.png', '../../../assets/images/RC-STATE.jpg'],
        startingPrice: 65975,
        engine: ENGINES[1],
        gearBox: GEARBOXES[0],
        dimensions: [4700, 1830, 1390]
    },
    {
        id: 15,
        modelName: 'LC',
        body: 'performance',
        assetUrls: ['../../../assets/images/LC.png', '../../../assets/images/LC-STATE.jpg'],
        startingPrice: 93050,
        engine: ENGINES[1],
        gearBox: GEARBOXES[0],
        dimensions: [4750, 1900, 1350]
    }
]

export const CONCEPT_CARS: ConceptCar[] = [
    {
        id: 1,
        name: 'IS 500 F SPORT',
        releaseDate: 2022,
        description: 'While the IS F SPORT was obsessively engineered to push exhilaration to a 10, the first-ever IS 500 F SPORT Performance dials it up to 11. As the most powerful IS yet, it ushers in a new era of F SPORT with a powerful 5.0-liter naturally aspirated V8, a throaty quad exhaust. To commemorate this world premiere, 500 serialized Launch Edition vehicles will also be produced, featuring exclusive exterior and interior colors and more.',
        assetUrl: '../../../assets/images/IS500.jpg'
    },
    {
        id: 2,
        name: 'LF-30 ELECTRIFIED',
        releaseDate: 2030,
        description: 'The Lexus LF-30 Electrified is more than a concept vehicle—it’s a bold new vision of vehicle electrification. From innovations that vary power output for optimized vehicle posture to in-wheel electric motors, it promises a dynamic driving experience like no other. And with exhilarating style and inspired technology to match, it features a sleek exterior with windows that stretch from front to rear, and autonomous technologies such as self-parking and front-door pickup. It’s the future, electrified.',
        assetUrl: '../../../assets/images/LF-30.jpg'
    },
    {
        id: 3,
        name: 'LF-1 LIMITLESS',
        releaseDate: 2025,
        description: 'The Lexus LF-1 Limitless concept is a flagship luxury crossover with an eye toward a more human future. A seamless convergence of angular and organic design, with a panoramic glass roof and a distinctive split rear spoiler. Inside, shimmering accent lights create a feeling of warmth and wonder, while technologies like digital side-view monitors and 4D navigation help you remain focused on the future. The Lexus LF-1 Limitless concept.',
        assetUrl: '../../../assets/images/LF-1.jpg'
    },
    {
        id: 4,
        name: 'LF-FC',
        releaseDate: 'unknown',
        description: 'The first‐ever Lexus fuel cell concept, the LF‐FC embodies the future of capacitive technology as it evokes an era of visionary, emotional design. A bracing balance of aggressive sculpting and flowing curves cloaks an otherworldly, intuitive interior that defies simple luxury. An advanced human interface operates controls via basic gestures, while automated driving technologies steer the flagship vehicle into a bold new world.',
        assetUrl: '../../../assets/images/LF-FC.jpg'
    }
]