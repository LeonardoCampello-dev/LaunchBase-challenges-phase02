const users = [
    {
        name: 'Diego',
        recipes: [115.3, 48.7, 98.3, 14.5],
        expenses: [85.3, 13.5, 19.9]
    },
    {
        name: 'Mayk',
        recipes: [24.6, 214.3, 98.3],
        expenses: [185.3, 12.5, 120.9]
    },
    {
        name: 'Leonardo',
        recipes: [9.6, 120.3, 340.3, 45.5],
        expenses: [485.3, 26.9, 100.0]
    },
    {
        name: 'Gabriela',
        recipes: [600.50, 190.3, 340.3, 45.5],
        expenses: [585.3, 26.9, 100.0, 32.5]
    }
]

function balanceCalculation(userRecipes, userExpenses) {
    let recipes
    let expenses
    let diff
    
    function sumNumbers(numbers) {
        let sum = 0
        
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i]
        }
        
        return sum
    }
    
    recipes = sumNumbers(userRecipes)
    expenses = sumNumbers(userExpenses)
    diff = recipes - expenses

    return diff
}

let diff

for (let i = 0; i < users.length; i++) {
    diff = balanceCalculation(users[i].recipes, users[i].expenses)

    if (diff < 0) {
        console.log(`${users[i].name} possui saldo NEGATIVO de ${diff}`)
    } else {
        console.log(`${users[i].name} possui saldo POSITIVO de ${diff}`)
    }
}

