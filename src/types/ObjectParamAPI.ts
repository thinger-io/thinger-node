import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http.js';
import { Configuration} from '../configuration.js'

import { ComparisonExpressions } from '../models/ComparisonExpressions.js';
import { DeviceCloneRequest } from '../models/DeviceCloneRequest.js';
import { DeviceUpdateCallbackRequest } from '../models/DeviceUpdateCallbackRequest.js';
import { DeviceUpdateCallbackRequestActions } from '../models/DeviceUpdateCallbackRequestActions.js';
import { DeviceUpdateCallbackRequestProperties } from '../models/DeviceUpdateCallbackRequestProperties.js';
import { DeviceUpdateRequest } from '../models/DeviceUpdateRequest.js';
import { DeviceUpdateRequestAssetGroup } from '../models/DeviceUpdateRequestAssetGroup.js';
import { OperatorExpressions } from '../models/OperatorExpressions.js';
import { PluginClonePropertyRequest } from '../models/PluginClonePropertyRequest.js';
import { ProductClonePropertyRequest } from '../models/ProductClonePropertyRequest.js';
import { ProductCloneRequest } from '../models/ProductCloneRequest.js';
import { ProductConditionalIcon } from '../models/ProductConditionalIcon.js';
import { ProductConditionalIconConditionsInner } from '../models/ProductConditionalIconConditionsInner.js';
import { ProductConditionalIconConditionsInnerOneOf } from '../models/ProductConditionalIconConditionsInnerOneOf.js';
import { ProductConditionalIconConditionsInnerOneOf1 } from '../models/ProductConditionalIconConditionsInnerOneOf1.js';
import { ProductConfig } from '../models/ProductConfig.js';
import { ProductCreateFirmwareRequest } from '../models/ProductCreateFirmwareRequest.js';
import { ProductCreateRequest } from '../models/ProductCreateRequest.js';
import { ProductField } from '../models/ProductField.js';
import { ProductIcon } from '../models/ProductIcon.js';
import { ProductUpdateRequest } from '../models/ProductUpdateRequest.js';
import { Property } from '../models/Property.js';
import { PropertyCreate } from '../models/PropertyCreate.js';
import { PropertyForm } from '../models/PropertyForm.js';
import { PropertyPerm } from '../models/PropertyPerm.js';
import { PropertyUpdate } from '../models/PropertyUpdate.js';

import { ObservableDevicesApi } from "./ObservableAPI.js";
import { DevicesApiRequestFactory, DevicesApiResponseProcessor} from "../apis/DevicesApi.js";

export interface DevicesApiAccessInputResourcesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApiaccessInputResources
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApiaccessInputResources
     */
    device: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApiaccessInputResources
     */
    resource: string
    /**
     * 
     * @type any
     * @memberof DevicesApiaccessInputResources
     */
    body: any
}

export interface DevicesApiAccessOutputResourcesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApiaccessOutputResources
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApiaccessOutputResources
     */
    device: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApiaccessOutputResources
     */
    resource: string
}

export interface DevicesApiAccessRemoteDesktopVncRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApiaccessRemoteDesktopVnc
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApiaccessRemoteDesktopVnc
     */
    device: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApiaccessRemoteDesktopVnc
     */
    service: string
}

export interface DevicesApiAccessResourcesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApiaccessResources
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApiaccessResources
     */
    device: string
}

export interface DevicesApiAccessWebServicesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApiaccessWebServices
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApiaccessWebServices
     */
    device: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApiaccessWebServices
     */
    service: string
}

export interface DevicesApiCallCallbackDataRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApicallCallbackData
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApicallCallbackData
     */
    device: string
    /**
     * 
     * @type any
     * @memberof DevicesApicallCallbackData
     */
    body: any
}

export interface DevicesApiCloneRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApiclone
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApiclone
     */
    device: string
    /**
     * 
     * @type DeviceCloneRequest
     * @memberof DevicesApiclone
     */
    deviceCloneRequest: DeviceCloneRequest
}

export interface DevicesApiCloneConfigRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApicloneConfig
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApicloneConfig
     */
    device: string
}

export interface DevicesApiClonePropertyRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApicloneProperty
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApicloneProperty
     */
    device: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApicloneProperty
     */
    property: string
    /**
     * 
     * @type ProductClonePropertyRequest
     * @memberof DevicesApicloneProperty
     */
    productClonePropertyRequest: ProductClonePropertyRequest
}

export interface DevicesApiClonePropertyConfigRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApiclonePropertyConfig
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApiclonePropertyConfig
     */
    device: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApiclonePropertyConfig
     */
    property: string
}

export interface DevicesApiCreateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApicreate
     */
    user: string
    /**
     * 
     * @type PropertyCreate
     * @memberof DevicesApicreate
     */
    propertyCreate: PropertyCreate
}

export interface DevicesApiCreatePropertyRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApicreateProperty
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApicreateProperty
     */
    device: string
    /**
     * 
     * @type PropertyCreate
     * @memberof DevicesApicreateProperty
     */
    propertyCreate: PropertyCreate
}

export interface DevicesApiCreateTokenRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApicreateToken
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApicreateToken
     */
    device: string
    /**
     * 
     * @type any
     * @memberof DevicesApicreateToken
     */
    body: any
}

export interface DevicesApiDeletePropertyRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApideleteProperty
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApideleteProperty
     */
    device: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApideleteProperty
     */
    property: string
}

export interface DevicesApiDeleteTokenRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApideleteToken
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApideleteToken
     */
    device: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApideleteToken
     */
    token: string
}

export interface DevicesApiListRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApilist
     */
    user: string
}

export interface DevicesApiListBucketTagsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApilistBucketTags
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApilistBucketTags
     */
    device: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApilistBucketTags
     */
    bucket: string
}

export interface DevicesApiListBucketsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApilistBuckets
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApilistBuckets
     */
    device: string
}

export interface DevicesApiListPropertiesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApilistProperties
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApilistProperties
     */
    device: string
}

export interface DevicesApiListServicesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApilistServices
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApilistServices
     */
    device: string
}

export interface DevicesApiListTokensRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApilistTokens
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApilistTokens
     */
    device: string
}

export interface DevicesApiPatchPropertyRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApipatchProperty
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApipatchProperty
     */
    device: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApipatchProperty
     */
    property: string
}

export interface DevicesApiReadBucketDataRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApireadBucketData
     */
    version: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApireadBucketData
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApireadBucketData
     */
    device: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApireadBucketData
     */
    bucket: string
}

export interface DevicesApiReadBucketTagRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApireadBucketTag
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApireadBucketTag
     */
    device: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApireadBucketTag
     */
    bucket: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApireadBucketTag
     */
    tag: string
}

export interface DevicesApiReadCallbackConfigRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApireadCallbackConfig
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApireadCallbackConfig
     */
    device: string
}

export interface DevicesApiReadCallbackResponseDataRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApireadCallbackResponseData
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApireadCallbackResponseData
     */
    device: string
}

export interface DevicesApiReadDevicesStatisticsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApireadDevicesStatistics
     */
    user: string
}

export interface DevicesApiReadPropertyRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApireadProperty
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApireadProperty
     */
    device: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApireadProperty
     */
    property: string
}

export interface DevicesApiReadServiceRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApireadService
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApireadService
     */
    device: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApireadService
     */
    service: string
}

export interface DevicesApiReadStatisticsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApireadStatistics
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApireadStatistics
     */
    device: string
}

export interface DevicesApiReadStatusRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApireadStatus
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApireadStatus
     */
    device: string
}

export interface DevicesApiRemoveRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApiremove
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApiremove
     */
    device: string
}

export interface DevicesApiUpdateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApiupdate
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApiupdate
     */
    device: string
    /**
     * 
     * @type DeviceUpdateRequest
     * @memberof DevicesApiupdate
     */
    deviceUpdateRequest: DeviceUpdateRequest
}

export interface DevicesApiUpdateCallbackRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApiupdateCallback
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApiupdateCallback
     */
    device: string
    /**
     * 
     * @type DeviceUpdateCallbackRequest
     * @memberof DevicesApiupdateCallback
     */
    deviceUpdateCallbackRequest: DeviceUpdateCallbackRequest
}

export interface DevicesApiUpdateProjectsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApiupdateProjects
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApiupdateProjects
     */
    device: string
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof DevicesApiupdateProjects
     */
    requestBody: Array<string>
}

export interface DevicesApiUpdatePropertyRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApiupdateProperty
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApiupdateProperty
     */
    device: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApiupdateProperty
     */
    property: string
    /**
     * 
     * @type PropertyUpdate
     * @memberof DevicesApiupdateProperty
     */
    propertyUpdate: PropertyUpdate
}

export interface DevicesApiV1UsersUserDevicesDeviceResourceGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApiv1UsersUserDevicesDeviceResourceGet
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApiv1UsersUserDevicesDeviceResourceGet
     */
    device: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApiv1UsersUserDevicesDeviceResourceGet
     */
    resource: string
}

export interface DevicesApiV1UsersUserDevicesDeviceResourcePostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApiv1UsersUserDevicesDeviceResourcePost
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApiv1UsersUserDevicesDeviceResourcePost
     */
    device: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApiv1UsersUserDevicesDeviceResourcePost
     */
    resource: string
    /**
     * 
     * @type any
     * @memberof DevicesApiv1UsersUserDevicesDeviceResourcePost
     */
    body: any
}

export interface DevicesApiV1UsersUserDevicesDeviceStatsGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApiv1UsersUserDevicesDeviceStatsGet
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApiv1UsersUserDevicesDeviceStatsGet
     */
    device: string
}

