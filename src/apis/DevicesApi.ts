// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS, HTTP_ERROR_RESPONSES} from './baseapi.js';
import {Configuration} from '../configuration.js';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.js';
import  FormData from "form-data";
import { URLSearchParams } from 'url';
import {ObjectSerializer} from '../models/ObjectSerializer.js';
import {ApiException} from './exception.js';
import {canConsumeForm, isCodeInRange} from '../util.js';
import {SecurityAuthentication} from '../auth/auth.js';


import { DeviceCloneRequest } from '../models/DeviceCloneRequest.js';
import { DeviceUpdateCallbackRequest } from '../models/DeviceUpdateCallbackRequest.js';
import { DeviceUpdateRequest } from '../models/DeviceUpdateRequest.js';
import { PluginClonePropertyRequest } from '../models/PluginClonePropertyRequest.js';
import { PropertyCreate } from '../models/PropertyCreate.js';
import { PropertyUpdate } from '../models/PropertyUpdate.js';

/**
 * no description
 */
export class DevicesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * AccessDeviceResources
     * @param user 
     * @param device 
     * @param resource 
     * @param body 
     */
    public async accessInputResources(user: string, device: string, resource: string, body: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("DevicesApi", "accessInputResources", "user");
        }


        // verify required parameter 'device' is not null or undefined
        if (device === null || device === undefined) {
            throw new RequiredError("DevicesApi", "accessInputResources", "device");
        }


        // verify required parameter 'resource' is not null or undefined
        if (resource === null || resource === undefined) {
            throw new RequiredError("DevicesApi", "accessInputResources", "resource");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("DevicesApi", "accessInputResources", "body");
        }


        // Path Params
        const localVarPath = '/v3/users/{user}/devices/{device}/resources/{resource}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'device' + '}', encodeURIComponent(String(device)))
            .replace('{' + 'resource' + '}', encodeURIComponent(String(resource)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "any", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * AccessDeviceResources
     * @param user 
     * @param device 
     * @param resource 
     */
    public async accessOutputResources(user: string, device: string, resource: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("DevicesApi", "accessOutputResources", "user");
        }


        // verify required parameter 'device' is not null or undefined
        if (device === null || device === undefined) {
            throw new RequiredError("DevicesApi", "accessOutputResources", "device");
        }


        // verify required parameter 'resource' is not null or undefined
        if (resource === null || resource === undefined) {
            throw new RequiredError("DevicesApi", "accessOutputResources", "resource");
        }


        // Path Params
        const localVarPath = '/v3/users/{user}/devices/{device}/resources/{resource}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'device' + '}', encodeURIComponent(String(device)))
            .replace('{' + 'resource' + '}', encodeURIComponent(String(resource)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * AccessDeviceResources
     * @param user 
     * @param device 
     */
    public async accessResources(user: string, device: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("DevicesApi", "accessResources", "user");
        }


        // verify required parameter 'device' is not null or undefined
        if (device === null || device === undefined) {
            throw new RequiredError("DevicesApi", "accessResources", "device");
        }


        // Path Params
        const localVarPath = '/v3/users/{user}/devices/{device}/resources'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'device' + '}', encodeURIComponent(String(device)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * AccessDeviceWebServices
     * @param user 
     * @param device 
     * @param service 
     */
    public async accessWebServices(user: string, device: string, service: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("DevicesApi", "accessWebServices", "user");
        }


        // verify required parameter 'device' is not null or undefined
        if (device === null || device === undefined) {
            throw new RequiredError("DevicesApi", "accessWebServices", "device");
        }


        // verify required parameter 'service' is not null or undefined
        if (service === null || service === undefined) {
            throw new RequiredError("DevicesApi", "accessWebServices", "service");
        }


        // Path Params
        const localVarPath = '/v3/users/{user}/devices/{device}/services/webs/{service}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'device' + '}', encodeURIComponent(String(device)))
            .replace('{' + 'service' + '}', encodeURIComponent(String(service)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * CallDeviceCallback
     * @param user 
     * @param device 
     * @param body 
     */
    public async callCallbackData(user: string, device: string, body: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("DevicesApi", "callCallbackData", "user");
        }


        // verify required parameter 'device' is not null or undefined
        if (device === null || device === undefined) {
            throw new RequiredError("DevicesApi", "callCallbackData", "device");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("DevicesApi", "callCallbackData", "body");
        }


        // Path Params
        const localVarPath = '/v3/users/{user}/devices/{device}/callback/data'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'device' + '}', encodeURIComponent(String(device)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "any", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * CloneDevice
     * @param user 
     * @param device 
     * @param deviceCloneRequest 
     */
    public async clone(user: string, device: string, deviceCloneRequest: DeviceCloneRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("DevicesApi", "clone", "user");
        }


        // verify required parameter 'device' is not null or undefined
        if (device === null || device === undefined) {
            throw new RequiredError("DevicesApi", "clone", "device");
        }


        // verify required parameter 'deviceCloneRequest' is not null or undefined
        if (deviceCloneRequest === null || deviceCloneRequest === undefined) {
            throw new RequiredError("DevicesApi", "clone", "deviceCloneRequest");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/devices/{device}/clone'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'device' + '}', encodeURIComponent(String(device)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(deviceCloneRequest, "DeviceCloneRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * CloneDeviceProperty
     * @param user 
     * @param device 
     * @param property 
     * @param pluginClonePropertyRequest 
     */
    public async cloneProperty(user: string, device: string, property: string, pluginClonePropertyRequest: PluginClonePropertyRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("DevicesApi", "cloneProperty", "user");
        }


        // verify required parameter 'device' is not null or undefined
        if (device === null || device === undefined) {
            throw new RequiredError("DevicesApi", "cloneProperty", "device");
        }


        // verify required parameter 'property' is not null or undefined
        if (property === null || property === undefined) {
            throw new RequiredError("DevicesApi", "cloneProperty", "property");
        }


        // verify required parameter 'pluginClonePropertyRequest' is not null or undefined
        if (pluginClonePropertyRequest === null || pluginClonePropertyRequest === undefined) {
            throw new RequiredError("DevicesApi", "cloneProperty", "pluginClonePropertyRequest");
        }


        // Path Params
        const localVarPath = '/v3/users/{user}/devices/{device}/properties/{property}/clone'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'device' + '}', encodeURIComponent(String(device)))
            .replace('{' + 'property' + '}', encodeURIComponent(String(property)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(pluginClonePropertyRequest, "PluginClonePropertyRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * CreateDevice
     * @param user 
     * @param propertyCreate 
     */
    public async create(user: string, propertyCreate: PropertyCreate, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("DevicesApi", "create", "user");
        }


        // verify required parameter 'propertyCreate' is not null or undefined
        if (propertyCreate === null || propertyCreate === undefined) {
            throw new RequiredError("DevicesApi", "create", "propertyCreate");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/devices'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(propertyCreate, "PropertyCreate", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * CreateDeviceProperty
     * @param user 
     * @param device 
     * @param propertyCreate 
     */
    public async createProperty(user: string, device: string, propertyCreate: PropertyCreate, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("DevicesApi", "createProperty", "user");
        }


        // verify required parameter 'device' is not null or undefined
        if (device === null || device === undefined) {
            throw new RequiredError("DevicesApi", "createProperty", "device");
        }


        // verify required parameter 'propertyCreate' is not null or undefined
        if (propertyCreate === null || propertyCreate === undefined) {
            throw new RequiredError("DevicesApi", "createProperty", "propertyCreate");
        }


        // Path Params
        const localVarPath = '/v3/users/{user}/devices/{device}/properties'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'device' + '}', encodeURIComponent(String(device)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(propertyCreate, "PropertyCreate", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * CreateDeviceToken
     * @param user 
     * @param device 
     * @param body 
     */
    public async createToken(user: string, device: string, body: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("DevicesApi", "createToken", "user");
        }


        // verify required parameter 'device' is not null or undefined
        if (device === null || device === undefined) {
            throw new RequiredError("DevicesApi", "createToken", "device");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("DevicesApi", "createToken", "body");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/devices/{device}/tokens'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'device' + '}', encodeURIComponent(String(device)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "any", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * DeleteDeviceProperty
     * @param user 
     * @param device 
     * @param property 
     */
    public async deleteProperty(user: string, device: string, property: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("DevicesApi", "deleteProperty", "user");
        }


        // verify required parameter 'device' is not null or undefined
        if (device === null || device === undefined) {
            throw new RequiredError("DevicesApi", "deleteProperty", "device");
        }


        // verify required parameter 'property' is not null or undefined
        if (property === null || property === undefined) {
            throw new RequiredError("DevicesApi", "deleteProperty", "property");
        }


        // Path Params
        const localVarPath = '/v3/users/{user}/devices/{device}/properties/{property}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'device' + '}', encodeURIComponent(String(device)))
            .replace('{' + 'property' + '}', encodeURIComponent(String(property)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * DeleteDeviceToken
     * @param user 
     * @param device 
     * @param token 
     */
    public async deleteToken(user: string, device: string, token: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("DevicesApi", "deleteToken", "user");
        }


        // verify required parameter 'device' is not null or undefined
        if (device === null || device === undefined) {
            throw new RequiredError("DevicesApi", "deleteToken", "device");
        }


        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new RequiredError("DevicesApi", "deleteToken", "token");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/devices/{device}/tokens/{token}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'device' + '}', encodeURIComponent(String(device)))
            .replace('{' + 'token' + '}', encodeURIComponent(String(token)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ListDevices
     * @param user 
     */
    public async list(user: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("DevicesApi", "list", "user");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/devices'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ListDeviceBucketTags
     * @param user 
     * @param device 
     * @param bucket 
     */
    public async listBucketTags(user: string, device: string, bucket: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("DevicesApi", "listBucketTags", "user");
        }


        // verify required parameter 'device' is not null or undefined
        if (device === null || device === undefined) {
            throw new RequiredError("DevicesApi", "listBucketTags", "device");
        }


        // verify required parameter 'bucket' is not null or undefined
        if (bucket === null || bucket === undefined) {
            throw new RequiredError("DevicesApi", "listBucketTags", "bucket");
        }


        // Path Params
        const localVarPath = '/v3/users/{user}/devices/{device}/buckets/{bucket}/tags'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'device' + '}', encodeURIComponent(String(device)))
            .replace('{' + 'bucket' + '}', encodeURIComponent(String(bucket)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ListDeviceBuckets
     * @param user 
     * @param device 
     */
    public async listBuckets(user: string, device: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("DevicesApi", "listBuckets", "user");
        }


        // verify required parameter 'device' is not null or undefined
        if (device === null || device === undefined) {
            throw new RequiredError("DevicesApi", "listBuckets", "device");
        }


        // Path Params
        const localVarPath = '/v3/users/{user}/devices/{device}/buckets'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'device' + '}', encodeURIComponent(String(device)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ListDeviceProperties
     * @param user 
     * @param device 
     */
    public async listProperties(user: string, device: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("DevicesApi", "listProperties", "user");
        }


        // verify required parameter 'device' is not null or undefined
        if (device === null || device === undefined) {
            throw new RequiredError("DevicesApi", "listProperties", "device");
        }


        // Path Params
        const localVarPath = '/v3/users/{user}/devices/{device}/properties'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'device' + '}', encodeURIComponent(String(device)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ListDeviceServices
     * @param user 
     * @param device 
     */
    public async listServices(user: string, device: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("DevicesApi", "listServices", "user");
        }


        // verify required parameter 'device' is not null or undefined
        if (device === null || device === undefined) {
            throw new RequiredError("DevicesApi", "listServices", "device");
        }


        // Path Params
        const localVarPath = '/v3/users/{user}/devices/{device}/services'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'device' + '}', encodeURIComponent(String(device)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ListDeviceTokens
     * @param user 
     * @param device 
     */
    public async listTokens(user: string, device: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("DevicesApi", "listTokens", "user");
        }


        // verify required parameter 'device' is not null or undefined
        if (device === null || device === undefined) {
            throw new RequiredError("DevicesApi", "listTokens", "device");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/devices/{device}/tokens'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'device' + '}', encodeURIComponent(String(device)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * UpdateDeviceProperty
     * @param user 
     * @param device 
     * @param property 
     */
    public async patchProperty(user: string, device: string, property: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("DevicesApi", "patchProperty", "user");
        }


        // verify required parameter 'device' is not null or undefined
        if (device === null || device === undefined) {
            throw new RequiredError("DevicesApi", "patchProperty", "device");
        }


        // verify required parameter 'property' is not null or undefined
        if (property === null || property === undefined) {
            throw new RequiredError("DevicesApi", "patchProperty", "property");
        }


        // Path Params
        const localVarPath = '/v3/users/{user}/devices/{device}/properties/{property}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'device' + '}', encodeURIComponent(String(device)))
            .replace('{' + 'property' + '}', encodeURIComponent(String(property)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ReadDeviceBucket
     * @param version 
     * @param user 
     * @param device 
     * @param bucket 
     */
    public async readBucketData(version: string, user: string, device: string, bucket: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'version' is not null or undefined
        if (version === null || version === undefined) {
            throw new RequiredError("DevicesApi", "readBucketData", "version");
        }


        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("DevicesApi", "readBucketData", "user");
        }


        // verify required parameter 'device' is not null or undefined
        if (device === null || device === undefined) {
            throw new RequiredError("DevicesApi", "readBucketData", "device");
        }


        // verify required parameter 'bucket' is not null or undefined
        if (bucket === null || bucket === undefined) {
            throw new RequiredError("DevicesApi", "readBucketData", "bucket");
        }


        // Path Params
        const localVarPath = '/{version}/users/{user}/devices/{device}/buckets/{bucket}/data'
            .replace('{' + 'version' + '}', encodeURIComponent(String(version)))
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'device' + '}', encodeURIComponent(String(device)))
            .replace('{' + 'bucket' + '}', encodeURIComponent(String(bucket)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ReadDeviceBucketTag
     * @param user 
     * @param device 
     * @param bucket 
     * @param tag 
     */
    public async readBucketTag(user: string, device: string, bucket: string, tag: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("DevicesApi", "readBucketTag", "user");
        }


        // verify required parameter 'device' is not null or undefined
        if (device === null || device === undefined) {
            throw new RequiredError("DevicesApi", "readBucketTag", "device");
        }


        // verify required parameter 'bucket' is not null or undefined
        if (bucket === null || bucket === undefined) {
            throw new RequiredError("DevicesApi", "readBucketTag", "bucket");
        }


        // verify required parameter 'tag' is not null or undefined
        if (tag === null || tag === undefined) {
            throw new RequiredError("DevicesApi", "readBucketTag", "tag");
        }


        // Path Params
        const localVarPath = '/v3/users/{user}/devices/{device}/buckets/{bucket}/tags/{tag}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'device' + '}', encodeURIComponent(String(device)))
            .replace('{' + 'bucket' + '}', encodeURIComponent(String(bucket)))
            .replace('{' + 'tag' + '}', encodeURIComponent(String(tag)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ReadDeviceCallbackConfig
     * @param user 
     * @param device 
     */
    public async readCallbackConfig(user: string, device: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("DevicesApi", "readCallbackConfig", "user");
        }


        // verify required parameter 'device' is not null or undefined
        if (device === null || device === undefined) {
            throw new RequiredError("DevicesApi", "readCallbackConfig", "device");
        }


        // Path Params
        const localVarPath = '/v3/users/{user}/devices/{device}/callback'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'device' + '}', encodeURIComponent(String(device)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ReadDeviceCallbackResponse
     * @param user 
     * @param device 
     */
    public async readCallbackResponseData(user: string, device: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("DevicesApi", "readCallbackResponseData", "user");
        }


        // verify required parameter 'device' is not null or undefined
        if (device === null || device === undefined) {
            throw new RequiredError("DevicesApi", "readCallbackResponseData", "device");
        }


        // Path Params
        const localVarPath = '/v3/users/{user}/devices/{device}/callback/data'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'device' + '}', encodeURIComponent(String(device)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ReadDeviceStatistics
     * @param user 
     */
    public async readDevicesStatistics(user: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("DevicesApi", "readDevicesStatistics", "user");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/info/devices/stats'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ReadDeviceProperty
     * @param user 
     * @param device 
     * @param property 
     */
    public async readProperty(user: string, device: string, property: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("DevicesApi", "readProperty", "user");
        }


        // verify required parameter 'device' is not null or undefined
        if (device === null || device === undefined) {
            throw new RequiredError("DevicesApi", "readProperty", "device");
        }


        // verify required parameter 'property' is not null or undefined
        if (property === null || property === undefined) {
            throw new RequiredError("DevicesApi", "readProperty", "property");
        }


        // Path Params
        const localVarPath = '/v3/users/{user}/devices/{device}/properties/{property}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'device' + '}', encodeURIComponent(String(device)))
            .replace('{' + 'property' + '}', encodeURIComponent(String(property)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ReadDeviceStatistics
     * @param user 
     * @param device 
     */
    public async readStatistics(user: string, device: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("DevicesApi", "readStatistics", "user");
        }


        // verify required parameter 'device' is not null or undefined
        if (device === null || device === undefined) {
            throw new RequiredError("DevicesApi", "readStatistics", "device");
        }


        // Path Params
        const localVarPath = '/v3/users/{user}/devices/{device}/stats'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'device' + '}', encodeURIComponent(String(device)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ReadDeviceStatus
     * @param user 
     * @param device 
     */
    public async readStatus(user: string, device: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("DevicesApi", "readStatus", "user");
        }


        // verify required parameter 'device' is not null or undefined
        if (device === null || device === undefined) {
            throw new RequiredError("DevicesApi", "readStatus", "device");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/devices/{device}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'device' + '}', encodeURIComponent(String(device)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * DeleteDevice
     * @param user 
     * @param device 
     */
    public async remove(user: string, device: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("DevicesApi", "remove", "user");
        }


        // verify required parameter 'device' is not null or undefined
        if (device === null || device === undefined) {
            throw new RequiredError("DevicesApi", "remove", "device");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/devices/{device}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'device' + '}', encodeURIComponent(String(device)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * UpdateDevice
     * @param user 
     * @param device 
     * @param deviceUpdateRequest 
     */
    public async update(user: string, device: string, deviceUpdateRequest: DeviceUpdateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("DevicesApi", "update", "user");
        }


        // verify required parameter 'device' is not null or undefined
        if (device === null || device === undefined) {
            throw new RequiredError("DevicesApi", "update", "device");
        }


        // verify required parameter 'deviceUpdateRequest' is not null or undefined
        if (deviceUpdateRequest === null || deviceUpdateRequest === undefined) {
            throw new RequiredError("DevicesApi", "update", "deviceUpdateRequest");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/devices/{device}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'device' + '}', encodeURIComponent(String(device)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(deviceUpdateRequest, "DeviceUpdateRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * UpdateDeviceCallback
     * @param user 
     * @param device 
     * @param deviceUpdateCallbackRequest 
     */
    public async updateCallback(user: string, device: string, deviceUpdateCallbackRequest: DeviceUpdateCallbackRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("DevicesApi", "updateCallback", "user");
        }


        // verify required parameter 'device' is not null or undefined
        if (device === null || device === undefined) {
            throw new RequiredError("DevicesApi", "updateCallback", "device");
        }


        // verify required parameter 'deviceUpdateCallbackRequest' is not null or undefined
        if (deviceUpdateCallbackRequest === null || deviceUpdateCallbackRequest === undefined) {
            throw new RequiredError("DevicesApi", "updateCallback", "deviceUpdateCallbackRequest");
        }


        // Path Params
        const localVarPath = '/v3/users/{user}/devices/{device}/callback'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'device' + '}', encodeURIComponent(String(device)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(deviceUpdateCallbackRequest, "DeviceUpdateCallbackRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * UpdateDeviceProjects
     * @param user 
     * @param device 
     * @param requestBody 
     */
    public async updateProjects(user: string, device: string, requestBody: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("DevicesApi", "updateProjects", "user");
        }


        // verify required parameter 'device' is not null or undefined
        if (device === null || device === undefined) {
            throw new RequiredError("DevicesApi", "updateProjects", "device");
        }


        // verify required parameter 'requestBody' is not null or undefined
        if (requestBody === null || requestBody === undefined) {
            throw new RequiredError("DevicesApi", "updateProjects", "requestBody");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/devices/{device}/projects'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'device' + '}', encodeURIComponent(String(device)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(requestBody, "Array<string>", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * UpdateDeviceProperty
     * @param user 
     * @param device 
     * @param property 
     * @param propertyUpdate 
     */
    public async updateProperty(user: string, device: string, property: string, propertyUpdate: PropertyUpdate, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("DevicesApi", "updateProperty", "user");
        }


        // verify required parameter 'device' is not null or undefined
        if (device === null || device === undefined) {
            throw new RequiredError("DevicesApi", "updateProperty", "device");
        }


        // verify required parameter 'property' is not null or undefined
        if (property === null || property === undefined) {
            throw new RequiredError("DevicesApi", "updateProperty", "property");
        }


        // verify required parameter 'propertyUpdate' is not null or undefined
        if (propertyUpdate === null || propertyUpdate === undefined) {
            throw new RequiredError("DevicesApi", "updateProperty", "propertyUpdate");
        }


        // Path Params
        const localVarPath = '/v3/users/{user}/devices/{device}/properties/{property}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'device' + '}', encodeURIComponent(String(device)))
            .replace('{' + 'property' + '}', encodeURIComponent(String(property)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(propertyUpdate, "PropertyUpdate", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * AccessDeviceResources
     * @param user 
     * @param device 
     * @param resource 
     */
    public async v1UsersUserDevicesDeviceResourceGet(user: string, device: string, resource: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("DevicesApi", "v1UsersUserDevicesDeviceResourceGet", "user");
        }


        // verify required parameter 'device' is not null or undefined
        if (device === null || device === undefined) {
            throw new RequiredError("DevicesApi", "v1UsersUserDevicesDeviceResourceGet", "device");
        }


        // verify required parameter 'resource' is not null or undefined
        if (resource === null || resource === undefined) {
            throw new RequiredError("DevicesApi", "v1UsersUserDevicesDeviceResourceGet", "resource");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/devices/{device}/{resource}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'device' + '}', encodeURIComponent(String(device)))
            .replace('{' + 'resource' + '}', encodeURIComponent(String(resource)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * AccessDeviceResources
     * @param user 
     * @param device 
     * @param resource 
     * @param body 
     */
    public async v1UsersUserDevicesDeviceResourcePost(user: string, device: string, resource: string, body: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("DevicesApi", "v1UsersUserDevicesDeviceResourcePost", "user");
        }


        // verify required parameter 'device' is not null or undefined
        if (device === null || device === undefined) {
            throw new RequiredError("DevicesApi", "v1UsersUserDevicesDeviceResourcePost", "device");
        }


        // verify required parameter 'resource' is not null or undefined
        if (resource === null || resource === undefined) {
            throw new RequiredError("DevicesApi", "v1UsersUserDevicesDeviceResourcePost", "resource");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("DevicesApi", "v1UsersUserDevicesDeviceResourcePost", "body");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/devices/{device}/{resource}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'device' + '}', encodeURIComponent(String(device)))
            .replace('{' + 'resource' + '}', encodeURIComponent(String(resource)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "any", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ReadDeviceStatistics
     * @param user 
     * @param device 
     */
    public async v1UsersUserDevicesDeviceStatsGet(user: string, device: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("DevicesApi", "v1UsersUserDevicesDeviceStatsGet", "user");
        }


        // verify required parameter 'device' is not null or undefined
        if (device === null || device === undefined) {
            throw new RequiredError("DevicesApi", "v1UsersUserDevicesDeviceStatsGet", "device");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/devices/{device}/stats'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'device' + '}', encodeURIComponent(String(device)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * AccessDeviceResources
     * @param user 
     * @param device 
     * @param resource 
     */
    public async v2UsersUserDevicesDeviceResourceGet(user: string, device: string, resource: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("DevicesApi", "v2UsersUserDevicesDeviceResourceGet", "user");
        }


        // verify required parameter 'device' is not null or undefined
        if (device === null || device === undefined) {
            throw new RequiredError("DevicesApi", "v2UsersUserDevicesDeviceResourceGet", "device");
        }


        // verify required parameter 'resource' is not null or undefined
        if (resource === null || resource === undefined) {
            throw new RequiredError("DevicesApi", "v2UsersUserDevicesDeviceResourceGet", "resource");
        }


        // Path Params
        const localVarPath = '/v2/users/{user}/devices/{device}/{resource}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'device' + '}', encodeURIComponent(String(device)))
            .replace('{' + 'resource' + '}', encodeURIComponent(String(resource)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * AccessDeviceResources
     * @param user 
     * @param device 
     * @param resource 
     * @param body 
     */
    public async v2UsersUserDevicesDeviceResourcePost(user: string, device: string, resource: string, body: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("DevicesApi", "v2UsersUserDevicesDeviceResourcePost", "user");
        }


        // verify required parameter 'device' is not null or undefined
        if (device === null || device === undefined) {
            throw new RequiredError("DevicesApi", "v2UsersUserDevicesDeviceResourcePost", "device");
        }


        // verify required parameter 'resource' is not null or undefined
        if (resource === null || resource === undefined) {
            throw new RequiredError("DevicesApi", "v2UsersUserDevicesDeviceResourcePost", "resource");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("DevicesApi", "v2UsersUserDevicesDeviceResourcePost", "body");
        }


        // Path Params
        const localVarPath = '/v2/users/{user}/devices/{device}/{resource}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'device' + '}', encodeURIComponent(String(device)))
            .replace('{' + 'resource' + '}', encodeURIComponent(String(resource)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "any", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class DevicesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to accessInputResources
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async accessInputResourcesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentLength = response.headers["content-length"];
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
                if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                    return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
                }
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing error responses in thinger openapi specification
        if (response.httpStatusCode >= 400 && response.httpStatusCode <= 599 && HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES]  !== undefined) {
            if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], response.body, response.headers);
            }
            const body : any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to accessOutputResources
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async accessOutputResourcesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentLength = response.headers["content-length"];
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
                if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                    return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
                }
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing error responses in thinger openapi specification
        if (response.httpStatusCode >= 400 && response.httpStatusCode <= 599 && HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES]  !== undefined) {
            if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], response.body, response.headers);
            }
            const body : any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to accessResources
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async accessResourcesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentLength = response.headers["content-length"];
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
                if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                    return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
                }
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing error responses in thinger openapi specification
        if (response.httpStatusCode >= 400 && response.httpStatusCode <= 599 && HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES]  !== undefined) {
            if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], response.body, response.headers);
            }
            const body : any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to accessWebServices
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async accessWebServicesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentLength = response.headers["content-length"];
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
                if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                    return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
                }
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing error responses in thinger openapi specification
        if (response.httpStatusCode >= 400 && response.httpStatusCode <= 599 && HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES]  !== undefined) {
            if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], response.body, response.headers);
            }
            const body : any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to callCallbackData
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async callCallbackDataWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentLength = response.headers["content-length"];
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
                if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                    return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
                }
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing error responses in thinger openapi specification
        if (response.httpStatusCode >= 400 && response.httpStatusCode <= 599 && HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES]  !== undefined) {
            if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], response.body, response.headers);
            }
            const body : any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to clone
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloneWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentLength = response.headers["content-length"];
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
                if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                    return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
                }
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing error responses in thinger openapi specification
        if (response.httpStatusCode >= 400 && response.httpStatusCode <= 599 && HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES]  !== undefined) {
            if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], response.body, response.headers);
            }
            const body : any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloneProperty
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async clonePropertyWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentLength = response.headers["content-length"];
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
                if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                    return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
                }
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing error responses in thinger openapi specification
        if (response.httpStatusCode >= 400 && response.httpStatusCode <= 599 && HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES]  !== undefined) {
            if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], response.body, response.headers);
            }
            const body : any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to create
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentLength = response.headers["content-length"];
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
                if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                    return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
                }
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing error responses in thinger openapi specification
        if (response.httpStatusCode >= 400 && response.httpStatusCode <= 599 && HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES]  !== undefined) {
            if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], response.body, response.headers);
            }
            const body : any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createProperty
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createPropertyWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentLength = response.headers["content-length"];
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
                if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                    return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
                }
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing error responses in thinger openapi specification
        if (response.httpStatusCode >= 400 && response.httpStatusCode <= 599 && HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES]  !== undefined) {
            if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], response.body, response.headers);
            }
            const body : any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createToken
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createTokenWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentLength = response.headers["content-length"];
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
                if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                    return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
                }
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing error responses in thinger openapi specification
        if (response.httpStatusCode >= 400 && response.httpStatusCode <= 599 && HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES]  !== undefined) {
            if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], response.body, response.headers);
            }
            const body : any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteProperty
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deletePropertyWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentLength = response.headers["content-length"];
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
                if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                    return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
                }
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing error responses in thinger openapi specification
        if (response.httpStatusCode >= 400 && response.httpStatusCode <= 599 && HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES]  !== undefined) {
            if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], response.body, response.headers);
            }
            const body : any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteToken
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteTokenWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentLength = response.headers["content-length"];
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
                if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                    return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
                }
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing error responses in thinger openapi specification
        if (response.httpStatusCode >= 400 && response.httpStatusCode <= 599 && HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES]  !== undefined) {
            if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], response.body, response.headers);
            }
            const body : any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to list
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentLength = response.headers["content-length"];
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
                if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                    return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
                }
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing error responses in thinger openapi specification
        if (response.httpStatusCode >= 400 && response.httpStatusCode <= 599 && HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES]  !== undefined) {
            if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], response.body, response.headers);
            }
            const body : any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listBucketTags
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listBucketTagsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentLength = response.headers["content-length"];
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
                if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                    return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
                }
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing error responses in thinger openapi specification
        if (response.httpStatusCode >= 400 && response.httpStatusCode <= 599 && HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES]  !== undefined) {
            if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], response.body, response.headers);
            }
            const body : any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listBuckets
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listBucketsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentLength = response.headers["content-length"];
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
                if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                    return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
                }
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing error responses in thinger openapi specification
        if (response.httpStatusCode >= 400 && response.httpStatusCode <= 599 && HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES]  !== undefined) {
            if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], response.body, response.headers);
            }
            const body : any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listProperties
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listPropertiesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentLength = response.headers["content-length"];
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
                if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                    return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
                }
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing error responses in thinger openapi specification
        if (response.httpStatusCode >= 400 && response.httpStatusCode <= 599 && HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES]  !== undefined) {
            if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], response.body, response.headers);
            }
            const body : any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listServices
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listServicesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentLength = response.headers["content-length"];
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
                if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                    return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
                }
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing error responses in thinger openapi specification
        if (response.httpStatusCode >= 400 && response.httpStatusCode <= 599 && HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES]  !== undefined) {
            if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], response.body, response.headers);
            }
            const body : any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listTokens
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listTokensWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentLength = response.headers["content-length"];
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
                if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                    return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
                }
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing error responses in thinger openapi specification
        if (response.httpStatusCode >= 400 && response.httpStatusCode <= 599 && HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES]  !== undefined) {
            if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], response.body, response.headers);
            }
            const body : any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchProperty
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async patchPropertyWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentLength = response.headers["content-length"];
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
                if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                    return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
                }
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing error responses in thinger openapi specification
        if (response.httpStatusCode >= 400 && response.httpStatusCode <= 599 && HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES]  !== undefined) {
            if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], response.body, response.headers);
            }
            const body : any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readBucketData
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async readBucketDataWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentLength = response.headers["content-length"];
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
                if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                    return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
                }
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing error responses in thinger openapi specification
        if (response.httpStatusCode >= 400 && response.httpStatusCode <= 599 && HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES]  !== undefined) {
            if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], response.body, response.headers);
            }
            const body : any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readBucketTag
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async readBucketTagWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentLength = response.headers["content-length"];
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
                if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                    return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
                }
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing error responses in thinger openapi specification
        if (response.httpStatusCode >= 400 && response.httpStatusCode <= 599 && HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES]  !== undefined) {
            if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], response.body, response.headers);
            }
            const body : any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readCallbackConfig
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async readCallbackConfigWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentLength = response.headers["content-length"];
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
                if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                    return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
                }
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing error responses in thinger openapi specification
        if (response.httpStatusCode >= 400 && response.httpStatusCode <= 599 && HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES]  !== undefined) {
            if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], response.body, response.headers);
            }
            const body : any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readCallbackResponseData
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async readCallbackResponseDataWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentLength = response.headers["content-length"];
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
                if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                    return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
                }
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing error responses in thinger openapi specification
        if (response.httpStatusCode >= 400 && response.httpStatusCode <= 599 && HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES]  !== undefined) {
            if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], response.body, response.headers);
            }
            const body : any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readDevicesStatistics
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async readDevicesStatisticsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentLength = response.headers["content-length"];
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
                if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                    return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
                }
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing error responses in thinger openapi specification
        if (response.httpStatusCode >= 400 && response.httpStatusCode <= 599 && HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES]  !== undefined) {
            if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], response.body, response.headers);
            }
            const body : any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readProperty
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async readPropertyWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentLength = response.headers["content-length"];
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
                if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                    return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
                }
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing error responses in thinger openapi specification
        if (response.httpStatusCode >= 400 && response.httpStatusCode <= 599 && HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES]  !== undefined) {
            if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], response.body, response.headers);
            }
            const body : any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readStatistics
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async readStatisticsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentLength = response.headers["content-length"];
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
                if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                    return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
                }
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing error responses in thinger openapi specification
        if (response.httpStatusCode >= 400 && response.httpStatusCode <= 599 && HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES]  !== undefined) {
            if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], response.body, response.headers);
            }
            const body : any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async readStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentLength = response.headers["content-length"];
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
                if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                    return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
                }
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing error responses in thinger openapi specification
        if (response.httpStatusCode >= 400 && response.httpStatusCode <= 599 && HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES]  !== undefined) {
            if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], response.body, response.headers);
            }
            const body : any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to remove
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async removeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentLength = response.headers["content-length"];
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
                if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                    return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
                }
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing error responses in thinger openapi specification
        if (response.httpStatusCode >= 400 && response.httpStatusCode <= 599 && HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES]  !== undefined) {
            if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], response.body, response.headers);
            }
            const body : any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to update
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentLength = response.headers["content-length"];
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
                if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                    return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
                }
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing error responses in thinger openapi specification
        if (response.httpStatusCode >= 400 && response.httpStatusCode <= 599 && HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES]  !== undefined) {
            if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], response.body, response.headers);
            }
            const body : any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateCallback
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateCallbackWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentLength = response.headers["content-length"];
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
                if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                    return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
                }
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing error responses in thinger openapi specification
        if (response.httpStatusCode >= 400 && response.httpStatusCode <= 599 && HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES]  !== undefined) {
            if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], response.body, response.headers);
            }
            const body : any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateProjects
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateProjectsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentLength = response.headers["content-length"];
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
                if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                    return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
                }
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing error responses in thinger openapi specification
        if (response.httpStatusCode >= 400 && response.httpStatusCode <= 599 && HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES]  !== undefined) {
            if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], response.body, response.headers);
            }
            const body : any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateProperty
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updatePropertyWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentLength = response.headers["content-length"];
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
                if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                    return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
                }
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing error responses in thinger openapi specification
        if (response.httpStatusCode >= 400 && response.httpStatusCode <= 599 && HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES]  !== undefined) {
            if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], response.body, response.headers);
            }
            const body : any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1UsersUserDevicesDeviceResourceGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UsersUserDevicesDeviceResourceGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentLength = response.headers["content-length"];
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
                if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                    return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
                }
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing error responses in thinger openapi specification
        if (response.httpStatusCode >= 400 && response.httpStatusCode <= 599 && HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES]  !== undefined) {
            if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], response.body, response.headers);
            }
            const body : any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1UsersUserDevicesDeviceResourcePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UsersUserDevicesDeviceResourcePostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentLength = response.headers["content-length"];
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
                if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                    return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
                }
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing error responses in thinger openapi specification
        if (response.httpStatusCode >= 400 && response.httpStatusCode <= 599 && HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES]  !== undefined) {
            if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], response.body, response.headers);
            }
            const body : any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1UsersUserDevicesDeviceStatsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UsersUserDevicesDeviceStatsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentLength = response.headers["content-length"];
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
                if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                    return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
                }
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing error responses in thinger openapi specification
        if (response.httpStatusCode >= 400 && response.httpStatusCode <= 599 && HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES]  !== undefined) {
            if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], response.body, response.headers);
            }
            const body : any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2UsersUserDevicesDeviceResourceGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2UsersUserDevicesDeviceResourceGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentLength = response.headers["content-length"];
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
                if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                    return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
                }
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing error responses in thinger openapi specification
        if (response.httpStatusCode >= 400 && response.httpStatusCode <= 599 && HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES]  !== undefined) {
            if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], response.body, response.headers);
            }
            const body : any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2UsersUserDevicesDeviceResourcePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2UsersUserDevicesDeviceResourcePostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentLength = response.headers["content-length"];
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
                if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                    return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
                }
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing error responses in thinger openapi specification
        if (response.httpStatusCode >= 400 && response.httpStatusCode <= 599 && HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES]  !== undefined) {
            if ( contentLength === "0" && typeof contentType === 'undefined' ) {
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], response.body, response.headers);
            }
            const body : any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
