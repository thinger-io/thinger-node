# .ProductsApi

All URIs are relative to *https://localhost:80*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clone**](ProductsApi.md#clone) | **POST** /v1/users/{user}/products/{product}/clone | CloneProduct
[**cloneProperty**](ProductsApi.md#cloneProperty) | **POST** /v1/users/{user}/products/{product}/properties/{property}/clone | CloneProductProperty
[**create**](ProductsApi.md#create) | **POST** /v1/users/{user}/products | CreateProduct
[**createFirmware**](ProductsApi.md#createFirmware) | **POST** /v1/users/{user}/products/{product}/firmwares | CreateProductFirmware
[**createProperty**](ProductsApi.md#createProperty) | **POST** /v1/users/{user}/products/{product}/properties | CreateProductProperty
[**deleteFirmware**](ProductsApi.md#deleteFirmware) | **DELETE** /v1/users/{user}/products/{product}/firmwares/{firmware}/{firmware_version} | DeleteProductFirmware
[**deleteProperty**](ProductsApi.md#deleteProperty) | **DELETE** /v1/users/{user}/products/{product}/properties/{property} | DeleteProductProperty
[**exportData**](ProductsApi.md#exportData) | **GET** /v1/users/{user}/products/{product}/export | ExportProduct
[**flashFirmware**](ProductsApi.md#flashFirmware) | **GET** /v1/users/{user}/products/{product}/firmwares/{firmware}/{firmware_version}/flash | FlashProductFirmware
[**list**](ProductsApi.md#list) | **GET** /v1/users/{user}/products | ListProducts
[**listFirmwares**](ProductsApi.md#listFirmwares) | **GET** /v1/users/{user}/products/{product}/firmwares | ListProductFirmwares
[**listProperties**](ProductsApi.md#listProperties) | **GET** /v1/users/{user}/products/{product}/properties | ListProductProperties
[**patchProperty**](ProductsApi.md#patchProperty) | **PATCH** /v1/users/{user}/products/{product}/properties/{property} | UpdateProductProperty
[**readConfig**](ProductsApi.md#readConfig) | **GET** /v1/users/{user}/products/{product} | ReadProductConfig
[**readFirmwareConfig**](ProductsApi.md#readFirmwareConfig) | **GET** /v1/users/{user}/products/{product}/firmwares/{firmware}/{firmware_version} | ReadProductFirmwareConfig
[**readProfile**](ProductsApi.md#readProfile) | **GET** /v1/users/{user}/products/{product}/profile/{resource} | ReadProductProfile
[**readProperty**](ProductsApi.md#readProperty) | **GET** /v1/users/{user}/products/{product}/properties/{property} | ReadProductProperty
[**readServices**](ProductsApi.md#readServices) | **GET** /v1/users/{user}/products/{product}/services/{resource} | ReadProductServices
[**remove**](ProductsApi.md#remove) | **DELETE** /v1/users/{user}/products/{product} | DeleteProduct
[**update**](ProductsApi.md#update) | **PUT** /v1/users/{user}/products/{product} | UpdateProduct
[**updateFirmware**](ProductsApi.md#updateFirmware) | **PUT** /v1/users/{user}/products/{product}/firmwares/{firmware}/{firmware_version} | UpdateProductFirmware
[**updateFirmwareStream**](ProductsApi.md#updateFirmwareStream) | **GET** /v1/users/{user}/products/{product}/firmwares/{firmware}/{firmware_version}/stream | UpdateProductFirmware
[**updateFirmwareToolchain**](ProductsApi.md#updateFirmwareToolchain) | **GET** /v1/users/{user}/products/{product}/firmwares/{firmware}/{firmware_version}/toolchain | UpdateProductFirmware
[**updateProfile**](ProductsApi.md#updateProfile) | **PUT** /v1/users/{user}/products/{product}/profile/{resource} | UpdateProductProfile
[**updateProfileCode**](ProductsApi.md#updateProfileCode) | **PUT** /v1/users/{user}/products/{product}/profile/code | UpdateProductProfile
[**updateProjects**](ProductsApi.md#updateProjects) | **PUT** /v1/users/{user}/products/{product}/projects | UpdateProductProjects
[**updateProperty**](ProductsApi.md#updateProperty) | **PUT** /v1/users/{user}/products/{product}/properties/{property} | UpdateProductProperty
[**updateServices**](ProductsApi.md#updateServices) | **PUT** /v1/users/{user}/products/{product}/services/{resource} | UpdateProductServices


# **clone**
> any clone(productCloneRequest)


### Example


```typescript
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiCloneRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiCloneRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  product: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  productCloneRequest: 
    key: null,
  ,
};

const data = await apiInstance.clone(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productCloneRequest** | **ProductCloneRequest**|  |
 **user** | [**string**] |  | defaults to undefined
 **product** | [**string**] |  | defaults to undefined


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

# **cloneProperty**
> any cloneProperty(pluginClonePropertyRequest)


### Example


```typescript
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiClonePropertyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiClonePropertyRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  product: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  property: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  pluginClonePropertyRequest: 
    key: null,
  ,
};

const data = await apiInstance.cloneProperty(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pluginClonePropertyRequest** | **PluginClonePropertyRequest**|  |
 **user** | [**string**] |  | defaults to undefined
 **product** | [**string**] |  | defaults to undefined
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

# **create**
> any create(productCreateRequest)


### Example


```typescript
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiCreateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiCreateRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  productCreateRequest: 
    key: null,
  ,
};

const data = await apiInstance.create(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productCreateRequest** | **ProductCreateRequest**|  |
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

# **createFirmware**
> any createFirmware(productCreateFirmwareRequest)


### Example


```typescript
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiCreateFirmwareRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiCreateFirmwareRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  product: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  productCreateFirmwareRequest: 
    key: null,
  ,
};

const data = await apiInstance.createFirmware(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productCreateFirmwareRequest** | **ProductCreateFirmwareRequest**|  |
 **user** | [**string**] |  | defaults to undefined
 **product** | [**string**] |  | defaults to undefined


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
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiCreatePropertyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiCreatePropertyRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  product: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
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
 **product** | [**string**] |  | defaults to undefined


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

# **deleteFirmware**
> any deleteFirmware()


### Example


```typescript
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiDeleteFirmwareRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiDeleteFirmwareRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  product: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  firmware: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  firmwareVersion: "9072888001528021798096225500850762068629339333975650685139102691291.0.0+jvnh6nzn2yp6d7tmo7zxedi-pkbmhcbu-4d4ncp9sp-.ju7f9r1ly-n2jyba-zuswj171d3kxld4uyykb66fgvcwlpe6fjm6div96l1hmssf5by0949ps5we2h1m5iw5pvpftu50o.hq25-ctix-xt8fyuzw85-6ymflfzgfzdm4gro1y8vcn4nxd.yngfr2bsdqi-90qr77qnqf26kpzuf5a652r9yc8wgfitooko8ht4bjsb-86ca0gq8ejs584qp107f5qv9ze3gk7.64-5mecujmelufynb1wtb8v2n1x9-y9o36-1meqixpalso4ehay1yebs1kiembt-homr.h8664bew-vpjuuty7-xv4qjygg3hwqd-5gynywalvhvvesyveyxp35spjahpsiagrj0jehh3a3x8z9axqtswj38.252enq26d4ifob3rgi7j1fao-vb9l55lpj7lsk1mqype9z.3n6q-u55t879v1lmhjwtryosf-swgdlf1ulfw4u5aoqakjc4xlcmbpoy4n.izk.s3cdhxttexawd8mnl6e4u.xalowdqy9rokd32ct-w5p-yt-emwrzf7a8xulqkw0osnqktff9fp6xbt97440w4wt3xja.ovyb7flljlnosgtrof0isr4l3x5-2p577rg1fwn.6cq1e2d3p5aa62rscqk6cxzeqcrvjnb.d52lu.jr3qda19c-7skjef4ovphp57sme.47nwk-x0xp4ft9xd1-4zvmus0m5mf5l0h-jlvu47xor814uas.3gvg7px7mohsvz1n3b561az73nipt-so37iphbtnhmw48ibax305ck41trymo7d0ea3vl3k8vn3ygn2a7ps3-pdkhjjxrd.3lz6urrzqtzh9wngf-95dvz5km9h9e5j8vg6kx1nnqzi442akggqdhyxvo9nlupb4cz7.xp4qgqp5jsd55qux2vq83u.1j9iy-qb.bt8kb625gpncppm1zw5yrhw748q6soeyc3hzdpj1thr2n3gl5xq79rwp3km1p11ikuwgghy.2wdp5xrrsyrsnl.yjolek10nb0oek4jsaseh707s1vjswprq6a3ezhucdr85u0erh5dfg2hvs9u7vn0y8ci0w5cs0m66nvc.e2fr52dkbd9-7klkniu5cpn6qugmep5e6p9gx9creyet85-6sgithzei.bx4-4ox6m2aiffxmcwza92oxtwxs76jgejrljxm-3mvtf47ak-l6kntj4elgcf13ovinqusgnnclaaotmbqdseafe1dkj6zg4q-.exx0zm-i4m83-w17r6rxur1pbea75jjl8lv5.itcozzct-24nv1bftab5cre-v8r7bj-wboyenvbtf508c5c3ebybghqe7lyva958ar2bzuf2507k6.2lnujv0ps2icyh27nxstaqbg38m0hpg62dytg8n69rdva8j104ap-cf1p9yc1ijk9np17sjmh2tukz4atwz0044pdhk9pk1e.t1nod0p9-vep.ljhwtpf-qd2ysm1v3ctiane3jk-09bf0q3dbgqocrp16dzj0xk-uyej17sd.1mbgu820re53g21e.79vymf6mpam8pn0xdthfd9cqpo9sslxeml661r0eol4jypf.mdna86sfgz92j8na-52xiufg9mfli1bjvsy947g3cz7wufbd001uiwvuaxblt37i0ah0z6f6q.qwar1c3r14v-vt3pd5kbrrs94okiob2jznknec6kzwc3-7ibgp-oapc.410llsnx-m--ufb725icarr8pijimdu9gxv3p7744.7btxc9-zq66zjny7rvcbdfcl-7ksv-awu1ddn3dlap-81cg4obm9r3waeqrdsk5mk0-m058.-trz5qwr2rjf1o26.5v873inyqekdlul-2yu96dhuposmz433w4216crklro1x0.fmkesrrzj9h.tdyamuoxl0l1gb0vgs.s5ou3nf.hnvvfktn2uyclzyqvy90vz11a6oipnv4tno.yblitma4pfk1y-f41a9ekyw5sfqgxxg2.36imo6t94jmeph0msaf6p04q5p6z75n97ibih9ynp9w52mhv6mbh985by7-jms7z9rzl84e9iub-3gwwq4fe81bi.bmela-4-ti6-mqq-em0m73ls976osz80k.x-s0ecnxe4.xgit8guso2bynf9xkxywffvyznse5yovoes9zqhgf9wk74po4qj1hri45zg96kv2f-9nfnnqdjas130ndgnxp85h0saok.e-wcp8nl4iimu56l68c-0hnu2tn0fal1tsn8phrmhzoys2l25i7.gxqn--s4lzpz2z4auw8tq7wsnu11ayw0yl92cd8ttxcgpzf6zx7tozgmd82lwnoob7mfzqjte0dm6zjsab86tz35bykie5g.mc5hjh72yt5acqmzn19czrz435lw66lr79q331lt18v6d5hla0.7-ae4zwm8dvvt41j9zmx-azuslnknby8kc.7ik1lwyct-jpskk06ho.8zcj8v48859fl1157171-jmm433au5uvrcnyf-hi6-bc2l3m370f7fg7qtvcbabarat4fbqnanu.zj-noq9czf9imx4b55q3io4cjxykmcine1daltfp.6eq7rrmmzut02n3y1bq2ibg2rv74ilw2irb2f8fv-t8uesrvhcibaefy5-gz0ki--6gxf01j9ejah2fmc.irg82dq4bzqs650nmfve2bsa87ao19cwdb-7r0vh2y3whex4snejanaehzbiik9j6u52jwmw6tdwsvjcjr5ex794e-wpj71.-.7ltnkkgbmzira91g7x7g3ivaq43pvnnbcesaie-gjnx51nf.kaa8r9keucn783ngtu2vnstg-1my4f8und.yio33gczpmx4a6t5zwdianu-q46vf39urv5f1.1ql-kgwq3zw9kdbv005i-n3jbrkm.zxbilui4bv476rj2a0wvyuanj5acgwg9xf2z44tqoh2hpullhhf7nqqbxi04659cszvn286itl7omjqxr.u2ehikvmao6u2scnmbt-rn-axpmvx51i1tg0e0-wf48.kizafkyr1r-p8hauf6yzwop5k",
};

const data = await apiInstance.deleteFirmware(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **product** | [**string**] |  | defaults to undefined
 **firmware** | [**string**] |  | defaults to undefined
 **firmwareVersion** | [**string**] |  | defaults to undefined


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

# **deleteProperty**
> any deleteProperty()


### Example


```typescript
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiDeletePropertyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiDeletePropertyRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  product: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  property: "zBAMDTMv2D2ylmgd10Z3UB6U",
};

const data = await apiInstance.deleteProperty(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **product** | [**string**] |  | defaults to undefined
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

# **exportData**
> any exportData()


### Example


```typescript
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiExportDataRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiExportDataRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  product: "zBAMDTMv2D2ylmgd10Z3UB6U",
};

const data = await apiInstance.exportData(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **product** | [**string**] |  | defaults to undefined


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

# **flashFirmware**
> any flashFirmware()


### Example


```typescript
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiFlashFirmwareRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiFlashFirmwareRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  product: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  firmware: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  firmwareVersion: "9072888001528021798096225500850762068629339333975650685139102691291.0.0+jvnh6nzn2yp6d7tmo7zxedi-pkbmhcbu-4d4ncp9sp-.ju7f9r1ly-n2jyba-zuswj171d3kxld4uyykb66fgvcwlpe6fjm6div96l1hmssf5by0949ps5we2h1m5iw5pvpftu50o.hq25-ctix-xt8fyuzw85-6ymflfzgfzdm4gro1y8vcn4nxd.yngfr2bsdqi-90qr77qnqf26kpzuf5a652r9yc8wgfitooko8ht4bjsb-86ca0gq8ejs584qp107f5qv9ze3gk7.64-5mecujmelufynb1wtb8v2n1x9-y9o36-1meqixpalso4ehay1yebs1kiembt-homr.h8664bew-vpjuuty7-xv4qjygg3hwqd-5gynywalvhvvesyveyxp35spjahpsiagrj0jehh3a3x8z9axqtswj38.252enq26d4ifob3rgi7j1fao-vb9l55lpj7lsk1mqype9z.3n6q-u55t879v1lmhjwtryosf-swgdlf1ulfw4u5aoqakjc4xlcmbpoy4n.izk.s3cdhxttexawd8mnl6e4u.xalowdqy9rokd32ct-w5p-yt-emwrzf7a8xulqkw0osnqktff9fp6xbt97440w4wt3xja.ovyb7flljlnosgtrof0isr4l3x5-2p577rg1fwn.6cq1e2d3p5aa62rscqk6cxzeqcrvjnb.d52lu.jr3qda19c-7skjef4ovphp57sme.47nwk-x0xp4ft9xd1-4zvmus0m5mf5l0h-jlvu47xor814uas.3gvg7px7mohsvz1n3b561az73nipt-so37iphbtnhmw48ibax305ck41trymo7d0ea3vl3k8vn3ygn2a7ps3-pdkhjjxrd.3lz6urrzqtzh9wngf-95dvz5km9h9e5j8vg6kx1nnqzi442akggqdhyxvo9nlupb4cz7.xp4qgqp5jsd55qux2vq83u.1j9iy-qb.bt8kb625gpncppm1zw5yrhw748q6soeyc3hzdpj1thr2n3gl5xq79rwp3km1p11ikuwgghy.2wdp5xrrsyrsnl.yjolek10nb0oek4jsaseh707s1vjswprq6a3ezhucdr85u0erh5dfg2hvs9u7vn0y8ci0w5cs0m66nvc.e2fr52dkbd9-7klkniu5cpn6qugmep5e6p9gx9creyet85-6sgithzei.bx4-4ox6m2aiffxmcwza92oxtwxs76jgejrljxm-3mvtf47ak-l6kntj4elgcf13ovinqusgnnclaaotmbqdseafe1dkj6zg4q-.exx0zm-i4m83-w17r6rxur1pbea75jjl8lv5.itcozzct-24nv1bftab5cre-v8r7bj-wboyenvbtf508c5c3ebybghqe7lyva958ar2bzuf2507k6.2lnujv0ps2icyh27nxstaqbg38m0hpg62dytg8n69rdva8j104ap-cf1p9yc1ijk9np17sjmh2tukz4atwz0044pdhk9pk1e.t1nod0p9-vep.ljhwtpf-qd2ysm1v3ctiane3jk-09bf0q3dbgqocrp16dzj0xk-uyej17sd.1mbgu820re53g21e.79vymf6mpam8pn0xdthfd9cqpo9sslxeml661r0eol4jypf.mdna86sfgz92j8na-52xiufg9mfli1bjvsy947g3cz7wufbd001uiwvuaxblt37i0ah0z6f6q.qwar1c3r14v-vt3pd5kbrrs94okiob2jznknec6kzwc3-7ibgp-oapc.410llsnx-m--ufb725icarr8pijimdu9gxv3p7744.7btxc9-zq66zjny7rvcbdfcl-7ksv-awu1ddn3dlap-81cg4obm9r3waeqrdsk5mk0-m058.-trz5qwr2rjf1o26.5v873inyqekdlul-2yu96dhuposmz433w4216crklro1x0.fmkesrrzj9h.tdyamuoxl0l1gb0vgs.s5ou3nf.hnvvfktn2uyclzyqvy90vz11a6oipnv4tno.yblitma4pfk1y-f41a9ekyw5sfqgxxg2.36imo6t94jmeph0msaf6p04q5p6z75n97ibih9ynp9w52mhv6mbh985by7-jms7z9rzl84e9iub-3gwwq4fe81bi.bmela-4-ti6-mqq-em0m73ls976osz80k.x-s0ecnxe4.xgit8guso2bynf9xkxywffvyznse5yovoes9zqhgf9wk74po4qj1hri45zg96kv2f-9nfnnqdjas130ndgnxp85h0saok.e-wcp8nl4iimu56l68c-0hnu2tn0fal1tsn8phrmhzoys2l25i7.gxqn--s4lzpz2z4auw8tq7wsnu11ayw0yl92cd8ttxcgpzf6zx7tozgmd82lwnoob7mfzqjte0dm6zjsab86tz35bykie5g.mc5hjh72yt5acqmzn19czrz435lw66lr79q331lt18v6d5hla0.7-ae4zwm8dvvt41j9zmx-azuslnknby8kc.7ik1lwyct-jpskk06ho.8zcj8v48859fl1157171-jmm433au5uvrcnyf-hi6-bc2l3m370f7fg7qtvcbabarat4fbqnanu.zj-noq9czf9imx4b55q3io4cjxykmcine1daltfp.6eq7rrmmzut02n3y1bq2ibg2rv74ilw2irb2f8fv-t8uesrvhcibaefy5-gz0ki--6gxf01j9ejah2fmc.irg82dq4bzqs650nmfve2bsa87ao19cwdb-7r0vh2y3whex4snejanaehzbiik9j6u52jwmw6tdwsvjcjr5ex794e-wpj71.-.7ltnkkgbmzira91g7x7g3ivaq43pvnnbcesaie-gjnx51nf.kaa8r9keucn783ngtu2vnstg-1my4f8und.yio33gczpmx4a6t5zwdianu-q46vf39urv5f1.1ql-kgwq3zw9kdbv005i-n3jbrkm.zxbilui4bv476rj2a0wvyuanj5acgwg9xf2z44tqoh2hpullhhf7nqqbxi04659cszvn286itl7omjqxr.u2ehikvmao6u2scnmbt-rn-axpmvx51i1tg0e0-wf48.kizafkyr1r-p8hauf6yzwop5k",
};

const data = await apiInstance.flashFirmware(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **product** | [**string**] |  | defaults to undefined
 **firmware** | [**string**] |  | defaults to undefined
 **firmwareVersion** | [**string**] |  | defaults to undefined


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
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiListRequest = {
  
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

# **listFirmwares**
> any listFirmwares()


### Example


```typescript
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiListFirmwaresRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiListFirmwaresRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  product: "zBAMDTMv2D2ylmgd10Z3UB6U",
};

const data = await apiInstance.listFirmwares(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **product** | [**string**] |  | defaults to undefined


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
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiListPropertiesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiListPropertiesRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  product: "zBAMDTMv2D2ylmgd10Z3UB6U",
};

const data = await apiInstance.listProperties(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **product** | [**string**] |  | defaults to undefined


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
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiPatchPropertyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiPatchPropertyRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  product: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  property: "zBAMDTMv2D2ylmgd10Z3UB6U",
};

const data = await apiInstance.patchProperty(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **product** | [**string**] |  | defaults to undefined
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

# **readConfig**
> any readConfig()


### Example


```typescript
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiReadConfigRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiReadConfigRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  product: "zBAMDTMv2D2ylmgd10Z3UB6U",
};

const data = await apiInstance.readConfig(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **product** | [**string**] |  | defaults to undefined


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

# **readFirmwareConfig**
> any readFirmwareConfig()


### Example


```typescript
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiReadFirmwareConfigRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiReadFirmwareConfigRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  product: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  firmware: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  firmwareVersion: "9072888001528021798096225500850762068629339333975650685139102691291.0.0+jvnh6nzn2yp6d7tmo7zxedi-pkbmhcbu-4d4ncp9sp-.ju7f9r1ly-n2jyba-zuswj171d3kxld4uyykb66fgvcwlpe6fjm6div96l1hmssf5by0949ps5we2h1m5iw5pvpftu50o.hq25-ctix-xt8fyuzw85-6ymflfzgfzdm4gro1y8vcn4nxd.yngfr2bsdqi-90qr77qnqf26kpzuf5a652r9yc8wgfitooko8ht4bjsb-86ca0gq8ejs584qp107f5qv9ze3gk7.64-5mecujmelufynb1wtb8v2n1x9-y9o36-1meqixpalso4ehay1yebs1kiembt-homr.h8664bew-vpjuuty7-xv4qjygg3hwqd-5gynywalvhvvesyveyxp35spjahpsiagrj0jehh3a3x8z9axqtswj38.252enq26d4ifob3rgi7j1fao-vb9l55lpj7lsk1mqype9z.3n6q-u55t879v1lmhjwtryosf-swgdlf1ulfw4u5aoqakjc4xlcmbpoy4n.izk.s3cdhxttexawd8mnl6e4u.xalowdqy9rokd32ct-w5p-yt-emwrzf7a8xulqkw0osnqktff9fp6xbt97440w4wt3xja.ovyb7flljlnosgtrof0isr4l3x5-2p577rg1fwn.6cq1e2d3p5aa62rscqk6cxzeqcrvjnb.d52lu.jr3qda19c-7skjef4ovphp57sme.47nwk-x0xp4ft9xd1-4zvmus0m5mf5l0h-jlvu47xor814uas.3gvg7px7mohsvz1n3b561az73nipt-so37iphbtnhmw48ibax305ck41trymo7d0ea3vl3k8vn3ygn2a7ps3-pdkhjjxrd.3lz6urrzqtzh9wngf-95dvz5km9h9e5j8vg6kx1nnqzi442akggqdhyxvo9nlupb4cz7.xp4qgqp5jsd55qux2vq83u.1j9iy-qb.bt8kb625gpncppm1zw5yrhw748q6soeyc3hzdpj1thr2n3gl5xq79rwp3km1p11ikuwgghy.2wdp5xrrsyrsnl.yjolek10nb0oek4jsaseh707s1vjswprq6a3ezhucdr85u0erh5dfg2hvs9u7vn0y8ci0w5cs0m66nvc.e2fr52dkbd9-7klkniu5cpn6qugmep5e6p9gx9creyet85-6sgithzei.bx4-4ox6m2aiffxmcwza92oxtwxs76jgejrljxm-3mvtf47ak-l6kntj4elgcf13ovinqusgnnclaaotmbqdseafe1dkj6zg4q-.exx0zm-i4m83-w17r6rxur1pbea75jjl8lv5.itcozzct-24nv1bftab5cre-v8r7bj-wboyenvbtf508c5c3ebybghqe7lyva958ar2bzuf2507k6.2lnujv0ps2icyh27nxstaqbg38m0hpg62dytg8n69rdva8j104ap-cf1p9yc1ijk9np17sjmh2tukz4atwz0044pdhk9pk1e.t1nod0p9-vep.ljhwtpf-qd2ysm1v3ctiane3jk-09bf0q3dbgqocrp16dzj0xk-uyej17sd.1mbgu820re53g21e.79vymf6mpam8pn0xdthfd9cqpo9sslxeml661r0eol4jypf.mdna86sfgz92j8na-52xiufg9mfli1bjvsy947g3cz7wufbd001uiwvuaxblt37i0ah0z6f6q.qwar1c3r14v-vt3pd5kbrrs94okiob2jznknec6kzwc3-7ibgp-oapc.410llsnx-m--ufb725icarr8pijimdu9gxv3p7744.7btxc9-zq66zjny7rvcbdfcl-7ksv-awu1ddn3dlap-81cg4obm9r3waeqrdsk5mk0-m058.-trz5qwr2rjf1o26.5v873inyqekdlul-2yu96dhuposmz433w4216crklro1x0.fmkesrrzj9h.tdyamuoxl0l1gb0vgs.s5ou3nf.hnvvfktn2uyclzyqvy90vz11a6oipnv4tno.yblitma4pfk1y-f41a9ekyw5sfqgxxg2.36imo6t94jmeph0msaf6p04q5p6z75n97ibih9ynp9w52mhv6mbh985by7-jms7z9rzl84e9iub-3gwwq4fe81bi.bmela-4-ti6-mqq-em0m73ls976osz80k.x-s0ecnxe4.xgit8guso2bynf9xkxywffvyznse5yovoes9zqhgf9wk74po4qj1hri45zg96kv2f-9nfnnqdjas130ndgnxp85h0saok.e-wcp8nl4iimu56l68c-0hnu2tn0fal1tsn8phrmhzoys2l25i7.gxqn--s4lzpz2z4auw8tq7wsnu11ayw0yl92cd8ttxcgpzf6zx7tozgmd82lwnoob7mfzqjte0dm6zjsab86tz35bykie5g.mc5hjh72yt5acqmzn19czrz435lw66lr79q331lt18v6d5hla0.7-ae4zwm8dvvt41j9zmx-azuslnknby8kc.7ik1lwyct-jpskk06ho.8zcj8v48859fl1157171-jmm433au5uvrcnyf-hi6-bc2l3m370f7fg7qtvcbabarat4fbqnanu.zj-noq9czf9imx4b55q3io4cjxykmcine1daltfp.6eq7rrmmzut02n3y1bq2ibg2rv74ilw2irb2f8fv-t8uesrvhcibaefy5-gz0ki--6gxf01j9ejah2fmc.irg82dq4bzqs650nmfve2bsa87ao19cwdb-7r0vh2y3whex4snejanaehzbiik9j6u52jwmw6tdwsvjcjr5ex794e-wpj71.-.7ltnkkgbmzira91g7x7g3ivaq43pvnnbcesaie-gjnx51nf.kaa8r9keucn783ngtu2vnstg-1my4f8und.yio33gczpmx4a6t5zwdianu-q46vf39urv5f1.1ql-kgwq3zw9kdbv005i-n3jbrkm.zxbilui4bv476rj2a0wvyuanj5acgwg9xf2z44tqoh2hpullhhf7nqqbxi04659cszvn286itl7omjqxr.u2ehikvmao6u2scnmbt-rn-axpmvx51i1tg0e0-wf48.kizafkyr1r-p8hauf6yzwop5k",
};

const data = await apiInstance.readFirmwareConfig(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **product** | [**string**] |  | defaults to undefined
 **firmware** | [**string**] |  | defaults to undefined
 **firmwareVersion** | [**string**] |  | defaults to undefined


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

# **readProfile**
> any readProfile()


### Example


```typescript
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiReadProfileRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiReadProfileRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  product: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  resource: "zBAMDTMv2D2ylmgd10Z3UB6U",
};

const data = await apiInstance.readProfile(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **product** | [**string**] |  | defaults to undefined
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

# **readProperty**
> any readProperty()


### Example


```typescript
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiReadPropertyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiReadPropertyRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  product: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  property: "zBAMDTMv2D2ylmgd10Z3UB6U",
};

const data = await apiInstance.readProperty(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **product** | [**string**] |  | defaults to undefined
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

# **readServices**
> any readServices()


### Example


```typescript
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiReadServicesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiReadServicesRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  product: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  resource: "zBAMDTMv2D2ylmgd10Z3UB6U",
};

const data = await apiInstance.readServices(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **product** | [**string**] |  | defaults to undefined
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

# **remove**
> any remove()


### Example


```typescript
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiRemoveRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiRemoveRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  product: "zBAMDTMv2D2ylmgd10Z3UB6U",
};

const data = await apiInstance.remove(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **product** | [**string**] |  | defaults to undefined


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
> any update(productUpdateRequest)


### Example


```typescript
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiUpdateRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  product: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  productUpdateRequest: 
    key: null,
  ,
};

const data = await apiInstance.update(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productUpdateRequest** | **ProductUpdateRequest**|  |
 **user** | [**string**] |  | defaults to undefined
 **product** | [**string**] |  | defaults to undefined


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

# **updateFirmware**
> any updateFirmware(body)


### Example


```typescript
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiUpdateFirmwareRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiUpdateFirmwareRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  product: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  firmware: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  firmwareVersion: "9072888001528021798096225500850762068629339333975650685139102691291.0.0+jvnh6nzn2yp6d7tmo7zxedi-pkbmhcbu-4d4ncp9sp-.ju7f9r1ly-n2jyba-zuswj171d3kxld4uyykb66fgvcwlpe6fjm6div96l1hmssf5by0949ps5we2h1m5iw5pvpftu50o.hq25-ctix-xt8fyuzw85-6ymflfzgfzdm4gro1y8vcn4nxd.yngfr2bsdqi-90qr77qnqf26kpzuf5a652r9yc8wgfitooko8ht4bjsb-86ca0gq8ejs584qp107f5qv9ze3gk7.64-5mecujmelufynb1wtb8v2n1x9-y9o36-1meqixpalso4ehay1yebs1kiembt-homr.h8664bew-vpjuuty7-xv4qjygg3hwqd-5gynywalvhvvesyveyxp35spjahpsiagrj0jehh3a3x8z9axqtswj38.252enq26d4ifob3rgi7j1fao-vb9l55lpj7lsk1mqype9z.3n6q-u55t879v1lmhjwtryosf-swgdlf1ulfw4u5aoqakjc4xlcmbpoy4n.izk.s3cdhxttexawd8mnl6e4u.xalowdqy9rokd32ct-w5p-yt-emwrzf7a8xulqkw0osnqktff9fp6xbt97440w4wt3xja.ovyb7flljlnosgtrof0isr4l3x5-2p577rg1fwn.6cq1e2d3p5aa62rscqk6cxzeqcrvjnb.d52lu.jr3qda19c-7skjef4ovphp57sme.47nwk-x0xp4ft9xd1-4zvmus0m5mf5l0h-jlvu47xor814uas.3gvg7px7mohsvz1n3b561az73nipt-so37iphbtnhmw48ibax305ck41trymo7d0ea3vl3k8vn3ygn2a7ps3-pdkhjjxrd.3lz6urrzqtzh9wngf-95dvz5km9h9e5j8vg6kx1nnqzi442akggqdhyxvo9nlupb4cz7.xp4qgqp5jsd55qux2vq83u.1j9iy-qb.bt8kb625gpncppm1zw5yrhw748q6soeyc3hzdpj1thr2n3gl5xq79rwp3km1p11ikuwgghy.2wdp5xrrsyrsnl.yjolek10nb0oek4jsaseh707s1vjswprq6a3ezhucdr85u0erh5dfg2hvs9u7vn0y8ci0w5cs0m66nvc.e2fr52dkbd9-7klkniu5cpn6qugmep5e6p9gx9creyet85-6sgithzei.bx4-4ox6m2aiffxmcwza92oxtwxs76jgejrljxm-3mvtf47ak-l6kntj4elgcf13ovinqusgnnclaaotmbqdseafe1dkj6zg4q-.exx0zm-i4m83-w17r6rxur1pbea75jjl8lv5.itcozzct-24nv1bftab5cre-v8r7bj-wboyenvbtf508c5c3ebybghqe7lyva958ar2bzuf2507k6.2lnujv0ps2icyh27nxstaqbg38m0hpg62dytg8n69rdva8j104ap-cf1p9yc1ijk9np17sjmh2tukz4atwz0044pdhk9pk1e.t1nod0p9-vep.ljhwtpf-qd2ysm1v3ctiane3jk-09bf0q3dbgqocrp16dzj0xk-uyej17sd.1mbgu820re53g21e.79vymf6mpam8pn0xdthfd9cqpo9sslxeml661r0eol4jypf.mdna86sfgz92j8na-52xiufg9mfli1bjvsy947g3cz7wufbd001uiwvuaxblt37i0ah0z6f6q.qwar1c3r14v-vt3pd5kbrrs94okiob2jznknec6kzwc3-7ibgp-oapc.410llsnx-m--ufb725icarr8pijimdu9gxv3p7744.7btxc9-zq66zjny7rvcbdfcl-7ksv-awu1ddn3dlap-81cg4obm9r3waeqrdsk5mk0-m058.-trz5qwr2rjf1o26.5v873inyqekdlul-2yu96dhuposmz433w4216crklro1x0.fmkesrrzj9h.tdyamuoxl0l1gb0vgs.s5ou3nf.hnvvfktn2uyclzyqvy90vz11a6oipnv4tno.yblitma4pfk1y-f41a9ekyw5sfqgxxg2.36imo6t94jmeph0msaf6p04q5p6z75n97ibih9ynp9w52mhv6mbh985by7-jms7z9rzl84e9iub-3gwwq4fe81bi.bmela-4-ti6-mqq-em0m73ls976osz80k.x-s0ecnxe4.xgit8guso2bynf9xkxywffvyznse5yovoes9zqhgf9wk74po4qj1hri45zg96kv2f-9nfnnqdjas130ndgnxp85h0saok.e-wcp8nl4iimu56l68c-0hnu2tn0fal1tsn8phrmhzoys2l25i7.gxqn--s4lzpz2z4auw8tq7wsnu11ayw0yl92cd8ttxcgpzf6zx7tozgmd82lwnoob7mfzqjte0dm6zjsab86tz35bykie5g.mc5hjh72yt5acqmzn19czrz435lw66lr79q331lt18v6d5hla0.7-ae4zwm8dvvt41j9zmx-azuslnknby8kc.7ik1lwyct-jpskk06ho.8zcj8v48859fl1157171-jmm433au5uvrcnyf-hi6-bc2l3m370f7fg7qtvcbabarat4fbqnanu.zj-noq9czf9imx4b55q3io4cjxykmcine1daltfp.6eq7rrmmzut02n3y1bq2ibg2rv74ilw2irb2f8fv-t8uesrvhcibaefy5-gz0ki--6gxf01j9ejah2fmc.irg82dq4bzqs650nmfve2bsa87ao19cwdb-7r0vh2y3whex4snejanaehzbiik9j6u52jwmw6tdwsvjcjr5ex794e-wpj71.-.7ltnkkgbmzira91g7x7g3ivaq43pvnnbcesaie-gjnx51nf.kaa8r9keucn783ngtu2vnstg-1my4f8und.yio33gczpmx4a6t5zwdianu-q46vf39urv5f1.1ql-kgwq3zw9kdbv005i-n3jbrkm.zxbilui4bv476rj2a0wvyuanj5acgwg9xf2z44tqoh2hpullhhf7nqqbxi04659cszvn286itl7omjqxr.u2ehikvmao6u2scnmbt-rn-axpmvx51i1tg0e0-wf48.kizafkyr1r-p8hauf6yzwop5k",
  
  body: {},
};

const data = await apiInstance.updateFirmware(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **user** | [**string**] |  | defaults to undefined
 **product** | [**string**] |  | defaults to undefined
 **firmware** | [**string**] |  | defaults to undefined
 **firmwareVersion** | [**string**] |  | defaults to undefined


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

# **updateFirmwareStream**
> any updateFirmwareStream()


### Example


```typescript
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiUpdateFirmwareStreamRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiUpdateFirmwareStreamRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  product: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  firmware: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  firmwareVersion: "9072888001528021798096225500850762068629339333975650685139102691291.0.0+jvnh6nzn2yp6d7tmo7zxedi-pkbmhcbu-4d4ncp9sp-.ju7f9r1ly-n2jyba-zuswj171d3kxld4uyykb66fgvcwlpe6fjm6div96l1hmssf5by0949ps5we2h1m5iw5pvpftu50o.hq25-ctix-xt8fyuzw85-6ymflfzgfzdm4gro1y8vcn4nxd.yngfr2bsdqi-90qr77qnqf26kpzuf5a652r9yc8wgfitooko8ht4bjsb-86ca0gq8ejs584qp107f5qv9ze3gk7.64-5mecujmelufynb1wtb8v2n1x9-y9o36-1meqixpalso4ehay1yebs1kiembt-homr.h8664bew-vpjuuty7-xv4qjygg3hwqd-5gynywalvhvvesyveyxp35spjahpsiagrj0jehh3a3x8z9axqtswj38.252enq26d4ifob3rgi7j1fao-vb9l55lpj7lsk1mqype9z.3n6q-u55t879v1lmhjwtryosf-swgdlf1ulfw4u5aoqakjc4xlcmbpoy4n.izk.s3cdhxttexawd8mnl6e4u.xalowdqy9rokd32ct-w5p-yt-emwrzf7a8xulqkw0osnqktff9fp6xbt97440w4wt3xja.ovyb7flljlnosgtrof0isr4l3x5-2p577rg1fwn.6cq1e2d3p5aa62rscqk6cxzeqcrvjnb.d52lu.jr3qda19c-7skjef4ovphp57sme.47nwk-x0xp4ft9xd1-4zvmus0m5mf5l0h-jlvu47xor814uas.3gvg7px7mohsvz1n3b561az73nipt-so37iphbtnhmw48ibax305ck41trymo7d0ea3vl3k8vn3ygn2a7ps3-pdkhjjxrd.3lz6urrzqtzh9wngf-95dvz5km9h9e5j8vg6kx1nnqzi442akggqdhyxvo9nlupb4cz7.xp4qgqp5jsd55qux2vq83u.1j9iy-qb.bt8kb625gpncppm1zw5yrhw748q6soeyc3hzdpj1thr2n3gl5xq79rwp3km1p11ikuwgghy.2wdp5xrrsyrsnl.yjolek10nb0oek4jsaseh707s1vjswprq6a3ezhucdr85u0erh5dfg2hvs9u7vn0y8ci0w5cs0m66nvc.e2fr52dkbd9-7klkniu5cpn6qugmep5e6p9gx9creyet85-6sgithzei.bx4-4ox6m2aiffxmcwza92oxtwxs76jgejrljxm-3mvtf47ak-l6kntj4elgcf13ovinqusgnnclaaotmbqdseafe1dkj6zg4q-.exx0zm-i4m83-w17r6rxur1pbea75jjl8lv5.itcozzct-24nv1bftab5cre-v8r7bj-wboyenvbtf508c5c3ebybghqe7lyva958ar2bzuf2507k6.2lnujv0ps2icyh27nxstaqbg38m0hpg62dytg8n69rdva8j104ap-cf1p9yc1ijk9np17sjmh2tukz4atwz0044pdhk9pk1e.t1nod0p9-vep.ljhwtpf-qd2ysm1v3ctiane3jk-09bf0q3dbgqocrp16dzj0xk-uyej17sd.1mbgu820re53g21e.79vymf6mpam8pn0xdthfd9cqpo9sslxeml661r0eol4jypf.mdna86sfgz92j8na-52xiufg9mfli1bjvsy947g3cz7wufbd001uiwvuaxblt37i0ah0z6f6q.qwar1c3r14v-vt3pd5kbrrs94okiob2jznknec6kzwc3-7ibgp-oapc.410llsnx-m--ufb725icarr8pijimdu9gxv3p7744.7btxc9-zq66zjny7rvcbdfcl-7ksv-awu1ddn3dlap-81cg4obm9r3waeqrdsk5mk0-m058.-trz5qwr2rjf1o26.5v873inyqekdlul-2yu96dhuposmz433w4216crklro1x0.fmkesrrzj9h.tdyamuoxl0l1gb0vgs.s5ou3nf.hnvvfktn2uyclzyqvy90vz11a6oipnv4tno.yblitma4pfk1y-f41a9ekyw5sfqgxxg2.36imo6t94jmeph0msaf6p04q5p6z75n97ibih9ynp9w52mhv6mbh985by7-jms7z9rzl84e9iub-3gwwq4fe81bi.bmela-4-ti6-mqq-em0m73ls976osz80k.x-s0ecnxe4.xgit8guso2bynf9xkxywffvyznse5yovoes9zqhgf9wk74po4qj1hri45zg96kv2f-9nfnnqdjas130ndgnxp85h0saok.e-wcp8nl4iimu56l68c-0hnu2tn0fal1tsn8phrmhzoys2l25i7.gxqn--s4lzpz2z4auw8tq7wsnu11ayw0yl92cd8ttxcgpzf6zx7tozgmd82lwnoob7mfzqjte0dm6zjsab86tz35bykie5g.mc5hjh72yt5acqmzn19czrz435lw66lr79q331lt18v6d5hla0.7-ae4zwm8dvvt41j9zmx-azuslnknby8kc.7ik1lwyct-jpskk06ho.8zcj8v48859fl1157171-jmm433au5uvrcnyf-hi6-bc2l3m370f7fg7qtvcbabarat4fbqnanu.zj-noq9czf9imx4b55q3io4cjxykmcine1daltfp.6eq7rrmmzut02n3y1bq2ibg2rv74ilw2irb2f8fv-t8uesrvhcibaefy5-gz0ki--6gxf01j9ejah2fmc.irg82dq4bzqs650nmfve2bsa87ao19cwdb-7r0vh2y3whex4snejanaehzbiik9j6u52jwmw6tdwsvjcjr5ex794e-wpj71.-.7ltnkkgbmzira91g7x7g3ivaq43pvnnbcesaie-gjnx51nf.kaa8r9keucn783ngtu2vnstg-1my4f8und.yio33gczpmx4a6t5zwdianu-q46vf39urv5f1.1ql-kgwq3zw9kdbv005i-n3jbrkm.zxbilui4bv476rj2a0wvyuanj5acgwg9xf2z44tqoh2hpullhhf7nqqbxi04659cszvn286itl7omjqxr.u2ehikvmao6u2scnmbt-rn-axpmvx51i1tg0e0-wf48.kizafkyr1r-p8hauf6yzwop5k",
};

const data = await apiInstance.updateFirmwareStream(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **product** | [**string**] |  | defaults to undefined
 **firmware** | [**string**] |  | defaults to undefined
 **firmwareVersion** | [**string**] |  | defaults to undefined


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

# **updateFirmwareToolchain**
> any updateFirmwareToolchain()


### Example


```typescript
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiUpdateFirmwareToolchainRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiUpdateFirmwareToolchainRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  product: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  firmware: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  firmwareVersion: "9072888001528021798096225500850762068629339333975650685139102691291.0.0+jvnh6nzn2yp6d7tmo7zxedi-pkbmhcbu-4d4ncp9sp-.ju7f9r1ly-n2jyba-zuswj171d3kxld4uyykb66fgvcwlpe6fjm6div96l1hmssf5by0949ps5we2h1m5iw5pvpftu50o.hq25-ctix-xt8fyuzw85-6ymflfzgfzdm4gro1y8vcn4nxd.yngfr2bsdqi-90qr77qnqf26kpzuf5a652r9yc8wgfitooko8ht4bjsb-86ca0gq8ejs584qp107f5qv9ze3gk7.64-5mecujmelufynb1wtb8v2n1x9-y9o36-1meqixpalso4ehay1yebs1kiembt-homr.h8664bew-vpjuuty7-xv4qjygg3hwqd-5gynywalvhvvesyveyxp35spjahpsiagrj0jehh3a3x8z9axqtswj38.252enq26d4ifob3rgi7j1fao-vb9l55lpj7lsk1mqype9z.3n6q-u55t879v1lmhjwtryosf-swgdlf1ulfw4u5aoqakjc4xlcmbpoy4n.izk.s3cdhxttexawd8mnl6e4u.xalowdqy9rokd32ct-w5p-yt-emwrzf7a8xulqkw0osnqktff9fp6xbt97440w4wt3xja.ovyb7flljlnosgtrof0isr4l3x5-2p577rg1fwn.6cq1e2d3p5aa62rscqk6cxzeqcrvjnb.d52lu.jr3qda19c-7skjef4ovphp57sme.47nwk-x0xp4ft9xd1-4zvmus0m5mf5l0h-jlvu47xor814uas.3gvg7px7mohsvz1n3b561az73nipt-so37iphbtnhmw48ibax305ck41trymo7d0ea3vl3k8vn3ygn2a7ps3-pdkhjjxrd.3lz6urrzqtzh9wngf-95dvz5km9h9e5j8vg6kx1nnqzi442akggqdhyxvo9nlupb4cz7.xp4qgqp5jsd55qux2vq83u.1j9iy-qb.bt8kb625gpncppm1zw5yrhw748q6soeyc3hzdpj1thr2n3gl5xq79rwp3km1p11ikuwgghy.2wdp5xrrsyrsnl.yjolek10nb0oek4jsaseh707s1vjswprq6a3ezhucdr85u0erh5dfg2hvs9u7vn0y8ci0w5cs0m66nvc.e2fr52dkbd9-7klkniu5cpn6qugmep5e6p9gx9creyet85-6sgithzei.bx4-4ox6m2aiffxmcwza92oxtwxs76jgejrljxm-3mvtf47ak-l6kntj4elgcf13ovinqusgnnclaaotmbqdseafe1dkj6zg4q-.exx0zm-i4m83-w17r6rxur1pbea75jjl8lv5.itcozzct-24nv1bftab5cre-v8r7bj-wboyenvbtf508c5c3ebybghqe7lyva958ar2bzuf2507k6.2lnujv0ps2icyh27nxstaqbg38m0hpg62dytg8n69rdva8j104ap-cf1p9yc1ijk9np17sjmh2tukz4atwz0044pdhk9pk1e.t1nod0p9-vep.ljhwtpf-qd2ysm1v3ctiane3jk-09bf0q3dbgqocrp16dzj0xk-uyej17sd.1mbgu820re53g21e.79vymf6mpam8pn0xdthfd9cqpo9sslxeml661r0eol4jypf.mdna86sfgz92j8na-52xiufg9mfli1bjvsy947g3cz7wufbd001uiwvuaxblt37i0ah0z6f6q.qwar1c3r14v-vt3pd5kbrrs94okiob2jznknec6kzwc3-7ibgp-oapc.410llsnx-m--ufb725icarr8pijimdu9gxv3p7744.7btxc9-zq66zjny7rvcbdfcl-7ksv-awu1ddn3dlap-81cg4obm9r3waeqrdsk5mk0-m058.-trz5qwr2rjf1o26.5v873inyqekdlul-2yu96dhuposmz433w4216crklro1x0.fmkesrrzj9h.tdyamuoxl0l1gb0vgs.s5ou3nf.hnvvfktn2uyclzyqvy90vz11a6oipnv4tno.yblitma4pfk1y-f41a9ekyw5sfqgxxg2.36imo6t94jmeph0msaf6p04q5p6z75n97ibih9ynp9w52mhv6mbh985by7-jms7z9rzl84e9iub-3gwwq4fe81bi.bmela-4-ti6-mqq-em0m73ls976osz80k.x-s0ecnxe4.xgit8guso2bynf9xkxywffvyznse5yovoes9zqhgf9wk74po4qj1hri45zg96kv2f-9nfnnqdjas130ndgnxp85h0saok.e-wcp8nl4iimu56l68c-0hnu2tn0fal1tsn8phrmhzoys2l25i7.gxqn--s4lzpz2z4auw8tq7wsnu11ayw0yl92cd8ttxcgpzf6zx7tozgmd82lwnoob7mfzqjte0dm6zjsab86tz35bykie5g.mc5hjh72yt5acqmzn19czrz435lw66lr79q331lt18v6d5hla0.7-ae4zwm8dvvt41j9zmx-azuslnknby8kc.7ik1lwyct-jpskk06ho.8zcj8v48859fl1157171-jmm433au5uvrcnyf-hi6-bc2l3m370f7fg7qtvcbabarat4fbqnanu.zj-noq9czf9imx4b55q3io4cjxykmcine1daltfp.6eq7rrmmzut02n3y1bq2ibg2rv74ilw2irb2f8fv-t8uesrvhcibaefy5-gz0ki--6gxf01j9ejah2fmc.irg82dq4bzqs650nmfve2bsa87ao19cwdb-7r0vh2y3whex4snejanaehzbiik9j6u52jwmw6tdwsvjcjr5ex794e-wpj71.-.7ltnkkgbmzira91g7x7g3ivaq43pvnnbcesaie-gjnx51nf.kaa8r9keucn783ngtu2vnstg-1my4f8und.yio33gczpmx4a6t5zwdianu-q46vf39urv5f1.1ql-kgwq3zw9kdbv005i-n3jbrkm.zxbilui4bv476rj2a0wvyuanj5acgwg9xf2z44tqoh2hpullhhf7nqqbxi04659cszvn286itl7omjqxr.u2ehikvmao6u2scnmbt-rn-axpmvx51i1tg0e0-wf48.kizafkyr1r-p8hauf6yzwop5k",
};

const data = await apiInstance.updateFirmwareToolchain(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined
 **product** | [**string**] |  | defaults to undefined
 **firmware** | [**string**] |  | defaults to undefined
 **firmwareVersion** | [**string**] |  | defaults to undefined


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

# **updateProfile**
> any updateProfile(body)


### Example


```typescript
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiUpdateProfileRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiUpdateProfileRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  product: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  resource: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  body: {},
};

const data = await apiInstance.updateProfile(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **user** | [**string**] |  | defaults to undefined
 **product** | [**string**] |  | defaults to undefined
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

# **updateProfileCode**
> any updateProfileCode(body)


### Example


```typescript
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiUpdateProfileCodeRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiUpdateProfileCodeRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  product: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  body: {},
};

const data = await apiInstance.updateProfileCode(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **user** | [**string**] |  | defaults to undefined
 **product** | [**string**] |  | defaults to undefined


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
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiUpdateProjectsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiUpdateProjectsRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  product: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
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
 **product** | [**string**] |  | defaults to undefined


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
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiUpdatePropertyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiUpdatePropertyRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  product: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
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
 **product** | [**string**] |  | defaults to undefined
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

# **updateServices**
> any updateServices(body)


### Example


```typescript
import { createConfiguration, ProductsApi } from '';
import type { ProductsApiUpdateServicesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductsApi(configuration);

const request: ProductsApiUpdateServicesRequest = {
  
  user: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  product: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  resource: "zBAMDTMv2D2ylmgd10Z3UB6U",
  
  body: {},
};

const data = await apiInstance.updateServices(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **user** | [**string**] |  | defaults to undefined
 **product** | [**string**] |  | defaults to undefined
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


