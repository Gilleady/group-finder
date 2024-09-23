# Group Finder

## Descrição

Este projeto é uma aplicação web simples para gerenciar grupos. A aplicação permite:

* Criar novos grupos com nome e descrição.
* Adicionar membros aos grupos.
* Visualizar os detalhes de um grupo (nome, descrição, membros).

## Como Usar

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Gilleady/group-finder.git
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Execute a aplicação:**

   ```bash
   npm start
   ```

## Estrutura do Projeto

```
src/
  ├── components/
  │   ├── Button/
  │   │   └── Button.css
  │   │   └── Button.jsx
  │   ├── GroupForm/
  │   │   ├── GroupForm.css
  │   │   └── GroupForm.jsx
  │   ├── GroupItem/
  │   │   ├── GroupItem.css
  │   │   ├── GroupItem.jsx
  │   ├── GroupList/
  │   │   ├── GroupList.css
  │   │   ├── GroupList.jsx
  │   ├── GroupName/
  │   │   ├── GroupName.css
  │   │   ├── GroupName.jsx
  │   ├── Header/
  │   │   ├── Header.css
  │   │   ├── Header.jsx
  │   ├── PeopleList/
  │   │   ├── PeopleList.css
  │   │   ├── PeopleList.jsx
  │   ├── PersonItem/
  │   │   ├── PersonItem.css
  │   │   ├── PersonItem.jsx
  ├── App.css
  ├── App.jsx
  └── index.css
  └── index.js
```

## Tecnologias Utilizadas

* React
* TypeScript
* CSS