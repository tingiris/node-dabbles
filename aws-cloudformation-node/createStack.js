


var params = {
  StackName: 'STRING_VALUE', /* required */
  Capabilities: [
    CAPABILITY_IAM | CAPABILITY_NAMED_IAM,
    /* more items */
  ],
  ClientRequestToken: 'STRING_VALUE',
  DisableRollback: true || false,
  EnableTerminationProtection: true || false,
  NotificationARNs: [
    'STRING_VALUE',
    /* more items */
  ],
  OnFailure: DO_NOTHING | ROLLBACK | DELETE,
  Parameters: [
    {
      ParameterKey: 'STRING_VALUE',
      ParameterValue: 'STRING_VALUE',
      UsePreviousValue: true || false
    },
    /* more items */
  ],
  ResourceTypes: [
    'STRING_VALUE',
    /* more items */
  ],
  RoleARN: 'STRING_VALUE',
  RollbackConfiguration: {
    MonitoringTimeInMinutes: 0,
    RollbackTriggers: [
      {
        Arn: 'STRING_VALUE', /* required */
        Type: 'STRING_VALUE' /* required */
      },
      /* more items */
    ]
  },
  StackPolicyBody: 'STRING_VALUE',
  StackPolicyURL: 'STRING_VALUE',
  Tags: [
    {
      Key: 'STRING_VALUE', /* required */
      Value: 'STRING_VALUE' /* required */
    },
    /* more items */
  ],
  TemplateBody: 'STRING_VALUE',
  TemplateURL: 'STRING_VALUE',
  TimeoutInMinutes: 0
};
cloudformation.createStack(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
