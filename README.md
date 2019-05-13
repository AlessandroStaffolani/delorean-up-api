# delorean-up-api

DeloreanUp Api - JavaScript client for deloreanUp backend

DeloreanUp backend server is used to generate volume's backup using doc-nodes and send of this backups on a predefined persistent system (eg. NFS, SWIFT, ...)

This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

Install it via:

```shell
npm install delorean-up-api --save
```

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var DeloreanUpApi = require('delorean_up_api');

var api = new DeloreanUpApi.NodesApi()

var nodeId = "nodeId_example"; // {String} ID of the node

var containerId = "containerId_example"; // {String} ID of the container to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.containerBackupPOST(nodeId, containerId, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost:3000/api/v1.0.0*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DeloreanUpApi.NodesApi* | [**containerBackupPOST**](docs/NodesApi.md#containerBackupPOST) | **POST** /nodes/{nodeId}/containers/{containerId}/backup | Create backup of the container passed by Id.
*DeloreanUpApi.NodesApi* | [**containerMountsGET**](docs/NodesApi.md#containerMountsGET) | **GET** /nodes/{nodeId}/containers/{containerId}/mounts | Returns an array of mounts object.
*DeloreanUpApi.NodesApi* | [**nodeContainerByIdGET**](docs/NodesApi.md#nodeContainerByIdGET) | **GET** /nodes/{nodeId}/containers/{containerId} | Returns a container object.
*DeloreanUpApi.NodesApi* | [**nodeContainersGET**](docs/NodesApi.md#nodeContainersGET) | **GET** /nodes/{nodeId}/containers | Returns a list of active container in a node.
*DeloreanUpApi.NodesApi* | [**nodesGET**](docs/NodesApi.md#nodesGET) | **GET** /nodes/ | Returns a list of nodes.


## Documentation for Models

 - [DeloreanUpApi.Backup](docs/Backup.md)
 - [DeloreanUpApi.Container](docs/Container.md)
 - [DeloreanUpApi.ContainerHostConfig](docs/ContainerHostConfig.md)
 - [DeloreanUpApi.ContainerNetworkSettings](docs/ContainerNetworkSettings.md)
 - [DeloreanUpApi.EndpointIPAMConfig](docs/EndpointIPAMConfig.md)
 - [DeloreanUpApi.EndpointSettings](docs/EndpointSettings.md)
 - [DeloreanUpApi.Error](docs/Error.md)
 - [DeloreanUpApi.InlineResponse200](docs/InlineResponse200.md)
 - [DeloreanUpApi.InlineResponse2001](docs/InlineResponse2001.md)
 - [DeloreanUpApi.InlineResponse2002](docs/InlineResponse2002.md)
 - [DeloreanUpApi.InlineResponse2003](docs/InlineResponse2003.md)
 - [DeloreanUpApi.Mount](docs/Mount.md)
 - [DeloreanUpApi.MountBindOptions](docs/MountBindOptions.md)
 - [DeloreanUpApi.MountTmpfsOptions](docs/MountTmpfsOptions.md)
 - [DeloreanUpApi.MountVolumeOptions](docs/MountVolumeOptions.md)
 - [DeloreanUpApi.MountVolumeOptionsDriverConfig](docs/MountVolumeOptionsDriverConfig.md)
 - [DeloreanUpApi.Node](docs/Node.md)
 - [DeloreanUpApi.Port](docs/Port.md)
 - [DeloreanUpApi.Volume](docs/Volume.md)
 - [DeloreanUpApi.VolumeUsageData](docs/VolumeUsageData.md)


## Documentation for Authorization

 All endpoints do not require authorization.

