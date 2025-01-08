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
import { ProductCloneRequest } from '../models/ProductCloneRequest.js';
import { ProductCreateFirmwareRequest } from '../models/ProductCreateFirmwareRequest.js';
import { ProductCreateRequest } from '../models/ProductCreateRequest.js';
import { ProductUpdateRequest } from '../models/ProductUpdateRequest.js';
import { PropertyCreate } from '../models/PropertyCreate.js';
import { PropertyUpdate } from '../models/PropertyUpdate.js';

/**
 * no description
 */
export class ProductsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * CloneProduct
     * @param user 
     * @param product 
     * @param productCloneRequest 
     */
    public async clone(user: string, product: string, productCloneRequest: ProductCloneRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("ProductsApi", "clone", "user");
        }


        // verify required parameter 'product' is not null or undefined
        if (product === null || product === undefined) {
            throw new RequiredError("ProductsApi", "clone", "product");
        }


        // verify required parameter 'productCloneRequest' is not null or undefined
        if (productCloneRequest === null || productCloneRequest === undefined) {
            throw new RequiredError("ProductsApi", "clone", "productCloneRequest");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/products/{product}/clone'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'product' + '}', encodeURIComponent(String(product)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(productCloneRequest, "ProductCloneRequest", ""),
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
     * CloneProductProperty
     * @param user 
     * @param product 
     * @param property 
     * @param pluginClonePropertyRequest 
     */
    public async cloneProperty(user: string, product: string, property: string, pluginClonePropertyRequest: PluginClonePropertyRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("ProductsApi", "cloneProperty", "user");
        }


        // verify required parameter 'product' is not null or undefined
        if (product === null || product === undefined) {
            throw new RequiredError("ProductsApi", "cloneProperty", "product");
        }


        // verify required parameter 'property' is not null or undefined
        if (property === null || property === undefined) {
            throw new RequiredError("ProductsApi", "cloneProperty", "property");
        }


        // verify required parameter 'pluginClonePropertyRequest' is not null or undefined
        if (pluginClonePropertyRequest === null || pluginClonePropertyRequest === undefined) {
            throw new RequiredError("ProductsApi", "cloneProperty", "pluginClonePropertyRequest");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/products/{product}/properties/{property}/clone'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'product' + '}', encodeURIComponent(String(product)))
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
     * CreateProduct
     * @param user 
     * @param productCreateRequest 
     */
    public async create(user: string, productCreateRequest: ProductCreateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("ProductsApi", "create", "user");
        }


        // verify required parameter 'productCreateRequest' is not null or undefined
        if (productCreateRequest === null || productCreateRequest === undefined) {
            throw new RequiredError("ProductsApi", "create", "productCreateRequest");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/products'
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
            ObjectSerializer.serialize(productCreateRequest, "ProductCreateRequest", ""),
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
     * CreateProductFirmware
     * @param user 
     * @param product 
     * @param productCreateFirmwareRequest 
     */
    public async createFirmware(user: string, product: string, productCreateFirmwareRequest: ProductCreateFirmwareRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("ProductsApi", "createFirmware", "user");
        }


        // verify required parameter 'product' is not null or undefined
        if (product === null || product === undefined) {
            throw new RequiredError("ProductsApi", "createFirmware", "product");
        }


        // verify required parameter 'productCreateFirmwareRequest' is not null or undefined
        if (productCreateFirmwareRequest === null || productCreateFirmwareRequest === undefined) {
            throw new RequiredError("ProductsApi", "createFirmware", "productCreateFirmwareRequest");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/products/{product}/firmwares'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'product' + '}', encodeURIComponent(String(product)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(productCreateFirmwareRequest, "ProductCreateFirmwareRequest", ""),
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
     * CreateProductProperty
     * @param user 
     * @param product 
     * @param propertyCreate 
     */
    public async createProperty(user: string, product: string, propertyCreate: PropertyCreate, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("ProductsApi", "createProperty", "user");
        }


        // verify required parameter 'product' is not null or undefined
        if (product === null || product === undefined) {
            throw new RequiredError("ProductsApi", "createProperty", "product");
        }


        // verify required parameter 'propertyCreate' is not null or undefined
        if (propertyCreate === null || propertyCreate === undefined) {
            throw new RequiredError("ProductsApi", "createProperty", "propertyCreate");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/products/{product}/properties'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'product' + '}', encodeURIComponent(String(product)));

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
     * DeleteProductFirmware
     * @param user 
     * @param product 
     * @param firmware 
     * @param firmwareVersion 
     */
    public async deleteFirmware(user: string, product: string, firmware: string, firmwareVersion: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("ProductsApi", "deleteFirmware", "user");
        }


        // verify required parameter 'product' is not null or undefined
        if (product === null || product === undefined) {
            throw new RequiredError("ProductsApi", "deleteFirmware", "product");
        }


        // verify required parameter 'firmware' is not null or undefined
        if (firmware === null || firmware === undefined) {
            throw new RequiredError("ProductsApi", "deleteFirmware", "firmware");
        }


        // verify required parameter 'firmwareVersion' is not null or undefined
        if (firmwareVersion === null || firmwareVersion === undefined) {
            throw new RequiredError("ProductsApi", "deleteFirmware", "firmwareVersion");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/products/{product}/firmwares/{firmware}/{firmware_version}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'product' + '}', encodeURIComponent(String(product)))
            .replace('{' + 'firmware' + '}', encodeURIComponent(String(firmware)))
            .replace('{' + 'firmware_version' + '}', encodeURIComponent(String(firmwareVersion)));

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
     * DeleteProductProperty
     * @param user 
     * @param product 
     * @param property 
     */
    public async deleteProperty(user: string, product: string, property: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("ProductsApi", "deleteProperty", "user");
        }


        // verify required parameter 'product' is not null or undefined
        if (product === null || product === undefined) {
            throw new RequiredError("ProductsApi", "deleteProperty", "product");
        }


        // verify required parameter 'property' is not null or undefined
        if (property === null || property === undefined) {
            throw new RequiredError("ProductsApi", "deleteProperty", "property");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/products/{product}/properties/{property}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'product' + '}', encodeURIComponent(String(product)))
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
     * ExportProduct
     * @param user 
     * @param product 
     */
    public async exportData(user: string, product: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("ProductsApi", "exportData", "user");
        }


        // verify required parameter 'product' is not null or undefined
        if (product === null || product === undefined) {
            throw new RequiredError("ProductsApi", "exportData", "product");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/products/{product}/export'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'product' + '}', encodeURIComponent(String(product)));

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
     * FlashProductFirmware
     * @param user 
     * @param product 
     * @param firmware 
     * @param firmwareVersion 
     */
    public async flashFirmware(user: string, product: string, firmware: string, firmwareVersion: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("ProductsApi", "flashFirmware", "user");
        }


        // verify required parameter 'product' is not null or undefined
        if (product === null || product === undefined) {
            throw new RequiredError("ProductsApi", "flashFirmware", "product");
        }


        // verify required parameter 'firmware' is not null or undefined
        if (firmware === null || firmware === undefined) {
            throw new RequiredError("ProductsApi", "flashFirmware", "firmware");
        }


        // verify required parameter 'firmwareVersion' is not null or undefined
        if (firmwareVersion === null || firmwareVersion === undefined) {
            throw new RequiredError("ProductsApi", "flashFirmware", "firmwareVersion");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/products/{product}/firmwares/{firmware}/{firmware_version}/flash'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'product' + '}', encodeURIComponent(String(product)))
            .replace('{' + 'firmware' + '}', encodeURIComponent(String(firmware)))
            .replace('{' + 'firmware_version' + '}', encodeURIComponent(String(firmwareVersion)));

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
     * ListProducts
     * @param user 
     */
    public async list(user: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("ProductsApi", "list", "user");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/products'
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
     * ListProductFirmwares
     * @param user 
     * @param product 
     */
    public async listFirmwares(user: string, product: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("ProductsApi", "listFirmwares", "user");
        }


        // verify required parameter 'product' is not null or undefined
        if (product === null || product === undefined) {
            throw new RequiredError("ProductsApi", "listFirmwares", "product");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/products/{product}/firmwares'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'product' + '}', encodeURIComponent(String(product)));

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
     * ListProductProperties
     * @param user 
     * @param product 
     */
    public async listProperties(user: string, product: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("ProductsApi", "listProperties", "user");
        }


        // verify required parameter 'product' is not null or undefined
        if (product === null || product === undefined) {
            throw new RequiredError("ProductsApi", "listProperties", "product");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/products/{product}/properties'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'product' + '}', encodeURIComponent(String(product)));

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
     * UpdateProductProperty
     * @param user 
     * @param product 
     * @param property 
     */
    public async patchProperty(user: string, product: string, property: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("ProductsApi", "patchProperty", "user");
        }


        // verify required parameter 'product' is not null or undefined
        if (product === null || product === undefined) {
            throw new RequiredError("ProductsApi", "patchProperty", "product");
        }


        // verify required parameter 'property' is not null or undefined
        if (property === null || property === undefined) {
            throw new RequiredError("ProductsApi", "patchProperty", "property");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/products/{product}/properties/{property}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'product' + '}', encodeURIComponent(String(product)))
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
     * ReadProductConfig
     * @param user 
     * @param product 
     */
    public async readConfig(user: string, product: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("ProductsApi", "readConfig", "user");
        }


        // verify required parameter 'product' is not null or undefined
        if (product === null || product === undefined) {
            throw new RequiredError("ProductsApi", "readConfig", "product");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/products/{product}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'product' + '}', encodeURIComponent(String(product)));

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
     * ReadProductFirmwareConfig
     * @param user 
     * @param product 
     * @param firmware 
     * @param firmwareVersion 
     */
    public async readFirmwareConfig(user: string, product: string, firmware: string, firmwareVersion: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("ProductsApi", "readFirmwareConfig", "user");
        }


        // verify required parameter 'product' is not null or undefined
        if (product === null || product === undefined) {
            throw new RequiredError("ProductsApi", "readFirmwareConfig", "product");
        }


        // verify required parameter 'firmware' is not null or undefined
        if (firmware === null || firmware === undefined) {
            throw new RequiredError("ProductsApi", "readFirmwareConfig", "firmware");
        }


        // verify required parameter 'firmwareVersion' is not null or undefined
        if (firmwareVersion === null || firmwareVersion === undefined) {
            throw new RequiredError("ProductsApi", "readFirmwareConfig", "firmwareVersion");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/products/{product}/firmwares/{firmware}/{firmware_version}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'product' + '}', encodeURIComponent(String(product)))
            .replace('{' + 'firmware' + '}', encodeURIComponent(String(firmware)))
            .replace('{' + 'firmware_version' + '}', encodeURIComponent(String(firmwareVersion)));

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
     * ReadProductProfile
     * @param user 
     * @param product 
     * @param resource 
     */
    public async readProfile(user: string, product: string, resource: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("ProductsApi", "readProfile", "user");
        }


        // verify required parameter 'product' is not null or undefined
        if (product === null || product === undefined) {
            throw new RequiredError("ProductsApi", "readProfile", "product");
        }


        // verify required parameter 'resource' is not null or undefined
        if (resource === null || resource === undefined) {
            throw new RequiredError("ProductsApi", "readProfile", "resource");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/products/{product}/profile/{resource}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'product' + '}', encodeURIComponent(String(product)))
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
     * ReadProductProperty
     * @param user 
     * @param product 
     * @param property 
     */
    public async readProperty(user: string, product: string, property: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("ProductsApi", "readProperty", "user");
        }


        // verify required parameter 'product' is not null or undefined
        if (product === null || product === undefined) {
            throw new RequiredError("ProductsApi", "readProperty", "product");
        }


        // verify required parameter 'property' is not null or undefined
        if (property === null || property === undefined) {
            throw new RequiredError("ProductsApi", "readProperty", "property");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/products/{product}/properties/{property}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'product' + '}', encodeURIComponent(String(product)))
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
     * ReadProductServices
     * @param user 
     * @param product 
     * @param resource 
     */
    public async readServices(user: string, product: string, resource: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("ProductsApi", "readServices", "user");
        }


        // verify required parameter 'product' is not null or undefined
        if (product === null || product === undefined) {
            throw new RequiredError("ProductsApi", "readServices", "product");
        }


        // verify required parameter 'resource' is not null or undefined
        if (resource === null || resource === undefined) {
            throw new RequiredError("ProductsApi", "readServices", "resource");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/products/{product}/services/{resource}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'product' + '}', encodeURIComponent(String(product)))
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
     * DeleteProduct
     * @param user 
     * @param product 
     */
    public async remove(user: string, product: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("ProductsApi", "remove", "user");
        }


        // verify required parameter 'product' is not null or undefined
        if (product === null || product === undefined) {
            throw new RequiredError("ProductsApi", "remove", "product");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/products/{product}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'product' + '}', encodeURIComponent(String(product)));

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
     * UpdateProduct
     * @param user 
     * @param product 
     * @param productUpdateRequest 
     */
    public async update(user: string, product: string, productUpdateRequest: ProductUpdateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("ProductsApi", "update", "user");
        }


        // verify required parameter 'product' is not null or undefined
        if (product === null || product === undefined) {
            throw new RequiredError("ProductsApi", "update", "product");
        }


        // verify required parameter 'productUpdateRequest' is not null or undefined
        if (productUpdateRequest === null || productUpdateRequest === undefined) {
            throw new RequiredError("ProductsApi", "update", "productUpdateRequest");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/products/{product}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'product' + '}', encodeURIComponent(String(product)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(productUpdateRequest, "ProductUpdateRequest", ""),
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
     * UpdateProductFirmware
     * @param user 
     * @param product 
     * @param firmware 
     * @param firmwareVersion 
     * @param body 
     */
    public async updateFirmware(user: string, product: string, firmware: string, firmwareVersion: string, body: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("ProductsApi", "updateFirmware", "user");
        }


        // verify required parameter 'product' is not null or undefined
        if (product === null || product === undefined) {
            throw new RequiredError("ProductsApi", "updateFirmware", "product");
        }


        // verify required parameter 'firmware' is not null or undefined
        if (firmware === null || firmware === undefined) {
            throw new RequiredError("ProductsApi", "updateFirmware", "firmware");
        }


        // verify required parameter 'firmwareVersion' is not null or undefined
        if (firmwareVersion === null || firmwareVersion === undefined) {
            throw new RequiredError("ProductsApi", "updateFirmware", "firmwareVersion");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("ProductsApi", "updateFirmware", "body");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/products/{product}/firmwares/{firmware}/{firmware_version}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'product' + '}', encodeURIComponent(String(product)))
            .replace('{' + 'firmware' + '}', encodeURIComponent(String(firmware)))
            .replace('{' + 'firmware_version' + '}', encodeURIComponent(String(firmwareVersion)));

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
     * UpdateProductFirmware
     * @param user 
     * @param product 
     * @param firmware 
     * @param firmwareVersion 
     */
    public async updateFirmwareStream(user: string, product: string, firmware: string, firmwareVersion: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("ProductsApi", "updateFirmwareStream", "user");
        }


        // verify required parameter 'product' is not null or undefined
        if (product === null || product === undefined) {
            throw new RequiredError("ProductsApi", "updateFirmwareStream", "product");
        }


        // verify required parameter 'firmware' is not null or undefined
        if (firmware === null || firmware === undefined) {
            throw new RequiredError("ProductsApi", "updateFirmwareStream", "firmware");
        }


        // verify required parameter 'firmwareVersion' is not null or undefined
        if (firmwareVersion === null || firmwareVersion === undefined) {
            throw new RequiredError("ProductsApi", "updateFirmwareStream", "firmwareVersion");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/products/{product}/firmwares/{firmware}/{firmware_version}/stream'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'product' + '}', encodeURIComponent(String(product)))
            .replace('{' + 'firmware' + '}', encodeURIComponent(String(firmware)))
            .replace('{' + 'firmware_version' + '}', encodeURIComponent(String(firmwareVersion)));

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
     * UpdateProductFirmware
     * @param user 
     * @param product 
     * @param firmware 
     * @param firmwareVersion 
     */
    public async updateFirmwareToolchain(user: string, product: string, firmware: string, firmwareVersion: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("ProductsApi", "updateFirmwareToolchain", "user");
        }


        // verify required parameter 'product' is not null or undefined
        if (product === null || product === undefined) {
            throw new RequiredError("ProductsApi", "updateFirmwareToolchain", "product");
        }


        // verify required parameter 'firmware' is not null or undefined
        if (firmware === null || firmware === undefined) {
            throw new RequiredError("ProductsApi", "updateFirmwareToolchain", "firmware");
        }


        // verify required parameter 'firmwareVersion' is not null or undefined
        if (firmwareVersion === null || firmwareVersion === undefined) {
            throw new RequiredError("ProductsApi", "updateFirmwareToolchain", "firmwareVersion");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/products/{product}/firmwares/{firmware}/{firmware_version}/toolchain'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'product' + '}', encodeURIComponent(String(product)))
            .replace('{' + 'firmware' + '}', encodeURIComponent(String(firmware)))
            .replace('{' + 'firmware_version' + '}', encodeURIComponent(String(firmwareVersion)));

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
     * UpdateProductProfile
     * @param user 
     * @param product 
     * @param resource 
     * @param body 
     */
    public async updateProfile(user: string, product: string, resource: string, body: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("ProductsApi", "updateProfile", "user");
        }


        // verify required parameter 'product' is not null or undefined
        if (product === null || product === undefined) {
            throw new RequiredError("ProductsApi", "updateProfile", "product");
        }


        // verify required parameter 'resource' is not null or undefined
        if (resource === null || resource === undefined) {
            throw new RequiredError("ProductsApi", "updateProfile", "resource");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("ProductsApi", "updateProfile", "body");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/products/{product}/profile/{resource}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'product' + '}', encodeURIComponent(String(product)))
            .replace('{' + 'resource' + '}', encodeURIComponent(String(resource)));

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
     * UpdateProductProfile
     * @param user 
     * @param product 
     * @param body 
     */
    public async updateProfileCode(user: string, product: string, body: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("ProductsApi", "updateProfileCode", "user");
        }


        // verify required parameter 'product' is not null or undefined
        if (product === null || product === undefined) {
            throw new RequiredError("ProductsApi", "updateProfileCode", "product");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("ProductsApi", "updateProfileCode", "body");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/products/{product}/profile/code'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'product' + '}', encodeURIComponent(String(product)));

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
     * UpdateProductProjects
     * @param user 
     * @param product 
     * @param requestBody 
     */
    public async updateProjects(user: string, product: string, requestBody: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("ProductsApi", "updateProjects", "user");
        }


        // verify required parameter 'product' is not null or undefined
        if (product === null || product === undefined) {
            throw new RequiredError("ProductsApi", "updateProjects", "product");
        }


        // verify required parameter 'requestBody' is not null or undefined
        if (requestBody === null || requestBody === undefined) {
            throw new RequiredError("ProductsApi", "updateProjects", "requestBody");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/products/{product}/projects'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'product' + '}', encodeURIComponent(String(product)));

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
     * UpdateProductProperty
     * @param user 
     * @param product 
     * @param property 
     * @param propertyUpdate 
     */
    public async updateProperty(user: string, product: string, property: string, propertyUpdate: PropertyUpdate, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("ProductsApi", "updateProperty", "user");
        }


        // verify required parameter 'product' is not null or undefined
        if (product === null || product === undefined) {
            throw new RequiredError("ProductsApi", "updateProperty", "product");
        }


        // verify required parameter 'property' is not null or undefined
        if (property === null || property === undefined) {
            throw new RequiredError("ProductsApi", "updateProperty", "property");
        }


        // verify required parameter 'propertyUpdate' is not null or undefined
        if (propertyUpdate === null || propertyUpdate === undefined) {
            throw new RequiredError("ProductsApi", "updateProperty", "propertyUpdate");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/products/{product}/properties/{property}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'product' + '}', encodeURIComponent(String(product)))
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
     * UpdateProductServices
     * @param user 
     * @param product 
     * @param resource 
     * @param body 
     */
    public async updateServices(user: string, product: string, resource: string, body: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError("ProductsApi", "updateServices", "user");
        }


        // verify required parameter 'product' is not null or undefined
        if (product === null || product === undefined) {
            throw new RequiredError("ProductsApi", "updateServices", "product");
        }


        // verify required parameter 'resource' is not null or undefined
        if (resource === null || resource === undefined) {
            throw new RequiredError("ProductsApi", "updateServices", "resource");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("ProductsApi", "updateServices", "body");
        }


        // Path Params
        const localVarPath = '/v1/users/{user}/products/{product}/services/{resource}'
            .replace('{' + 'user' + '}', encodeURIComponent(String(user)))
            .replace('{' + 'product' + '}', encodeURIComponent(String(product)))
            .replace('{' + 'resource' + '}', encodeURIComponent(String(resource)));

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

}

export class ProductsApiResponseProcessor {

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
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], undefined, response.headers);
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
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], undefined, response.headers);
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
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], undefined, response.headers);
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
     * @params response Response returned by the server for a request to createFirmware
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createFirmwareWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
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
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], undefined, response.headers);
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
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], undefined, response.headers);
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
     * @params response Response returned by the server for a request to deleteFirmware
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteFirmwareWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
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
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], undefined, response.headers);
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
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], undefined, response.headers);
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
     * @params response Response returned by the server for a request to exportData
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async exportDataWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
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
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], undefined, response.headers);
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
     * @params response Response returned by the server for a request to flashFirmware
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async flashFirmwareWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
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
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], undefined, response.headers);
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
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], undefined, response.headers);
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
     * @params response Response returned by the server for a request to listFirmwares
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listFirmwaresWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
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
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], undefined, response.headers);
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
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], undefined, response.headers);
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
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], undefined, response.headers);
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
     * @params response Response returned by the server for a request to readConfig
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async readConfigWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
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
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], undefined, response.headers);
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
     * @params response Response returned by the server for a request to readFirmwareConfig
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async readFirmwareConfigWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
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
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], undefined, response.headers);
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
     * @params response Response returned by the server for a request to readProfile
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async readProfileWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
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
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], undefined, response.headers);
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
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], undefined, response.headers);
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
     * @params response Response returned by the server for a request to readServices
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async readServicesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
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
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], undefined, response.headers);
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
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], undefined, response.headers);
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
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], undefined, response.headers);
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
     * @params response Response returned by the server for a request to updateFirmware
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateFirmwareWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
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
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], undefined, response.headers);
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
     * @params response Response returned by the server for a request to updateFirmwareStream
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateFirmwareStreamWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
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
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], undefined, response.headers);
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
     * @params response Response returned by the server for a request to updateFirmwareToolchain
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateFirmwareToolchainWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
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
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], undefined, response.headers);
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
     * @params response Response returned by the server for a request to updateProfile
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateProfileWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
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
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], undefined, response.headers);
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
     * @params response Response returned by the server for a request to updateProfileCode
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateProfileCodeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
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
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], undefined, response.headers);
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
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], undefined, response.headers);
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
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], undefined, response.headers);
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
     * @params response Response returned by the server for a request to updateServices
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateServicesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
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
                throw new ApiException<undefined>(response.httpStatusCode, HTTP_ERROR_RESPONSES[response.httpStatusCode.toString() as keyof typeof HTTP_ERROR_RESPONSES], undefined, response.headers);
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
