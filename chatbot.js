
async function loadMenu() {
    const response = await fetch('menu.json');
    return await response.json();
}

function respondToQuery(menuData, query) {
    query = query.toLowerCase();
    let results = [];
    for (const [category, items] of Object.entries(menuData)) {
        const matchedItems = items.filter(item => item.toLowerCase().includes(query));
        if (matchedItems.length > 0) {
            results.push(`📂 <b>${category}</b>:<br>– ${matchedItems.join("<br>– ")}`);
        }
    }
    return results.length > 0 ? results.join("<br><br>") : "No matching menu options found.";
}

document.addEventListener("DOMContentLoaded", async () => {
    const menuData = await loadMenu();
    const form = document.getElementById("chat-form");
    const input = document.getElementById("user-input");
    const chat = document.getElementById("chat");

    form.addEventListener("submit", e => {
        e.preventDefault();
        const userQuery = input.value;
        chat.innerHTML += `<div><b>You:</b> ${userQuery}</div>`;
        const response = respondToQuery(menuData, userQuery);
        chat.innerHTML += `<div><b>Bot:</b> ${response}</div>`;
        input.value = "";
        chat.scrollTop = chat.scrollHeight;
    });
});
