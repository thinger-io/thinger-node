# .DevicesApi

All URIs are relative to *https://perf.aws.thinger.io:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accessInputResources**](DevicesApi.md#accessInputResources) | **POST** /v3/users/{user}/devices/{device}/resources/{resource} | AccessDeviceResources
[**accessOutputResources**](DevicesApi.md#accessOutputResources) | **GET** /v3/users/{user}/devices/{device}/resources/{resource} | AccessDeviceResources
[**accessRemoteDesktopVnc**](DevicesApi.md#accessRemoteDesktopVnc) | **GET** /v3/users/{user}/devices/{device}/services/{service}/vnc | AccessDeviceRemoteDesktop
[**accessResources**](DevicesApi.md#accessResources) | **GET** /v3/users/{user}/devices/{device}/resources | AccessDeviceResources
[**accessWebServices**](DevicesApi.md#accessWebServices) | **GET** /v3/users/{user}/devices/{device}/services/{service}/web | AccessDeviceWebServices
[**callCallbackData**](DevicesApi.md#callCallbackData) | **POST** /v3/users/{user}/devices/{device}/callback/data | CallDeviceCallback
[**clone**](DevicesApi.md#clone) | **POST** /v1/users/{user}/devices/{device}/clone | CloneDevice
[**cloneConfig**](DevicesApi.md#cloneConfig) | **GET** /v1/users/{user}/devices/{device}/clone | CloneDeviceConfig
[**cloneProperty**](DevicesApi.md#cloneProperty) | **POST** /v3/users/{user}/devices/{device}/properties/{property}/clone | CloneDeviceProperty
[**clonePropertyConfig**](DevicesApi.md#clonePropertyConfig) | **GET** /v3/users/{user}/devices/{device}/properties/{property}/clone | CloneDevicePropertyConfig
[**create**](DevicesApi.md#create) | **POST** /v1/users/{user}/devices | CreateDevice
[**createProperty**](DevicesApi.md#createProperty) | **POST** /v3/users/{user}/devices/{device}/properties | CreateDeviceProperty
[**createToken**](DevicesApi.md#createToken) | **POST** /v1/users/{user}/devices/{device}/tokens | CreateDeviceToken
[**deleteProperty**](DevicesApi.md#deleteProperty) | **DELETE** /v3/users/{user}/devices/{device}/properties/{property} | DeleteDeviceProperty
[**deleteToken**](DevicesApi.md#deleteToken) | **DELETE** /v1/users/{user}/devices/{device}/tokens/{token} | DeleteDeviceToken
[**list**](DevicesApi.md#list) | **GET** /v1/users/{user}/devices | ListDevices
[**listBucketTags**](DevicesApi.md#listBucketTags) | **GET** /v3/users/{user}/devices/{device}/buckets/{bucket}/tags | ListDeviceBucketTags
[**listBuckets**](DevicesApi.md#listBuckets) | **GET** /v3/users/{user}/devices/{device}/buckets | ListDeviceBuckets
[**listProperties**](DevicesApi.md#listProperties) | **GET** /v3/users/{user}/devices/{device}/properties | ListDeviceProperties
[**listServices**](DevicesApi.md#listServices) | **GET** /v3/users/{user}/devices/{device}/services | ListDeviceServices
[**listTokens**](DevicesApi.md#listTokens) | **GET** /v1/users/{user}/devices/{device}/tokens | ListDeviceTokens
[**patchProperty**](DevicesApi.md#patchProperty) | **PATCH** /v3/users/{user}/devices/{device}/properties/{property} | UpdateDeviceProperty
[**readBucketData**](DevicesApi.md#readBucketData) | **GET** /{version}/users/{user}/devices/{device}/buckets/{bucket}/data | ReadDeviceBucket
[**readBucketTag**](DevicesApi.md#readBucketTag) | **GET** /v3/users/{user}/devices/{device}/buckets/{bucket}/tags/{tag} | ReadDeviceBucketTag
[**readCallbackConfig**](DevicesApi.md#readCallbackConfig) | **GET** /v3/users/{user}/devices/{device}/callback | ReadDeviceCallbackConfig
[**readCallbackResponseData**](DevicesApi.md#readCallbackResponseData) | **GET** /v3/users/{user}/devices/{device}/callback/data | ReadDeviceCallbackResponse
[**readDevicesStatistics**](DevicesApi.md#readDevicesStatistics) | **GET** /v1/users/{user}/info/devices/stats | ReadDeviceStatistics
[**readProperty**](DevicesApi.md#readProperty) | **GET** /v3/users/{user}/devices/{device}/properties/{property} | ReadDeviceProperty
[**readService**](DevicesApi.md#readService) | **GET** /v3/users/{user}/devices/{device}/services/{service} | ReadDeviceService
[**readStatistics**](DevicesApi.md#readStatistics) | **GET** /v3/users/{user}/devices/{device}/stats | ReadDeviceStatistics
[**readStatus**](DevicesApi.md#readStatus) | **GET** /v1/users/{user}/devices/{device} | ReadDeviceStatus
[**remove**](DevicesApi.md#remove) | **DELETE** /v1/users/{user}/devices/{device} | DeleteDevice
[**update**](DevicesApi.md#update) | **PUT** /v1/users/{user}/devices/{device} | UpdateDevice
[**updateCallback**](DevicesApi.md#updateCallback) | **PUT** /v3/users/{user}/devices/{device}/callback | UpdateDeviceCallback
[**updateProjects**](DevicesApi.md#updateProjects) | **PUT** /v1/users/{user}/devices/{device}/projects | UpdateDeviceProjects
[**updateProperty**](DevicesApi.md#updateProperty) | **PUT** /v3/users/{user}/devices/{device}/properties/{property} | UpdateDeviceProperty
[**v1UsersUserDevicesDeviceResourceGet**](DevicesApi.md#v1UsersUserDevicesDeviceResourceGet) | **GET** /v1/users/{user}/devices/{device}/{resource} | AccessDeviceResources
[**v1UsersUserDevicesDeviceResourcePost**](DevicesApi.md#v1UsersUserDevicesDeviceResourcePost) | **POST** /v1/users/{user}/devices/{device}/{resource} | AccessDeviceResources
[**v1UsersUserDevicesDeviceStatsGet**](DevicesApi.md#v1UsersUserDevicesDeviceStatsGet) | **GET** /v1/users/{user}/devices/{device}/stats | ReadDeviceStatistics
[**v2UsersUserDevicesDeviceResourceGet**](DevicesApi.md#v2UsersUserDevicesDeviceResourceGet) | **GET** /v2/users/{user}/devices/{device}/{resource} | AccessDeviceResources
[**v2UsersUserDevicesDeviceResourcePost**](DevicesApi.md#v2UsersUserDevicesDeviceResourcePost) | **POST** /v2/users/{user}/devices/{device}/{resource} | AccessDeviceResources


# **accessInputResources**
> any accessInputResources(body)


### Example


```typescript
import { createConfiguration, DevicesApi } from '';
import type { DevicesApiAccessInputResourcesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DevicesApi(configuration);

const request: DevicesApiAccessInputResourcesRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  device: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  resource: "jUR,rZ#UM/?R,Fp^l6$ARjbh////////////////////////////////////",
  
  body: {},
};

const data = await apiInstance.accessInputResources(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **user** | [**string**] |  | defaults to undefined
 **device** | [**string**] |  | defaults to undefined
 **resource** | [**string**] |  | defaults to undefined


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

# **accessOutputResources**
> any accessOutputResources()


### Example


```typescript
import { createConfiguration, DevicesApi } from '';
import type { DevicesApiAccessOutputResourcesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DevicesApi(configuration);

const request: DevicesApiAccessOutputResourcesRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  device: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  resource: "jUR,rZ#UM/?R,Fp^l6$ARjbh////////////////////////////////////",
};

const data = await apiInstance.accessOutputResources(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **device** | [**string**] |  | defaults to undefined
 **resource** | [**string**] |  | defaults to undefined


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

# **accessRemoteDesktopVnc**
> any accessRemoteDesktopVnc()


### Example


```typescript
import { createConfiguration, DevicesApi } from '';
import type { DevicesApiAccessRemoteDesktopVncRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DevicesApi(configuration);

const request: DevicesApiAccessRemoteDesktopVncRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  device: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  service: "zBAMDTMv2D2ylmgd10Z3UB6U",
};

const data = await apiInstance.accessRemoteDesktopVnc(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **device** | [**string**] |  | defaults to undefined
 **service** | [**string**] |  | defaults to undefined


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

# **accessResources**
> any accessResources()


### Example


```typescript
import { createConfiguration, DevicesApi } from '';
import type { DevicesApiAccessResourcesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DevicesApi(configuration);

const request: DevicesApiAccessResourcesRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  device: "zBAMDTMv2D2ylmgd10Z3UB6U",
};

const data = await apiInstance.accessResources(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **device** | [**string**] |  | defaults to undefined


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

# **accessWebServices**
> any accessWebServices()


### Example


```typescript
import { createConfiguration, DevicesApi } from '';
import type { DevicesApiAccessWebServicesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DevicesApi(configuration);

const request: DevicesApiAccessWebServicesRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  device: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  service: "zBAMDTMv2D2ylmgd10Z3UB6U",
};

const data = await apiInstance.accessWebServices(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **device** | [**string**] |  | defaults to undefined
 **service** | [**string**] |  | defaults to undefined


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

# **callCallbackData**
> any callCallbackData(body)


### Example


```typescript
import { createConfiguration, DevicesApi } from '';
import type { DevicesApiCallCallbackDataRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DevicesApi(configuration);

const request: DevicesApiCallCallbackDataRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  device: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  body: {},
};

const data = await apiInstance.callCallbackData(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **user** | [**string**] |  | defaults to undefined
 **device** | [**string**] |  | defaults to undefined


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

# **clone**
> any clone(deviceCloneRequest)


### Example


```typescript
import { createConfiguration, DevicesApi } from '';
import type { DevicesApiCloneRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DevicesApi(configuration);

const request: DevicesApiCloneRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  device: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  deviceCloneRequest: {
    description: "[Bucket storing all device measurements., Dashbord for main floor.]",
    device: "[resource_123, abcd-1234]",
    enabled: true,
    name: "[Raspberry Pi, Arduino MKR1000]",
  },
};

const data = await apiInstance.clone(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceCloneRequest** | **DeviceCloneRequest**|  |
 **user** | [**string**] |  | defaults to undefined
 **device** | [**string**] |  | defaults to undefined


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

# **cloneConfig**
> any cloneConfig()


### Example


```typescript
import { createConfiguration, DevicesApi } from '';
import type { DevicesApiCloneConfigRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DevicesApi(configuration);

const request: DevicesApiCloneConfigRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  device: "zBAMDTMv2D2ylmgd10Z3UB6U",
};

const data = await apiInstance.cloneConfig(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **device** | [**string**] |  | defaults to undefined


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
> any cloneProperty(productClonePropertyRequest)


### Example


```typescript
import { createConfiguration, DevicesApi } from '';
import type { DevicesApiClonePropertyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DevicesApi(configuration);

const request: DevicesApiClonePropertyRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  device: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  property: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  productClonePropertyRequest: {
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
 **productClonePropertyRequest** | **ProductClonePropertyRequest**|  |
 **user** | [**string**] |  | defaults to undefined
 **device** | [**string**] |  | defaults to undefined
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
import { createConfiguration, DevicesApi } from '';
import type { DevicesApiClonePropertyConfigRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DevicesApi(configuration);

const request: DevicesApiClonePropertyConfigRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  device: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  property: "zBAMDTMv2D2ylmgd10Z3UB6U",
};

const data = await apiInstance.clonePropertyConfig(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **device** | [**string**] |  | defaults to undefined
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

# **create**
> any create(propertyCreate)


### Example


```typescript
import { createConfiguration, DevicesApi } from '';
import type { DevicesApiCreateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DevicesApi(configuration);

const request: DevicesApiCreateRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  propertyCreate: null,
};

const data = await apiInstance.create(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **propertyCreate** | **PropertyCreate**|  |
 **user** | [**string**] |  | defaults to undefined


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

# **createProperty**
> any createProperty(propertyCreate)


### Example


```typescript
import { createConfiguration, DevicesApi } from '';
import type { DevicesApiCreatePropertyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DevicesApi(configuration);

const request: DevicesApiCreatePropertyRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  device: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
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
 **device** | [**string**] |  | defaults to undefined


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

# **createToken**
> any createToken(body)


### Example


```typescript
import { createConfiguration, DevicesApi } from '';
import type { DevicesApiCreateTokenRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DevicesApi(configuration);

const request: DevicesApiCreateTokenRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  device: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  body: {},
};

const data = await apiInstance.createToken(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **user** | [**string**] |  | defaults to undefined
 **device** | [**string**] |  | defaults to undefined


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
import { createConfiguration, DevicesApi } from '';
import type { DevicesApiDeletePropertyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DevicesApi(configuration);

const request: DevicesApiDeletePropertyRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  device: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  property: "zBAMDTMv2D2ylmgd10Z3UB6U",
};

const data = await apiInstance.deleteProperty(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **device** | [**string**] |  | defaults to undefined
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

# **deleteToken**
> any deleteToken()


### Example


```typescript
import { createConfiguration, DevicesApi } from '';
import type { DevicesApiDeleteTokenRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DevicesApi(configuration);

const request: DevicesApiDeleteTokenRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  device: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  token: "z",
};

const data = await apiInstance.deleteToken(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **device** | [**string**] |  | defaults to undefined
 **token** | [**string**] |  | defaults to undefined


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
import { createConfiguration, DevicesApi } from '';
import type { DevicesApiListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DevicesApi(configuration);

const request: DevicesApiListRequest = {
  
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

# **listBucketTags**
> any listBucketTags()


### Example


```typescript
import { createConfiguration, DevicesApi } from '';
import type { DevicesApiListBucketTagsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DevicesApi(configuration);

const request: DevicesApiListBucketTagsRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  device: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  bucket: "zBAMDTMv2D2ylmgd10Z3UB6U",
};

const data = await apiInstance.listBucketTags(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **device** | [**string**] |  | defaults to undefined
 **bucket** | [**string**] |  | defaults to undefined


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

# **listBuckets**
> any listBuckets()


### Example


```typescript
import { createConfiguration, DevicesApi } from '';
import type { DevicesApiListBucketsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DevicesApi(configuration);

const request: DevicesApiListBucketsRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  device: "zBAMDTMv2D2ylmgd10Z3UB6U",
};

const data = await apiInstance.listBuckets(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **device** | [**string**] |  | defaults to undefined


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
import { createConfiguration, DevicesApi } from '';
import type { DevicesApiListPropertiesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DevicesApi(configuration);

const request: DevicesApiListPropertiesRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  device: "zBAMDTMv2D2ylmgd10Z3UB6U",
};

const data = await apiInstance.listProperties(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **device** | [**string**] |  | defaults to undefined


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

# **listServices**
> any listServices()


### Example


```typescript
import { createConfiguration, DevicesApi } from '';
import type { DevicesApiListServicesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DevicesApi(configuration);

const request: DevicesApiListServicesRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  device: "zBAMDTMv2D2ylmgd10Z3UB6U",
};

const data = await apiInstance.listServices(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **device** | [**string**] |  | defaults to undefined


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

# **listTokens**
> any listTokens()


### Example


```typescript
import { createConfiguration, DevicesApi } from '';
import type { DevicesApiListTokensRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DevicesApi(configuration);

const request: DevicesApiListTokensRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  device: "zBAMDTMv2D2ylmgd10Z3UB6U",
};

const data = await apiInstance.listTokens(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **device** | [**string**] |  | defaults to undefined


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

# **patchProperty**
> any patchProperty()


### Example


```typescript
import { createConfiguration, DevicesApi } from '';
import type { DevicesApiPatchPropertyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DevicesApi(configuration);

const request: DevicesApiPatchPropertyRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  device: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  property: "zBAMDTMv2D2ylmgd10Z3UB6U",
};

const data = await apiInstance.patchProperty(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **device** | [**string**] |  | defaults to undefined
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

# **readBucketData**
> any readBucketData()


### Example


```typescript
import { createConfiguration, DevicesApi } from '';
import type { DevicesApiReadBucketDataRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DevicesApi(configuration);

const request: DevicesApiReadBucketDataRequest = {
  
  version: "v3",
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  device: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  bucket: "zBAMDTMv2D2ylmgd10Z3UB6U",
};

const data = await apiInstance.readBucketData(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | [**string**] |  | defaults to undefined
 **user** | [**string**] |  | defaults to undefined
 **device** | [**string**] |  | defaults to undefined
 **bucket** | [**string**] |  | defaults to undefined


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

# **readBucketTag**
> any readBucketTag()


### Example


```typescript
import { createConfiguration, DevicesApi } from '';
import type { DevicesApiReadBucketTagRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DevicesApi(configuration);

const request: DevicesApiReadBucketTagRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  device: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  bucket: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  tag: "zBAMDTMv2D2ylmgd10Z3UB6U",
};

const data = await apiInstance.readBucketTag(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **device** | [**string**] |  | defaults to undefined
 **bucket** | [**string**] |  | defaults to undefined
 **tag** | [**string**] |  | defaults to undefined


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

# **readCallbackConfig**
> any readCallbackConfig()


### Example


```typescript
import { createConfiguration, DevicesApi } from '';
import type { DevicesApiReadCallbackConfigRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DevicesApi(configuration);

const request: DevicesApiReadCallbackConfigRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  device: "zBAMDTMv2D2ylmgd10Z3UB6U",
};

const data = await apiInstance.readCallbackConfig(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **device** | [**string**] |  | defaults to undefined


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

# **readCallbackResponseData**
> any readCallbackResponseData()


### Example


```typescript
import { createConfiguration, DevicesApi } from '';
import type { DevicesApiReadCallbackResponseDataRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DevicesApi(configuration);

const request: DevicesApiReadCallbackResponseDataRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  device: "zBAMDTMv2D2ylmgd10Z3UB6U",
};

const data = await apiInstance.readCallbackResponseData(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **device** | [**string**] |  | defaults to undefined


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

# **readDevicesStatistics**
> any readDevicesStatistics()


### Example


```typescript
import { createConfiguration, DevicesApi } from '';
import type { DevicesApiReadDevicesStatisticsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DevicesApi(configuration);

const request: DevicesApiReadDevicesStatisticsRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
};

const data = await apiInstance.readDevicesStatistics(request);
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

# **readProperty**
> any readProperty()


### Example


```typescript
import { createConfiguration, DevicesApi } from '';
import type { DevicesApiReadPropertyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DevicesApi(configuration);

const request: DevicesApiReadPropertyRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  device: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  property: "zBAMDTMv2D2ylmgd10Z3UB6U",
};

const data = await apiInstance.readProperty(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **device** | [**string**] |  | defaults to undefined
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

# **readService**
> any readService()


### Example


```typescript
import { createConfiguration, DevicesApi } from '';
import type { DevicesApiReadServiceRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DevicesApi(configuration);

const request: DevicesApiReadServiceRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  device: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  service: "zBAMDTMv2D2ylmgd10Z3UB6U",
};

const data = await apiInstance.readService(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **device** | [**string**] |  | defaults to undefined
 **service** | [**string**] |  | defaults to undefined


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

# **readStatistics**
> any readStatistics()


### Example


```typescript
import { createConfiguration, DevicesApi } from '';
import type { DevicesApiReadStatisticsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DevicesApi(configuration);

const request: DevicesApiReadStatisticsRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  device: "zBAMDTMv2D2ylmgd10Z3UB6U",
};

const data = await apiInstance.readStatistics(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **device** | [**string**] |  | defaults to undefined


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

# **readStatus**
> any readStatus()


### Example


```typescript
import { createConfiguration, DevicesApi } from '';
import type { DevicesApiReadStatusRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DevicesApi(configuration);

const request: DevicesApiReadStatusRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  device: "zBAMDTMv2D2ylmgd10Z3UB6U",
};

const data = await apiInstance.readStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **device** | [**string**] |  | defaults to undefined


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

# **remove**
> any remove()


### Example


```typescript
import { createConfiguration, DevicesApi } from '';
import type { DevicesApiRemoveRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DevicesApi(configuration);

const request: DevicesApiRemoveRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  device: "zBAMDTMv2D2ylmgd10Z3UB6U",
};

const data = await apiInstance.remove(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **device** | [**string**] |  | defaults to undefined


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

# **update**
> any update(deviceUpdateRequest)


### Example


```typescript
import { createConfiguration, DevicesApi } from '';
import type { DevicesApiUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DevicesApi(configuration);

const request: DevicesApiUpdateRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  device: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  deviceUpdateRequest: 
    key: null,
  ,
};

const data = await apiInstance.update(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceUpdateRequest** | **DeviceUpdateRequest**|  |
 **user** | [**string**] |  | defaults to undefined
 **device** | [**string**] |  | defaults to undefined


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

# **updateCallback**
> any updateCallback(deviceUpdateCallbackRequest)


### Example


```typescript
import { createConfiguration, DevicesApi } from '';
import type { DevicesApiUpdateCallbackRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DevicesApi(configuration);

const request: DevicesApiUpdateCallbackRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  device: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  deviceUpdateCallbackRequest: {
    actions: {
      callEndpoint: "[resource_123, abcd-1234]",
      sendProperty: "[resource_123, abcd-1234]",
      setProperty: "[resource_123, abcd-1234]",
      writeBucket: "[resource_123, abcd-1234]",
    },
    properties: {
      timeout: 1,
    },
  },
};

const data = await apiInstance.updateCallback(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceUpdateCallbackRequest** | **DeviceUpdateCallbackRequest**|  |
 **user** | [**string**] |  | defaults to undefined
 **device** | [**string**] |  | defaults to undefined


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

# **updateProjects**
> any updateProjects(requestBody)


### Example


```typescript
import { createConfiguration, DevicesApi } from '';
import type { DevicesApiUpdateProjectsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DevicesApi(configuration);

const request: DevicesApiUpdateProjectsRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  device: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  requestBody: [
    "HqXzyCBw3_uufVPIPFhB9JcG@Ynua_cdyyvLY8IzLpul91GcWj",
  ],
};

const data = await apiInstance.updateProjects(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestBody** | **Array<string>**|  |
 **user** | [**string**] |  | defaults to undefined
 **device** | [**string**] |  | defaults to undefined


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

# **updateProperty**
> any updateProperty(propertyUpdate)


### Example


```typescript
import { createConfiguration, DevicesApi } from '';
import type { DevicesApiUpdatePropertyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DevicesApi(configuration);

const request: DevicesApiUpdatePropertyRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  device: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
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
 **device** | [**string**] |  | defaults to undefined
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

# **v1UsersUserDevicesDeviceResourceGet**
> any v1UsersUserDevicesDeviceResourceGet()


### Example


```typescript
import { createConfiguration, DevicesApi } from '';
import type { DevicesApiV1UsersUserDevicesDeviceResourceGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DevicesApi(configuration);

const request: DevicesApiV1UsersUserDevicesDeviceResourceGetRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  device: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  resource: "jUR,rZ#UM/?R,Fp^l6$ARjbh////////////////////////////////////",
};

const data = await apiInstance.v1UsersUserDevicesDeviceResourceGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **device** | [**string**] |  | defaults to undefined
 **resource** | [**string**] |  | defaults to undefined


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

# **v1UsersUserDevicesDeviceResourcePost**
> any v1UsersUserDevicesDeviceResourcePost(body)


### Example


```typescript
import { createConfiguration, DevicesApi } from '';
import type { DevicesApiV1UsersUserDevicesDeviceResourcePostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DevicesApi(configuration);

const request: DevicesApiV1UsersUserDevicesDeviceResourcePostRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  device: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  resource: "jUR,rZ#UM/?R,Fp^l6$ARjbh////////////////////////////////////",
  
  body: {},
};

const data = await apiInstance.v1UsersUserDevicesDeviceResourcePost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **user** | [**string**] |  | defaults to undefined
 **device** | [**string**] |  | defaults to undefined
 **resource** | [**string**] |  | defaults to undefined


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

# **v1UsersUserDevicesDeviceStatsGet**
> any v1UsersUserDevicesDeviceStatsGet()


### Example


```typescript
import { createConfiguration, DevicesApi } from '';
import type { DevicesApiV1UsersUserDevicesDeviceStatsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DevicesApi(configuration);

const request: DevicesApiV1UsersUserDevicesDeviceStatsGetRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  device: "zBAMDTMv2D2ylmgd10Z3UB6U",
};

const data = await apiInstance.v1UsersUserDevicesDeviceStatsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **device** | [**string**] |  | defaults to undefined


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

# **v2UsersUserDevicesDeviceResourceGet**
> any v2UsersUserDevicesDeviceResourceGet()


### Example


```typescript
import { createConfiguration, DevicesApi } from '';
import type { DevicesApiV2UsersUserDevicesDeviceResourceGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DevicesApi(configuration);

const request: DevicesApiV2UsersUserDevicesDeviceResourceGetRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  device: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  resource: "jUR,rZ#UM/?R,Fp^l6$ARjbh////////////////////////////////////",
};

const data = await apiInstance.v2UsersUserDevicesDeviceResourceGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **device** | [**string**] |  | defaults to undefined
 **resource** | [**string**] |  | defaults to undefined


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

# **v2UsersUserDevicesDeviceResourcePost**
> any v2UsersUserDevicesDeviceResourcePost(body)


### Example


```typescript
import { createConfiguration, DevicesApi } from '';
import type { DevicesApiV2UsersUserDevicesDeviceResourcePostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DevicesApi(configuration);

const request: DevicesApiV2UsersUserDevicesDeviceResourcePostRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  device: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  resource: "jUR,rZ#UM/?R,Fp^l6$ARjbh////////////////////////////////////",
  
  body: {},
};

const data = await apiInstance.v2UsersUserDevicesDeviceResourcePost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **user** | [**string**] |  | defaults to undefined
 **device** | [**string**] |  | defaults to undefined
 **resource** | [**string**] |  | defaults to undefined


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


