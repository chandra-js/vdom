 export const Address = () =>(
    [
        {
            value:'Rakesh',
            name:"First Name",
            key:"first_name",
            requirement:true,
        },
        {
            value:'Shetty',
            name:"Last Name",
            key:"last_name",
            requirement:false,
        },
        {
            value:'South city 1',
            name:"Address Line 1",
            key:"address1"
        },
        {
            value:'1234 - p, st thomas ',
            name:"Address Line 1",
            key:"address2"
        },
        {
            value:'gurgaon',
            name:"City",
            key:"city"
        },
        {
            value:'Haryana',
            name:"State",
            key:"state"
        },
        {
            value:'122303',
            name:"Zip Code",
            key:"zip"
        },
        {
            value:'India',
            name:"Country",
            key:"country"
        }
    ]
 )

export const OrderList = () =>(
    [
        {
            id:1000,
            name:'Stock holm Dinning table',
            qty:1,
            price:529,
            total:529,
            notes:'1st item'
        },
        {
            id:1004,
            name:'Dining Chair',
            qty:1,
            price:300,
            total:300,
            notes:''
        },
        {
            id:1013,
            name:'Oulu Dining Chair(set of 4)',
            qty:3,
            price:340,
            total:1020,
            notes:''
        }
    ]
)

export const Product = () =>(
    {
        id:"",
        name:"",
        price:""
    }
)
