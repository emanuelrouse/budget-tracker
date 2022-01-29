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

    }

    load() {

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