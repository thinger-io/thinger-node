#!/bin/bash

# Get the OpenAPI specification
curl -X 'GET' \
  'http://localhost/openapi.json' \
  -H 'accept: application/json' \
  -o openapi.json

# Generate the client
docker run --rm --user 1000 \
  -v ${PWD}:/local openapitools/openapi-generator-cli validate \
  -i /local/openapi.json \
  --recommend
