/**
 * DeloreanUp API
 * Server used to generate volume's backup using doc-nodes and send of this backups on a predefined persistent system (eg. NFS, SWIFT, ...)
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.5
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DeloreanUpApi);
  }
}(this, function(expect, DeloreanUpApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DeloreanUpApi.Volume();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Volume', function() {
    it('should create an instance of Volume', function() {
      // uncomment below and update the code to test Volume
      //var instance = new DeloreanUpApi.Volume();
      //expect(instance).to.be.a(DeloreanUpApi.Volume);
    });

    it('should have the property name (base name: "Name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new DeloreanUpApi.Volume();
      //expect(instance).to.be();
    });

    it('should have the property driver (base name: "Driver")', function() {
      // uncomment below and update the code to test the property driver
      //var instance = new DeloreanUpApi.Volume();
      //expect(instance).to.be();
    });

    it('should have the property mountpoint (base name: "Mountpoint")', function() {
      // uncomment below and update the code to test the property mountpoint
      //var instance = new DeloreanUpApi.Volume();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "CreatedAt")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new DeloreanUpApi.Volume();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "Status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new DeloreanUpApi.Volume();
      //expect(instance).to.be();
    });

    it('should have the property labels (base name: "Labels")', function() {
      // uncomment below and update the code to test the property labels
      //var instance = new DeloreanUpApi.Volume();
      //expect(instance).to.be();
    });

    it('should have the property scope (base name: "Scope")', function() {
      // uncomment below and update the code to test the property scope
      //var instance = new DeloreanUpApi.Volume();
      //expect(instance).to.be();
    });

    it('should have the property options (base name: "Options")', function() {
      // uncomment below and update the code to test the property options
      //var instance = new DeloreanUpApi.Volume();
      //expect(instance).to.be();
    });

    it('should have the property usageData (base name: "UsageData")', function() {
      // uncomment below and update the code to test the property usageData
      //var instance = new DeloreanUpApi.Volume();
      //expect(instance).to.be();
    });

  });

}));