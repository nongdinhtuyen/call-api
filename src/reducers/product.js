let initialState = [
    {
        id:1,
        name: 'meow1',
        price: 200,
        status: true,
    },
    {
        id:2,
        name: 'meow2',
        price: 300,
        status: true,
    },
    {
        id:3,
        name: 'meow3',
        price: 400,
        status: false,
    },
]

const products = (state = initialState, action) => {
    switch(action.type){
        default: return [...state]
    }
}

export default products;