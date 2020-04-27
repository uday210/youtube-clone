import { LightningElement, track } from 'lwc';
import axios from 'axios';
export default class App extends LightningElement {
    videos = [];
    @track
    selectedVideo = null;
    searchTerm = '';
    renderVideoDetails = false;
    constructor() {
        super();
        let _sldsPath =
            'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css';
        const styles = document.createElement('link');
        styles.href = _sldsPath;
        styles.rel = 'stylesheet';
        this.template.appendChild(styles);
    }
    searchTermChange(event) {
        console.log('in App component');
        this.searchTerm = event.detail;

        console.log('searchTerm ', this.searchTerm);
        this.getYoutubevides();
    }

    async getYoutubevides() {
        this.renderVideoDetails = false;
        const youtube = axios.create({
            baseURL: 'https://www.googleapis.com/youtube/v3'
        });

        const responce = await youtube.get('search', {
            params: {
                key: '[GOOGLE APIKEY]',
                maxResults: 5,
                part: 'snippet',
                q: this.searchTerm
            }
        });
        console.log(responce.data.items);
        this.videos = responce.data.items;
        this.selectedVideo = responce.data.items[0];
        console.log('responce.data.items[0] : ', responce.data.items[0]);
        this.renderVideoDetails = true;
    }

    handlevideoselected(event) {
        this.selectedVideo = JSON.parse(JSON.stringify(event.detail));
        console.log(
            'IN APP JS ',
            JSON.parse(JSON.stringify(event.detail)).id.videoId
        );
        this.template.querySelector('my-videodetails').refresh();
        // this.renderVideoDetails = true;
    }
}
