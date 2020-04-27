import { LightningElement, api } from 'lwc';

class videoitem extends LightningElement {
    @api
    eachvideo = [];

    constructor() {
        super();
        let _sldsPath =
            'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css';
        const styles = document.createElement('link');
        styles.href = _sldsPath;
        styles.rel = 'stylesheet';
        this.template.appendChild(styles);
    }
    videoselected() {
        const selectedEvent = new CustomEvent('videoselected', {
            bubbles: true,
            detail: this.eachvideo
        });
        this.dispatchEvent(selectedEvent);
        console.log('selected');
    }
}
export default videoitem;
