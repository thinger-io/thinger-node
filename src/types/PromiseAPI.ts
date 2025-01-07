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
import { ProductCloneRequest } from '../models/ProductCloneRequest.js';
import { ProductConditionalIcon } from '../models/ProductConditionalIcon.js';
import { ProductConditionalIconConditionsInner } from '../models/ProductConditionalIconConditionsInner.js';
import { ProductConfig } from '../models/ProductConfig.js';
import { ProductCreateFirmwareRequest } from '../models/ProductCreateFirmwareRequest.js';
import { ProductCreateRequest } from '../models/ProductCreateRequest.js';
import { ProductField } from '../models/ProductField.js';
import { ProductIcon } from '../models/ProductIcon.js';
import { ProductUpdateRequest } from '../models/ProductUpdateRequest.js';
import { Property } from '../models/Property.js';
import { PropertyCreate } from '../models/PropertyCreate.js';
import { PropertyForm } from '../models/PropertyForm.js';
import { PropertyUpdate } from '../models/PropertyUpdate.js';
import { ObservableDevicesApi } from './ObservableAPI.js';

import { DevicesApiRequestFactory, DevicesApiResponseProcessor} from "../apis/DevicesApi.js";
export class PromiseDevicesApi {
    private api: ObservableDevicesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DevicesApiRequestFactory,
        responseProcessor?: DevicesApiResponseProcessor
    ) {
        this.api = new ObservableDevicesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * AccessDeviceResources
     * @param user
     * @param device
     * @param resource
     * @param body
     */
    public accessInputResourcesWithHttpInfo(user: string, device: string, resource: string, body: any, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.accessInputResourcesWithHttpInfo(user, device, resource, body, _options);
        return result.toPromise();
    }

    /**
     * AccessDeviceResources
     * @param user
     * @param device
     * @param resource
     * @param body
     */
    public accessInputResources(user: string, device: string, resource: string, body: any, _options?: Configuration): Promise<any> {
        const result = this.api.accessInputResources(user, device, resource, body, _options);
        return result.toPromise();
    }

    /**
     * AccessDeviceResources
     * @param user
     * @param device
     * @param resource
     */
    public accessOutputResourcesWithHttpInfo(user: string, device: string, resource: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.accessOutputResourcesWithHttpInfo(user, device, resource, _options);
        return result.toPromise();
    }

    /**
     * AccessDeviceResources
     * @param user
     * @param device
     * @param resource
     */
    public accessOutputResources(user: string, device: string, resource: string, _options?: Configuration): Promise<any> {
        const result = this.api.accessOutputResources(user, device, resource, _options);
        return result.toPromise();
    }

    /**
     * AccessDeviceResources
     * @param user
     * @param device
     */
    public accessResourcesWithHttpInfo(user: string, device: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.accessResourcesWithHttpInfo(user, device, _options);
        return result.toPromise();
    }

    /**
     * AccessDeviceResources
     * @param user
     * @param device
     */
    public accessResources(user: string, device: string, _options?: Configuration): Promise<any> {
        const result = this.api.accessResources(user, device, _options);
        return result.toPromise();
    }

    /**
     * AccessDeviceWebServices
     * @param user
     * @param device
     * @param service
     */
    public accessWebServicesWithHttpInfo(user: string, device: string, service: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.accessWebServicesWithHttpInfo(user, device, service, _options);
        return result.toPromise();
    }

    /**
     * AccessDeviceWebServices
     * @param user
     * @param device
     * @param service
     */
    public accessWebServices(user: string, device: string, service: string, _options?: Configuration): Promise<any> {
        const result = this.api.accessWebServices(user, device, service, _options);
        return result.toPromise();
    }

    /**
     * CallDeviceCallback
     * @param user
     * @param device
     * @param body
     */
    public callCallbackDataWithHttpInfo(user: string, device: string, body: any, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.callCallbackDataWithHttpInfo(user, device, body, _options);
        return result.toPromise();
    }

    /**
     * CallDeviceCallback
     * @param user
     * @param device
     * @param body
     */
    public callCallbackData(user: string, device: string, body: any, _options?: Configuration): Promise<any> {
        const result = this.api.callCallbackData(user, device, body, _options);
        return result.toPromise();
    }

    /**
     * CloneDevice
     * @param user
     * @param device
     * @param deviceCloneRequest
     */
    public cloneWithHttpInfo(user: string, device: string, deviceCloneRequest: DeviceCloneRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.cloneWithHttpInfo(user, device, deviceCloneRequest, _options);
        return result.toPromise();
    }

    /**
     * CloneDevice
     * @param user
     * @param device
     * @param deviceCloneRequest
     */
    public clone(user: string, device: string, deviceCloneRequest: DeviceCloneRequest, _options?: Configuration): Promise<any> {
        const result = this.api.clone(user, device, deviceCloneRequest, _options);
        return result.toPromise();
    }

    /**
     * CloneDeviceProperty
     * @param user
     * @param device
     * @param property
     * @param pluginClonePropertyRequest
     */
    public clonePropertyWithHttpInfo(user: string, device: string, property: string, pluginClonePropertyRequest: PluginClonePropertyRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.clonePropertyWithHttpInfo(user, device, property, pluginClonePropertyRequest, _options);
        return result.toPromise();
    }

    /**
     * CloneDeviceProperty
     * @param user
     * @param device
     * @param property
     * @param pluginClonePropertyRequest
     */
    public cloneProperty(user: string, device: string, property: string, pluginClonePropertyRequest: PluginClonePropertyRequest, _options?: Configuration): Promise<any> {
        const result = this.api.cloneProperty(user, device, property, pluginClonePropertyRequest, _options);
        return result.toPromise();
    }

    /**
     * CreateDevice
     * @param user
     * @param propertyCreate
     */
    public createWithHttpInfo(user: string, propertyCreate: PropertyCreate, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.createWithHttpInfo(user, propertyCreate, _options);
        return result.toPromise();
    }

    /**
     * CreateDevice
     * @param user
     * @param propertyCreate
     */
    public create(user: string, propertyCreate: PropertyCreate, _options?: Configuration): Promise<any> {
        const result = this.api.create(user, propertyCreate, _options);
        return result.toPromise();
    }

    /**
     * CreateDeviceProperty
     * @param user
     * @param device
     * @param propertyCreate
     */
    public createPropertyWithHttpInfo(user: string, device: string, propertyCreate: PropertyCreate, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.createPropertyWithHttpInfo(user, device, propertyCreate, _options);
        return result.toPromise();
    }

    /**
     * CreateDeviceProperty
     * @param user
     * @param device
     * @param propertyCreate
     */
    public createProperty(user: string, device: string, propertyCreate: PropertyCreate, _options?: Configuration): Promise<any> {
        const result = this.api.createProperty(user, device, propertyCreate, _options);
        return result.toPromise();
    }

    /**
     * CreateDeviceToken
     * @param user
     * @param device
     * @param body
     */
    public createTokenWithHttpInfo(user: string, device: string, body: any, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.createTokenWithHttpInfo(user, device, body, _options);
        return result.toPromise();
    }

    /**
     * CreateDeviceToken
     * @param user
     * @param device
     * @param body
     */
    public createToken(user: string, device: string, body: any, _options?: Configuration): Promise<any> {
        const result = this.api.createToken(user, device, body, _options);
        return result.toPromise();
    }

    /**
     * DeleteDeviceProperty
     * @param user
     * @param device
     * @param property
     */
    public deletePropertyWithHttpInfo(user: string, device: string, property: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.deletePropertyWithHttpInfo(user, device, property, _options);
        return result.toPromise();
    }

    /**
     * DeleteDeviceProperty
     * @param user
     * @param device
     * @param property
     */
    public deleteProperty(user: string, device: string, property: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteProperty(user, device, property, _options);
        return result.toPromise();
    }

    /**
     * DeleteDeviceToken
     * @param user
     * @param device
     * @param token
     */
    public deleteTokenWithHttpInfo(user: string, device: string, token: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.deleteTokenWithHttpInfo(user, device, token, _options);
        return result.toPromise();
    }

    /**
     * DeleteDeviceToken
     * @param user
     * @param device
     * @param token
     */
    public deleteToken(user: string, device: string, token: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteToken(user, device, token, _options);
        return result.toPromise();
    }

    /**
     * ListDevices
     * @param user
     */
    public listWithHttpInfo(user: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.listWithHttpInfo(user, _options);
        return result.toPromise();
    }

    /**
     * ListDevices
     * @param user
     */
    public list(user: string, _options?: Configuration): Promise<any> {
        const result = this.api.list(user, _options);
        return result.toPromise();
    }

    /**
     * ListDeviceBucketTags
     * @param user
     * @param device
     * @param bucket
     */
    public listBucketTagsWithHttpInfo(user: string, device: string, bucket: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.listBucketTagsWithHttpInfo(user, device, bucket, _options);
        return result.toPromise();
    }

    /**
     * ListDeviceBucketTags
     * @param user
     * @param device
     * @param bucket
     */
    public listBucketTags(user: string, device: string, bucket: string, _options?: Configuration): Promise<any> {
        const result = this.api.listBucketTags(user, device, bucket, _options);
        return result.toPromise();
    }

    /**
     * ListDeviceBuckets
     * @param user
     * @param device
     */
    public listBucketsWithHttpInfo(user: string, device: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.listBucketsWithHttpInfo(user, device, _options);
        return result.toPromise();
    }

    /**
     * ListDeviceBuckets
     * @param user
     * @param device
     */
    public listBuckets(user: string, device: string, _options?: Configuration): Promise<any> {
        const result = this.api.listBuckets(user, device, _options);
        return result.toPromise();
    }

    /**
     * ListDeviceProperties
     * @param user
     * @param device
     */
    public listPropertiesWithHttpInfo(user: string, device: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.listPropertiesWithHttpInfo(user, device, _options);
        return result.toPromise();
    }

    /**
     * ListDeviceProperties
     * @param user
     * @param device
     */
    public listProperties(user: string, device: string, _options?: Configuration): Promise<any> {
        const result = this.api.listProperties(user, device, _options);
        return result.toPromise();
    }

    /**
     * ListDeviceServices
     * @param user
     * @param device
     */
    public listServicesWithHttpInfo(user: string, device: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.listServicesWithHttpInfo(user, device, _options);
        return result.toPromise();
    }

    /**
     * ListDeviceServices
     * @param user
     * @param device
     */
    public listServices(user: string, device: string, _options?: Configuration): Promise<any> {
        const result = this.api.listServices(user, device, _options);
        return result.toPromise();
    }

    /**
     * ListDeviceTokens
     * @param user
     * @param device
     */
    public listTokensWithHttpInfo(user: string, device: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.listTokensWithHttpInfo(user, device, _options);
        return result.toPromise();
    }

    /**
     * ListDeviceTokens
     * @param user
     * @param device
     */
    public listTokens(user: string, device: string, _options?: Configuration): Promise<any> {
        const result = this.api.listTokens(user, device, _options);
        return result.toPromise();
    }

    /**
     * UpdateDeviceProperty
     * @param user
     * @param device
     * @param property
     */
    public patchPropertyWithHttpInfo(user: string, device: string, property: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.patchPropertyWithHttpInfo(user, device, property, _options);
        return result.toPromise();
    }

    /**
     * UpdateDeviceProperty
     * @param user
     * @param device
     * @param property
     */
    public patchProperty(user: string, device: string, property: string, _options?: Configuration): Promise<any> {
        const result = this.api.patchProperty(user, device, property, _options);
        return result.toPromise();
    }

    /**
     * ReadDeviceBucket
     * @param version
     * @param user
     * @param device
     * @param bucket
     */
    public readBucketDataWithHttpInfo(version: string, user: string, device: string, bucket: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.readBucketDataWithHttpInfo(version, user, device, bucket, _options);
        return result.toPromise();
    }

    /**
     * ReadDeviceBucket
     * @param version
     * @param user
     * @param device
     * @param bucket
     */
    public readBucketData(version: string, user: string, device: string, bucket: string, _options?: Configuration): Promise<any> {
        const result = this.api.readBucketData(version, user, device, bucket, _options);
        return result.toPromise();
    }

    /**
     * ReadDeviceBucketTag
     * @param user
     * @param device
     * @param bucket
     * @param tag
     */
    public readBucketTagWithHttpInfo(user: string, device: string, bucket: string, tag: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.readBucketTagWithHttpInfo(user, device, bucket, tag, _options);
        return result.toPromise();
    }

    /**
     * ReadDeviceBucketTag
     * @param user
     * @param device
     * @param bucket
     * @param tag
     */
    public readBucketTag(user: string, device: string, bucket: string, tag: string, _options?: Configuration): Promise<any> {
        const result = this.api.readBucketTag(user, device, bucket, tag, _options);
        return result.toPromise();
    }

    /**
     * ReadDeviceCallbackConfig
     * @param user
     * @param device
     */
    public readCallbackConfigWithHttpInfo(user: string, device: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.readCallbackConfigWithHttpInfo(user, device, _options);
        return result.toPromise();
    }

    /**
     * ReadDeviceCallbackConfig
     * @param user
     * @param device
     */
    public readCallbackConfig(user: string, device: string, _options?: Configuration): Promise<any> {
        const result = this.api.readCallbackConfig(user, device, _options);
        return result.toPromise();
    }

    /**
     * ReadDeviceCallbackResponse
     * @param user
     * @param device
     */
    public readCallbackResponseDataWithHttpInfo(user: string, device: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.readCallbackResponseDataWithHttpInfo(user, device, _options);
        return result.toPromise();
    }

    /**
     * ReadDeviceCallbackResponse
     * @param user
     * @param device
     */
    public readCallbackResponseData(user: string, device: string, _options?: Configuration): Promise<any> {
        const result = this.api.readCallbackResponseData(user, device, _options);
        return result.toPromise();
    }

    /**
     * ReadDeviceStatistics
     * @param user
     */
    public readDevicesStatisticsWithHttpInfo(user: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.readDevicesStatisticsWithHttpInfo(user, _options);
        return result.toPromise();
    }

    /**
     * ReadDeviceStatistics
     * @param user
     */
    public readDevicesStatistics(user: string, _options?: Configuration): Promise<any> {
        const result = this.api.readDevicesStatistics(user, _options);
        return result.toPromise();
    }

    /**
     * ReadDeviceProperty
     * @param user
     * @param device
     * @param property
     */
    public readPropertyWithHttpInfo(user: string, device: string, property: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.readPropertyWithHttpInfo(user, device, property, _options);
        return result.toPromise();
    }

    /**
     * ReadDeviceProperty
     * @param user
     * @param device
     * @param property
     */
    public readProperty(user: string, device: string, property: string, _options?: Configuration): Promise<any> {
        const result = this.api.readProperty(user, device, property, _options);
        return result.toPromise();
    }

    /**
     * ReadDeviceStatistics
     * @param user
     * @param device
     */
    public readStatisticsWithHttpInfo(user: string, device: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.readStatisticsWithHttpInfo(user, device, _options);
        return result.toPromise();
    }

    /**
     * ReadDeviceStatistics
     * @param user
     * @param device
     */
    public readStatistics(user: string, device: string, _options?: Configuration): Promise<any> {
        const result = this.api.readStatistics(user, device, _options);
        return result.toPromise();
    }

    /**
     * ReadDeviceStatus
     * @param user
     * @param device
     */
    public readStatusWithHttpInfo(user: string, device: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.readStatusWithHttpInfo(user, device, _options);
        return result.toPromise();
    }

    /**
     * ReadDeviceStatus
     * @param user
     * @param device
     */
    public readStatus(user: string, device: string, _options?: Configuration): Promise<any> {
        const result = this.api.readStatus(user, device, _options);
        return result.toPromise();
    }

    /**
     * DeleteDevice
     * @param user
     * @param device
     */
    public removeWithHttpInfo(user: string, device: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.removeWithHttpInfo(user, device, _options);
        return result.toPromise();
    }

    /**
     * DeleteDevice
     * @param user
     * @param device
     */
    public remove(user: string, device: string, _options?: Configuration): Promise<any> {
        const result = this.api.remove(user, device, _options);
        return result.toPromise();
    }

    /**
     * UpdateDevice
     * @param user
     * @param device
     * @param deviceUpdateRequest
     */
    public updateWithHttpInfo(user: string, device: string, deviceUpdateRequest: DeviceUpdateRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.updateWithHttpInfo(user, device, deviceUpdateRequest, _options);
        return result.toPromise();
    }

    /**
     * UpdateDevice
     * @param user
     * @param device
     * @param deviceUpdateRequest
     */
    public update(user: string, device: string, deviceUpdateRequest: DeviceUpdateRequest, _options?: Configuration): Promise<any> {
        const result = this.api.update(user, device, deviceUpdateRequest, _options);
        return result.toPromise();
    }

    /**
     * UpdateDeviceCallback
     * @param user
     * @param device
     * @param deviceUpdateCallbackRequest
     */
    public updateCallbackWithHttpInfo(user: string, device: string, deviceUpdateCallbackRequest: DeviceUpdateCallbackRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.updateCallbackWithHttpInfo(user, device, deviceUpdateCallbackRequest, _options);
        return result.toPromise();
    }

    /**
     * UpdateDeviceCallback
     * @param user
     * @param device
     * @param deviceUpdateCallbackRequest
     */
    public updateCallback(user: string, device: string, deviceUpdateCallbackRequest: DeviceUpdateCallbackRequest, _options?: Configuration): Promise<any> {
        const result = this.api.updateCallback(user, device, deviceUpdateCallbackRequest, _options);
        return result.toPromise();
    }

    /**
     * UpdateDeviceProjects
     * @param user
     * @param device
     * @param requestBody
     */
    public updateProjectsWithHttpInfo(user: string, device: string, requestBody: Array<string>, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.updateProjectsWithHttpInfo(user, device, requestBody, _options);
        return result.toPromise();
    }

    /**
     * UpdateDeviceProjects
     * @param user
     * @param device
     * @param requestBody
     */
    public updateProjects(user: string, device: string, requestBody: Array<string>, _options?: Configuration): Promise<any> {
        const result = this.api.updateProjects(user, device, requestBody, _options);
        return result.toPromise();
    }

    /**
     * UpdateDeviceProperty
     * @param user
     * @param device
     * @param property
     * @param propertyUpdate
     */
    public updatePropertyWithHttpInfo(user: string, device: string, property: string, propertyUpdate: PropertyUpdate, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.updatePropertyWithHttpInfo(user, device, property, propertyUpdate, _options);
        return result.toPromise();
    }

    /**
     * UpdateDeviceProperty
     * @param user
     * @param device
     * @param property
     * @param propertyUpdate
     */
    public updateProperty(user: string, device: string, property: string, propertyUpdate: PropertyUpdate, _options?: Configuration): Promise<any> {
        const result = this.api.updateProperty(user, device, property, propertyUpdate, _options);
        return result.toPromise();
    }

    /**
     * AccessDeviceResources
     * @param user
     * @param device
     * @param resource
     */
    public v1UsersUserDevicesDeviceResourceGetWithHttpInfo(user: string, device: string, resource: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1UsersUserDevicesDeviceResourceGetWithHttpInfo(user, device, resource, _options);
        return result.toPromise();
    }

    /**
     * AccessDeviceResources
     * @param user
     * @param device
     * @param resource
     */
    public v1UsersUserDevicesDeviceResourceGet(user: string, device: string, resource: string, _options?: Configuration): Promise<any> {
        const result = this.api.v1UsersUserDevicesDeviceResourceGet(user, device, resource, _options);
        return result.toPromise();
    }

    /**
     * AccessDeviceResources
     * @param user
     * @param device
     * @param resource
     * @param body
     */
    public v1UsersUserDevicesDeviceResourcePostWithHttpInfo(user: string, device: string, resource: string, body: any, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1UsersUserDevicesDeviceResourcePostWithHttpInfo(user, device, resource, body, _options);
        return result.toPromise();
    }

    /**
     * AccessDeviceResources
     * @param user
     * @param device
     * @param resource
     * @param body
     */
    public v1UsersUserDevicesDeviceResourcePost(user: string, device: string, resource: string, body: any, _options?: Configuration): Promise<any> {
        const result = this.api.v1UsersUserDevicesDeviceResourcePost(user, device, resource, body, _options);
        return result.toPromise();
    }

    /**
     * ReadDeviceStatistics
     * @param user
     * @param device
     */
    public v1UsersUserDevicesDeviceStatsGetWithHttpInfo(user: string, device: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1UsersUserDevicesDeviceStatsGetWithHttpInfo(user, device, _options);
        return result.toPromise();
    }

    /**
     * ReadDeviceStatistics
     * @param user
     * @param device
     */
    public v1UsersUserDevicesDeviceStatsGet(user: string, device: string, _options?: Configuration): Promise<any> {
        const result = this.api.v1UsersUserDevicesDeviceStatsGet(user, device, _options);
        return result.toPromise();
    }

    /**
     * AccessDeviceResources
     * @param user
     * @param device
     * @param resource
     */
    public v2UsersUserDevicesDeviceResourceGetWithHttpInfo(user: string, device: string, resource: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v2UsersUserDevicesDeviceResourceGetWithHttpInfo(user, device, resource, _options);
        return result.toPromise();
    }

    /**
     * AccessDeviceResources
     * @param user
     * @param device
     * @param resource
     */
    public v2UsersUserDevicesDeviceResourceGet(user: string, device: string, resource: string, _options?: Configuration): Promise<any> {
        const result = this.api.v2UsersUserDevicesDeviceResourceGet(user, device, resource, _options);
        return result.toPromise();
    }

    /**
     * AccessDeviceResources
     * @param user
     * @param device
     * @param resource
     * @param body
     */
    public v2UsersUserDevicesDeviceResourcePostWithHttpInfo(user: string, device: string, resource: string, body: any, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v2UsersUserDevicesDeviceResourcePostWithHttpInfo(user, device, resource, body, _options);
        return result.toPromise();
    }

    /**
     * AccessDeviceResources
     * @param user
     * @param device
     * @param resource
     * @param body
     */
    public v2UsersUserDevicesDeviceResourcePost(user: string, device: string, resource: string, body: any, _options?: Configuration): Promise<any> {
        const result = this.api.v2UsersUserDevicesDeviceResourcePost(user, device, resource, body, _options);
        return result.toPromise();
    }


}



