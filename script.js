function goNext() {
  window.location.href = "complaint.html";
}

function submitComplaint() {
  let complaint = {
    category: document.getElementById("category").value,
    description: document.getElementById("description").value,
    status: "Pending"
  };

  let data = JSON.parse(localStorage.getItem("complaints")) || [];
  data.push(complaint);
  localStorage.setItem("complaints", JSON.stringify(data));

  window.location.href = "success.html";
}

// ADMIN PAGE
if (window.location.pathname.includes("admin.html")) {
  let data = JSON.parse(localStorage.getItem("complaints")) || [];
  let container = document.getElementById("complaints");

  data.forEach((c, i) => {
    container.innerHTML += `
      <div style="margin:10px; padding:10px; border:1px solid #ddd;">
        <b>${c.category}</b>
        <p>${c.description}</p>
        <p>Status: ${c.status}</p>
        <button onclick="updateStatus(${i}, 'In Progress')">🔄</button>
        <button onclick="updateStatus(${i}, 'Resolved')">✅</button>
      </div>
    `;
  });
}

function updateStatus(index, status) {
  let data = JSON.parse(localStorage.getItem("complaints"));
  data[index].status = status;
  localStorage.setItem("complaints", JSON.stringify(data));
  location.reload();
}
