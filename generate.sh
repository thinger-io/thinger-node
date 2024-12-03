#!/bin/bash

# Get the OpenAPI specification
curl -X 'GET' \
  'https://localhost/openapi.json' \
  -H 'accept: application/json'

# Generate the client
docker run --rm --user 1000 \
  -v ${PWD}:/local openapitools/openapi-generator-cli generate \
  -i /local/openapi.json \
  -g typescript-node \
  -c /local/config.yaml \
  --skip-validate-spec \
  -e mustache \
  -t /local/templates \
  --remove-operation-id-prefix \
  -o /local