export interface DevicesApiV2UsersUserDevicesDeviceResourceGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApiv2UsersUserDevicesDeviceResourceGet
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApiv2UsersUserDevicesDeviceResourceGet
     */
    device: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApiv2UsersUserDevicesDeviceResourceGet
     */
    resource: string
}

export interface DevicesApiV2UsersUserDevicesDeviceResourcePostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApiv2UsersUserDevicesDeviceResourcePost
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApiv2UsersUserDevicesDeviceResourcePost
     */
    device: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DevicesApiv2UsersUserDevicesDeviceResourcePost
     */
    resource: string
    /**
     * 
     * @type any
     * @memberof DevicesApiv2UsersUserDevicesDeviceResourcePost
     */
    body: any
}

export class ObjectDevicesApi {
    private api: ObservableDevicesApi

    public constructor(configuration: Configuration, requestFactory?: DevicesApiRequestFactory, responseProcessor?: DevicesApiResponseProcessor) {
        this.api = new ObservableDevicesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * AccessDeviceResources
     * @param param the request object
     */
    public accessInputResourcesWithHttpInfo(param: DevicesApiAccessInputResourcesRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.accessInputResourcesWithHttpInfo(param.user, param.device, param.resource, param.body,  options).toPromise();
    }

    /**
     * AccessDeviceResources
     * @param param the request object
     */
    public accessInputResources(param: DevicesApiAccessInputResourcesRequest, options?: Configuration): Promise<any> {
        return this.api.accessInputResources(param.user, param.device, param.resource, param.body,  options).toPromise();
    }

    /**
     * AccessDeviceResources
     * @param param the request object
     */
    public accessOutputResourcesWithHttpInfo(param: DevicesApiAccessOutputResourcesRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.accessOutputResourcesWithHttpInfo(param.user, param.device, param.resource,  options).toPromise();
    }

    /**
     * AccessDeviceResources
     * @param param the request object
     */
    public accessOutputResources(param: DevicesApiAccessOutputResourcesRequest, options?: Configuration): Promise<any> {
        return this.api.accessOutputResources(param.user, param.device, param.resource,  options).toPromise();
    }

    /**
     * AccessDeviceRemoteDesktop
     * @param param the request object
     */
    public accessRemoteDesktopVncWithHttpInfo(param: DevicesApiAccessRemoteDesktopVncRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.accessRemoteDesktopVncWithHttpInfo(param.user, param.device, param.service,  options).toPromise();
    }

    /**
     * AccessDeviceRemoteDesktop
     * @param param the request object
     */
    public accessRemoteDesktopVnc(param: DevicesApiAccessRemoteDesktopVncRequest, options?: Configuration): Promise<any> {
        return this.api.accessRemoteDesktopVnc(param.user, param.device, param.service,  options).toPromise();
    }

    /**
     * AccessDeviceResources
     * @param param the request object
     */
    public accessResourcesWithHttpInfo(param: DevicesApiAccessResourcesRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.accessResourcesWithHttpInfo(param.user, param.device,  options).toPromise();
    }

    /**
     * AccessDeviceResources
     * @param param the request object
     */
    public accessResources(param: DevicesApiAccessResourcesRequest, options?: Configuration): Promise<any> {
        return this.api.accessResources(param.user, param.device,  options).toPromise();
    }

    /**
     * AccessDeviceWebServices
     * @param param the request object
     */
    public accessWebServicesWithHttpInfo(param: DevicesApiAccessWebServicesRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.accessWebServicesWithHttpInfo(param.user, param.device, param.service,  options).toPromise();
    }

    /**
     * AccessDeviceWebServices
     * @param param the request object
     */
    public accessWebServices(param: DevicesApiAccessWebServicesRequest, options?: Configuration): Promise<any> {
        return this.api.accessWebServices(param.user, param.device, param.service,  options).toPromise();
    }

    /**
     * CallDeviceCallback
     * @param param the request object
     */
    public callCallbackDataWithHttpInfo(param: DevicesApiCallCallbackDataRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.callCallbackDataWithHttpInfo(param.user, param.device, param.body,  options).toPromise();
    }

    /**
     * CallDeviceCallback
     * @param param the request object
     */
    public callCallbackData(param: DevicesApiCallCallbackDataRequest, options?: Configuration): Promise<any> {
        return this.api.callCallbackData(param.user, param.device, param.body,  options).toPromise();
    }

    /**
     * CloneDevice
     * @param param the request object
     */
    public cloneWithHttpInfo(param: DevicesApiCloneRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.cloneWithHttpInfo(param.user, param.device, param.deviceCloneRequest,  options).toPromise();
    }

    /**
     * CloneDevice
     * @param param the request object
     */
    public clone(param: DevicesApiCloneRequest, options?: Configuration): Promise<any> {
        return this.api.clone(param.user, param.device, param.deviceCloneRequest,  options).toPromise();
    }

    /**
     * CloneDeviceConfig
     * @param param the request object
     */
    public cloneConfigWithHttpInfo(param: DevicesApiCloneConfigRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.cloneConfigWithHttpInfo(param.user, param.device,  options).toPromise();
    }

    /**
     * CloneDeviceConfig
     * @param param the request object
     */
    public cloneConfig(param: DevicesApiCloneConfigRequest, options?: Configuration): Promise<any> {
        return this.api.cloneConfig(param.user, param.device,  options).toPromise();
    }

    /**
     * CloneDeviceProperty
     * @param param the request object
     */
    public clonePropertyWithHttpInfo(param: DevicesApiClonePropertyRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.clonePropertyWithHttpInfo(param.user, param.device, param.property, param.productClonePropertyRequest,  options).toPromise();
    }

    /**
     * CloneDeviceProperty
     * @param param the request object
     */
    public cloneProperty(param: DevicesApiClonePropertyRequest, options?: Configuration): Promise<any> {
        return this.api.cloneProperty(param.user, param.device, param.property, param.productClonePropertyRequest,  options).toPromise();
    }

    /**
     * CloneDevicePropertyConfig
     * @param param the request object
     */
    public clonePropertyConfigWithHttpInfo(param: DevicesApiClonePropertyConfigRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.clonePropertyConfigWithHttpInfo(param.user, param.device, param.property,  options).toPromise();
    }

    /**
     * CloneDevicePropertyConfig
     * @param param the request object
     */
    public clonePropertyConfig(param: DevicesApiClonePropertyConfigRequest, options?: Configuration): Promise<any> {
        return this.api.clonePropertyConfig(param.user, param.device, param.property,  options).toPromise();
    }

    /**
     * CreateDevice
     * @param param the request object
     */
    public createWithHttpInfo(param: DevicesApiCreateRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.createWithHttpInfo(param.user, param.propertyCreate,  options).toPromise();
    }

    /**
     * CreateDevice
     * @param param the request object
     */
    public create(param: DevicesApiCreateRequest, options?: Configuration): Promise<any> {
        return this.api.create(param.user, param.propertyCreate,  options).toPromise();
    }

    /**
     * CreateDeviceProperty
     * @param param the request object
     */
    public createPropertyWithHttpInfo(param: DevicesApiCreatePropertyRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.createPropertyWithHttpInfo(param.user, param.device, param.propertyCreate,  options).toPromise();
    }

    /**
     * CreateDeviceProperty
     * @param param the request object
     */
    public createProperty(param: DevicesApiCreatePropertyRequest, options?: Configuration): Promise<any> {
        return this.api.createProperty(param.user, param.device, param.propertyCreate,  options).toPromise();
    }

    /**
     * CreateDeviceToken
     * @param param the request object
     */
    public createTokenWithHttpInfo(param: DevicesApiCreateTokenRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.createTokenWithHttpInfo(param.user, param.device, param.body,  options).toPromise();
    }

    /**
     * CreateDeviceToken
     * @param param the request object
     */
    public createToken(param: DevicesApiCreateTokenRequest, options?: Configuration): Promise<any> {
        return this.api.createToken(param.user, param.device, param.body,  options).toPromise();
    }

    /**
     * DeleteDeviceProperty
     * @param param the request object
     */
    public deletePropertyWithHttpInfo(param: DevicesApiDeletePropertyRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.deletePropertyWithHttpInfo(param.user, param.device, param.property,  options).toPromise();
    }

    /**
     * DeleteDeviceProperty
     * @param param the request object
     */
    public deleteProperty(param: DevicesApiDeletePropertyRequest, options?: Configuration): Promise<any> {
        return this.api.deleteProperty(param.user, param.device, param.property,  options).toPromise();
    }

    /**
     * DeleteDeviceToken
     * @param param the request object
     */
    public deleteTokenWithHttpInfo(param: DevicesApiDeleteTokenRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.deleteTokenWithHttpInfo(param.user, param.device, param.token,  options).toPromise();
    }

    /**
     * DeleteDeviceToken
     * @param param the request object
     */
    public deleteToken(param: DevicesApiDeleteTokenRequest, options?: Configuration): Promise<any> {
        return this.api.deleteToken(param.user, param.device, param.token,  options).toPromise();
    }

    /**
     * ListDevices
     * @param param the request object
     */
    public listWithHttpInfo(param: DevicesApiListRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.listWithHttpInfo(param.user,  options).toPromise();
    }

    /**
     * ListDevices
     * @param param the request object
     */
    public list(param: DevicesApiListRequest, options?: Configuration): Promise<any> {
        return this.api.list(param.user,  options).toPromise();
    }

    /**
     * ListDeviceBucketTags
     * @param param the request object
     */
    public listBucketTagsWithHttpInfo(param: DevicesApiListBucketTagsRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.listBucketTagsWithHttpInfo(param.user, param.device, param.bucket,  options).toPromise();
    }

    /**
     * ListDeviceBucketTags
     * @param param the request object
     */
    public listBucketTags(param: DevicesApiListBucketTagsRequest, options?: Configuration): Promise<any> {
        return this.api.listBucketTags(param.user, param.device, param.bucket,  options).toPromise();
    }

    /**
     * ListDeviceBuckets
     * @param param the request object
     */
    public listBucketsWithHttpInfo(param: DevicesApiListBucketsRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.listBucketsWithHttpInfo(param.user, param.device,  options).toPromise();
    }

    /**
     * ListDeviceBuckets
     * @param param the request object
     */
    public listBuckets(param: DevicesApiListBucketsRequest, options?: Configuration): Promise<any> {
        return this.api.listBuckets(param.user, param.device,  options).toPromise();
    }

    /**
     * ListDeviceProperties
     * @param param the request object
     */
    public listPropertiesWithHttpInfo(param: DevicesApiListPropertiesRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.listPropertiesWithHttpInfo(param.user, param.device,  options).toPromise();
    }

    /**
     * ListDeviceProperties
     * @param param the request object
     */
    public listProperties(param: DevicesApiListPropertiesRequest, options?: Configuration): Promise<any> {
        return this.api.listProperties(param.user, param.device,  options).toPromise();
    }

    /**
     * ListDeviceServices
     * @param param the request object
     */
    public listServicesWithHttpInfo(param: DevicesApiListServicesRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.listServicesWithHttpInfo(param.user, param.device,  options).toPromise();
    }

    /**
     * ListDeviceServices
     * @param param the request object
     */
    public listServices(param: DevicesApiListServicesRequest, options?: Configuration): Promise<any> {
        return this.api.listServices(param.user, param.device,  options).toPromise();
    }

    /**
     * ListDeviceTokens
     * @param param the request object
     */
    public listTokensWithHttpInfo(param: DevicesApiListTokensRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.listTokensWithHttpInfo(param.user, param.device,  options).toPromise();
    }

    /**
     * ListDeviceTokens
     * @param param the request object
     */
    public listTokens(param: DevicesApiListTokensRequest, options?: Configuration): Promise<any> {
        return this.api.listTokens(param.user, param.device,  options).toPromise();
    }

    /**
     * UpdateDeviceProperty
     * @param param the request object
     */
    public patchPropertyWithHttpInfo(param: DevicesApiPatchPropertyRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.patchPropertyWithHttpInfo(param.user, param.device, param.property,  options).toPromise();
    }

    /**
     * UpdateDeviceProperty
     * @param param the request object
     */
    public patchProperty(param: DevicesApiPatchPropertyRequest, options?: Configuration): Promise<any> {
        return this.api.patchProperty(param.user, param.device, param.property,  options).toPromise();
    }

    /**
     * ReadDeviceBucket
     * @param param the request object
     */
    public readBucketDataWithHttpInfo(param: DevicesApiReadBucketDataRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.readBucketDataWithHttpInfo(param.version, param.user, param.device, param.bucket,  options).toPromise();
    }

    /**
     * ReadDeviceBucket
     * @param param the request object
     */
    public readBucketData(param: DevicesApiReadBucketDataRequest, options?: Configuration): Promise<any> {
        return this.api.readBucketData(param.version, param.user, param.device, param.bucket,  options).toPromise();
    }

    /**
     * ReadDeviceBucketTag
     * @param param the request object
     */
    public readBucketTagWithHttpInfo(param: DevicesApiReadBucketTagRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.readBucketTagWithHttpInfo(param.user, param.device, param.bucket, param.tag,  options).toPromise();
    }

    /**
     * ReadDeviceBucketTag
     * @param param the request object
     */
    public readBucketTag(param: DevicesApiReadBucketTagRequest, options?: Configuration): Promise<any> {
        return this.api.readBucketTag(param.user, param.device, param.bucket, param.tag,  options).toPromise();
    }

    /**
     * ReadDeviceCallbackConfig
     * @param param the request object
     */
    public readCallbackConfigWithHttpInfo(param: DevicesApiReadCallbackConfigRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.readCallbackConfigWithHttpInfo(param.user, param.device,  options).toPromise();
    }

    /**
     * ReadDeviceCallbackConfig
     * @param param the request object
     */
    public readCallbackConfig(param: DevicesApiReadCallbackConfigRequest, options?: Configuration): Promise<any> {
        return this.api.readCallbackConfig(param.user, param.device,  options).toPromise();
    }

    /**
     * ReadDeviceCallbackResponse
     * @param param the request object
     */
    public readCallbackResponseDataWithHttpInfo(param: DevicesApiReadCallbackResponseDataRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.readCallbackResponseDataWithHttpInfo(param.user, param.device,  options).toPromise();
    }

    /**
     * ReadDeviceCallbackResponse
     * @param param the request object
     */
    public readCallbackResponseData(param: DevicesApiReadCallbackResponseDataRequest, options?: Configuration): Promise<any> {
        return this.api.readCallbackResponseData(param.user, param.device,  options).toPromise();
    }

    /**
     * ReadDeviceStatistics
     * @param param the request object
     */
    public readDevicesStatisticsWithHttpInfo(param: DevicesApiReadDevicesStatisticsRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.readDevicesStatisticsWithHttpInfo(param.user,  options).toPromise();
    }

    /**
     * ReadDeviceStatistics
     * @param param the request object
     */
    public readDevicesStatistics(param: DevicesApiReadDevicesStatisticsRequest, options?: Configuration): Promise<any> {
        return this.api.readDevicesStatistics(param.user,  options).toPromise();
    }

    /**
     * ReadDeviceProperty
     * @param param the request object
     */
    public readPropertyWithHttpInfo(param: DevicesApiReadPropertyRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.readPropertyWithHttpInfo(param.user, param.device, param.property,  options).toPromise();
    }

    /**
     * ReadDeviceProperty
     * @param param the request object
     */
    public readProperty(param: DevicesApiReadPropertyRequest, options?: Configuration): Promise<any> {
        return this.api.readProperty(param.user, param.device, param.property,  options).toPromise();
    }

    /**
     * ReadDeviceService
     * @param param the request object
     */
    public readServiceWithHttpInfo(param: DevicesApiReadServiceRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.readServiceWithHttpInfo(param.user, param.device, param.service,  options).toPromise();
    }

    /**
     * ReadDeviceService
     * @param param the request object
     */
    public readService(param: DevicesApiReadServiceRequest, options?: Configuration): Promise<any> {
        return this.api.readService(param.user, param.device, param.service,  options).toPromise();
    }

    /**
     * ReadDeviceStatistics
     * @param param the request object
     */
    public readStatisticsWithHttpInfo(param: DevicesApiReadStatisticsRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.readStatisticsWithHttpInfo(param.user, param.device,  options).toPromise();
    }

    /**
     * ReadDeviceStatistics
     * @param param the request object
     */
    public readStatistics(param: DevicesApiReadStatisticsRequest, options?: Configuration): Promise<any> {
        return this.api.readStatistics(param.user, param.device,  options).toPromise();
    }

    /**
     * ReadDeviceStatus
     * @param param the request object
     */
    public readStatusWithHttpInfo(param: DevicesApiReadStatusRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.readStatusWithHttpInfo(param.user, param.device,  options).toPromise();
    }

    /**
     * ReadDeviceStatus
     * @param param the request object
     */
    public readStatus(param: DevicesApiReadStatusRequest, options?: Configuration): Promise<any> {
        return this.api.readStatus(param.user, param.device,  options).toPromise();
    }

    /**
     * DeleteDevice
     * @param param the request object
     */
    public removeWithHttpInfo(param: DevicesApiRemoveRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.removeWithHttpInfo(param.user, param.device,  options).toPromise();
    }

    /**
     * DeleteDevice
     * @param param the request object
     */
    public remove(param: DevicesApiRemoveRequest, options?: Configuration): Promise<any> {
        return this.api.remove(param.user, param.device,  options).toPromise();
    }

    /**
     * UpdateDevice
     * @param param the request object
     */
    public updateWithHttpInfo(param: DevicesApiUpdateRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.updateWithHttpInfo(param.user, param.device, param.deviceUpdateRequest,  options).toPromise();
    }

    /**
     * UpdateDevice
     * @param param the request object
     */
    public update(param: DevicesApiUpdateRequest, options?: Configuration): Promise<any> {
        return this.api.update(param.user, param.device, param.deviceUpdateRequest,  options).toPromise();
    }

    /**
     * UpdateDeviceCallback
     * @param param the request object
     */
    public updateCallbackWithHttpInfo(param: DevicesApiUpdateCallbackRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.updateCallbackWithHttpInfo(param.user, param.device, param.deviceUpdateCallbackRequest,  options).toPromise();
    }

    /**
     * UpdateDeviceCallback
     * @param param the request object
     */
    public updateCallback(param: DevicesApiUpdateCallbackRequest, options?: Configuration): Promise<any> {
        return this.api.updateCallback(param.user, param.device, param.deviceUpdateCallbackRequest,  options).toPromise();
    }

    /**
     * UpdateDeviceProjects
     * @param param the request object
     */
    public updateProjectsWithHttpInfo(param: DevicesApiUpdateProjectsRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.updateProjectsWithHttpInfo(param.user, param.device, param.requestBody,  options).toPromise();
    }

    /**
     * UpdateDeviceProjects
     * @param param the request object
     */
    public updateProjects(param: DevicesApiUpdateProjectsRequest, options?: Configuration): Promise<any> {
        return this.api.updateProjects(param.user, param.device, param.requestBody,  options).toPromise();
    }

    /**
     * UpdateDeviceProperty
     * @param param the request object
     */
    public updatePropertyWithHttpInfo(param: DevicesApiUpdatePropertyRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.updatePropertyWithHttpInfo(param.user, param.device, param.property, param.propertyUpdate,  options).toPromise();
    }

    /**
     * UpdateDeviceProperty
     * @param param the request object
     */
    public updateProperty(param: DevicesApiUpdatePropertyRequest, options?: Configuration): Promise<any> {
        return this.api.updateProperty(param.user, param.device, param.property, param.propertyUpdate,  options).toPromise();
    }

    /**
     * AccessDeviceResources
     * @param param the request object
     */
    public v1UsersUserDevicesDeviceResourceGetWithHttpInfo(param: DevicesApiV1UsersUserDevicesDeviceResourceGetRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1UsersUserDevicesDeviceResourceGetWithHttpInfo(param.user, param.device, param.resource,  options).toPromise();
    }

    /**
     * AccessDeviceResources
     * @param param the request object
     */
    public v1UsersUserDevicesDeviceResourceGet(param: DevicesApiV1UsersUserDevicesDeviceResourceGetRequest, options?: Configuration): Promise<any> {
        return this.api.v1UsersUserDevicesDeviceResourceGet(param.user, param.device, param.resource,  options).toPromise();
    }

    /**
     * AccessDeviceResources
     * @param param the request object
     */
    public v1UsersUserDevicesDeviceResourcePostWithHttpInfo(param: DevicesApiV1UsersUserDevicesDeviceResourcePostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1UsersUserDevicesDeviceResourcePostWithHttpInfo(param.user, param.device, param.resource, param.body,  options).toPromise();
    }

    /**
     * AccessDeviceResources
     * @param param the request object
     */
    public v1UsersUserDevicesDeviceResourcePost(param: DevicesApiV1UsersUserDevicesDeviceResourcePostRequest, options?: Configuration): Promise<any> {
        return this.api.v1UsersUserDevicesDeviceResourcePost(param.user, param.device, param.resource, param.body,  options).toPromise();
    }

    /**
     * ReadDeviceStatistics
     * @param param the request object
     */
    public v1UsersUserDevicesDeviceStatsGetWithHttpInfo(param: DevicesApiV1UsersUserDevicesDeviceStatsGetRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1UsersUserDevicesDeviceStatsGetWithHttpInfo(param.user, param.device,  options).toPromise();
    }

    /**
     * ReadDeviceStatistics
     * @param param the request object
     */
    public v1UsersUserDevicesDeviceStatsGet(param: DevicesApiV1UsersUserDevicesDeviceStatsGetRequest, options?: Configuration): Promise<any> {
        return this.api.v1UsersUserDevicesDeviceStatsGet(param.user, param.device,  options).toPromise();
    }

    /**
     * AccessDeviceResources
     * @param param the request object
     */
    public v2UsersUserDevicesDeviceResourceGetWithHttpInfo(param: DevicesApiV2UsersUserDevicesDeviceResourceGetRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v2UsersUserDevicesDeviceResourceGetWithHttpInfo(param.user, param.device, param.resource,  options).toPromise();
    }

    /**
     * AccessDeviceResources
     * @param param the request object
     */
    public v2UsersUserDevicesDeviceResourceGet(param: DevicesApiV2UsersUserDevicesDeviceResourceGetRequest, options?: Configuration): Promise<any> {
        return this.api.v2UsersUserDevicesDeviceResourceGet(param.user, param.device, param.resource,  options).toPromise();
    }

    /**
     * AccessDeviceResources
     * @param param the request object
     */
    public v2UsersUserDevicesDeviceResourcePostWithHttpInfo(param: DevicesApiV2UsersUserDevicesDeviceResourcePostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v2UsersUserDevicesDeviceResourcePostWithHttpInfo(param.user, param.device, param.resource, param.body,  options).toPromise();
    }

    /**
     * AccessDeviceResources
     * @param param the request object
     */
    public v2UsersUserDevicesDeviceResourcePost(param: DevicesApiV2UsersUserDevicesDeviceResourcePostRequest, options?: Configuration): Promise<any> {
        return this.api.v2UsersUserDevicesDeviceResourcePost(param.user, param.device, param.resource, param.body,  options).toPromise();
    }

}

import { ObservablePluginsApi } from "./ObservableAPI.js";
import { PluginsApiRequestFactory, PluginsApiResponseProcessor} from "../apis/PluginsApi.js";

export interface PluginsApiCallPluginEndpointDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApicallPluginEndpointDelete
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApicallPluginEndpointDelete
     */
    plugin: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApicallPluginEndpointDelete
     */
    path: string
}

export interface PluginsApiCallPluginEndpointGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApicallPluginEndpointGet
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApicallPluginEndpointGet
     */
    plugin: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApicallPluginEndpointGet
     */
    path: string
}

export interface PluginsApiCallPluginEndpointHeadRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApicallPluginEndpointHead
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApicallPluginEndpointHead
     */
    plugin: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApicallPluginEndpointHead
     */
    path: string
}

export interface PluginsApiCallPluginEndpointOptionsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApicallPluginEndpointOptions
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApicallPluginEndpointOptions
     */
    plugin: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApicallPluginEndpointOptions
     */
    path: string
}

export interface PluginsApiCallPluginEndpointPatchRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApicallPluginEndpointPatch
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApicallPluginEndpointPatch
     */
    plugin: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApicallPluginEndpointPatch
     */
    path: string
}

export interface PluginsApiCallPluginEndpointPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApicallPluginEndpointPost
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApicallPluginEndpointPost
     */
    plugin: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApicallPluginEndpointPost
     */
    path: string
    /**
     * 
     * @type any
     * @memberof PluginsApicallPluginEndpointPost
     */
    body: any
}

export interface PluginsApiCallPluginEndpointPutRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApicallPluginEndpointPut
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApicallPluginEndpointPut
     */
    plugin: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApicallPluginEndpointPut
     */
    path: string
    /**
     * 
     * @type any
     * @memberof PluginsApicallPluginEndpointPut
     */
    body: any
}

