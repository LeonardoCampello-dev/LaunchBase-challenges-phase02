const users = [
    {name: 'Ramon', technologies: 'HTML, CSS'},
    {name: 'Henrique', technologies: 'HTML, CSS, PHP'},
    {name: 'Leonardo', technologies: 'HTML, CSS, JavaScript'},
    {name: 'Diego', technologies: 'JavaScript, Node.js, ReactJS'}
]

for(let i = 0; i < users.length; i++) {
    console.log(`${users[i].name} trabalha com ${users[i].technologies}`)
}