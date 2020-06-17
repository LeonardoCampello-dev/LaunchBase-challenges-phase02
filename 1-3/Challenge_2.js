const users = [
    {name: 'Ramon', technologies: ['HTML', 'CSS', 'Delphi 3']},
    {name: 'Henrique', technologies: ['HTML', 'CSS', 'PHP']},
    {name: 'Leonardo', technologies: ['HTML', 'JavaScript']},
    {name: 'Diego', technologies: ['JavaScript', 'Node.js', 'ReactJS']},
    {name: 'Eduardo', technologies: ['HTML', 'CSS', 'Delphi 3']}
]

function usesCSS(user) {
    for(let i = 0; i < user.technologies.length; i++){
        if(user.technologies[i] == 'CSS') {
            return true
        } 
    }
    return false
}

for(let i = 0; i < users.length; i++) {
    const workWithCSS = usesCSS(users[i])
    if(workWithCSS) {
        console.log(`O usuário ${users[i].name} trabalha com CSS`)
    }
}