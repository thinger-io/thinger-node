import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http.js';
import { Configuration} from '../configuration.js'
import { Observable, of, from } from '../rxjsStub.js';
import {mergeMap, map} from  '../rxjsStub.js';
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

import { DevicesApiRequestFactory, DevicesApiResponseProcessor} from "../apis/DevicesApi.js";
export class ObservableDevicesApi {
    private requestFactory: DevicesApiRequestFactory;
    private responseProcessor: DevicesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DevicesApiRequestFactory,
        responseProcessor?: DevicesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DevicesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DevicesApiResponseProcessor();
    }

    /**
     * AccessDeviceResources
     * @param user
     * @param device
     * @param resource
     * @param body
     */
    public accessInputResourcesWithHttpInfo(user: string, device: string, resource: string, body: any, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.accessInputResources(user, device, resource, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.accessInputResourcesWithHttpInfo(rsp)));
            }));
    }

    /**
     * AccessDeviceResources
     * @param user
     * @param device
     * @param resource
     * @param body
     */
    public accessInputResources(user: string, device: string, resource: string, body: any, _options?: Configuration): Observable<any> {
        return this.accessInputResourcesWithHttpInfo(user, device, resource, body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * AccessDeviceResources
     * @param user
     * @param device
     * @param resource
     */
    public accessOutputResourcesWithHttpInfo(user: string, device: string, resource: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.accessOutputResources(user, device, resource, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.accessOutputResourcesWithHttpInfo(rsp)));
            }));
    }

    /**
     * AccessDeviceResources
     * @param user
     * @param device
     * @param resource
     */
    public accessOutputResources(user: string, device: string, resource: string, _options?: Configuration): Observable<any> {
        return this.accessOutputResourcesWithHttpInfo(user, device, resource, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * AccessDeviceResources
     * @param user
     * @param device
     */
    public accessResourcesWithHttpInfo(user: string, device: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.accessResources(user, device, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.accessResourcesWithHttpInfo(rsp)));
            }));
    }

    /**
     * AccessDeviceResources
     * @param user
     * @param device
     */
    public accessResources(user: string, device: string, _options?: Configuration): Observable<any> {
        return this.accessResourcesWithHttpInfo(user, device, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * AccessDeviceWebServices
     * @param user
     * @param device
     * @param service
     */
    public accessWebServicesWithHttpInfo(user: string, device: string, service: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.accessWebServices(user, device, service, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.accessWebServicesWithHttpInfo(rsp)));
            }));
    }

    /**
     * AccessDeviceWebServices
     * @param user
     * @param device
     * @param service
     */
    public accessWebServices(user: string, device: string, service: string, _options?: Configuration): Observable<any> {
        return this.accessWebServicesWithHttpInfo(user, device, service, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * CallDeviceCallback
     * @param user
     * @param device
     * @param body
     */
    public callCallbackDataWithHttpInfo(user: string, device: string, body: any, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.callCallbackData(user, device, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.callCallbackDataWithHttpInfo(rsp)));
            }));
    }

    /**
     * CallDeviceCallback
     * @param user
     * @param device
     * @param body
     */
    public callCallbackData(user: string, device: string, body: any, _options?: Configuration): Observable<any> {
        return this.callCallbackDataWithHttpInfo(user, device, body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * CloneDevice
     * @param user
     * @param device
     * @param deviceCloneRequest
     */
    public cloneWithHttpInfo(user: string, device: string, deviceCloneRequest: DeviceCloneRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.clone(user, device, deviceCloneRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloneWithHttpInfo(rsp)));
            }));
    }

    /**
     * CloneDevice
     * @param user
     * @param device
     * @param deviceCloneRequest
     */
    public clone(user: string, device: string, deviceCloneRequest: DeviceCloneRequest, _options?: Configuration): Observable<any> {
        return this.cloneWithHttpInfo(user, device, deviceCloneRequest, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * CloneDeviceProperty
     * @param user
     * @param device
     * @param property
     * @param pluginClonePropertyRequest
     */
    public clonePropertyWithHttpInfo(user: string, device: string, property: string, pluginClonePropertyRequest: PluginClonePropertyRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.cloneProperty(user, device, property, pluginClonePropertyRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.clonePropertyWithHttpInfo(rsp)));
            }));
    }

    /**
     * CloneDeviceProperty
     * @param user
     * @param device
     * @param property
     * @param pluginClonePropertyRequest
     */
    public cloneProperty(user: string, device: string, property: string, pluginClonePropertyRequest: PluginClonePropertyRequest, _options?: Configuration): Observable<any> {
        return this.clonePropertyWithHttpInfo(user, device, property, pluginClonePropertyRequest, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * CreateDevice
     * @param user
     * @param propertyCreate
     */
    public createWithHttpInfo(user: string, propertyCreate: PropertyCreate, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.create(user, propertyCreate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createWithHttpInfo(rsp)));
            }));
    }

    /**
     * CreateDevice
     * @param user
     * @param propertyCreate
     */
    public create(user: string, propertyCreate: PropertyCreate, _options?: Configuration): Observable<any> {
        return this.createWithHttpInfo(user, propertyCreate, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * CreateDeviceProperty
     * @param user
     * @param device
     * @param propertyCreate
     */
    public createPropertyWithHttpInfo(user: string, device: string, propertyCreate: PropertyCreate, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.createProperty(user, device, propertyCreate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPropertyWithHttpInfo(rsp)));
            }));
    }

    /**
     * CreateDeviceProperty
     * @param user
     * @param device
     * @param propertyCreate
     */
    public createProperty(user: string, device: string, propertyCreate: PropertyCreate, _options?: Configuration): Observable<any> {
        return this.createPropertyWithHttpInfo(user, device, propertyCreate, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * CreateDeviceToken
     * @param user
     * @param device
     * @param body
     */
    public createTokenWithHttpInfo(user: string, device: string, body: any, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.createToken(user, device, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTokenWithHttpInfo(rsp)));
            }));
    }

    /**
     * CreateDeviceToken
     * @param user
     * @param device
     * @param body
     */
    public createToken(user: string, device: string, body: any, _options?: Configuration): Observable<any> {
        return this.createTokenWithHttpInfo(user, device, body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * DeleteDeviceProperty
     * @param user
     * @param device
     * @param property
     */
    public deletePropertyWithHttpInfo(user: string, device: string, property: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.deleteProperty(user, device, property, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deletePropertyWithHttpInfo(rsp)));
            }));
    }

    /**
     * DeleteDeviceProperty
     * @param user
     * @param device
     * @param property
     */
    public deleteProperty(user: string, device: string, property: string, _options?: Configuration): Observable<any> {
        return this.deletePropertyWithHttpInfo(user, device, property, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * DeleteDeviceToken
     * @param user
     * @param device
     * @param token
     */
    public deleteTokenWithHttpInfo(user: string, device: string, token: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.deleteToken(user, device, token, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteTokenWithHttpInfo(rsp)));
            }));
    }

    /**
     * DeleteDeviceToken
     * @param user
     * @param device
     * @param token
     */
    public deleteToken(user: string, device: string, token: string, _options?: Configuration): Observable<any> {
        return this.deleteTokenWithHttpInfo(user, device, token, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * ListDevices
     * @param user
     */
    public listWithHttpInfo(user: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.list(user, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listWithHttpInfo(rsp)));
            }));
    }

    /**
     * ListDevices
     * @param user
     */
    public list(user: string, _options?: Configuration): Observable<any> {
        return this.listWithHttpInfo(user, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * ListDeviceBucketTags
     * @param user
     * @param device
     * @param bucket
     */
    public listBucketTagsWithHttpInfo(user: string, device: string, bucket: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.listBucketTags(user, device, bucket, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listBucketTagsWithHttpInfo(rsp)));
            }));
    }

    /**
     * ListDeviceBucketTags
     * @param user
     * @param device
     * @param bucket
     */
    public listBucketTags(user: string, device: string, bucket: string, _options?: Configuration): Observable<any> {
        return this.listBucketTagsWithHttpInfo(user, device, bucket, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * ListDeviceBuckets
     * @param user
     * @param device
     */
    public listBucketsWithHttpInfo(user: string, device: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.listBuckets(user, device, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listBucketsWithHttpInfo(rsp)));
            }));
    }

    /**
     * ListDeviceBuckets
     * @param user
     * @param device
     */
    public listBuckets(user: string, device: string, _options?: Configuration): Observable<any> {
        return this.listBucketsWithHttpInfo(user, device, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * ListDeviceProperties
     * @param user
     * @param device
     */
    public listPropertiesWithHttpInfo(user: string, device: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.listProperties(user, device, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listPropertiesWithHttpInfo(rsp)));
            }));
    }

    /**
     * ListDeviceProperties
     * @param user
     * @param device
     */
    public listProperties(user: string, device: string, _options?: Configuration): Observable<any> {
        return this.listPropertiesWithHttpInfo(user, device, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * ListDeviceServices
     * @param user
     * @param device
     */
    public listServicesWithHttpInfo(user: string, device: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.listServices(user, device, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listServicesWithHttpInfo(rsp)));
            }));
    }

    /**
     * ListDeviceServices
     * @param user
     * @param device
     */
    public listServices(user: string, device: string, _options?: Configuration): Observable<any> {
        return this.listServicesWithHttpInfo(user, device, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * ListDeviceTokens
     * @param user
     * @param device
     */
    public listTokensWithHttpInfo(user: string, device: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.listTokens(user, device, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listTokensWithHttpInfo(rsp)));
            }));
    }

    /**
     * ListDeviceTokens
     * @param user
     * @param device
     */
    public listTokens(user: string, device: string, _options?: Configuration): Observable<any> {
        return this.listTokensWithHttpInfo(user, device, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * UpdateDeviceProperty
     * @param user
     * @param device
     * @param property
     */
    public patchPropertyWithHttpInfo(user: string, device: string, property: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.patchProperty(user, device, property, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchPropertyWithHttpInfo(rsp)));
            }));
    }

    /**
     * UpdateDeviceProperty
     * @param user
     * @param device
     * @param property
     */
    public patchProperty(user: string, device: string, property: string, _options?: Configuration): Observable<any> {
        return this.patchPropertyWithHttpInfo(user, device, property, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * ReadDeviceBucket
     * @param version
     * @param user
     * @param device
     * @param bucket
     */
    public readBucketDataWithHttpInfo(version: string, user: string, device: string, bucket: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.readBucketData(version, user, device, bucket, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.readBucketDataWithHttpInfo(rsp)));
            }));
    }

    /**
     * ReadDeviceBucket
     * @param version
     * @param user
     * @param device
     * @param bucket
     */
    public readBucketData(version: string, user: string, device: string, bucket: string, _options?: Configuration): Observable<any> {
        return this.readBucketDataWithHttpInfo(version, user, device, bucket, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * ReadDeviceBucketTag
     * @param user
     * @param device
     * @param bucket
     * @param tag
     */
    public readBucketTagWithHttpInfo(user: string, device: string, bucket: string, tag: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.readBucketTag(user, device, bucket, tag, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.readBucketTagWithHttpInfo(rsp)));
            }));
    }

    /**
     * ReadDeviceBucketTag
     * @param user
     * @param device
     * @param bucket
     * @param tag
     */
    public readBucketTag(user: string, device: string, bucket: string, tag: string, _options?: Configuration): Observable<any> {
        return this.readBucketTagWithHttpInfo(user, device, bucket, tag, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * ReadDeviceCallbackConfig
     * @param user
     * @param device
     */
    public readCallbackConfigWithHttpInfo(user: string, device: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.readCallbackConfig(user, device, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.readCallbackConfigWithHttpInfo(rsp)));
            }));
    }

    /**
     * ReadDeviceCallbackConfig
     * @param user
     * @param device
     */
    public readCallbackConfig(user: string, device: string, _options?: Configuration): Observable<any> {
        return this.readCallbackConfigWithHttpInfo(user, device, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * ReadDeviceCallbackResponse
     * @param user
     * @param device
     */
    public readCallbackResponseDataWithHttpInfo(user: string, device: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.readCallbackResponseData(user, device, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.readCallbackResponseDataWithHttpInfo(rsp)));
            }));
    }

    /**
     * ReadDeviceCallbackResponse
     * @param user
     * @param device
     */
    public readCallbackResponseData(user: string, device: string, _options?: Configuration): Observable<any> {
        return this.readCallbackResponseDataWithHttpInfo(user, device, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * ReadDeviceStatistics
     * @param user
     */
    public readDevicesStatisticsWithHttpInfo(user: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.readDevicesStatistics(user, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.readDevicesStatisticsWithHttpInfo(rsp)));
            }));
    }

    /**
     * ReadDeviceStatistics
     * @param user
     */
    public readDevicesStatistics(user: string, _options?: Configuration): Observable<any> {
        return this.readDevicesStatisticsWithHttpInfo(user, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * ReadDeviceProperty
     * @param user
     * @param device
     * @param property
     */
    public readPropertyWithHttpInfo(user: string, device: string, property: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.readProperty(user, device, property, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.readPropertyWithHttpInfo(rsp)));
            }));
    }

    /**
     * ReadDeviceProperty
     * @param user
     * @param device
     * @param property
     */
    public readProperty(user: string, device: string, property: string, _options?: Configuration): Observable<any> {
        return this.readPropertyWithHttpInfo(user, device, property, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * ReadDeviceStatistics
     * @param user
     * @param device
     */
    public readStatisticsWithHttpInfo(user: string, device: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.readStatistics(user, device, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.readStatisticsWithHttpInfo(rsp)));
            }));
    }

    /**
     * ReadDeviceStatistics
     * @param user
     * @param device
     */
    public readStatistics(user: string, device: string, _options?: Configuration): Observable<any> {
        return this.readStatisticsWithHttpInfo(user, device, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * ReadDeviceStatus
     * @param user
     * @param device
     */
    public readStatusWithHttpInfo(user: string, device: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.readStatus(user, device, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.readStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * ReadDeviceStatus
     * @param user
     * @param device
     */
    public readStatus(user: string, device: string, _options?: Configuration): Observable<any> {
        return this.readStatusWithHttpInfo(user, device, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * DeleteDevice
     * @param user
     * @param device
     */
    public removeWithHttpInfo(user: string, device: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.remove(user, device, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeWithHttpInfo(rsp)));
            }));
    }

    /**
     * DeleteDevice
     * @param user
     * @param device
     */
    public remove(user: string, device: string, _options?: Configuration): Observable<any> {
        return this.removeWithHttpInfo(user, device, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * UpdateDevice
     * @param user
     * @param device
     * @param deviceUpdateRequest
     */
    public updateWithHttpInfo(user: string, device: string, deviceUpdateRequest: DeviceUpdateRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.update(user, device, deviceUpdateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateWithHttpInfo(rsp)));
            }));
    }

    /**
     * UpdateDevice
     * @param user
     * @param device
     * @param deviceUpdateRequest
     */
    public update(user: string, device: string, deviceUpdateRequest: DeviceUpdateRequest, _options?: Configuration): Observable<any> {
        return this.updateWithHttpInfo(user, device, deviceUpdateRequest, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * UpdateDeviceCallback
     * @param user
     * @param device
     * @param deviceUpdateCallbackRequest
     */
    public updateCallbackWithHttpInfo(user: string, device: string, deviceUpdateCallbackRequest: DeviceUpdateCallbackRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.updateCallback(user, device, deviceUpdateCallbackRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCallbackWithHttpInfo(rsp)));
            }));
    }

    /**
     * UpdateDeviceCallback
     * @param user
     * @param device
     * @param deviceUpdateCallbackRequest
     */
    public updateCallback(user: string, device: string, deviceUpdateCallbackRequest: DeviceUpdateCallbackRequest, _options?: Configuration): Observable<any> {
        return this.updateCallbackWithHttpInfo(user, device, deviceUpdateCallbackRequest, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * UpdateDeviceProjects
     * @param user
     * @param device
     * @param requestBody
     */
    public updateProjectsWithHttpInfo(user: string, device: string, requestBody: Array<string>, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.updateProjects(user, device, requestBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateProjectsWithHttpInfo(rsp)));
            }));
    }

    /**
     * UpdateDeviceProjects
     * @param user
     * @param device
     * @param requestBody
     */
    public updateProjects(user: string, device: string, requestBody: Array<string>, _options?: Configuration): Observable<any> {
        return this.updateProjectsWithHttpInfo(user, device, requestBody, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * UpdateDeviceProperty
     * @param user
     * @param device
     * @param property
     * @param propertyUpdate
     */
    public updatePropertyWithHttpInfo(user: string, device: string, property: string, propertyUpdate: PropertyUpdate, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.updateProperty(user, device, property, propertyUpdate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updatePropertyWithHttpInfo(rsp)));
            }));
    }

    /**
     * UpdateDeviceProperty
     * @param user
     * @param device
     * @param property
     * @param propertyUpdate
     */
    public updateProperty(user: string, device: string, property: string, propertyUpdate: PropertyUpdate, _options?: Configuration): Observable<any> {
        return this.updatePropertyWithHttpInfo(user, device, property, propertyUpdate, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * AccessDeviceResources
     * @param user
     * @param device
     * @param resource
     */
    public v1UsersUserDevicesDeviceResourceGetWithHttpInfo(user: string, device: string, resource: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1UsersUserDevicesDeviceResourceGet(user, device, resource, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersUserDevicesDeviceResourceGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * AccessDeviceResources
     * @param user
     * @param device
     * @param resource
     */
    public v1UsersUserDevicesDeviceResourceGet(user: string, device: string, resource: string, _options?: Configuration): Observable<any> {
        return this.v1UsersUserDevicesDeviceResourceGetWithHttpInfo(user, device, resource, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * AccessDeviceResources
     * @param user
     * @param device
     * @param resource
     * @param body
     */
    public v1UsersUserDevicesDeviceResourcePostWithHttpInfo(user: string, device: string, resource: string, body: any, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1UsersUserDevicesDeviceResourcePost(user, device, resource, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersUserDevicesDeviceResourcePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * AccessDeviceResources
     * @param user
     * @param device
     * @param resource
     * @param body
     */
    public v1UsersUserDevicesDeviceResourcePost(user: string, device: string, resource: string, body: any, _options?: Configuration): Observable<any> {
        return this.v1UsersUserDevicesDeviceResourcePostWithHttpInfo(user, device, resource, body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * ReadDeviceStatistics
     * @param user
     * @param device
     */
    public v1UsersUserDevicesDeviceStatsGetWithHttpInfo(user: string, device: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1UsersUserDevicesDeviceStatsGet(user, device, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersUserDevicesDeviceStatsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * ReadDeviceStatistics
     * @param user
     * @param device
     */
    public v1UsersUserDevicesDeviceStatsGet(user: string, device: string, _options?: Configuration): Observable<any> {
        return this.v1UsersUserDevicesDeviceStatsGetWithHttpInfo(user, device, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * AccessDeviceResources
     * @param user
     * @param device
     * @param resource
     */
    public v2UsersUserDevicesDeviceResourceGetWithHttpInfo(user: string, device: string, resource: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v2UsersUserDevicesDeviceResourceGet(user, device, resource, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2UsersUserDevicesDeviceResourceGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * AccessDeviceResources
     * @param user
     * @param device
     * @param resource
     */
    public v2UsersUserDevicesDeviceResourceGet(user: string, device: string, resource: string, _options?: Configuration): Observable<any> {
        return this.v2UsersUserDevicesDeviceResourceGetWithHttpInfo(user, device, resource, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * AccessDeviceResources
     * @param user
     * @param device
     * @param resource
     * @param body
     */
    public v2UsersUserDevicesDeviceResourcePostWithHttpInfo(user: string, device: string, resource: string, body: any, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v2UsersUserDevicesDeviceResourcePost(user, device, resource, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2UsersUserDevicesDeviceResourcePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * AccessDeviceResources
     * @param user
     * @param device
     * @param resource
     * @param body
     */
    public v2UsersUserDevicesDeviceResourcePost(user: string, device: string, resource: string, body: any, _options?: Configuration): Observable<any> {
        return this.v2UsersUserDevicesDeviceResourcePostWithHttpInfo(user, device, resource, body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { PluginsApiRequestFactory, PluginsApiResponseProcessor} from "../apis/PluginsApi.js";
export class ObservablePluginsApi {
    private requestFactory: PluginsApiRequestFactory;
    private responseProcessor: PluginsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PluginsApiRequestFactory,
        responseProcessor?: PluginsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PluginsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PluginsApiResponseProcessor();
    }

    /**
     * CallPluginEndpoint
     * @param user
     * @param plugin
     * @param path
     */
    public callPluginEndpointDeleteWithHttpInfo(user: string, plugin: string, path: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.callPluginEndpointDelete(user, plugin, path, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.callPluginEndpointDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * CallPluginEndpoint
     * @param user
     * @param plugin
     * @param path
     */
    public callPluginEndpointDelete(user: string, plugin: string, path: string, _options?: Configuration): Observable<any> {
        return this.callPluginEndpointDeleteWithHttpInfo(user, plugin, path, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * CallPluginEndpoint
     * @param user
     * @param plugin
     * @param path
     */
    public callPluginEndpointGetWithHttpInfo(user: string, plugin: string, path: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.callPluginEndpointGet(user, plugin, path, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.callPluginEndpointGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * CallPluginEndpoint
     * @param user
     * @param plugin
     * @param path
     */
    public callPluginEndpointGet(user: string, plugin: string, path: string, _options?: Configuration): Observable<any> {
        return this.callPluginEndpointGetWithHttpInfo(user, plugin, path, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * CallPluginEndpoint
     * @param user
     * @param plugin
     * @param path
     */
    public callPluginEndpointHeadWithHttpInfo(user: string, plugin: string, path: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.callPluginEndpointHead(user, plugin, path, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.callPluginEndpointHeadWithHttpInfo(rsp)));
            }));
    }

    /**
     * CallPluginEndpoint
     * @param user
     * @param plugin
     * @param path
     */
    public callPluginEndpointHead(user: string, plugin: string, path: string, _options?: Configuration): Observable<any> {
        return this.callPluginEndpointHeadWithHttpInfo(user, plugin, path, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * CallPluginEndpoint
     * @param user
     * @param plugin
     * @param path
     */
    public callPluginEndpointOptionsWithHttpInfo(user: string, plugin: string, path: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.callPluginEndpointOptions(user, plugin, path, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.callPluginEndpointOptionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * CallPluginEndpoint
     * @param user
     * @param plugin
     * @param path
     */
    public callPluginEndpointOptions(user: string, plugin: string, path: string, _options?: Configuration): Observable<any> {
        return this.callPluginEndpointOptionsWithHttpInfo(user, plugin, path, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * CallPluginEndpoint
     * @param user
     * @param plugin
     * @param path
     */
    public callPluginEndpointPatchWithHttpInfo(user: string, plugin: string, path: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.callPluginEndpointPatch(user, plugin, path, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.callPluginEndpointPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * CallPluginEndpoint
     * @param user
     * @param plugin
     * @param path
     */
    public callPluginEndpointPatch(user: string, plugin: string, path: string, _options?: Configuration): Observable<any> {
        return this.callPluginEndpointPatchWithHttpInfo(user, plugin, path, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * CallPluginEndpoint
     * @param user
     * @param plugin
     * @param path
     * @param body
     */
    public callPluginEndpointPostWithHttpInfo(user: string, plugin: string, path: string, body: any, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.callPluginEndpointPost(user, plugin, path, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.callPluginEndpointPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * CallPluginEndpoint
     * @param user
     * @param plugin
     * @param path
     * @param body
     */
    public callPluginEndpointPost(user: string, plugin: string, path: string, body: any, _options?: Configuration): Observable<any> {
        return this.callPluginEndpointPostWithHttpInfo(user, plugin, path, body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * CallPluginEndpoint
     * @param user
     * @param plugin
     * @param path
     * @param body
     */
    public callPluginEndpointPutWithHttpInfo(user: string, plugin: string, path: string, body: any, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.callPluginEndpointPut(user, plugin, path, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.callPluginEndpointPutWithHttpInfo(rsp)));
            }));
    }

    /**
     * CallPluginEndpoint
     * @param user
     * @param plugin
     * @param path
     * @param body
     */
    public callPluginEndpointPut(user: string, plugin: string, path: string, body: any, _options?: Configuration): Observable<any> {
        return this.callPluginEndpointPutWithHttpInfo(user, plugin, path, body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * CallPluginEndpoint
     * @param user
     * @param plugin
     * @param path
     */
    public callPluginEndpointTraceWithHttpInfo(user: string, plugin: string, path: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.callPluginEndpointTrace(user, plugin, path, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.callPluginEndpointTraceWithHttpInfo(rsp)));
            }));
    }

    /**
     * CallPluginEndpoint
     * @param user
     * @param plugin
     * @param path
     */
    public callPluginEndpointTrace(user: string, plugin: string, path: string, _options?: Configuration): Observable<any> {
        return this.callPluginEndpointTraceWithHttpInfo(user, plugin, path, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * ClonePluginProperty
     * @param user
     * @param plugin
     * @param property
     * @param pluginClonePropertyRequest
     */
    public clonePropertyWithHttpInfo(user: string, plugin: string, property: string, pluginClonePropertyRequest: PluginClonePropertyRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.cloneProperty(user, plugin, property, pluginClonePropertyRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.clonePropertyWithHttpInfo(rsp)));
            }));
    }

    /**
     * ClonePluginProperty
     * @param user
     * @param plugin
     * @param property
     * @param pluginClonePropertyRequest
     */
    public cloneProperty(user: string, plugin: string, property: string, pluginClonePropertyRequest: PluginClonePropertyRequest, _options?: Configuration): Observable<any> {
        return this.clonePropertyWithHttpInfo(user, plugin, property, pluginClonePropertyRequest, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * CreatePluginProperty
     * @param user
     * @param plugin
     * @param propertyCreate
     */
    public createPropertyWithHttpInfo(user: string, plugin: string, propertyCreate: PropertyCreate, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.createProperty(user, plugin, propertyCreate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPropertyWithHttpInfo(rsp)));
            }));
    }

    /**
     * CreatePluginProperty
     * @param user
     * @param plugin
     * @param propertyCreate
     */
    public createProperty(user: string, plugin: string, propertyCreate: PropertyCreate, _options?: Configuration): Observable<any> {
        return this.createPropertyWithHttpInfo(user, plugin, propertyCreate, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * DeletePluginProperty
     * @param user
     * @param plugin
     * @param property
     */
    public deletePropertyWithHttpInfo(user: string, plugin: string, property: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.deleteProperty(user, plugin, property, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deletePropertyWithHttpInfo(rsp)));
            }));
    }

    /**
     * DeletePluginProperty
     * @param user
     * @param plugin
     * @param property
     */
    public deleteProperty(user: string, plugin: string, property: string, _options?: Configuration): Observable<any> {
        return this.deletePropertyWithHttpInfo(user, plugin, property, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * ListPlugins
     * @param user
     */
    public listWithHttpInfo(user: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.list(user, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listWithHttpInfo(rsp)));
            }));
    }

    /**
     * ListPlugins
     * @param user
     */
    public list(user: string, _options?: Configuration): Observable<any> {
        return this.listWithHttpInfo(user, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * ListPluginProperties
     * @param user
     * @param plugin
     */
    public listPropertiesWithHttpInfo(user: string, plugin: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.listProperties(user, plugin, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listPropertiesWithHttpInfo(rsp)));
            }));
    }

    /**
     * ListPluginProperties
     * @param user
     * @param plugin
     */
    public listProperties(user: string, plugin: string, _options?: Configuration): Observable<any> {
        return this.listPropertiesWithHttpInfo(user, plugin, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * ManagePluginState
     * @param user
     * @param plugin
     * @param body
     */
    public manageStateWithHttpInfo(user: string, plugin: string, body: any, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.manageState(user, plugin, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.manageStateWithHttpInfo(rsp)));
            }));
    }

    /**
     * ManagePluginState
     * @param user
     * @param plugin
     * @param body
     */
    public manageState(user: string, plugin: string, body: any, _options?: Configuration): Observable<any> {
        return this.manageStateWithHttpInfo(user, plugin, body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * UpdatePluginProperty
     * @param user
     * @param plugin
     * @param property
     */
    public patchPropertyWithHttpInfo(user: string, plugin: string, property: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.patchProperty(user, plugin, property, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchPropertyWithHttpInfo(rsp)));
            }));
    }

    /**
     * UpdatePluginProperty
     * @param user
     * @param plugin
     * @param property
     */
    public patchProperty(user: string, plugin: string, property: string, _options?: Configuration): Observable<any> {
        return this.patchPropertyWithHttpInfo(user, plugin, property, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * ReadPluginFiles
     * @param user
     * @param plugin
     * @param file
     */
    public readFilesWithHttpInfo(user: string, plugin: string, file: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.readFiles(user, plugin, file, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.readFilesWithHttpInfo(rsp)));
            }));
    }

    /**
     * ReadPluginFiles
     * @param user
     * @param plugin
     * @param file
     */
    public readFiles(user: string, plugin: string, file: string, _options?: Configuration): Observable<any> {
        return this.readFilesWithHttpInfo(user, plugin, file, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * ReadPluginInfo
     * @param user
     * @param plugin
     */
    public readInfoWithHttpInfo(user: string, plugin: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.readInfo(user, plugin, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.readInfoWithHttpInfo(rsp)));
            }));
    }

    /**
     * ReadPluginInfo
     * @param user
     * @param plugin
     */
    public readInfo(user: string, plugin: string, _options?: Configuration): Observable<any> {
        return this.readInfoWithHttpInfo(user, plugin, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * ReadPluginLogs
     * @param user
     * @param plugin
     */
    public readLogsWithHttpInfo(user: string, plugin: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.readLogs(user, plugin, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.readLogsWithHttpInfo(rsp)));
            }));
    }

    /**
     * ReadPluginLogs
     * @param user
     * @param plugin
     */
    public readLogs(user: string, plugin: string, _options?: Configuration): Observable<any> {
        return this.readLogsWithHttpInfo(user, plugin, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * ReadPluginProperty
     * @param user
     * @param plugin
     * @param property
     */
    public readPropertyWithHttpInfo(user: string, plugin: string, property: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.readProperty(user, plugin, property, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.readPropertyWithHttpInfo(rsp)));
            }));
    }

    /**
     * ReadPluginProperty
     * @param user
     * @param plugin
     * @param property
     */
    public readProperty(user: string, plugin: string, property: string, _options?: Configuration): Observable<any> {
        return this.readPropertyWithHttpInfo(user, plugin, property, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * RunPluginCommand
     * @param user
     * @param plugin
     */
    public runCommandTerminalWithHttpInfo(user: string, plugin: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.runCommandTerminal(user, plugin, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.runCommandTerminalWithHttpInfo(rsp)));
            }));
    }

    /**
     * RunPluginCommand
     * @param user
     * @param plugin
     */
    public runCommandTerminal(user: string, plugin: string, _options?: Configuration): Observable<any> {
        return this.runCommandTerminalWithHttpInfo(user, plugin, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * RunPluginShell
     * @param user
     * @param plugin
     */
    public runShellWithHttpInfo(user: string, plugin: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.runShell(user, plugin, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.runShellWithHttpInfo(rsp)));
            }));
    }

    /**
     * RunPluginShell
     * @param user
     * @param plugin
     */
    public runShell(user: string, plugin: string, _options?: Configuration): Observable<any> {
        return this.runShellWithHttpInfo(user, plugin, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * UpdatePluginProperty
     * @param user
     * @param plugin
     * @param property
     * @param propertyUpdate
     */
    public updatePropertyWithHttpInfo(user: string, plugin: string, property: string, propertyUpdate: PropertyUpdate, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.updateProperty(user, plugin, property, propertyUpdate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updatePropertyWithHttpInfo(rsp)));
            }));
    }

    /**
     * UpdatePluginProperty
     * @param user
     * @param plugin
     * @param property
     * @param propertyUpdate
     */
    public updateProperty(user: string, plugin: string, property: string, propertyUpdate: PropertyUpdate, _options?: Configuration): Observable<any> {
        return this.updatePropertyWithHttpInfo(user, plugin, property, propertyUpdate, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { ProductsApiRequestFactory, ProductsApiResponseProcessor} from "../apis/ProductsApi.js";
export class ObservableProductsApi {
    private requestFactory: ProductsApiRequestFactory;
    private responseProcessor: ProductsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductsApiRequestFactory,
        responseProcessor?: ProductsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProductsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProductsApiResponseProcessor();
    }

    /**
     * CloneProduct
     * @param user
     * @param product
     * @param productCloneRequest
     */
    public cloneWithHttpInfo(user: string, product: string, productCloneRequest: ProductCloneRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.clone(user, product, productCloneRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloneWithHttpInfo(rsp)));
            }));
    }

    /**
     * CloneProduct
     * @param user
     * @param product
     * @param productCloneRequest
     */
    public clone(user: string, product: string, productCloneRequest: ProductCloneRequest, _options?: Configuration): Observable<any> {
        return this.cloneWithHttpInfo(user, product, productCloneRequest, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * CloneProductProperty
     * @param user
     * @param product
     * @param property
     * @param pluginClonePropertyRequest
     */
    public clonePropertyWithHttpInfo(user: string, product: string, property: string, pluginClonePropertyRequest: PluginClonePropertyRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.cloneProperty(user, product, property, pluginClonePropertyRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.clonePropertyWithHttpInfo(rsp)));
            }));
    }

    /**
     * CloneProductProperty
     * @param user
     * @param product
     * @param property
     * @param pluginClonePropertyRequest
     */
    public cloneProperty(user: string, product: string, property: string, pluginClonePropertyRequest: PluginClonePropertyRequest, _options?: Configuration): Observable<any> {
        return this.clonePropertyWithHttpInfo(user, product, property, pluginClonePropertyRequest, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * CreateProduct
     * @param user
     * @param productCreateRequest
     */
    public createWithHttpInfo(user: string, productCreateRequest: ProductCreateRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.create(user, productCreateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createWithHttpInfo(rsp)));
            }));
    }

    /**
     * CreateProduct
     * @param user
     * @param productCreateRequest
     */
    public create(user: string, productCreateRequest: ProductCreateRequest, _options?: Configuration): Observable<any> {
        return this.createWithHttpInfo(user, productCreateRequest, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * CreateProductFirmware
     * @param user
     * @param product
     * @param productCreateFirmwareRequest
     */
    public createFirmwareWithHttpInfo(user: string, product: string, productCreateFirmwareRequest: ProductCreateFirmwareRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.createFirmware(user, product, productCreateFirmwareRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createFirmwareWithHttpInfo(rsp)));
            }));
    }

    /**
     * CreateProductFirmware
     * @param user
     * @param product
     * @param productCreateFirmwareRequest
     */
    public createFirmware(user: string, product: string, productCreateFirmwareRequest: ProductCreateFirmwareRequest, _options?: Configuration): Observable<any> {
        return this.createFirmwareWithHttpInfo(user, product, productCreateFirmwareRequest, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * CreateProductProperty
     * @param user
     * @param product
     * @param propertyCreate
     */
    public createPropertyWithHttpInfo(user: string, product: string, propertyCreate: PropertyCreate, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.createProperty(user, product, propertyCreate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPropertyWithHttpInfo(rsp)));
            }));
    }

    /**
     * CreateProductProperty
     * @param user
     * @param product
     * @param propertyCreate
     */
    public createProperty(user: string, product: string, propertyCreate: PropertyCreate, _options?: Configuration): Observable<any> {
        return this.createPropertyWithHttpInfo(user, product, propertyCreate, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * DeleteProductFirmware
     * @param user
     * @param product
     * @param firmware
     * @param firmwareVersion
     */
    public deleteFirmwareWithHttpInfo(user: string, product: string, firmware: string, firmwareVersion: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.deleteFirmware(user, product, firmware, firmwareVersion, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteFirmwareWithHttpInfo(rsp)));
            }));
    }

    /**
     * DeleteProductFirmware
     * @param user
     * @param product
     * @param firmware
     * @param firmwareVersion
     */
    public deleteFirmware(user: string, product: string, firmware: string, firmwareVersion: string, _options?: Configuration): Observable<any> {
        return this.deleteFirmwareWithHttpInfo(user, product, firmware, firmwareVersion, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * DeleteProductProperty
     * @param user
     * @param product
     * @param property
     */
    public deletePropertyWithHttpInfo(user: string, product: string, property: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.deleteProperty(user, product, property, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deletePropertyWithHttpInfo(rsp)));
            }));
    }

    /**
     * DeleteProductProperty
     * @param user
     * @param product
     * @param property
     */
    public deleteProperty(user: string, product: string, property: string, _options?: Configuration): Observable<any> {
        return this.deletePropertyWithHttpInfo(user, product, property, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * ExportProduct
     * @param user
     * @param product
     */
    public exportDataWithHttpInfo(user: string, product: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.exportData(user, product, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.exportDataWithHttpInfo(rsp)));
            }));
    }

    /**
     * ExportProduct
     * @param user
     * @param product
     */
    public exportData(user: string, product: string, _options?: Configuration): Observable<any> {
        return this.exportDataWithHttpInfo(user, product, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * FlashProductFirmware
     * @param user
     * @param product
     * @param firmware
     * @param firmwareVersion
     */
    public flashFirmwareWithHttpInfo(user: string, product: string, firmware: string, firmwareVersion: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.flashFirmware(user, product, firmware, firmwareVersion, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.flashFirmwareWithHttpInfo(rsp)));
            }));
    }

    /**
     * FlashProductFirmware
     * @param user
     * @param product
     * @param firmware
     * @param firmwareVersion
     */
    public flashFirmware(user: string, product: string, firmware: string, firmwareVersion: string, _options?: Configuration): Observable<any> {
        return this.flashFirmwareWithHttpInfo(user, product, firmware, firmwareVersion, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * ListProducts
     * @param user
     */
    public listWithHttpInfo(user: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.list(user, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listWithHttpInfo(rsp)));
            }));
    }

    /**
     * ListProducts
     * @param user
     */
    public list(user: string, _options?: Configuration): Observable<any> {
        return this.listWithHttpInfo(user, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * ListProductFirmwares
     * @param user
     * @param product
     */
    public listFirmwaresWithHttpInfo(user: string, product: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.listFirmwares(user, product, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listFirmwaresWithHttpInfo(rsp)));
            }));
    }

    /**
     * ListProductFirmwares
     * @param user
     * @param product
     */
    public listFirmwares(user: string, product: string, _options?: Configuration): Observable<any> {
        return this.listFirmwaresWithHttpInfo(user, product, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * ListProductProperties
     * @param user
     * @param product
     */
    public listPropertiesWithHttpInfo(user: string, product: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.listProperties(user, product, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listPropertiesWithHttpInfo(rsp)));
            }));
    }

    /**
     * ListProductProperties
     * @param user
     * @param product
     */
    public listProperties(user: string, product: string, _options?: Configuration): Observable<any> {
        return this.listPropertiesWithHttpInfo(user, product, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * UpdateProductProperty
     * @param user
     * @param product
     * @param property
     */
    public patchPropertyWithHttpInfo(user: string, product: string, property: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.patchProperty(user, product, property, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchPropertyWithHttpInfo(rsp)));
            }));
    }

    /**
     * UpdateProductProperty
     * @param user
     * @param product
     * @param property
     */
    public patchProperty(user: string, product: string, property: string, _options?: Configuration): Observable<any> {
        return this.patchPropertyWithHttpInfo(user, product, property, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * ReadProductConfig
     * @param user
     * @param product
     */
    public readConfigWithHttpInfo(user: string, product: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.readConfig(user, product, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.readConfigWithHttpInfo(rsp)));
            }));
    }

    /**
     * ReadProductConfig
     * @param user
     * @param product
     */
    public readConfig(user: string, product: string, _options?: Configuration): Observable<any> {
        return this.readConfigWithHttpInfo(user, product, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * ReadProductFirmwareConfig
     * @param user
     * @param product
     * @param firmware
     * @param firmwareVersion
     */
    public readFirmwareConfigWithHttpInfo(user: string, product: string, firmware: string, firmwareVersion: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.readFirmwareConfig(user, product, firmware, firmwareVersion, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.readFirmwareConfigWithHttpInfo(rsp)));
            }));
    }

    /**
     * ReadProductFirmwareConfig
     * @param user
     * @param product
     * @param firmware
     * @param firmwareVersion
     */
    public readFirmwareConfig(user: string, product: string, firmware: string, firmwareVersion: string, _options?: Configuration): Observable<any> {
        return this.readFirmwareConfigWithHttpInfo(user, product, firmware, firmwareVersion, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * ReadProductProfile
     * @param user
     * @param product
     * @param resource
     */
    public readProfileWithHttpInfo(user: string, product: string, resource: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.readProfile(user, product, resource, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.readProfileWithHttpInfo(rsp)));
            }));
    }

    /**
     * ReadProductProfile
     * @param user
     * @param product
     * @param resource
     */
    public readProfile(user: string, product: string, resource: string, _options?: Configuration): Observable<any> {
        return this.readProfileWithHttpInfo(user, product, resource, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * ReadProductProperty
     * @param user
     * @param product
     * @param property
     */
    public readPropertyWithHttpInfo(user: string, product: string, property: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.readProperty(user, product, property, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.readPropertyWithHttpInfo(rsp)));
            }));
    }

    /**
     * ReadProductProperty
     * @param user
     * @param product
     * @param property
     */
    public readProperty(user: string, product: string, property: string, _options?: Configuration): Observable<any> {
        return this.readPropertyWithHttpInfo(user, product, property, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * ReadProductServices
     * @param user
     * @param product
     * @param resource
     */
    public readServicesWithHttpInfo(user: string, product: string, resource: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.readServices(user, product, resource, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.readServicesWithHttpInfo(rsp)));
            }));
    }

    /**
     * ReadProductServices
     * @param user
     * @param product
     * @param resource
     */
    public readServices(user: string, product: string, resource: string, _options?: Configuration): Observable<any> {
        return this.readServicesWithHttpInfo(user, product, resource, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * DeleteProduct
     * @param user
     * @param product
     */
    public removeWithHttpInfo(user: string, product: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.remove(user, product, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeWithHttpInfo(rsp)));
            }));
    }

    /**
     * DeleteProduct
     * @param user
     * @param product
     */
    public remove(user: string, product: string, _options?: Configuration): Observable<any> {
        return this.removeWithHttpInfo(user, product, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * UpdateProduct
     * @param user
     * @param product
     * @param productUpdateRequest
     */
    public updateWithHttpInfo(user: string, product: string, productUpdateRequest: ProductUpdateRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.update(user, product, productUpdateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateWithHttpInfo(rsp)));
            }));
    }

    /**
     * UpdateProduct
     * @param user
     * @param product
     * @param productUpdateRequest
     */
    public update(user: string, product: string, productUpdateRequest: ProductUpdateRequest, _options?: Configuration): Observable<any> {
        return this.updateWithHttpInfo(user, product, productUpdateRequest, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * UpdateProductFirmware
     * @param user
     * @param product
     * @param firmware
     * @param firmwareVersion
     * @param body
     */
    public updateFirmwareWithHttpInfo(user: string, product: string, firmware: string, firmwareVersion: string, body: any, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.updateFirmware(user, product, firmware, firmwareVersion, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateFirmwareWithHttpInfo(rsp)));
            }));
    }

    /**
     * UpdateProductFirmware
     * @param user
     * @param product
     * @param firmware
     * @param firmwareVersion
     * @param body
     */
    public updateFirmware(user: string, product: string, firmware: string, firmwareVersion: string, body: any, _options?: Configuration): Observable<any> {
        return this.updateFirmwareWithHttpInfo(user, product, firmware, firmwareVersion, body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * UpdateProductFirmware
     * @param user
     * @param product
     * @param firmware
     * @param firmwareVersion
     */
    public updateFirmwareStreamWithHttpInfo(user: string, product: string, firmware: string, firmwareVersion: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.updateFirmwareStream(user, product, firmware, firmwareVersion, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateFirmwareStreamWithHttpInfo(rsp)));
            }));
    }

    /**
     * UpdateProductFirmware
     * @param user
     * @param product
     * @param firmware
     * @param firmwareVersion
     */
    public updateFirmwareStream(user: string, product: string, firmware: string, firmwareVersion: string, _options?: Configuration): Observable<any> {
        return this.updateFirmwareStreamWithHttpInfo(user, product, firmware, firmwareVersion, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * UpdateProductFirmware
     * @param user
     * @param product
     * @param firmware
     * @param firmwareVersion
     */
    public updateFirmwareToolchainWithHttpInfo(user: string, product: string, firmware: string, firmwareVersion: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.updateFirmwareToolchain(user, product, firmware, firmwareVersion, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateFirmwareToolchainWithHttpInfo(rsp)));
            }));
    }

    /**
     * UpdateProductFirmware
     * @param user
     * @param product
     * @param firmware
     * @param firmwareVersion
     */
    public updateFirmwareToolchain(user: string, product: string, firmware: string, firmwareVersion: string, _options?: Configuration): Observable<any> {
        return this.updateFirmwareToolchainWithHttpInfo(user, product, firmware, firmwareVersion, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * UpdateProductProfile
     * @param user
     * @param product
     * @param resource
     * @param body
     */
    public updateProfileWithHttpInfo(user: string, product: string, resource: string, body: any, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.updateProfile(user, product, resource, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateProfileWithHttpInfo(rsp)));
            }));
    }

    /**
     * UpdateProductProfile
     * @param user
     * @param product
     * @param resource
     * @param body
     */
    public updateProfile(user: string, product: string, resource: string, body: any, _options?: Configuration): Observable<any> {
        return this.updateProfileWithHttpInfo(user, product, resource, body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * UpdateProductProfile
     * @param user
     * @param product
     * @param body
     */
    public updateProfileCodeWithHttpInfo(user: string, product: string, body: any, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.updateProfileCode(user, product, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateProfileCodeWithHttpInfo(rsp)));
            }));
    }

    /**
     * UpdateProductProfile
     * @param user
     * @param product
     * @param body
     */
    public updateProfileCode(user: string, product: string, body: any, _options?: Configuration): Observable<any> {
        return this.updateProfileCodeWithHttpInfo(user, product, body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * UpdateProductProjects
     * @param user
     * @param product
     * @param requestBody
     */
    public updateProjectsWithHttpInfo(user: string, product: string, requestBody: Array<string>, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.updateProjects(user, product, requestBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateProjectsWithHttpInfo(rsp)));
            }));
    }

    /**
     * UpdateProductProjects
     * @param user
     * @param product
     * @param requestBody
     */
    public updateProjects(user: string, product: string, requestBody: Array<string>, _options?: Configuration): Observable<any> {
        return this.updateProjectsWithHttpInfo(user, product, requestBody, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * UpdateProductProperty
     * @param user
     * @param product
     * @param property
     * @param propertyUpdate
     */
    public updatePropertyWithHttpInfo(user: string, product: string, property: string, propertyUpdate: PropertyUpdate, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.updateProperty(user, product, property, propertyUpdate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updatePropertyWithHttpInfo(rsp)));
            }));
    }

    /**
     * UpdateProductProperty
     * @param user
     * @param product
     * @param property
     * @param propertyUpdate
     */
    public updateProperty(user: string, product: string, property: string, propertyUpdate: PropertyUpdate, _options?: Configuration): Observable<any> {
        return this.updatePropertyWithHttpInfo(user, product, property, propertyUpdate, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * UpdateProductServices
     * @param user
     * @param product
     * @param resource
     * @param body
     */
    public updateServicesWithHttpInfo(user: string, product: string, resource: string, body: any, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.updateServices(user, product, resource, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateServicesWithHttpInfo(rsp)));
            }));
    }

    /**
     * UpdateProductServices
     * @param user
     * @param product
     * @param resource
     * @param body
     */
    public updateServices(user: string, product: string, resource: string, body: any, _options?: Configuration): Observable<any> {
        return this.updateServicesWithHttpInfo(user, product, resource, body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}
