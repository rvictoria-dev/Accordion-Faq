# Accordion-Faq

### ✨ About

A lightweight and interactive FAQ component built with React. Designed to present questions and answers in a clean, accessible way with smooth open and close animations on each item.

---

### 🌟 Features

- Smooth height animation when opening and closing each item
- Only one question open at a time
- Icon rotates from + to x on toggle
- Fully built with React, no external libraries
- Easy to customize

---

### 📁 Project Structure

````
accordion-faq/
└── src/
    ├── components/
    │   └── AccordionItem.jsx
    ├── data/
    │   └── faqs.js
    ├── styles/
    │   └── App.css
    ├── App.jsx
    └── index.js
````

---

### 🛠️ Built With

- **JavaScript**
- **JSX**
- **CSS**

---

### 💡 What I Learned

- Learned how ``useRef`` can be used for more than just accesing DOM elements, it can also help measure content dynamically for smooth animations
- Got more comfortable with ``useEffect`` by seeing how it responds to state changes and updates the UI when needed
- Understood why lifting state up is important. Managing the active accordion item from the parent component makes it easy to control which section is open
- Experimented with custom ``cubic-bezier`` timing functions and saw how small animation tweaks can make an interface feel much more polished

---

### 🎬 Preview

https://github.com/user-attachments/assets/75a9af28-b735-4daa-b9a4-bdb0cba2525d
