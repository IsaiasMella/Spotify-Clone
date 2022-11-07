export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    //delete token after developing...
    // token: "BQC0htNgr2PCKKn3IB8Gtls4K6DQ_0BXmdgEb7REK2IRQph-mFzFiLeCBJAQ9HF9TE4_MwHZ0btY9CJ6Ij760BtIMS2nyJ0mfb17kGKfkjKbQDn_Blo1uEwOSL0ZeXO2MjHxP3T3NF5MGOn99rNc9v--EedaNI66LtgVsaWd2RXk8kqQC1_qdhaQYjy52AcVHTEn"

}

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            }
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly
            }
        case 'SET_RECENTLY_PLAYED_TRACK':
            return{
                ...state,
                recently_played_tracks: action.recently_played_tracks
            }

        default:
            break;
    }
}

export default reducer