export interface PluginsApiCallPluginEndpointTraceRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApicallPluginEndpointTrace
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApicallPluginEndpointTrace
     */
    plugin: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApicallPluginEndpointTrace
     */
    path: string
}

export interface PluginsApiClonePropertyRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApicloneProperty
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApicloneProperty
     */
    plugin: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApicloneProperty
     */
    property: string
    /**
     * 
     * @type PluginClonePropertyRequest
     * @memberof PluginsApicloneProperty
     */
    pluginClonePropertyRequest: PluginClonePropertyRequest
}

export interface PluginsApiClonePropertyConfigRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApiclonePropertyConfig
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApiclonePropertyConfig
     */
    plugin: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApiclonePropertyConfig
     */
    property: string
}

export interface PluginsApiCreatePropertyRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApicreateProperty
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApicreateProperty
     */
    plugin: string
    /**
     * 
     * @type PropertyCreate
     * @memberof PluginsApicreateProperty
     */
    propertyCreate: PropertyCreate
}

export interface PluginsApiDeletePropertyRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApideleteProperty
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApideleteProperty
     */
    plugin: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApideleteProperty
     */
    property: string
}

export interface PluginsApiListRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApilist
     */
    user: string
}

export interface PluginsApiListPropertiesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApilistProperties
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApilistProperties
     */
    plugin: string
}

export interface PluginsApiManageStateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApimanageState
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApimanageState
     */
    plugin: string
    /**
     * 
     * @type any
     * @memberof PluginsApimanageState
     */
    body: any
}

export interface PluginsApiPatchPropertyRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApipatchProperty
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApipatchProperty
     */
    plugin: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApipatchProperty
     */
    property: string
}

export interface PluginsApiReadFilesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApireadFiles
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApireadFiles
     */
    plugin: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApireadFiles
     */
    file: string
}

export interface PluginsApiReadInfoRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApireadInfo
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApireadInfo
     */
    plugin: string
}

export interface PluginsApiReadLogsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApireadLogs
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApireadLogs
     */
    plugin: string
}

export interface PluginsApiReadPropertyRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApireadProperty
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApireadProperty
     */
    plugin: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApireadProperty
     */
    property: string
}

export interface PluginsApiRunCommandTerminalRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApirunCommandTerminal
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApirunCommandTerminal
     */
    plugin: string
}

export interface PluginsApiRunShellRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApirunShell
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApirunShell
     */
    plugin: string
}

export interface PluginsApiUpdatePropertyRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApiupdateProperty
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApiupdateProperty
     */
    plugin: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PluginsApiupdateProperty
     */
    property: string
    /**
     * 
     * @type PropertyUpdate
     * @memberof PluginsApiupdateProperty
     */
    propertyUpdate: PropertyUpdate
}

export class ObjectPluginsApi {
    private api: ObservablePluginsApi

