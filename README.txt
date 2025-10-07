# 🗂️ My React Tailwind App (Kanban Board)

An interactive **Kanban Board** built with **React** and **Tailwind CSS**, featuring drag-and-drop support, dark mode, and full responsiveness.

---

## 🚀 Features

- 🎨 **Modern design** with Tailwind CSS and dark mode support.
- 🧩 **Kanban board** for flexible task management.
- 🖱️ **Drag and Drop** functionality using `@hello-pangea/dnd`.
- ⚙️ **Context API** for global state management.
- 🌗 **Theme toggling** between light and dark modes.
- 📱 **Fully responsive** design for all screen sizes.

---

## 🧠 Project Structure

src/
│
├── components/
│   ├── Sidebar.jsx
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── Kanban/
│       ├── KanbanBoard.jsx
│       ├── ColumnsContainer.jsx
│       ├── Column.jsx
│       ├── TaskCard.jsx
│       ├── AddTaskForm.jsx
│       └── AddColumnForm.jsx
│
├── context/
│   ├── KanbanContext.jsx
│   └── ThemeContext.jsx
│
├── pages/
│   └── KanbanPage.jsx
│
├── hooks/
│   └── useAutoScroll.js
│
├── App.jsx
└── main.jsx

---

## 🛠️ Requirements

- Node.js (v16 or higher)
- npm or yarn

---

## ⚙️ Installation and Usage

### 1. Clone the repository
bash
git clone https://github.com/yourusername/my-react-tailwind-app.git
cd my-react-tailwind-app


### 2. Install dependencies
bash
npm install
# or
yarn install

### 3. Run the development server
bash
npm run dev

Then open your browser at:

http://localhost:5173


### 4. Build for production
bash
npm run build


---

## 📦 Dependencies

| Library | Purpose |
|----------|----------|
| **React / React DOM** | Build the user interface |
| **Tailwind CSS** | Fast and responsive styling |
| **@hello-pangea/dnd** | Drag-and-drop functionality |
| **Framer Motion** | Animations and transitions |
| **Lucide React** | Icon set |
| **UUID** | Unique ID generation |

---

## 🧩 Main Components

### 🗃️ `KanbanBoard`
The main component containing all columns and handling drag-and-drop logic.

### 📦 `ColumnsContainer`
Holds all `Column` components and allows adding new columns.

### 🧱 `Column`
Represents a single column that contains multiple tasks.

### 📝 `TaskCard`
Represents a draggable task card.

### 🌙 `ThemeProvider`
Manages light/dark mode using React Context.

---

## 📄 NPM Scripts

| Command | Description |
|----------|--------------|
| `npm run dev` | Run development server |
| `npm run build` | Build for production |

---

## 👩‍💻 Developer

**Nour Alali**  
Frontend Developer — React.js / Next.js  
📍 Syria  
🎓 Computer Engineering — Damascus University

---

## 🧷 License

This project is open source and free to use for learning and personal development.
