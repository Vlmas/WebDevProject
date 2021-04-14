import { Engine } from "./engine-model";
import { Gearbox } from "./gearbox-model";

export interface Car {
    id?: number, 
    modelName?: string,
    body?: string,
    assetUrls: string | string[],
    startingPrice?: number,
    engine?: Engine | Engine[],
    gearBox?: Gearbox | Gearbox[]
    dimensions?: number[] | string
}