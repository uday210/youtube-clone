import { LightningElement, api } from 'lwc';

class videolist extends LightningElement {
    @api
    videos = [];

    videoselected(event) {
        const video = event.detail;

        console.log('video::: ', video);
        const selectedEvent = new CustomEvent('newvideoselected', {
            detail: video
        });
        this.dispatchEvent(selectedEvent);
        //  console.log('selected video list');
    }
}
export default videolist;