    public constructor(configuration: Configuration, requestFactory?: PluginsApiRequestFactory, responseProcessor?: PluginsApiResponseProcessor) {
        this.api = new ObservablePluginsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * CallPluginEndpoint
     * @param param the request object
     */
    public callPluginEndpointDeleteWithHttpInfo(param: PluginsApiCallPluginEndpointDeleteRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.callPluginEndpointDeleteWithHttpInfo(param.user, param.plugin, param.path,  options).toPromise();
    }

    /**
     * CallPluginEndpoint
     * @param param the request object
     */
    public callPluginEndpointDelete(param: PluginsApiCallPluginEndpointDeleteRequest, options?: Configuration): Promise<any> {
        return this.api.callPluginEndpointDelete(param.user, param.plugin, param.path,  options).toPromise();
    }

    /**
     * CallPluginEndpoint
     * @param param the request object
     */
    public callPluginEndpointGetWithHttpInfo(param: PluginsApiCallPluginEndpointGetRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.callPluginEndpointGetWithHttpInfo(param.user, param.plugin, param.path,  options).toPromise();
    }

    /**
     * CallPluginEndpoint
     * @param param the request object
     */
    public callPluginEndpointGet(param: PluginsApiCallPluginEndpointGetRequest, options?: Configuration): Promise<any> {
        return this.api.callPluginEndpointGet(param.user, param.plugin, param.path,  options).toPromise();
    }

    /**
     * CallPluginEndpoint
     * @param param the request object
     */
    public callPluginEndpointHeadWithHttpInfo(param: PluginsApiCallPluginEndpointHeadRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.callPluginEndpointHeadWithHttpInfo(param.user, param.plugin, param.path,  options).toPromise();
    }

    /**
     * CallPluginEndpoint
     * @param param the request object
     */
    public callPluginEndpointHead(param: PluginsApiCallPluginEndpointHeadRequest, options?: Configuration): Promise<any> {
        return this.api.callPluginEndpointHead(param.user, param.plugin, param.path,  options).toPromise();
    }

    /**
     * CallPluginEndpoint
     * @param param the request object
     */
    public callPluginEndpointOptionsWithHttpInfo(param: PluginsApiCallPluginEndpointOptionsRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.callPluginEndpointOptionsWithHttpInfo(param.user, param.plugin, param.path,  options).toPromise();
    }

    /**
     * CallPluginEndpoint
     * @param param the request object
     */
    public callPluginEndpointOptions(param: PluginsApiCallPluginEndpointOptionsRequest, options?: Configuration): Promise<any> {
        return this.api.callPluginEndpointOptions(param.user, param.plugin, param.path,  options).toPromise();
    }

    /**
     * CallPluginEndpoint
     * @param param the request object
     */
    public callPluginEndpointPatchWithHttpInfo(param: PluginsApiCallPluginEndpointPatchRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.callPluginEndpointPatchWithHttpInfo(param.user, param.plugin, param.path,  options).toPromise();
    }

    /**
     * CallPluginEndpoint
     * @param param the request object
     */
    public callPluginEndpointPatch(param: PluginsApiCallPluginEndpointPatchRequest, options?: Configuration): Promise<any> {
        return this.api.callPluginEndpointPatch(param.user, param.plugin, param.path,  options).toPromise();
    }

    /**
     * CallPluginEndpoint
     * @param param the request object
     */
    public callPluginEndpointPostWithHttpInfo(param: PluginsApiCallPluginEndpointPostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.callPluginEndpointPostWithHttpInfo(param.user, param.plugin, param.path, param.body,  options).toPromise();
    }

    /**
     * CallPluginEndpoint
     * @param param the request object
     */
    public callPluginEndpointPost(param: PluginsApiCallPluginEndpointPostRequest, options?: Configuration): Promise<any> {
        return this.api.callPluginEndpointPost(param.user, param.plugin, param.path, param.body,  options).toPromise();
    }

    /**
     * CallPluginEndpoint
     * @param param the request object
     */
    public callPluginEndpointPutWithHttpInfo(param: PluginsApiCallPluginEndpointPutRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.callPluginEndpointPutWithHttpInfo(param.user, param.plugin, param.path, param.body,  options).toPromise();
    }

    /**
     * CallPluginEndpoint
     * @param param the request object
     */
    public callPluginEndpointPut(param: PluginsApiCallPluginEndpointPutRequest, options?: Configuration): Promise<any> {
        return this.api.callPluginEndpointPut(param.user, param.plugin, param.path, param.body,  options).toPromise();
    }

    /**
     * CallPluginEndpoint
     * @param param the request object
     */
    public callPluginEndpointTraceWithHttpInfo(param: PluginsApiCallPluginEndpointTraceRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.callPluginEndpointTraceWithHttpInfo(param.user, param.plugin, param.path,  options).toPromise();
    }

    /**
     * CallPluginEndpoint
     * @param param the request object
     */
    public callPluginEndpointTrace(param: PluginsApiCallPluginEndpointTraceRequest, options?: Configuration): Promise<any> {
        return this.api.callPluginEndpointTrace(param.user, param.plugin, param.path,  options).toPromise();
    }

    /**
     * ClonePluginProperty
     * @param param the request object
     */
    public clonePropertyWithHttpInfo(param: PluginsApiClonePropertyRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.clonePropertyWithHttpInfo(param.user, param.plugin, param.property, param.pluginClonePropertyRequest,  options).toPromise();
    }

    /**
     * ClonePluginProperty
     * @param param the request object
     */
    public cloneProperty(param: PluginsApiClonePropertyRequest, options?: Configuration): Promise<any> {
        return this.api.cloneProperty(param.user, param.plugin, param.property, param.pluginClonePropertyRequest,  options).toPromise();
    }

    /**
     * ClonePluginPropertyConfig
     * @param param the request object
     */
    public clonePropertyConfigWithHttpInfo(param: PluginsApiClonePropertyConfigRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.clonePropertyConfigWithHttpInfo(param.user, param.plugin, param.property,  options).toPromise();
    }

    /**
     * ClonePluginPropertyConfig
     * @param param the request object
     */
    public clonePropertyConfig(param: PluginsApiClonePropertyConfigRequest, options?: Configuration): Promise<any> {
        return this.api.clonePropertyConfig(param.user, param.plugin, param.property,  options).toPromise();
    }

    /**
     * CreatePluginProperty
     * @param param the request object
     */
    public createPropertyWithHttpInfo(param: PluginsApiCreatePropertyRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.createPropertyWithHttpInfo(param.user, param.plugin, param.propertyCreate,  options).toPromise();
    }

    /**
     * CreatePluginProperty
     * @param param the request object
     */
    public createProperty(param: PluginsApiCreatePropertyRequest, options?: Configuration): Promise<any> {
        return this.api.createProperty(param.user, param.plugin, param.propertyCreate,  options).toPromise();
    }

    /**
     * DeletePluginProperty
     * @param param the request object
     */
    public deletePropertyWithHttpInfo(param: PluginsApiDeletePropertyRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.deletePropertyWithHttpInfo(param.user, param.plugin, param.property,  options).toPromise();
    }

    /**
     * DeletePluginProperty
     * @param param the request object
     */
    public deleteProperty(param: PluginsApiDeletePropertyRequest, options?: Configuration): Promise<any> {
        return this.api.deleteProperty(param.user, param.plugin, param.property,  options).toPromise();
    }

    /**
     * ListPlugins
     * @param param the request object
     */
    public listWithHttpInfo(param: PluginsApiListRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.listWithHttpInfo(param.user,  options).toPromise();
    }

    /**
     * ListPlugins
     * @param param the request object
     */
    public list(param: PluginsApiListRequest, options?: Configuration): Promise<any> {
        return this.api.list(param.user,  options).toPromise();
    }

    /**
     * ListPluginProperties
     * @param param the request object
     */
    public listPropertiesWithHttpInfo(param: PluginsApiListPropertiesRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.listPropertiesWithHttpInfo(param.user, param.plugin,  options).toPromise();
    }

    /**
     * ListPluginProperties
     * @param param the request object
     */
    public listProperties(param: PluginsApiListPropertiesRequest, options?: Configuration): Promise<any> {
        return this.api.listProperties(param.user, param.plugin,  options).toPromise();
    }

    /**
     * ManagePluginState
     * @param param the request object
     */
    public manageStateWithHttpInfo(param: PluginsApiManageStateRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.manageStateWithHttpInfo(param.user, param.plugin, param.body,  options).toPromise();
    }

    /**
     * ManagePluginState
     * @param param the request object
     */
    public manageState(param: PluginsApiManageStateRequest, options?: Configuration): Promise<any> {
        return this.api.manageState(param.user, param.plugin, param.body,  options).toPromise();
    }

    /**
     * UpdatePluginProperty
     * @param param the request object
     */
    public patchPropertyWithHttpInfo(param: PluginsApiPatchPropertyRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.patchPropertyWithHttpInfo(param.user, param.plugin, param.property,  options).toPromise();
    }

    /**
     * UpdatePluginProperty
     * @param param the request object
     */
    public patchProperty(param: PluginsApiPatchPropertyRequest, options?: Configuration): Promise<any> {
        return this.api.patchProperty(param.user, param.plugin, param.property,  options).toPromise();
    }

    /**
     * ReadPluginFiles
     * @param param the request object
     */
    public readFilesWithHttpInfo(param: PluginsApiReadFilesRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.readFilesWithHttpInfo(param.user, param.plugin, param.file,  options).toPromise();
    }

    /**
     * ReadPluginFiles
     * @param param the request object
     */
    public readFiles(param: PluginsApiReadFilesRequest, options?: Configuration): Promise<any> {
        return this.api.readFiles(param.user, param.plugin, param.file,  options).toPromise();
    }

    /**
     * ReadPluginInfo
     * @param param the request object
     */
    public readInfoWithHttpInfo(param: PluginsApiReadInfoRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.readInfoWithHttpInfo(param.user, param.plugin,  options).toPromise();
    }

    /**
     * ReadPluginInfo
     * @param param the request object
     */
    public readInfo(param: PluginsApiReadInfoRequest, options?: Configuration): Promise<any> {
        return this.api.readInfo(param.user, param.plugin,  options).toPromise();
    }

    /**
     * ReadPluginLogs
     * @param param the request object
     */
    public readLogsWithHttpInfo(param: PluginsApiReadLogsRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.readLogsWithHttpInfo(param.user, param.plugin,  options).toPromise();
    }

    /**
     * ReadPluginLogs
     * @param param the request object
     */
    public readLogs(param: PluginsApiReadLogsRequest, options?: Configuration): Promise<any> {
        return this.api.readLogs(param.user, param.plugin,  options).toPromise();
    }

    /**
     * ReadPluginProperty
     * @param param the request object
     */
    public readPropertyWithHttpInfo(param: PluginsApiReadPropertyRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.readPropertyWithHttpInfo(param.user, param.plugin, param.property,  options).toPromise();
    }

    /**
     * ReadPluginProperty
     * @param param the request object
     */
    public readProperty(param: PluginsApiReadPropertyRequest, options?: Configuration): Promise<any> {
        return this.api.readProperty(param.user, param.plugin, param.property,  options).toPromise();
    }

    /**
     * RunPluginCommand
     * @param param the request object
     */
    public runCommandTerminalWithHttpInfo(param: PluginsApiRunCommandTerminalRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.runCommandTerminalWithHttpInfo(param.user, param.plugin,  options).toPromise();
    }

    /**
     * RunPluginCommand
     * @param param the request object
     */
    public runCommandTerminal(param: PluginsApiRunCommandTerminalRequest, options?: Configuration): Promise<any> {
        return this.api.runCommandTerminal(param.user, param.plugin,  options).toPromise();
    }

    /**
     * RunPluginShell
     * @param param the request object
     */
    public runShellWithHttpInfo(param: PluginsApiRunShellRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.runShellWithHttpInfo(param.user, param.plugin,  options).toPromise();
    }

    /**
     * RunPluginShell
     * @param param the request object
     */
    public runShell(param: PluginsApiRunShellRequest, options?: Configuration): Promise<any> {
        return this.api.runShell(param.user, param.plugin,  options).toPromise();
    }

    /**
     * UpdatePluginProperty
     * @param param the request object
     */
    public updatePropertyWithHttpInfo(param: PluginsApiUpdatePropertyRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.updatePropertyWithHttpInfo(param.user, param.plugin, param.property, param.propertyUpdate,  options).toPromise();
    }

    /**
     * UpdatePluginProperty
     * @param param the request object
     */
    public updateProperty(param: PluginsApiUpdatePropertyRequest, options?: Configuration): Promise<any> {
        return this.api.updateProperty(param.user, param.plugin, param.property, param.propertyUpdate,  options).toPromise();
    }

}

import { ObservableProductsApi } from "./ObservableAPI.js";
import { ProductsApiRequestFactory, ProductsApiResponseProcessor} from "../apis/ProductsApi.js";

export interface ProductsApiAccessResourcesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiaccessResources
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiaccessResources
     */
    product: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiaccessResources
     */
    resource: string
    /**
     * 
     * @type any
     * @memberof ProductsApiaccessResources
     */
    body: any
}

