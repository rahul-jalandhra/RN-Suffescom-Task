import { fetchCharacters } from '../apis'
import { getParams } from '../utils/apiUtils'
import { useAppDispatch, useAppSelector } from '../store'
import { fetchCharactersFailure, fetchCharactersStart, fetchCharactersSuccess, fetchMoreCharactersStart, fetchMoreCharactersSuccess, refreshCharactersStart } from '../store/slices/homeSlice'

const useCharacters = () => {
    const dispatch = useAppDispatch();
    const { next } = useAppSelector(state => state.home)

    //This function is used to fetch the initial characters when the app loads ---->
    const fetchInitialCharacters = async () => {
        try {
            dispatch(fetchCharactersStart());
            // This timeout is just to show skeleton loading, because the API is fast and we don't see the loading state ---->
            setTimeout(async () => {
                const result = await fetchCharacters();
                dispatch(fetchCharactersSuccess(result as never));
            }, 1000);
        } catch (error) {
            dispatch(fetchCharactersFailure('Charaters are not fetched.'))
            console.error('Error fetching initial characters:', error);
        }
    };

    //This function is used to fetch more characters when the user scrolls to the end of the list ---->
    const fetchMoreCharacters = async () => {
        if (!next) return
        try {
            dispatch(fetchMoreCharactersStart());
            const result = await fetchCharacters(getParams(next))
            dispatch(fetchMoreCharactersSuccess(result as never))
        } catch (error) {
            dispatch(fetchCharactersFailure('Charaters are not fetched.'))
            console.error('Error fetching initial characters:', error);
        }
    }

    //This function is used to refresh the characters when the user pulls down to refresh ---->
    const refreshCharacters = async () => {
        try {
            dispatch(refreshCharactersStart());
            fetchInitialCharacters();
        } catch (error) {
            dispatch(fetchCharactersFailure('Charaters are not fetched.'))
            console.error('Error fetching initial characters:', error);
        }
    };
    return {
        fetchInitialCharacters,
        fetchMoreCharacters,
        refreshCharacters
    }
}

export default useCharacters;