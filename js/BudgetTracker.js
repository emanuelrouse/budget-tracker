export default class BudgetTracker {
    constructor(querySelectorString) {
        // grab the main app and store it in the root of this class
        this.root = document.querySelector(querySelectorString);
        // set the innerHTML of the app to equal the BudgetTracker html
        this.root.innerHTML = BudgetTracker.html();

        this.root.querySelector('.new-entry').addEventListener("click", () => {
            this.onDeleteEntryBtnClick();
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
        const entries = JSON.parse(localStorage.getItem("budget-tracker-entries-div") || "[]");
        // double quotes can create a json data type e.g "[]"

        // loop through objects in the entries
        for (const entry of entries) {
            this.addEntry(entry);
        }
        console.log(entries);
    }

    updateSummary() {

    }

    save() {

    }

    addEntry(entry = {}) {

    }

    getEntryRows() {

    }

    onNewEntryBtnClick() {

    }

    onDeleteEntryBtnClick(e) {

    }
}