export default class BudgetTracker {
    constructor(querySelectorString) {
        // grab the main app and store it in the root of this class
        this.root = document.querySelector(querySelectorString);
        // set the innerHTML of the app to equal the BudgetTracker html
        // .html is a jQuery method?
        this.root.innerHTML = BudgetTracker.html();
    }

    static html() {

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