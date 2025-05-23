export type CharacterType = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    image: string;
};

export type ApiResoponseType={
    next:string|null,
    data:CharacterType[]
}