export interface ProductsApiCloneRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiclone
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiclone
     */
    product: string
    /**
     * 
     * @type ProductCloneRequest
     * @memberof ProductsApiclone
     */
    productCloneRequest: ProductCloneRequest
}

export interface ProductsApiCloneConfigRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApicloneConfig
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApicloneConfig
     */
    product: string
}

export interface ProductsApiClonePropertyRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApicloneProperty
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApicloneProperty
     */
    product: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApicloneProperty
     */
    property: string
    /**
     * 
     * @type ProductClonePropertyRequest
     * @memberof ProductsApicloneProperty
     */
    productClonePropertyRequest: ProductClonePropertyRequest
}

export interface ProductsApiClonePropertyConfigRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiclonePropertyConfig
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiclonePropertyConfig
     */
    product: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiclonePropertyConfig
     */
    property: string
}

export interface ProductsApiCreateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApicreate
     */
    user: string
    /**
     * 
     * @type ProductCreateRequest
     * @memberof ProductsApicreate
     */
    productCreateRequest: ProductCreateRequest
}

export interface ProductsApiCreateFirmwareRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApicreateFirmware
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApicreateFirmware
     */
    product: string
    /**
     * 
     * @type ProductCreateFirmwareRequest
     * @memberof ProductsApicreateFirmware
     */
    productCreateFirmwareRequest: ProductCreateFirmwareRequest
}

export interface ProductsApiCreatePropertyRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApicreateProperty
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApicreateProperty
     */
    product: string
    /**
     * 
     * @type PropertyCreate
     * @memberof ProductsApicreateProperty
     */
    propertyCreate: PropertyCreate
}

export interface ProductsApiDeleteFirmwareRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApideleteFirmware
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApideleteFirmware
     */
    product: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApideleteFirmware
     */
    firmware: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApideleteFirmware
     */
    firmwareVersion: string
}

export interface ProductsApiDeleteProductProfileResourceRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApideleteProductProfileResource
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApideleteProductProfileResource
     */
    product: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApideleteProductProfileResource
     */
    category: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApideleteProductProfileResource
     */
    resource: string
}

export interface ProductsApiDeletePropertyRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApideleteProperty
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApideleteProperty
     */
    product: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApideleteProperty
     */
    property: string
}

export interface ProductsApiDeleteServicesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApideleteServices
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApideleteServices
     */
    product: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApideleteServices
     */
    service: string
}

export interface ProductsApiExportDataRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiexportData
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiexportData
     */
    product: string
}

export interface ProductsApiFlashFirmwareRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiflashFirmware
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiflashFirmware
     */
    product: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiflashFirmware
     */
    firmware: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiflashFirmware
     */
    firmwareVersion: string
}

export interface ProductsApiListRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApilist
     */
    user: string
}

export interface ProductsApiListFirmwaresRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApilistFirmwares
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApilistFirmwares
     */
    product: string
}

export interface ProductsApiListPropertiesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApilistProperties
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApilistProperties
     */
    product: string
}

export interface ProductsApiPatchPropertyRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApipatchProperty
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApipatchProperty
     */
    product: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApipatchProperty
     */
    property: string
}

export interface ProductsApiReadConfigRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApireadConfig
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApireadConfig
     */
    product: string
}

export interface ProductsApiReadFirmwareConfigRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApireadFirmwareConfig
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApireadFirmwareConfig
     */
    product: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApireadFirmwareConfig
     */
    firmware: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApireadFirmwareConfig
     */
    firmwareVersion: string
}

export interface ProductsApiReadProductProfileResourceRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApireadProductProfileResource
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApireadProductProfileResource
     */
    product: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApireadProductProfileResource
     */
    category: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApireadProductProfileResource
     */
    resource: string
}

export interface ProductsApiReadProfileRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApireadProfile
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApireadProfile
     */
    product: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApireadProfile
     */
    category: string
}

export interface ProductsApiReadPropertyRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApireadProperty
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApireadProperty
     */
    product: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApireadProperty
     */
    property: string
}

export interface ProductsApiReadServicesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApireadServices
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApireadServices
     */
    product: string
}

export interface ProductsApiReadServices0Request {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApireadServices_1
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApireadServices_1
     */
    product: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApireadServices_1
     */
    service: string
}

export interface ProductsApiRemoveRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiremove
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiremove
     */
    product: string
}

export interface ProductsApiUpdateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiupdate
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiupdate
     */
    product: string
    /**
     * 
     * @type ProductUpdateRequest
     * @memberof ProductsApiupdate
     */
    productUpdateRequest: ProductUpdateRequest
}

export interface ProductsApiUpdateFirmwareRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiupdateFirmware
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiupdateFirmware
     */
    product: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiupdateFirmware
     */
    firmware: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiupdateFirmware
     */
    firmwareVersion: string
    /**
     * 
     * @type any
     * @memberof ProductsApiupdateFirmware
     */
    body: any
}

export interface ProductsApiUpdateFirmwareStreamRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiupdateFirmwareStream
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiupdateFirmwareStream
     */
    product: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiupdateFirmwareStream
     */
    firmware: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiupdateFirmwareStream
     */
    firmwareVersion: string
}

export interface ProductsApiUpdateFirmwareToolchainRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiupdateFirmwareToolchain
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiupdateFirmwareToolchain
     */
    product: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiupdateFirmwareToolchain
     */
    firmware: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiupdateFirmwareToolchain
     */
    firmwareVersion: string
}

export interface ProductsApiUpdateProductProfileResourceRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiupdateProductProfileResource
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiupdateProductProfileResource
     */
    product: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiupdateProductProfileResource
     */
    category: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiupdateProductProfileResource
     */
    resource: string
    /**
     * 
     * @type any
     * @memberof ProductsApiupdateProductProfileResource
     */
    body: any
}

export interface ProductsApiUpdateProfileRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiupdateProfile
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiupdateProfile
     */
    product: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiupdateProfile
     */
    category: string
    /**
     * 
     * @type any
     * @memberof ProductsApiupdateProfile
     */
    body: any
}

export interface ProductsApiUpdateProfileCodeRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiupdateProfileCode
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiupdateProfileCode
     */
    product: string
    /**
     * 
     * @type any
     * @memberof ProductsApiupdateProfileCode
     */
    body: any
}

export interface ProductsApiUpdateProjectsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiupdateProjects
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiupdateProjects
     */
    product: string
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof ProductsApiupdateProjects
     */
    requestBody: Array<string>
}

export interface ProductsApiUpdatePropertyRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiupdateProperty
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiupdateProperty
     */
    product: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiupdateProperty
     */
    property: string
    /**
     * 
     * @type PropertyUpdate
     * @memberof ProductsApiupdateProperty
     */
    propertyUpdate: PropertyUpdate
}

export interface ProductsApiUpdateServicesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiupdateServices
     */
    user: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiupdateServices
     */
    product: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiupdateServices
     */
    service: string
    /**
     * 
     * @type any
     * @memberof ProductsApiupdateServices
     */
    body: any
}

export class ObjectProductsApi {
    private api: ObservableProductsApi

