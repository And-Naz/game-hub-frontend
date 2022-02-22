
// Default State
const defaultState = {
    isOpen: false,
    bagData: [
        {
            id: 1,
            name: "1 game Name",
            title: "Title",
            price: 100,
            description: "lorem/......",
            icon: "https://img-b.udemycdn.com/course/100x100/2306438_6b73_6.jpg?secure=RZSu3wMcWu3-mr125HV93A%3D%3D%2C1645469718"
        },
        {
            id: 2,
            name: "2 game Name",
            title: "Title",
            price: 100,
            description: "lorem/......",
            icon: "https://img-b.udemycdn.com/course/100x100/2306438_6b73_6.jpg?secure=RZSu3wMcWu3-mr125HV93A%3D%3D%2C1645469718"
        },
        {
            id: 3,
            name: "3 game Name",
            title: "Title",
            price: 100,
            description: "lorem/......",
            icon: "https://img-b.udemycdn.com/course/100x100/2306438_6b73_6.jpg?secure=RZSu3wMcWu3-mr125HV93A%3D%3D%2C1645469718"
        },
        // {
        //     id: 1,
        //     src: "https://www.addictinggames.com/embed/html5-games/18346",
        //     name: 'Shards',
        //     description: 'Jackson Isai? Tu quoque … A te quidem a ante. Vos scitis quod blinking res Ive ‘been vocans super vos? Et conteram illud, et conteram hoc. Maledicant druggie excors. Iam hoc tu facere conatus sum ad te in omni tempore? Ludum mutavit. Verbum est ex. Et … sunt occidat. Videtur quod est super omne oppidum. […]',
        //     rating: "67",
        //     Genres: [
        //         {
        //             id: 1,
        //             name: 'Shooter',
        //             url: 'filter/Genres/Shooter/'
        //         },
        //         {
        //             id: 2,
        //             name: 'action',
        //             url: 'filter/Genres/action/'
        //         }
        //     ],
        //     Features: [
        //         {
        //             id: 1,
        //             name: 'Co-op',
        //             url: 'filter/Features/Co-op/'
        //         },
        //         {
        //             id: 2,
        //             name: 'Multiplayer',
        //             url: 'filter/Features/Multiplayer/'
        //         }
        //     ],
        //     year: {
        //         name: '2021',
        //         url: 'filter/year/2021/'
        //     },
        //     country: {
        //         name: 'Armenia',
        //         url: 'filter/country/Armenia/'
        //     },
        //     created: {
        //         name: 'Vardan-Petrosyan',
        //         url: 'filter/created/Vardan-Petrosyan/'
        //     },
        //     price: '0',
        //     saleFrom: '27.0',
        //     sale: false,
        //     url: `${Shareds}`,
        //     date: '21st March 2015',
        //     tags: [{
        //         id: 1,
        //         name: 'Bloodborne',
        //         url: '/bloodborne'
        //     },
        //         {
        //             id: 2,
        //             name: 'first try',
        //             url: '/first-try'
        //
        //         },
        //         {
        //             id: 3,
        //             name: 'first boss problem',
        //             url: '/first-boss-problem'
        //
        //         },
        //     ],
        // },
    ],
}

// Reducer
export default function bagReducer(state = defaultState, {type, payload} = {}) {
    switch (type) {
        case "bagReducer/SET_BAG": {
            return {...state, isOpen: !state.isOpen}
        }
        case "bagReducer/DELETE_BAG_ITEM": {
            return {...state, bagData: state.bagData.filter((item) => item.id !== payload ) }
        }
        default:
            return state;
    }
}

// Actions
export const setBag = () => ({
    type: 'bagReducer/SET_BAG'
});

export const deleteItem = (payload) => ({
    type: 'bagReducer/DELETE_BAG_ITEM',
    payload
})
// export const setBag = function () {
//     return {type: 'bagReducer/SET_BAG'}
// }

// export const setUser = Asynchronous(SET_USER)
