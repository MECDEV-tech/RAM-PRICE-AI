const ramData = [
    { name: "Corsair 8GB DDR4", price: 28 },
    { name: "Kingston 16GB DDR4", price: 55 },
    { name: "Crucial 8GB DDR4", price: 26 },
    { name: "ADATA 16GB DDR4", price: 50 },
    { name: "G.Skill 8GB DDR4", price: 30 }
];

function searchRAM() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    let filtered = ramData.filter(ram =>
        ram.name.toLowerCase().includes(input)
    );

    // AI logic: sort by cheapest price
    filtered.sort((a, b) => a.price - b.price);

    if (filtered.length === 0) {
        resultsDiv.innerHTML = "<p>No RAM found</p>";
        return;
    }

    filtered.forEach((ram, index) => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
            <h3>${ram.name}</h3>
            <p>Price: $${ram.price}</p>
            ${index === 0 ? "<strong>🤖 Best Value Recommended</strong>" : ""}
        `;
        resultsDiv.appendChild(div);
    });
}
