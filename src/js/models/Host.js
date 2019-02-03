export default class Host {

    constructor(apps) {
        // sorted by apdex
        this.apps = apps;
    }

    // Find all unique hosts
    findAllHost() {
        const hosts = new Set();
        this.apps.forEach(app => {
            app.host.map(host => {
                hosts.add(host);
            })
        });
        this.allHosts = Array.from(hosts);
        return this.allHosts;
    }

    // Create an object that represents host and x amount apps within it
    appsPerHost(name, amount) {
        const aph = this.apps.reduce(
            (acc, val) => ({
                host: name,
                apps: (val.host.indexOf(name) !== -1 && acc.apps.length < amount)
                    ? acc.apps.concat(val)
                    : acc.apps
            }),
            { host: name, apps: [] }
        );
        return aph;
    };

    // Add app to hosts
    addAppToHosts(newApp, hosts) {
        for (const app of this.apps) {
            if (newApp.name === app.name) {
                hosts.forEach(host => app.host.push(host));
                return this.apps;
            }
            else {
                // if cannot find then we add it as new app
                hosts.forEach(host => newApp.host.push(host));
                this.apps.push(newApp);
                this.apps.sort((x, y) => y.apdex - x.apdex);
                return this.apps;
            }
        }
    }

    // Remove app from hosts
    removeAppFromHosts(app) {
        for (const [index, item] of this.apps.entries()) {
            if (app.name === item.name) {
                this.apps.splice(index, 1);
                return this.apps;
            }
        }
    }
}
