const programmer = {
    name: 'Leonardo Campello',
    age: '19',
    technologies: [
        { name: 'C++', specialty: 'Desktop'},
        { name: 'Phyton', specialty: 'Data Science'},
        { name: 'JavaScript', specialty: 'Web/Mobile'}
    ]
}

console.log(`O usuário ${programmer.name} tem ${programmer.age} anos e usa a tecnologia ${programmer.technologies[2].name} com especialidade em ${programmer.technologies[2].specialty}`)