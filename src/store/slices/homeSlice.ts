import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiResoponseType, CharacterType } from "../../types/character";

interface HomeState {
    characters: CharacterType[];
    loading: boolean;
    error: string | null;
    refreshing: boolean;
    loadingMore: boolean;
    next: string | null;
}

const initialState: HomeState = {
    characters: [],
    loading: false,
    error: null,
    refreshing: false,
    loadingMore: false,
    next: null,
};

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        fetchCharactersStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchCharactersSuccess(state, action: PayloadAction<ApiResoponseType>) {
            const { data, next } = action.payload
            state.characters = data;
            state.loading = false;
            state.refreshing=false;
            state.error = null;
            state.next = next
        },
        fetchCharactersFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        fetchMoreCharactersStart(state) {
            state.loadingMore = true;
            state.error = null;
        },
        fetchMoreCharactersSuccess(state, action: PayloadAction<ApiResoponseType>) {
            const { data, next } = action.payload;
            state.characters = [...state.characters, ...data];
            state.loadingMore = false;
            state.error = null;
            state.next = next;
        },
        refreshCharactersStart(state) {
            state.refreshing = true;
            state.error = null;
        },
    },
});

export const {
    fetchCharactersStart,
    fetchCharactersSuccess,
    fetchCharactersFailure,
    fetchMoreCharactersStart,
    fetchMoreCharactersSuccess,
    refreshCharactersStart
} = homeSlice.actions;

export default homeSlice.reducer;