const user = {
    name: 'Leonardo Campello',
    transactions: [],
    balance: 0,
    averageTransactionValue: 0
}

function createTransaction(transaction) {
    user.transactions.push(transaction)
}

function transactionType(user) {
    for (let transaction of user.transactions) {
        if (transaction.type == 'credit') {
            user.balance += transaction.value
        } else if (transaction.type == 'debit') {
            user.balance -= transaction.value
        }
    }
}

function getHigherTransactionByType(transactionType, user) {
    let biggestValue = 0
    let biggestTransaction

    for (let transaction of user.transactions) {
        if (transaction.value > biggestValue && transaction.type == transactionType) {
            biggestValue = transaction.value
            biggestTransaction = transaction
        }
    }
    console.log('Highest value transaction:')
    console.log(biggestTransaction)
}

function getAverageTransactionValue(user) {
    let sum = 0
    let average

    for (let transaction of user.transactions) {
        sum += transaction.value
    }

    average = sum / user.transactions.length

    return average
}

function getTransactionsCount(user) {
    let credit = 0
    let debit = 0

    user.numberOfTransactions = {}
    user.numberOfTransactions.credit
    user.numberOfTransactions.debit

    for (transaction of user.transactions) {
        if (transaction.type == 'credit') {
            credit++
        } else if (transaction.type == 'debit') {
            debit++
        } 
    }

    user.numberOfTransactions.credit = credit
    user.numberOfTransactions.debit = debit
}

createTransaction({ type: 'credit', value: 50.5 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'credit', value: 396.5 })
createTransaction({ type: 'debit', value: 32.99 })
createTransaction({ type: 'debit', value: 230.50 })

transactionType(user)

getHigherTransactionByType('credit', user)
getHigherTransactionByType('debit', user)

user.averageTransactionValue = getAverageTransactionValue(user)

getTransactionsCount(user)

console.log(user)


