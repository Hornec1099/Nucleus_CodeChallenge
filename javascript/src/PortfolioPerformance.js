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



function getDailyPortfolioValues() {

    const arrayOfDates = prices.map((logOfPricesInfo) => {
        return logOfPricesInfo.effectiveDate
    })

    let index = 0
    let valueCalculated = 0

    const dateAndValueOnDay = arrayOfDates.forEach( (date) => {


        // loop to calculate value as dates go on
         if(transactions[index].effectiveDate === date && index < transactions.length()){
            valueCalculated += transactions[index].value
            index += 1
        }else{
            index += 1
        }
        
       console.log(transactions[index].effectiveDate)

        return {effectiveDate: date.toString, value: valueCalculated}
    })

    return dateAndValueOnDay 
}

console.log(getDailyPortfolioValues())
