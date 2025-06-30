# ✅ React To-Do List

Uma aplicação de lista de tarefas desenvolvida em **React**, com foco em **produtividade**, **organização**, **estilo moderno** e **responsividade** (mobile-first). Ideal para treinar conceitos fundamentais do React e praticar boas práticas com localStorage, componentes reutilizáveis e controle de estado.

---

## 📸 Demonstração

> Você pode testar o projeto diretamente pelo GitHub Pages:

🔗 **[Acessar o projeto online](https://luisfpamplona.github.io/react-todolist/)**

---

## 🛠️ Funcionalidades

- Adicionar novas tarefas
- Marcar tarefas como concluídas (✔️)
- Editar tarefas existentes
- Excluir tarefas com confirmação
- Filtros: todas, pendentes e concluídas
- Buscar tarefas por texto (search bar)
- Salvar automaticamente no **localStorage**
- Estilização com **Tailwind CSS**
- Responsivo (Mobile First)

---

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── AdicionarTask.jsx
│   ├── Task.jsx
│   ├── Header.jsx
│   ├── Filter.jsx
│   ├── SearchBar.jsx
│   ├── ButtonBar.jsx
│   ├── EditInput.jsx
│   └── DeleteAlerts.jsx
├── storage/
│   └── localStorageUtils.js
├── TodoList.jsx
├── App.jsx
└── main.jsx
```

---

## 🧪 Tecnologias utilizadas

- React
- Tailwind CSS
- Lucide Icons
- Local Storage (API Web)
- Vite (build tool)

---

## 🚀 Como executar o projeto localmente

1. Clone o repositório:
```bash
git clone https://github.com/LuisFPamplona/react-todolist.git
```

2. Instale as dependências:
```bash
npm install
```

3. Execute localmente:
```bash
npm run dev
```

---

## 🌐 Deploy no GitHub Pages

O projeto está publicado usando `gh-pages` com o Vite configurado:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

---

## 👨‍💻 Autor

**Luis Pamplona**  
[GitHub](https://github.com/LuisFPamplona)

---

## 📌 Observações

Esse projeto foi feito com fins educativos como parte do meu aprendizado em desenvolvimento front-end com React. Toda contribuição ou feedback é bem-vindo!