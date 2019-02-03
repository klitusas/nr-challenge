
var assert = require('assert');
import App from './src/js/models/App';
import Host from './src/js/models/Host';



describe('Basic Mocha String Test', function () {

  it('should return an array with length of 10000', function (done) {
    const app = new App();
    app.getAllApps();
    assert.equal(app.list.length, 10000);
    done();
  });

  it('should return top 25 apps per host sorted by apdex a host name', function (done) {
    const app = new App();
    const hostname = "92116865-5462.conor.com";
    app.getAllApps();
    assert.equal(app.list.length, 10000);
    app.getTopAppsByHost(hostname);
    assert.equal(app.topApps.length, 25);
    assert.equal(app.topApps[0].apdex, 100);
    assert.equal(app.topApps[1].apdex, 100);
    done()
  });

  it('should add app to hosts and return array with length of 10001', function (done) {
    const app = new App();
    app.getAllApps();
    const host = new Host(app.list);
    const newApp = new App({
      apdex: 100,
      contributors: [],
      host: [],
      name: "Rustic Steel Shoes - Fritsch, Tremblay and Thompson, LLC",
      id: 'd',
      version: 4
    });
    const hosts = ["92116865-5462.conor.com"];
    host.addAppToHosts(newApp, hosts);
    assert.equal(host.apps.length, 10000);
    done()
  });

  it('should remove app from hosts and return array with length of 9999', function (done) {
    const app = new App();
    app.getAllApps();
    const host = new Host(app.list);
    const newApp = new App({
      apdex: 100,
      contributors: [],
      host: [],
      name: "Unbranded Steel Towels - Abbott LLC, Inc",
      id: 'd',
      version: 4
    });
    host.removeAppFromHosts(newApp);
    assert.equal(host.apps.length, 9999);
    done()
  });

});