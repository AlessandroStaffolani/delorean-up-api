# DeloreanUpApi.NodesApi

All URIs are relative to *http://localhost:3000/api/v1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**containerBackupPOST**](NodesApi.md#containerBackupPOST) | **POST** /nodes/{nodeId}/containers/{containerId}/backup | Create backup of the container passed by Id.
[**containerMountsGET**](NodesApi.md#containerMountsGET) | **GET** /nodes/{nodeId}/containers/{containerId}/mounts | Returns an array of mounts object.
[**nodeContainerByIdGET**](NodesApi.md#nodeContainerByIdGET) | **GET** /nodes/{nodeId}/containers/{containerId} | Returns a container object.
[**nodeContainersGET**](NodesApi.md#nodeContainersGET) | **GET** /nodes/{nodeId}/containers | Returns a list of active container in a node.
[**nodesGET**](NodesApi.md#nodesGET) | **GET** /nodes/ | Returns a list of nodes.


<a name="containerBackupPOST"></a>
# **containerBackupPOST**
> InlineResponse2003 containerBackupPOST(nodeId, containerId)

Create backup of the container passed by Id.

Create a backup file for each volumes mounted in a container from those active in the node requested

### Example
```javascript
var DeloreanUpApi = require('delorean_up_api');

var apiInstance = new DeloreanUpApi.NodesApi();

var nodeId = "nodeId_example"; // String | ID of the node

var containerId = "containerId_example"; // String | ID of the container to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.containerBackupPOST(nodeId, containerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| ID of the node | 
 **containerId** | **String**| ID of the container to return | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="containerMountsGET"></a>
# **containerMountsGET**
> InlineResponse2002 containerMountsGET(nodeId, containerId)

Returns an array of mounts object.

Allow to retrive the mounts object list of a container from those active in the node requested

### Example
```javascript
var DeloreanUpApi = require('delorean_up_api');

var apiInstance = new DeloreanUpApi.NodesApi();

var nodeId = "nodeId_example"; // String | ID of the node

var containerId = "containerId_example"; // String | ID of the container to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.containerMountsGET(nodeId, containerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| ID of the node | 
 **containerId** | **String**| ID of the container to return | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="nodeContainerByIdGET"></a>
# **nodeContainerByIdGET**
> Container nodeContainerByIdGET(nodeId, containerId)

Returns a container object.

Allow to retrive a single container object from those active in the node request

### Example
```javascript
var DeloreanUpApi = require('delorean_up_api');

var apiInstance = new DeloreanUpApi.NodesApi();

var nodeId = "nodeId_example"; // String | ID of the node

var containerId = "containerId_example"; // String | ID of the container to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.nodeContainerByIdGET(nodeId, containerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| ID of the node | 
 **containerId** | **String**| ID of the container to return | 

### Return type

[**Container**](Container.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="nodeContainersGET"></a>
# **nodeContainersGET**
> InlineResponse2001 nodeContainersGET(nodeId)

Returns a list of active container in a node.

Allow to retrive all the active containers from the node requested by its Id

### Example
```javascript
var DeloreanUpApi = require('delorean_up_api');

var apiInstance = new DeloreanUpApi.NodesApi();

var nodeId = "nodeId_example"; // String | ID of the node


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.nodeContainersGET(nodeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| ID of the node | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="nodesGET"></a>
# **nodesGET**
> InlineResponse200 nodesGET()

Returns a list of nodes.

Allow to retrive all nodes that are configurated to be active

### Example
```javascript
var DeloreanUpApi = require('delorean_up_api');

var apiInstance = new DeloreanUpApi.NodesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.nodesGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

