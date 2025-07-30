function showSubcategories(cat) {
    subcatList.innerHTML = '';
    subcatTitle.textContent = cat === 'experience' ? "Choose an experience:" : "Questions you can ask:";
    
    if (cat === 'experience') {
        // Adiciona classe para opções (2 colunas em desktop)
        subcatList.className = 'options';
        data.experience.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.textContent = opt;
            btn.dataset.exp = opt;
            btn.className = 'chatbot-btn exp-btn';
            subcatList.appendChild(btn);
        });
    } else if (cat === 'contact') {
        // Remove classe para links de contato
        subcatList.className = '';
        subcatTitle.textContent = "Contact Options:";
        subcatList.innerHTML = `
            <a href="https://www.linkedin.com/in/rayanepaula" target="_blank">LinkedIn</a>
            <a href="mailto:rayane.do.nascimento@accenture.com">Email</a>
            <a href="tel:+1 (438) 728 6481">Phone</a>
        `;
    } else {
        // Adiciona classe para perguntas (1 coluna)
        subcatList.className = 'questions';
        for (let question in data[cat]) {
            const btn = document.createElement('button');
            btn.textContent = question;
            btn.dataset.question = question;
            btn.className = 'chatbot-btn question-btn';
            subcatList.appendChild(btn);
        }
    }
    
    categoriesDiv.style.display = "none";
    subcategoriesDiv.style.display = "block";
    conversationState = cat;
}