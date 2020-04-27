import { LightningElement, api } from 'lwc';

class videodetails extends LightningElement {
    @api
    selectedvideo = null;
    videoSrc = '';

    connectedCallback() {
        console.log('__________________________________');
        console.log(this.selectedvideo);
        console.log(JSON.stringify(this.selectedvideo));
        const video = JSON.parse(JSON.stringify(this.selectedvideo));
        this.videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    }
    @api
    refresh() {
        console.log('refresh component');
        console.log(
            'IN Detail JS ',
            JSON.parse(JSON.stringify(this.selectedvideo)).id.videoId
        );
        const videoId = JSON.parse(JSON.stringify(this.selectedvideo)).id
            .videoId;
        this.videoSrc = `https://www.youtube.com/embed/${videoId}`;
    }
}

export default videodetails;
