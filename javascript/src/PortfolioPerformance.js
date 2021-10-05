const prices = [
    { effectiveDate: new Date(2021, 8, 1, 5, 0, 0), price: 35464.53 },
    { effectiveDate: new Date(2021, 8, 2, 5, 0, 0), price: 35658.76 },
    { effectiveDate: new Date(2021, 8, 3, 5, 0, 0), price: 36080.06 },
    { effectiveDate: new Date(2021, 8, 3, 13, 0, 0), price: 37111.11 },
    { effectiveDate: new Date(2021, 8, 6, 5, 0, 0), price: 38041.47 },
    { effectiveDate: new Date(2021, 8, 7, 5, 0, 0), price: 34029.61 },
];

const transactions = [
    { effectiveDate: new Date(2021, 8, 1, 9, 0, 0), value: 0.012 },
    { effectiveDate: new Date(2021, 8, 1, 15, 0, 0), value: -0.007 },
    { effectiveDate: new Date(2021, 8, 4, 9, 0, 0), value: 0.017 },
    { effectiveDate: new Date(2021, 8, 5, 9, 0, 0), value: -0.01 },
    { effectiveDate: new Date(2021, 8, 7, 9, 0, 0), value: 0.1 },
];

const datesForWeek = [
    { effectiveDate: new Date(2021, 8, 1, 5, 0, 0)},
    { effectiveDate: new Date(2021, 8, 2, 5, 0, 0)},
    { effectiveDate: new Date(2021, 8, 3, 5, 0, 0)},
    { effectiveDate: new Date(2021, 8, 6, 5, 0, 0)},
    { effectiveDate: new Date(2021, 8, 7, 5, 0, 0)},

]


// change date format so easier for comparison 
const changeDate = (array)=>{
    for(let i = 0; i < array.length; i++){
        array[i].effectiveDate = array[i].effectiveDate.toISOString().substring(0,10)
    }}


// individually calculates value of bitcoin for that day given
 const valueOfBitcoinForDay = (date) => {
        // gets all values from transaction for a specific day
         const valueList = transactions.map((logs)=> {
            if( logs.effectiveDate === date){ return logs.value}
            else{return 0}
         })
       
        //  calculate the total value earned in that day by adding all values together from previous array created
         const total = valueList.reduce((prevValue, nextValue) => {
             return prevValue + nextValue;
         },0)

        //  returns value from this day specifically
         return total
    }

const mostAppropriatePrice = (date) => {
    // copy and reverse array 
    const reversedArrayOfPrices = prices.slice(0).reverse();
    
    // find object with pricing against appropriate date
    let priceIndex = reversedArrayOfPrices.findIndex((element) => { 
        if(element.effectiveDate === date){
            return true;}
    })
    
    const price = reversedArrayOfPrices[priceIndex].price
    
    return price
}



function getDailyPortfolioValues() {
    // changes all dates to same YYYY-MM-DD format
    changeDate(transactions)
    changeDate(prices)
    changeDate(datesForWeek)

    let totalValue = 0
    
    //  get all data in one list
    const returnValues = datesForWeek.map((dateInfo) => {
        // tallies total value through the run
        totalValue += valueOfBitcoinForDay(dateInfo.effectiveDate)
        
        // returns Price for date
       let pricing = mostAppropriatePrice(dateInfo.effectiveDate)

        return {effectiveDate: dateInfo.effectiveDate,
                value: totalValue * pricing}
    })
    

    return returnValues

}

console.log(getDailyPortfolioValues())

