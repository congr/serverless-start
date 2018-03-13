# serverless-start
You can start serverless with this starter template!

https://serverless.com/framework/docs/providers/aws/guide/installation/

You need to install serverless first
`npm install -g serverless`

Edit serverless.yml as you want.
```
provider:
  name: aws
  runtime: nodejs4.3
  region: ap-northeast-2 # us-west-2
  stage: dev
  profile: ${opt:stage, self:provider.stage}
  timeout: 20
  cfLogs: true
  environment:
    STAGE: ${opt:stage, self:provider.stage}
    REGION: ${opt:region, self:provider.region}
```

Add your API and Lambda.
```
functions:
  # Handler
  postSurvey:
    handler: handler-survey-post.postSurvey
    description: POST /surveys
    events:
      - http: # API Gateway
          path: data/surveys
          method: post
```


If you just deplay with the sample serverlesss.yml. The result would look like this.

`API Gateway`


![alt text](/apigateway.png "Description goes here")



`Lambda`


![alt text](/lambda.png "Description goes here")


For more information, visit https://github.com/serverless


