#!/bin/bash

# Get the OpenAPI specification
curl -X 'GET' \
  'http://localhost/openapi.json' \
  -H 'accept: application/json' \
  -o openapi.json

# Remove previous generated files
rm -rf src

jq . openapi.json > openapi.tmp1.json # prettify
# Remove unused schemas
jq 'del(
      .components.schemas.alarm_rule,
      .components.schemas.bucket_backend,
      .components.schemas.bucket_config,
      .components.schemas.bucket_retention,
      .components.schemas.claim_config,
      .components.schemas.permission,
      .components.schemas.projects_ids,
      .components.schemas.sync_config
      )' openapi.tmp1.json > openapi.tmp2.json

# Remove paths that are not tagged with Products or Plugins
jq 'del(.paths[] | select([.[]? | .tags? | (
      index("Products") //
      index("Plugins") //
      index("Devices")
    )] | any == false))' openapi.tmp2.json > openapi.tmp3.json

# Remove the array as body when another body is present ( property create )
jq 'walk(
  if type == "object" then
    with_entries(
      # Check if the key is "requestBody" and if it contains "oneOf"
      if .key == "requestBody" and
         .value.content?.["application/json"]?.schema?.oneOf then
        .value.content."application/json".schema |= { "$ref": "#/components/schemas/property_create" }
      else
        . # Leave other parts as is
      end
    )
  else
    . # No changes to non-object values
  end
)' openapi.tmp3.json > openapi.tmp4.json

mv openapi.tmp4.json openapi.clean.json
rm openapi.tmp*.json

# Generate the client
docker run --rm --user 1000 \
  -v ${PWD}:/local openapitools/openapi-generator-cli generate \
  -g typescript \
  -c /local/config.yaml \
  -e mustache \
  --remove-operation-id-prefix

#  -i /local/openapi.json \
#  -t /local/templates \
#  --skip-validate-spec \
#--dry-run
#        --git-host <git host>
#            Git host, e.g. gitlab.com.
#
#        --git-repo-id <git repo id>
#            Git repo ID, e.g. openapi-generator.
#
#        --git-user-id <git user id>
#            Git user ID, e.g. openapitools.
#  --reserved-words-mappings


