import { LightningElement } from 'lwc';

class searchbar extends LightningElement {
    searchTerm = '';

    constructor() {
        super();
        let _sldsPath =
            'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css';
        const styles = document.createElement('link');
        styles.href = _sldsPath;
        styles.rel = 'stylesheet';
        this.template.appendChild(styles);
    }
    searchTermChanged(event) {
        //   console.log(event.target.value);
        this.searchTerm = event.target.value;
    }
    doFormSubmit(event) {
        event.preventDefault();
        // console.log(this.searchTerm);
        const selectedEvent = new CustomEvent('changesearchterm', {
            detail: this.searchTerm
        });
        this.dispatchEvent(selectedEvent);
    }
}

export default searchbar;
