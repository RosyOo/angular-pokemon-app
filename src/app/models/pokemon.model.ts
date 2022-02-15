export interface Pokemon{
    id: number;
    name: string;
    url: string;
}
export interface PokemonResponse{
    count: number;
    next: string;
    previous: string;
    results: Pokemon[]
}

export interface PokemonDetail{
    id: number;
    name: string;
    height: number;
    weight: number;
    sprites: PokemonSprite
}

export interface PokemonSprite{
    back_default: string | null,
    back_female: string | null,
    back_shiny: string | null,
    back_shiny_female: string | null,
    front_default: string | null,
    front_female: string | null,
    front_shiny: string | null,
    front_shiny_female: string | null,
}