import { ObservablePluginsApi } from './ObservableAPI.js';

import { PluginsApiRequestFactory, PluginsApiResponseProcessor} from "../apis/PluginsApi.js";
export class PromisePluginsApi {
    private api: ObservablePluginsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PluginsApiRequestFactory,
        responseProcessor?: PluginsApiResponseProcessor
    ) {
        this.api = new ObservablePluginsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * CallPluginEndpoint
     * @param user
     * @param plugin
     * @param path
     */
    public callPluginEndpointDeleteWithHttpInfo(user: string, plugin: string, path: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.callPluginEndpointDeleteWithHttpInfo(user, plugin, path, _options);
        return result.toPromise();
    }

    /**
     * CallPluginEndpoint
     * @param user
     * @param plugin
     * @param path
     */
    public callPluginEndpointDelete(user: string, plugin: string, path: string, _options?: Configuration): Promise<any> {
        const result = this.api.callPluginEndpointDelete(user, plugin, path, _options);
        return result.toPromise();
    }

    /**
     * CallPluginEndpoint
     * @param user
     * @param plugin
     * @param path
     */
    public callPluginEndpointGetWithHttpInfo(user: string, plugin: string, path: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.callPluginEndpointGetWithHttpInfo(user, plugin, path, _options);
        return result.toPromise();
    }

    /**
     * CallPluginEndpoint
     * @param user
     * @param plugin
     * @param path
     */
    public callPluginEndpointGet(user: string, plugin: string, path: string, _options?: Configuration): Promise<any> {
        const result = this.api.callPluginEndpointGet(user, plugin, path, _options);
        return result.toPromise();
    }

    /**
     * CallPluginEndpoint
     * @param user
     * @param plugin
     * @param path
     */
    public callPluginEndpointHeadWithHttpInfo(user: string, plugin: string, path: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.callPluginEndpointHeadWithHttpInfo(user, plugin, path, _options);
        return result.toPromise();
    }

    /**
     * CallPluginEndpoint
     * @param user
     * @param plugin
     * @param path
     */
    public callPluginEndpointHead(user: string, plugin: string, path: string, _options?: Configuration): Promise<any> {
        const result = this.api.callPluginEndpointHead(user, plugin, path, _options);
        return result.toPromise();
    }

    /**
     * CallPluginEndpoint
     * @param user
     * @param plugin
     * @param path
     */
    public callPluginEndpointOptionsWithHttpInfo(user: string, plugin: string, path: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.callPluginEndpointOptionsWithHttpInfo(user, plugin, path, _options);
        return result.toPromise();
    }

    /**
     * CallPluginEndpoint
     * @param user
     * @param plugin
     * @param path
     */
    public callPluginEndpointOptions(user: string, plugin: string, path: string, _options?: Configuration): Promise<any> {
        const result = this.api.callPluginEndpointOptions(user, plugin, path, _options);
        return result.toPromise();
    }

    /**
     * CallPluginEndpoint
     * @param user
     * @param plugin
     * @param path
     */
    public callPluginEndpointPatchWithHttpInfo(user: string, plugin: string, path: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.callPluginEndpointPatchWithHttpInfo(user, plugin, path, _options);
        return result.toPromise();
    }

    /**
     * CallPluginEndpoint
     * @param user
     * @param plugin
     * @param path
     */
    public callPluginEndpointPatch(user: string, plugin: string, path: string, _options?: Configuration): Promise<any> {
        const result = this.api.callPluginEndpointPatch(user, plugin, path, _options);
        return result.toPromise();
    }

    /**
     * CallPluginEndpoint
     * @param user
     * @param plugin
     * @param path
     * @param body
     */
    public callPluginEndpointPostWithHttpInfo(user: string, plugin: string, path: string, body: any, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.callPluginEndpointPostWithHttpInfo(user, plugin, path, body, _options);
        return result.toPromise();
    }

    /**
     * CallPluginEndpoint
     * @param user
     * @param plugin
     * @param path
     * @param body
     */
    public callPluginEndpointPost(user: string, plugin: string, path: string, body: any, _options?: Configuration): Promise<any> {
        const result = this.api.callPluginEndpointPost(user, plugin, path, body, _options);
        return result.toPromise();
    }

    /**
     * CallPluginEndpoint
     * @param user
     * @param plugin
     * @param path
     * @param body
     */
    public callPluginEndpointPutWithHttpInfo(user: string, plugin: string, path: string, body: any, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.callPluginEndpointPutWithHttpInfo(user, plugin, path, body, _options);
        return result.toPromise();
    }

    /**
     * CallPluginEndpoint
     * @param user
     * @param plugin
     * @param path
     * @param body
     */
    public callPluginEndpointPut(user: string, plugin: string, path: string, body: any, _options?: Configuration): Promise<any> {
        const result = this.api.callPluginEndpointPut(user, plugin, path, body, _options);
        return result.toPromise();
    }

    /**
     * CallPluginEndpoint
     * @param user
     * @param plugin
     * @param path
     */
    public callPluginEndpointTraceWithHttpInfo(user: string, plugin: string, path: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.callPluginEndpointTraceWithHttpInfo(user, plugin, path, _options);
        return result.toPromise();
    }

    /**
     * CallPluginEndpoint
     * @param user
     * @param plugin
     * @param path
     */
    public callPluginEndpointTrace(user: string, plugin: string, path: string, _options?: Configuration): Promise<any> {
        const result = this.api.callPluginEndpointTrace(user, plugin, path, _options);
        return result.toPromise();
    }

    /**
     * ClonePluginProperty
     * @param user
     * @param plugin
     * @param property
     * @param pluginClonePropertyRequest
     */
    public clonePropertyWithHttpInfo(user: string, plugin: string, property: string, pluginClonePropertyRequest: PluginClonePropertyRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.clonePropertyWithHttpInfo(user, plugin, property, pluginClonePropertyRequest, _options);
        return result.toPromise();
    }

    /**
     * ClonePluginProperty
     * @param user
     * @param plugin
     * @param property
     * @param pluginClonePropertyRequest
     */
    public cloneProperty(user: string, plugin: string, property: string, pluginClonePropertyRequest: PluginClonePropertyRequest, _options?: Configuration): Promise<any> {
        const result = this.api.cloneProperty(user, plugin, property, pluginClonePropertyRequest, _options);
        return result.toPromise();
    }

    /**
     * CreatePluginProperty
     * @param user
     * @param plugin
     * @param propertyCreate
     */
    public createPropertyWithHttpInfo(user: string, plugin: string, propertyCreate: PropertyCreate, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.createPropertyWithHttpInfo(user, plugin, propertyCreate, _options);
        return result.toPromise();
    }

    /**
     * CreatePluginProperty
     * @param user
     * @param plugin
     * @param propertyCreate
     */
    public createProperty(user: string, plugin: string, propertyCreate: PropertyCreate, _options?: Configuration): Promise<any> {
        const result = this.api.createProperty(user, plugin, propertyCreate, _options);
        return result.toPromise();
    }

    /**
     * DeletePluginProperty
     * @param user
     * @param plugin
     * @param property
     */
    public deletePropertyWithHttpInfo(user: string, plugin: string, property: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.deletePropertyWithHttpInfo(user, plugin, property, _options);
        return result.toPromise();
    }

    /**
     * DeletePluginProperty
     * @param user
     * @param plugin
     * @param property
     */
    public deleteProperty(user: string, plugin: string, property: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteProperty(user, plugin, property, _options);
        return result.toPromise();
    }

    /**
     * ListPlugins
     * @param user
     */
    public listWithHttpInfo(user: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.listWithHttpInfo(user, _options);
        return result.toPromise();
    }

    /**
     * ListPlugins
     * @param user
     */
    public list(user: string, _options?: Configuration): Promise<any> {
        const result = this.api.list(user, _options);
        return result.toPromise();
    }

    /**
     * ListPluginProperties
     * @param user
     * @param plugin
     */
    public listPropertiesWithHttpInfo(user: string, plugin: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.listPropertiesWithHttpInfo(user, plugin, _options);
        return result.toPromise();
    }

    /**
     * ListPluginProperties
     * @param user
     * @param plugin
     */
    public listProperties(user: string, plugin: string, _options?: Configuration): Promise<any> {
        const result = this.api.listProperties(user, plugin, _options);
        return result.toPromise();
    }

    /**
     * ManagePluginState
     * @param user
     * @param plugin
     * @param body
     */
    public manageStateWithHttpInfo(user: string, plugin: string, body: any, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.manageStateWithHttpInfo(user, plugin, body, _options);
        return result.toPromise();
    }

    /**
     * ManagePluginState
     * @param user
     * @param plugin
     * @param body
     */
    public manageState(user: string, plugin: string, body: any, _options?: Configuration): Promise<any> {
        const result = this.api.manageState(user, plugin, body, _options);
        return result.toPromise();
    }

    /**
     * UpdatePluginProperty
     * @param user
     * @param plugin
     * @param property
     */
    public patchPropertyWithHttpInfo(user: string, plugin: string, property: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.patchPropertyWithHttpInfo(user, plugin, property, _options);
        return result.toPromise();
    }

    /**
     * UpdatePluginProperty
     * @param user
     * @param plugin
     * @param property
     */
    public patchProperty(user: string, plugin: string, property: string, _options?: Configuration): Promise<any> {
        const result = this.api.patchProperty(user, plugin, property, _options);
        return result.toPromise();
    }

    /**
     * ReadPluginFiles
     * @param user
     * @param plugin
     * @param file
     */
    public readFilesWithHttpInfo(user: string, plugin: string, file: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.readFilesWithHttpInfo(user, plugin, file, _options);
        return result.toPromise();
    }

    /**
     * ReadPluginFiles
     * @param user
     * @param plugin
     * @param file
     */
    public readFiles(user: string, plugin: string, file: string, _options?: Configuration): Promise<any> {
        const result = this.api.readFiles(user, plugin, file, _options);
        return result.toPromise();
    }

    /**
     * ReadPluginInfo
     * @param user
     * @param plugin
     */
    public readInfoWithHttpInfo(user: string, plugin: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.readInfoWithHttpInfo(user, plugin, _options);
        return result.toPromise();
    }

    /**
     * ReadPluginInfo
     * @param user
     * @param plugin
     */
    public readInfo(user: string, plugin: string, _options?: Configuration): Promise<any> {
        const result = this.api.readInfo(user, plugin, _options);
        return result.toPromise();
    }

    /**
     * ReadPluginLogs
     * @param user
     * @param plugin
     */
    public readLogsWithHttpInfo(user: string, plugin: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.readLogsWithHttpInfo(user, plugin, _options);
        return result.toPromise();
    }

    /**
     * ReadPluginLogs
     * @param user
     * @param plugin
     */
    public readLogs(user: string, plugin: string, _options?: Configuration): Promise<any> {
        const result = this.api.readLogs(user, plugin, _options);
        return result.toPromise();
    }

    /**
     * ReadPluginProperty
     * @param user
     * @param plugin
     * @param property
     */
    public readPropertyWithHttpInfo(user: string, plugin: string, property: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.readPropertyWithHttpInfo(user, plugin, property, _options);
        return result.toPromise();
    }

    /**
     * ReadPluginProperty
     * @param user
     * @param plugin
     * @param property
     */
    public readProperty(user: string, plugin: string, property: string, _options?: Configuration): Promise<any> {
        const result = this.api.readProperty(user, plugin, property, _options);
        return result.toPromise();
    }

    /**
     * RunPluginCommand
     * @param user
     * @param plugin
     */
    public runCommandTerminalWithHttpInfo(user: string, plugin: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.runCommandTerminalWithHttpInfo(user, plugin, _options);
        return result.toPromise();
    }

    /**
     * RunPluginCommand
     * @param user
     * @param plugin
     */
    public runCommandTerminal(user: string, plugin: string, _options?: Configuration): Promise<any> {
        const result = this.api.runCommandTerminal(user, plugin, _options);
        return result.toPromise();
    }

    /**
     * RunPluginShell
     * @param user
     * @param plugin
     */
    public runShellWithHttpInfo(user: string, plugin: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.runShellWithHttpInfo(user, plugin, _options);
        return result.toPromise();
    }

    /**
     * RunPluginShell
     * @param user
     * @param plugin
     */
    public runShell(user: string, plugin: string, _options?: Configuration): Promise<any> {
        const result = this.api.runShell(user, plugin, _options);
        return result.toPromise();
    }

    /**
     * UpdatePluginProperty
     * @param user
     * @param plugin
     * @param property
     * @param propertyUpdate
     */
    public updatePropertyWithHttpInfo(user: string, plugin: string, property: string, propertyUpdate: PropertyUpdate, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.updatePropertyWithHttpInfo(user, plugin, property, propertyUpdate, _options);
        return result.toPromise();
    }

    /**
     * UpdatePluginProperty
     * @param user
     * @param plugin
     * @param property
     * @param propertyUpdate
     */
    public updateProperty(user: string, plugin: string, property: string, propertyUpdate: PropertyUpdate, _options?: Configuration): Promise<any> {
        const result = this.api.updateProperty(user, plugin, property, propertyUpdate, _options);
        return result.toPromise();
    }


}



