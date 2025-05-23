export const getParams = (uri?: any) => {
    if (!uri) return ''
    const paramString = uri.split('?')[1]
    return `?${paramString}`;
};

export const formatCharacterData = (data: any) => {
    if (!data) return { next: null, characters: [] };
    const newData=data.results.map((character: any) => ({
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
        type: character.type,
        image: character.image,
    }))
    return {next:data?.info?.next,data:newData}

}