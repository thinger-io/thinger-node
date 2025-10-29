# .PluginsApi

All URIs are relative to *https://perf.aws.thinger.io:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**callPluginEndpointDelete**](PluginsApi.md#callPluginEndpointDelete) | **DELETE** /users/{user}/plugins/{plugin}{path} | CallPluginEndpoint
[**callPluginEndpointGet**](PluginsApi.md#callPluginEndpointGet) | **GET** /users/{user}/plugins/{plugin}{path} | CallPluginEndpoint
[**callPluginEndpointHead**](PluginsApi.md#callPluginEndpointHead) | **HEAD** /users/{user}/plugins/{plugin}{path} | CallPluginEndpoint
[**callPluginEndpointOptions**](PluginsApi.md#callPluginEndpointOptions) | **OPTIONS** /users/{user}/plugins/{plugin}{path} | CallPluginEndpoint
[**callPluginEndpointPatch**](PluginsApi.md#callPluginEndpointPatch) | **PATCH** /users/{user}/plugins/{plugin}{path} | CallPluginEndpoint
[**callPluginEndpointPost**](PluginsApi.md#callPluginEndpointPost) | **POST** /users/{user}/plugins/{plugin}{path} | CallPluginEndpoint
[**callPluginEndpointPut**](PluginsApi.md#callPluginEndpointPut) | **PUT** /users/{user}/plugins/{plugin}{path} | CallPluginEndpoint
[**callPluginEndpointTrace**](PluginsApi.md#callPluginEndpointTrace) | **TRACE** /users/{user}/plugins/{plugin}{path} | CallPluginEndpoint
[**cloneProperty**](PluginsApi.md#cloneProperty) | **POST** /v1/users/{user}/plugins/{plugin}/properties/{property}/clone | ClonePluginProperty
[**clonePropertyConfig**](PluginsApi.md#clonePropertyConfig) | **GET** /v1/users/{user}/plugins/{plugin}/properties/{property}/clone | ClonePluginPropertyConfig
[**createProperty**](PluginsApi.md#createProperty) | **POST** /v1/users/{user}/plugins/{plugin}/properties | CreatePluginProperty
[**deleteProperty**](PluginsApi.md#deleteProperty) | **DELETE** /v1/users/{user}/plugins/{plugin}/properties/{property} | DeletePluginProperty
[**list**](PluginsApi.md#list) | **GET** /v1/users/{user}/plugins | ListPlugins
[**listProperties**](PluginsApi.md#listProperties) | **GET** /v1/users/{user}/plugins/{plugin}/properties | ListPluginProperties
[**manageState**](PluginsApi.md#manageState) | **POST** /v1/users/{user}/plugins/{plugin} | ManagePluginState
[**patchProperty**](PluginsApi.md#patchProperty) | **PATCH** /v1/users/{user}/plugins/{plugin}/properties/{property} | UpdatePluginProperty
[**readFiles**](PluginsApi.md#readFiles) | **GET** /v1/users/{user}/plugins/{plugin}/files/{file} | ReadPluginFiles
[**readInfo**](PluginsApi.md#readInfo) | **GET** /v1/users/{user}/plugins/{plugin} | ReadPluginInfo
[**readLogs**](PluginsApi.md#readLogs) | **GET** /v1/users/{user}/plugins/{plugin}/terminal/logs | ReadPluginLogs
[**readProperty**](PluginsApi.md#readProperty) | **GET** /v1/users/{user}/plugins/{plugin}/properties/{property} | ReadPluginProperty
[**runCommandTerminal**](PluginsApi.md#runCommandTerminal) | **GET** /v1/users/{user}/plugins/{plugin}/terminal | RunPluginCommand
[**runShell**](PluginsApi.md#runShell) | **GET** /v1/users/{user}/plugins/{plugin}/terminal/shell | RunPluginShell
[**updateProperty**](PluginsApi.md#updateProperty) | **PUT** /v1/users/{user}/plugins/{plugin}/properties/{property} | UpdatePluginProperty


# **callPluginEndpointDelete**
> any callPluginEndpointDelete()


### Example


```typescript
import { createConfiguration, PluginsApi } from '';
import type { PluginsApiCallPluginEndpointDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PluginsApi(configuration);

const request: PluginsApiCallPluginEndpointDeleteRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  plugin: "37bUUGjjNSwg1_bs:ZayIMrK",
  
  path: "jUR,rZ#UM/?R,Fp^l6$ARj",
};

const data = await apiInstance.callPluginEndpointDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **plugin** | [**string**] |  | defaults to undefined
 **path** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[bearerAuth](README.md#bearerAuth), [oauth](README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**401** | unauthorized |  -  |
**403** | forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **callPluginEndpointGet**
> any callPluginEndpointGet()


### Example


```typescript
import { createConfiguration, PluginsApi } from '';
import type { PluginsApiCallPluginEndpointGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PluginsApi(configuration);

const request: PluginsApiCallPluginEndpointGetRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  plugin: "37bUUGjjNSwg1_bs:ZayIMrK",
  
  path: "jUR,rZ#UM/?R,Fp^l6$ARj",
};

const data = await apiInstance.callPluginEndpointGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **plugin** | [**string**] |  | defaults to undefined
 **path** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[bearerAuth](README.md#bearerAuth), [oauth](README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**401** | unauthorized |  -  |
**403** | forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **callPluginEndpointHead**
> any callPluginEndpointHead()


### Example


```typescript
import { createConfiguration, PluginsApi } from '';
import type { PluginsApiCallPluginEndpointHeadRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PluginsApi(configuration);

const request: PluginsApiCallPluginEndpointHeadRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  plugin: "37bUUGjjNSwg1_bs:ZayIMrK",
  
  path: "jUR,rZ#UM/?R,Fp^l6$ARj",
};

const data = await apiInstance.callPluginEndpointHead(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **plugin** | [**string**] |  | defaults to undefined
 **path** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[bearerAuth](README.md#bearerAuth), [oauth](README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**401** | unauthorized |  -  |
**403** | forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **callPluginEndpointOptions**
> any callPluginEndpointOptions()


### Example


```typescript
import { createConfiguration, PluginsApi } from '';
import type { PluginsApiCallPluginEndpointOptionsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PluginsApi(configuration);

const request: PluginsApiCallPluginEndpointOptionsRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  plugin: "37bUUGjjNSwg1_bs:ZayIMrK",
  
  path: "jUR,rZ#UM/?R,Fp^l6$ARj",
};

const data = await apiInstance.callPluginEndpointOptions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **plugin** | [**string**] |  | defaults to undefined
 **path** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[bearerAuth](README.md#bearerAuth), [oauth](README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**401** | unauthorized |  -  |
**403** | forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **callPluginEndpointPatch**
> any callPluginEndpointPatch()


### Example


```typescript
import { createConfiguration, PluginsApi } from '';
import type { PluginsApiCallPluginEndpointPatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PluginsApi(configuration);

const request: PluginsApiCallPluginEndpointPatchRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  plugin: "37bUUGjjNSwg1_bs:ZayIMrK",
  
  path: "jUR,rZ#UM/?R,Fp^l6$ARj",
};

const data = await apiInstance.callPluginEndpointPatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **plugin** | [**string**] |  | defaults to undefined
 **path** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[bearerAuth](README.md#bearerAuth), [oauth](README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**401** | unauthorized |  -  |
**403** | forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **callPluginEndpointPost**
> any callPluginEndpointPost(body)


### Example


```typescript
import { createConfiguration, PluginsApi } from '';
import type { PluginsApiCallPluginEndpointPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PluginsApi(configuration);

const request: PluginsApiCallPluginEndpointPostRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  plugin: "37bUUGjjNSwg1_bs:ZayIMrK",
  
  path: "jUR,rZ#UM/?R,Fp^l6$ARj",
  
  body: {},
};

const data = await apiInstance.callPluginEndpointPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **user** | [**string**] |  | defaults to undefined
 **plugin** | [**string**] |  | defaults to undefined
 **path** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[bearerAuth](README.md#bearerAuth), [oauth](README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**401** | unauthorized |  -  |
**403** | forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **callPluginEndpointPut**
> any callPluginEndpointPut(body)


### Example


```typescript
import { createConfiguration, PluginsApi } from '';
import type { PluginsApiCallPluginEndpointPutRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PluginsApi(configuration);

const request: PluginsApiCallPluginEndpointPutRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  plugin: "37bUUGjjNSwg1_bs:ZayIMrK",
  
  path: "jUR,rZ#UM/?R,Fp^l6$ARj",
  
  body: {},
};

const data = await apiInstance.callPluginEndpointPut(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **user** | [**string**] |  | defaults to undefined
 **plugin** | [**string**] |  | defaults to undefined
 **path** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[bearerAuth](README.md#bearerAuth), [oauth](README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**401** | unauthorized |  -  |
**403** | forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **callPluginEndpointTrace**
> any callPluginEndpointTrace()


### Example


```typescript
import { createConfiguration, PluginsApi } from '';
import type { PluginsApiCallPluginEndpointTraceRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PluginsApi(configuration);

const request: PluginsApiCallPluginEndpointTraceRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  plugin: "37bUUGjjNSwg1_bs:ZayIMrK",
  
  path: "jUR,rZ#UM/?R,Fp^l6$ARj",
};

const data = await apiInstance.callPluginEndpointTrace(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **plugin** | [**string**] |  | defaults to undefined
 **path** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[bearerAuth](README.md#bearerAuth), [oauth](README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**401** | unauthorized |  -  |
**403** | forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **cloneProperty**
> any cloneProperty(pluginClonePropertyRequest)


### Example


```typescript
import { createConfiguration, PluginsApi } from '';
import type { PluginsApiClonePropertyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PluginsApi(configuration);

const request: PluginsApiClonePropertyRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  plugin: "37bUUGjjNSwg1_bs:ZayIMrK",
  
  property: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  pluginClonePropertyRequest: {
    description: "[Bucket storing all device measurements., Dashbord for main floor.]",
    enabled: true,
    name: "[Raspberry Pi, Arduino MKR1000]",
    property: "[resource_123, abcd-1234]",
  },
};

const data = await apiInstance.cloneProperty(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pluginClonePropertyRequest** | **PluginClonePropertyRequest**|  |
 **user** | [**string**] |  | defaults to undefined
 **plugin** | [**string**] |  | defaults to undefined
 **property** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[bearerAuth](README.md#bearerAuth), [oauth](README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**401** | unauthorized |  -  |
**403** | forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **clonePropertyConfig**
> any clonePropertyConfig()


### Example


```typescript
import { createConfiguration, PluginsApi } from '';
import type { PluginsApiClonePropertyConfigRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PluginsApi(configuration);

const request: PluginsApiClonePropertyConfigRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  plugin: "37bUUGjjNSwg1_bs:ZayIMrK",
  
  property: "zBAMDTMv2D2ylmgd10Z3UB6U",
};

const data = await apiInstance.clonePropertyConfig(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **plugin** | [**string**] |  | defaults to undefined
 **property** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[bearerAuth](README.md#bearerAuth), [oauth](README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**401** | unauthorized |  -  |
**403** | forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createProperty**
> any createProperty(propertyCreate)


### Example


```typescript
import { createConfiguration, PluginsApi } from '';
import type { PluginsApiCreatePropertyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PluginsApi(configuration);

const request: PluginsApiCreatePropertyRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  plugin: "37bUUGjjNSwg1_bs:ZayIMrK",
  
  propertyCreate: null,
};

const data = await apiInstance.createProperty(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **propertyCreate** | **PropertyCreate**|  |
 **user** | [**string**] |  | defaults to undefined
 **plugin** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[bearerAuth](README.md#bearerAuth), [oauth](README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**401** | unauthorized |  -  |
**403** | forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteProperty**
> any deleteProperty()


### Example


```typescript
import { createConfiguration, PluginsApi } from '';
import type { PluginsApiDeletePropertyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PluginsApi(configuration);

const request: PluginsApiDeletePropertyRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  plugin: "37bUUGjjNSwg1_bs:ZayIMrK",
  
  property: "zBAMDTMv2D2ylmgd10Z3UB6U",
};

const data = await apiInstance.deleteProperty(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **plugin** | [**string**] |  | defaults to undefined
 **property** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[bearerAuth](README.md#bearerAuth), [oauth](README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**401** | unauthorized |  -  |
**403** | forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **list**
> any list()


### Example


```typescript
import { createConfiguration, PluginsApi } from '';
import type { PluginsApiListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PluginsApi(configuration);

const request: PluginsApiListRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
};

const data = await apiInstance.list(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[bearerAuth](README.md#bearerAuth), [oauth](README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**401** | unauthorized |  -  |
**403** | forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listProperties**
> any listProperties()


### Example


```typescript
import { createConfiguration, PluginsApi } from '';
import type { PluginsApiListPropertiesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PluginsApi(configuration);

const request: PluginsApiListPropertiesRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  plugin: "37bUUGjjNSwg1_bs:ZayIMrK",
};

const data = await apiInstance.listProperties(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **plugin** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[bearerAuth](README.md#bearerAuth), [oauth](README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**401** | unauthorized |  -  |
**403** | forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **manageState**
> any manageState(body)


### Example


```typescript
import { createConfiguration, PluginsApi } from '';
import type { PluginsApiManageStateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PluginsApi(configuration);

const request: PluginsApiManageStateRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  plugin: "37bUUGjjNSwg1_bs:ZayIMrK",
  
  body: {},
};

const data = await apiInstance.manageState(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **user** | [**string**] |  | defaults to undefined
 **plugin** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[bearerAuth](README.md#bearerAuth), [oauth](README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**401** | unauthorized |  -  |
**403** | forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **patchProperty**
> any patchProperty()


### Example


```typescript
import { createConfiguration, PluginsApi } from '';
import type { PluginsApiPatchPropertyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PluginsApi(configuration);

const request: PluginsApiPatchPropertyRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  plugin: "37bUUGjjNSwg1_bs:ZayIMrK",
  
  property: "zBAMDTMv2D2ylmgd10Z3UB6U",
};

const data = await apiInstance.patchProperty(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **plugin** | [**string**] |  | defaults to undefined
 **property** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[bearerAuth](README.md#bearerAuth), [oauth](README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**401** | unauthorized |  -  |
**403** | forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **readFiles**
> any readFiles()


### Example


```typescript
import { createConfiguration, PluginsApi } from '';
import type { PluginsApiReadFilesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PluginsApi(configuration);

const request: PluginsApiReadFilesRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  plugin: "37bUUGjjNSwg1_bs:ZayIMrK",
  
  file: "jUR,rZ#UM/?R,Fp^l6$ARj",
};

const data = await apiInstance.readFiles(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **plugin** | [**string**] |  | defaults to undefined
 **file** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[bearerAuth](README.md#bearerAuth), [oauth](README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**401** | unauthorized |  -  |
**403** | forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **readInfo**
> any readInfo()


### Example


```typescript
import { createConfiguration, PluginsApi } from '';
import type { PluginsApiReadInfoRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PluginsApi(configuration);

const request: PluginsApiReadInfoRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  plugin: "37bUUGjjNSwg1_bs:ZayIMrK",
};

const data = await apiInstance.readInfo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **plugin** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[bearerAuth](README.md#bearerAuth), [oauth](README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**401** | unauthorized |  -  |
**403** | forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **readLogs**
> any readLogs()


### Example


```typescript
import { createConfiguration, PluginsApi } from '';
import type { PluginsApiReadLogsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PluginsApi(configuration);

const request: PluginsApiReadLogsRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  plugin: "37bUUGjjNSwg1_bs:ZayIMrK",
};

const data = await apiInstance.readLogs(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **plugin** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[bearerAuth](README.md#bearerAuth), [oauth](README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**401** | unauthorized |  -  |
**403** | forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **readProperty**
> any readProperty()


### Example


```typescript
import { createConfiguration, PluginsApi } from '';
import type { PluginsApiReadPropertyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PluginsApi(configuration);

const request: PluginsApiReadPropertyRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  plugin: "37bUUGjjNSwg1_bs:ZayIMrK",
  
  property: "zBAMDTMv2D2ylmgd10Z3UB6U",
};

const data = await apiInstance.readProperty(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **plugin** | [**string**] |  | defaults to undefined
 **property** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[bearerAuth](README.md#bearerAuth), [oauth](README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**401** | unauthorized |  -  |
**403** | forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **runCommandTerminal**
> any runCommandTerminal()


### Example


```typescript
import { createConfiguration, PluginsApi } from '';
import type { PluginsApiRunCommandTerminalRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PluginsApi(configuration);

const request: PluginsApiRunCommandTerminalRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  plugin: "37bUUGjjNSwg1_bs:ZayIMrK",
};

const data = await apiInstance.runCommandTerminal(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **plugin** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[bearerAuth](README.md#bearerAuth), [oauth](README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**401** | unauthorized |  -  |
**403** | forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **runShell**
> any runShell()


### Example


```typescript
import { createConfiguration, PluginsApi } from '';
import type { PluginsApiRunShellRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PluginsApi(configuration);

const request: PluginsApiRunShellRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  plugin: "37bUUGjjNSwg1_bs:ZayIMrK",
};

const data = await apiInstance.runShell(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **plugin** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[bearerAuth](README.md#bearerAuth), [oauth](README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**401** | unauthorized |  -  |
**403** | forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateProperty**
> any updateProperty(propertyUpdate)


### Example


```typescript
import { createConfiguration, PluginsApi } from '';
import type { PluginsApiUpdatePropertyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PluginsApi(configuration);

const request: PluginsApiUpdatePropertyRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  plugin: "37bUUGjjNSwg1_bs:ZayIMrK",
  
  property: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  propertyUpdate: null,
};

const data = await apiInstance.updateProperty(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **propertyUpdate** | **PropertyUpdate**|  |
 **user** | [**string**] |  | defaults to undefined
 **plugin** | [**string**] |  | defaults to undefined
 **property** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[bearerAuth](README.md#bearerAuth), [oauth](README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**401** | unauthorized |  -  |
**403** | forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