    public constructor(configuration: Configuration, requestFactory?: ProductsApiRequestFactory, responseProcessor?: ProductsApiResponseProcessor) {
        this.api = new ObservableProductsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * AccessProductResources
     * @param param the request object
     */
    public accessResourcesWithHttpInfo(param: ProductsApiAccessResourcesRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.accessResourcesWithHttpInfo(param.user, param.product, param.resource, param.body,  options).toPromise();
    }

    /**
     * AccessProductResources
     * @param param the request object
     */
    public accessResources(param: ProductsApiAccessResourcesRequest, options?: Configuration): Promise<any> {
        return this.api.accessResources(param.user, param.product, param.resource, param.body,  options).toPromise();
    }

    /**
     * CloneProduct
     * @param param the request object
     */
    public cloneWithHttpInfo(param: ProductsApiCloneRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.cloneWithHttpInfo(param.user, param.product, param.productCloneRequest,  options).toPromise();
    }

    /**
     * CloneProduct
     * @param param the request object
     */
    public clone(param: ProductsApiCloneRequest, options?: Configuration): Promise<any> {
        return this.api.clone(param.user, param.product, param.productCloneRequest,  options).toPromise();
    }

    /**
     * CloneProductConfig
     * @param param the request object
     */
    public cloneConfigWithHttpInfo(param: ProductsApiCloneConfigRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.cloneConfigWithHttpInfo(param.user, param.product,  options).toPromise();
    }

    /**
     * CloneProductConfig
     * @param param the request object
     */
    public cloneConfig(param: ProductsApiCloneConfigRequest, options?: Configuration): Promise<any> {
        return this.api.cloneConfig(param.user, param.product,  options).toPromise();
    }

    /**
     * CloneProductProperty
     * @param param the request object
     */
    public clonePropertyWithHttpInfo(param: ProductsApiClonePropertyRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.clonePropertyWithHttpInfo(param.user, param.product, param.property, param.productClonePropertyRequest,  options).toPromise();
    }

    /**
     * CloneProductProperty
     * @param param the request object
     */
    public cloneProperty(param: ProductsApiClonePropertyRequest, options?: Configuration): Promise<any> {
        return this.api.cloneProperty(param.user, param.product, param.property, param.productClonePropertyRequest,  options).toPromise();
    }

    /**
     * CloneProductPropertyConfig
     * @param param the request object
     */
    public clonePropertyConfigWithHttpInfo(param: ProductsApiClonePropertyConfigRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.clonePropertyConfigWithHttpInfo(param.user, param.product, param.property,  options).toPromise();
    }

    /**
     * CloneProductPropertyConfig
     * @param param the request object
     */
    public clonePropertyConfig(param: ProductsApiClonePropertyConfigRequest, options?: Configuration): Promise<any> {
        return this.api.clonePropertyConfig(param.user, param.product, param.property,  options).toPromise();
    }

    /**
     * CreateProduct
     * @param param the request object
     */
    public createWithHttpInfo(param: ProductsApiCreateRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.createWithHttpInfo(param.user, param.productCreateRequest,  options).toPromise();
    }

    /**
     * CreateProduct
     * @param param the request object
     */
    public create(param: ProductsApiCreateRequest, options?: Configuration): Promise<any> {
        return this.api.create(param.user, param.productCreateRequest,  options).toPromise();
    }

    /**
     * CreateProductFirmware
     * @param param the request object
     */
    public createFirmwareWithHttpInfo(param: ProductsApiCreateFirmwareRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.createFirmwareWithHttpInfo(param.user, param.product, param.productCreateFirmwareRequest,  options).toPromise();
    }

    /**
     * CreateProductFirmware
     * @param param the request object
     */
    public createFirmware(param: ProductsApiCreateFirmwareRequest, options?: Configuration): Promise<any> {
        return this.api.createFirmware(param.user, param.product, param.productCreateFirmwareRequest,  options).toPromise();
    }

    /**
     * CreateProductProperty
     * @param param the request object
     */
    public createPropertyWithHttpInfo(param: ProductsApiCreatePropertyRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.createPropertyWithHttpInfo(param.user, param.product, param.propertyCreate,  options).toPromise();
    }

    /**
     * CreateProductProperty
     * @param param the request object
     */
    public createProperty(param: ProductsApiCreatePropertyRequest, options?: Configuration): Promise<any> {
        return this.api.createProperty(param.user, param.product, param.propertyCreate,  options).toPromise();
    }

    /**
     * DeleteProductFirmware
     * @param param the request object
     */
    public deleteFirmwareWithHttpInfo(param: ProductsApiDeleteFirmwareRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.deleteFirmwareWithHttpInfo(param.user, param.product, param.firmware, param.firmwareVersion,  options).toPromise();
    }

    /**
     * DeleteProductFirmware
     * @param param the request object
     */
    public deleteFirmware(param: ProductsApiDeleteFirmwareRequest, options?: Configuration): Promise<any> {
        return this.api.deleteFirmware(param.user, param.product, param.firmware, param.firmwareVersion,  options).toPromise();
    }

    /**
     * UpdateProductProfile
     * @param param the request object
     */
    public deleteProductProfileResourceWithHttpInfo(param: ProductsApiDeleteProductProfileResourceRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.deleteProductProfileResourceWithHttpInfo(param.user, param.product, param.category, param.resource,  options).toPromise();
    }

    /**
     * UpdateProductProfile
     * @param param the request object
     */
    public deleteProductProfileResource(param: ProductsApiDeleteProductProfileResourceRequest, options?: Configuration): Promise<any> {
        return this.api.deleteProductProfileResource(param.user, param.product, param.category, param.resource,  options).toPromise();
    }

    /**
     * DeleteProductProperty
     * @param param the request object
     */
    public deletePropertyWithHttpInfo(param: ProductsApiDeletePropertyRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.deletePropertyWithHttpInfo(param.user, param.product, param.property,  options).toPromise();
    }

    /**
     * DeleteProductProperty
     * @param param the request object
     */
    public deleteProperty(param: ProductsApiDeletePropertyRequest, options?: Configuration): Promise<any> {
        return this.api.deleteProperty(param.user, param.product, param.property,  options).toPromise();
    }

    /**
     * DeleteProductServices
     * @param param the request object
     */
    public deleteServicesWithHttpInfo(param: ProductsApiDeleteServicesRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.deleteServicesWithHttpInfo(param.user, param.product, param.service,  options).toPromise();
    }

    /**
     * DeleteProductServices
     * @param param the request object
     */
    public deleteServices(param: ProductsApiDeleteServicesRequest, options?: Configuration): Promise<any> {
        return this.api.deleteServices(param.user, param.product, param.service,  options).toPromise();
    }

    /**
     * ExportProduct
     * @param param the request object
     */
    public exportDataWithHttpInfo(param: ProductsApiExportDataRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.exportDataWithHttpInfo(param.user, param.product,  options).toPromise();
    }

    /**
     * ExportProduct
     * @param param the request object
     */
    public exportData(param: ProductsApiExportDataRequest, options?: Configuration): Promise<any> {
        return this.api.exportData(param.user, param.product,  options).toPromise();
    }

    /**
     * FlashProductFirmware
     * @param param the request object
     */
    public flashFirmwareWithHttpInfo(param: ProductsApiFlashFirmwareRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.flashFirmwareWithHttpInfo(param.user, param.product, param.firmware, param.firmwareVersion,  options).toPromise();
    }

    /**
     * FlashProductFirmware
     * @param param the request object
     */
    public flashFirmware(param: ProductsApiFlashFirmwareRequest, options?: Configuration): Promise<any> {
        return this.api.flashFirmware(param.user, param.product, param.firmware, param.firmwareVersion,  options).toPromise();
    }

    /**
     * ListProducts
     * @param param the request object
     */
    public listWithHttpInfo(param: ProductsApiListRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.listWithHttpInfo(param.user,  options).toPromise();
    }

    /**
     * ListProducts
     * @param param the request object
     */
    public list(param: ProductsApiListRequest, options?: Configuration): Promise<any> {
        return this.api.list(param.user,  options).toPromise();
    }

    /**
     * ListProductFirmwares
     * @param param the request object
     */
    public listFirmwaresWithHttpInfo(param: ProductsApiListFirmwaresRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.listFirmwaresWithHttpInfo(param.user, param.product,  options).toPromise();
    }

    /**
     * ListProductFirmwares
     * @param param the request object
     */
    public listFirmwares(param: ProductsApiListFirmwaresRequest, options?: Configuration): Promise<any> {
        return this.api.listFirmwares(param.user, param.product,  options).toPromise();
    }

    /**
     * ListProductProperties
     * @param param the request object
     */
    public listPropertiesWithHttpInfo(param: ProductsApiListPropertiesRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.listPropertiesWithHttpInfo(param.user, param.product,  options).toPromise();
    }

    /**
     * ListProductProperties
     * @param param the request object
     */
    public listProperties(param: ProductsApiListPropertiesRequest, options?: Configuration): Promise<any> {
        return this.api.listProperties(param.user, param.product,  options).toPromise();
    }

    /**
     * UpdateProductProperty
     * @param param the request object
     */
    public patchPropertyWithHttpInfo(param: ProductsApiPatchPropertyRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.patchPropertyWithHttpInfo(param.user, param.product, param.property,  options).toPromise();
    }

    /**
     * UpdateProductProperty
     * @param param the request object
     */
    public patchProperty(param: ProductsApiPatchPropertyRequest, options?: Configuration): Promise<any> {
        return this.api.patchProperty(param.user, param.product, param.property,  options).toPromise();
    }

    /**
     * ReadProductConfig
     * @param param the request object
     */
    public readConfigWithHttpInfo(param: ProductsApiReadConfigRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.readConfigWithHttpInfo(param.user, param.product,  options).toPromise();
    }

    /**
     * ReadProductConfig
     * @param param the request object
     */
    public readConfig(param: ProductsApiReadConfigRequest, options?: Configuration): Promise<any> {
        return this.api.readConfig(param.user, param.product,  options).toPromise();
    }

    /**
     * ReadProductFirmwareConfig
     * @param param the request object
     */
    public readFirmwareConfigWithHttpInfo(param: ProductsApiReadFirmwareConfigRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.readFirmwareConfigWithHttpInfo(param.user, param.product, param.firmware, param.firmwareVersion,  options).toPromise();
    }

    /**
     * ReadProductFirmwareConfig
     * @param param the request object
     */
    public readFirmwareConfig(param: ProductsApiReadFirmwareConfigRequest, options?: Configuration): Promise<any> {
        return this.api.readFirmwareConfig(param.user, param.product, param.firmware, param.firmwareVersion,  options).toPromise();
    }

    /**
     * ReadProductProfile
     * @param param the request object
     */
    public readProductProfileResourceWithHttpInfo(param: ProductsApiReadProductProfileResourceRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.readProductProfileResourceWithHttpInfo(param.user, param.product, param.category, param.resource,  options).toPromise();
    }

    /**
     * ReadProductProfile
     * @param param the request object
     */
    public readProductProfileResource(param: ProductsApiReadProductProfileResourceRequest, options?: Configuration): Promise<any> {
        return this.api.readProductProfileResource(param.user, param.product, param.category, param.resource,  options).toPromise();
    }

    /**
     * ReadProductProfile
     * @param param the request object
     */
    public readProfileWithHttpInfo(param: ProductsApiReadProfileRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.readProfileWithHttpInfo(param.user, param.product, param.category,  options).toPromise();
    }

    /**
     * ReadProductProfile
     * @param param the request object
     */
    public readProfile(param: ProductsApiReadProfileRequest, options?: Configuration): Promise<any> {
        return this.api.readProfile(param.user, param.product, param.category,  options).toPromise();
    }

    /**
     * ReadProductProperty
     * @param param the request object
     */
    public readPropertyWithHttpInfo(param: ProductsApiReadPropertyRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.readPropertyWithHttpInfo(param.user, param.product, param.property,  options).toPromise();
    }

    /**
     * ReadProductProperty
     * @param param the request object
     */
    public readProperty(param: ProductsApiReadPropertyRequest, options?: Configuration): Promise<any> {
        return this.api.readProperty(param.user, param.product, param.property,  options).toPromise();
    }

    /**
     * ReadProductServices
     * @param param the request object
     */
    public readServicesWithHttpInfo(param: ProductsApiReadServicesRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.readServicesWithHttpInfo(param.user, param.product,  options).toPromise();
    }

    /**
     * ReadProductServices
     * @param param the request object
     */
    public readServices(param: ProductsApiReadServicesRequest, options?: Configuration): Promise<any> {
        return this.api.readServices(param.user, param.product,  options).toPromise();
    }

    /**
     * ReadProductServices
     * @param param the request object
     */
    public readServices_1WithHttpInfo(param: ProductsApiReadServices0Request, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.readServices_1WithHttpInfo(param.user, param.product, param.service,  options).toPromise();
    }

    /**
     * ReadProductServices
     * @param param the request object
     */
    public readServices_1(param: ProductsApiReadServices0Request, options?: Configuration): Promise<any> {
        return this.api.readServices_1(param.user, param.product, param.service,  options).toPromise();
    }

    /**
     * DeleteProduct
     * @param param the request object
     */
    public removeWithHttpInfo(param: ProductsApiRemoveRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.removeWithHttpInfo(param.user, param.product,  options).toPromise();
    }

    /**
     * DeleteProduct
     * @param param the request object
     */
    public remove(param: ProductsApiRemoveRequest, options?: Configuration): Promise<any> {
        return this.api.remove(param.user, param.product,  options).toPromise();
    }

    /**
     * UpdateProduct
     * @param param the request object
     */
    public updateWithHttpInfo(param: ProductsApiUpdateRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.updateWithHttpInfo(param.user, param.product, param.productUpdateRequest,  options).toPromise();
    }

    /**
     * UpdateProduct
     * @param param the request object
     */
    public update(param: ProductsApiUpdateRequest, options?: Configuration): Promise<any> {
        return this.api.update(param.user, param.product, param.productUpdateRequest,  options).toPromise();
    }

    /**
     * UpdateProductFirmware
     * @param param the request object
     */
    public updateFirmwareWithHttpInfo(param: ProductsApiUpdateFirmwareRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.updateFirmwareWithHttpInfo(param.user, param.product, param.firmware, param.firmwareVersion, param.body,  options).toPromise();
    }

    /**
     * UpdateProductFirmware
     * @param param the request object
     */
    public updateFirmware(param: ProductsApiUpdateFirmwareRequest, options?: Configuration): Promise<any> {
        return this.api.updateFirmware(param.user, param.product, param.firmware, param.firmwareVersion, param.body,  options).toPromise();
    }

    /**
     * UpdateProductFirmware
     * @param param the request object
     */
    public updateFirmwareStreamWithHttpInfo(param: ProductsApiUpdateFirmwareStreamRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.updateFirmwareStreamWithHttpInfo(param.user, param.product, param.firmware, param.firmwareVersion,  options).toPromise();
    }

    /**
     * UpdateProductFirmware
     * @param param the request object
     */
    public updateFirmwareStream(param: ProductsApiUpdateFirmwareStreamRequest, options?: Configuration): Promise<any> {
        return this.api.updateFirmwareStream(param.user, param.product, param.firmware, param.firmwareVersion,  options).toPromise();
    }

    /**
     * UpdateProductFirmware
     * @param param the request object
     */
    public updateFirmwareToolchainWithHttpInfo(param: ProductsApiUpdateFirmwareToolchainRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.updateFirmwareToolchainWithHttpInfo(param.user, param.product, param.firmware, param.firmwareVersion,  options).toPromise();
    }

    /**
     * UpdateProductFirmware
     * @param param the request object
     */
    public updateFirmwareToolchain(param: ProductsApiUpdateFirmwareToolchainRequest, options?: Configuration): Promise<any> {
        return this.api.updateFirmwareToolchain(param.user, param.product, param.firmware, param.firmwareVersion,  options).toPromise();
    }

    /**
     * UpdateProductProfile
     * @param param the request object
     */
    public updateProductProfileResourceWithHttpInfo(param: ProductsApiUpdateProductProfileResourceRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.updateProductProfileResourceWithHttpInfo(param.user, param.product, param.category, param.resource, param.body,  options).toPromise();
    }

    /**
     * UpdateProductProfile
     * @param param the request object
     */
    public updateProductProfileResource(param: ProductsApiUpdateProductProfileResourceRequest, options?: Configuration): Promise<any> {
        return this.api.updateProductProfileResource(param.user, param.product, param.category, param.resource, param.body,  options).toPromise();
    }

    /**
     * UpdateProductProfile
     * @param param the request object
     */
    public updateProfileWithHttpInfo(param: ProductsApiUpdateProfileRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.updateProfileWithHttpInfo(param.user, param.product, param.category, param.body,  options).toPromise();
    }

    /**
     * UpdateProductProfile
     * @param param the request object
     */
    public updateProfile(param: ProductsApiUpdateProfileRequest, options?: Configuration): Promise<any> {
        return this.api.updateProfile(param.user, param.product, param.category, param.body,  options).toPromise();
    }

    /**
     * UpdateProductProfile
     * @param param the request object
     */
    public updateProfileCodeWithHttpInfo(param: ProductsApiUpdateProfileCodeRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.updateProfileCodeWithHttpInfo(param.user, param.product, param.body,  options).toPromise();
    }

    /**
     * UpdateProductProfile
     * @param param the request object
     */
    public updateProfileCode(param: ProductsApiUpdateProfileCodeRequest, options?: Configuration): Promise<any> {
        return this.api.updateProfileCode(param.user, param.product, param.body,  options).toPromise();
    }

    /**
     * UpdateProductProjects
     * @param param the request object
     */
    public updateProjectsWithHttpInfo(param: ProductsApiUpdateProjectsRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.updateProjectsWithHttpInfo(param.user, param.product, param.requestBody,  options).toPromise();
    }

    /**
     * UpdateProductProjects
     * @param param the request object
     */
    public updateProjects(param: ProductsApiUpdateProjectsRequest, options?: Configuration): Promise<any> {
        return this.api.updateProjects(param.user, param.product, param.requestBody,  options).toPromise();
    }

    /**
     * UpdateProductProperty
     * @param param the request object
     */
    public updatePropertyWithHttpInfo(param: ProductsApiUpdatePropertyRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.updatePropertyWithHttpInfo(param.user, param.product, param.property, param.propertyUpdate,  options).toPromise();
    }

    /**
     * UpdateProductProperty
     * @param param the request object
     */
    public updateProperty(param: ProductsApiUpdatePropertyRequest, options?: Configuration): Promise<any> {
        return this.api.updateProperty(param.user, param.product, param.property, param.propertyUpdate,  options).toPromise();
    }

    /**
     * UpdateProductServices
     * @param param the request object
     */
    public updateServicesWithHttpInfo(param: ProductsApiUpdateServicesRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.updateServicesWithHttpInfo(param.user, param.product, param.service, param.body,  options).toPromise();
    }

    /**
     * UpdateProductServices
     * @param param the request object
     */
    public updateServices(param: ProductsApiUpdateServicesRequest, options?: Configuration): Promise<any> {
        return this.api.updateServices(param.user, param.product, param.service, param.body,  options).toPromise();
    }

}
