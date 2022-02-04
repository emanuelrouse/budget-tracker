export default class BudgetTracker {
    constructor(querySelectorString) {
        // grab the main app and store it in the root of this class
        this.root = document.querySelector(querySelectorString);
        // set the innerHTML of the app to equal the BudgetTracker html
        this.root.innerHTML = BudgetTracker.html();

        this.root.querySelector('.new-entry').addEventListener("click", () => {
            this.onNewEntryBtnClick();
        });

        // Load initial data from local storage
        this.load();
    }

    static html() {
        return `
                <table class="budget-tracker">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Type</th>
                    <th>Amount</th>
                    <th></th>
                </tr>
            </thead>
            <tbody class="entries">

            </tbody>
            <tbody>
                <td colspan="5" class="controls">
                    <button type="button" class="new-entry">New Entry</button>
                </td>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="5" class="summary">
                        <strong>Total:</strong>
                        <span class="total">0.00</span>
                    </td>
                </tr>
            </tfoot>
        </table>
        `;
    }

    static entryHtml() {
        return `
        <tr>
            <td>
                <input class="input input-date type="date">
            </td>
            <td>
                <input class="input input-description type="text" placeholder="Add a Description">
            </td>

            <td>
                <select class="input input-type">
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
            </td>
            <td>
                <input class="input input-amount type="number" placeholder="Add a Description">
            </td>
            <td>
                <button type="button" class="delete-entry">&#10005;</button>
            </td>
        </tr>
        `;
    }

    load() {
        // on load read the data and display it in the table
        const entries = JSON.parse(localStorage.getItem("budget-tracker-entries-dev") || "[]");
        // double quotes can create a json data type e.g "[]"
        // loop through objects in the entries
        for (const entry of entries) {
            this.addEntry(entry);
        }
    }

    updateSummary() {
        const total = this.getEntryRows().reduce((total, row) => {
            const amount = row.querySelector(".input-amount").value;
            const isExpense = row.querySelector(".input-type").value === "expense";
            const modifier = isExpense ? -1 : 1;
            return total + (amount * modifier);
        }, 0);

        const totalFormatted = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "USD"
        }).format(total);

        this.root.querySelector(".total").textContent = totalFormatted;
    }

    save() {
        const data = this.getEntryRows().map(row => {
            return {
                date: row.querySelector(".input-date").value,
                description: row.querySelector(".input-description").value,
                type: row.querySelector(".input-type").value,
                amount: parseFloat(row.querySelector(".input-amount").value),
                total: this.root.querySelector(".total").innerText
            };
        });
        // Take data and commit to local storage
        localStorage.setItem("budget-tracker-entries-dev", JSON.stringify(data));
        this.updateSummary();
    }

    addEntry(entry = {}) {
        this.root.querySelector(".entries").insertAdjacentHTML("beforeend", BudgetTracker.entryHtml());

        const row = this.root.querySelector(".entries tr:last-of-type");

        row.querySelector(".input-date").value = entry.date || new Date().toISOString().replace(/T.*/, "");
        row.querySelector(".input-description").value = entry.description || "";
        row.querySelector(".input-type").value = entry.type || "income";
        row.querySelector(".input-amount").value = entry.amount || 0;
        // this.root.querySelector(".total").innerText = entry.total || "0.00";
        row.querySelector(".delete-entry").addEventListener("click", e => {
            this.onDeleteEntryBtnClick(e);
        });
        console.log(this.root.querySelector(".total"))
        row.querySelectorAll(".input").forEach((input) => {
            input.addEventListener("change", () => this.save());
        });
    }

    getEntryRows() {
        // get node list and convert node list into array
        return Array.from(this.root.querySelectorAll(".entries tr"))
    }

    onNewEntryBtnClick() {
        this.addEntry();
        console.log()
        console.log(this.root.querySelector(".total").value);
    }

    onDeleteEntryBtnClick(e) {
        e.target.closest("tr").remove();
        this.save();
    }
}