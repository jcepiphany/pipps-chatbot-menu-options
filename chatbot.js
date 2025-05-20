const menuData = {
  "Files": [ "Client", "Client Type", "Item", "Item Category", "Insurance", "Insurance Plan", "Prescriber", "Vendor", "Expired Goods Code", "Department", "Diagnosis Codes", "Procedure Codes", "Prescription Codes", "Reject Codes", "Gct Rate", "Company" ],
  "Pharmacy": [ "Process Prescriptions", "Reverse Prescription", "Prescription Print Label", "Prescription Billing", "Open Prescription", "Print Receipt", "Client Query", "Prescription Reports", "Prescription Sales (Daily)", "Prescription Sales (Monthly)", "Prescription JADEP", "Generate NHF Audit File", "Graphs: Sales, Count, Movement" ],
  "Physician": [ "Patient Care", "Appointments", "Billing Entry", "Billing Reverse", "Billing Open", "Print Receipt", "On Account Transfer", "Query Client", "Transaction Reports", "Claims", "Sales Statistics", "Salary Deduction Register" ],
  "POS": [ "Cash Sale", "Refund Cash Sale", "Print Receipt", "Modify Payment Detail", "Invoice", "Credit Note", "Transaction Register", "Sales Figures", "Item Sales Statistics" ],
  "Inventory": [ "Inventory Management", "Goods Received", "Adjustments", "Request Goods", "Receive Request", "Expiry Date", "Generate Reorder", "Process Expired", "Stocktaking", "Reports" ],
  "Financials": [ "Account Payment", "Online Payment", "Back Dated Payment", "Receipts", "Account Queries", "Unpaid Invoice Summary", "Payment Register", "Transaction Register" ],
  "Claims": [ "Reconcile Electronic Claims (Pharmacy)", "Manual Claims Submitted", "Manual Claims With/Without Subscriber", "Reports", "Reconcile Electronic Claims (Physician)" ],
  "Reports": [ "Audit Logs", "Merge Logs", "On Account Logs", "Security Logs", "Cashier Reports", "End of Day Summary", "Client Category" ],
  "Security": [ "New User", "Permissions", "Change Password", "Reset Password", "Assign Physician", "Retire User" ],
  "Tools": [ "Options", "Salary Deduction Tools", "Merge History", "Fixes", "Data Load", "Give Discount", "System Administrator" ]
};

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

document.addEventListener("DOMContentLoaded", () => {
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
