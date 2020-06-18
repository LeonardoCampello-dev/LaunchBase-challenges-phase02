console.log('Retirement calculation\n')

const name = 'Nancy'
const sex = 'Female'
const age = 75
const contribution = 57

const contributionSum = age + contribution

if(sex == 'Male' && contributionSum >= 95) {
    console.log(`${name}, you can retire!` + `\nContribution years: ${contribution}`)
} else if(sex == 'Female' && contributionSum >= 85) {
    console.log(`${name}, you can retire!` + `\nContribution years: ${contribution}`)
} else {
    console.log(`${name}, you still can't retire.` + `\nContribution years: ${contribution}`)
}