import { ObservableProductsApi } from './ObservableAPI.js';

import { ProductsApiRequestFactory, ProductsApiResponseProcessor} from "../apis/ProductsApi.js";
export class PromiseProductsApi {
    private api: ObservableProductsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductsApiRequestFactory,
        responseProcessor?: ProductsApiResponseProcessor
    ) {
        this.api = new ObservableProductsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * CloneProduct
     * @param user
     * @param product
     * @param productCloneRequest
     */
    public cloneWithHttpInfo(user: string, product: string, productCloneRequest: ProductCloneRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.cloneWithHttpInfo(user, product, productCloneRequest, _options);
        return result.toPromise();
    }

    /**
     * CloneProduct
     * @param user
     * @param product
     * @param productCloneRequest
     */
    public clone(user: string, product: string, productCloneRequest: ProductCloneRequest, _options?: Configuration): Promise<any> {
        const result = this.api.clone(user, product, productCloneRequest, _options);
        return result.toPromise();
    }

    /**
     * CloneProductProperty
     * @param user
     * @param product
     * @param property
     * @param pluginClonePropertyRequest
     */
    public clonePropertyWithHttpInfo(user: string, product: string, property: string, pluginClonePropertyRequest: PluginClonePropertyRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.clonePropertyWithHttpInfo(user, product, property, pluginClonePropertyRequest, _options);
        return result.toPromise();
    }

    /**
     * CloneProductProperty
     * @param user
     * @param product
     * @param property
     * @param pluginClonePropertyRequest
     */
    public cloneProperty(user: string, product: string, property: string, pluginClonePropertyRequest: PluginClonePropertyRequest, _options?: Configuration): Promise<any> {
        const result = this.api.cloneProperty(user, product, property, pluginClonePropertyRequest, _options);
        return result.toPromise();
    }

    /**
     * CreateProduct
     * @param user
     * @param productCreateRequest
     */
    public createWithHttpInfo(user: string, productCreateRequest: ProductCreateRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.createWithHttpInfo(user, productCreateRequest, _options);
        return result.toPromise();
    }

    /**
     * CreateProduct
     * @param user
     * @param productCreateRequest
     */
    public create(user: string, productCreateRequest: ProductCreateRequest, _options?: Configuration): Promise<any> {
        const result = this.api.create(user, productCreateRequest, _options);
        return result.toPromise();
    }

    /**
     * CreateProductFirmware
     * @param user
     * @param product
     * @param productCreateFirmwareRequest
     */
    public createFirmwareWithHttpInfo(user: string, product: string, productCreateFirmwareRequest: ProductCreateFirmwareRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.createFirmwareWithHttpInfo(user, product, productCreateFirmwareRequest, _options);
        return result.toPromise();
    }

    /**
     * CreateProductFirmware
     * @param user
     * @param product
     * @param productCreateFirmwareRequest
     */
    public createFirmware(user: string, product: string, productCreateFirmwareRequest: ProductCreateFirmwareRequest, _options?: Configuration): Promise<any> {
        const result = this.api.createFirmware(user, product, productCreateFirmwareRequest, _options);
        return result.toPromise();
    }

    /**
     * CreateProductProperty
     * @param user
     * @param product
     * @param propertyCreate
     */
    public createPropertyWithHttpInfo(user: string, product: string, propertyCreate: PropertyCreate, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.createPropertyWithHttpInfo(user, product, propertyCreate, _options);
        return result.toPromise();
    }

    /**
     * CreateProductProperty
     * @param user
     * @param product
     * @param propertyCreate
     */
    public createProperty(user: string, product: string, propertyCreate: PropertyCreate, _options?: Configuration): Promise<any> {
        const result = this.api.createProperty(user, product, propertyCreate, _options);
        return result.toPromise();
    }

    /**
     * DeleteProductFirmware
     * @param user
     * @param product
     * @param firmware
     * @param firmwareVersion
     */
    public deleteFirmwareWithHttpInfo(user: string, product: string, firmware: string, firmwareVersion: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.deleteFirmwareWithHttpInfo(user, product, firmware, firmwareVersion, _options);
        return result.toPromise();
    }

    /**
     * DeleteProductFirmware
     * @param user
     * @param product
     * @param firmware
     * @param firmwareVersion
     */
    public deleteFirmware(user: string, product: string, firmware: string, firmwareVersion: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteFirmware(user, product, firmware, firmwareVersion, _options);
        return result.toPromise();
    }

    /**
     * DeleteProductProperty
     * @param user
     * @param product
     * @param property
     */
    public deletePropertyWithHttpInfo(user: string, product: string, property: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.deletePropertyWithHttpInfo(user, product, property, _options);
        return result.toPromise();
    }

    /**
     * DeleteProductProperty
     * @param user
     * @param product
     * @param property
     */
    public deleteProperty(user: string, product: string, property: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteProperty(user, product, property, _options);
        return result.toPromise();
    }

    /**
     * ExportProduct
     * @param user
     * @param product
     */
    public exportDataWithHttpInfo(user: string, product: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.exportDataWithHttpInfo(user, product, _options);
        return result.toPromise();
    }

    /**
     * ExportProduct
     * @param user
     * @param product
     */
    public exportData(user: string, product: string, _options?: Configuration): Promise<any> {
        const result = this.api.exportData(user, product, _options);
        return result.toPromise();
    }

    /**
     * FlashProductFirmware
     * @param user
     * @param product
     * @param firmware
     * @param firmwareVersion
     */
    public flashFirmwareWithHttpInfo(user: string, product: string, firmware: string, firmwareVersion: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.flashFirmwareWithHttpInfo(user, product, firmware, firmwareVersion, _options);
        return result.toPromise();
    }

    /**
     * FlashProductFirmware
     * @param user
     * @param product
     * @param firmware
     * @param firmwareVersion
     */
    public flashFirmware(user: string, product: string, firmware: string, firmwareVersion: string, _options?: Configuration): Promise<any> {
        const result = this.api.flashFirmware(user, product, firmware, firmwareVersion, _options);
        return result.toPromise();
    }

    /**
     * ListProducts
     * @param user
     */
    public listWithHttpInfo(user: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.listWithHttpInfo(user, _options);
        return result.toPromise();
    }

    /**
     * ListProducts
     * @param user
     */
    public list(user: string, _options?: Configuration): Promise<any> {
        const result = this.api.list(user, _options);
        return result.toPromise();
    }

    /**
     * ListProductFirmwares
     * @param user
     * @param product
     */
    public listFirmwaresWithHttpInfo(user: string, product: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.listFirmwaresWithHttpInfo(user, product, _options);
        return result.toPromise();
    }

    /**
     * ListProductFirmwares
     * @param user
     * @param product
     */
    public listFirmwares(user: string, product: string, _options?: Configuration): Promise<any> {
        const result = this.api.listFirmwares(user, product, _options);
        return result.toPromise();
    }

    /**
     * ListProductProperties
     * @param user
     * @param product
     */
    public listPropertiesWithHttpInfo(user: string, product: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.listPropertiesWithHttpInfo(user, product, _options);
        return result.toPromise();
    }

    /**
     * ListProductProperties
     * @param user
     * @param product
     */
    public listProperties(user: string, product: string, _options?: Configuration): Promise<any> {
        const result = this.api.listProperties(user, product, _options);
        return result.toPromise();
    }

    /**
     * UpdateProductProperty
     * @param user
     * @param product
     * @param property
     */
    public patchPropertyWithHttpInfo(user: string, product: string, property: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.patchPropertyWithHttpInfo(user, product, property, _options);
        return result.toPromise();
    }

    /**
     * UpdateProductProperty
     * @param user
     * @param product
     * @param property
     */
    public patchProperty(user: string, product: string, property: string, _options?: Configuration): Promise<any> {
        const result = this.api.patchProperty(user, product, property, _options);
        return result.toPromise();
    }

    /**
     * ReadProductConfig
     * @param user
     * @param product
     */
    public readConfigWithHttpInfo(user: string, product: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.readConfigWithHttpInfo(user, product, _options);
        return result.toPromise();
    }

    /**
     * ReadProductConfig
     * @param user
     * @param product
     */
    public readConfig(user: string, product: string, _options?: Configuration): Promise<any> {
        const result = this.api.readConfig(user, product, _options);
        return result.toPromise();
    }

    /**
     * ReadProductFirmwareConfig
     * @param user
     * @param product
     * @param firmware
     * @param firmwareVersion
     */
    public readFirmwareConfigWithHttpInfo(user: string, product: string, firmware: string, firmwareVersion: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.readFirmwareConfigWithHttpInfo(user, product, firmware, firmwareVersion, _options);
        return result.toPromise();
    }

    /**
     * ReadProductFirmwareConfig
     * @param user
     * @param product
     * @param firmware
     * @param firmwareVersion
     */
    public readFirmwareConfig(user: string, product: string, firmware: string, firmwareVersion: string, _options?: Configuration): Promise<any> {
        const result = this.api.readFirmwareConfig(user, product, firmware, firmwareVersion, _options);
        return result.toPromise();
    }

    /**
     * ReadProductProfile
     * @param user
     * @param product
     * @param resource
     */
    public readProfileWithHttpInfo(user: string, product: string, resource: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.readProfileWithHttpInfo(user, product, resource, _options);
        return result.toPromise();
    }

    /**
     * ReadProductProfile
     * @param user
     * @param product
     * @param resource
     */
    public readProfile(user: string, product: string, resource: string, _options?: Configuration): Promise<any> {
        const result = this.api.readProfile(user, product, resource, _options);
        return result.toPromise();
    }

    /**
     * ReadProductProperty
     * @param user
     * @param product
     * @param property
     */
    public readPropertyWithHttpInfo(user: string, product: string, property: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.readPropertyWithHttpInfo(user, product, property, _options);
        return result.toPromise();
    }

    /**
     * ReadProductProperty
     * @param user
     * @param product
     * @param property
     */
    public readProperty(user: string, product: string, property: string, _options?: Configuration): Promise<any> {
        const result = this.api.readProperty(user, product, property, _options);
        return result.toPromise();
    }

    /**
     * ReadProductServices
     * @param user
     * @param product
     * @param resource
     */
    public readServicesWithHttpInfo(user: string, product: string, resource: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.readServicesWithHttpInfo(user, product, resource, _options);
        return result.toPromise();
    }

    /**
     * ReadProductServices
     * @param user
     * @param product
     * @param resource
     */
    public readServices(user: string, product: string, resource: string, _options?: Configuration): Promise<any> {
        const result = this.api.readServices(user, product, resource, _options);
        return result.toPromise();
    }

    /**
     * DeleteProduct
     * @param user
     * @param product
     */
    public removeWithHttpInfo(user: string, product: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.removeWithHttpInfo(user, product, _options);
        return result.toPromise();
    }

    /**
     * DeleteProduct
     * @param user
     * @param product
     */
    public remove(user: string, product: string, _options?: Configuration): Promise<any> {
        const result = this.api.remove(user, product, _options);
        return result.toPromise();
    }

    /**
     * UpdateProduct
     * @param user
     * @param product
     * @param productUpdateRequest
     */
    public updateWithHttpInfo(user: string, product: string, productUpdateRequest: ProductUpdateRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.updateWithHttpInfo(user, product, productUpdateRequest, _options);
        return result.toPromise();
    }

    /**
     * UpdateProduct
     * @param user
     * @param product
     * @param productUpdateRequest
     */
    public update(user: string, product: string, productUpdateRequest: ProductUpdateRequest, _options?: Configuration): Promise<any> {
        const result = this.api.update(user, product, productUpdateRequest, _options);
        return result.toPromise();
    }

    /**
     * UpdateProductFirmware
     * @param user
     * @param product
     * @param firmware
     * @param firmwareVersion
     * @param body
     */
    public updateFirmwareWithHttpInfo(user: string, product: string, firmware: string, firmwareVersion: string, body: any, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.updateFirmwareWithHttpInfo(user, product, firmware, firmwareVersion, body, _options);
        return result.toPromise();
    }

    /**
     * UpdateProductFirmware
     * @param user
     * @param product
     * @param firmware
     * @param firmwareVersion
     * @param body
     */
    public updateFirmware(user: string, product: string, firmware: string, firmwareVersion: string, body: any, _options?: Configuration): Promise<any> {
        const result = this.api.updateFirmware(user, product, firmware, firmwareVersion, body, _options);
        return result.toPromise();
    }

    /**
     * UpdateProductFirmware
     * @param user
     * @param product
     * @param firmware
     * @param firmwareVersion
     */
    public updateFirmwareStreamWithHttpInfo(user: string, product: string, firmware: string, firmwareVersion: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.updateFirmwareStreamWithHttpInfo(user, product, firmware, firmwareVersion, _options);
        return result.toPromise();
    }

    /**
     * UpdateProductFirmware
     * @param user
     * @param product
     * @param firmware
     * @param firmwareVersion
     */
    public updateFirmwareStream(user: string, product: string, firmware: string, firmwareVersion: string, _options?: Configuration): Promise<any> {
        const result = this.api.updateFirmwareStream(user, product, firmware, firmwareVersion, _options);
        return result.toPromise();
    }

    /**
     * UpdateProductFirmware
     * @param user
     * @param product
     * @param firmware
     * @param firmwareVersion
     */
    public updateFirmwareToolchainWithHttpInfo(user: string, product: string, firmware: string, firmwareVersion: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.updateFirmwareToolchainWithHttpInfo(user, product, firmware, firmwareVersion, _options);
        return result.toPromise();
    }

    /**
     * UpdateProductFirmware
     * @param user
     * @param product
     * @param firmware
     * @param firmwareVersion
     */
    public updateFirmwareToolchain(user: string, product: string, firmware: string, firmwareVersion: string, _options?: Configuration): Promise<any> {
        const result = this.api.updateFirmwareToolchain(user, product, firmware, firmwareVersion, _options);
        return result.toPromise();
    }

    /**
     * UpdateProductProfile
     * @param user
     * @param product
     * @param resource
     * @param body
     */
    public updateProfileWithHttpInfo(user: string, product: string, resource: string, body: any, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.updateProfileWithHttpInfo(user, product, resource, body, _options);
        return result.toPromise();
    }

    /**
     * UpdateProductProfile
     * @param user
     * @param product
     * @param resource
     * @param body
     */
    public updateProfile(user: string, product: string, resource: string, body: any, _options?: Configuration): Promise<any> {
        const result = this.api.updateProfile(user, product, resource, body, _options);
        return result.toPromise();
    }

    /**
     * UpdateProductProfile
     * @param user
     * @param product
     * @param body
     */
    public updateProfileCodeWithHttpInfo(user: string, product: string, body: any, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.updateProfileCodeWithHttpInfo(user, product, body, _options);
        return result.toPromise();
    }

    /**
     * UpdateProductProfile
     * @param user
     * @param product
     * @param body
     */
    public updateProfileCode(user: string, product: string, body: any, _options?: Configuration): Promise<any> {
        const result = this.api.updateProfileCode(user, product, body, _options);
        return result.toPromise();
    }

    /**
     * UpdateProductProjects
     * @param user
     * @param product
     * @param requestBody
     */
    public updateProjectsWithHttpInfo(user: string, product: string, requestBody: Array<string>, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.updateProjectsWithHttpInfo(user, product, requestBody, _options);
        return result.toPromise();
    }

    /**
     * UpdateProductProjects
     * @param user
     * @param product
     * @param requestBody
     */
    public updateProjects(user: string, product: string, requestBody: Array<string>, _options?: Configuration): Promise<any> {
        const result = this.api.updateProjects(user, product, requestBody, _options);
        return result.toPromise();
    }

    /**
     * UpdateProductProperty
     * @param user
     * @param product
     * @param property
     * @param propertyUpdate
     */
    public updatePropertyWithHttpInfo(user: string, product: string, property: string, propertyUpdate: PropertyUpdate, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.updatePropertyWithHttpInfo(user, product, property, propertyUpdate, _options);
        return result.toPromise();
    }

    /**
     * UpdateProductProperty
     * @param user
     * @param product
     * @param property
     * @param propertyUpdate
     */
    public updateProperty(user: string, product: string, property: string, propertyUpdate: PropertyUpdate, _options?: Configuration): Promise<any> {
        const result = this.api.updateProperty(user, product, property, propertyUpdate, _options);
        return result.toPromise();
    }

    /**
     * UpdateProductServices
     * @param user
     * @param product
     * @param resource
     * @param body
     */
    public updateServicesWithHttpInfo(user: string, product: string, resource: string, body: any, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.updateServicesWithHttpInfo(user, product, resource, body, _options);
        return result.toPromise();
    }

    /**
     * UpdateProductServices
     * @param user
     * @param product
     * @param resource
     * @param body
     */
    public updateServices(user: string, product: string, resource: string, body: any, _options?: Configuration): Promise<any> {
        const result = this.api.updateServices(user, product, resource, body, _options);
        return result.toPromise();
    }


}



