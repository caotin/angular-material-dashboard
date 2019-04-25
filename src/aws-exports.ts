// WARNING: DO NOT EDIT. This file is Auto-Generated by AWS Mobile Hub. It will be overwritten.

// Copyright 2017-2018 Amazon.com, Inc. or its affiliates (Amazon). All Rights Reserved.
// Code generated by AWS Mobile Hub. Amazon gives unlimited permission to
// copy, distribute and modify it.

// AWS Mobile Hub Project Constants
const awsmobile = {
    'aws_app_analytics': 'enable',
    'aws_auth_facebook': 'enable',
    'aws_bots': 'enable',
    'aws_bots_config': [],
    'aws_cloud_logic': 'enable',
    'aws_cloud_logic_custom': [{ "id": "324vefaw5g", "name": "pizza", "description": "", "endpoint": "https://324vefaw5g.execute-api.us-east-1.amazonaws.com", "region": "us-east-1", "paths": ["/api/pizza", "/api/pizza/123"] }],
    'aws_cognito_identity_pool_id': 'us-east-1:fc4f0887-eb58-44ba-b69d-7640be341f24',
    'aws_cognito_region': 'us-east-1',
    'aws_content_delivery': 'enable',
    'aws_content_delivery_bucket': 'pizza-hosting-mobilehub-655136699',
    'aws_content_delivery_bucket_region': 'us-east-1',
    'aws_content_delivery_cloudfront': 'enable',
    'aws_content_delivery_cloudfront_domain': 'd1949gzou5ztrq.cloudfront.net',
    'aws_dynamodb': 'enable',
    'aws_dynamodb_all_tables_region': 'us-east-1',
    'aws_dynamodb_table_schemas': [{ "tableName": "pizza-mobilehub-655136699-pizza", "attributes": [{ "name": "userId", "type": "S" }, { "name": "composition", "type": "S" }, { "name": "countLike", "type": "S" }, { "name": "description", "type": "S" }, { "name": "id", "type": "S" }, { "name": "images", "type": "L" }, { "name": "likeByUser", "type": "S" }, { "name": "name", "type": "S" }, { "name": "nutritional", "type": "M" }, { "name": "state", "type": "S" }], "indexes": [], "region": "us-east-1", "hashKey": "userId" }, { "tableName": "pizza-mobilehub-655136699-comment", "attributes": [{ "name": "userId", "type": "S" }, { "name": "commentContent", "type": "S" }, { "name": "comment_id", "type": "S" }, { "name": "dateTime", "type": "S" }, { "name": "pizzaId", "type": "S" }], "indexes": [], "region": "us-east-1", "hashKey": "userId" }],
    'aws_facebook_app_id': '1668860703259477',
    'aws_facebook_app_permissions': 'public_profile',
    'aws_mobile_analytics_app_id': 'cfcf917132734a55bcff2b976c41c9c3',
    'aws_mobile_analytics_app_region': 'us-east-1',
    'aws_project_id': '6a78f1f8-e698-4e5e-96fd-28d4f7774355',
    'aws_project_name': 'pizza',
    'aws_project_region': 'us-east-1',
    'aws_resource_bucket_name': 'pizza-deployments-mobilehub-655136699',
    'aws_resource_name_prefix': 'pizza-mobilehub-655136699',
    'aws_sign_in_enabled': 'enable',
    'aws_user_files': 'enable',
    'aws_user_files_s3_bucket': 'pizza-userfiles-mobilehub-655136699',
    'aws_user_files_s3_bucket_region': 'us-east-1',
    'aws_user_pools': 'enable',
    'aws_user_pools_id': 'us-east-1_XnCaqViM0',
    'aws_user_pools_web_client_id': '4flv3fhjfmsiare3ohse18rtkk',
}
export default awsmobile;
