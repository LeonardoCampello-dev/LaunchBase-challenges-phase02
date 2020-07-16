<h1 align = "center"> 
    <img src="https://camo.githubusercontent.com/268b1344409fac98c4eeda520482b6910c4ddcba/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f676f6c64656e2d77696e642f626f6f7463616d702d6c61756e6368626173652f6c6f676f2e706e67">
</h1>

## 🚀 Tecnologias utilizadas 

Os desafios foram feitos usando as seguintes tecnologias

- **[JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)**
- **[Node.js](https://nodejs.org/en/)**
- **[Nunjucks](https://mozilla.github.io/nunjucks/)**

## <center> 💻 Introdução à programação WEB </center>

## <center> **Desafio 1-1:** Primeiros passos com JS </center>

### 👨‍💻 **Atividades**

- **Cálculo de IMC;**
- **Cálculo de aposentadoria.**

### 📚 **Conceitos estudados**
- [x] Variáveis;
- [x] Condicionais;
- [x] Operadores.

## <center> **Desafio 1-2:** Lidando com objetos e vetores </center>

### 👨‍💻 **Atividades**

- **Construção e impressão de objetos;**
- **Vetores e objetos.**

### 📚 **Conceitos estudados**
- [x] Objetos; 
- [x] Vetores.

## <center> **Desafio 1-3:** Funções e estruturas de repetição </center>

### 👨‍💻 **Atividades**

- **Usuários e tecnologias;**
- **Busca por tecnologia;**
- **Soma de despesas e receitas.**

### 📚 **Conceitos estudados**
- [x] Funções e métodos;
- [x] Estruturas de repetição;
- [x] Escopos.


## <center> **Desafio 1-4:** Aplicação: Operações bancárias </center>

### 👨‍💻 **Atividades**

- **Operações bancárias;**

### 📚 **Conceitos estudados**
- [x] Booleanos;
- [x] Organização;
- [x] Padronização;
- [x] Escrita. 

--- 

## <center> 🎀 Iniciando no Front-end </center>

## <center> **Desafio 2-1:** Primeiro HTML </center>

### 🎨 **Atividades**

> Criar um arquivo html que contenha um favicon e um header com 3 links: Comunidade, Email e Telefone.

### 📚 **Conceitos estudados**

- [x] Links;
- [x] Background;
- [x] Fontes;
- [x] Espaçamentos. 

## <center> **Desafio 2-2:** Página de descrição </center>

### 🎨 **Atividades**

> A partir do arquivo do desafio 2-1, adicionar um novo link no header chamado Sobre. Essa página deverá mostrar informações referentes a Rocketseat.

### 📚 **Conceitos estudados**

- [x] Imagens;
- [x] Textos;
- [x] Listas;
- [x] Bordas;
- [x] CSS em links.   

### 🔨 Resultados

![Home](/previews/home.gif)

---

## <center> **Desafio 2-3:** Página de cursos e iframe </center>

### 🎨 **Atividades**

> A partir do arquivo do desafio 2.2, adicionar no header um link chamado Conteúdos. Essa página deve conter um grid onde devem ser mostrados os 3 principais cursos da Rocketseat: Starter, Launchbase e GoStack. Ao clicar em um dos cursos, deve ser aberta uma modal onde um iframe irá carregar as informações do curso selecionado.


### 📚 **Conceitos estudados**

- [x] Grid;
- [x] Alinhamento;
- [x] DOM;
- [x] Modal;

### 🔨 Resultados

![Courses](/previews/courses.gif)

---

## <center> 📅 Iniciando no Back-end </center>

## <center> **Desafio 3-1:** Primeiro servidor </center>

### 👨‍🍳 **Atividades**

> Nesse desafio você deve criar um servidor que tenha duas rotas que devem retornar o conteúdo dos html gerados no desafio 2-3 (páginas de **Cursos** e **Sobre**). Além disso, deve ser implementando um arquivo padrão (layout.njk) que reaproveite o código em comum entre esses dois e também um arquivo que sirva uma página de erro 404.

- Erro 404 é comum aparecer em páginas da internet, quando não foi encontrado nenhum conteúdo.


### 📚 **Conceitos estudados**

- [x] Servidor;
- [x] Rotas;
- [x] Template Engine;
- [x] Requisições.

### 🔨 Resultados

![404](/previews/404.gif)

---

## <center> **Desafio 3-2:** Arquivos nunjucks e dados dinâmicos </center>

### 👨‍🍳 **Atividades**

> Nesse desafio você deve atualizar os arquivos com informações de cursos e descrição de forma dinâmica.


### 📚 **Conceitos estudados**

- [x] Dados dinâmicos;
- [x] Estruturas condicionais;
- [x] Template Engine.


#### 📁 Arquivos utilizados

**courses.njk**

``` html 

{% extends "layout.njk" %}

{% block head %}


<link rel="stylesheet" href="/styles/courses-page.css">
<link rel="stylesheet" href="/styles/modal.css">
<title>Cursos</title>

{% endblock %}

{% block content %}

<div class="container">
    <div class="page-title">
        <h1>Cursos</h1>
    </div>
    <div class="content-page">

        {% for item in items %}

        <section class="card" id="{{ item.id }}">
            <div class="card-content">
                <h1 class="{{ item.color }}">{{ item.card_number }}</h1>
                <img src="/assets/{{ item.id }}.svg" alt="{{ item.id }}">
                <p>{{ item.description }}</p>
                <div class="card-footer">
                    <h3>Módulos: {{ item.modules }}</h3>
                    <a class="price {{ item.color }}">{{ item.price }}</a>
                </div>
            </div>
            {{ item.vacancy }}
        </section>

        {% endfor %}

    </div>
</div>

<script src="script.js"></script>

{% endblock %}

```

---

**courses-data.js**

``` js

module.exports = [
    {
        card_number: "01",
        id: "Starter",
        description: '<strong class="purple">Torne-se um programador desejado</strong> no mercado com esses cursos gratuitos',
        modules: "20",
        price: "Free",
        color: "purple"
    },
    {
        card_number: "02",
        id: "Launchbase",
        description: '<strong class="orange">Domine a programação do zero</strong> e tenha acesso às melhores oportunidades do mercado',
        modules: "50",
        price: "$$$",
        color: "orange"
    },
    {
        card_number: "03",
        id: "Gostack",
        description: '<strong class="green">Treinamento imersivo</strong> nas tecnologias mais modernas de desenvolvimento web e mobile',
        modules: "72",
        price: "$$$",
        vacancy: '<a href="https://rocketseat.com.br/gostack" target="_blank"><p><strong>Garanta a sua vaga</strong> para a próxima turma!</p></a>',
        color: "green"
    }
]

```
---

## <center> **Desafio 3-3:** Página de descrição do curso </center>

### 👨‍🍳 **Atividades**

> Nesse desafio você deve criar uma página de descrição do curso que deve ser chamada no lugar da modal quando o usuário clicar no card do curso.

### 📚 **Conceitos estudados**

- [x] Rotas;
- [x] Route params;
- [x] Iteração de Array;
- [x] Template Engine.

### 🔨 Resultados

![Details](/previews/details.gif)

# 📜 Licença

Realizado em 2020. Esse projeto está sob a [licença MIT](/LICENSE).

## Feito com 💚 por Leonardo Campello 