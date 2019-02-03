// const data = require('./../../data/host-app-data.json');
import data from '../../data/host-app-data';

const TOP_APPLICATIONS = 25;

export default class App {
    constructor(appData = {}) {
        // this.id = appData, //implementation without id and binarySearch
        this.apdex = appData.apdex || 0;
        this.contributors = appData.contributors || [];
        this.host = appData.host || [];
        this.name = appData.name || 'Unbranded Steel Towels - Abbott LLC, In';
        this.version = appData.version || 0
    }

    // Get all apps and sort it.
    getAllApps() {
        if(data) this.list = data.sort((x, y) => y.apdex - x.apdex);
        return this.list;

    }
    // Get top 25 apps by host
    getTopAppsByHost(hostName) {
        if(this.list){
            this.topApps = this.list.filter(x => x.host.indexOf(hostName) !== -1).slice(0, TOP_APPLICATIONS);
            return this.topApps;
        }
    }
}
