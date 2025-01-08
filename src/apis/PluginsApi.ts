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


import { PluginClonePropertyRequest } from '../models/PluginClonePropertyRequest.js';
import { PropertyCreate } from '../models/PropertyCreate.js';
import { PropertyUpdate } from '../models/PropertyUpdate.js';

/**
 * no description
 */
export class PluginsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * CallPluginEndpoint
     * @param user 
     * @param plugin 
     * @param path 
     */
    public async callPluginEndpointDelete(user: string, plugin: string, path: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("PluginsApi", "callPluginEndpointDelete", "user");
        }


        // verify required parameter 'plugin' is not null or undefined
        if (plugin === null || plugin === undefined) {
            throw new RequiredError("PluginsApi", "callPluginEndpointDelete", "plugin");
        }


        // verify required parameter 'path' is not null or undefined
        if (path === null || path === undefined) {
            throw new RequiredError("PluginsApi", "callPluginEndpointDelete", "path");
        }


        // Path Params
        const localVarPath = '/users/{user}/plugins/{plugin}{path}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'plugin' + '}', encodeURIComponent(String(plugin)))
            .replace('{' + 'path' + '}', encodeURIComponent(String(path)));

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
     * CallPluginEndpoint
     * @param user 
     * @param plugin 
     * @param path 
     */
    public async callPluginEndpointGet(user: string, plugin: string, path: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("PluginsApi", "callPluginEndpointGet", "user");
        }


        // verify required parameter 'plugin' is not null or undefined
        if (plugin === null || plugin === undefined) {
            throw new RequiredError("PluginsApi", "callPluginEndpointGet", "plugin");
        }


        // verify required parameter 'path' is not null or undefined
        if (path === null || path === undefined) {
            throw new RequiredError("PluginsApi", "callPluginEndpointGet", "path");
        }


        // Path Params
        const localVarPath = '/users/{user}/plugins/{plugin}{path}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'plugin' + '}', encodeURIComponent(String(plugin)))
            .replace('{' + 'path' + '}', encodeURIComponent(String(path)));

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
     * CallPluginEndpoint
     * @param user 
     * @param plugin 
     * @param path 
     */
    public async callPluginEndpointHead(user: string, plugin: string, path: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("PluginsApi", "callPluginEndpointHead", "user");
        }


        // verify required parameter 'plugin' is not null or undefined
        if (plugin === null || plugin === undefined) {
            throw new RequiredError("PluginsApi", "callPluginEndpointHead", "plugin");
        }


        // verify required parameter 'path' is not null or undefined
        if (path === null || path === undefined) {
            throw new RequiredError("PluginsApi", "callPluginEndpointHead", "path");
        }


        // Path Params
        const localVarPath = '/users/{user}/plugins/{plugin}{path}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'plugin' + '}', encodeURIComponent(String(plugin)))
            .replace('{' + 'path' + '}', encodeURIComponent(String(path)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.HEAD);
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
     * CallPluginEndpoint
     * @param user 
     * @param plugin 
     * @param path 
     */
    public async callPluginEndpointOptions(user: string, plugin: string, path: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("PluginsApi", "callPluginEndpointOptions", "user");
        }


        // verify required parameter 'plugin' is not null or undefined
        if (plugin === null || plugin === undefined) {
            throw new RequiredError("PluginsApi", "callPluginEndpointOptions", "plugin");
        }


        // verify required parameter 'path' is not null or undefined
        if (path === null || path === undefined) {
            throw new RequiredError("PluginsApi", "callPluginEndpointOptions", "path");
        }


        // Path Params
        const localVarPath = '/users/{user}/plugins/{plugin}{path}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'plugin' + '}', encodeURIComponent(String(plugin)))
            .replace('{' + 'path' + '}', encodeURIComponent(String(path)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.OPTIONS);
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
     * CallPluginEndpoint
     * @param user 
     * @param plugin 
     * @param path 
     */
    public async callPluginEndpointPatch(user: string, plugin: string, path: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("PluginsApi", "callPluginEndpointPatch", "user");
        }


        // verify required parameter 'plugin' is not null or undefined
        if (plugin === null || plugin === undefined) {
            throw new RequiredError("PluginsApi", "callPluginEndpointPatch", "plugin");
        }


        // verify required parameter 'path' is not null or undefined
        if (path === null || path === undefined) {
            throw new RequiredError("PluginsApi", "callPluginEndpointPatch", "path");
        }


        // Path Params
        const localVarPath = '/users/{user}/plugins/{plugin}{path}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'plugin' + '}', encodeURIComponent(String(plugin)))
            .replace('{' + 'path' + '}', encodeURIComponent(String(path)));

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
     * CallPluginEndpoint
     * @param user 
     * @param plugin 
     * @param path 
     * @param body 
     */
    public async callPluginEndpointPost(user: string, plugin: string, path: string, body: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("PluginsApi", "callPluginEndpointPost", "user");
        }


        // verify required parameter 'plugin' is not null or undefined
        if (plugin === null || plugin === undefined) {
            throw new RequiredError("PluginsApi", "callPluginEndpointPost", "plugin");
        }


        // verify required parameter 'path' is not null or undefined
        if (path === null || path === undefined) {
            throw new RequiredError("PluginsApi", "callPluginEndpointPost", "path");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("PluginsApi", "callPluginEndpointPost", "body");
        }


        // Path Params
        const localVarPath = '/users/{user}/plugins/{plugin}{path}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'plugin' + '}', encodeURIComponent(String(plugin)))
            .replace('{' + 'path' + '}', encodeURIComponent(String(path)));

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
     * CallPluginEndpoint
     * @param user 
     * @param plugin 
     * @param path 
     * @param body 
     */
    public async callPluginEndpointPut(user: string, plugin: string, path: string, body: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("PluginsApi", "callPluginEndpointPut", "user");
        }


        // verify required parameter 'plugin' is not null or undefined
        if (plugin === null || plugin === undefined) {
            throw new RequiredError("PluginsApi", "callPluginEndpointPut", "plugin");
        }


        // verify required parameter 'path' is not null or undefined
        if (path === null || path === undefined) {
            throw new RequiredError("PluginsApi", "callPluginEndpointPut", "path");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("PluginsApi", "callPluginEndpointPut", "body");
        }


        // Path Params
        const localVarPath = '/users/{user}/plugins/{plugin}{path}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'plugin' + '}', encodeURIComponent(String(plugin)))
            .replace('{' + 'path' + '}', encodeURIComponent(String(path)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
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
     * CallPluginEndpoint
     * @param user 
     * @param plugin 
     * @param path 
     */
    public async callPluginEndpointTrace(user: string, plugin: string, path: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("PluginsApi", "callPluginEndpointTrace", "user");
        }


        // verify required parameter 'plugin' is not null or undefined
        if (plugin === null || plugin === undefined) {
            throw new RequiredError("PluginsApi", "callPluginEndpointTrace", "plugin");
        }


        // verify required parameter 'path' is not null or undefined
        if (path === null || path === undefined) {
            throw new RequiredError("PluginsApi", "callPluginEndpointTrace", "path");
        }


        // Path Params
        const localVarPath = '/users/{user}/plugins/{plugin}{path}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'plugin' + '}', encodeURIComponent(String(plugin)))
            .replace('{' + 'path' + '}', encodeURIComponent(String(path)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.TRACE);
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
     * ClonePluginProperty
     * @param user 
     * @param plugin 
     * @param property 
     * @param pluginClonePropertyRequest 
     */
    public async cloneProperty(user: string, plugin: string, property: string, pluginClonePropertyRequest: PluginClonePropertyRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("PluginsApi", "cloneProperty", "user");
        }


        // verify required parameter 'plugin' is not null or undefined
        if (plugin === null || plugin === undefined) {
            throw new RequiredError("PluginsApi", "cloneProperty", "plugin");
        }


        // verify required parameter 'property' is not null or undefined
        if (property === null || property === undefined) {
            throw new RequiredError("PluginsApi", "cloneProperty", "property");
        }


        // verify required parameter 'pluginClonePropertyRequest' is not null or undefined
        if (pluginClonePropertyRequest === null || pluginClonePropertyRequest === undefined) {
            throw new RequiredError("PluginsApi", "cloneProperty", "pluginClonePropertyRequest");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/plugins/{plugin}/properties/{property}/clone'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'plugin' + '}', encodeURIComponent(String(plugin)))
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
     * CreatePluginProperty
     * @param user 
     * @param plugin 
     * @param propertyCreate 
     */
    public async createProperty(user: string, plugin: string, propertyCreate: PropertyCreate, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("PluginsApi", "createProperty", "user");
        }


        // verify required parameter 'plugin' is not null or undefined
        if (plugin === null || plugin === undefined) {
            throw new RequiredError("PluginsApi", "createProperty", "plugin");
        }


        // verify required parameter 'propertyCreate' is not null or undefined
        if (propertyCreate === null || propertyCreate === undefined) {
            throw new RequiredError("PluginsApi", "createProperty", "propertyCreate");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/plugins/{plugin}/properties'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'plugin' + '}', encodeURIComponent(String(plugin)));

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
     * DeletePluginProperty
     * @param user 
     * @param plugin 
     * @param property 
     */
    public async deleteProperty(user: string, plugin: string, property: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("PluginsApi", "deleteProperty", "user");
        }


        // verify required parameter 'plugin' is not null or undefined
        if (plugin === null || plugin === undefined) {
            throw new RequiredError("PluginsApi", "deleteProperty", "plugin");
        }


        // verify required parameter 'property' is not null or undefined
        if (property === null || property === undefined) {
            throw new RequiredError("PluginsApi", "deleteProperty", "property");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/plugins/{plugin}/properties/{property}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'plugin' + '}', encodeURIComponent(String(plugin)))
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
     * ListPlugins
     * @param user 
     */
    public async list(user: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("PluginsApi", "list", "user");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/plugins'
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
     * ListPluginProperties
     * @param user 
     * @param plugin 
     */
    public async listProperties(user: string, plugin: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("PluginsApi", "listProperties", "user");
        }


        // verify required parameter 'plugin' is not null or undefined
        if (plugin === null || plugin === undefined) {
            throw new RequiredError("PluginsApi", "listProperties", "plugin");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/plugins/{plugin}/properties'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'plugin' + '}', encodeURIComponent(String(plugin)));

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
     * ManagePluginState
     * @param user 
     * @param plugin 
     * @param body 
     */
    public async manageState(user: string, plugin: string, body: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("PluginsApi", "manageState", "user");
        }


        // verify required parameter 'plugin' is not null or undefined
        if (plugin === null || plugin === undefined) {
            throw new RequiredError("PluginsApi", "manageState", "plugin");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("PluginsApi", "manageState", "body");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/plugins/{plugin}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'plugin' + '}', encodeURIComponent(String(plugin)));

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
     * UpdatePluginProperty
     * @param user 
     * @param plugin 
     * @param property 
     */
    public async patchProperty(user: string, plugin: string, property: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("PluginsApi", "patchProperty", "user");
        }


        // verify required parameter 'plugin' is not null or undefined
        if (plugin === null || plugin === undefined) {
            throw new RequiredError("PluginsApi", "patchProperty", "plugin");
        }


        // verify required parameter 'property' is not null or undefined
        if (property === null || property === undefined) {
            throw new RequiredError("PluginsApi", "patchProperty", "property");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/plugins/{plugin}/properties/{property}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'plugin' + '}', encodeURIComponent(String(plugin)))
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
     * ReadPluginFiles
     * @param user 
     * @param plugin 
     * @param file 
     */
    public async readFiles(user: string, plugin: string, file: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("PluginsApi", "readFiles", "user");
        }


        // verify required parameter 'plugin' is not null or undefined
        if (plugin === null || plugin === undefined) {
            throw new RequiredError("PluginsApi", "readFiles", "plugin");
        }


        // verify required parameter 'file' is not null or undefined
        if (file === null || file === undefined) {
            throw new RequiredError("PluginsApi", "readFiles", "file");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/plugins/{plugin}/files/{file}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'plugin' + '}', encodeURIComponent(String(plugin)))
            .replace('{' + 'file' + '}', encodeURIComponent(String(file)));

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
     * ReadPluginInfo
     * @param user 
     * @param plugin 
     */
    public async readInfo(user: string, plugin: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("PluginsApi", "readInfo", "user");
        }


        // verify required parameter 'plugin' is not null or undefined
        if (plugin === null || plugin === undefined) {
            throw new RequiredError("PluginsApi", "readInfo", "plugin");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/plugins/{plugin}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'plugin' + '}', encodeURIComponent(String(plugin)));

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
     * ReadPluginLogs
     * @param user 
     * @param plugin 
     */
    public async readLogs(user: string, plugin: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("PluginsApi", "readLogs", "user");
        }


        // verify required parameter 'plugin' is not null or undefined
        if (plugin === null || plugin === undefined) {
            throw new RequiredError("PluginsApi", "readLogs", "plugin");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/plugins/{plugin}/terminal/logs'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'plugin' + '}', encodeURIComponent(String(plugin)));

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
     * ReadPluginProperty
     * @param user 
     * @param plugin 
     * @param property 
     */
    public async readProperty(user: string, plugin: string, property: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("PluginsApi", "readProperty", "user");
        }


        // verify required parameter 'plugin' is not null or undefined
        if (plugin === null || plugin === undefined) {
            throw new RequiredError("PluginsApi", "readProperty", "plugin");
        }


        // verify required parameter 'property' is not null or undefined
        if (property === null || property === undefined) {
            throw new RequiredError("PluginsApi", "readProperty", "property");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/plugins/{plugin}/properties/{property}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'plugin' + '}', encodeURIComponent(String(plugin)))
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
     * RunPluginCommand
     * @param user 
     * @param plugin 
     */
    public async runCommandTerminal(user: string, plugin: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("PluginsApi", "runCommandTerminal", "user");
        }


        // verify required parameter 'plugin' is not null or undefined
        if (plugin === null || plugin === undefined) {
            throw new RequiredError("PluginsApi", "runCommandTerminal", "plugin");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/plugins/{plugin}/terminal'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'plugin' + '}', encodeURIComponent(String(plugin)));

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
     * RunPluginShell
     * @param user 
     * @param plugin 
     */
    public async runShell(user: string, plugin: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("PluginsApi", "runShell", "user");
        }


        // verify required parameter 'plugin' is not null or undefined
        if (plugin === null || plugin === undefined) {
            throw new RequiredError("PluginsApi", "runShell", "plugin");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/plugins/{plugin}/terminal/shell'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'plugin' + '}', encodeURIComponent(String(plugin)));

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
     * UpdatePluginProperty
     * @param user 
     * @param plugin 
     * @param property 
     * @param propertyUpdate 
     */
    public async updateProperty(user: string, plugin: string, property: string, propertyUpdate: PropertyUpdate, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("PluginsApi", "updateProperty", "user");
        }


        // verify required parameter 'plugin' is not null or undefined
        if (plugin === null || plugin === undefined) {
            throw new RequiredError("PluginsApi", "updateProperty", "plugin");
        }


        // verify required parameter 'property' is not null or undefined
        if (property === null || property === undefined) {
            throw new RequiredError("PluginsApi", "updateProperty", "property");
        }


        // verify required parameter 'propertyUpdate' is not null or undefined
        if (propertyUpdate === null || propertyUpdate === undefined) {
            throw new RequiredError("PluginsApi", "updateProperty", "propertyUpdate");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/plugins/{plugin}/properties/{property}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'plugin' + '}', encodeURIComponent(String(plugin)))
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

}

export class PluginsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to callPluginEndpointDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async callPluginEndpointDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
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
            let body : any | undefined;
            if ( typeof response.body !== 'undefined' ) {
                body = ObjectSerializer.deserialize(
                    ObjectSerializer.parse(await response.body.text(), contentType),
                    "any", ""
                ) as any;
            }
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to callPluginEndpointGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async callPluginEndpointGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
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
            let body : any | undefined;
            if ( typeof response.body !== 'undefined' ) {
                body = ObjectSerializer.deserialize(
                    ObjectSerializer.parse(await response.body.text(), contentType),
                    "any", ""
                ) as any;
            }
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to callPluginEndpointHead
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async callPluginEndpointHeadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
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
            let body : any | undefined;
            if ( typeof response.body !== 'undefined' ) {
                body = ObjectSerializer.deserialize(
                    ObjectSerializer.parse(await response.body.text(), contentType),
                    "any", ""
                ) as any;
            }
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to callPluginEndpointOptions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async callPluginEndpointOptionsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
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
            let body : any | undefined;
            if ( typeof response.body !== 'undefined' ) {
                body = ObjectSerializer.deserialize(
                    ObjectSerializer.parse(await response.body.text(), contentType),
                    "any", ""
                ) as any;
            }
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to callPluginEndpointPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async callPluginEndpointPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
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
            let body : any | undefined;
            if ( typeof response.body !== 'undefined' ) {
                body = ObjectSerializer.deserialize(
                    ObjectSerializer.parse(await response.body.text(), contentType),
                    "any", ""
                ) as any;
            }
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to callPluginEndpointPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async callPluginEndpointPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
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
            let body : any | undefined;
            if ( typeof response.body !== 'undefined' ) {
                body = ObjectSerializer.deserialize(
                    ObjectSerializer.parse(await response.body.text(), contentType),
                    "any", ""
                ) as any;
            }
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to callPluginEndpointPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async callPluginEndpointPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
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
            let body : any | undefined;
            if ( typeof response.body !== 'undefined' ) {
                body = ObjectSerializer.deserialize(
                    ObjectSerializer.parse(await response.body.text(), contentType),
                    "any", ""
                ) as any;
            }
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to callPluginEndpointTrace
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async callPluginEndpointTraceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
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
            let body : any | undefined;
            if ( typeof response.body !== 'undefined' ) {
                body = ObjectSerializer.deserialize(
                    ObjectSerializer.parse(await response.body.text(), contentType),
                    "any", ""
                ) as any;
            }
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
            let body : any | undefined;
            if ( typeof response.body !== 'undefined' ) {
                body = ObjectSerializer.deserialize(
                    ObjectSerializer.parse(await response.body.text(), contentType),
                    "any", ""
                ) as any;
            }
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
            let body : any | undefined;
            if ( typeof response.body !== 'undefined' ) {
                body = ObjectSerializer.deserialize(
                    ObjectSerializer.parse(await response.body.text(), contentType),
                    "any", ""
                ) as any;
            }
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
            let body : any | undefined;
            if ( typeof response.body !== 'undefined' ) {
                body = ObjectSerializer.deserialize(
                    ObjectSerializer.parse(await response.body.text(), contentType),
                    "any", ""
                ) as any;
            }
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
            let body : any | undefined;
            if ( typeof response.body !== 'undefined' ) {
                body = ObjectSerializer.deserialize(
                    ObjectSerializer.parse(await response.body.text(), contentType),
                    "any", ""
                ) as any;
            }
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
            let body : any | undefined;
            if ( typeof response.body !== 'undefined' ) {
                body = ObjectSerializer.deserialize(
                    ObjectSerializer.parse(await response.body.text(), contentType),
                    "any", ""
                ) as any;
            }
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to manageState
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async manageStateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
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
            let body : any | undefined;
            if ( typeof response.body !== 'undefined' ) {
                body = ObjectSerializer.deserialize(
                    ObjectSerializer.parse(await response.body.text(), contentType),
                    "any", ""
                ) as any;
            }
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
            let body : any | undefined;
            if ( typeof response.body !== 'undefined' ) {
                body = ObjectSerializer.deserialize(
                    ObjectSerializer.parse(await response.body.text(), contentType),
                    "any", ""
                ) as any;
            }
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readFiles
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async readFilesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
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
            let body : any | undefined;
            if ( typeof response.body !== 'undefined' ) {
                body = ObjectSerializer.deserialize(
                    ObjectSerializer.parse(await response.body.text(), contentType),
                    "any", ""
                ) as any;
            }
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async readInfoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
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
            let body : any | undefined;
            if ( typeof response.body !== 'undefined' ) {
                body = ObjectSerializer.deserialize(
                    ObjectSerializer.parse(await response.body.text(), contentType),
                    "any", ""
                ) as any;
            }
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readLogs
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async readLogsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
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
            let body : any | undefined;
            if ( typeof response.body !== 'undefined' ) {
                body = ObjectSerializer.deserialize(
                    ObjectSerializer.parse(await response.body.text(), contentType),
                    "any", ""
                ) as any;
            }
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
            let body : any | undefined;
            if ( typeof response.body !== 'undefined' ) {
                body = ObjectSerializer.deserialize(
                    ObjectSerializer.parse(await response.body.text(), contentType),
                    "any", ""
                ) as any;
            }
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to runCommandTerminal
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async runCommandTerminalWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
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
            let body : any | undefined;
            if ( typeof response.body !== 'undefined' ) {
                body = ObjectSerializer.deserialize(
                    ObjectSerializer.parse(await response.body.text(), contentType),
                    "any", ""
                ) as any;
            }
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to runShell
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async runShellWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
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
            let body : any | undefined;
            if ( typeof response.body !== 'undefined' ) {
                body = ObjectSerializer.deserialize(
                    ObjectSerializer.parse(await response.body.text(), contentType),
                    "any", ""
                ) as any;
            }
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
            let body : any | undefined;
            if ( typeof response.body !== 'undefined' ) {
                body = ObjectSerializer.deserialize(
                    ObjectSerializer.parse(await response.body.text(), contentType),
                    "any", ""
                ) as any;
            }
            throw new ApiException<any>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], body, response.headers);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
