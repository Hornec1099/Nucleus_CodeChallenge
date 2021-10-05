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
// change date format so easier for comparison 
const changeDate = (array)=>{
    for(let i = 0; i < array.length; i++){
        array[i].effectiveDate = array[i].effectiveDate.toISOString().substring(0,10)
    }}



    const valueForDay = (date) => {
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

    

function getDailyPortfolioValues() {

    changeDate(transactions)
    changeDate(prices)


    console.log(valueForDay(transactions[3].effectiveDate))

    return []

}

console.log(getDailyPortfolioValues())

