const AddDomainToWhitelist = {
  body: {
    type: 'object',
    properties: {
      siteTrackingDomain: {
        properties: {
          name: {
            type: 'string',
            description: 'The domain name to add to the whitelist.',
            examples: ['example.com'],
          },
        },
        required: ['name'],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        siteTrackingDomain: {
          type: 'object',
          properties: { name: { type: 'string', examples: ['example.com'] } },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const Brandings = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          api_key: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ActiveCampaign API key',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        brandings: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              groupid: { type: 'string', examples: ['3'] },
              siteName: { type: 'string', examples: ['ActiveCampaign Email Marketing'] },
              siteLogo: { type: 'string', examples: ['http://mysite.com/logo.jpg'] },
              siteLogoSmall: { type: 'string', examples: ['http://mysite.com/logo_small.jpg'] },
              headerTextValue: { type: 'string', examples: ['my custom text header'] },
              headerHtmlValue: { type: 'string', examples: ['<p>my custom HTML header</p>'] },
              footerTextValue: { type: 'string', examples: ['my custom text footer'] },
              footerHtmlValue: { type: 'string', examples: ['<p>my custom HTML footer</p>'] },
              copyright: { type: 'string', examples: ['1'] },
              version: { type: 'string', examples: ['1'] },
              license: { type: 'string', examples: ['1'] },
              links: { type: 'string', examples: ['1'] },
              help: { type: 'string', examples: ['1'] },
              adminTemplateHtm: { type: 'string', examples: [''] },
              adminTemplateCss: { type: 'string', examples: [''] },
              publicTemplateHtm: { type: 'string', examples: [''] },
              publicTemplateCss: { type: 'string', examples: [''] },
              favicon: {},
              id: { type: 'string', examples: ['1'] },
            },
          },
        },
        meta: { type: 'object', properties: { total: { type: 'string', examples: ['1'] } } },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const BulkCreateACustomAccountFieldValue = {
  body: {
    type: 'object',
    properties: {
      array: {
        properties: {
          customerAccountId: {
            type: 'integer',
            description: 'The ID of the account this field value relates to',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
          },
          customFieldId: {
            type: 'integer',
            description: 'The ID of the custom field metum this field value relates to',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
          },
          fieldValue: {
            type: 'string',
            description:
              'Values for the field. (For currency field only, this needs to be in cents: eg, 10050 = 100.5)',
          },
          fieldCurrency: { type: 'string', description: 'Currency code for the money value' },
        },
        required: ['customerAccountId', 'customFieldId', 'fieldValue'],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '200': {
      type: 'object',
      properties: { message: { type: 'string', examples: ['the bulk insert was successful'] } },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const BulkCreateACustomDealFieldValue = {
  body: {
    type: 'object',
    properties: {
      array: {
        properties: {
          dealId: {
            type: 'integer',
            description: 'The ID of the deal this field value relates to',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
          },
          customFieldId: {
            type: 'integer',
            description: 'The ID of the custom field metum this field value relates to',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
          },
          fieldValue: {
            type: 'string',
            description:
              'Values for the field. (For currency field only, this needs to be in cents: eg, 10050 = 100.5)',
          },
          fieldCurrency: { type: 'string', description: 'Currency code for the money value' },
        },
        required: ['dealId', 'customFieldId', 'fieldValue'],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '200': {
      type: 'object',
      properties: { message: { type: 'string', examples: ['the bulk insert was successful'] } },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const BulkDeleteAccounts = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          ids: {
            type: 'array',
            items: { type: 'integer', format: 'int32', minimum: -2147483648, maximum: 2147483647 },
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Array with integers representing ID's of accounts to be deleted",
          },
        },
        required: ['ids'],
      },
    ],
  },
  response: {
    '200': { $schema: 'https://json-schema.org/draft/2020-12/schema#' },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const BulkImportContacts = {
  body: {
    type: 'object',
    required: ['contacts'],
    properties: {
      contacts: {
        type: 'array',
        description:
          'An array of objects containing information about a single contact. Up to 250 contacts may be included in a single request. The suggested minimum number of contacts is 10. If less than that, then contact/sync api request should be used.',
        items: {
          properties: {
            email: {
              type: 'string',
              description: "The contact's email.",
              examples: ['someone@somewhere.com'],
            },
            first_name: {
              type: 'string',
              description: "The contact's first name",
              examples: ['Jane'],
            },
            last_name: {
              type: 'string',
              description: "The contact's last name.",
              examples: ['Doe'],
            },
            phone: {
              type: 'string',
              description: 'The contact’s phone number.',
              examples: ['123-456-7890'],
            },
            customer_acct_name: {
              type: 'string',
              description: 'The name of the contact’s account.',
              examples: ['ActiveCampaign'],
            },
            tags: {
              type: 'array',
              description:
                'Each string in the array will be added as a single tag to the contact. New tags will be created if they do not already exist.',
              default: [],
              items: { type: 'string', examples: ['dictumst'] },
            },
            fields: {
              type: 'array',
              description:
                'A list of custom fields to apply to the contact. Each field must contain two fields: Each contact may have up to N custom fields.',
              items: {
                properties: {
                  id: {
                    type: 'integer',
                    description:
                      'The ID of the custom field. Custom fields must be referenced by the ID that ActiveCampaign assigns to them. You can retrieve the ID number for a custom field by using the "List all custom fields" API call.',
                    format: 'int32',
                    examples: [1],
                    minimum: -2147483648,
                    maximum: 2147483647,
                  },
                  value: {
                    type: 'string',
                    description:
                      'The value of the custom field. Multiple values may be populated for multi-value fields by separating the different values by the double-pipe delimiter (“||”).',
                    examples: ['foo'],
                  },
                },
                required: ['id', 'value'],
                type: 'object',
              },
            },
            subscribe: {
              type: 'array',
              description:
                'An array of lists to subscribe the contact to. Contacts may not be subscribed to lists which they have previously unsubscribed from. Each list object contains a single field.',
              items: {
                properties: {
                  listid: {
                    type: 'string',
                    description:
                      'The ID of the list to subscribe the contact to or unsubscribe the contact from. Lists must be referenced by the ID that ActiveCampaign assigns to them.  You can find the list ID by clicking the list in your ActiveCampaign account then viewing the URL bar. It will look something like this: /app/contacts/?listid=19&status=1  You can also retrieve the ID number for a list by using the "Retrieve all lists" API call.',
                    examples: [1],
                  },
                },
                type: 'object',
              },
            },
            unsubscribe: {
              type: 'array',
              description:
                'An array of lists to unsubscribe the contact to. Each list object contains a single field.',
              items: {
                properties: {
                  listid: {
                    type: 'string',
                    description:
                      'The ID of the list to subscribe the contact to or unsubscribe the contact from. Lists must be referenced by the ID that ActiveCampaign assigns to them.  You can find the list ID by clicking the list in your ActiveCampaign account then viewing the URL bar. It will look something like this: /app/contacts/?listid=19&status=1  You can also retrieve the ID number for a list by using the "Retrieve all lists" API call.',
                    examples: [3],
                  },
                },
                type: 'object',
              },
            },
          },
          required: ['email'],
          type: 'object',
        },
      },
      callback: {
        type: 'object',
        description: 'Callback function to notify users when an import is complete.',
        required: ['url', 'requestType'],
        properties: {
          url: {
            type: 'string',
            description:
              'The URL endpoint which the importer will make a request to once the import has completed.',
            examples: ['www.your_web_server.com'],
          },
          requestType: {
            type: 'string',
            description:
              'Can be set to either “GET” or “POST”. Determines the type of HTTP request which will be sent to the specified endpoint.',
            default: 'POST',
            examples: ['POST'],
          },
          detailed_results: {
            type: 'string',
            description:
              'When set to “true” and the requestType parameter is set to “POST”, the callback will include the number of successes and failures in the originating request, as well as an array of error messages for each failed contact.',
            default: 'true',
            examples: ['true'],
          },
          params: {
            type: 'array',
            description:
              'A list of parameters to include in the callback request. Add each parameter in the form of a key-value pair. For a GET request, each parameter will be appended to the end of the URL in a query string. For a POST request, parameters will be included in the body of the request.',
            items: {
              properties: { key: { type: 'string' }, value: { type: 'string' } },
              type: 'object',
            },
          },
          headers: {
            type: 'array',
            description:
              'A list of headers to include in the callback request. Add each header in the form of a key-value pair.',
            items: {
              properties: { key: { type: 'string' }, value: { type: 'string' } },
              type: 'object',
            },
          },
        },
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          'Content-Type': {
            type: 'string',
            default: 'application/json',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
          },
          'Api-Token': { type: 'string', $schema: 'https://json-schema.org/draft/2020-12/schema#' },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        Success: { type: 'integer', default: 0, examples: [1] },
        queued_contacts: { type: 'integer', default: 0, examples: [1] },
        batchId: { type: 'string', examples: ['0641fbdd-f62f-4c2c-ba02-3a83d5d11ac9'] },
        message: { type: 'string', examples: ['Contact import queued'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      oneOf: [
        {
          title: 'Contact Create Fail',
          type: 'object',
          properties: {
            success: { type: 'integer', default: 0, examples: [0] },
            message: {
              type: 'string',
              examples: [
                'JSON payload did not pass validation. Please fix failure Reasons and retry. The import was not queued for processing.',
              ],
            },
            failureReasons: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  contact: { type: 'integer', default: 0, examples: [230] },
                  failureReason: { type: 'string', examples: ['Field‘ email’ incorrect format'] },
                },
              },
            },
          },
        },
        {
          title: 'Other Error',
          type: 'object',
          properties: {
            success: { type: 'integer', default: 0, examples: [0] },
            message: { type: 'string', examples: ['Rate limit exceeded.'] },
            failureReasons: {
              type: 'array',
              items: {
                type: 'string',
                examples: [
                  'Up to 100 imports may be requested per minute.Please batch contacts into larger requests, or retry this request in a minute.',
                ],
              },
            },
          },
        },
      ],
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const BulkImportStatusInfo = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          batchId: { type: 'string', $schema: 'https://json-schema.org/draft/2020-12/schema#' },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        status: { type: 'string', examples: ['completed'] },
        success: { type: 'array', items: { type: 'string', examples: ['123'] } },
        failure: {
          type: 'array',
          items: { type: 'string', examples: ['invalid.email@invalidDomain'] },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {
        success: { type: 'integer', default: 0, examples: [0] },
        message: { type: 'string', examples: ["'batchId' is a required field."] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const BulkImportStatusList = {
  response: { '200': { $schema: 'https://json-schema.org/draft/2020-12/schema#' } },
} as const;
const BulkUpdateACustomAccountFieldValue = {
  body: {
    type: 'object',
    properties: {
      array: {
        properties: {
          id: {
            type: 'integer',
            description: 'ID of the dealCustomFieldData to update',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
          },
          fieldValue: {
            type: 'string',
            description:
              'Values for the field. (For currency field only, this needs to be in cents: eg, 10050 = 100.5)',
          },
          fieldCurrency: { type: 'string', description: 'Currency code for the money value' },
        },
        required: ['id', 'fieldValue'],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        message: {
          type: 'string',
          examples: [
            'AccountCustomFieldDatas with ID(s): 1, 2, 3, 4, 5 successfully bulk updated.',
          ],
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const BulkUpdateACustomFieldValue = {
  body: {
    type: 'object',
    properties: {
      array: {
        properties: {
          id: {
            type: 'integer',
            description: 'ID of the dealCustomFieldData to update',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
          },
          fieldValue: {
            type: 'string',
            description:
              'Values for the field. (For currency field only, this needs to be in cents: eg, 10050 = 100.5)',
          },
          fieldCurrency: { type: 'string', description: 'Currency code for the money value' },
        },
        required: ['id', 'fieldValue'],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        message: {
          type: 'string',
          examples: ['DealCustomFieldDatas with ID(s): 1, 2, 3, 4, 5 successfully bulk updated.'],
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const BulkUpdateDealOwners = {
  body: {
    type: 'object',
    properties: {
      deals: {
        type: 'array',
        items: {
          properties: {
            id: { type: 'string', description: 'id of the Deal', examples: [1] },
            ownerId: { type: 'string', description: "id of the Deal's Owner", examples: [1] },
          },
          type: 'object',
        },
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        success: { type: 'array', items: { type: 'string', examples: ['1'] } },
        nochange: { type: 'array', items: { type: 'string', examples: ['3'] } },
        failed: { type: 'array', items: {} },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '422': {
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              status: { type: 'integer', default: 0, examples: [422] },
              title: { type: 'string', examples: ["ownerId is required for a deal '1'."] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const CreateACalendarFeed = {
  body: {
    type: 'object',
    properties: {
      calendar: {
        properties: {
          title: {
            type: 'string',
            description: 'Title of the calendar feed',
            examples: ['Calendar Title'],
          },
          type: {
            type: 'string',
            description: "Possible Values: 'All', 'Deals', or 'Contacts'",
            examples: ['All'],
          },
          notification: {
            type: 'boolean',
            description: 'Whether or not this calendar has notifications',
            examples: [1],
          },
        },
        required: ['title', 'type'],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        calendar: {
          type: 'object',
          properties: {
            title: { type: 'string', examples: ['Calendar Title'] },
            type: { type: 'string', examples: ['All'] },
            userid: { type: 'string', examples: ['1'] },
            notification: { type: 'integer', default: 0, examples: [1] },
            cdate: { type: 'string', examples: ['2018-11-15T22:26:35-06:00'] },
            mdate: { type: 'string', examples: ['2018-11-15T22:26:35-06:00'] },
            token: { type: 'string', examples: ['5540950ac4ed4f11591db934b701aff8'] },
            links: {
              type: 'object',
              properties: {
                calendarRels: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/calendars/1/calendarRels'],
                },
                calendarUsers: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/calendars/1/calendarUsers'],
                },
              },
            },
            id: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const CreateAChildSchema = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Id of the parent schema the new child schema will extend',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        schema: {
          type: 'object',
          properties: {
            id: { type: 'string', examples: ['475c4ea7-65cc-4d59-a690-6ac232633fca'] },
            parentId: { type: 'string', examples: ['230f6065-a8e5-4df2-a70a-f6832d004d8d'] },
            slug: { type: 'string', examples: ['app-cxapp-studio-app-id-event-tickets'] },
            appId: { type: 'string', examples: ['cxapp-studio-app-id'] },
            visibility: { type: 'string', examples: ['private'] },
            labels: {
              type: 'object',
              properties: {
                singular: { type: 'string', examples: ['Event Ticket'] },
                plural: { type: 'string', examples: ['Event Tickets'] },
              },
            },
            description: { type: 'string', examples: ['Event Tickets'] },
            fields: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'string', examples: ['name'] },
                  labels: {
                    type: 'object',
                    properties: {
                      singular: { type: 'string', examples: ['Name'] },
                      plural: { type: 'string', examples: ['Names'] },
                    },
                  },
                  type: { type: 'string', examples: ['textarea'] },
                  inherited: { type: 'boolean', default: true, examples: [true] },
                },
              },
            },
            relationships: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'string', examples: ['primary-contact'] },
                  labels: {
                    type: 'object',
                    properties: {
                      singular: { type: 'string', examples: ['Primary Contact'] },
                      plural: { type: 'string', examples: ['Primary Contacts'] },
                    },
                  },
                  description: { type: 'string', examples: ['Primary contact that owns a ticket'] },
                  namespace: { type: 'string', examples: ['contacts'] },
                  inherited: { type: 'boolean', default: true, examples: [true] },
                },
              },
            },
            icons: {
              type: 'object',
              properties: {
                default: {
                  type: 'string',
                  examples: ['https://d226aj4ao1t61q.cloudfront.net/n9mayqo2d_customobject.png'],
                },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const CreateAContactCustomField = {
  body: {
    type: 'object',
    properties: {
      field: {
        properties: {
          title: {
            type: 'string',
            description: 'Title of the field being created',
            examples: ['Field Title'],
          },
          type: {
            type: 'string',
            description:
              'Possible Values: dropdown, hidden, checkbox, date, text, datetime, textarea, NULL, listbox, radio',
            examples: ['textarea'],
          },
          descript: {
            type: 'string',
            description: 'Description of field being created',
            examples: ['Field description'],
          },
          perstag: {
            type: 'string',
            description: 'The perstag that represents the field being created',
            examples: ['Personalized Tag'],
          },
          defval: {
            type: 'string',
            description: 'Default value of the field being created',
            examples: ['Defaut Value'],
          },
          show_in_list: {
            type: 'boolean',
            description: 'Show this field in the contact list view (Deprecated - no longer used)',
          },
          rows: {
            type: 'integer',
            description: 'Num of rows for a textarea (Deprecated - no longer used)',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
          },
          cols: {
            type: 'integer',
            description: 'Num of columns for a textarea (Deprecated - no longer used)',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
          },
          visible: {
            type: 'boolean',
            description: 'Show or hide this field when using the Form Builder',
            examples: [1],
          },
          service: {
            type: 'string',
            description:
              'Possible Vales: nimble, contactually, mindbody, salesforce, highrise, google_spreadsheets, pipedrive, onepage, google_contacts, freshbooks, shopify, zendesk, etsy, NULL, bigcommerce, capsule, bigcommerce_oauth, sugarcrm, zohocrm, batchbook',
          },
          ordernum: {
            type: 'integer',
            description: 'Order of appearance in ‘My Fields’ tab.',
            format: 'int32',
            examples: [1],
            minimum: -2147483648,
            maximum: 2147483647,
          },
        },
        required: ['title', 'type'],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '201': {
      type: 'object',
      properties: {
        fieldOptions: { type: 'array', items: {} },
        fieldRels: { type: 'array', items: {} },
        fields: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              title: { type: 'string', examples: ['Another Test Title'] },
              descript: {},
              type: { type: 'string', examples: [''] },
              isrequired: { type: 'string', examples: ['0'] },
              perstag: { type: 'string', examples: ['ANOTHER_TEST_TITLE'] },
              defval: {},
              show_in_list: { type: 'string', examples: ['0'] },
              rows: { type: 'string', examples: ['0'] },
              cols: { type: 'string', examples: ['0'] },
              visible: { type: 'string', examples: ['1'] },
              service: { type: 'string', examples: [''] },
              ordernum: { type: 'string', examples: ['2'] },
              cdate: { type: 'string', examples: ['2018-11-15T21:43:38-06:00'] },
              udate: { type: 'string', examples: ['2018-11-15T21:43:38-06:00'] },
              options: { type: 'array', items: {} },
              relations: { type: 'array', items: {} },
              links: {
                type: 'object',
                properties: {
                  options: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/fields/2/options'],
                  },
                  relations: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/fields/2/relations'],
                  },
                },
              },
              id: { type: 'string', examples: ['2'] },
            },
          },
        },
        meta: { type: 'object', properties: { total: { type: 'string', examples: ['2'] } } },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '403': {
      type: 'object',
      properties: { message: { type: 'string', examples: ['Forbidden'] } },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '422': {
      oneOf: [
        {
          type: 'object',
          properties: {
            errors: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  title: { type: 'string', examples: ['The field title was not provided.'] },
                  detail: { type: 'string', examples: [''] },
                  code: { type: 'string', examples: ['field_missing'] },
                },
              },
            },
          },
        },
        {
          type: 'object',
          properties: {
            errors: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  title: {
                    type: 'string',
                    examples: ['There is already a field with this personalization tag'],
                  },
                  detail: {
                    type: 'string',
                    examples: [
                      "There is already a personalization tag named 'Perstag' -- choose another name",
                    ],
                  },
                  code: { type: 'string', examples: ['field_invalid'] },
                },
              },
            },
          },
        },
        {
          type: 'object',
          properties: {
            errors: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  title: { type: 'string', examples: ['There is already a field with this title'] },
                  detail: {
                    type: 'string',
                    examples: [
                      "There is already a field named 'Test Title' -- choose another name",
                    ],
                  },
                  code: { type: 'string', examples: ['duplicate'] },
                },
              },
            },
          },
        },
      ],
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const CreateACustomFieldRelationshipToLists = {
  body: {
    type: 'object',
    properties: {
      fieldRel: {
        type: 'object',
        properties: {
          field: {
            type: 'integer',
            description: 'ID of the field to create the relationship',
            default: 8,
            format: 'int32',
            examples: [8],
            minimum: -2147483648,
            maximum: 2147483647,
          },
          relid: {
            type: 'integer',
            description:
              'ID of the list to create the relationship (0 makes the field available on all lists)',
            default: 2,
            format: 'int32',
            examples: [2],
            minimum: -2147483648,
            maximum: 2147483647,
          },
        },
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '201': {
      type: 'object',
      properties: {
        fieldRel: {
          type: 'object',
          properties: {
            relid: { type: 'integer', default: 0, examples: [2] },
            field: { type: 'integer', default: 0, examples: [8] },
            cdate: { type: 'string', examples: ['2019-02-01T08:39:25-06:00'] },
            links: { type: 'array', items: {} },
            id: { type: 'string', examples: ['19'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '403': {
      type: 'object',
      properties: { message: { type: 'string', examples: ['Forbidden'] } },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const CreateACustomFieldValue = {
  body: {
    type: 'object',
    properties: {
      accountCustomFieldDatum: {
        properties: {
          customerAccountId: {
            type: 'integer',
            description: 'The ID of the account this field value relates to',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
          },
          customFieldId: {
            type: 'integer',
            description: 'The ID of the custom field metum this field value relates to',
            format: 'int32',
            examples: ['1'],
            minimum: -2147483648,
            maximum: 2147483647,
          },
          fieldValue: {
            type: 'string',
            description:
              'Values for the field. (For `currency` field only, this needs to be in cents: eg, 10050 = 100.5)',
            examples: ['test title'],
          },
          fieldCurrency: {
            type: 'string',
            description: 'Currency code for the money value',
            default: 'Default Currency for Field',
          },
        },
        required: ['customerAccountId', 'customFieldId', 'fieldValue'],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        accountCustomFieldDatum: {
          type: 'object',
          properties: {
            id: { type: 'string', examples: ['5'] },
            accountCustomFieldMetumId: { type: 'integer', default: 0, examples: [1] },
            accountId: { type: 'integer', default: 0, examples: [2] },
            customFieldId: { type: 'integer', default: 0, examples: [1] },
            createdTimestamp: { type: 'string', examples: ['2018-11-06 02:27:05'] },
            updatedTimestamp: { type: 'string', examples: ['2018-11-06 02:27:05'] },
            fieldValue: { type: 'string', examples: ['test title'] },
            links: {
              type: 'object',
              properties: {
                account: {
                  type: 'string',
                  examples: [
                    'https://:account.api-us1.com/api/:version/accountCustomFieldData/5/account',
                  ],
                },
                accountCustomFieldMetum: {
                  type: 'string',
                  examples: [
                    'https://:account.api-us1.com/api/:version/accountCustomFieldData/5/accountCustomFieldMetum',
                  ],
                },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const CreateACustomfieldmeta = {
  body: {
    type: 'object',
    properties: {
      accountCustomFieldMetum: {
        properties: {
          fieldLabel: {
            type: 'string',
            description: 'Name of the field',
            examples: ['sample text field2'],
          },
          fieldType: {
            type: 'string',
            description:
              'Type of field. Possible values are: `text`, `textarea`, `date`, `datetime`, `dropdown`, `multiselect`, `radio`, `checkbox`, `hidden`, `currency`, or `number`.',
            examples: ['text'],
          },
          fieldOptions: {
            type: 'array',
            description:
              'Options for the field. Only necessary if `field_type` is `dropdown`, `multiselect`, `radio`, or `checkbox`.',
            items: { type: 'string' },
          },
          fieldDefault: {
            type: 'string',
            description: 'Default value of the field',
            examples: ['Default Text'],
          },
          fieldDefaultCurrency: {
            type: 'string',
            description:
              'The 3-letter currency code of the default currency for the field. Only necessary if `field_type` is `currency`.',
          },
          isFormVisible: {
            type: 'boolean',
            description: 'Whether or not the field is visible on forms',
            examples: [1],
          },
          displayOrder: {
            type: 'integer',
            description: 'Order for displaying the field on Manage Fields page and deal profiles',
            format: 'int32',
            examples: [1],
            minimum: -2147483648,
            maximum: 2147483647,
          },
          isRequired: {
            type: 'integer',
            description: '0 (Not required) or 1 (Required)',
            default: 0,
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
          },
        },
        required: ['fieldLabel', 'fieldType'],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        accountCustomFieldMetum: {
          type: 'object',
          properties: {
            id: { type: 'string', examples: ['1'] },
            fieldLabel: { type: 'string', examples: ['title'] },
            fieldType: { type: 'string', examples: ['text'] },
            fieldOptions: {},
            fieldDefault: { type: 'string', examples: ['Default Text'] },
            isFormVisible: { type: 'integer', default: 0, examples: [1] },
            isRequired: { type: 'integer', default: 0, examples: [0] },
            displayOrder: { type: 'integer', default: 0, examples: [1] },
            createdTimestamp: { type: 'string', examples: ['2018-10-22 19:57:37'] },
            updatedTimestamp: { type: 'string', examples: ['2018-10-22 19:57:37'] },
            links: {
              type: 'object',
              properties: {
                accountCustomFieldData: {
                  type: 'string',
                  examples: [
                    'https://:account.api-us1.com/api/:version/3/accountCustomFieldMeta/1/accountCustomFieldData',
                  ],
                },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '422': { $schema: 'https://json-schema.org/draft/2020-12/schema#' },
  },
} as const;
const CreateADealNew = {
  body: {
    type: 'object',
    properties: {
      deal: {
        description: 'deal.description',
        properties: {
          title: { type: 'string', description: "Deal's title.", examples: ['AC Deal'] },
          description: {
            type: 'string',
            description: "Deal's description",
            examples: ['This deal is an important deal'],
          },
          account: { type: 'string', description: 'Deal’s account id', examples: ['45'] },
          contact: {
            type: 'string',
            description: "Deal's primary contact's id.",
            examples: ['51'],
          },
          value: {
            type: 'integer',
            description:
              "Deal's value in cents. (i.e. $456.78 => 45678). Must be greater than or equal to zero.",
            format: 'int32',
            examples: [45600],
            minimum: -2147483648,
            maximum: 2147483647,
          },
          currency: {
            type: 'string',
            description: "Deal's currency in 3-digit ISO format, lowercased.",
            examples: ['usd'],
          },
          group: {
            type: 'string',
            description:
              "Deal's pipeline id. Required if `deal.stage` is not provided. If `deal.group` is not provided, the stage's pipeline will be assigned to the deal automatically.",
            examples: ['1'],
          },
          stage: {
            type: 'string',
            description:
              "Deal's stage id. Required if `deal.group` is not provided. If `deal.stage` is not provided, the deal will be assigned with the first stage in the pipeline provided in `deal.group`.",
            examples: ['1'],
          },
          owner: {
            type: 'string',
            description: "Deal's owner id. Required if pipeline's auto-assign option is disabled.",
            examples: ['1'],
          },
          percent: {
            type: 'integer',
            description: "Deal's percentage.",
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
          },
          status: {
            type: 'integer',
            description:
              "Deal's status. See [available values](#section-deals-parameters-available-values).",
            default: 0,
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
          },
          fields: {
            type: 'array',
            description:
              "Deal's custom field values `{customFieldId: string, fieldValue: string, fieldCurrency?:string}[]`",
            items: {
              properties: {
                customFieldId: {
                  type: 'integer',
                  description: 'Field ID, ID of the Custom Field Meta Data',
                  format: 'int32',
                  examples: [1],
                  minimum: -2147483648,
                  maximum: 2147483647,
                },
                fieldValue: {
                  type: 'string',
                  description:
                    'Updated field value. For `currency` field, this needs to be in cents not dollars (or 100 x Base Unit).',
                  examples: ['First field value'],
                },
                fieldCurrency: {
                  type: 'string',
                  description:
                    'Required only for the `currency` field type. The three letter currency code for the currency value',
                },
              },
              required: ['customFieldId', 'fieldValue'],
              type: 'object',
            },
          },
        },
        required: ['title', 'value', 'currency', 'group', 'stage', 'owner'],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '201': { $schema: 'https://json-schema.org/draft/2020-12/schema#' },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const CreateADealNote = {
  body: {
    type: 'object',
    properties: {
      note: {
        properties: { note: { type: 'string', description: "The Deal note's content" } },
        required: ['note'],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "The Deal's id to assign new note to",
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '201': {
      type: 'object',
      properties: {
        deals: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              activitycount: { type: 'string', examples: ['2'] },
              cdate: { type: 'string', examples: ['2017-05-25T12:01:01-05:00'] },
              contact: { type: 'string', examples: ['1'] },
              currency: { type: 'string', examples: ['usd'] },
              edate: {},
              group: { type: 'string', examples: ['1'] },
              hash: { type: 'string', examples: ['e42436fc'] },
              id: { type: 'string', examples: ['1'] },
              links: {
                type: 'object',
                properties: {
                  dealActivities: { type: 'string', examples: ['/api/3/deals/1/dealActivities'] },
                  contact: { type: 'string', examples: ['/api/3/deals/1/contact'] },
                  contactDeals: { type: 'string', examples: ['/api/3/deals/1/contactDeals'] },
                  group: { type: 'string', examples: ['/api/3/deals/1/group'] },
                  nextTask: { type: 'string', examples: ['/api/3/deals/1/nextTask'] },
                  notes: { type: 'string', examples: ['/api/3/deals/1/notes'] },
                  organization: { type: 'string', examples: ['/api/3/deals/1/organization'] },
                  owner: { type: 'string', examples: ['/api/3/deals/1/owner'] },
                  scoreValues: { type: 'string', examples: ['/api/3/deals/1/scoreValues'] },
                  stage: { type: 'string', examples: ['/api/3/deals/1/stage'] },
                  tasks: { type: 'string', examples: ['/api/3/deals/1/tasks'] },
                },
              },
              mdate: { type: 'string', examples: ['2017-05-25T12:17:23-05:00'] },
              nextdate: {},
              nextdealid: { type: 'string', examples: ['1'] },
              nexttaskid: {},
              organization: {},
              owner: { type: 'string', examples: ['1'] },
              percent: { type: 'string', examples: ['0'] },
              stage: { type: 'string', examples: ['1'] },
              status: { type: 'string', examples: ['0'] },
              title: { type: 'string', examples: ['New Deal'] },
              value: { type: 'string', examples: ['10000'] },
            },
          },
        },
        note: {
          type: 'object',
          properties: {
            cdate: { type: 'string', examples: ['2017-05-31T09:54:30-05:00'] },
            id: { type: 'string', examples: ['2'] },
            links: {
              type: 'object',
              properties: {
                activities: { type: 'string', examples: ['/api/3/notes/2/activities'] },
                mentions: { type: 'string', examples: ['/api/3/notes/2/mentions'] },
                notes: { type: 'string', examples: ['/api/3/notes/2/notes'] },
                owner: { type: 'string', examples: ['/api/3/notes/2/owner'] },
                user: { type: 'string', examples: ['/api/3/notes/2/user'] },
              },
            },
            mdate: { type: 'string', examples: ['2017-05-31T09:54:30-05:00'] },
            note: { type: 'string', examples: ['Note for the deal'] },
            owner: {
              type: 'object',
              properties: {
                id: { type: 'string', examples: ['1'] },
                type: { type: 'string', examples: ['deal'] },
              },
            },
            relid: { type: 'string', examples: ['1'] },
            reltype: { type: 'string', examples: ['Deal'] },
            user: { type: 'string', examples: ['1'] },
            userid: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const CreateADealRole = {
  body: {
    type: 'object',
    properties: { title: { type: 'string', description: 'Title for the new deal role' } },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        dealRole: {
          type: 'object',
          properties: {
            title: { type: 'string', examples: ['Finance'] },
            created_timestamp: { type: 'string', examples: ['2021-04-14T21:34:55-05:00'] },
            updated_timestamp: { type: 'string', examples: ['2021-04-14T21:34:55-05:00'] },
            links: {
              type: 'object',
              properties: {
                contactDeals: {
                  type: 'string',
                  examples: ['https://example.activehosted.com/api/3/dealRoles/3/contactDeals'],
                },
              },
            },
            id: { type: 'string', examples: ['3'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const CreateADealStage = {
  body: {
    type: 'object',
    properties: {
      dealStage: {
        properties: {
          title: {
            type: 'string',
            description: "Deal stage's title",
            examples: ['Initial Contact'],
          },
          group: { type: 'string', description: "Deal stage's pipeline id", examples: ['4'] },
          order: {
            type: 'integer',
            description:
              'Order of the deal stage. If more than one deal stage share the same order value, the order of those deal stages may not be always the same. If `dealStage.order` is not provided, the order is assigned with `(the highest order of deal stages within the same pipeline) + 1`',
            default: null,
            format: 'int32',
            examples: [1],
            minimum: -2147483648,
            maximum: 2147483647,
          },
          dealOrder: {
            type: 'string',
            description:
              'Option and direction to be used to sort deals in the deal stage. The option and direction should be delimited by a space. Direction can be either "ASC" or "DESC". See [available options](#section-deal-stage-parameters-available-values)',
            default: 'next-action DESC',
            examples: ['next-action DESC'],
          },
          cardRegion1: {
            type: 'string',
            description:
              'What to show in upper-left corner of Deal Cards. See [available values](#section-deal-stage-parameters-available-values)',
            default: 'title',
            examples: ['title'],
          },
          cardRegion2: {
            type: 'string',
            description:
              'What to show in upper-right corner of Deal Cards. See [available values](#section-deal-stage-parameters-available-values)',
            default: 'next-action',
            examples: ['next-action'],
          },
          cardRegion3: {
            type: 'string',
            description:
              'Whether to show the avatar in Deal Cards. Can be one of `show-avatar` and `hide-avatar`. If set to `show-avatar`, deal cards will show the avatars. If set to `hide-avatar`, deal cards will hide the avatars',
            default: 'show-avatar',
            examples: ['show-avatar'],
          },
          cardRegion4: {
            type: 'string',
            description:
              'What to show next to the avatar in Deal Cards. See [available values](#section-deal-stage-parameters-available-values)',
            default: 'contact-fullname-orgname',
            examples: ['contact-fullname-orgname'],
          },
          cardRegion5: {
            type: 'string',
            description:
              'What to show in lower-right corner of Deal Cards. See [available values](#section-deal-stage-parameters-available-values)',
            default: 'value',
            examples: ['value'],
          },
          color: {
            type: 'string',
            description:
              'Deal Stage\'s color. 6-character HEX color code without the hashtag. e.g. "434343" to assign the hex color value "#434343"',
            default: '3f3f3f',
            examples: ['32B0FC'],
          },
          width: {
            type: 'integer',
            description: "Deal stage's width in pixels, without `px` unit",
            default: 280,
            format: 'int32',
            examples: [360],
            minimum: -2147483648,
            maximum: 2147483647,
          },
        },
        required: ['title', 'group'],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          reorder: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              'Whether to reorder stages within the pipeline after creating a new deal stage. Can be one of `0` and `1`. If set to `1`, new order values will be assigned to all stages within the same pipeline. If deal stages with the same order exists, the stage with the highest `id` will be assigned with the lowest `order`',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        dealStage: {
          type: 'object',
          properties: {
            cardRegion1: { type: 'string', examples: ['title'] },
            cardRegion2: { type: 'string', examples: ['next-action'] },
            cardRegion3: { type: 'string', examples: ['show-avatar'] },
            cardRegion4: { type: 'string', examples: ['contact-fullname-orgname'] },
            cardRegion5: { type: 'string', examples: ['value'] },
            cdate: { type: 'string', examples: ['2017-03-01T15:55:58-06:00'] },
            color: { type: 'string', examples: ['32B0FC'] },
            dealOrder: { type: 'string', examples: ['next-action DESC'] },
            group: { type: 'string', examples: ['4'] },
            id: { type: 'string', examples: ['16'] },
            links: {
              type: 'object',
              properties: { group: { type: 'string', examples: ['/api/3/dealStages/16/group'] } },
            },
            order: { type: 'integer', default: 0, examples: [1] },
            title: { type: 'string', examples: ['Initial Contact'] },
            udate: { type: 'string', examples: ['2017-03-01T15:55:58-06:00'] },
            width: { type: 'integer', default: 0, examples: [280] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const CreateADealTaskType = {
  body: {
    type: 'object',
    properties: {
      dealTasktype: {
        properties: {
          title: {
            type: 'string',
            description:
              "Deal task type's title. The title should be unique among deal task types.",
            examples: ['Skype'],
          },
          status: {
            type: 'string',
            description: '0 - Active status, 1 - Disabled status',
            enum: ['0', '1'],
          },
        },
        required: ['title'],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        dealTasktype: {
          type: 'object',
          properties: {
            cdate: { type: 'string', examples: ['2017-03-02T14:28:53-06:00'] },
            defduration: { type: 'string', examples: ['0'] },
            id: { type: 'string', examples: ['7'] },
            links: { type: 'array', items: {} },
            status: { type: 'string', examples: ['0'] },
            title: { type: 'string', examples: ['Skype'] },
            udate: { type: 'string', examples: ['2017-03-02T14:28:53-06:00'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const CreateAListGroupPermission = {
  body: {
    type: 'object',
    properties: {
      listGroup: {
        properties: {
          listid: {
            type: 'integer',
            description: 'ID of the list',
            format: 'int32',
            examples: [19],
            minimum: -2147483648,
            maximum: 2147483647,
          },
          groupid: {
            type: 'integer',
            description: 'ID of the group that list should be associated with',
            format: 'int32',
            examples: [1],
            minimum: -2147483648,
            maximum: 2147483647,
          },
        },
        required: ['listid', 'groupid'],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '201': {
      type: 'object',
      properties: {
        listGroup: {
          type: 'object',
          properties: {
            list: { type: 'integer', default: 0, examples: [19] },
            group: { type: 'integer', default: 0, examples: [1] },
            links: {
              type: 'object',
              properties: {
                list: {
                  type: 'string',
                  examples: ['https://account.api-us1.com/api/3/listGroups/55/list'],
                },
                group: {
                  type: 'string',
                  examples: ['https://account.api-us1.com/api/3/listGroups/55/group'],
                },
              },
            },
            id: { type: 'string', examples: ['55'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '403': {
      type: 'object',
      properties: { message: { type: 'string', examples: ['Forbidden'] } },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const CreateANewContact = {
  body: {
    type: 'object',
    properties: {
      contact: {
        properties: {
          email: {
            type: 'string',
            description: "Email address of the new contact. Example: 'test@example.com'",
            examples: ['johndoe@example.com'],
          },
          firstName: {
            type: 'string',
            description: 'First name of the new contact.',
            examples: ['John'],
          },
          lastName: {
            type: 'string',
            description: 'Last name of the new contact.',
            examples: ['Doe'],
          },
          phone: {
            type: 'string',
            description: 'Phone number of the contact.',
            examples: ['7223224241'],
          },
          fieldValues: {
            type: 'array',
            description: "Contact's custom field values [{field id, value}]",
            items: {},
          },
          orgid: {
            type: 'integer',
            description: '(Deprecated) Please use Account-Contact end points',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
          },
        },
        required: ['email'],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '201': {
      type: 'object',
      properties: {
        fieldValues: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              contact: { type: 'string', examples: ['113'] },
              field: { type: 'string', examples: ['1'] },
              value: { type: 'string', examples: ['The Value for First Field'] },
              cdate: { type: 'string', examples: ['2020-08-01T10:54:59-05:00'] },
              udate: { type: 'string', examples: ['2020-08-01T14:13:34-05:00'] },
              links: {
                type: 'object',
                properties: {
                  owner: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/fieldValues/11797/owner'],
                  },
                  field: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/fieldValues/11797/field'],
                  },
                },
              },
              id: { type: 'string', examples: ['11797'] },
              owner: { type: 'string', examples: ['113'] },
            },
          },
        },
        contact: {
          type: 'object',
          properties: {
            email: { type: 'string', examples: ['johndoe@example.com'] },
            cdate: { type: 'string', examples: ['2018-09-28T13:50:41-05:00'] },
            udate: { type: 'string', examples: ['2018-09-28T13:50:41-05:00'] },
            orgid: { type: 'string', examples: [''] },
            links: {
              type: 'object',
              properties: {
                bounceLogs: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/contacts/113/bounceLogs'],
                },
                contactAutomations: {
                  type: 'string',
                  examples: [
                    'https://:account.api-us1.com/api/:version/contacts/113/contactAutomations',
                  ],
                },
                contactData: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/contacts/113/contactData'],
                },
                contactGoals: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/contacts/113/contactGoals'],
                },
                contactLists: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/contacts/113/contactLists'],
                },
                contactLogs: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/contacts/113/contactLogs'],
                },
                contactTags: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/contacts/113/contactTags'],
                },
                contactDeals: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/contacts/113/contactDeals'],
                },
                deals: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/contacts/113/deals'],
                },
                fieldValues: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/contacts/113/fieldValues'],
                },
                geoIps: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/contacts/113/geoIps'],
                },
                notes: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/contacts/113/notes'],
                },
                organization: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/contacts/113/organization'],
                },
                plusAppend: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/contacts/113/plusAppend'],
                },
                trackingLogs: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/contacts/113/trackingLogs'],
                },
                scoreValues: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/contacts/113/scoreValues'],
                },
              },
            },
            id: { type: 'string', examples: ['113'] },
            organization: { type: 'string', examples: [''] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for Subscriber with id 1'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '422': {
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              title: { type: 'string', examples: ['Email address already exists in the system'] },
              detail: { type: 'string', examples: [''] },
              code: { type: 'string', examples: ['duplicate'] },
              source: {
                type: 'object',
                properties: { pointer: { type: 'string', examples: ['/data/attributes/email'] } },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const CreateANewEventNameOnly = {
  body: {
    type: 'object',
    properties: {
      eventTrackingEvent: {
        properties: {
          name: {
            type: 'string',
            description: 'The name of the event',
            examples: ['my new fab event'],
          },
        },
        required: ['name'],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '201': {
      type: 'object',
      properties: {
        eventTrackingEvent: {
          type: 'object',
          properties: { name: { type: 'string', examples: ['my new fab event'] } },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const CreateANewGroup = {
  body: {
    type: 'object',
    properties: {
      group: {
        properties: {
          title: {
            type: 'string',
            description: 'Title of the group to be created',
            examples: ['TEST TITLE'],
          },
          descript: {
            type: 'string',
            description: 'Group description',
            examples: ['Description Text'],
          },
          pgMessageAdd: {
            type: 'boolean',
            description: 'Permission for adding messages',
            default: false,
            examples: [1],
          },
          unsubscribelink: {
            type: 'boolean',
            description: 'Whether or not to force unsubscribe links',
            default: false,
            examples: ['0'],
          },
          optinconfirm: {
            type: 'boolean',
            description: 'Whether or not to force optin confirm for this group',
            default: false,
            examples: ['0'],
          },
          pgListAdd: {
            type: 'boolean',
            description: 'Permission for adding lists',
            default: false,
            examples: [1],
          },
          pgListEdit: {
            type: 'boolean',
            description: 'Permission for editing lists',
            default: false,
            examples: [1],
          },
          pgListDelete: {
            type: 'boolean',
            description: 'Permission for deleting lists',
            default: false,
            examples: [1],
          },
          pgListHeaders: {
            type: 'boolean',
            description: 'Permission for managing custom email headers',
            default: false,
            examples: [1],
          },
          pgListEmailaccount: {
            type: 'boolean',
            description: 'Permission for managing Unsubscribe By Email',
            default: false,
            examples: [1],
          },
          pgListBounce: {
            type: 'boolean',
            description: 'Permission for accessing list bounce settings',
            default: false,
            examples: [1],
          },
          pgMessageEdit: {
            type: 'boolean',
            description: 'Permission for editing messages',
            default: false,
            examples: [1],
          },
          pgMessageDelete: {
            type: 'boolean',
            description: 'Permission for deleting messages',
            default: false,
            examples: [1],
          },
          pgMessageSend: {
            type: 'boolean',
            description: 'Permission for sending messages',
            default: false,
            examples: [1],
          },
          pgContactAdd: {
            type: 'boolean',
            description: 'Permission for adding contacts',
            default: false,
            examples: [1],
          },
          pgContactEdit: {
            type: 'boolean',
            description: 'Permission for editing contacts',
            default: false,
            examples: [1],
          },
          pgContactDelete: {
            type: 'boolean',
            description: 'Permission for deleting contacts',
            default: false,
            examples: [1],
          },
          pgContactMerge: {
            type: 'boolean',
            description: 'Permission for merging contacts',
            default: false,
            examples: [1],
          },
          pgContactImport: {
            type: 'boolean',
            description: 'Permission for importing contacts',
            default: false,
            examples: [1],
          },
          pgContactApprove: {
            type: 'boolean',
            description: 'Permission for approving contacts',
            default: false,
            examples: [1],
          },
          pgContactExport: {
            type: 'boolean',
            description: 'Permission for exporting contacts',
            default: false,
            examples: [1],
          },
          pgContactSync: {
            type: 'boolean',
            description: 'Permission for syncing contacts',
            default: false,
            examples: [1],
          },
          pgContactFilters: {
            type: 'boolean',
            description: 'Permission for managing contact list segments',
            default: false,
            examples: [1],
          },
          pgContactActions: {
            type: 'boolean',
            description: 'Permission for managing contact actions',
            default: false,
            examples: [1],
          },
          pgContactFields: {
            type: 'boolean',
            description: 'Permission for managing contact custom fields',
            default: false,
            examples: [1],
          },
          pg_user_add: {
            type: 'boolean',
            description: 'Permission for adding users',
            default: false,
            examples: ['0'],
          },
          pg_user_edit: {
            type: 'boolean',
            description: 'Permission for editing users',
            default: false,
            examples: ['0'],
          },
          pg_user_delete: {
            type: 'boolean',
            description: 'Permission for deleting users',
            default: false,
            examples: ['0'],
          },
          pgGroupAdd: {
            type: 'boolean',
            description: 'Permission for adding groups',
            default: false,
            examples: [1],
          },
          pgGroupEdit: {
            type: 'boolean',
            description: 'Permission for editing groups',
            default: false,
            examples: [1],
          },
          pgGroupDelete: {
            type: 'boolean',
            description: 'Permission for deleting groups',
            default: false,
            examples: [1],
          },
          pgTemplateAdd: {
            type: 'boolean',
            description: 'Permission for adding templates',
            default: false,
            examples: [1],
          },
          pgTemplateEdit: {
            type: 'boolean',
            description: 'Permission for editing templates',
            default: false,
            examples: [1],
          },
          pgTemplateDelete: {
            type: 'boolean',
            description: 'Permission for deleting templates',
            default: false,
            examples: [1],
          },
          pgPersonalizationAdd: {
            type: 'boolean',
            description: 'Permission for adding personalization tags',
            default: false,
            examples: [1],
          },
          pgPersonalizationEdit: {
            type: 'boolean',
            description: 'Permission for editing personalization tags',
            default: false,
            examples: [1],
          },
          pgPersonalizationDelete: {
            type: 'boolean',
            description: 'Permission for deleting personalization tags',
            default: false,
            examples: [1],
          },
          pgAutomationManage: { type: 'boolean', default: false, examples: [1] },
          pgFormEdit: {
            type: 'boolean',
            description: 'Permission for editing subscription forms',
            default: false,
            examples: [1],
          },
          pgReportsCampaign: {
            type: 'boolean',
            description: 'Permission for viewing campaign reports',
            default: false,
            examples: [1],
          },
          pgReportsList: {
            type: 'boolean',
            description: 'Permission for viewing list reports',
            default: false,
            examples: [1],
          },
          pgReportsUser: {
            type: 'boolean',
            description: 'Permission for viewing user reports',
            default: false,
            examples: [1],
          },
          pgStartupReports: {
            type: 'boolean',
            description:
              'Campaign ID of last campaign report viewed to decide whether to show link on startup',
            default: false,
            examples: [1],
          },
          pgReportsTrend: {
            type: 'boolean',
            description: 'Permission for viewing trend reports',
            default: false,
            examples: [1],
          },
          pgStartupGettingstarted: {
            type: 'boolean',
            description: 'Whether or not to show the "getting started" tutorial on overview page',
            default: false,
            examples: [1],
          },
          pgDeal: {
            type: 'boolean',
            description: 'Permission for viewing deals',
            default: false,
            examples: [1],
          },
          pgDealDelete: {
            type: 'boolean',
            description: 'Permission for deleting deals',
            default: false,
            examples: [1],
          },
          pgDealReassign: {
            type: 'boolean',
            description: 'Permission for reassigning deals',
            default: false,
            examples: [1],
          },
          pgDealGroupAdd: {
            type: 'boolean',
            description: 'Permission for adding deal groups',
            default: false,
            examples: [1],
          },
          pgDealGroupEdit: {
            type: 'boolean',
            description: 'Permission for editing deal groups',
            default: false,
            examples: [1],
          },
          pgDealGroupDelete: {
            type: 'boolean',
            description: 'Permission for deleting deals groups',
            default: false,
            examples: [1],
          },
          pgSavedResponsesManage: {
            type: 'boolean',
            description: 'Permission for managing saved responses',
            default: false,
            examples: [1],
          },
          pgTagManage: {
            type: 'boolean',
            description: 'Permission for managing tags',
            default: false,
          },
          reqApproval: {
            type: 'boolean',
            description: 'Whether or not this group requires all campaigns to be approved',
            default: false,
            examples: [1],
          },
          reqApproval1st: {
            type: 'boolean',
            description: 'Whether or not this group requires first campaign to be approved',
            default: false,
            examples: [1],
          },
          reqApprovalNotify: {
            type: 'string',
            description: 'Who to notify for approval related issues (email)',
            examples: ['JohnDoe@gmail.com'],
          },
          socialdata: {
            type: 'boolean',
            description: 'Whether or not to show social links in campaigns sent from this group',
            default: false,
          },
        },
        required: ['title'],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        group: {
          type: 'object',
          properties: {
            title: { type: 'string', examples: ['My Groups Title'] },
            p_admin: { type: 'integer', default: 0, examples: [1] },
            links: {
              type: 'object',
              properties: {
                userGroups: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/groups/7/userGroups'],
                },
                groupLimit: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/groups/7/groupLimit'],
                },
                dealGroupGroups: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/groups/7/dealGroupGroups'],
                },
                listGroups: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/groups/7/listGroups'],
                },
                addressGroups: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/groups/7/addressGroups'],
                },
                automationGroups: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/groups/7/automationGroups'],
                },
              },
            },
            id: { type: 'string', examples: ['7'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const CreateANewTag = {
  body: {
    type: 'object',
    properties: {
      tag: {
        description: 'tag.description',
        properties: {
          tag: { type: 'string', description: 'Name of the new tag' },
          tagType: {
            type: 'string',
            description: 'Tag-type of the new tag. Possible Values: template, contact',
            examples: ['contact'],
          },
          description: {
            type: 'string',
            description: 'Description of the new tag',
            examples: ['Description'],
          },
        },
        required: [],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '201': {
      type: 'object',
      properties: {
        tag: {
          type: 'object',
          properties: {
            tag: { type: 'string', examples: ['My Tag'] },
            description: { type: 'string', examples: ['Description'] },
            tagType: { type: 'string', examples: ['contact'] },
            cdate: { type: 'string', examples: ['2018-09-29T19:21:25-05:00'] },
            links: {
              type: 'object',
              properties: {
                contactGoalTags: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/tags/16/contactGoalTags'],
                },
              },
            },
            id: { type: 'string', examples: ['16'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const CreateANote = {
  body: {
    type: 'object',
    properties: {
      note: {
        properties: {
          note: { type: 'string' },
          reltype: {
            type: 'string',
            description: 'Possible Values: Activity, Deal, DealTask, Subscriber, CustomerAccount',
            examples: ['Subscriber'],
          },
          relid: {
            type: 'integer',
            format: 'int32',
            examples: [2],
            minimum: -2147483648,
            maximum: 2147483647,
          },
        },
        required: ['note', 'reltype', 'relid'],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '201': {
      type: 'object',
      properties: {
        contacts: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              cdate: { type: 'string', examples: ['2018-08-06T16:26:04-05:00'] },
              email: { type: 'string', examples: ['ikreimont+2@activecampaign.com'] },
              phone: { type: 'string', examples: [''] },
              firstName: { type: 'string', examples: [''] },
              lastName: { type: 'string', examples: [''] },
              orgid: { type: 'string', examples: ['0'] },
              segmentio_id: { type: 'string', examples: [''] },
              bounced_hard: { type: 'string', examples: ['0'] },
              bounced_soft: { type: 'string', examples: ['0'] },
              bounced_date: {},
              ip: { type: 'string', examples: ['0'] },
              ua: {},
              hash: { type: 'string', examples: ['14d8c4418ae944c68e9dde4a975854cc'] },
              socialdata_lastcheck: {},
              email_local: { type: 'string', examples: [''] },
              email_domain: { type: 'string', examples: [''] },
              sentcnt: { type: 'string', examples: ['0'] },
              rating_tstamp: {},
              gravatar: { type: 'string', examples: ['0'] },
              deleted: { type: 'string', examples: ['0'] },
              anonymized: { type: 'string', examples: ['0'] },
              adate: {},
              udate: { type: 'string', examples: ['2018-09-28T17:45:11-05:00'] },
              edate: {},
              deleted_at: {},
              created_utc_timestamp: { type: 'string', examples: ['2018-09-21 12:04:40'] },
              updated_utc_timestamp: { type: 'string', examples: ['2018-09-28 17:45:11'] },
              links: {
                type: 'object',
                properties: {
                  bounceLogs: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/2/bounceLogs'],
                  },
                  contactAutomations: {
                    type: 'string',
                    examples: [
                      'https://:account.api-us1.com/api/:version/contacts/2/contactAutomations',
                    ],
                  },
                  contactData: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/2/contactData'],
                  },
                  contactGoals: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/2/contactGoals'],
                  },
                  contactLists: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/2/contactLists'],
                  },
                  contactLogs: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/2/contactLogs'],
                  },
                  contactTags: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/2/contactTags'],
                  },
                  contactDeals: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/2/contactDeals'],
                  },
                  deals: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/2/deals'],
                  },
                  fieldValues: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/2/fieldValues'],
                  },
                  geoIps: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/2/geoIps'],
                  },
                  notes: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/2/notes'],
                  },
                  organization: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/2/organization'],
                  },
                  plusAppend: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/2/plusAppend'],
                  },
                  trackingLogs: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/2/trackingLogs'],
                  },
                  scoreValues: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/2/scoreValues'],
                  },
                },
              },
              id: { type: 'string', examples: ['2'] },
              organization: {},
            },
          },
        },
        note: {
          type: 'object',
          properties: {
            note: { type: 'string', examples: ['This is the text of the note'] },
            cdate: { type: 'string', examples: ['2018-09-28T17:45:11-05:00'] },
            mdate: { type: 'string', examples: ['2018-09-28T17:45:11-05:00'] },
            reltype: { type: 'string', examples: ['Subscriber'] },
            relid: { type: 'integer', default: 0, examples: [2] },
            userid: { type: 'string', examples: ['1'] },
            links: {
              type: 'object',
              properties: {
                activities: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/notes/2/activities'],
                },
                user: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/notes/2/user'],
                },
                mentions: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/notes/2/mentions'],
                },
                notes: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/notes/2/notes'],
                },
                owner: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/notes/2/owner'],
                },
              },
            },
            owner: {
              type: 'object',
              properties: {
                type: { type: 'string', examples: ['contact'] },
                id: { type: 'integer', default: 0, examples: [2] },
              },
            },
            id: { type: 'string', examples: ['2'] },
            user: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const CreateAPipeline = {
  body: {
    type: 'object',
    properties: {
      dealGroup: {
        properties: {
          title: { type: 'string', description: "Pipeline's title.", examples: ['Qualifications'] },
          currency: {
            type: 'string',
            description: 'Default currency to assign to new deals that belong to this deal group.',
            examples: ['eur'],
          },
          allgroups: {
            type: 'integer',
            description:
              'Whether all user groups have permission to manage this pipeline. Can be either `1` or `0`. If `1`, all user groups can manage this pipeline. If `0`, only user groups in `dealGroup.groups` parameter can manage this pipeline.',
            default: 1,
            format: 'int32',
            examples: [1],
            minimum: -2147483648,
            maximum: 2147483647,
          },
          allusers: {
            type: 'integer',
            description:
              'Whether new deals get auto-assigned to all users. Can be either `1` or `0`. If `1`, new deals are auto-assigned to all users unless auto-assign is disabled. If `0`, new deals are auto-assigned to only the users in `dealGroup.users` parameter.',
            default: 0,
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
          },
          autoassign: {
            type: 'integer',
            description:
              'Deal auto-assign option. Can be one of `0`, `1`, and `2`. If `0`, auto-assign is disabled. If `1`, Round Robin method is used to auto-assign new deals. If `2`, deals are distributed based on deal values.',
            default: 1,
            format: 'int32',
            examples: [1],
            minimum: -2147483648,
            maximum: 2147483647,
          },
          users: {
            type: 'array',
            description:
              'List of user ids to auto-assign new deals to unless auto-assign option is disabled.',
            items: { type: 'string', examples: ['3'] },
          },
          groups: {
            type: 'array',
            description: 'List of user group ids to allow managing this pipeline.',
            items: { type: 'string' },
          },
        },
        required: ['title', 'currency'],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        dealGroup: {
          type: 'object',
          properties: {
            allgroups: { type: 'integer', default: 0, examples: [1] },
            allusers: { type: 'integer', default: 0, examples: [0] },
            autoassign: { type: 'integer', default: 0, examples: [1] },
            cdate: { type: 'string', examples: ['2017-03-30T12:12:41-05:00'] },
            currency: { type: 'string', examples: ['eur'] },
            dealGroupGroups: { type: 'array', items: {} },
            dealGroupUsers: { type: 'array', items: { type: 'string', examples: ['6'] } },
            id: { type: 'string', examples: ['5'] },
            links: {
              type: 'object',
              properties: {
                dealGroupGroups: {
                  type: 'string',
                  examples: ['/api/3/dealGroups/5/dealGroupGroups'],
                },
                dealGroupUsers: {
                  type: 'string',
                  examples: ['/api/3/dealGroups/5/dealGroupUsers'],
                },
                stages: { type: 'string', examples: ['/api/3/dealGroups/5/stages'] },
              },
            },
            stages: { type: 'array', items: { type: 'string', examples: ['12'] } },
            title: { type: 'string', examples: ['Qualifications'] },
            udate: { type: 'string', examples: ['2017-03-30T12:12:41-05:00'] },
          },
        },
        dealGroupGroups: { type: 'array', items: {} },
        dealGroupUsers: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              cdate: {},
              dealGroup: { type: 'string', examples: ['5'] },
              id: { type: 'string', examples: ['6'] },
              links: {
                type: 'object',
                properties: {
                  dealGroup: { type: 'string', examples: ['/api/3/dealGroupUsers/6/dealGroup'] },
                  user: { type: 'string', examples: ['/api/3/dealGroupUsers/6/user'] },
                },
              },
              user: { type: 'string', examples: ['3'] },
            },
          },
        },
        dealStages: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              cardRegion1: { type: 'string', examples: ['title'] },
              cardRegion2: { type: 'string', examples: ['next-action'] },
              cardRegion3: { type: 'string', examples: ['show-avatar'] },
              cardRegion4: { type: 'string', examples: ['contact-fullname-orgname'] },
              cardRegion5: { type: 'string', examples: ['value'] },
              cdate: {},
              color: { type: 'string', examples: ['18D499'] },
              dealOrder: { type: 'string', examples: ['next-action DESC'] },
              group: { type: 'string', examples: ['5'] },
              id: { type: 'string', examples: ['12'] },
              links: {
                type: 'object',
                properties: { group: { type: 'string', examples: ['/api/3/dealStages/12/group'] } },
              },
              order: { type: 'string', examples: ['1'] },
              title: { type: 'string', examples: ['To Contact'] },
              udate: {},
              width: { type: 'string', examples: ['280'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const CreateAPublicSchema = {
  body: {
    type: 'object',
    properties: {
      schema: {
        description: 'schema.description',
        properties: {
          slug: { type: 'string', examples: ['event-tickets'] },
          appId: { type: 'string', examples: ['cxapp-studio-app-id'] },
          labels: {
            type: 'object',
            properties: {
              singular: {
                type: 'string',
                description: 'human-readable singular name',
                examples: ['Event Ticket'],
              },
              plural: {
                type: 'string',
                description: 'human-readable plural name',
                examples: ['Event Tickets'],
              },
            },
          },
          description: { type: 'string', examples: ['Event Tickets'] },
          fields: {
            type: 'array',
            items: {
              properties: {
                id: { type: 'string', examples: ['name'] },
                slug: { type: 'string' },
                labels: {
                  type: 'object',
                  properties: {
                    singular: {
                      type: 'string',
                      description: 'human-readable singular name',
                      examples: ['Name'],
                    },
                    plural: {
                      type: 'string',
                      description: 'human-readable plural name',
                      examples: ['Names'],
                    },
                  },
                },
                type: { type: 'string', examples: ['textarea'] },
                scale: {
                  type: 'integer',
                  format: 'int32',
                  minimum: -2147483648,
                  maximum: 2147483647,
                },
                isRequired: { type: 'boolean' },
              },
              type: 'object',
            },
          },
          relationships: {
            type: 'array',
            items: {
              properties: {
                id: { type: 'string', examples: ['primary-contact'] },
                labels: {
                  type: 'object',
                  properties: {
                    singular: {
                      type: 'string',
                      description: 'human-readable singular name',
                      examples: ['Primary Contact'],
                    },
                    plural: {
                      type: 'string',
                      description: 'human-readable plural name',
                      examples: ['Primary Contacts'],
                    },
                  },
                },
                description: { type: 'string', examples: ['Primary contact that owns a ticket'] },
                namespace: { type: 'string', examples: ['contacts'] },
                hasMany: { type: 'boolean' },
              },
              type: 'object',
            },
          },
        },
        required: [],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        schema: {
          type: 'object',
          properties: {
            id: { type: 'string', examples: ['230f6065-a8e5-4df2-a70a-f6832d004d8d'] },
            slug: {
              type: 'string',
              examples: ['app-230f6065-a8e5-4df2-a70a-f6832d004d8d-event-tickets'],
            },
            visibility: { type: 'string', examples: ['public'] },
            labels: {
              type: 'object',
              properties: {
                singular: { type: 'string', examples: ['Event Ticket'] },
                plural: { type: 'string', examples: ['Event Tickets'] },
              },
            },
            description: { type: 'string', examples: ['Event Tickets'] },
            appId: { type: 'string', examples: ['cxapp-studio-app-id'] },
            fields: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'string', examples: ['name'] },
                  labels: {
                    type: 'object',
                    properties: {
                      singular: { type: 'string', examples: ['Name'] },
                      plural: { type: 'string', examples: ['Names'] },
                    },
                  },
                  type: { type: 'string', examples: ['textarea'] },
                },
              },
            },
            relationships: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'string', examples: ['primary-contact'] },
                  labels: {
                    type: 'object',
                    properties: {
                      singular: { type: 'string', examples: ['Primary Contact'] },
                      plural: { type: 'string', examples: ['Primary Contacts'] },
                    },
                  },
                  description: { type: 'string', examples: ['Primary contact that owns a ticket'] },
                  namespace: { type: 'string', examples: ['contacts'] },
                  hasMany: { type: 'boolean', default: true, examples: [false] },
                  inherited: { type: 'boolean', default: true, examples: [false] },
                },
              },
            },
            icons: {
              type: 'object',
              properties: {
                default: {
                  type: 'string',
                  examples: ['https://d226aj4ao1t61q.cloudfront.net/n9mayqo2d_customobject.png'],
                },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const CreateASchema = {
  body: {
    type: 'object',
    properties: {
      schema: {
        description: 'schema.description',
        properties: {
          slug: { type: 'string', examples: ['my-object'] },
          labels: {
            properties: {
              singular: {
                type: 'string',
                description: 'Singular label for Schema',
                examples: ['My Object'],
              },
              plural: {
                type: 'string',
                description: 'Plural label for Schema',
                examples: ['My Objects'],
              },
            },
            required: [],
            type: 'object',
          },
          description: {
            type: 'string',
            description: 'Description of the Schema',
            examples: ['Sample Schema'],
          },
          fields: {
            type: 'array',
            description: 'List of Schema fields',
            items: {
              properties: {
                id: { type: 'string', examples: ['my-number-field'] },
                slug: { type: 'string' },
                labels: {
                  type: 'object',
                  properties: {
                    singular: {
                      type: 'string',
                      description: 'human-readable singular name',
                      examples: ['Number'],
                    },
                    plural: {
                      type: 'string',
                      description: 'human-readable plural name',
                      examples: ['Numbers'],
                    },
                  },
                },
                type: { type: 'string', examples: ['number'] },
                scale: {
                  type: 'integer',
                  format: 'int32',
                  minimum: -2147483648,
                  maximum: 2147483647,
                },
                isRequired: { type: 'boolean' },
              },
              type: 'object',
            },
          },
          relationships: {
            type: 'array',
            items: {
              properties: {
                id: { type: 'string', examples: ['primary-contact'] },
                labels: {
                  type: 'object',
                  properties: {
                    singular: {
                      type: 'string',
                      description: 'human-readable singular name',
                      examples: ['Primary Contact'],
                    },
                    plural: {
                      type: 'string',
                      description: 'human-readable plural name',
                      examples: ['Primary Contacts'],
                    },
                  },
                },
                description: { type: 'string', examples: ['Primary contact to this object'] },
                namespace: { type: 'string', examples: ['contacts'] },
                hasMany: { type: 'boolean' },
              },
              type: 'object',
            },
          },
        },
        required: [],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '201': {
      type: 'object',
      properties: {
        schema: {
          type: 'object',
          properties: {
            id: { type: 'string', examples: ['2123028c-64e6-40e2-97bc-9d63a2ca920b'] },
            slug: { type: 'string', examples: ['my-object'] },
            visibility: { type: 'string', examples: ['private'] },
            labels: {
              type: 'object',
              properties: {
                singular: { type: 'string', examples: ['My Object'] },
                plural: { type: 'string', examples: ['My Objects'] },
              },
            },
            description: { type: 'string', examples: ['Sample Schema'] },
            createdTimestamp: { type: 'string', examples: ['2021-03-19T18:23:17.153996399Z'] },
            updatedTimestamp: { type: 'string', examples: ['2021-03-19T18:23:17.153996399Z'] },
            fields: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'string', examples: ['my-number-field'] },
                  labels: {
                    type: 'object',
                    properties: {
                      singular: { type: 'string', examples: ['Number'] },
                      plural: { type: 'string', examples: ['Numbers'] },
                    },
                  },
                  type: { type: 'string', examples: ['number'] },
                  required: { type: 'boolean', default: true, examples: [false] },
                  scale: { type: 'integer', default: 0, examples: [0] },
                },
              },
            },
            icons: {
              type: 'object',
              properties: {
                default: {
                  type: 'string',
                  examples: ['https://d226aj4ao1t61q.cloudfront.net/n9mayqo2d_customobject.png'],
                },
              },
            },
            relationships: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'string', examples: ['primary-contact'] },
                  labels: {
                    type: 'object',
                    properties: {
                      singular: { type: 'string', examples: ['Primary Contact'] },
                      plural: { type: 'string', examples: ['Primary Contacts'] },
                    },
                  },
                  description: { type: 'string', examples: ['Primary contact to this object'] },
                  namespace: { type: 'string', examples: ['contacts'] },
                  hasMany: { type: 'boolean', default: true, examples: [false] },
                },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '422': {
      oneOf: [
        {
          title: 'invalid field value',
          type: 'object',
          properties: {
            errors: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  title: {
                    type: 'string',
                    examples: ['Invalid value for field "schema.fields.labels"'],
                  },
                  detail: { type: 'string', examples: ['Schema fields must provide labels'] },
                  source: {
                    type: 'object',
                    properties: {
                      type: { type: 'string', examples: ['pointer'] },
                      value: {
                        type: 'string',
                        examples: ['/data/attributes/schema/fields/labels'],
                      },
                    },
                  },
                },
              },
            },
          },
        },
        {
          title: 'slug conflict',
          type: 'object',
          properties: {
            errors: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  title: { type: 'string', examples: ['Invalid value for field "schema.slug"'] },
                  detail: { type: 'string', examples: ['Schema slug must be unique'] },
                  source: {
                    type: 'object',
                    properties: {
                      type: { type: 'string', examples: ['pointer'] },
                      value: { type: 'string', examples: ['/data/attributes/schema/slug'] },
                    },
                  },
                },
              },
            },
          },
        },
      ],
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const CreateASecondaryContact = {
  body: {
    type: 'object',
    properties: {
      contactDeal: {
        properties: {
          deal: { type: 'string', description: "Deal's id", examples: [2] },
          contact: { type: 'string', description: "Contact's id", examples: [1] },
        },
        required: ['deal', 'contact'],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        deals: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              hash: { type: 'string', examples: ['c7b5a271'] },
              owner: { type: 'string', examples: ['1'] },
              contact: { type: 'string', examples: ['2'] },
              organization: {},
              group: { type: 'string', examples: ['1'] },
              stage: { type: 'string', examples: ['1'] },
              title: { type: 'string', examples: ['deal1'] },
              description: { type: 'string', examples: [''] },
              percent: { type: 'string', examples: ['0'] },
              cdate: { type: 'string', examples: ['2018-10-31T13:33:09-05:00'] },
              mdate: { type: 'string', examples: ['2018-10-31T13:33:09-05:00'] },
              nexttaskid: {},
              value: { type: 'string', examples: ['10000'] },
              currency: { type: 'string', examples: ['usd'] },
              winProbability: {},
              winProbabilityMdate: { type: 'string', examples: ['2018-10-31T13:33:09-05:00'] },
              status: { type: 'string', examples: ['0'] },
              activitycount: { type: 'string', examples: ['1'] },
              nextdealid: { type: 'string', examples: ['2'] },
              edate: {},
              links: {
                type: 'object',
                properties: {
                  dealActivities: { type: 'string', examples: ['/api/3/deals/2/dealActivities'] },
                  contact: { type: 'string', examples: ['/api/3/deals/2/contact'] },
                  contactDeals: { type: 'string', examples: ['/api/3/deals/2/contactDeals'] },
                  group: { type: 'string', examples: ['/api/3/deals/2/group'] },
                  nextTask: { type: 'string', examples: ['/api/3/deals/2/nextTask'] },
                  notes: { type: 'string', examples: ['/api/3/deals/2/notes'] },
                  organization: { type: 'string', examples: ['/api/3/deals/2/organization'] },
                  owner: { type: 'string', examples: ['/api/3/deals/2/owner'] },
                  scoreValues: { type: 'string', examples: ['/api/3/deals/2/scoreValues'] },
                  stage: { type: 'string', examples: ['/api/3/deals/2/stage'] },
                  tasks: { type: 'string', examples: ['/api/3/deals/2/tasks'] },
                  dealCustomFieldData: {
                    type: 'string',
                    examples: ['/api/3/deals/2/dealCustomFieldData'],
                  },
                },
              },
              id: { type: 'string', examples: ['2'] },
              isDisabled: { type: 'boolean', default: true, examples: [false] },
            },
          },
        },
        contactDeal: {
          type: 'object',
          properties: {
            contact: { type: 'integer', default: 0, examples: [3] },
            deal: { type: 'integer', default: 0, examples: [2] },
            cdate: { type: 'string', examples: ['2019-02-25T09:00:02-06:00'] },
            links: {
              type: 'object',
              properties: {
                deal: { type: 'string', examples: ['/api/3/contactDeals/3/deal'] },
                contact: { type: 'string', examples: ['/api/3/contactDeals/3/contact'] },
              },
            },
            id: { type: 'string', examples: ['3'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '422': {
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              title: {
                type: 'string',
                examples: ['The given contact is already associated to the deal'],
              },
              detail: { type: 'string', examples: [''] },
              code: { type: 'string', examples: ['field_invalid'] },
              source: {
                type: 'object',
                properties: { pointer: { type: 'string', examples: ['/data/attributes/contact'] } },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const CreateATaskOutcome = {
  body: {
    type: 'object',
    required: ['title', 'sentiment'],
    properties: {
      title: { type: 'string', description: 'Title of the outcome' },
      sentiment: {
        type: 'string',
        description: 'Sentiment of the outcome. Only three values are currently allowed.',
        enum: ['Positive', 'Neutral', 'or Negative'],
      },
      disabled: {
        type: 'string',
        description: '1 is for disabled and 0 is for active outcome.',
        enum: ['0 or 1'],
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        taskOutcome: {
          type: 'object',
          properties: {
            title: { type: 'string', examples: ['Interested'] },
            sentiment: { type: 'string', examples: ['POSITIVE'] },
            created_by: { type: 'string', examples: ['1'] },
            disabled: { type: 'string', examples: [''] },
            links: {
              type: 'object',
              properties: {
                tasktypeOutcomeRels: {
                  type: 'string',
                  examples: [
                    'https://youraccountname.api-us1.com/api/3/taskOutcomes/1/tasktypeOutcomeRels',
                  ],
                },
                dealTasks: {
                  type: 'string',
                  examples: ['https://youraccountname.api-us1.com/api/3/taskOutcomes/1/dealTasks'],
                },
              },
            },
            id: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '422': {
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              title: { type: 'string', examples: ['The taskOutcome title was not provided.'] },
              detail: { type: 'string', examples: [''] },
              code: { type: 'string', examples: ['field_missing'] },
              error: { type: 'string', examples: ['taskOutcome_title_was_not_provided'] },
              source: {
                type: 'object',
                properties: { pointer: { type: 'string', examples: ['/data/attributes/title'] } },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const CreateATaskOutcome1 = {
  body: {
    type: 'object',
    required: ['title', 'sentiment'],
    properties: {
      title: { type: 'string', description: 'Title of the outcome' },
      sentiment: {
        type: 'string',
        description: 'Sentiment of the outcome',
        enum: ['Positive', 'Neutral', 'Negative'],
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        taskOutcome: {
          type: 'object',
          properties: {
            title: { type: 'string', examples: ['Interested'] },
            sentiment: { type: 'string', examples: ['POSITIVE'] },
            created_by: { type: 'string', examples: ['1'] },
            disabled: { type: 'string', examples: [''] },
            links: {
              type: 'object',
              properties: {
                tasktypeOutcomeRels: {
                  type: 'string',
                  examples: [
                    'https://youraccountname.api-us1.com/api/3/taskOutcomes/1/tasktypeOutcomeRels',
                  ],
                },
                dealTasks: {
                  type: 'string',
                  examples: ['https://youraccountname.api-us1.com/api/3/taskOutcomes/1/dealTasks'],
                },
              },
            },
            id: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '422': {
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              title: {
                type: 'string',
                examples: ['A task outcome with the same title already exists.'],
              },
              detail: { type: 'string', examples: [''] },
              code: { type: 'string', examples: ['field_invalid'] },
              error: { type: 'string', examples: [''] },
              source: {
                type: 'object',
                properties: { pointer: { type: 'string', examples: ['/data/attributes/title'] } },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const CreateATaskReminder = {
  body: {
    type: 'object',
    required: ['dealTask', 'interval'],
    properties: {
      dealTask: { type: 'string', description: 'Id of task' },
      interval: {
        type: 'integer',
        description:
          "Amount of time/minutes that a reminder will be sent to a task assignee ahead of task's due date.",
        format: 'int32',
        minimum: -2147483648,
        maximum: 2147483647,
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        taskNotification: {
          type: 'object',
          properties: {
            title: { type: 'string', examples: ['Interested'] },
            sentiment: { type: 'string', examples: ['POSITIVE'] },
            created_by: { type: 'string', examples: ['1'] },
            disabled: { type: 'string', examples: [''] },
            links: {
              type: 'object',
              properties: {
                tasktypeOutcomeRels: {
                  type: 'string',
                  examples: [
                    'https://youraccountname.api-us1.com/api/3/taskOutcomes/1/tasktypeOutcomeRels',
                  ],
                },
                dealTasks: {
                  type: 'string',
                  examples: ['https://youraccountname.api-us1.com/api/3/taskOutcomes/1/dealTasks'],
                },
              },
            },
            id: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '422': {
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              title: { type: 'string', examples: ['The taskOutcome title was not provided.'] },
              detail: { type: 'string', examples: [''] },
              code: { type: 'string', examples: ['field_missing'] },
              error: { type: 'string', examples: ['taskOutcome_title_was_not_provided'] },
              source: {
                type: 'object',
                properties: { pointer: { type: 'string', examples: ['/data/attributes/title'] } },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const CreateAnAccount1 = {
  body: {
    type: 'object',
    properties: {
      accountContact: {
        properties: {
          account: {
            type: 'integer',
            description: 'Account ID',
            format: 'int32',
            examples: [1],
            minimum: -2147483648,
            maximum: 2147483647,
          },
          contact: {
            type: 'integer',
            description: 'Contact ID',
            format: 'int32',
            examples: [2],
            minimum: -2147483648,
            maximum: 2147483647,
          },
          jobTitle: {
            type: 'string',
            description: 'Job Title of the contact at the account',
            examples: ['Product Manager'],
          },
        },
        required: ['account', 'contact'],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '201': {
      type: 'object',
      properties: {
        accountContact: {
          type: 'object',
          properties: {
            account: { type: 'integer', default: 0, examples: [2] },
            contact: { type: 'integer', default: 0, examples: [1] },
            jobTitle: { type: 'string', examples: ['Product Manager'] },
            createdTimestamp: { type: 'string', examples: ['2019-06-26T10:49:10-05:00'] },
            updatedTimestamp: { type: 'string', examples: ['2019-06-26T10:49:10-05:00'] },
            links: {
              type: 'object',
              properties: {
                account: {
                  type: 'string',
                  examples: ['http://hosted.localdev/api/3/accountContacts/2/account'],
                },
                contact: {
                  type: 'string',
                  examples: ['http://hosted.localdev/api/3/accountContacts/1/contact'],
                },
              },
            },
            id: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '422': {
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              title: { type: 'string', examples: ['The account attribute was not provided'] },
              detail: { type: 'string', examples: [''] },
              code: { type: 'string', examples: ['field_missing'] },
              source: {
                type: 'object',
                properties: { pointer: { type: 'string', examples: ['/data/attributes/account'] } },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const CreateAnAccountNew = {
  body: {
    type: 'object',
    properties: {
      account: {
        properties: {
          name: { type: 'string', description: "Account's name", examples: ['Example Account'] },
          accountUrl: {
            type: 'string',
            description: "Account's website",
            examples: ['https://www.example.com'],
          },
          owner: {
            type: 'integer',
            description: 'The userId of the account owner.',
            default: 1,
            format: 'int32',
            examples: [1],
            minimum: -2147483648,
            maximum: 2147483647,
          },
          fields: {
            type: 'array',
            description:
              "Account's custom field values `{customFieldId: int, fieldValue: string, fieldCurrency?:string}[]`",
            items: {
              properties: {
                customFieldId: {
                  type: 'integer',
                  description: 'Field ID, ID of the Custom Field Meta Data',
                  format: 'int32',
                  examples: [9],
                  minimum: -2147483648,
                  maximum: 2147483647,
                },
                fieldValue: {
                  type: 'string',
                  description:
                    'Updated field value. For `currency` field, this needs to be in cents not dollars (or 100 x Base Unit).',
                  examples: ['500-1000'],
                },
                fieldCurrency: {
                  type: 'string',
                  description:
                    'Required only for the `currency` field type. The three letter currency code for the currency value',
                },
              },
              required: ['customFieldId', 'fieldValue'],
              type: 'object',
            },
          },
        },
        required: ['name'],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '201': {
      type: 'object',
      properties: {
        account: {
          type: 'object',
          properties: {
            name: { type: 'string', examples: ['Example Account'] },
            accountUrl: { type: 'string', examples: ['https://www.example.com'] },
            createdTimestamp: { type: 'string', examples: ['2019-06-12T16:52:16-05:00'] },
            updatedTimestamp: { type: 'string', examples: ['2019-06-12T16:52:16-05:00'] },
            links: { type: 'array', items: {} },
            fields: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  customFieldId: { type: 'integer', default: 0, examples: [9] },
                  fieldValue: { type: 'string', examples: ['501 - 1000'] },
                  accountId: { type: 'string', examples: ['1'] },
                },
              },
            },
            id: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '422': {
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              title: { type: 'string', examples: ['The account name was not provided.'] },
              detail: { type: 'string', examples: [''] },
              code: { type: 'string', examples: ['field_missing'] },
              source: {
                type: 'object',
                properties: { pointer: { type: 'string', examples: ['/data/attributes/name'] } },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const CreateAnAccountNote = {
  body: {
    type: 'object',
    properties: {
      note: {
        properties: { note: { type: 'string', description: "Account note's content" } },
        required: ['note'],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Account's id to assign new note to",
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '201': {
      type: 'object',
      properties: {
        accounts: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              name: { type: 'string', examples: ['Museuem of Science and Industry'] },
              accountUrl: { type: 'string', examples: ['www.msi.com'] },
              createdTimestamp: { type: 'string', examples: ['2019-04-03T13:29:35-05:00'] },
              updatedTimestamp: { type: 'string', examples: ['2019-06-12T16:59:54-05:00'] },
              id: { type: 'string', examples: ['1'] },
            },
          },
        },
        note: {
          type: 'object',
          properties: {
            cdate: { type: 'string', examples: ['2017-05-31T09:54:30-05:00'] },
            id: { type: 'string', examples: ['2'] },
            links: {
              type: 'object',
              properties: {
                activities: { type: 'string', examples: ['/api/3/notes/2/activities'] },
                mentions: { type: 'string', examples: ['/api/3/notes/2/mentions'] },
                notes: { type: 'string', examples: ['/api/3/notes/2/notes'] },
                owner: { type: 'string', examples: ['/api/3/notes/2/owner'] },
                user: { type: 'string', examples: ['/api/3/notes/2/user'] },
              },
            },
            mdate: { type: 'string', examples: ['2017-05-31T09:54:30-05:00'] },
            note: { type: 'string', examples: ['Note for the account'] },
            owner: {
              type: 'object',
              properties: {
                id: { type: 'string', examples: ['1'] },
                type: { type: 'string', examples: ['account'] },
              },
            },
            relid: { type: 'string', examples: ['1'] },
            reltype: { type: 'string', examples: ['CustomerAccount'] },
            user: { type: 'string', examples: ['1'] },
            userid: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const CreateAnAddress = {
  body: {
    type: 'object',
    properties: {
      address: {
        properties: {
          groupid: { type: 'integer', format: 'int32', minimum: -2147483648, maximum: 2147483647 },
          global: { type: 'mixed type' },
          company_name: { type: 'string', examples: ['TEST NAME'] },
          address_1: { type: 'string', examples: ['TEST ADDRESS'] },
          address_2: { type: 'string' },
          city: { type: 'string' },
          state: { type: 'string' },
          zip: { type: 'string' },
          district: { type: 'string', description: '(Optional for countries that use it)' },
          country: {
            type: 'string',
            description: "Accepts a (2) two character string - country code (eg 'US', 'CA', 'MX')",
            examples: ['US'],
          },
          allgroup: { type: 'integer', format: 'int32', minimum: -2147483648, maximum: 2147483647 },
          is_default: { type: 'boolean', description: 'Indicates default address' },
        },
        required: ['company_name', 'address_1', 'country'],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        address: {
          type: 'object',
          properties: {
            companyName: { type: 'string', examples: ['TEST NAME'] },
            address1: { type: 'string', examples: ['TEST ADDRESS'] },
            country: { type: 'integer', default: 0, examples: [3] },
            links: {
              type: 'object',
              properties: {
                addressGroup: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/addresses/3/addressGroup'],
                },
                addressList: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/addresses/3/addressList'],
                },
                forms: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/addresses/3/forms'],
                },
              },
            },
            id: { type: 'string', examples: ['3'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const CreateConnection = {
  body: {
    type: 'object',
    properties: {
      connection: {
        properties: {
          service: {
            type: 'string',
            description: 'The name of the service.',
            examples: ['fooCommerce'],
          },
          externalid: {
            type: 'string',
            description: 'The id of the account in the external service.',
            examples: ['toystore123'],
          },
          name: {
            type: 'string',
            description:
              "The name associated with the account in the external service. Often this will be a company name (e.g., 'My Toystore, Inc.').",
            examples: ['Toystore, Inc.'],
          },
          logoUrl: {
            type: 'string',
            description: 'The URL to a logo image for the external service.',
            examples: ['http://example.com/i/foo.png'],
          },
          linkUrl: {
            type: 'string',
            description:
              "The URL to a page where the integration with the external service can be managed in the third-party's website.",
            examples: ['http://example.com/foo/'],
          },
        },
        required: ['service', 'externalid', 'name', 'logoUrl', 'linkUrl'],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        connection: {
          type: 'object',
          properties: {
            isInternal: { type: 'integer', default: 0, examples: [0] },
            service: { type: 'string', examples: ['fooCommerce'] },
            externalid: { type: 'string', examples: ['toystore123'] },
            name: { type: 'string', examples: ['Toystore, Inc.'] },
            logoUrl: { type: 'string', examples: ['http://example.com/i/foo.png'] },
            linkUrl: { type: 'string', examples: ['http://example.com/foo/'] },
            cdate: { type: 'string', examples: ['2017-02-02T14:56:05-06:00'] },
            udate: { type: 'string', examples: ['2017-02-02T14:56:05-06:00'] },
            links: {
              type: 'object',
              properties: { customers: { type: 'string', examples: ['/connections/1/customers'] } },
            },
            id: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const CreateContactTag = {
  body: {
    type: 'object',
    properties: {
      contactTag: {
        properties: {
          contact: {
            type: 'integer',
            description: 'The id of the Contact',
            default: 1,
            format: 'int32',
            examples: ['1'],
            minimum: -2147483648,
            maximum: 2147483647,
          },
          tag: {
            type: 'integer',
            description: 'The id of the tag',
            default: 20,
            format: 'int32',
            examples: ['20'],
            minimum: -2147483648,
            maximum: 2147483647,
          },
        },
        required: [],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '201': {
      type: 'object',
      properties: {
        contactTag: {
          type: 'object',
          properties: {
            cdate: { type: 'string', examples: ['2017-06-08T16:11:53-05:00'] },
            contact: { type: 'string', examples: ['1'] },
            id: { type: 'string', examples: ['1'] },
            links: {
              type: 'object',
              properties: {
                contact: { type: 'string', examples: ['/1/contact'] },
                tag: { type: 'string', examples: ['/1/tag'] },
              },
            },
            tag: { type: 'string', examples: ['20'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              status: { type: 'integer', default: 0, examples: [404] },
              title: { type: 'string', examples: ['Not Found'] },
              detail: { type: 'string', examples: ['Contact not found'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '422': {
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              status: { type: 'integer', default: 0, examples: [422] },
              title: { type: 'string', examples: ['Missing attribute'] },
              source: {
                type: 'object',
                properties: { pointer: { type: 'string', examples: ['/data/attributes/contact'] } },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const CreateCustomDealFieldMeta = {
  body: {
    type: 'object',
    properties: {
      dealCustomFieldMetum: {
        properties: {
          fieldLabel: {
            type: 'string',
            description: 'Name of the field',
            examples: ['sample text field2'],
          },
          fieldType: {
            type: 'string',
            description:
              'Type of field. Possible values are: `text`, `textarea`, `date`, `datetime`, `dropdown`, `multiselect`, `radio`, `checkbox`, `hidden`, `currency`, or `number`.',
            examples: ['text'],
          },
          fieldOptions: {
            type: 'array',
            description:
              'Options for the field. Only necessary if `field_type` is `dropdown`, `multiselect`, `radio`, or `checkbox`.',
            items: { type: 'string' },
          },
          fieldDefault: {
            type: 'string',
            description: 'Default value of the field',
            examples: ['Default Text'],
          },
          fieldDefaultCurrency: {
            type: 'string',
            description:
              'The 3-letter currency code of the default currency for the field. Only necessary if `field_type` is `currency`.',
          },
          isFormVisible: {
            type: 'boolean',
            description: 'Whether or not the field is visible on forms',
            examples: [1],
          },
          displayOrder: {
            type: 'integer',
            description: 'Order for displaying the field on Manage Fields page and deal profiles',
            format: 'int32',
            examples: [1],
            minimum: -2147483648,
            maximum: 2147483647,
          },
        },
        required: ['fieldLabel', 'fieldType'],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        dealCustomFieldMetum: {
          type: 'object',
          properties: {
            id: { type: 'string', examples: ['1'] },
            fieldLabel: { type: 'string', examples: ['title'] },
            fieldType: { type: 'string', examples: ['text'] },
            fieldOptions: {},
            fieldDefault: { type: 'string', examples: ['Default Text'] },
            isFormVisible: { type: 'integer', default: 0, examples: [1] },
            isRequired: { type: 'integer', default: 0, examples: [1] },
            displayOrder: { type: 'integer', default: 0, examples: [1] },
            createdTimestamp: { type: 'string', examples: ['2018-10-22 19:57:37'] },
            updatedTimestamp: { type: 'string', examples: ['2018-10-22 19:57:37'] },
            links: {
              type: 'object',
              properties: {
                dealCustomFieldData: {
                  type: 'string',
                  examples: [
                    'https://:account.api-us1.com/api/:version/3/dealCustomFieldMeta/1/dealCustomFieldData',
                  ],
                },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '422': { $schema: 'https://json-schema.org/draft/2020-12/schema#' },
  },
} as const;
const CreateCustomDealFieldValue = {
  body: {
    type: 'object',
    properties: {
      dealCustomFieldDatum: {
        properties: {
          dealId: {
            type: 'integer',
            description: 'The ID of the deal this field value relates to',
            format: 'int32',
            examples: ['2'],
            minimum: -2147483648,
            maximum: 2147483647,
          },
          customFieldId: {
            type: 'integer',
            description: 'The ID of the custom field metum this field value relates to',
            format: 'int32',
            examples: ['1'],
            minimum: -2147483648,
            maximum: 2147483647,
          },
          fieldValue: {
            type: 'string',
            description:
              'Values for the field. (For `currency` field only, this needs to be in cents: eg, 10050 = 100.5)',
            examples: ['test title'],
          },
          fieldCurrency: {
            type: 'string',
            description: 'Currency code for the money value',
            default: 'Default Currency for Field',
          },
        },
        required: ['dealId', 'customFieldId', 'fieldValue'],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        dealCustomFieldDatum: {
          type: 'object',
          properties: {
            id: { type: 'string', examples: ['5'] },
            dealCustomFieldMetumId: { type: 'integer', default: 0, examples: [1] },
            dealId: { type: 'integer', default: 0, examples: [2] },
            customFieldId: { type: 'integer', default: 0, examples: [1] },
            createdTimestamp: { type: 'string', examples: ['2018-11-06 02:27:05'] },
            updatedTimestamp: { type: 'string', examples: ['2018-11-06 02:27:05'] },
            fieldValue: { type: 'string', examples: ['test title'] },
            links: {
              type: 'object',
              properties: {
                deal: {
                  type: 'string',
                  examples: [
                    'https://:account.api-us1.com/api/:version/dealCustomFieldData/5/deal',
                  ],
                },
                dealCustomFieldMetum: {
                  type: 'string',
                  examples: [
                    'https://:account.api-us1.com/api/:version/dealCustomFieldData/5/dealCustomFieldMetum',
                  ],
                },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '422': {
      oneOf: [
        {
          type: 'object',
          properties: {
            errors: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  status: { type: 'string', examples: ['422'] },
                  title: { type: 'string', examples: ['The given data was invalid.'] },
                  detail: { type: 'string', examples: ['The deal id field is required.'] },
                },
              },
            },
          },
        },
        {
          type: 'object',
          properties: {
            errors: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  detail: { type: 'string', examples: ['A related deal was not found.'] },
                },
              },
            },
          },
        },
        {
          type: 'object',
          properties: {
            errors: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  detail: { type: 'string', examples: ['A custom field value must be provided.'] },
                },
              },
            },
          },
        },
        {
          type: 'object',
          properties: {
            errors: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  detail: {
                    type: 'string',
                    examples: [
                      'The custom field value `abc` could not be saved to the custom field of type `date`.',
                    ],
                  },
                },
              },
            },
          },
        },
      ],
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const CreateCustomFieldOptions = {
  body: {
    type: 'object',
    required: ['field', 'value'],
    properties: {
      field: {
        type: 'integer',
        description: 'ID of the custom field to add options to',
        format: 'int32',
        minimum: -2147483648,
        maximum: 2147483647,
      },
      label: { type: 'string', description: 'Name of the option' },
      value: { type: 'string', description: 'Value of the option' },
      orderid: {
        type: 'integer',
        description: 'Order for displaying the custom field option',
        format: 'int32',
        minimum: -2147483648,
        maximum: 2147483647,
      },
      isdefault: {
        type: 'boolean',
        description: 'Whether or not this option is the default value',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '201': {
      type: 'object',
      properties: {
        fieldOptions: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              value: { type: 'string', examples: ['Option 1'] },
              field: { type: 'integer', default: 0, examples: [1] },
              cdate: { type: 'string', examples: ['2019-01-02T10:38:33-05:00'] },
              udate: { type: 'string', examples: ['2019-01-02T10:38:33-05:00'] },
              label: { type: 'string', examples: ['Option 1'] },
              links: {
                type: 'object',
                properties: {
                  field: {
                    type: 'string',
                    examples: ['https://account.api-us1.com/api/3/fieldOptions/45/field'],
                  },
                },
              },
              id: { type: 'string', examples: ['5'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '422': {
      type: 'object',
      properties: {
        errors: {
          type: 'string',
          examples: [
            'Bulk operation failed. Request must contain an array of fieldOption objects.',
          ],
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const CreateCustomer = {
  body: {
    type: 'object',
    properties: {
      ecomCustomer: {
        properties: {
          connectionid: {
            type: 'string',
            description:
              'The id of the connection object for the service where the customer originates.',
            examples: ['1'],
          },
          externalid: {
            type: 'string',
            description: 'The id of the customer in the external service.',
            examples: ['56789'],
          },
          email: {
            type: 'string',
            description: 'The email address of the customer.',
            examples: ['alice@example.com'],
          },
          acceptsMarketing: {
            type: 'string',
            description:
              'Indication of whether customer has opt-ed in to marketing communications. 0 = not opted-in, 1 = opted-in. A value of 0 means the contact will match the "Has not opted in to marketing" segment condition and a value of 1 means the contact will match the "Has opted in to marketing" segment condition.',
            examples: ['1'],
          },
        },
        required: ['connectionid', 'externalid', 'email'],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '201': {
      type: 'object',
      properties: {
        ecomCustomer: {
          type: 'object',
          properties: {
            connectionid: { type: 'string', examples: ['1'] },
            externalid: { type: 'string', examples: ['56789'] },
            email: { type: 'string', examples: ['alice@example.com'] },
            links: {
              type: 'object',
              properties: {
                connection: { type: 'string', examples: ['/api/3/ecomCustomers/1/connection'] },
                orders: { type: 'string', examples: ['/api/3/ecomCustomers/1/orders'] },
              },
            },
            id: { type: 'string', examples: ['1'] },
            connection: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const CreateFieldvalue = {
  body: {
    type: 'object',
    properties: {
      fieldValue: {
        properties: {
          contact: {
            type: 'string',
            description: "ID of the contact whose field value you're updating",
            examples: [2],
          },
          field: {
            type: 'string',
            description: "ID of the custom field whose value you're updating for the contact",
            examples: [3],
          },
          value: {
            type: 'string',
            description:
              "Value for the field that you're updating. For multi-select options this needs to be in the format of ||option1||option2||",
            examples: ['Blue'],
          },
        },
        required: ['contact', 'field', 'value'],
        type: 'object',
      },
      useDefaults: {
        type: 'boolean',
        description:
          'If true, this will populate the missing required fields for this contact with default values',
        default: false,
        examples: [true],
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        contacts: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              cdate: { type: 'string', examples: ['2018-08-06T16:26:04-05:00'] },
              email: { type: 'string', examples: ['ikreimont+2@activecampaign.com'] },
              phone: { type: 'string', examples: [''] },
              firstName: { type: 'string', examples: [''] },
              lastName: { type: 'string', examples: [''] },
              orgid: { type: 'string', examples: ['0'] },
              segmentio_id: { type: 'string', examples: [''] },
              bounced_hard: { type: 'string', examples: ['0'] },
              bounced_soft: { type: 'string', examples: ['0'] },
              bounced_date: {},
              ip: { type: 'string', examples: ['0'] },
              ua: {},
              hash: { type: 'string', examples: ['14d8c4418ae944c68e9dde4a975854cc'] },
              socialdata_lastcheck: {},
              email_local: { type: 'string', examples: [''] },
              email_domain: { type: 'string', examples: [''] },
              sentcnt: { type: 'string', examples: ['0'] },
              rating_tstamp: {},
              gravatar: { type: 'string', examples: ['0'] },
              deleted: { type: 'string', examples: ['0'] },
              anonymized: { type: 'string', examples: ['0'] },
              adate: {},
              udate: { type: 'string', examples: ['2018-10-01T17:18:40-05:00'] },
              edate: {},
              deleted_at: {},
              created_utc_timestamp: { type: 'string', examples: ['2018-09-21 12:04:40'] },
              updated_utc_timestamp: { type: 'string', examples: ['2018-10-01 17:18:40'] },
              links: {
                type: 'object',
                properties: {
                  bounceLogs: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/2/bounceLogs'],
                  },
                  contactAutomations: {
                    type: 'string',
                    examples: [
                      'https://:account.api-us1.com/api/:version/contacts/2/contactAutomations',
                    ],
                  },
                  contactData: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/2/contactData'],
                  },
                  contactGoals: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/2/contactGoals'],
                  },
                  contactLists: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/2/contactLists'],
                  },
                  contactLogs: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/2/contactLogs'],
                  },
                  contactTags: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/2/contactTags'],
                  },
                  contactDeals: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/2/contactDeals'],
                  },
                  deals: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/2/deals'],
                  },
                  fieldValues: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/2/fieldValues'],
                  },
                  geoIps: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/2/geoIps'],
                  },
                  notes: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/2/notes'],
                  },
                  organization: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/2/organization'],
                  },
                  plusAppend: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/2/plusAppend'],
                  },
                  trackingLogs: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/2/trackingLogs'],
                  },
                  scoreValues: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/2/scoreValues'],
                  },
                },
              },
              id: { type: 'string', examples: ['2'] },
              organization: {},
            },
          },
        },
        fieldValue: {
          type: 'object',
          properties: {
            contact: { type: 'integer', default: 0, examples: [2] },
            field: { type: 'integer', default: 0, examples: [3] },
            value: { type: 'string', examples: ['Blue'] },
            cdate: { type: 'string', examples: ['2018-10-01T17:18:40-05:00'] },
            udate: { type: 'string', examples: ['2018-10-01T17:18:40-05:00'] },
            links: {
              type: 'object',
              properties: {
                owner: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/fieldValues/15/owner'],
                },
                field: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/fieldValues/15/field'],
                },
              },
            },
            owner: { type: 'integer', default: 0, examples: [2] },
            id: { type: 'string', examples: ['15'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '403': {
      type: 'object',
      properties: { message: { type: 'string', examples: ['Forbidden'] } },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const CreateNewContactautomation = {
  body: {
    type: 'object',
    properties: {
      contactAutomation: {
        properties: {
          contact: {
            type: 'integer',
            description: 'Contact ID of the Contact, to be linked to the contactAutomation',
            format: 'int32',
            examples: ['117'],
            minimum: -2147483648,
            maximum: 2147483647,
          },
          automation: {
            type: 'integer',
            description: 'Automation ID of the automation, to be linked to the contactAutomation',
            format: 'int32',
            examples: ['42'],
            minimum: -2147483648,
            maximum: 2147483647,
          },
        },
        required: ['contact', 'automation'],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '201': {
      type: 'object',
      properties: {
        contacts: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              cdate: { type: 'string', examples: ['2018-08-06T16:26:06-05:00'] },
              email: { type: 'string', examples: ['johndoe@example.com'] },
              phone: { type: 'string', examples: [''] },
              firstName: { type: 'string', examples: [''] },
              lastName: { type: 'string', examples: [''] },
              orgid: { type: 'string', examples: ['0'] },
              segmentio_id: { type: 'string', examples: [''] },
              bounced_hard: { type: 'string', examples: ['0'] },
              bounced_soft: { type: 'string', examples: ['0'] },
              bounced_date: {},
              ip: { type: 'string', examples: ['2130706433'] },
              ua: {},
              hash: { type: 'string', examples: ['054aa0acede49e07a844420c879b3c30'] },
              socialdata_lastcheck: {},
              email_local: { type: 'string', examples: [''] },
              email_domain: { type: 'string', examples: [''] },
              sentcnt: { type: 'string', examples: ['0'] },
              rating_tstamp: {},
              gravatar: { type: 'string', examples: ['0'] },
              deleted: { type: 'string', examples: ['0'] },
              anonymized: { type: 'string', examples: ['0'] },
              adate: {},
              udate: {},
              edate: {},
              deleted_at: {},
              created_utc_timestamp: { type: 'string', examples: ['2018-09-21 12:04:40'] },
              updated_utc_timestamp: { type: 'string', examples: ['2018-09-21 12:04:40'] },
              links: {
                type: 'object',
                properties: {
                  bounceLogs: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/64/bounceLogs'],
                  },
                  contactAutomations: {
                    type: 'string',
                    examples: [
                      'https://:account.api-us1.com/api/:version/contacts/64/contactAutomations',
                    ],
                  },
                  contactData: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/64/contactData'],
                  },
                  contactGoals: {
                    type: 'string',
                    examples: [
                      'https://:account.api-us1.com/api/:version/contacts/64/contactGoals',
                    ],
                  },
                  contactLists: {
                    type: 'string',
                    examples: [
                      'https://:account.api-us1.com/api/:version/contacts/64/contactLists',
                    ],
                  },
                  contactLogs: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/64/contactLogs'],
                  },
                  contactTags: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/64/contactTags'],
                  },
                  contactDeals: {
                    type: 'string',
                    examples: [
                      'https://:account.api-us1.com/api/:version/contacts/64/contactDeals',
                    ],
                  },
                  deals: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/64/deals'],
                  },
                  fieldValues: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/64/fieldValues'],
                  },
                  geoIps: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/64/geoIps'],
                  },
                  notes: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/64/notes'],
                  },
                  organization: {
                    type: 'string',
                    examples: [
                      'https://:account.api-us1.com/api/:version/contacts/64/organization',
                    ],
                  },
                  plusAppend: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/64/plusAppend'],
                  },
                  trackingLogs: {
                    type: 'string',
                    examples: [
                      'https://:account.api-us1.com/api/:version/contacts/64/trackingLogs',
                    ],
                  },
                  scoreValues: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/64/scoreValues'],
                  },
                },
              },
              id: { type: 'string', examples: ['64'] },
              organization: {},
            },
          },
        },
        contactAutomation: {
          type: 'object',
          properties: {
            contact: { type: 'string', examples: ['64'] },
            seriesid: { type: 'string', examples: ['2'] },
            startid: { type: 'integer', default: 0, examples: [0] },
            status: { type: 'integer', default: 0, examples: [1] },
            lastblock: { type: 'string', examples: ['4'] },
            completedElements: { type: 'string', examples: ['1'] },
            totalElements: { type: 'string', examples: ['2'] },
            completed: { type: 'integer', default: 0, examples: [0] },
            completeValue: { type: 'integer', default: 0, examples: [50] },
            links: {
              type: 'object',
              properties: {
                automation: {
                  type: 'string',
                  examples: [
                    'https://:account.api-us1.com/api/:version/contactAutomations/3/automation',
                  ],
                },
                contact: {
                  type: 'string',
                  examples: [
                    'https://:account.api-us1.com/api/:version/contactAutomations/3/contact',
                  ],
                },
                contactGoals: {
                  type: 'string',
                  examples: [
                    'https://:account.api-us1.com/api/:version/contactAutomations/3/contactGoals',
                  ],
                },
              },
            },
            id: { type: 'string', examples: ['3'] },
            automation: { type: 'string', examples: ['2'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '403': {
      type: 'object',
      properties: { message: { type: 'string', examples: ['Could not create SubscriberSeries'] } },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const CreateNewList = {
  body: {
    type: 'object',
    properties: {
      list: {
        properties: {
          name: {
            type: 'string',
            description: 'Name of the list to create',
            examples: ['Name of List'],
          },
          stringid: {
            type: 'string',
            description: "URL-safe list name. Example: 'list-name-sample'",
            examples: ['Name-of-list'],
          },
          sender_url: {
            type: 'string',
            description: 'The website URL this list is for.',
            examples: ['http://activecampaign.com'],
          },
          sender_reminder: {
            type: 'string',
            description:
              'A reminder for your contacts as to why they are on this list and you are messaging them.',
            examples: [
              'You are receiving this email as you subscribed to a newsletter when making an order on our site.',
            ],
          },
          send_last_broadcast: {
            type: 'boolean',
            description:
              'Boolean value indicating whether or not to send the last sent campaign to this list to a new subscriber upon subscribing. 1 = yes, 0 = no',
            default: false,
          },
          carboncopy: {
            type: 'string',
            description:
              'Comma-separated list of email addresses to send a copy of all mailings to upon send',
          },
          subscription_notify: {
            type: 'string',
            description:
              'Comma-separated list of email addresses to notify when a new subscriber joins this list.',
          },
          unsubscription_notify: {
            type: 'string',
            description:
              'Comma-separated list of email addresses to notify when a subscriber unsubscribes from this list.',
          },
          user: {
            type: 'integer',
            description:
              'User Id of the list owner.  A list owner is able to control campaign branding.  A property of list.userid also exists on this object; both properties map to the same list owner field and are being maintained in the response object for backward compatibility.  If you post values for both list.user and list.userid, the value of list.user will be used.',
            format: 'int32',
            examples: [1],
            minimum: -2147483648,
            maximum: 2147483647,
          },
        },
        required: ['name', 'stringid', 'sender_url', 'sender_reminder'],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        list: {
          type: 'object',
          properties: {
            name: { type: 'string', examples: ['Name of List'] },
            stringid: { type: 'string', examples: ['Name-of-list'] },
            cdate: { type: 'string', examples: ['2019-02-27T19:06:23-05:00'] },
            udate: { type: 'string', examples: ['2019-02-27T19:06:23-05:00'] },
            links: {
              type: 'object',
              properties: {
                contactGoalLists: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/lists/6/contactGoalLists'],
                },
                user: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/lists/6/user'],
                },
                addressLists: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/lists/6/addressLists'],
                },
              },
            },
            id: { type: 'string', examples: ['6'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '403': {
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              status: { type: 'integer', default: 0, examples: [403] },
              title: { type: 'string', examples: ['Forbidden'] },
              detail: { type: 'string', examples: ['You do not have permission to create lists.'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const CreateOrUpdateRecord = {
  body: {
    type: 'object',
    properties: {
      record: {
        properties: {
          id: { type: 'string', description: "The Record's id", examples: ['test-obj-1'] },
          externalId: {
            type: 'string',
            description: "The Record's external id",
            examples: ['test-obj-1'],
          },
          fields: {
            type: 'array',
            items: {
              properties: {
                id: {
                  type: 'string',
                  description: 'id of the field',
                  examples: ['my-number-field'],
                },
                value: {
                  type: 'mixed type',
                  description: 'Data type, appropriate for the field',
                  examples: [100],
                },
              },
              type: 'object',
            },
          },
          relationships: {
            type: 'array',
            items: {
              properties: {
                'primary-contact': {
                  type: 'array',
                  description: 'List of Contact integers',
                  default: [],
                  items: {
                    type: 'integer',
                    format: 'int32',
                    minimum: -2147483648,
                    maximum: 2147483647,
                  },
                },
              },
              type: 'object',
            },
          },
        },
        required: [],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          schemaId: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of schema',
          },
        },
        required: ['schemaId'],
      },
    ],
  },
  response: {
    '201': {
      type: 'object',
      properties: {
        record: {
          type: 'object',
          properties: {
            id: { type: 'string', examples: ['test-obj-1'] },
            externalId: { type: 'string', examples: ['test-obj-1'] },
            schemaId: { type: 'string', examples: ['6449c3f3-b68d-46d1-850b-c8aea998ce1b'] },
            fields: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'string', examples: ['my-number-field'] },
                  value: { type: 'integer', default: 0, examples: [100] },
                },
              },
            },
            relationships: {
              type: 'object',
              properties: {
                account: { type: 'array', items: { type: 'integer', default: 0, examples: [123] } },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              status: { type: 'integer', default: 0, examples: [400] },
              title: { type: 'string', examples: ['Bad Request'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '422': {
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              title: { type: 'string', examples: ['Invalid value for field "{field_name}"'] },
              detail: {
                type: 'string',
                examples: ['{field_name} cannot accept a value that is not defined in the schema.'],
              },
              source: {
                type: 'object',
                properties: {
                  type: { type: 'string', examples: ['pointer'] },
                  value: { type: 'string', examples: ['/data/attributes/{field_name}'] },
                },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const CreateOrder = {
  body: {
    type: 'object',
    properties: {
      ecomOrder: {
        properties: {
          externalid: {
            type: 'string',
            description:
              'The id of the order in the external service. ONLY REQUIRED IF EXTERNALCHECKOUTID NOT INCLUDED.',
            examples: ['3246315233'],
          },
          externalcheckoutid: {
            type: 'string',
            description:
              'The id of the cart in the external service. ONLY REQUIRED IF EXTERNALID IS NOT INCLUDED.',
          },
          source: {
            type: 'integer',
            description:
              'The order source code. 0 - historical, 1 - real-time. Only real-time orders (source = 1) will show up on your Ecommerce Dashboard and trigger the “Makes a purchase” automation start, abandoned cart actions, customer conversions, or revenue attributions.',
            format: 'int32',
            examples: ['1'],
            minimum: -2147483648,
            maximum: 2147483647,
          },
          email: {
            type: 'string',
            description: 'The email address of the customer who placed the order.',
            examples: ['alice@example.com'],
          },
          orderProducts: {
            description: 'ecomOrder.orderProducts.description',
            properties: {
              name: { type: 'string', description: 'The name of the product' },
              price: {
                type: 'integer',
                description:
                  'The price of the product, in cents. (i.e. $456.78 => 45678). Must be greater than or equal to zero.',
                format: 'int32',
                minimum: -2147483648,
                maximum: 2147483647,
              },
              quantity: {
                type: 'integer',
                description: 'The quantity ordered.',
                format: 'int32',
                minimum: -2147483648,
                maximum: 2147483647,
              },
              externalid: {
                type: 'string',
                description: 'The id of the product in the external service.',
              },
              category: { type: 'string', description: 'The category of the product.' },
              sku: { type: 'string', description: 'The SKU for the product' },
              description: { type: 'string', description: 'The description of the product' },
              imageUrl: {
                type: 'string',
                description: 'An Image URL that displays an image of the product',
              },
              productUrl: {
                type: 'string',
                description: 'A URL linking to the product in your store',
              },
            },
            required: ['name', 'price', 'quantity', 'externalid'],
            type: 'object',
          },
          totalPrice: {
            type: 'integer',
            description:
              'The total price of the order in cents, including tax and shipping charges. (i.e. $456.78 => 45678). Must be greater than or equal to zero.',
            format: 'int32',
            examples: [9111],
            minimum: -2147483648,
            maximum: 2147483647,
          },
          shippingAmount: {
            type: 'integer',
            description: 'The total shipping amount in cents for the order',
            format: 'int32',
            examples: [200],
            minimum: -2147483648,
            maximum: 2147483647,
          },
          taxAmount: {
            type: 'integer',
            description: 'The total tax amount for the order in cents',
            format: 'int32',
            examples: [500],
            minimum: -2147483648,
            maximum: 2147483647,
          },
          discountAmount: {
            type: 'integer',
            description: 'The total discount amount for the order in cents',
            format: 'int32',
            examples: [100],
            minimum: -2147483648,
            maximum: 2147483647,
          },
          currency: {
            type: 'string',
            description: "The currency of the order (3-digit ISO code, e.g., 'USD').",
            examples: ['USD'],
          },
          connectionid: {
            type: 'integer',
            description: 'The id of the connection from which this order originated.',
            format: 'int32',
            examples: ['1'],
            minimum: -2147483648,
            maximum: 2147483647,
          },
          customerid: {
            type: 'integer',
            description: 'The id of the customer associated with this order.',
            format: 'int32',
            examples: ['1'],
            minimum: -2147483648,
            maximum: 2147483647,
          },
          orderUrl: {
            type: 'string',
            description: 'The URL for the order in the external service.',
            examples: ['https://example.com/orders/3246315233'],
          },
          externalCreatedDate: {
            type: 'string',
            description: 'The date the order was placed.',
            format: 'date',
            examples: ['2016-09-13T17:41:39-04:00'],
          },
          externalUpdatedDate: {
            type: 'string',
            description: 'The date the order was updated.',
            examples: ['2016-09-14T17:41:39-04:00'],
          },
          abandonedDate: {
            type: 'string',
            description:
              'The date the cart was abandoned. REQUIRED ONLY IF INCLUDING EXTERNALCHECKOUTID.',
          },
          shippingMethod: {
            type: 'string',
            description: 'The shipping method of the order.',
            examples: ['UPS Ground'],
          },
          orderNumber: {
            type: 'string',
            description: 'The order number. This can be different than the externalid.',
            examples: ['myorder-123'],
          },
          orderDiscounts: {
            properties: {
              name: { type: 'string', description: 'The discount code or name of the discount' },
              type: {
                type: 'string',
                description:
                  "The type of discount, either 'order' for discount on the order, or 'shipping' for free shipping.",
              },
              discountAmount: {
                type: 'integer',
                description: 'The amount of the discount in cents.',
                format: 'int32',
                minimum: -2147483648,
                maximum: 2147483647,
              },
            },
            required: [],
            type: 'object',
          },
        },
        required: [
          'externalid',
          'externalcheckoutid',
          'source',
          'email',
          'totalPrice',
          'currency',
          'connectionid',
          'customerid',
          'externalCreatedDate',
          'abandonedDate',
        ],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '201': {
      type: 'object',
      properties: {
        connections: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              service: { type: 'string', examples: ['example'] },
              externalid: { type: 'string', examples: ['examplestore'] },
              name: { type: 'string', examples: ['My Example Store'] },
              isInternal: { type: 'string', examples: ['0'] },
              connectionType: { type: 'string', examples: ['ecommerce'] },
              status: { type: 'string', examples: ['1'] },
              syncStatus: { type: 'string', examples: ['0'] },
              sync_request_time: {},
              sync_start_time: {},
              lastSync: {},
              logoUrl: { type: 'string', examples: ['https://myexamplestore.com/images/logo.jpg'] },
              linkUrl: { type: 'string', examples: ['https://myexamplestore.com'] },
              cdate: { type: 'string', examples: ['2018-01-12T13:13:53-06:00'] },
              udate: { type: 'string', examples: ['2018-01-12T13:13:53-06:00'] },
              credentialExpiration: {},
              links: {
                type: 'object',
                properties: {
                  options: {
                    type: 'string',
                    examples: ['https://exampleaccount.api-us1.com/api/3/connections/1/options'],
                  },
                  customers: {
                    type: 'string',
                    examples: [
                      'https://exampleaccount.api-us1.com.api-us1.com/api/3/connections/1/customers',
                    ],
                  },
                },
              },
              id: { type: 'string', examples: ['1'] },
              serviceName: { type: 'string', examples: ['shopify'] },
            },
          },
        },
        ecomOrderProducts: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              externalid: { type: 'string', examples: ['PROD12345'] },
              name: { type: 'string', examples: ['Pogo Stick'] },
              price: { type: 'integer', default: 0, examples: [4900] },
              quantity: { type: 'integer', default: 0, examples: [1] },
              category: { type: 'string', examples: ['Toys'] },
              sku: { type: 'string', examples: ['POGO-12'] },
              description: { type: 'string', examples: ['lorem ipsum...'] },
              imageUrl: { type: 'string', examples: ['https://example.com/product.jpg'] },
              productUrl: { type: 'string', examples: ['https://store.example.com/product12345'] },
            },
          },
        },
        ecomOrderDiscounts: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              name: { type: 'string', examples: ['1OFF'] },
              type: { type: 'string', examples: ['order'] },
              orderid: { type: 'string', examples: ['5355'] },
              discountAmount: { type: 'string', examples: ['100'] },
              id: { type: 'string', examples: ['1'] },
              createdDate: { type: 'string', examples: ['2019-09-05T12:16:18-05:00'] },
              updatedDate: { type: 'string', examples: ['2019-09-05T12:16:18-05:00'] },
            },
          },
        },
        ecomOrder: {
          type: 'object',
          properties: {
            externalid: { type: 'string', examples: ['3246315234'] },
            source: { type: 'string', examples: ['1'] },
            email: { type: 'string', examples: ['alice@example.com'] },
            currency: { type: 'string', examples: ['USD'] },
            connectionid: { type: 'string', examples: ['1'] },
            customerid: { type: 'string', examples: ['1'] },
            orderUrl: { type: 'string', examples: ['https://example.com/orders/3246315233'] },
            shippingMethod: { type: 'string', examples: ['UPS Ground'] },
            totalPrice: { type: 'integer', default: 0, examples: [9111] },
            shippingAmount: { type: 'integer', default: 0, examples: [200] },
            taxAmount: { type: 'integer', default: 0, examples: [500] },
            discountAmount: { type: 'integer', default: 0, examples: [100] },
            externalCreatedDate: { type: 'string', examples: ['2016-09-13T16:41:39-05:00'] },
            totalProducts: { type: 'integer', default: 0, examples: [2] },
            createdDate: { type: 'string', examples: ['2019-09-05T12:16:18-05:00'] },
            updatedDate: { type: 'string', examples: ['2019-09-05T12:16:18-05:00'] },
            state: { type: 'integer', default: 0, examples: [1] },
            connection: { type: 'string', examples: ['1'] },
            orderProducts: { type: 'array', items: { type: 'string', examples: ['1'] } },
            orderDiscounts: { type: 'array', items: { type: 'string', examples: ['1'] } },
            customer: { type: 'string', examples: ['1'] },
            orderDate: { type: 'string', examples: ['2016-09-13T16:41:39-05:00'] },
            tstamp: { type: 'string', examples: ['2019-09-05T12:16:18-05:00'] },
            links: {
              type: 'object',
              properties: {
                connection: {
                  type: 'string',
                  examples: ['https://exampleaccount.api-us1.com/api/3/ecomOrders/1/connection'],
                },
                customer: {
                  type: 'string',
                  examples: ['https://exampleaccount.api-us1.com/api/3/ecomOrders/1/customer'],
                },
                orderProducts: {
                  type: 'string',
                  examples: ['https://exampleaccount.api-us1.com/api/3/ecomOrders/1/orderProducts'],
                },
                orderDiscounts: {
                  type: 'string',
                  examples: [
                    'https://exampleaccount.api-us1.com/api/3/ecomOrders/1/orderDiscounts',
                  ],
                },
                orderActivities: {
                  type: 'string',
                  examples: [
                    'https://exampleaccount.api-us1.com/api/3/ecomOrders/1/orderActivities',
                  ],
                },
              },
            },
            id: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const CreateTask = {
  body: {
    type: 'object',
    properties: {
      dealTask: {
        properties: {
          title: { type: 'string', description: 'The title to be assigned to the task' },
          ownerType: {
            type: 'string',
            description:
              'The name of the relating object. Valid values are `contact` or `deal`. (see relationships table)',
            default: 'deal',
            examples: ['contact'],
          },
          relid: {
            type: 'integer',
            description: 'The id of the relational object for this task',
            format: 'int32',
            examples: ['7'],
            minimum: -2147483648,
            maximum: 2147483647,
          },
          status: {
            type: 'integer',
            description:
              'Task status means complete or incomplete. 1 is complete and 0 is incomplete.',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
          },
          note: {
            type: 'string',
            description: 'The content describing the task',
            examples: ['Testing Task'],
          },
          duedate: {
            type: 'string',
            description: 'Due date of the task',
            format: 'date',
            examples: ['2017-02-25T12:00:00-06:00'],
          },
          dealTasktype: {
            type: 'integer',
            description: 'The type of the task based on the available Task Types in the account',
            format: 'int32',
            examples: ['1'],
            minimum: -2147483648,
            maximum: 2147483647,
          },
          assignee: {
            type: 'integer',
            description: 'The id of an user the task will be assigned to',
            format: 'int32',
            examples: [2],
            minimum: -2147483648,
            maximum: 2147483647,
          },
          triggerAutomationOnCreate: {
            type: 'integer',
            description: 'Id of an automation that will be triggered when the task is created.',
            format: 'int32',
            examples: [100],
            minimum: -2147483648,
            maximum: 2147483647,
          },
          doneAutomation: {
            type: 'integer',
            description: 'Id of an automation that will be triggered when the task is completed.',
            format: 'int32',
            examples: [101],
            minimum: -2147483648,
            maximum: 2147483647,
          },
        },
        required: ['relid', 'duedate', 'dealTasktype'],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '201': { $schema: 'https://json-schema.org/draft/2020-12/schema#' },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const CreateUser = {
  body: {
    type: 'object',
    properties: {
      user: {
        properties: {
          username: { type: 'string', description: 'Username', examples: ['jdoe'] },
          email: {
            type: 'string',
            description: 'Email address',
            examples: ['johndoe@example.com'],
          },
          firstName: { type: 'string', description: 'First name', examples: ['John'] },
          lastName: { type: 'string', description: 'Last name', examples: ['Doe'] },
          group: {
            type: 'integer',
            description: 'Group ID',
            default: null,
            format: 'int32',
            examples: [4],
            minimum: -2147483648,
            maximum: 2147483647,
          },
          password: {
            type: 'string',
            description: 'Plain text password',
            examples: ['myPa$$w0rd'],
          },
        },
        required: [],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '201': {
      type: 'object',
      properties: {
        user: {
          type: 'object',
          properties: {
            username: { type: 'string', examples: ['jdoe'] },
            email: { type: 'string', examples: ['johndoe@example.com'] },
            firstName: { type: 'string', examples: ['John'] },
            lastName: { type: 'string', examples: ['Doe'] },
            lang: { type: 'string', examples: ['english'] },
            localZoneid: { type: 'string', examples: ['America/New_York'] },
            cdate: { type: 'string', examples: ['2022-02-02T16:01:44-06:00'] },
            udate: { type: 'string', examples: ['2022-02-02T16:01:44-06:00'] },
            links: {
              type: 'object',
              properties: {
                lists: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/users/3/lists'],
                },
                userGroup: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/users/3/userGroup'],
                },
                dealGroupTotals: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/users/3/dealGroupTotals'],
                },
                dealGroupUsers: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/users/3/dealGroupUsers'],
                },
                configs: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/users/3/configs'],
                },
                dealConnection: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/users/3/dealConnection'],
                },
                userConversationsPermission: {
                  type: 'string',
                  examples: [
                    'https://:account.api-us1.com/api/3/users/3/userConversationsPermission',
                  ],
                },
                seatUser: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/users/3/seatUser'],
                },
              },
            },
            id: { type: 'string', examples: ['3'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const CreateWebhook = {
  body: {
    type: 'object',
    properties: {
      webhook: {
        properties: {
          name: {
            type: 'string',
            description: 'A name (or label) to give this webhook.',
            examples: ['My Hook'],
          },
          url: {
            type: 'string',
            description:
              'The URL where the webhook will send the POST request when the event occurs. Note that for https endpoints, we only can send webhooks on port 443, the default https port.',
            examples: ['http://example.com/my-hook'],
          },
          events: {
            type: 'array',
            description: 'The [event(s)](#section-events) that will trigger the webhook to fire.',
            items: { type: 'string', examples: ['subscribe'] },
          },
          sources: {
            type: 'array',
            description: 'The [source(s)](#section-sources) causing an event to occur.',
            items: { type: 'string', examples: ['public'] },
          },
          listid: {
            type: 'integer',
            description:
              'The id of a list associated with an event. If set, only events happening on this list id will trigger the webhook. This parameter has no effect on the following webhook events:     "subscriber_note",    "contact_tag_added",    "contact_tag_removed",    "contact_task_add",    "list_add",    "sms_sent",    "sms_reply",    "sms_unsub",    "deal_add",    "deal_update",    "deal_note_add",    "deal_pipeline_add",    "deal_stage_add",    "deal_task_add",    "deal_tasktype_add",    "deal_task_complete",    "account_add",    "account_update",    "account_contact_add",    "account_contact_update",',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
          },
        },
        required: ['name', 'url', 'events', 'sources'],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '201': {
      type: 'object',
      properties: {
        webhook: {
          type: 'object',
          properties: {
            cdate: { type: 'string', examples: ['2016-01-01T12:00:00-00:00'] },
            listid: { type: 'string', examples: ['0'] },
            name: { type: 'string', examples: ['My Hook'] },
            url: { type: 'string', examples: ['http://example.com/my-hook'] },
            events: { type: 'array', items: { type: 'string', examples: ['subscribe'] } },
            sources: { type: 'array', items: { type: 'string', examples: ['public'] } },
            links: { type: 'array', items: {} },
            id: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const DeleteAContactautomation = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the contactAutomation to delete',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '403': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for SubscriberSeries with id 3'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const DeleteACustomDealFieldData = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the dealCustomFieldData to retrieve',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: { message: { type: 'string', examples: ['DealCustomFieldData deleted.'] } },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              status: { type: 'integer', default: 0, examples: [404] },
              title: { type: 'string', examples: ['Not Found'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const DeleteACustomDealFieldMeta = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the field to delete',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: { message: { type: 'string', examples: ['DealCustomFieldMeta deleted.'] } },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              status: { type: 'integer', default: 0, examples: [404] },
              title: { type: 'string', examples: ['Not Found'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const DeleteACustomField = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the field to delete',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: { message: { type: 'string', examples: ['AccountCustomFieldMeta deleted.'] } },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              status: { type: 'integer', default: 0, examples: [404] },
              title: { type: 'string', examples: ['Not Found'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const DeleteACustomFieldRelationshipToLists = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          fieldRelId: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Field relationship ID to be deleted',
          },
        },
        required: ['fieldRelId'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '403': {
      type: 'object',
      properties: { message: { type: 'string', examples: ['Forbidden'] } },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const DeleteACustomFieldValue = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the dealCustomFieldData to retrieve',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: { message: { type: 'string', examples: ['AccountCustomFieldData deleted.'] } },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              status: { type: 'integer', default: 0, examples: [404] },
              title: { type: 'string', examples: ['Not Found'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const DeleteADeal = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "The Deal's id",
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': { $schema: 'https://json-schema.org/draft/2020-12/schema#' },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const DeleteADealRole = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Deal role's id",
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const DeleteADealStage = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Deal stage's id",
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const DeleteADealTaskType = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Deal task type's id",
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const DeleteAField = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the field option to delete',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for Field with id 99'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const DeleteAField1 = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          schemaId: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Schema ID of the field to be deleted',
          },
          fieldId: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Field ID of the field to be deleted',
          },
        },
        required: ['schemaId', 'fieldId'],
      },
      {
        type: 'object',
        properties: {
          showFields: {
            type: 'string',
            default: 'all',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              'Toggle which fields are shown in the response body of a schema (if there hidden due to e.g. recently being deleted). Omit this parameter entirely to hide fields by default.',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '202': {
      oneOf: [
        {
          title: 'Accepted',
          type: 'object',
          properties: {
            schema: {
              type: 'object',
              properties: {
                id: { type: 'string', examples: ['82ec659f-8283-4e88-9df3-26f4585fec02'] },
                slug: { type: 'string', examples: ['my-object'] },
                visibility: { type: 'string', examples: ['private'] },
                labels: {
                  type: 'object',
                  properties: {
                    singular: { type: 'string', examples: ['My Object'] },
                    plural: { type: 'string', examples: ['My Objects'] },
                  },
                },
                description: { type: 'string', examples: ['Sample Schema'] },
                createdTimestamp: { type: 'string', examples: ['2021-10-04T20:08:09.574382410Z'] },
                updatedTimestamp: { type: 'string', examples: ['2022-06-10T14:19:06.834158129Z'] },
                fields: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      id: { type: 'string', examples: ['my-number-field'] },
                      labels: {
                        type: 'object',
                        properties: {
                          singular: { type: 'string', examples: ['Number'] },
                          plural: { type: 'string', examples: ['Numbers'] },
                        },
                      },
                      type: { type: 'string', examples: ['number'] },
                      required: { type: 'boolean', default: true, examples: [false] },
                      scale: { type: 'integer', default: 0, examples: [0] },
                      inherited: { type: 'boolean', default: true, examples: [false] },
                    },
                  },
                },
                icons: {
                  type: 'object',
                  properties: {
                    default: {
                      type: 'string',
                      examples: [
                        'https://d226aj4ao1t61q.cloudfront.net/n9mayqo2d_customobject.png',
                      ],
                    },
                  },
                },
                relationships: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      id: { type: 'string', examples: ['primary-contact'] },
                      labels: {
                        type: 'object',
                        properties: {
                          singular: { type: 'string', examples: ['Primary Contact'] },
                          plural: { type: 'string', examples: ['Primary Contacts'] },
                        },
                      },
                      description: { type: 'string', examples: ['Primary contact to this object'] },
                      namespace: { type: 'string', examples: ['contacts'] },
                      hasMany: { type: 'boolean', default: true, examples: [false] },
                      inherited: { type: 'boolean', default: true, examples: [false] },
                    },
                  },
                },
              },
            },
          },
        },
        {
          type: 'object',
          properties: {
            schema: {
              type: 'object',
              properties: {
                id: { type: 'string', examples: ['82ec659f-8283-4e88-9df3-26f4585fec02'] },
                slug: { type: 'string', examples: ['my-object'] },
                visibility: { type: 'string', examples: ['private'] },
                labels: {
                  type: 'object',
                  properties: {
                    singular: { type: 'string', examples: ['My Object'] },
                    plural: { type: 'string', examples: ['My Objects'] },
                  },
                },
                description: { type: 'string', examples: ['Sample Schema'] },
                createdTimestamp: { type: 'string', examples: ['2021-10-04T20:08:09.574382410Z'] },
                updatedTimestamp: { type: 'string', examples: ['2022-06-10T14:19:06.834158129Z'] },
                fields: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      id: { type: 'string', examples: ['my-number-field'] },
                      labels: {
                        type: 'object',
                        properties: {
                          singular: { type: 'string', examples: ['Number'] },
                          plural: { type: 'string', examples: ['Numbers'] },
                        },
                      },
                      type: { type: 'string', examples: ['number'] },
                      required: { type: 'boolean', default: true, examples: [false] },
                      scale: { type: 'integer', default: 0, examples: [0] },
                      inherited: { type: 'boolean', default: true, examples: [false] },
                    },
                  },
                },
                icons: {
                  type: 'object',
                  properties: {
                    default: {
                      type: 'string',
                      examples: [
                        'https://d226aj4ao1t61q.cloudfront.net/n9mayqo2d_customobject.png',
                      ],
                    },
                  },
                },
                relationships: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      id: { type: 'string', examples: ['primary-contact'] },
                      labels: {
                        type: 'object',
                        properties: {
                          singular: { type: 'string', examples: ['Primary Contact'] },
                          plural: { type: 'string', examples: ['Primary Contacts'] },
                        },
                      },
                      description: { type: 'string', examples: ['Primary contact to this object'] },
                      namespace: { type: 'string', examples: ['contacts'] },
                      hasMany: { type: 'boolean', default: true, examples: [false] },
                      inherited: { type: 'boolean', default: true, examples: [false] },
                    },
                  },
                },
              },
            },
          },
        },
      ],
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const DeleteAFieldvalue1 = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the fieldValue to delete',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '403': {
      type: 'object',
      properties: { message: { type: 'string', examples: ['Forbidden'] } },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const DeleteAGroup1 = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the group to be deleted',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const DeleteAList = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the list to delete',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '403': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for _List with id 3'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const DeleteAMessage = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the message to delete',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const DeleteAPipeline = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Pipeline's id",
          },
        },
        required: ['id'],
      },
    ],
  },
  response: { '200': { $schema: 'https://json-schema.org/draft/2020-12/schema#' } },
} as const;
const DeleteARecord = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          schemaId: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of schema',
          },
          recordId: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of record',
          },
        },
        required: ['schemaId', 'recordId'],
      },
    ],
  },
  response: {
    '202': { $schema: 'https://json-schema.org/draft/2020-12/schema#' },
    '400': {
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              status: { type: 'integer', default: 0, examples: [400] },
              title: { type: 'string', examples: ['Bad Request'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const DeleteARecordByExternalId = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          schemaId: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of schema',
          },
          externalId: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'External ID of record',
          },
        },
        required: ['schemaId', 'externalId'],
      },
    ],
  },
  response: {
    '202': { $schema: 'https://json-schema.org/draft/2020-12/schema#' },
    '400': {
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              status: { type: 'integer', default: 0, examples: [400] },
              title: { type: 'string', examples: ['Bad Request'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const DeleteASchema = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Id of schema to delete',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': { $schema: 'https://json-schema.org/draft/2020-12/schema#' },
    '404': {
      type: 'object',
      properties: { message: { type: 'string', examples: ['Not Found'] } },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const DeleteASecondaryContact = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Secondary Contact's id",
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for SubscriberDeal with id 100'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const DeleteATag = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the tag to remove',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: { message: { type: 'string', examples: ['No Result found for Tag with id 1'] } },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const DeleteATaskOutcome = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Task outcome's id",
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for TaskOutcome with id 111'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const DeleteATaskTypeOutcomeRelation = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Task type - outcome relation's id",
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: {
          type: 'string',
          examples: ['No Result found for TasktypeOutcomeRel with id 111'],
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const DeleteAnAccount = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Account's id",
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const DeleteAnAddress = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the Address to delete',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for Address with id 3'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const DeleteAnAddressgroup = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the AddressGroup to delete',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for AddressGroup with id 19'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const DeleteAnAddresslist = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the AddressList to delete',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for AddressList with id 6'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const DeleteAnAssociation1 = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Association's ID",
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: {
          type: 'string',
          examples: ['No Result found for CustomerAccountSubscriber with id 100'],
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const DeleteConnection = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'The id of the connection to delete.',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const DeleteContact = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'The contact id',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No result found for contact with id 1'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const DeleteCustomer = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'The id of the customer to delete.',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const DeleteNote = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the note to delete',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '403': {
      type: 'object',
      properties: { message: { type: 'string', examples: ['No Result found for Note with id 1'] } },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const DeleteOrder = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          ecomOrderId: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'The id of the order to delete.',
          },
        },
        required: ['ecomOrderId'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const DeleteTask = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'The task id',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const DeleteUser = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the user you wish to delete',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const DeleteWebhook = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'The webhook id',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const EnableDisableEventTracking = {
  body: {
    type: 'object',
    properties: {
      eventTracking: {
        properties: {
          enabled: {
            type: 'boolean',
            description: 'Whether event tracking should be enabled',
            examples: [true],
          },
        },
        required: ['enabled'],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '200': { $schema: 'https://json-schema.org/draft/2020-12/schema#' },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const EnableDisableSiteTracking = {
  body: {
    type: 'object',
    properties: {
      siteTracking: {
        properties: {
          enabled: {
            type: 'boolean',
            description: 'Whether site tracking should be enabled',
            examples: [true],
          },
        },
        required: ['enabled'],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        siteTracking: {
          type: 'object',
          properties: { enabled: { type: 'boolean', default: true, examples: [true] } },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const Forms1 = {
  response: {
    '200': {
      type: 'object',
      properties: {
        forms: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              name: { type: 'string', examples: ['Testing'] },
              action: { type: 'string', examples: [''] },
              actiondata: {
                type: 'object',
                properties: {
                  actions: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        type: { type: 'string', examples: ['subscribe-to-list'] },
                        email: { type: 'string', examples: ['johndoe@example.com'] },
                        list: { type: 'string', examples: ['1'] },
                      },
                    },
                  },
                },
              },
              submit: { type: 'string', examples: ['show-thank-you'] },
              submitdata: {
                type: 'object',
                properties: { url: { type: 'string', examples: [''] } },
              },
              url: { type: 'string', examples: [''] },
              layout: { type: 'string', examples: ['inline-form'] },
              title: { type: 'string', examples: [''] },
              body: { type: 'string', examples: [''] },
              button: { type: 'string', examples: ['Submit'] },
              thanks: { type: 'string', examples: ['Thanks for signing up!'] },
              style: {
                type: 'object',
                properties: {
                  background: { type: 'string', examples: ['FFFFFF'] },
                  dark: { type: 'boolean', default: true, examples: [true] },
                  fontcolor: { type: 'string', examples: ['000000'] },
                  layout: { type: 'string', examples: ['normal'] },
                  border: {
                    type: 'object',
                    properties: {
                      width: { type: 'integer', default: 0, examples: [0] },
                      style: { type: 'string', examples: ['solid'] },
                      color: { type: 'string', examples: ['B0B0B0'] },
                      radius: { type: 'integer', default: 0, examples: [0] },
                    },
                  },
                  width: { type: 'integer', default: 0, examples: [500] },
                  ac_branding: { type: 'boolean', default: true, examples: [true] },
                  button: {
                    type: 'object',
                    properties: {
                      padding: { type: 'integer', default: 0, examples: [10] },
                      background: { type: 'string', examples: ['333333'] },
                      fontcolor: { type: 'string', examples: ['FFFFFF'] },
                      border: {
                        type: 'object',
                        properties: {
                          radius: { type: 'integer', default: 0, examples: [4] },
                          color: { type: 'string', examples: ['333333'] },
                          style: { type: 'string', examples: ['solid'] },
                          width: { type: 'integer', default: 0, examples: [0] },
                        },
                      },
                    },
                  },
                },
              },
              options: {
                type: 'object',
                properties: {
                  blanks_overwrite: { type: 'boolean', default: true, examples: [true] },
                  confaction: { type: 'string', examples: ['show-message'] },
                  sendoptin: { type: 'boolean', default: true, examples: [true] },
                  optin_id: { type: 'integer', default: 0, examples: [1] },
                  optin_created: { type: 'boolean', default: true, examples: [true] },
                  confform: { type: 'string', examples: ['2'] },
                },
              },
              cfields: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    type: { type: 'string', examples: ['header'] },
                    header: { type: 'string', examples: ['Subscribe for Email Updates'] },
                    class: { type: 'string', examples: ['_x41699710'] },
                  },
                },
              },
              parentformid: { type: 'string', examples: ['0'] },
              userid: { type: 'string', examples: ['1'] },
              addressid: { type: 'string', examples: ['0'] },
              cdate: { type: 'string', examples: ['2018-08-17T13:47:31-05:00'] },
              udate: { type: 'string', examples: ['2018-08-17T13:47:38-05:00'] },
              entries: { type: 'string', examples: ['0'] },
              aid: { type: 'string', examples: ['0'] },
              defaultscreenshot: {
                type: 'string',
                examples: ['http://img-us1.com/default-form.gif'],
              },
              recent: { type: 'array', items: {} },
              contacts: { type: 'integer', default: 0, examples: [0] },
              deals: { type: 'integer', default: 0, examples: [0] },
              links: {
                type: 'object',
                properties: {
                  address: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/forms/1/address'],
                  },
                },
              },
              id: { type: 'string', examples: ['1'] },
              address: {},
            },
          },
        },
        meta: { type: 'object', properties: { total: { type: 'string', examples: ['1'] } } },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const GetAListOfWebhookEvents = {
  response: {
    '200': {
      type: 'object',
      properties: {
        webhookEvents: { type: 'array', items: { type: 'string', examples: ['bounce'] } },
        meta: {
          type: 'object',
          properties: { total: { type: 'integer', default: 0, examples: [25] } },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const GetAListOfWebhooks = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          'filters[name]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Filter by webhook name',
          },
          'filters[url]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Filter by webhook url',
          },
          'filters[listid]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Filter by webhook's associated list",
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': { $schema: 'https://json-schema.org/draft/2020-12/schema#' },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const GetASavedresponse = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the saved Response to recieve',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        savedResponse: {
          type: 'object',
          properties: {
            title: { type: 'string', examples: ['Response title'] },
            subject: { type: 'string', examples: ['Response subject'] },
            body: { type: 'string', examples: ['Response body'] },
            ldate: {},
            last_sent_user_id: {},
            cdate: { type: 'string', examples: ['2018-11-16T02:50:54-06:00'] },
            mdate: {},
            links: {
              type: 'object',
              properties: {
                user: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/savedResponses/1/user'],
                },
                savedResponseCategorySavedResponse: {
                  type: 'string',
                  examples: [
                    'https://:account.api-us1.com/api/:version/savedResponses/1/savedResponseCategorySavedResponse',
                  ],
                },
              },
            },
            id: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const GetASingleRecord = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          schemaId: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of schema',
          },
          recordId: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of record',
          },
        },
        required: ['schemaId', 'recordId'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        record: {
          type: 'object',
          properties: {
            id: { type: 'string', examples: ['1fba439a-208e-48e6-bd23-f6c97c3e0519'] },
            externalId: { type: 'string', examples: ['test-obj-1'] },
            schemaId: { type: 'string', examples: ['6449c3f3-b68d-46d1-850b-c8aea998ce1b'] },
            fields: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'string', examples: ['my-number-field'] },
                  value: { type: 'integer', default: 0, examples: [100] },
                },
              },
            },
            relationships: {
              type: 'object',
              properties: {
                'primary-contact': { type: 'array', items: { type: 'string', examples: ['14'] } },
              },
            },
            createdTimestamp: { type: 'string', examples: ['2021-04-16T16:12:22.222685095Z'] },
            updatedTimestamp: { type: 'string', examples: ['2021-04-16T16:13:12.022671090Z'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              status: { type: 'integer', default: 0, examples: [400] },
              title: { type: 'string', examples: ['Bad Request'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const GetASingleRecordUsingExternalId = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          schemdId: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of schema',
          },
          externalId: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'External ID for record',
          },
        },
        required: ['schemdId', 'externalId'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        record: {
          type: 'object',
          properties: {
            id: { type: 'string', examples: ['1fba439a-208e-48e6-bd23-f6c97c3e0519'] },
            externalId: { type: 'string', examples: ['test-obj-1'] },
            schemaId: { type: 'string', examples: ['6449c3f3-b68d-46d1-850b-c8aea998ce1b'] },
            fields: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'string', examples: ['my-number-field'] },
                  value: { type: 'integer', default: 0, examples: [100] },
                },
              },
            },
            relationships: {
              type: 'object',
              properties: {
                'primary-contact': { type: 'array', items: { type: 'string', examples: ['14'] } },
              },
            },
            createdTimestamp: { type: 'string', examples: ['2021-04-16T16:12:22.222685095Z'] },
            updatedTimestamp: { type: 'string', examples: ['2021-04-16T16:13:12.022671090Z'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              status: { type: 'integer', default: 0, examples: [400] },
              title: { type: 'string', examples: ['Bad Request'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const GetBranding = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            default: null,
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        branding: {
          type: 'object',
          properties: {
            groupid: { type: 'string', examples: ['3'] },
            siteName: { type: 'string', examples: ['ActiveCampaign Email Marketing'] },
            siteLogo: { type: 'string', examples: ['http://mysite.com/logo.jpg'] },
            siteLogoSmall: { type: 'string', examples: ['http://mysite.com/logo_small.jpg'] },
            headerTextValue: { type: 'string', examples: ['my custom text header'] },
            headerHtmlValue: { type: 'string', examples: ['<p>my custom HTML header</p>'] },
            footerTextValue: { type: 'string', examples: ['my custom text footer'] },
            footerHtmlValue: { type: 'string', examples: ['<p>my custom HTML footer</p>'] },
            copyright: { type: 'string', examples: ['1'] },
            version: { type: 'string', examples: ['1'] },
            license: { type: 'string', examples: ['1'] },
            links: { type: 'string', examples: ['1'] },
            help: { type: 'string', examples: ['1'] },
            adminTemplateHtm: { type: 'string', examples: [''] },
            adminTemplateCss: { type: 'string', examples: [''] },
            publicTemplateHtm: { type: 'string', examples: [''] },
            publicTemplateCss: { type: 'string', examples: [''] },
            favicon: {},
            id: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const GetConnection = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'The id of the connection to retrieve',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        connection: {
          type: 'object',
          properties: {
            isInternal: { type: 'integer', default: 0, examples: [0] },
            service: { type: 'string', examples: ['fooCommerce'] },
            externalid: { type: 'string', examples: ['toystore123'] },
            name: { type: 'string', examples: ['Toystore, Inc.'] },
            logoUrl: { type: 'string', examples: ['http://example.com/i/foo.png'] },
            linkUrl: { type: 'string', examples: ['http://example.com/foo/'] },
            cdate: { type: 'string', examples: ['2017-02-02T14:56:05-06:00'] },
            udate: { type: 'string', examples: ['2017-02-02T14:56:05-06:00'] },
            links: {
              type: 'object',
              properties: { customers: { type: 'string', examples: ['/connections/1/customers'] } },
            },
            id: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const GetContact = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the contact',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        contactAutomations: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              contact: { type: 'string', examples: ['1'] },
              seriesid: { type: 'string', examples: ['1'] },
              startid: { type: 'string', examples: ['0'] },
              status: { type: 'string', examples: ['0'] },
              adddate: { type: 'string', examples: ['1976-10-16T23:23:09-05:00'] },
              remdate: {},
              timespan: {},
              lastblock: { type: 'string', examples: ['0'] },
              lastdate: { type: 'string', examples: ['1984-08-15T08:13:44-05:00'] },
              completedElements: { type: 'string', examples: ['0'] },
              totalElements: { type: 'string', examples: ['0'] },
              completed: { type: 'integer', default: 0, examples: [0] },
              completeValue: { type: 'integer', default: 0, examples: [100] },
              links: {
                type: 'object',
                properties: {
                  automation: {
                    type: 'string',
                    examples: [
                      'https://:account.api-us1.com/api/:version/contactAutomations/1/automation',
                    ],
                  },
                  contact: {
                    type: 'string',
                    examples: [
                      'https://:account.api-us1.com/api/:version/contactAutomations/1/contact',
                    ],
                  },
                  contactGoals: {
                    type: 'string',
                    examples: [
                      'https://:account.api-us1.com/api/:version/contactAutomations/1/contactGoals',
                    ],
                  },
                },
              },
              id: { type: 'string', examples: ['1'] },
              automation: { type: 'string', examples: ['1'] },
            },
          },
        },
        contactLists: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              contact: { type: 'string', examples: ['1'] },
              list: { type: 'string', examples: ['1'] },
              form: {},
              seriesid: { type: 'string', examples: ['0'] },
              sdate: {},
              udate: {},
              status: { type: 'string', examples: ['1'] },
              responder: { type: 'string', examples: ['1'] },
              sync: { type: 'string', examples: ['0'] },
              unsubreason: {},
              campaign: {},
              message: {},
              first_name: { type: 'string', examples: ['John'] },
              last_name: { type: 'string', examples: ['Doe'] },
              ip4Sub: { type: 'string', examples: ['0'] },
              sourceid: { type: 'string', examples: ['0'] },
              autosyncLog: {},
              ip4_last: { type: 'string', examples: ['0'] },
              ip4Unsub: { type: 'string', examples: ['0'] },
              unsubscribeAutomation: {},
              links: {
                type: 'object',
                properties: {
                  automation: {
                    type: 'string',
                    examples: [
                      'https://:account.api-us1.com/api/:version/contactLists/1/automation',
                    ],
                  },
                  list: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contactLists/1/list'],
                  },
                  contact: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contactLists/1/contact'],
                  },
                  form: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contactLists/1/form'],
                  },
                  autosyncLog: {
                    type: 'string',
                    examples: [
                      'https://:account.api-us1.com/api/:version/contactLists/1/autosyncLog',
                    ],
                  },
                  campaign: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contactLists/1/campaign'],
                  },
                  unsubscribeAutomation: {
                    type: 'string',
                    examples: [
                      'https://:account.api-us1.com/api/:version/contactLists/1/unsubscribeAutomation',
                    ],
                  },
                  message: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contactLists/1/message'],
                  },
                },
              },
              id: { type: 'string', examples: ['1'] },
              automation: {},
            },
          },
        },
        deals: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              owner: { type: 'string', examples: ['1'] },
              contact: { type: 'string', examples: ['1'] },
              organization: {},
              group: {},
              title: {
                type: 'string',
                examples: ['Consectetur omnis quo inventore molestiae ratione amet.'],
              },
              nexttaskid: { type: 'string', examples: ['0'] },
              currency: { type: 'string', examples: ['USD'] },
              status: { type: 'string', examples: ['0'] },
              links: {
                type: 'object',
                properties: {
                  activities: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/deals/1/activities'],
                  },
                  contact: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/deals/1/contact'],
                  },
                  contactDeals: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/deals/1/contactDeals'],
                  },
                  group: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/deals/1/group'],
                  },
                  nextTask: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/deals/1/nextTask'],
                  },
                  notes: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/deals/1/notes'],
                  },
                  organization: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/deals/1/organization'],
                  },
                  owner: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/deals/1/owner'],
                  },
                  scoreValues: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/deals/1/scoreValues'],
                  },
                  stage: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/deals/1/stage'],
                  },
                  tasks: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/deals/1/tasks'],
                  },
                },
              },
              id: { type: 'string', examples: ['1'] },
              nextTask: {},
            },
          },
        },
        fieldValues: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              contact: { type: 'string', examples: ['1'] },
              field: { type: 'string', examples: ['1'] },
              value: {},
              cdate: { type: 'string', examples: ['1981-05-16T19:02:29-05:00'] },
              udate: { type: 'string', examples: ['1975-11-08T10:31:45-06:00'] },
              links: {
                type: 'object',
                properties: {
                  owner: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/fieldValues/1/owner'],
                  },
                  field: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/fieldValues/1/field'],
                  },
                },
              },
              id: { type: 'string', examples: ['1'] },
              owner: { type: 'string', examples: ['1'] },
            },
          },
        },
        geoAddresses: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              ip4: { type: 'string', examples: ['823'] },
              country2: { type: 'string', examples: ['AS'] },
              country: { type: 'string', examples: ['Suriname'] },
              state: { type: 'string', examples: ['KY'] },
              city: { type: 'string', examples: ['North Arnoldomouth'] },
              zip: { type: 'string', examples: ['38704-6592'] },
              area: { type: 'string', examples: ['0'] },
              lat: { type: 'string', examples: ['-70.160407'] },
              lon: { type: 'string', examples: ['-102.229406'] },
              tz: { type: 'string', examples: ['Europe/Chisinau'] },
              tstamp: { type: 'string', examples: ['1972-03-16T07:26:58-06:00'] },
              links: { type: 'array', items: {} },
              id: { type: 'string', examples: ['1'] },
            },
          },
        },
        geoIps: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              contact: { type: 'string', examples: ['1'] },
              campaignid: { type: 'string', examples: ['1'] },
              messageid: { type: 'string', examples: ['1'] },
              geoaddrid: { type: 'string', examples: ['1'] },
              ip4: { type: 'string', examples: ['0'] },
              tstamp: { type: 'string', examples: ['1988-08-05T11:50:51-05:00'] },
              geoAddress: { type: 'string', examples: ['1'] },
              links: {
                type: 'object',
                properties: {
                  geoAddress: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/geoIps/1/geoAddress'],
                  },
                },
              },
              id: { type: 'string', examples: ['1'] },
            },
          },
        },
        contact: {
          type: 'object',
          properties: {
            cdate: { type: 'string', examples: ['2007-05-05T12:49:09-05:00'] },
            email: { type: 'string', examples: ['selmer.koss@example.com'] },
            phone: { type: 'string', examples: [''] },
            firstName: { type: 'string', examples: ['Charles'] },
            lastName: { type: 'string', examples: ['Reynolds'] },
            orgid: { type: 'string', examples: ['0'] },
            segmentio_id: { type: 'string', examples: [''] },
            bounced_hard: { type: 'string', examples: ['0'] },
            bounced_soft: { type: 'string', examples: ['0'] },
            bounced_date: {},
            ip: { type: 'string', examples: ['0'] },
            ua: {},
            hash: { type: 'string', examples: [''] },
            socialdata_lastcheck: {},
            email_local: { type: 'string', examples: [''] },
            email_domain: { type: 'string', examples: [''] },
            sentcnt: { type: 'string', examples: ['0'] },
            rating_tstamp: {},
            gravatar: { type: 'string', examples: ['0'] },
            deleted: { type: 'string', examples: ['0'] },
            adate: {},
            udate: {},
            edate: {},
            contactAutomations: { type: 'array', items: { type: 'string', examples: ['1'] } },
            contactLists: { type: 'array', items: { type: 'string', examples: ['1'] } },
            fieldValues: { type: 'array', items: { type: 'string', examples: ['1'] } },
            geoIps: { type: 'array', items: { type: 'string', examples: ['1'] } },
            deals: { type: 'array', items: { type: 'string', examples: ['1'] } },
            accountContacts: { type: 'array', items: { type: 'string', examples: ['1'] } },
            links: {
              type: 'object',
              properties: {
                bounceLogs: { type: 'string', examples: ['/1/bounceLogs'] },
                contactAutomations: { type: 'string', examples: ['/1/contactAutomations'] },
                contactData: { type: 'string', examples: ['/1/contactData'] },
                contactGoals: { type: 'string', examples: ['/1/contactGoals'] },
                contactLists: { type: 'string', examples: ['/1/contactLists'] },
                contactLogs: { type: 'string', examples: ['/1/contactLogs'] },
                contactTags: { type: 'string', examples: ['/1/contactTags'] },
                contactDeals: { type: 'string', examples: ['/1/contactDeals'] },
                deals: { type: 'string', examples: ['/1/deals'] },
                fieldValues: { type: 'string', examples: ['/1/fieldValues'] },
                geoIps: { type: 'string', examples: ['/1/geoIps'] },
                notes: { type: 'string', examples: ['/1/notes'] },
                organization: { type: 'string', examples: ['/1/organization'] },
                plusAppend: { type: 'string', examples: ['/1/plusAppend'] },
                trackingLogs: { type: 'string', examples: ['/1/trackingLogs'] },
                scoreValues: { type: 'string', examples: ['/1/scoreValues'] },
              },
            },
            id: { type: 'string', examples: ['1'] },
            organization: {},
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for Subscriber with id 1'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const GetContactByEventId = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          eventId: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "The Event's ID",
          },
        },
        required: ['eventId'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        contact: {
          type: 'object',
          properties: {
            cdate: { type: 'string', examples: ['2022-09-22T12:36:33-05:00'] },
            email: { type: 'string', examples: ['jd@example.com'] },
            phone: { type: 'string', examples: ['555-555-5555'] },
            firstName: { type: 'string', examples: ['John'] },
            lastName: { type: 'string', examples: ['Doe'] },
            orgid: { type: 'string', examples: ['0'] },
            orgname: { type: 'string', examples: [''] },
            segmentio_id: { type: 'string', examples: [''] },
            bounced_hard: { type: 'string', examples: ['0'] },
            bounced_soft: { type: 'string', examples: ['0'] },
            bounced_date: { type: 'string', examples: ['0000-00-00'] },
            ip: { type: 'string', examples: ['0'] },
            ua: { type: 'string', examples: [''] },
            hash: { type: 'string', examples: ['ef73fe360240b8bf171744f7f341524f'] },
            socialdata_lastcheck: { type: 'string', examples: ['0000-00-00 00:00:00'] },
            email_local: { type: 'string', examples: [''] },
            email_domain: { type: 'string', examples: ['example.com'] },
            sentcnt: { type: 'string', examples: ['0'] },
            rating_tstamp: { type: 'string', examples: ['0000-00-00'] },
            gravatar: { type: 'string', examples: ['0'] },
            deleted: { type: 'string', examples: ['0'] },
            anonymized: { type: 'string', examples: ['0'] },
            adate: { type: 'string', examples: ['2022-09-27T14:57:35-05:00'] },
            udate: { type: 'string', examples: ['2022-09-22T12:36:33-05:00'] },
            edate: { type: 'string', examples: ['2022-09-27T13:36:04-05:00'] },
            deleted_at: { type: 'string', examples: ['0000-00-00 00:00:00'] },
            created_utc_timestamp: { type: 'string', examples: ['2022-09-22 12:36:33'] },
            updated_utc_timestamp: { type: 'string', examples: ['2022-09-27 13:36:04'] },
            created_timestamp: { type: 'string', examples: ['2022-09-22 12:36:33'] },
            updated_timestamp: { type: 'string', examples: ['2022-09-27 13:36:04'] },
            created_by: { type: 'string', examples: ['0'] },
            updated_by: { type: 'string', examples: ['0'] },
            email_empty: { type: 'boolean', default: true, examples: [false] },
            mpp_tracking: { type: 'string', examples: ['0'] },
            links: {
              type: 'object',
              properties: {
                bounceLogs: {
                  type: 'string',
                  examples: ['https://yourAccountName.api-us1.com/api/3/contacts/112/bounceLogs'],
                },
                contactAutomations: {
                  type: 'string',
                  examples: [
                    'https://yourAccountName.api-us1.com/api/3/contacts/112/contactAutomations?limit=1000&orders%5Blastdate%5D=DESC',
                  ],
                },
                contactData: {
                  type: 'string',
                  examples: ['https://yourAccountName.api-us1.com/api/3/contacts/112/contactData'],
                },
                contactGoals: {
                  type: 'string',
                  examples: ['https://yourAccountName.api-us1.com/api/3/contacts/112/contactGoals'],
                },
                contactLists: {
                  type: 'string',
                  examples: ['https://yourAccountName.api-us1.com/api/3/contacts/112/contactLists'],
                },
                contactLogs: {
                  type: 'string',
                  examples: ['https://yourAccountName.api-us1.com/api/3/contacts/112/contactLogs'],
                },
                contactTags: {
                  type: 'string',
                  examples: ['https://yourAccountName.api-us1.com/api/3/contacts/112/contactTags'],
                },
                contactDeals: {
                  type: 'string',
                  examples: ['https://yourAccountName.api-us1.com/api/3/contacts/112/contactDeals'],
                },
                deals: {
                  type: 'string',
                  examples: ['https://yourAccountName.api-us1.com/api/3/contacts/112/deals'],
                },
                fieldValues: {
                  type: 'string',
                  examples: ['https://yourAccountName.api-us1.com/api/3/contacts/112/fieldValues'],
                },
                geoIps: {
                  type: 'string',
                  examples: ['https://yourAccountName.api-us1.com/api/3/contacts/112/geoIps'],
                },
                notes: {
                  type: 'string',
                  examples: ['https://yourAccountName.api-us1.com/api/3/contacts/112/notes'],
                },
                organization: {
                  type: 'string',
                  examples: ['https://yourAccountName.api-us1.com/api/3/contacts/112/organization'],
                },
                plusAppend: {
                  type: 'string',
                  examples: ['https://yourAccountName.api-us1.com/api/3/contacts/112/plusAppend'],
                },
                trackingLogs: {
                  type: 'string',
                  examples: ['https://yourAccountName.api-us1.com/api/3/contacts/112/trackingLogs'],
                },
                scoreValues: {
                  type: 'string',
                  examples: ['https://yourAccountName.api-us1.com/api/3/contacts/112/scoreValues'],
                },
                accountContacts: {
                  type: 'string',
                  examples: [
                    'https://yourAccountName.api-us1.com/api/3/contacts/112/accountContacts',
                  ],
                },
                automationEntryCounts: {
                  type: 'string',
                  examples: [
                    'https://yourAccountName.api-us1.com/api/3/contacts/112/automationEntryCounts',
                  ],
                },
              },
            },
            id: { type: 'string', examples: ['112'] },
            organization: {},
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const GetContactsTrackingLogsevents = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          contactId: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "The Contact's ID",
          },
        },
        required: ['contactId'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        trackingLogs: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              subscriberid: { type: 'string', examples: ['112'] },
              type: { type: 'string', examples: ['Another event'] },
              value: {
                type: 'string',
                examples: [
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure do',
                ],
              },
              tstamp: { type: 'string', examples: ['2022-09-27T12:39:59-05:00'] },
              hash: { type: 'string', examples: ['358a9a13d85efb7b888014ec57790efb6c13ab3a'] },
              links: {
                type: 'object',
                properties: {
                  contact: {
                    type: 'string',
                    examples: ['https://yourAccountName.api-us1.com/api/3/trackingLogs/12/contact'],
                  },
                },
              },
              id: { type: 'string', examples: ['12'] },
              contact: { type: 'string', examples: ['112'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const GetCustomer = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'The id of the customer to retrieve',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        ecomCustomer: {
          type: 'object',
          properties: {
            connectionid: { type: 'string', examples: ['3'] },
            externalid: { type: 'string', examples: ['1440117293120'] },
            email: { type: 'string', examples: ['john.doe@example.com'] },
            totalRevenue: { type: 'string', examples: ['150761'] },
            totalOrders: { type: 'string', examples: ['1'] },
            totalProducts: { type: 'string', examples: ['3'] },
            avgRevenuePerOrder: { type: 'string', examples: ['150761'] },
            avgProductCategory: { type: 'string', examples: ['Musical Instrument'] },
            tstamp: { type: 'string', examples: ['2019-01-01T10:23:22-06:00'] },
            acceptsMarketing: { type: 'string', examples: ['0'] },
            links: {
              type: 'object',
              properties: {
                connection: {
                  type: 'string',
                  examples: [
                    'https://:account.api-us1.com/api/:version/ecomCustomers/15/connection',
                  ],
                },
                orders: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/ecomCustomers/15/orders'],
                },
              },
            },
            id: { type: 'string', examples: ['15'] },
            connection: { type: 'string', examples: ['3'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const GetOrder = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          ecomOrderId: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'The id of the order to retrieve.',
          },
        },
        required: ['ecomOrderId'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        ecomOrder: {
          type: 'object',
          properties: {
            customerid: { type: 'string', examples: ['1'] },
            connectionid: { type: 'string', examples: ['1'] },
            state: { type: 'string', examples: ['1'] },
            source: { type: 'string', examples: ['1'] },
            externalid: { type: 'string', examples: ['1233456789'] },
            externalcheckoutid: {},
            orderNumber: { type: 'string', examples: ['123456789'] },
            email: { type: 'string', examples: ['alice@example.com'] },
            totalPrice: { type: 'string', examples: ['1000'] },
            discountAmount: { type: 'string', examples: ['100'] },
            shippingAmount: { type: 'string', examples: ['120'] },
            taxAmount: { type: 'string', examples: ['120'] },
            totalProducts: { type: 'string', examples: ['1'] },
            currency: { type: 'string', examples: ['usd'] },
            shippingMethod: { type: 'string', examples: ['ground shipping'] },
            orderUrl: { type: 'string', examples: ['https://examplestore.com/orders/123456789'] },
            externalCreatedDate: { type: 'string', examples: ['2019-06-29T14:44:49-05:00'] },
            externalUpdatedDate: { type: 'string', examples: ['2019-06-29T14:44:49-05:00'] },
            abandonedDate: {},
            createdDate: { type: 'string', examples: ['2019-06-29T14:44:51-05:00'] },
            updatedDate: { type: 'string', examples: ['2019-06-29T14:44:51-05:00'] },
            orderDate: { type: 'string', examples: ['2019-06-29T14:44:49-05:00'] },
            tstamp: { type: 'string', examples: ['2019-06-29T14:44:51-05:00'] },
            links: {
              type: 'object',
              properties: {
                connection: {
                  type: 'string',
                  examples: ['https://exampleaccount.api-us1.com/api/3/ecomOrders/1/connection'],
                },
                customer: {
                  type: 'string',
                  examples: ['https://exampleaccount.api-us1.com/api/3/ecomOrders/1/customer'],
                },
                orderProducts: {
                  type: 'string',
                  examples: ['https://exampleaccount.api-us1.com/api/3/ecomOrders/1/orderProducts'],
                },
                orderDiscounts: {
                  type: 'string',
                  examples: [
                    'https://exampleaccount.api-us1.com/api/3/ecomOrders/1/orderDiscounts',
                  ],
                },
                orderActivities: {
                  type: 'string',
                  examples: [
                    'https://exampleaccount.api-us1.com/api/3/ecomOrders/1/orderActivities',
                  ],
                },
              },
            },
            id: { type: 'string', examples: ['1'] },
            connection: { type: 'string', examples: ['1'] },
            customer: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const GetTask = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'The ID of the task',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '201': {
      type: 'object',
      properties: {
        dealTask: {
          type: 'object',
          properties: {
            relid: { type: 'string', examples: ['5'] },
            reltype: { type: 'string', examples: ['Deal'] },
            dealTasktype: { type: 'string', examples: ['1'] },
            user: { type: 'string', examples: ['1'] },
            assignee: { type: 'string', examples: ['2'] },
            automation: {},
            cdate: { type: 'string', examples: ['2017-02-24T15:01:37-06:00'] },
            duedate: { type: 'string', examples: ['2017-02-28T12:00:00-06:00'] },
            edate: { type: 'string', examples: ['2017-02-28T12:15:00-06:00'] },
            duration: { type: 'string', examples: ['0'] },
            status: { type: 'string', examples: ['0'] },
            title: { type: 'string', examples: [''] },
            note: { type: 'string', examples: ['Deal task title!'] },
            donedate: {},
            doneAutomation: {},
            udate: { type: 'string', examples: ['2017-02-24T15:01:37-06:00'] },
            owner: {
              type: 'object',
              properties: {
                type: { type: 'string', examples: ['deal'] },
                id: { type: 'string', examples: ['5'] },
              },
            },
            id: { type: 'string', examples: ['1'] },
            outcomeId: { type: 'integer', default: 0, examples: [91] },
            outcomeInfo: { type: 'string', examples: ['More details about the outcome'] },
            links: {
              type: 'object',
              properties: {
                activities: { type: 'string', examples: ['/1/activities'] },
                automation: { type: 'string', examples: ['/1/automation'] },
                dealTasktype: { type: 'string', examples: ['/1/dealTasktype'] },
                doneAutomation: { type: 'string', examples: ['/1/doneAutomation'] },
                notes: { type: 'string', examples: ['/1/notes'] },
                owner: { type: 'string', examples: ['/1/owner'] },
                taskNotifications: { type: 'string', examples: ['/1/taskNotifications'] },
                user: { type: 'string', examples: ['/1/user'] },
                assignee: { type: 'string', examples: ['/1/assignee'] },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const GetUser = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the user you want to view',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        user: {
          type: 'object',
          properties: {
            username: { type: 'string', examples: ['admin'] },
            firstName: { type: 'string', examples: ['John'] },
            lastName: { type: 'string', examples: ['Doe'] },
            email: { type: 'string', examples: ['johndoe@example.com'] },
            phone: { type: 'string', examples: [''] },
            signature: {},
            links: {
              type: 'object',
              properties: {
                lists: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/users/1/lists'],
                },
                userGroup: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/users/1/userGroup'],
                },
                dealGroupTotals: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/users/1/dealGroupTotals'],
                },
                dealGroupUsers: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/users/1/dealGroupUsers'],
                },
                configs: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/users/1/configs'],
                },
              },
            },
            id: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const GetUserEmail = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          ':email': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Email address of the user you want to view',
          },
        },
        required: [':email'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        user: {
          type: 'object',
          properties: {
            username: { type: 'string', examples: ['somebody'] },
            firstName: { type: 'string', examples: ['John'] },
            lastName: { type: 'string', examples: ['Doe'] },
            email: { type: 'string', examples: ['johndoe@example.com'] },
            phone: { type: 'string', examples: [''] },
            signature: {},
            links: {
              type: 'object',
              properties: {
                lists: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/users/1/lists'],
                },
                userGroup: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/users/1/userGroup'],
                },
                dealGroupTotals: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/users/1/dealGroupTotals'],
                },
                dealGroupUsers: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/users/1/dealGroupUsers'],
                },
                configs: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/users/1/configs'],
                },
              },
            },
            id: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const GetUserLoggedin = {
  response: {
    '200': {
      type: 'object',
      properties: {
        user: {
          type: 'object',
          properties: {
            username: { type: 'string', examples: ['jdoe'] },
            firstName: { type: 'string', examples: ['John'] },
            lastName: { type: 'string', examples: ['Doe'] },
            email: { type: 'string', examples: ['johndoe@example.com'] },
            phone: { type: 'string', examples: [''] },
            signature: {},
            links: {
              type: 'object',
              properties: {
                lists: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/users/1/lists'],
                },
                userGroup: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/users/1/userGroup'],
                },
                dealGroupTotals: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/users/1/dealGroupTotals'],
                },
                dealGroupUsers: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/users/1/dealGroupUsers'],
                },
                configs: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/users/1/configs'],
                },
              },
            },
            id: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const GetUserUsername = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          ':username': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Username of the user you want to view',
          },
        },
        required: [':username'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        user: {
          type: 'object',
          properties: {
            username: { type: 'string', examples: ['admin'] },
            firstName: { type: 'string', examples: ['John'] },
            lastName: { type: 'string', examples: ['Doe'] },
            email: { type: 'string', examples: ['johndoe@example.com'] },
            phone: { type: 'string', examples: [''] },
            signature: {},
            links: {
              type: 'object',
              properties: {
                lists: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/users/1/lists'],
                },
                userGroup: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/users/1/userGroup'],
                },
                dealGroupTotals: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/users/1/dealGroupTotals'],
                },
                dealGroupUsers: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/users/1/dealGroupUsers'],
                },
                configs: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/users/1/configs'],
                },
              },
            },
            id: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const GetWebhook = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        webhook: {
          type: 'object',
          properties: {
            cdate: { type: 'string', examples: ['2016-01-01T12:00:00-00:00'] },
            listid: { type: 'string', examples: ['0'] },
            name: { type: 'string', examples: ['My hook'] },
            url: { type: 'string', examples: ['http://example.com/my-hook'] },
            events: { type: 'array', items: { type: 'string', examples: ['subscribe'] } },
            sources: { type: 'array', items: { type: 'string', examples: ['admin'] } },
            links: { type: 'array', items: {} },
            id: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const ListAllAccounts = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          search: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Search by name',
          },
          count_deals: {
            type: 'boolean',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              'Whether to compute the contactCount and dealCount counts for the number of contacts/deals associated with each account. Set it to true to include the right counts. If set to false or omitted from the call, then contactCount and dealCount will not be counted and be simply displayed as 0.',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': { $schema: 'https://json-schema.org/draft/2020-12/schema#' },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const ListAllAddresses = {
  response: {
    '200': {
      type: 'object',
      properties: {
        addresses: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              companyName: { type: 'string', examples: ['Test Company Name'] },
              address1: { type: 'string', examples: ['Test Address'] },
              address2: { type: 'string', examples: [''] },
              city: { type: 'string', examples: [''] },
              state: { type: 'string', examples: [''] },
              district: { type: 'string', examples: [''] },
              zip: { type: 'string', examples: [''] },
              country: { type: 'string', examples: ['US'] },
              allgroup: { type: 'string', examples: ['0'] },
              isDefault: { type: 'string', examples: ['1'] },
              links: {
                type: 'object',
                properties: {
                  addressGroup: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/addresses/1/addressGroup'],
                  },
                  addressList: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/addresses/1/addressList'],
                  },
                  forms: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/addresses/1/forms'],
                  },
                },
              },
              id: { type: 'string', examples: ['1'] },
            },
          },
        },
        meta: { type: 'object', properties: { total: { type: 'string', examples: ['2'] } } },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const ListAllAssociations1 = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          'filters[contact]': {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Filter by Contact ID',
          },
          'filters[account]': {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Filter by Account ID',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        accountContacts: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              account: { type: 'string', examples: ['2'] },
              contact: { type: 'string', examples: ['3'] },
              jobTitle: { type: 'string', examples: ['Product Manager'] },
              createdTimestamp: { type: 'string', examples: ['2019-06-26T10:49:10-05:00'] },
              updatedTimestamp: { type: 'string', examples: ['2019-06-26T10:49:10-05:00'] },
              links: {
                type: 'object',
                properties: {
                  account: {
                    type: 'string',
                    examples: ['http://hosted.localdev/api/3/accountContacts/17/account'],
                  },
                  contact: {
                    type: 'string',
                    examples: ['http://hosted.localdev/api/3/accountContacts/17/contact'],
                  },
                },
              },
              id: { type: 'string', examples: ['17'] },
            },
          },
        },
        meta: {
          type: 'object',
          properties: {
            total: { type: 'string', examples: ['3'] },
            queryLog: {
              type: 'object',
              properties: {
                queries: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      stmt: {
                        type: 'string',
                        examples: [
                          'SELECT  COUNT(DISTINCT t.id) AS `__count` FROM em_customer_account_subscriber t   WHERE 1',
                        ],
                      },
                      time: { type: 'number', default: 0, examples: [0.3669261932373] },
                    },
                  },
                },
                by_time: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      stmt: {
                        type: 'string',
                        examples: [
                          'SELECT  COUNT(DISTINCT t.id) AS `__count` FROM em_customer_account_subscriber t   WHERE 1',
                        ],
                      },
                      time: { type: 'number', default: 0, examples: [0.3669261932373] },
                    },
                  },
                },
                total: { type: 'number', default: 0, examples: [0.54502487182617] },
                mode: { type: 'string', examples: ['read/write'] },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const ListAllAutomations = {
  response: {
    '200': {
      type: 'object',
      properties: {
        automations: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              name: { type: 'string', examples: ['Email Subscription'] },
              cdate: { type: 'string', examples: ['2018-08-06T16:28:43-05:00'] },
              mdate: { type: 'string', examples: ['2018-08-06T16:33:10-05:00'] },
              userid: { type: 'string', examples: ['1'] },
              status: { type: 'string', examples: ['2'] },
              entered: { type: 'string', examples: ['0'] },
              exited: { type: 'string', examples: ['0'] },
              hidden: { type: 'string', examples: ['0'] },
              defaultscreenshot: {
                type: 'string',
                examples: ['http://img-us1.com/default-series.gif'],
              },
              screenshot: {
                type: 'string',
                examples: ['https://d226aj4ao1t61q.cloudfront.net/k0x4h0lr_default-automation.png'],
              },
              links: {
                type: 'object',
                properties: {
                  campaigns: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/automations/1/campaigns'],
                  },
                  contactGoals: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/automations/1/contactGoals'],
                  },
                  contactAutomations: {
                    type: 'string',
                    examples: [
                      'https://:account.api-us1.com/api/3/automations/1/contactAutomations',
                    ],
                  },
                  blocks: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/automations/1/blocks'],
                  },
                  goals: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/automations/1/goals'],
                  },
                  sms: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/automations/1/sms'],
                  },
                  sitemessages: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/automations/1/sitemessages'],
                  },
                },
              },
              id: { type: 'string', examples: ['1'] },
            },
          },
        },
        meta: {
          type: 'object',
          properties: {
            total: { type: 'string', examples: ['2'] },
            starts: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'string', examples: ['2'] },
                  series: { type: 'string', examples: ['1'] },
                  type: { type: 'string', examples: ['subscribe'] },
                },
              },
            },
            filtered: { type: 'boolean', default: true, examples: [false] },
            smsLogs: { type: 'array', items: {} },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const ListAllCalendarFeeds = {
  response: {
    '200': {
      type: 'object',
      properties: {
        calendars: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              userid: { type: 'string', examples: ['1'] },
              title: { type: 'string', examples: ['Calendar Title'] },
              type: { type: 'string', examples: ['All'] },
              token: { type: 'string', examples: ['4d9af6b9d5056ef1ca4a31c12c0e105c'] },
              notification: { type: 'string', examples: ['0'] },
              cdate: { type: 'string', examples: ['2018-11-15T22:36:05-06:00'] },
              mdate: { type: 'string', examples: ['2018-11-15T22:36:05-06:00'] },
              links: {
                type: 'object',
                properties: {
                  calendarRels: {
                    type: 'string',
                    examples: [
                      'https://:account.api-us1.com/api/:version/calendars/2/calendarRels',
                    ],
                  },
                  calendarUsers: {
                    type: 'string',
                    examples: [
                      'https://:account.api-us1.com/api/:version/calendars/2/calendarUsers',
                    ],
                  },
                },
              },
              id: { type: 'string', examples: ['2'] },
            },
          },
        },
        meta: { type: 'object', properties: { total: { type: 'string', examples: ['1'] } } },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const ListAllCalendarFeeds1 = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          ':id': {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the calendar feed to retrieve',
          },
        },
        required: [':id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        calendar: {
          type: 'object',
          properties: {
            userid: { type: 'string', examples: ['1'] },
            title: { type: 'string', examples: ['Calendar Title'] },
            type: { type: 'string', examples: ['All'] },
            token: { type: 'string', examples: ['5540950ac4ed4f11591db934b701aff8'] },
            notification: { type: 'string', examples: ['1'] },
            cdate: { type: 'string', examples: ['2018-11-15T22:26:35-06:00'] },
            mdate: { type: 'string', examples: ['2018-11-15T22:26:35-06:00'] },
            links: {
              type: 'object',
              properties: {
                calendarRels: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/calendars/1/calendarRels'],
                },
                calendarUsers: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/calendars/1/calendarUsers'],
                },
              },
            },
            id: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for Calendar with id 1'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const ListAllCampaigns = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          'orders[sdate]': {
            type: 'string',
            default: 'ASC',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Order campaigns by send date',
          },
          'orders[ldate]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Order campaigns by last send date',
          },
          'filters[automation]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Filter to return automation campaigns',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        campaigns: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              type: { type: 'string', examples: ['single'] },
              userid: { type: 'string', examples: ['1'] },
              segmentid: { type: 'string', examples: ['0'] },
              bounceid: { type: 'string', examples: ['-1'] },
              realcid: { type: 'string', examples: ['0'] },
              sendid: { type: 'string', examples: ['0'] },
              threadid: { type: 'string', examples: ['0'] },
              seriesid: { type: 'string', examples: ['0'] },
              formid: { type: 'string', examples: ['1'] },
              basetemplateid: {
                type: 'string',
                examples: ['90a1d1ab6ad33e95708caf6472dc1724f698c694'],
              },
              basemessageid: { type: 'string', examples: ['0'] },
              addressid: { type: 'string', examples: ['0'] },
              source: { type: 'string', examples: ['web'] },
              name: { type: 'string', examples: ['Opt In Email'] },
              cdate: { type: 'string', examples: ['2018-08-17T13:47:31-05:00'] },
              mdate: { type: 'string', examples: ['2018-08-17T13:47:31-05:00'] },
              sdate: {},
              ldate: {},
              send_amt: { type: 'string', examples: ['0'] },
              total_amt: { type: 'string', examples: ['0'] },
              opens: { type: 'string', examples: ['0'] },
              uniqueopens: { type: 'string', examples: ['0'] },
              linkclicks: { type: 'string', examples: ['0'] },
              uniquelinkclicks: { type: 'string', examples: ['0'] },
              subscriberclicks: { type: 'string', examples: ['0'] },
              forwards: { type: 'string', examples: ['0'] },
              uniqueforwards: { type: 'string', examples: ['0'] },
              hardbounces: { type: 'string', examples: ['0'] },
              softbounces: { type: 'string', examples: ['0'] },
              unsubscribes: { type: 'string', examples: ['0'] },
              unsubreasons: { type: 'string', examples: ['0'] },
              updates: { type: 'string', examples: ['0'] },
              socialshares: { type: 'string', examples: ['0'] },
              replies: { type: 'string', examples: ['0'] },
              uniquereplies: { type: 'string', examples: ['0'] },
              status: { type: 'string', examples: ['0'] },
              public: { type: 'string', examples: ['1'] },
              mail_transfer: { type: 'string', examples: ['0'] },
              mail_send: { type: 'string', examples: ['0'] },
              mail_cleanup: { type: 'string', examples: ['0'] },
              mailer_log_file: { type: 'string', examples: ['0'] },
              tracklinks: { type: 'string', examples: ['all'] },
              tracklinksanalytics: { type: 'string', examples: ['0'] },
              trackreads: { type: 'string', examples: ['1'] },
              trackreadsanalytics: { type: 'string', examples: ['1'] },
              analytics_campaign_name: { type: 'string', examples: [''] },
              tweet: { type: 'string', examples: ['0'] },
              facebook: { type: 'string', examples: ['0'] },
              survey: { type: 'string', examples: [''] },
              embed_images: { type: 'string', examples: ['0'] },
              htmlunsub: { type: 'string', examples: ['0'] },
              textunsub: { type: 'string', examples: ['0'] },
              htmlunsubdata: {},
              textunsubdata: {},
              recurring: { type: 'string', examples: ['day1'] },
              willrecur: { type: 'string', examples: ['0'] },
              split_type: { type: 'string', examples: ['even'] },
              split_content: { type: 'string', examples: ['0'] },
              split_offset: { type: 'string', examples: ['2'] },
              split_offset_type: { type: 'string', examples: ['day'] },
              split_winner_messageid: { type: 'string', examples: ['0'] },
              split_winner_awaiting: { type: 'string', examples: ['0'] },
              responder_offset: { type: 'string', examples: ['0'] },
              responder_type: { type: 'string', examples: ['subscribe'] },
              responder_existing: { type: 'string', examples: ['0'] },
              reminder_field: { type: 'string', examples: ['sdate'] },
              reminder_format: {},
              reminder_type: { type: 'string', examples: ['month_day'] },
              reminder_offset: { type: 'string', examples: ['0'] },
              reminder_offset_type: { type: 'string', examples: ['day'] },
              reminder_offset_sign: { type: 'string', examples: ['+'] },
              reminder_last_cron_run: {},
              activerss_interval: { type: 'string', examples: ['day1'] },
              activerss_url: {},
              activerss_items: { type: 'string', examples: ['10'] },
              ip4: { type: 'string', examples: ['643992596'] },
              laststep: { type: 'string', examples: ['designer'] },
              managetext: { type: 'string', examples: ['0'] },
              schedule: { type: 'string', examples: ['0'] },
              scheduleddate: {},
              waitpreview: { type: 'string', examples: ['0'] },
              deletestamp: {},
              replysys: { type: 'string', examples: ['0'] },
              links: {
                type: 'object',
                properties: {
                  user: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/campaigns/1/user'],
                  },
                  automation: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/campaigns/1/automation'],
                  },
                  campaignMessage: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/campaigns/1/campaignMessage'],
                  },
                  campaignMessages: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/campaigns/1/campaignMessages'],
                  },
                  links: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/campaigns/1/links'],
                  },
                  campaignLists: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/campaigns/1/campaignLists'],
                  },
                },
              },
              id: { type: 'string', examples: ['1'] },
              user: { type: 'string', examples: ['1'] },
              automation: {},
            },
          },
        },
        meta: { type: 'object', properties: { total: { type: 'string', examples: ['1'] } } },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const ListAllConnections = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          'filters[service]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Filter by the external service name.',
          },
          'filters[externalid]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Filter by the external id associated with a connection.',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        connections: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              service: { type: 'string', examples: ['shopify'] },
              externalid: { type: 'string', examples: ['foo.myshopify.com'] },
              name: { type: 'string', examples: ['Foo, Inc.'] },
              isInternal: { type: 'string', examples: ['1'] },
              status: { type: 'string', examples: ['1'] },
              syncStatus: { type: 'string', examples: ['0'] },
              lastSync: { type: 'string', examples: ['2017-02-02T13:09:07-06:00'] },
              logoUrl: { type: 'string', examples: [''] },
              linkUrl: { type: 'string', examples: [''] },
              cdate: { type: 'string', examples: ['2017-02-02T13:09:07-06:00'] },
              udate: { type: 'string', examples: ['2017-02-02T13:09:12-06:00'] },
              links: {
                type: 'object',
                properties: {
                  customers: { type: 'string', examples: ['/api/3/connections/1/customers'] },
                },
              },
              id: { type: 'string', examples: ['1'] },
            },
          },
        },
        meta: { type: 'object', properties: { total: { type: 'string', examples: ['2'] } } },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const ListAllContactAutomations = {
  response: {
    '200': {
      type: 'object',
      properties: {
        contactAutomations: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              contact: { type: 'string', examples: ['10003'] },
              seriesid: { type: 'string', examples: ['1'] },
              startid: { type: 'string', examples: ['0'] },
              status: { type: 'string', examples: ['2'] },
              batchid: {},
              adddate: { type: 'string', examples: ['2018-11-16T02:32:33-06:00'] },
              remdate: { type: 'string', examples: ['2018-11-16T02:32:33-06:00'] },
              timespan: { type: 'string', examples: ['0'] },
              lastblock: { type: 'string', examples: ['1'] },
              lastlogid: { type: 'string', examples: ['0'] },
              lastdate: { type: 'string', examples: ['2018-11-16T02:32:33-06:00'] },
              completedElements: { type: 'string', examples: ['0'] },
              totalElements: { type: 'string', examples: ['1'] },
              completed: { type: 'integer', default: 0, examples: [1] },
              completeValue: { type: 'integer', default: 0, examples: [100] },
              links: {
                type: 'object',
                properties: {
                  automation: {
                    type: 'string',
                    examples: [
                      'https://:account.api-us1.com/api/:version/contactAutomations/1/automation',
                    ],
                  },
                  contact: {
                    type: 'string',
                    examples: [
                      'https://:account.api-us1.com/api/:version/contactAutomations/1/contact',
                    ],
                  },
                  contactGoals: {
                    type: 'string',
                    examples: [
                      'https://:account.api-us1.com/api/:version/contactAutomations/1/contactGoals',
                    ],
                  },
                },
              },
              id: { type: 'string', examples: ['1'] },
              automation: { type: 'string', examples: ['1'] },
            },
          },
        },
        meta: {
          type: 'object',
          properties: {
            total: { type: 'string', examples: ['1'] },
            showcase_stats: { type: 'array', items: {} },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const ListAllContactautomationsForContact = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the contact to receive automations for',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        contactAutomations: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              contact: { type: 'string', examples: ['6'] },
              seriesid: { type: 'string', examples: ['2'] },
              startid: { type: 'string', examples: ['0'] },
              status: { type: 'string', examples: ['2'] },
              batchid: { type: 'string', examples: ['completed'] },
              adddate: { type: 'string', examples: ['2022-03-01T08:51:57-06:00'] },
              remdate: { type: 'string', examples: ['2022-03-01T08:51:58-06:00'] },
              timespan: { type: 'string', examples: ['1'] },
              lastblock: { type: 'string', examples: ['5'] },
              lastlogid: { type: 'string', examples: ['0'] },
              lastdate: { type: 'string', examples: ['2022-03-01T08:51:58-06:00'] },
              in_als: { type: 'string', examples: ['3'] },
              completedElements: { type: 'integer', default: 0, examples: [0] },
              totalElements: { type: 'integer', default: 0, examples: [3] },
              completed: { type: 'integer', default: 0, examples: [1] },
              completeValue: { type: 'integer', default: 0, examples: [100] },
              links: {
                type: 'object',
                properties: {
                  automation: {
                    type: 'string',
                    examples: [
                      'https://:account.api-us1.com/api/3/contactAutomations/6/automation',
                    ],
                  },
                  contact: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/contactAutomations/6/contact'],
                  },
                  contactGoals: {
                    type: 'string',
                    examples: [
                      'https://:account.api-us1.com/api/3/contactAutomations/6/contactGoals',
                    ],
                  },
                  automationLogs: {
                    type: 'string',
                    examples: [
                      'https://:account.api-us1.com/api/3/contactAutomations/6/automationLogs',
                    ],
                  },
                },
              },
              id: { type: 'string', examples: ['6'] },
              automation: { type: 'string', examples: ['2'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for Subscriber with id 1'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const ListAllContacts = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          ids: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              'Filter contacts by ID. Can be repeated for multiple IDs. Example: ids[]=1&ids[]=2&ids[]=42',
          },
          email: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Email address of the contact you want to get',
          },
          email_like: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Filter contacts that contain the given value in the email address',
          },
          exclude: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Exclude from the response the contact with the given ID',
          },
          formid: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Filter contacts associated with the given form',
          },
          id_greater: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Only include contacts with an ID greater than the given ID',
          },
          id_less: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Only include contacts with an ID less than the given ID',
          },
          listid: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Filter contacts associated with the given list',
          },
          organization: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              '(Deprecated) Please use Account-Contact end points. Filter contacts associated with the given organization ID',
          },
          search: {
            type: 'string',
            default: 'null',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              'Filter contacts that match the given value in the contact names, organization, phone or email',
          },
          segmentid: {
            type: 'integer',
            format: 'int32',
            default: null,
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              'Return only contacts that match a list segment (this param initially returns segment information, when it is run a second time it will return contacts that match the segment)',
          },
          seriesid: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Filter contacts associated with the given automation',
          },
          status: {
            type: 'integer',
            format: 'int32',
            default: -1,
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'See [available values](#section-contact-parameters-available-values)',
          },
          tagid: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Filter contacts associated with the given tag',
          },
          'filters[created_before]': {
            type: 'string',
            format: 'date',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Filter contacts that were created prior to this date',
          },
          'filters[created_after]': {
            type: 'string',
            format: 'date',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Filter contacts that were created after this date',
          },
          'filters[updated_before]': {
            type: 'string',
            format: 'date',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Filter contacts that were updated before this date',
          },
          'filters[updated_after]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Filter contacts that were updated after this date',
          },
          waitid: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Filter by contacts in the wait queue of an automation block',
          },
          'orders[cdate]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Order contacts by creation date',
          },
          'orders[email]': {
            type: 'string',
            default: 'ASC',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Order contacts by email',
          },
          'orders[first_name]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Order contacts by first name',
          },
          'orders[last_name]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Order contacts by last name',
          },
          'orders[name]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Order contacts by full name',
          },
          'orders[score]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Order contacts by score',
          },
          in_group_lists: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              'Set this to "true" in order to return only contacts that the current user has permissions to see.',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      oneOf: [
        {
          type: 'object',
          properties: {
            contacts: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  cdate: { type: 'string', examples: ['2017-01-25T23:58:14-06:00'] },
                  email: { type: 'string', examples: ['janedoe@example.com'] },
                  phone: { type: 'string', examples: ['3120000000'] },
                  firstName: { type: 'string', examples: ['John'] },
                  lastName: { type: 'string', examples: ['Doe'] },
                  orgid: { type: 'string', examples: ['0'] },
                  segmentio_id: { type: 'string', examples: [''] },
                  bounced_hard: { type: 'string', examples: ['0'] },
                  bounced_soft: { type: 'string', examples: ['0'] },
                  bounced_date: { type: 'string', examples: ['0000-00-00'] },
                  ip: { type: 'string', examples: ['0'] },
                  ua: { type: 'string', examples: [''] },
                  hash: { type: 'string', examples: ['31e076c964f4262817f9ba302c96e1c6'] },
                  socialdata_lastcheck: { type: 'string', examples: ['0000-00-00 00:00:00'] },
                  email_local: { type: 'string', examples: [''] },
                  email_domain: { type: 'string', examples: [''] },
                  sentcnt: { type: 'string', examples: ['0'] },
                  rating_tstamp: { type: 'string', examples: ['0000-00-00'] },
                  gravatar: { type: 'string', examples: ['3'] },
                  deleted: { type: 'string', examples: ['0'] },
                  adate: { type: 'string', examples: ['2017-02-22 15:26:24'] },
                  udate: { type: 'string', examples: ['2017-01-25T23:58:14-06:00'] },
                  edate: { type: 'string', examples: ['2017-01-27 14:44:13'] },
                  scoreValues: { type: 'array', items: {} },
                  links: {
                    type: 'object',
                    properties: {
                      bounceLogs: {
                        type: 'string',
                        examples: [
                          'https://:account.api-us1.com/api/:version/contacts/68/bounceLogs',
                        ],
                      },
                      contactAutomations: {
                        type: 'string',
                        examples: [
                          'https://:account.api-us1.com/api/:version/contacts/68/contactAutomations',
                        ],
                      },
                      contactData: {
                        type: 'string',
                        examples: [
                          'https://:account.api-us1.com/api/:version/contacts/68/contactData',
                        ],
                      },
                      contactGoals: {
                        type: 'string',
                        examples: [
                          'https://:account.api-us1.com/api/:version/contacts/68/contactGoals',
                        ],
                      },
                      contactLists: {
                        type: 'string',
                        examples: [
                          'https://:account.api-us1.com/api/:version/contacts/68/contactLists',
                        ],
                      },
                      contactLogs: {
                        type: 'string',
                        examples: [
                          'https://:account.api-us1.com/api/:version/contacts/68/contactLogs',
                        ],
                      },
                      contactTags: {
                        type: 'string',
                        examples: [
                          'https://:account.api-us1.com/api/:version/contacts/68/contactTags',
                        ],
                      },
                      contactDeals: {
                        type: 'string',
                        examples: [
                          'https://:account.api-us1.com/api/:version/contacts/68/contactDeals',
                        ],
                      },
                      deals: {
                        type: 'string',
                        examples: ['https://:account.api-us1.com/api/:version/contacts/68/deals'],
                      },
                      fieldValues: {
                        type: 'string',
                        examples: [
                          'https://:account.api-us1.com/api/:version/contacts/68/fieldValues',
                        ],
                      },
                      geoIps: {
                        type: 'string',
                        examples: ['https://:account.api-us1.com/api/:version/contacts/68/geoIps'],
                      },
                      notes: {
                        type: 'string',
                        examples: ['https://:account.api-us1.com/api/:version/contacts/68/notes'],
                      },
                      organization: {
                        type: 'string',
                        examples: [
                          'https://:account.api-us1.com/api/:version/contacts/68/organization',
                        ],
                      },
                      plusAppend: {
                        type: 'string',
                        examples: [
                          'https://:account.api-us1.com/api/:version/contacts/68/plusAppend',
                        ],
                      },
                      trackingLogs: {
                        type: 'string',
                        examples: [
                          'https://:account.api-us1.com/api/:version/contacts/68/trackingLogs',
                        ],
                      },
                      scoreValues: {
                        type: 'string',
                        examples: [
                          'https://:account.api-us1.com/api/:version/contacts/68/scoreValues',
                        ],
                      },
                    },
                  },
                  id: { type: 'string', examples: ['68'] },
                  organization: {},
                },
              },
            },
            meta: {
              type: 'object',
              properties: {
                total: { type: 'string', examples: ['2'] },
                page_input: {
                  type: 'object',
                  properties: {
                    segmentid: {},
                    formid: { type: 'integer', default: 0, examples: [0] },
                    listid: { type: 'integer', default: 0, examples: [0] },
                    tagid: { type: 'integer', default: 0, examples: [0] },
                    limit: { type: 'integer', default: 0, examples: [20] },
                    offset: { type: 'integer', default: 0, examples: [0] },
                    search: {},
                    sort: {},
                    seriesid: { type: 'integer', default: 0, examples: [0] },
                    waitid: { type: 'integer', default: 0, examples: [0] },
                    status: { type: 'integer', default: 0, examples: [-1] },
                    forceQuery: { type: 'integer', default: 0, examples: [0] },
                    cacheid: { type: 'string', examples: ['895202850f4ca4144513c0962812f951'] },
                  },
                },
              },
            },
          },
        },
        {
          type: 'object',
          properties: {
            scoreValues: { type: 'array', items: {} },
            contacts: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  cdate: { type: 'string', examples: ['2018-09-12T16:53:50-05:00'] },
                  email: { type: 'string', examples: ['adam@activecampaign.com'] },
                  phone: { type: 'string', examples: [''] },
                  firstName: { type: 'string', examples: [''] },
                  lastName: { type: 'string', examples: [''] },
                  orgid: { type: 'string', examples: ['0'] },
                  segmentio_id: { type: 'string', examples: [''] },
                  bounced_hard: { type: 'string', examples: ['0'] },
                  bounced_soft: { type: 'string', examples: ['0'] },
                  bounced_date: { type: 'string', examples: ['0000-00-00'] },
                  ip: { type: 'string', examples: ['0'] },
                  ua: { type: 'string', examples: [''] },
                  hash: { type: 'string', examples: ['0d9c41ae7a4de516313673e2341f6003'] },
                  socialdata_lastcheck: { type: 'string', examples: ['0000-00-00 00:00:00'] },
                  email_local: { type: 'string', examples: [''] },
                  email_domain: { type: 'string', examples: [''] },
                  sentcnt: { type: 'string', examples: ['0'] },
                  rating_tstamp: { type: 'string', examples: ['0000-00-00'] },
                  gravatar: { type: 'string', examples: ['1'] },
                  deleted: { type: 'string', examples: ['0'] },
                  anonymized: { type: 'string', examples: ['0'] },
                  udate: { type: 'string', examples: ['2018-09-12T17:00:00-05:00'] },
                  deleted_at: { type: 'string', examples: ['0000-00-00 00:00:00'] },
                  scoreValues: { type: 'array', items: {} },
                  links: {
                    type: 'object',
                    properties: {
                      bounceLogs: {
                        type: 'string',
                        examples: [
                          'https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/bounceLogs',
                        ],
                      },
                      contactAutomations: {
                        type: 'string',
                        examples: [
                          'https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/contactAutomations',
                        ],
                      },
                      contactData: {
                        type: 'string',
                        examples: [
                          'https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/contactData',
                        ],
                      },
                      contactGoals: {
                        type: 'string',
                        examples: [
                          'https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/contactGoals',
                        ],
                      },
                      contactLists: {
                        type: 'string',
                        examples: [
                          'https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/contactLists',
                        ],
                      },
                      contactLogs: {
                        type: 'string',
                        examples: [
                          'https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/contactLogs',
                        ],
                      },
                      contactTags: {
                        type: 'string',
                        examples: [
                          'https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/contactTags',
                        ],
                      },
                      contactDeals: {
                        type: 'string',
                        examples: [
                          'https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/contactDeals',
                        ],
                      },
                      deals: {
                        type: 'string',
                        examples: [
                          'https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/deals',
                        ],
                      },
                      fieldValues: {
                        type: 'string',
                        examples: [
                          'https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/fieldValues',
                        ],
                      },
                      geoIps: {
                        type: 'string',
                        examples: [
                          'https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/geoIps',
                        ],
                      },
                      notes: {
                        type: 'string',
                        examples: [
                          'https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/notes',
                        ],
                      },
                      organization: {
                        type: 'string',
                        examples: [
                          'https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/organization',
                        ],
                      },
                      plusAppend: {
                        type: 'string',
                        examples: [
                          'https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/plusAppend',
                        ],
                      },
                      trackingLogs: {
                        type: 'string',
                        examples: [
                          'https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/trackingLogs',
                        ],
                      },
                      scoreValues: {
                        type: 'string',
                        examples: [
                          'https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/scoreValues',
                        ],
                      },
                    },
                  },
                  id: { type: 'string', examples: ['5'] },
                  organization: {},
                },
              },
            },
            meta: {
              type: 'object',
              properties: {
                total: { type: 'string', examples: ['6'] },
                page_input: {
                  type: 'object',
                  properties: {
                    segmentid: { type: 'integer', default: 0, examples: [0] },
                    formid: { type: 'integer', default: 0, examples: [0] },
                    listid: { type: 'integer', default: 0, examples: [0] },
                    tagid: { type: 'integer', default: 0, examples: [0] },
                    limit: { type: 'integer', default: 0, examples: [20] },
                    offset: { type: 'integer', default: 0, examples: [0] },
                    search: {},
                    sort: {},
                    seriesid: { type: 'integer', default: 0, examples: [0] },
                    waitid: { type: 'integer', default: 0, examples: [0] },
                    status: { type: 'integer', default: 0, examples: [-1] },
                    forceQuery: { type: 'integer', default: 0, examples: [0] },
                    cacheid: { type: 'string', examples: ['522b5224f2007dca7483e08e7ebf5005'] },
                  },
                },
              },
            },
          },
        },
      ],
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const ListAllCustomFieldValues = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          'filters[fieldid]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the field the value belongs to.',
          },
          'filters[val]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Value of the custom field for a specific contact',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        fieldValues: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              contact: { type: 'string', examples: ['5'] },
              field: { type: 'string', examples: ['1'] },
              value: { type: 'string', examples: ['Burger'] },
              cdate: { type: 'string', examples: ['2018-09-29T12:03:11-06:00'] },
              udate: { type: 'string', examples: ['2018-09-29T12:03:11-06:00'] },
              links: {
                type: 'object',
                properties: {
                  owner: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/fieldValues/1/owner'],
                  },
                  field: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/fieldValues/1/field'],
                  },
                },
              },
              id: { type: 'string', examples: ['1'] },
              owner: { type: 'string', examples: ['5'] },
            },
          },
        },
        meta: { type: 'object', properties: { total: { type: 'string', examples: ['2'] } } },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const ListAllCustomFieldValues2 = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          'filters[customerAccountId]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Filter results by a specific account (note that Id uses a capital I)',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        accountCustomFieldData: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string', examples: ['3'] },
              accountCustomFieldMetumId: { type: 'integer', default: 0, examples: [1] },
              accountId: { type: 'integer', default: 0, examples: [1] },
              customFieldId: { type: 'integer', default: 0, examples: [1] },
              createdTimestamp: { type: 'string', examples: ['2018-11-06 02:26:07'] },
              updatedTimestamp: { type: 'string', examples: ['2018-11-06 02:26:07'] },
              fieldValue: { type: 'string', examples: ['test title'] },
              links: {
                type: 'object',
                properties: {
                  account: {
                    type: 'string',
                    examples: [
                      'https://:account.api-us1.com/api/:version/accountCustomFieldData/3/account',
                    ],
                  },
                  accountCustomFieldMetum: {
                    type: 'string',
                    examples: [
                      'https://:account.api-us1.com/api/:version/accountCustomFieldData/3/accountCustomFieldMetum',
                    ],
                  },
                },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const ListAllCustomFielddataFieldValues = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          'filters[dealId]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Filter results by a specific deal (note that Id uses a capital I)',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        dealCustomFieldData: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string', examples: ['3'] },
              dealCustomFieldMetumId: { type: 'integer', default: 0, examples: [1] },
              dealId: { type: 'integer', default: 0, examples: [1] },
              customFieldId: { type: 'integer', default: 0, examples: [1] },
              createdTimestamp: { type: 'string', examples: ['2018-11-06 02:26:07'] },
              updatedTimestamp: { type: 'string', examples: ['2018-11-06 02:26:07'] },
              fieldValue: { type: 'string', examples: ['test title'] },
              links: {
                type: 'object',
                properties: {
                  deal: {
                    type: 'string',
                    examples: [
                      'https://:account.api-us1.com/api/:version/dealCustomFieldData/3/deal',
                    ],
                  },
                  dealCustomFieldMetum: {
                    type: 'string',
                    examples: [
                      'https://:account.api-us1.com/api/:version/dealCustomFieldData/3/dealCustomFieldMetum',
                    ],
                  },
                },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const ListAllCustomFieldsMeta = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          limit: {
            type: 'integer',
            format: 'int32',
            default: 100,
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'The number of fields returned per request.',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        accountCustomFieldMeta: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string', examples: ['1'] },
              fieldLabel: { type: 'string', examples: ['Text Example'] },
              fieldType: { type: 'string', examples: ['text'] },
              fieldOptions: {},
              fieldDefault: { type: 'integer', default: 0, examples: [1] },
              fieldDefaultCurrency: {},
              isFormVisible: { type: 'integer', default: 0, examples: [0] },
              isRequired: { type: 'integer', default: 0, examples: [0] },
              displayOrder: { type: 'integer', default: 0, examples: [1] },
              personalization: { type: 'string', examples: [''] },
              knownFieldId: {},
              hideFieldFlag: { type: 'integer', default: 0, examples: [0] },
              createdTimestamp: { type: 'string', examples: ['2019-04-23 15:34:00'] },
              updatedTimestamp: { type: 'string', examples: ['2019-05-03 15:16:51'] },
              links: {
                type: 'object',
                properties: {
                  accountCustomFieldData: {
                    type: 'string',
                    examples: [
                      'https://:account.api-us1.com/api/:version/accountCustomFieldMeta/1/accountCustomFieldData',
                    ],
                  },
                },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const ListAllCustomers = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          'filters[email]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Filter by the email address of a customer.',
          },
          'filters[externalid]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Filter by the id of the customer in the external service.',
          },
          'filters[connectionid]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              'Filter by the id of the connection object for the service where the customer originates.',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        ecomCustomers: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              connectionid: { type: 'string', examples: ['1'] },
              externalid: { type: 'string', examples: ['56789'] },
              email: { type: 'string', examples: ['alice@example.com'] },
              totalRevenue: { type: 'string', examples: ['3280'] },
              totalOrders: { type: 'string', examples: ['2'] },
              totalProducts: { type: 'string', examples: ['2'] },
              avgRevenuePerOrder: { type: 'string', examples: ['2285'] },
              avgProductCategory: { type: 'string', examples: ['Electronics'] },
              tstamp: { type: 'string', examples: ['2017-02-06T14:05:31-06:00'] },
              links: {
                type: 'object',
                properties: {
                  connection: { type: 'string', examples: ['/api/3/ecomCustomers/1/connection'] },
                  orders: { type: 'string', examples: ['/api/3/ecomCustomers/1/orders'] },
                },
              },
              id: { type: 'string', examples: ['1'] },
              connection: { type: 'string', examples: ['1'] },
            },
          },
        },
        meta: { type: 'object', properties: { total: { type: 'string', examples: ['3'] } } },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const ListAllDealRoles = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          search: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: '(optional string used to search for matching titles)',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        dealRoles: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              title: { type: 'string', examples: ['Contributor'] },
              created_timestamp: { type: 'string', examples: ['2019-09-10T13:01:49-05:00'] },
              updated_timestamp: { type: 'string', examples: ['2019-09-10T13:01:49-05:00'] },
              links: {
                type: 'object',
                properties: {
                  contactDeals: {
                    type: 'string',
                    examples: ['https://example.activehosted.com/api/3/dealRoles/2/contactDeals'],
                  },
                },
              },
              id: { type: 'string', examples: ['2'] },
            },
          },
        },
        meta: { type: 'object', properties: { total: { type: 'string', examples: ['2'] } } },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const ListAllDealStages = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          'filters[title]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              "Filter by deal stages' titles. Any stages whose titles partial-match the filter value are returned",
          },
          'filters[d_groupid]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Filter by pipeline's id",
          },
          'orders[title]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Order by deal stage's title",
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        dealStages: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              cardRegion1: { type: 'string', examples: ['title'] },
              cardRegion2: { type: 'string', examples: ['next-action'] },
              cardRegion3: { type: 'string', examples: ['show-avatar'] },
              cardRegion4: { type: 'string', examples: ['contact-fullname-orgname'] },
              cardRegion5: { type: 'string', examples: ['value'] },
              cdate: { type: 'string', examples: ['2017-03-01T15:52:42-06:00'] },
              color: { type: 'string', examples: ['32B0FC'] },
              dealOrder: { type: 'string', examples: ['next-action DESC'] },
              group: { type: 'string', examples: ['4'] },
              id: { type: 'string', examples: ['15'] },
              links: {
                type: 'object',
                properties: { group: { type: 'string', examples: ['/api/3/dealStages/15/group'] } },
              },
              order: { type: 'string', examples: ['1'] },
              title: { type: 'string', examples: ['Initial Contact'] },
              udate: { type: 'string', examples: ['2017-03-01T15:52:42-06:00'] },
              width: { type: 'string', examples: ['280'] },
            },
          },
        },
        meta: { type: 'object', properties: { total: { type: 'string', examples: ['2'] } } },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const ListAllDealTaskTypes = {
  response: {
    '200': {
      type: 'object',
      properties: {
        dealTasktypes: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              cdate: {},
              defduration: { type: 'string', examples: ['0'] },
              id: { type: 'string', examples: ['1'] },
              links: { type: 'array', items: {} },
              status: { type: 'string', examples: ['0'] },
              title: { type: 'string', examples: ['Call'] },
              udate: {},
            },
          },
        },
        meta: { type: 'object', properties: { total: { type: 'string', examples: ['4'] } } },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const ListAllDeals = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          'filters[search]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Search text to use with `search_field` parameter.',
          },
          'filters[search_field]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              'Field to search for. See [available values](https://developers.activecampaign.com/reference/deal#deals-parameters-available-values).',
          },
          'filters[title]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Filter by deal's title",
          },
          'filters[stage]': {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Filter by deal's stage",
          },
          'filters[group]': {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Filter by deal's pipeline",
          },
          'filters[status]': {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              "Filter by deal's status.  See [available values](https://developers.activecampaign.com/reference/deal#deals-parameters-available-values)",
          },
          'filters[owner]': {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Filter by deal's owner",
          },
          'filters[nextdate_range]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              "Filter by deal's tasks due dates. See [available values](https://developers.activecampaign.com/reference/deal#deals-parameters-available-values)",
          },
          'filters[tag]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              "Filter by tag names associated with deal's primary contact. See [available values](https://developers.activecampaign.com/reference/deal#deals-parameters-available-values).",
          },
          'filters[tasktype]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Filter by deals that have tasks with given type',
          },
          'filters[created_before]': {
            type: 'string',
            format: 'date',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Returns deals that are created less than given date',
          },
          'filters[created_after]': {
            type: 'string',
            format: 'date',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Returns deals that are created greater than or equal to given date',
          },
          'filters[updated_before]': {
            type: 'string',
            format: 'date',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Returns deals that are updated less than given date',
          },
          'filters[updated_after]': {
            type: 'string',
            format: 'date',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Returns deals that are updated greater than or equal to given date',
          },
          'filters[organization]': {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Filter by deal's primary contact's organization's id",
          },
          'filters[minimum_value]': {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              'In USD with dollar portion. Returns deals whose values are greater than or equal to given value',
          },
          'filters[maximum_value]': {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              'In USD with dollar portion. Returns deals whose values are less than or equal to given value',
          },
          'filters[score_greater_than]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              'In a format of `<score_id>:<score_value>`. Returns deals whose score value is greater than given value',
          },
          'filters[score_less_than]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              'In a format of `<score_id>:<score_value>`. Returns deals whose score value is less than given value',
          },
          'filters[score]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              'In a format of `<score_id>:<score_value>`. Returns deals whose score value is equal to given value',
          },
          'orders[title]': {
            type: 'string',
            default: 'ASC',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Order by deal's title.",
          },
          'orders[value]': {
            type: 'string',
            default: 'ASC',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Order by deal's value.",
          },
          'orders[cdate]': {
            type: 'string',
            default: 'ASC',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Order by deal's created date.",
          },
          'orders[contact_name]': {
            type: 'string',
            default: 'ASC',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Order by deal's primary contact's first name.",
          },
          'orders[contact_orgname]': {
            type: 'string',
            default: 'ASC',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Order by deal's primary contact's organization name.",
          },
          'orders[next-action]': {
            type: 'string',
            default: 'ASC',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              "Order by deal's next task's due date first. Then append deals with no next task. Lastly append deals with overdue tasks. If dates are the same, order by deal's id.",
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        deals: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              owner: { type: 'string', examples: ['1'] },
              contact: { type: 'string', examples: ['39'] },
              organization: { type: 'string', examples: ['20'] },
              group: { type: 'string', examples: ['1'] },
              stage: { type: 'string', examples: ['2'] },
              title: { type: 'string', examples: ['Able Hyena'] },
              description: { type: 'string', examples: ['Article do skill hope.'] },
              percent: { type: 'string', examples: ['0'] },
              cdate: { type: 'string', examples: ['2019-09-06T11:29:48-05:00'] },
              mdate: { type: 'string', examples: ['2019-09-06T11:29:48-05:00'] },
              nextdate: {},
              nexttaskid: {},
              value: { type: 'string', examples: ['1872151'] },
              currency: { type: 'string', examples: ['usd'] },
              winProbability: { type: 'integer', default: 0, examples: [44] },
              winProbabilityMdate: { type: 'string', examples: ['2019-10-05T12:27:22-05:00'] },
              status: { type: 'string', examples: ['0'] },
              activitycount: { type: 'string', examples: ['1'] },
              nextdealid: { type: 'string', examples: ['46'] },
              edate: { type: 'string', examples: ['2019-11-22 14:15:37'] },
              links: {
                type: 'object',
                properties: {
                  dealActivities: { type: 'string', examples: ['/api/3/deals/46/dealActivities'] },
                  contact: { type: 'string', examples: ['/api/3/deals/46/contact'] },
                  contactDeals: { type: 'string', examples: ['/api/3/deals/46/contactDeals'] },
                  group: { type: 'string', examples: ['/api/3/deals/46/group'] },
                  nextTask: { type: 'string', examples: ['/api/3/deals/46/nextTask'] },
                  notes: { type: 'string', examples: ['/api/3/deals/46/notes'] },
                  account: { type: 'string', examples: ['/api/3/deals/46/account'] },
                  customerAccount: {
                    type: 'string',
                    examples: ['/api/3/deals/46/customerAccount'],
                  },
                  organization: { type: 'string', examples: ['/api/3/deals/46/organization'] },
                  owner: { type: 'string', examples: ['/api/3/deals/46/owner'] },
                  scoreValues: { type: 'string', examples: ['/api/3/deals/46/scoreValues'] },
                  stage: { type: 'string', examples: ['/api/3/deals/46/stage'] },
                  tasks: { type: 'string', examples: ['api/3/deals/46/tasks'] },
                  dealCustomFieldData: {
                    type: 'string',
                    examples: ['/api/3/deals/46/dealCustomFieldData'],
                  },
                },
              },
              id: { type: 'string', examples: ['46'] },
              isDisabled: { type: 'boolean', default: true, examples: [false] },
              account: { type: 'string', examples: ['20'] },
              customerAccount: { type: 'string', examples: ['20'] },
            },
          },
        },
        meta: {
          type: 'object',
          properties: {
            currencies: {
              type: 'object',
              properties: {
                USD: {
                  type: 'object',
                  properties: {
                    currency: { type: 'string', examples: ['USD'] },
                    total: { type: 'string', examples: ['3'] },
                    value: { type: 'string', examples: ['30000'] },
                  },
                },
              },
            },
            total: { type: 'integer', default: 0, examples: [3] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const ListAllEmailActivities = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          'filters[subscriberid]': {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              'Set this parameter to return only email activities belonging to a given subscriber.',
          },
          'filters[dealId]': {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              'Set this parameter to return only email activities belonging to a given deal.',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const ListAllEventTypes = {
  response: {
    '200': { $schema: 'https://json-schema.org/draft/2020-12/schema#' },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const ListAllGroupLimits = {
  response: {
    '200': {
      type: 'object',
      properties: {
        groupLimits: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              groupid: { type: 'string', examples: ['1'] },
              limitMail: { type: 'string', examples: ['0'] },
              limitMailType: { type: 'string', examples: ['month'] },
              limitContact: { type: 'string', examples: ['0'] },
              limitList: { type: 'string', examples: ['0'] },
              limitCampaign: { type: 'string', examples: ['0'] },
              limitCampaignType: { type: 'string', examples: ['month'] },
              limitAttachment: { type: 'string', examples: ['-1'] },
              limitUser: { type: 'string', examples: ['0'] },
              abuseRatio: { type: 'string', examples: ['4'] },
              forceSenderInfo: { type: 'string', examples: ['0'] },
              links: {
                type: 'object',
                properties: {
                  group: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/groupLimits/1/group'],
                  },
                },
              },
              id: { type: 'string', examples: ['1'] },
              group: { type: 'string', examples: ['1'] },
            },
          },
        },
        meta: { type: 'object', properties: { total: { type: 'string', examples: ['4'] } } },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const ListAllGroups = {
  response: {
    '200': {
      type: 'object',
      properties: {
        groups: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              title: { type: 'string', examples: ['TEST TITLE'] },
              descript: {
                type: 'string',
                examples: ['This is a group for admin users (people that can manage content)'],
              },
              unsubscribelink: { type: 'string', examples: ['0'] },
              optinconfirm: { type: 'string', examples: ['0'] },
              p_admin: { type: 'string', examples: ['1'] },
              pgListAdd: { type: 'string', examples: ['1'] },
              pgListEdit: { type: 'string', examples: ['1'] },
              pgListDelete: { type: 'string', examples: ['1'] },
              pgListHeaders: { type: 'string', examples: ['1'] },
              pgListEmailaccount: { type: 'string', examples: ['1'] },
              pgListBounce: { type: 'string', examples: ['1'] },
              pgMessageAdd: { type: 'string', examples: ['1'] },
              pgMessageEdit: { type: 'string', examples: ['1'] },
              pgMessageDelete: { type: 'string', examples: ['1'] },
              pgMessageSend: { type: 'string', examples: ['1'] },
              pgContactAdd: { type: 'string', examples: ['1'] },
              pgContactEdit: { type: 'string', examples: ['1'] },
              pgContactDelete: { type: 'string', examples: ['1'] },
              pgContactMerge: { type: 'string', examples: ['1'] },
              pgContactImport: { type: 'string', examples: ['1'] },
              pgContactApprove: { type: 'string', examples: ['1'] },
              pgContactExport: { type: 'string', examples: ['1'] },
              pgContactSync: { type: 'string', examples: ['1'] },
              pgContactFilters: { type: 'string', examples: ['1'] },
              pgContactActions: { type: 'string', examples: ['0'] },
              pgContactFields: { type: 'string', examples: ['1'] },
              pg_user_add: { type: 'string', examples: ['1'] },
              pg_user_edit: { type: 'string', examples: ['1'] },
              pg_user_delete: { type: 'string', examples: ['1'] },
              pgGroupAdd: { type: 'string', examples: ['1'] },
              pgGroupEdit: { type: 'string', examples: ['1'] },
              pgGroupDelete: { type: 'string', examples: ['1'] },
              pgTemplateAdd: { type: 'string', examples: ['1'] },
              pgTemplateEdit: { type: 'string', examples: ['1'] },
              pgTemplateDelete: { type: 'string', examples: ['1'] },
              pgPersonalizationAdd: { type: 'string', examples: ['1'] },
              pgPersonalizationEdit: { type: 'string', examples: ['1'] },
              pgPersonalizationDelete: { type: 'string', examples: ['1'] },
              pgAutomationManage: { type: 'string', examples: ['1'] },
              pgFormEdit: { type: 'string', examples: ['1'] },
              pgReportsCampaign: { type: 'string', examples: ['1'] },
              pgReportsList: { type: 'string', examples: ['1'] },
              pgReportsUser: { type: 'string', examples: ['1'] },
              pgReportsTrend: { type: 'string', examples: ['1'] },
              pgStartupReports: { type: 'string', examples: ['1'] },
              pgStartupGettingstarted: { type: 'string', examples: ['1'] },
              pgDeal: { type: 'string', examples: ['1'] },
              pgDealDelete: { type: 'string', examples: ['1'] },
              pgDealReassign: { type: 'string', examples: ['1'] },
              pgDealGroupAdd: { type: 'string', examples: ['1'] },
              pgDealGroupEdit: { type: 'string', examples: ['1'] },
              pgDealGroupDelete: { type: 'string', examples: ['1'] },
              pgSavedResponsesManage: { type: 'string', examples: ['1'] },
              sdate: { type: 'string', examples: ['2018-09-20T10:51:14-05:00'] },
              reqApproval: { type: 'string', examples: ['0'] },
              reqApproval1st: { type: 'string', examples: ['2'] },
              reqApprovalNotify: { type: 'string', examples: [''] },
              socialdata: { type: 'string', examples: ['0'] },
              links: {
                type: 'object',
                properties: {
                  userGroups: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/groups/3/userGroups'],
                  },
                  groupLimit: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/groups/3/groupLimit'],
                  },
                  dealGroupGroups: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/groups/3/dealGroupGroups'],
                  },
                  listGroups: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/groups/3/listGroups'],
                  },
                  addressGroups: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/groups/3/addressGroups'],
                  },
                  automationGroups: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/groups/3/automationGroups'],
                  },
                },
              },
              id: { type: 'string', examples: ['3'] },
            },
          },
        },
        meta: { type: 'object', properties: { total: { type: 'string', examples: ['4'] } } },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const ListAllMessages = {
  response: {
    '200': {
      type: 'object',
      properties: {
        messages: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              userid: { type: 'string', examples: ['1'] },
              ed_instanceid: { type: 'string', examples: ['0'] },
              ed_version: { type: 'string', examples: ['1'] },
              cdate: { type: 'string', examples: ['2018-08-17T09:47:38-05:00'] },
              mdate: { type: 'string', examples: ['2018-08-17T09:47:38-05:00'] },
              name: { type: 'string', examples: [''] },
              fromname: { type: 'string', examples: ['John Doe'] },
              fromemail: { type: 'string', examples: ['noreply@example.com'] },
              reply2: { type: 'string', examples: ['hello@example.com'] },
              priority: { type: 'string', examples: ['3'] },
              charset: { type: 'string', examples: ['utf-8'] },
              encoding: { type: 'string', examples: ['quoted-printable'] },
              format: { type: 'string', examples: ['mime'] },
              subject: { type: 'string', examples: ['Update your subscription to %LISTNAME%'] },
              preheader_text: { type: 'string', examples: [''] },
              text: {
                type: 'string',
                examples: [
                  ' \n\n**Update your subscription details for %LISTNAME%** \n\n \n\nYou or someone entering your email has requested to update your\nsubscription details for the address %EMAIL%.\n\n**To update your subscription details click the link below.**\n\nUpdate My Subscription <%LINK%> \n\n \n\n{"If you believe that this is a mistake and you did not intend on\nupdating your subscription to this list, you can ignore this message and\nnothing else will happen."|alang\n\n ',
                ],
              },
              html: {
                type: 'string',
                examples: [
                  '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n<html lang="en" style="margin: 0; outline: none; padding: 0;">\n<head>\n    <!--[if !mso]><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->\n    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">\n    <meta http-equiv="Content-Language" content="en-us">\n    <title>Preview</title>\n    <style>\n        .ExternalClass         .ExternalClass p,\n        .ExternalClass ul,\n        .ExternalClass ol         .undoreset div p,\n        .undoreset p     </style>\n    <style>\n        @media only screen and (max-width: 600px),\n        only screen and (max-device-width: 600px)             *             table             thead,\n            tbody,\n            tr             th,\n            td,\n            p         }\n    </style>\n</head>\n<body style="font-family: Arial; line-height: 1.1; margin: 0px; background-color: #F2F2F2; width: 100%; text-align: center;">\n    <div class="divbody" style="margin: 0px; outline: none; padding: 0px; font-family: arial; line-height: 1.1; width: 100%; background-color: #F2F2F2; background: #F2F2F2; text-align: center;">\n        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="font-size: 16px;">\n            <tr>\n                <td valign="top" height="40" align="center">&nbsp;</td>\n            </tr>\n            <tr>\n                <td align="center" valign="top" width="100%">\n                    <table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#F2F2F2" style="font-size: 16px; min-width: 650px;">\n                        <tr>\n                            <td valign="top" align="center">\n                                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="font-size: 16px;">\n                                    <tr>\n                                        <td valign="top" style="padding: 0;">\n                                            <table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 14px;">\n                                                <tr style="margin: 0; padding: 0;">\n                                                    <td valign="top">\n                                                        <table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 14px;">\n                                                            <tr>\n                                                                <td valign="top" align="center" style="Margin:0; padding:0; font-size:20px; font-family:Arial,Helvetica; line-height:26px; text-align:center!important;"><strong style="font-weight:bold;">Update your subscription details for %LISTNAME%</strong>\n                                                                </td>\n                                                            </tr>\n                                                        </table>\n                                                    </td>\n                                                </tr>\n                                            </table>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td height="20">&nbsp;</td>\n                                    </tr>\n                                    <tr>\n                                        <td valign="top" style="padding: 0;">\n                                            <table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 14px;">\n                                                <tr style="margin: 0; padding: 0;">\n                                                    <td valign="top">\n                                                        <table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 14px;">\n                                                            <tr>\n                                                                <td valign="top" align="center" width="610" style="color: inherit; font-size: inherit; font-weight: inherit; line-height: 1; text-decoration: inherit; font-family: Arial;">You or someone entering your email has requested to update your subscription details for the address %EMAIL%.</td>\n                                                            </tr>\n                                                        </table>\n                                                    </td>\n                                                </tr>\n                                            </table>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td valign="top" style="padding: 20px;">\n                                            <table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; border-collapse: initial !important;">\n                                                <tr style="background-color: #ffffff;">\n                                                    <td valign="top" style="border-color: #c2c2c2; border-style: solid; border-width: 1px;">\n                                                        <table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px;">\n                                                            <tr>\n                                                                <td valign="top" align="center" style="padding:20px; font-size:16px; font-family:Arial,Helvetica; text-align:center;"><strong style="font-weight:bold;">To update your subscription details click the link below.</strong></td> </tr> <tr> <td valign="top" align="center"> <table border="0" cellpadding="0" cellspacing="0" style="font-size: 13px;"> <tr> <td valign="top" align="left" width="558">\n                                                                                <div class="button-wrapper" style="margin: 0; outline: none; padding: 0; text-align: center;">\n                                                                                    <!--[if mso]> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="%LINK%" style="v-text-anchor:middle; width: 558px; height: 50px;" arcsize="10%" strokecolor="#4DCBA9" strokeweight="1pt" fillcolor="#4DCBA9" > <w:anchorlock/> <center style="color:#ffffff;font-family:\'Arial\'; font-size:16px;">Update My Subscription</center> </v:roundrect> <![endif]-->\n                                                                                    <a href="%LINK%" style="margin: 0; outline: none; padding: 16px; background-color: #4DCBA9; border: 1px solid #4DCBA9; border-radius: 4px; color: #ffffff; font-family: Arial; font-size: 16px; display: inline-block; text-align: center; text-decoration: none; mso-hide: all;"> <span style="color:#ffffff;">Update My Subscription</span> </a>\n                                                                                </div>\n                                                                            </td>\n    </tr>\n    </table>\n    </td>\n    </tr>\n    <tr>\n        <td height="20">&nbsp;</td>\n    </tr>\n    </table>\n    </td>\n    </tr>\n    </table>\n    </td>\n    </tr>\n    <tr>\n        <td valign="top" style="padding: 0;">\n            <table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 14px;">\n                <tr style="margin: 0; padding: 0;">\n                    <td valign="top" style="padding: 20px;">\n                        <table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 14px;">\n                            <tr>\n                                <td valign="top" height="25" align="center" style="Margin:0; padding:0; font-size:13px; line-height:13px; font-family:Arial,Helvetica; text-align:center!important; line-height:20px; text-align:center!important;">{"If you believe that this is a mistake and you did not intend on updating your subscription to this list, you can ignore this message and nothing else will happen."|alang</td>\n                            </tr>\n                        </table>\n                    </td>\n                </tr>\n            </table>\n        </td>\n    </tr>\n    </table>\n    </td>\n    </tr>\n    </table>\n    </td>\n    </tr>\n    <tr>\n        <td valign="top" height="40" align="center">&nbsp;</td>\n    </tr>\n    </table>\n    </div>\n</body>\n\n</html>',
                ],
              },
              htmlfetch: { type: 'string', examples: ['now'] },
              textfetch: { type: 'string', examples: ['now'] },
              hidden: { type: 'string', examples: ['0'] },
              preview_mime: { type: 'string', examples: [''] },
              preview_data: {},
              links: {
                type: 'object',
                properties: {
                  user: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/messages/2/user'],
                  },
                },
              },
              id: { type: 'string', examples: ['2'] },
              user: { type: 'string', examples: ['1'] },
            },
          },
        },
        meta: { type: 'object', properties: { total: { type: 'string', examples: ['3'] } } },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const ListAllOrders = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          'filters[connectionid]': {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Filter by the connection id. Must be greater than 0.',
          },
          'filters[externalid]': {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Filter by the external id of the order.',
          },
          'filters[externalcheckoutid]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Filter by the external checkout id',
          },
          'filters[email]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Filter by the customer email address.',
          },
          'filters[state]': {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              'Filter by the state of the order. 0 = Pending, 1 = Completed, 2 = Abandoned, 3 = Recovered, 4 = Waiting (Customer checked out but payment is not yet completed)',
          },
          'filters[customerid]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Filter by the customer id',
          },
          'filters[external_created_date]': {
            type: 'string',
            format: 'date',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Filter by the external created date',
          },
          'orders[connectionid]': {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Order by connection ID. Accepted values are ASC or DESC.',
          },
          'orders[externalid]': {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Order by external ID. Accepted values are ASC or DESC.',
          },
          'orders[externalcheckoutid]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Order by external checkout ID. Accepted values are ASC or DESC.',
          },
          'orders[email]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Order by email. Accepted values are ASC or DESC.',
          },
          'orders[state]': {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Order by state. Accepted values are ASC or DESC.',
          },
          'orders[customerid]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Order by customer ID. Accepted values are ASC or DESC.',
          },
          'orders[external_created_date]': {
            type: 'string',
            format: 'date',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Order by external created date. Accepted values are ASC or DESC.',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': { $schema: 'https://json-schema.org/draft/2020-12/schema#' },
    '422': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const ListAllPipelines = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          'filters[title]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              'Filter by pipeline\'s title. The filter matches any pipeline titles that contain the provided title (i.e. "Contact" matches all of "In Contact", "To Contact", and "Contact Pipeline").',
          },
          'filters[have_stages]': {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              'Filter by whether pipelines have deal stages. Can be either `1` or `0`. If `1`, only pipelines with at least one stage will be returned.',
          },
          'orders[title]': {
            type: 'string',
            default: 'ASC',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Order by Pipeline's title",
          },
          'orders[popular]': {
            type: 'string',
            default: 'ASC',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              "Order by number of deals each pipeline has. If pipelines have same number of deals, pipelines' created dates are used to determine the order.",
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        dealGroups: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              allgroups: { type: 'string', examples: ['1'] },
              allusers: { type: 'string', examples: ['1'] },
              autoassign: { type: 'string', examples: ['1'] },
              cdate: { type: 'string', examples: ['2017-01-16T14:51:57-06:00'] },
              currency: { type: 'string', examples: ['usd'] },
              id: { type: 'string', examples: ['1'] },
              links: {
                type: 'object',
                properties: {
                  dealGroupGroups: {
                    type: 'string',
                    examples: ['/api/3/dealGroups/1/dealGroupGroups'],
                  },
                  dealGroupUsers: {
                    type: 'string',
                    examples: ['/api/3/dealGroups/1/dealGroupUsers'],
                  },
                  stages: { type: 'string', examples: ['/api/3/dealGroups/1/stages'] },
                },
              },
              stages: { type: 'array', items: { type: 'string', examples: ['1'] } },
              title: { type: 'string', examples: ['Pipeline A'] },
              udate: { type: 'string', examples: ['2017-03-01T11:06:32-06:00'] },
            },
          },
        },
        dealStages: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              cardRegion1: { type: 'string', examples: ['title'] },
              cardRegion2: { type: 'string', examples: ['next-action'] },
              cardRegion3: { type: 'string', examples: ['show-avatar'] },
              cardRegion4: { type: 'string', examples: ['contact-fullname-orgname'] },
              cardRegion5: { type: 'string', examples: ['value'] },
              cdate: { type: 'string', examples: ['2017-01-20T09:27:32-06:00'] },
              color: { type: 'string', examples: ['C481DF'] },
              dealOrder: { type: 'string', examples: ['next-action DESC'] },
              group: { type: 'string', examples: ['1'] },
              id: { type: 'string', examples: ['1'] },
              links: {
                type: 'object',
                properties: { group: { type: 'string', examples: ['/api/3/dealStages/1/group'] } },
              },
              order: { type: 'string', examples: ['1'] },
              title: { type: 'string', examples: ['Stage 1'] },
              udate: { type: 'string', examples: ['2017-03-01T11:06:14-06:00'] },
              width: { type: 'string', examples: ['280'] },
            },
          },
        },
        meta: { type: 'object', properties: { total: { type: 'string', examples: ['2'] } } },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const ListAllSavedResponses = {
  response: {
    '200': {
      type: 'object',
      properties: {
        savedResponses: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              title: { type: 'string', examples: ['Response title'] },
              subject: { type: 'string', examples: ['Response subject'] },
              body: { type: 'string', examples: ['Response body'] },
              ldate: {},
              last_sent_user_id: {},
              cdate: { type: 'string', examples: ['2018-11-16T02:50:54-06:00'] },
              mdate: {},
              links: {
                type: 'object',
                properties: {
                  user: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/savedResponses/1/user'],
                  },
                  savedResponseCategorySavedResponse: {
                    type: 'string',
                    examples: [
                      'https://:account.api-us1.com/api/:version/savedResponses/1/savedResponseCategorySavedResponse',
                    ],
                  },
                },
              },
              id: { type: 'string', examples: ['1'] },
            },
          },
        },
        meta: { type: 'object', properties: { total: { type: 'string', examples: ['1'] } } },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const ListAllSchemas = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          limit: {
            type: 'integer',
            format: 'int32',
            default: 20,
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              'The number of schemas to retrieve for each API call. Maximum value is 100.',
          },
          offset: {
            type: 'integer',
            format: 'int32',
            default: 0,
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Offset index of items to return',
          },
          orders: {
            type: 'array',
            items: { type: 'string' },
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Array of sorting criteria to fetch items',
          },
          filters: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Filters schemas by different criteria',
          },
          showFields: {
            type: 'string',
            default: 'all',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              'Toggle which fields are shown in the response body of a schema (if there hidden due to e.g. recently being deleted). Omit this parameter entirely to hide fields by default.',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        schemas: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string', examples: ['6449c3f3-b68d-46d1-850b-c8aea998ce1b'] },
              slug: { type: 'string', examples: ['my-object'] },
              visibility: { type: 'string', examples: ['private'] },
              labels: {
                type: 'object',
                properties: {
                  singular: { type: 'string', examples: ['My Object'] },
                  plural: { type: 'string', examples: ['My Objects'] },
                },
              },
              description: { type: 'string', examples: ['Sample Schema'] },
              createdTimestamp: { type: 'string', examples: ['2021-04-16T15:08:25.783751329Z'] },
              updatedTimestamp: { type: 'string', examples: ['2021-04-16T15:08:25.783751329Z'] },
              fields: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    id: { type: 'string', examples: ['my-number-field'] },
                    labels: {
                      type: 'object',
                      properties: {
                        singular: { type: 'string', examples: ['Number'] },
                        plural: { type: 'string', examples: ['Numbers'] },
                      },
                    },
                    type: { type: 'string', examples: ['number'] },
                    required: { type: 'boolean', default: true, examples: [false] },
                    scale: { type: 'integer', default: 0, examples: [0] },
                  },
                },
              },
              icons: {
                type: 'object',
                properties: {
                  default: {
                    type: 'string',
                    examples: ['https://d226aj4ao1t61q.cloudfront.net/n9mayqo2d_customobject.png'],
                  },
                },
              },
              relationships: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    id: { type: 'string', examples: ['primary-contact'] },
                    labels: {
                      type: 'object',
                      properties: {
                        singular: { type: 'string', examples: ['Primary Contact'] },
                        plural: { type: 'string', examples: ['Primary Contacts'] },
                      },
                    },
                    description: { type: 'string', examples: ['Primary contact to this object'] },
                    namespace: { type: 'string', examples: ['contacts'] },
                    hasMany: { type: 'boolean', default: true, examples: [false] },
                  },
                },
              },
            },
          },
        },
        meta: {
          type: 'object',
          properties: {
            total: { type: 'integer', default: 0, examples: [1] },
            count: { type: 'integer', default: 0, examples: [1] },
            limit: { type: 'integer', default: 0, examples: [20] },
            offset: { type: 'integer', default: 0, examples: [0] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const ListAllScores = {
  response: {
    '200': {
      type: 'object',
      properties: {
        scores: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              reltype: { type: 'string', examples: ['contact'] },
              name: { type: 'string', examples: ['Link Engagement Score'] },
              descript: { type: 'string', examples: ['+50 points when user clicks any link sent'] },
              status: { type: 'string', examples: ['1'] },
              cdate: { type: 'string', examples: ['2018-12-13T15:05:42-06:00'] },
              mdate: { type: 'string', examples: ['2018-12-13T16:23:07-06:00'] },
              links: { type: 'array', items: {} },
              id: { type: 'string', examples: ['2'] },
            },
          },
        },
        meta: { type: 'object', properties: { total: { type: 'string', examples: ['4'] } } },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const ListAllSecondaryContacts = {
  response: {
    '200': {
      type: 'object',
      properties: {
        contactDeals: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              deal: { type: 'string', examples: ['2'] },
              contact: { type: 'string', examples: ['1'] },
              cdate: { type: 'string', examples: ['2019-02-25T08:16:56-06:00'] },
              links: {
                type: 'object',
                properties: {
                  deal: { type: 'string', examples: ['/api/3/contactDeals/1/deal'] },
                  contact: { type: 'string', examples: ['/api/3/contactDeals/1/contact'] },
                },
              },
              id: { type: 'string', examples: ['1'] },
            },
          },
        },
        meta: { type: 'object', properties: { total: { type: 'string', examples: ['1'] } } },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const ListAllSegments = {
  response: {
    '200': {
      type: 'object',
      properties: {
        segments: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              name: { type: 'string', examples: ['Segment of Automation 1'] },
              logic: { type: 'string', examples: ['and'] },
              hidden: { type: 'string', examples: ['0'] },
              seriesid: { type: 'string', examples: ['1'] },
              links: { type: 'array', items: {} },
              id: { type: 'string', examples: ['1'] },
            },
          },
        },
        meta: { type: 'object', properties: { total: { type: 'string', examples: ['4'] } } },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const ListAllTaskOutcomes = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          'filters[sentiment]': {
            type: 'string',
            enum: ['1', '2 or 3'],
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: '1 is for Negative, 2 is for Neutral and 3 is for Positive',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        taskOutcomes: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              title: { type: 'string', examples: ['Interested'] },
              sentiment: { type: 'string', examples: ['POSITIVE'] },
              disabled: { type: 'string', examples: ['0'] },
              created_by: { type: 'string', examples: ['1'] },
              updated_by: { type: 'string', examples: ['1'] },
              created_utc_timestamp: { type: 'string', examples: ['2021-02-16T12:26:15-06:00'] },
              updated_utc_timestamp: { type: 'string', examples: ['2021-02-16T12:27:56-06:00'] },
              dealTasktype_ids: { type: 'array', items: {} },
              links: {
                type: 'object',
                properties: {
                  tasktypeOutcomeRels: {
                    type: 'string',
                    examples: [
                      'https://youraccountname.api-us1.com/api/3/taskOutcomes/1/tasktypeOutcomeRels',
                    ],
                  },
                  dealTasks: {
                    type: 'string',
                    examples: [
                      'https://youraccountname.api-us1.com/api/3/taskOutcomes/1/dealTasks',
                    ],
                  },
                },
              },
              id: { type: 'string', examples: ['1'] },
            },
          },
        },
        meta: { type: 'object', properties: { total: { type: 'string', examples: ['4'] } } },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const ListAllTaskTypeOutcomeRelations = {
  response: {
    '200': {
      type: 'object',
      properties: {
        tasktypeOutcomeRels: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              tasktype_id: { type: 'string', examples: ['1'] },
              outcome_id: { type: 'string', examples: ['9'] },
              display_order: { type: 'string', examples: ['0'] },
              created_by: { type: 'string', examples: ['0'] },
              created_utc_timestamp: { type: 'string', examples: ['2021-04-02T12:06:06-05:00'] },
              updated_by: {},
              updated_utc_timestamp: { type: 'string', examples: ['2021-04-02 12:06:06'] },
              links: {
                type: 'object',
                properties: {
                  tasktype: {
                    type: 'string',
                    examples: [
                      'https://youraccountname.api-us1.com/api/3/tasktypeOutcomeRels/57/tasktype',
                    ],
                  },
                  outcome: {
                    type: 'string',
                    examples: [
                      'https://youraccountname.api-us1.com/api/3/tasktypeOutcomeRels/57/outcome',
                    ],
                  },
                  createdBy: {
                    type: 'string',
                    examples: [
                      'https://youraccountname.api-us1.com/api/3/tasktypeOutcomeRels/57/createdBy',
                    ],
                  },
                },
              },
              id: { type: 'string', examples: ['1'] },
              tasktype: { type: 'string', examples: ['1'] },
              outcome: { type: 'string', examples: ['9'] },
              createdBy: { type: 'string', examples: ['1'] },
            },
          },
        },
        meta: { type: 'object', properties: { total: { type: 'string', examples: ['3'] } } },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const ListAllTasks = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          'filters[title]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'The title to be assigned to the task',
          },
          'filters[reltype]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'The name of the relating object (see relationships table)',
          },
          'filters[relid]': {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'The id of the relational object for this task',
          },
          'filters[status]': {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              'Task status means complete or incomplete. 1 is complete and 0 is incomplete.',
          },
          'filters[note]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'The content describing the task',
          },
          'filters[duedate]': {
            type: 'string',
            format: 'date',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Due date of the task',
          },
          'filters[d_tasktypeid]': {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'The type of the task based on the available Task Types in the account',
          },
          'filters[userid]': {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'User ID this task belongs to',
          },
          'filters[due_after]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Filter deal tasks that are due after a specific date',
          },
          'Fitlers[due_before]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Filter deal tasks that are due before a specific date',
          },
          'filters[duedate_range]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Filter deal tasks that are due between specific date range',
          },
          'filters[assignee_userid]': {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'The id of the user a task is assigned to',
          },
          'filters[outcome_id]': {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'The id of a task outcome that the task belongs to.',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '201': {
      type: 'object',
      properties: {
        dealTasks: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string', examples: ['1'] },
              duedate: { type: 'string', examples: ['2017-02-25T12:00:00-06:00'] },
              edate: { type: 'string', examples: ['2017-02-25T12:15:00-06:00'] },
              status: { type: 'integer', default: 0, examples: [0] },
              title: {},
              note: { type: 'string', examples: ['Testing Task'] },
              relid: { type: 'string', examples: ['7'] },
              reltype: { type: 'string', examples: ['Subscriber'] },
              dealTasktype: { type: 'string', examples: ['1'] },
              cdate: { type: 'string', examples: ['2017-02-24T13:21:56-06:00'] },
              udate: { type: 'string', examples: ['2017-02-24T13:21:56-06:00'] },
              automation: {},
              doneAutomation: {},
              user: { type: 'string', examples: ['1'] },
              assignee: { type: 'string', examples: ['2'] },
              owner: {
                type: 'object',
                properties: {
                  type: { type: 'string', examples: ['contact'] },
                  id: { type: 'string', examples: ['7'] },
                },
              },
              outcomeId: {},
              outcomeInfo: {},
              links: {
                type: 'object',
                properties: {
                  activities: { type: 'string', examples: ['/1/activities'] },
                  automation: { type: 'string', examples: ['/1/automation'] },
                  dealTasktype: { type: 'string', examples: ['/1/dealTasktype'] },
                  doneAutomation: { type: 'string', examples: ['/1/doneAutomation'] },
                  notes: { type: 'string', examples: ['/1/notes'] },
                  owner: { type: 'string', examples: ['/1/owner'] },
                  taskNotifications: { type: 'string', examples: ['/1/taskNotifications'] },
                  user: { type: 'string', examples: ['/3/dealTasks/1/user'] },
                  assignee: { type: 'string', examples: ['/1/assignee'] },
                },
              },
            },
          },
        },
        meta: { type: 'object', properties: { total: { type: 'string', examples: ['2'] } } },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const ListAllUsers = {
  response: {
    '200': {
      type: 'object',
      properties: {
        users: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              username: { type: 'string', examples: ['admin'] },
              firstName: { type: 'string', examples: ['John'] },
              lastName: { type: 'string', examples: ['Doe'] },
              email: { type: 'string', examples: ['johndoe@activecampaign.com'] },
              phone: { type: 'string', examples: [''] },
              signature: {},
              links: {
                type: 'object',
                properties: {
                  lists: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/users/1/lists'],
                  },
                  userGroup: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/users/1/userGroup'],
                  },
                  dealGroupTotals: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/users/1/dealGroupTotals'],
                  },
                  dealGroupUsers: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/users/1/dealGroupUsers'],
                  },
                  configs: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/users/1/configs'],
                  },
                },
              },
              id: { type: 'string', examples: ['1'] },
            },
          },
        },
        meta: { type: 'object', properties: { total: { type: 'string', examples: ['2'] } } },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const ListAllWhitelistedDomains = {
  response: {
    '200': {
      type: 'object',
      properties: {
        siteTrackingDomains: {
          type: 'array',
          items: {
            type: 'object',
            properties: { name: { type: 'string', examples: ['example.com'] } },
          },
        },
        meta: {
          type: 'object',
          properties: { total: { type: 'integer', default: 0, examples: [1] } },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const ListContactActivities = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          contact: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Required Contact ID',
          },
          after: {
            type: 'string',
            format: 'date',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Filter for activities after a specific DateTime',
          },
          include: {
            type: 'string',
            default: 'activities to include',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              'Activities to include: notes, notes.user, recipients, recipients.recipient, reference, reference.automation, reference.campaign, reference.campaign.campaignList, reference.campaign.campaignMessage, reference.campaignMessage, reference.contact, reference.contactList, reference.contactList.list, reference.deal, reference.deal.contact, reference.dealTasktype, reference.link, reference.list, reference.log, reference.log.campaign, reference.log.contact, reference.log.message, reference.message, reference.note, reference.sms, reference.sms.automation, user',
          },
          emails: {
            type: 'boolean',
            default: false,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
          },
          'orders[tstamp]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Order activities by tstamp',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        scoreValues: { type: 'array', items: {} },
        contacts: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              cdate: { type: 'string', examples: ['2018-09-12T16:53:50-05:00'] },
              email: { type: 'string', examples: ['adam@activecampaign.com'] },
              phone: { type: 'string', examples: [''] },
              firstName: { type: 'string', examples: [''] },
              lastName: { type: 'string', examples: [''] },
              orgid: { type: 'string', examples: ['0'] },
              segmentio_id: { type: 'string', examples: [''] },
              bounced_hard: { type: 'string', examples: ['0'] },
              bounced_soft: { type: 'string', examples: ['0'] },
              bounced_date: { type: 'string', examples: ['0000-00-00'] },
              ip: { type: 'string', examples: ['0'] },
              ua: { type: 'string', examples: [''] },
              hash: { type: 'string', examples: ['0d9c41ae7a4de516313673e2341f6003'] },
              socialdata_lastcheck: { type: 'string', examples: ['0000-00-00 00:00:00'] },
              email_local: { type: 'string', examples: [''] },
              email_domain: { type: 'string', examples: [''] },
              sentcnt: { type: 'string', examples: ['0'] },
              rating_tstamp: { type: 'string', examples: ['0000-00-00'] },
              gravatar: { type: 'string', examples: ['1'] },
              deleted: { type: 'string', examples: ['0'] },
              anonymized: { type: 'string', examples: ['0'] },
              udate: { type: 'string', examples: ['2018-09-12T17:00:00-05:00'] },
              deleted_at: { type: 'string', examples: ['0000-00-00 00:00:00'] },
              scoreValues: { type: 'array', items: {} },
              links: {
                type: 'object',
                properties: {
                  bounceLogs: {
                    type: 'string',
                    examples: [
                      'https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/bounceLogs',
                    ],
                  },
                  contactAutomations: {
                    type: 'string',
                    examples: [
                      'https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/contactAutomations',
                    ],
                  },
                  contactData: {
                    type: 'string',
                    examples: [
                      'https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/contactData',
                    ],
                  },
                  contactGoals: {
                    type: 'string',
                    examples: [
                      'https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/contactGoals',
                    ],
                  },
                  contactLists: {
                    type: 'string',
                    examples: [
                      'https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/contactLists',
                    ],
                  },
                  contactLogs: {
                    type: 'string',
                    examples: [
                      'https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/contactLogs',
                    ],
                  },
                  contactTags: {
                    type: 'string',
                    examples: [
                      'https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/contactTags',
                    ],
                  },
                  contactDeals: {
                    type: 'string',
                    examples: [
                      'https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/contactDeals',
                    ],
                  },
                  deals: {
                    type: 'string',
                    examples: [
                      'https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/deals',
                    ],
                  },
                  fieldValues: {
                    type: 'string',
                    examples: [
                      'https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/fieldValues',
                    ],
                  },
                  geoIps: {
                    type: 'string',
                    examples: [
                      'https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/geoIps',
                    ],
                  },
                  notes: {
                    type: 'string',
                    examples: [
                      'https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/notes',
                    ],
                  },
                  organization: {
                    type: 'string',
                    examples: [
                      'https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/organization',
                    ],
                  },
                  plusAppend: {
                    type: 'string',
                    examples: [
                      'https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/plusAppend',
                    ],
                  },
                  trackingLogs: {
                    type: 'string',
                    examples: [
                      'https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/trackingLogs',
                    ],
                  },
                  scoreValues: {
                    type: 'string',
                    examples: [
                      'https://test-enterprise-13.staging.listfly.com/api/3/contacts/5/scoreValues',
                    ],
                  },
                },
              },
              id: { type: 'string', examples: ['5'] },
              organization: {},
            },
          },
        },
        meta: {
          type: 'object',
          properties: {
            total: { type: 'string', examples: ['6'] },
            page_input: {
              type: 'object',
              properties: {
                segmentid: { type: 'integer', default: 0, examples: [0] },
                formid: { type: 'integer', default: 0, examples: [0] },
                listid: { type: 'integer', default: 0, examples: [0] },
                tagid: { type: 'integer', default: 0, examples: [0] },
                limit: { type: 'integer', default: 0, examples: [20] },
                offset: { type: 'integer', default: 0, examples: [0] },
                search: {},
                sort: {},
                seriesid: { type: 'integer', default: 0, examples: [0] },
                waitid: { type: 'integer', default: 0, examples: [0] },
                status: { type: 'integer', default: 0, examples: [-1] },
                forceQuery: { type: 'integer', default: 0, examples: [0] },
                cacheid: { type: 'string', examples: ['522b5224f2007dca7483e08e7ebf5005'] },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const ListEcomorderproducts = {
  response: {
    '200': {
      type: 'object',
      properties: {
        ecomOrderProducts: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              orderid: { type: 'string', examples: ['1'] },
              connectionid: { type: 'string', examples: ['1'] },
              externalid: { type: 'string', examples: ['1269385775'] },
              sku: { type: 'string', examples: ['SKATE-8'] },
              name: { type: 'string', examples: ['My Cool Skateboard'] },
              description: {
                type: 'string',
                examples: ['This skateboard is so cool, it rides itself'],
              },
              price: { type: 'string', examples: ['5000'] },
              quantity: { type: 'string', examples: ['1'] },
              category: { type: 'string', examples: ['skateboards'] },
              imageUrl: { type: 'string', examples: ['https://example.com/images/skateboard.jpg'] },
              productUrl: { type: 'string', examples: ['http://example.com/products/skate-8'] },
              createdDate: { type: 'string', examples: ['2019-06-28T18:04:19-05:00'] },
              updatedDate: { type: 'string', examples: ['2019-06-28T18:04:19-05:00'] },
              tstamp: { type: 'string', examples: ['2019-06-28T18:04:19-05:00'] },
              links: {
                type: 'object',
                properties: {
                  ecomOrder: {
                    type: 'string',
                    examples: [
                      'https://commissiontheatre.api-us1.com/api/3/ecomOrderProducts/1/ecomOrder',
                    ],
                  },
                },
              },
              id: { type: 'string', examples: ['1'] },
              ecomOrder: { type: 'string', examples: ['2'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const ListProductsForOrder = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "The ID of the order whose products you'd like returned.",
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        ecomOrderProducts: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              orderid: { type: 'string', examples: ['1'] },
              connectionid: { type: 'string', examples: ['1'] },
              externalid: { type: 'string', examples: ['1269385775'] },
              sku: { type: 'string', examples: ['SKATE-8'] },
              name: { type: 'string', examples: ['My Cool Skateboard'] },
              description: {
                type: 'string',
                examples: ['This skateboard is so cool, it rides itself'],
              },
              price: { type: 'string', examples: ['5000'] },
              quantity: { type: 'string', examples: ['1'] },
              category: { type: 'string', examples: ['skateboards'] },
              imageUrl: { type: 'string', examples: ['https://example.com/images/skateboard.jpg'] },
              productUrl: { type: 'string', examples: ['http://example.com/products/skate-8'] },
              createdDate: { type: 'string', examples: ['2019-06-28T18:04:19-05:00'] },
              updatedDate: { type: 'string', examples: ['2019-06-28T18:04:19-05:00'] },
              tstamp: { type: 'string', examples: ['2019-06-28T18:04:19-05:00'] },
              links: {
                type: 'object',
                properties: {
                  ecomOrder: {
                    type: 'string',
                    examples: [
                      'https://commissiontheatre.api-us1.com/api/3/ecomOrderProducts/1/ecomOrder',
                    ],
                  },
                },
              },
              id: { type: 'string', examples: ['1'] },
              ecomOrder: { type: 'string', examples: ['2'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const ListRecordsCreatedFromASchema = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          schemaId: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of schema',
          },
        },
        required: ['schemaId'],
      },
      {
        type: 'object',
        properties: {
          limit: {
            type: 'integer',
            format: 'int32',
            default: 20,
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'The number of records to return for each call. Maximum value is 100.',
          },
          offset: {
            type: 'integer',
            format: 'int32',
            default: 0,
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Offset index of records to return',
          },
          filters: {
            type: 'array',
            items: { type: 'string' },
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              'Use ?filters[relationships.{your-contact-relationship}][eq]={contactId} to filter records to a specific contact.',
          },
        },
        required: ['filters'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        records: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string', examples: ['1fba439a-208e-48e6-bd23-f6c97c3e0519'] },
              externalId: { type: 'string', examples: ['test-obj-1'] },
              schemaId: { type: 'string', examples: ['6449c3f3-b68d-46d1-850b-c8aea998ce1b'] },
              fields: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    id: { type: 'string', examples: ['my-number-field'] },
                    value: { type: 'integer', default: 0, examples: [100] },
                  },
                },
              },
              relationships: {
                type: 'object',
                properties: {
                  'primary-contact': { type: 'array', items: { type: 'string', examples: ['14'] } },
                },
              },
              createdTimestamp: { type: 'string', examples: ['2021-04-16T16:12:22.222685095Z'] },
              updatedTimestamp: { type: 'string', examples: ['2021-04-16T16:13:12.022671090Z'] },
            },
          },
        },
        meta: {
          type: 'object',
          properties: {
            total: { type: 'integer', default: 0, examples: [1] },
            count: { type: 'integer', default: 0, examples: [1] },
            limit: { type: 'integer', default: 0, examples: [20] },
            offset: { type: 'integer', default: 0, examples: [0] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              status: { type: 'integer', default: 0, examples: [400] },
              title: { type: 'string', examples: ['Bad Request'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: { message: { type: 'string', examples: ['Not Found'] } },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const LocalEvents = {
  body: {
    type: 'object',
    properties: {
      localEvent: {
        type: 'object',
        description: 'Data about local event sent by TrackCmp',
        properties: {
          email: { type: 'string', description: 'Email of the contact' },
          tstamp: { type: 'string', description: 'Time the event happened.', format: 'date-time' },
          input: {
            type: 'string',
            description: 'Example: "{\\"event\\":\\"__pagevisit\\",\\"url\\":\\"www.url.com\\"}"',
            format: 'json',
          },
        },
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '201': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '403': {
      type: 'object',
      properties: { message: { type: 'string', examples: ['Email message'] } },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const MoveDealTasksToAnotherDealTaskType = {
  body: {
    type: 'object',
    properties: {
      dealTask: {
        properties: {
          dealTasktype: {
            type: 'string',
            description: "Deal task type's id to move deal tasks to",
            examples: ['2'],
          },
        },
        required: [],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Deal task type's id",
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        dealTasks: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              automation: {},
              cdate: { type: 'string', examples: ['2017-06-01T15:08:55-05:00'] },
              dealTasktype: { type: 'string', examples: ['2'] },
              doneAutomation: {},
              donedate: {},
              duedate: { type: 'string', examples: ['2017-06-02T12:00:00-05:00'] },
              duration: { type: 'string', examples: ['0'] },
              edate: { type: 'string', examples: ['2017-06-02T12:15:00-05:00'] },
              id: { type: 'string', examples: ['1'] },
              links: {
                type: 'object',
                properties: {
                  activities: { type: 'string', examples: ['/api/3/dealTasks/1/activities'] },
                  automation: { type: 'string', examples: ['/api/3/dealTasks/1/automation'] },
                  dealTasktype: { type: 'string', examples: ['/api/3/dealTasks/1/dealTasktype'] },
                  doneAutomation: {
                    type: 'string',
                    examples: ['/api/3/dealTasks/1/doneAutomation'],
                  },
                  notes: { type: 'string', examples: ['/api/3/dealTasks/1/notes'] },
                  owner: { type: 'string', examples: ['/api/3/dealTasks/1/owner'] },
                  taskNotifications: {
                    type: 'string',
                    examples: ['/api/3/dealTasks/1/taskNotifications'],
                  },
                  user: { type: 'string', examples: ['/api/3/dealTasks/1/user'] },
                },
              },
              note: { type: 'string', examples: ['Call Steve'] },
              owner: {
                type: 'object',
                properties: {
                  id: { type: 'string', examples: ['1'] },
                  type: { type: 'string', examples: ['deal'] },
                },
              },
              relid: { type: 'string', examples: ['1'] },
              reltype: { type: 'string', examples: ['Deal'] },
              status: { type: 'string', examples: ['0'] },
              title: { type: 'string', examples: [''] },
              udate: { type: 'string', examples: ['2017-06-01T15:08:55-05:00'] },
              user: { type: 'string', examples: ['1'] },
            },
          },
        },
        deals: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              activitycount: { type: 'string', examples: ['2'] },
              cdate: { type: 'string', examples: ['2017-06-01T15:08:41-05:00'] },
              contact: { type: 'string', examples: ['1'] },
              currency: { type: 'string', examples: ['usd'] },
              edate: { type: 'string', examples: ['0000-00-00 00:00:00'] },
              group: { type: 'string', examples: ['1'] },
              hash: { type: 'string', examples: ['3abd127b'] },
              id: { type: 'string', examples: ['1'] },
              links: {
                type: 'object',
                properties: {
                  activities: { type: 'string', examples: ['/api/3/deals/1/activities'] },
                  contact: { type: 'string', examples: ['/api/3/deals/1/contact'] },
                  contactDeals: { type: 'string', examples: ['/api/3/deals/1/contactDeals'] },
                  group: { type: 'string', examples: ['/api/3/deals/1/group'] },
                  nextTask: { type: 'string', examples: ['/api/3/deals/1/nextTask'] },
                  notes: { type: 'string', examples: ['/api/3/deals/1/notes'] },
                  organization: { type: 'string', examples: ['/api/3/deals/1/organization'] },
                  owner: { type: 'string', examples: ['/api/3/deals/1/owner'] },
                  scoreValues: { type: 'string', examples: ['/api/3/deals/1/scoreValues'] },
                  stage: { type: 'string', examples: ['/api/3/deals/1/stage'] },
                  tasks: { type: 'string', examples: ['/api/3/deals/1/tasks'] },
                },
              },
              mdate: { type: 'string', examples: ['2017-06-01T15:08:55-05:00'] },
              nextTask: { type: 'string', examples: ['1'] },
              nextdate: { type: 'string', examples: ['2017-06-02T12:00:00-05:00'] },
              nextdealid: { type: 'string', examples: ['1'] },
              nexttaskid: { type: 'string', examples: ['1'] },
              organization: {},
              owner: { type: 'string', examples: ['1'] },
              percent: { type: 'string', examples: ['0'] },
              stage: { type: 'string', examples: ['1'] },
              status: { type: 'string', examples: ['0'] },
              title: { type: 'string', examples: ['New deal'] },
              value: { type: 'string', examples: ['10000'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const MoveDealsToAnotherDealStage = {
  body: {
    type: 'object',
    properties: {
      deal: {
        properties: {
          stage: {
            type: 'string',
            description: "Target deal stage's id to move deals to",
            examples: ['3'],
          },
        },
        required: [],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Deal stage's id whose deals are to be moved to another deal stage",
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        deals: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              activitycount: { type: 'string', examples: ['1'] },
              cdate: { type: 'string', examples: ['2017-05-19T16:21:47-05:00'] },
              contact: { type: 'string', examples: ['1'] },
              currency: { type: 'string', examples: ['usd'] },
              edate: { type: 'string', examples: ['0000-00-00 00:00:00'] },
              group: { type: 'string', examples: ['1'] },
              hash: { type: 'string', examples: ['6faccb2d'] },
              id: { type: 'string', examples: ['1'] },
              links: {
                type: 'object',
                properties: {
                  dealActivities: { type: 'string', examples: ['/api/3/deals/1/dealActivities'] },
                  contact: { type: 'string', examples: ['/api/3/deals/1/contact'] },
                  contactDeals: { type: 'string', examples: ['/api/3/deals/1/contactDeals'] },
                  group: { type: 'string', examples: ['/api/3/deals/1/group'] },
                  nextTask: { type: 'string', examples: ['/api/3/deals/1/nextTask'] },
                  notes: { type: 'string', examples: ['/api/3/deals/1/notes'] },
                  organization: { type: 'string', examples: ['/api/3/deals/1/organization'] },
                  owner: { type: 'string', examples: ['/api/3/deals/1/owner'] },
                  scoreValues: { type: 'string', examples: ['/api/3/deals/1/scoreValues'] },
                  stage: { type: 'string', examples: ['/api/3/deals/1/stage'] },
                  tasks: { type: 'string', examples: ['/api/3/deals/1/tasks'] },
                },
              },
              mdate: { type: 'string', examples: ['2017-05-19T16:21:47-05:00'] },
              nextTask: {},
              nextdealid: { type: 'string', examples: ['2'] },
              nexttaskid: { type: 'string', examples: ['0'] },
              organization: {},
              owner: { type: 'string', examples: ['1'] },
              percent: { type: 'string', examples: ['0'] },
              stage: { type: 'string', examples: ['3'] },
              status: { type: 'string', examples: ['0'] },
              title: { type: 'string', examples: ['Another Deal'] },
              value: { type: 'string', examples: ['10000'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '422': {
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              detail: {
                type: 'string',
                examples: ['Target stage does not belong to same pipeline'],
              },
              source: {
                type: 'object',
                properties: { pointer: { type: 'string', examples: ['/data/attributes/stage'] } },
              },
              status: { type: 'integer', default: 0, examples: [422] },
              title: { type: 'string', examples: ['Invalid attribute'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RemoveACalendarFeed = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          ':id': {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the calendar feed to delete',
          },
        },
        required: [':id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RemoveAContactsTag = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'The contactTag id',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for SubscriberTag with id 1'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RemoveDomainFromWhitelist = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'The domain name to remove from the whitelist',
          },
        },
        required: ['name'],
      },
    ],
  },
  response: { '204': { $schema: 'https://json-schema.org/draft/2020-12/schema#' } },
} as const;
const RemoveEventNameOnly = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          eventName: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              'Name of event to delete. Spaces in names are allowed, but must be encoded (for example, "my%20event").',
          },
        },
        required: ['eventName'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveACampaign = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of campaign to retrieve',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        campaign: {
          type: 'object',
          properties: {
            type: { type: 'string', examples: ['single'] },
            userid: { type: 'string', examples: ['1'] },
            segmentid: { type: 'string', examples: ['0'] },
            bounceid: { type: 'string', examples: ['-1'] },
            realcid: { type: 'string', examples: ['0'] },
            sendid: { type: 'string', examples: ['0'] },
            threadid: { type: 'string', examples: ['0'] },
            seriesid: { type: 'string', examples: ['0'] },
            formid: { type: 'string', examples: ['0'] },
            basetemplateid: {
              type: 'string',
              examples: ['13b1432dc41b75dda9ff86d84a8593d2b2b9419f'],
            },
            basemessageid: { type: 'string', examples: ['0'] },
            addressid: { type: 'string', examples: ['0'] },
            source: { type: 'string', examples: ['web'] },
            name: { type: 'string', examples: ['Matt Litmus test'] },
            cdate: { type: 'string', examples: ['2018-10-10T11:59:43-05:00'] },
            mdate: { type: 'string', examples: ['2018-10-10T12:00:23-05:00'] },
            sdate: {},
            ldate: {},
            send_amt: { type: 'string', examples: ['0'] },
            total_amt: { type: 'string', examples: ['0'] },
            opens: { type: 'string', examples: ['0'] },
            uniqueopens: { type: 'string', examples: ['0'] },
            linkclicks: { type: 'string', examples: ['0'] },
            uniquelinkclicks: { type: 'string', examples: ['0'] },
            subscriberclicks: { type: 'string', examples: ['0'] },
            forwards: { type: 'string', examples: ['0'] },
            uniqueforwards: { type: 'string', examples: ['0'] },
            hardbounces: { type: 'string', examples: ['0'] },
            softbounces: { type: 'string', examples: ['0'] },
            unsubscribes: { type: 'string', examples: ['0'] },
            unsubreasons: { type: 'string', examples: ['0'] },
            updates: { type: 'string', examples: ['0'] },
            socialshares: { type: 'string', examples: ['0'] },
            replies: { type: 'string', examples: ['0'] },
            uniquereplies: { type: 'string', examples: ['0'] },
            status: { type: 'string', examples: ['0'] },
            public: { type: 'string', examples: ['1'] },
            mail_transfer: { type: 'string', examples: ['0'] },
            mail_send: { type: 'string', examples: ['0'] },
            mail_cleanup: { type: 'string', examples: ['0'] },
            mailer_log_file: { type: 'string', examples: ['0'] },
            tracklinks: { type: 'string', examples: ['all'] },
            tracklinksanalytics: { type: 'string', examples: ['0'] },
            trackreads: { type: 'string', examples: ['1'] },
            trackreadsanalytics: { type: 'string', examples: ['1'] },
            analytics_campaign_name: { type: 'string', examples: [''] },
            tweet: { type: 'string', examples: ['0'] },
            facebook: { type: 'string', examples: ['0'] },
            survey: { type: 'string', examples: [''] },
            embed_images: { type: 'string', examples: ['0'] },
            htmlunsub: { type: 'string', examples: ['0'] },
            textunsub: { type: 'string', examples: ['0'] },
            htmlunsubdata: {},
            textunsubdata: {},
            recurring: { type: 'string', examples: ['day1'] },
            willrecur: { type: 'string', examples: ['0'] },
            split_type: { type: 'string', examples: ['even'] },
            split_content: { type: 'string', examples: ['0'] },
            split_offset: { type: 'string', examples: ['2'] },
            split_offset_type: { type: 'string', examples: ['day'] },
            split_winner_messageid: { type: 'string', examples: ['0'] },
            split_winner_awaiting: { type: 'string', examples: ['0'] },
            responder_offset: { type: 'string', examples: ['0'] },
            responder_type: { type: 'string', examples: ['subscribe'] },
            responder_existing: { type: 'string', examples: ['0'] },
            reminder_field: { type: 'string', examples: ['sdate'] },
            reminder_format: {},
            reminder_type: { type: 'string', examples: ['month_day'] },
            reminder_offset: { type: 'string', examples: ['0'] },
            reminder_offset_type: { type: 'string', examples: ['day'] },
            reminder_offset_sign: { type: 'string', examples: ['+'] },
            reminder_last_cron_run: {},
            activerss_interval: { type: 'string', examples: ['day1'] },
            activerss_url: {},
            activerss_items: { type: 'string', examples: ['10'] },
            ip4: { type: 'string', examples: ['643992596'] },
            laststep: { type: 'string', examples: ['designer'] },
            managetext: { type: 'string', examples: ['0'] },
            schedule: { type: 'string', examples: ['0'] },
            scheduleddate: {},
            waitpreview: { type: 'string', examples: ['0'] },
            deletestamp: {},
            replysys: { type: 'string', examples: ['0'] },
            links: {
              type: 'object',
              properties: {
                user: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/campaigns/1/user'],
                },
                automation: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/campaigns/1/automation'],
                },
                campaignMessage: {
                  type: 'string',
                  examples: [
                    'https://:account.api-us1.com/api/:version/campaigns/1/campaignMessage',
                  ],
                },
                links: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/campaigns/1/links'],
                },
                aggregateRevenues: {
                  type: 'string',
                  examples: [
                    'https://:account.api-us1.com/api/:version/campaigns/1/aggregateRevenues',
                  ],
                },
              },
            },
            id: { type: 'string', examples: ['1'] },
            user: { type: 'string', examples: ['1'] },
            automation: {},
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveAContactautomation = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the contactAutomation to retrieve',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        contactAutomation: {
          type: 'object',
          properties: {
            contact: { type: 'string', examples: ['110'] },
            seriesid: { type: 'string', examples: ['2'] },
            startid: { type: 'string', examples: ['0'] },
            status: { type: 'string', examples: ['2'] },
            batchid: {},
            adddate: { type: 'string', examples: ['2018-09-19T09:44:26-05:00'] },
            remdate: { type: 'string', examples: ['2018-09-19T09:44:26-05:00'] },
            timespan: { type: 'string', examples: ['0'] },
            lastblock: { type: 'string', examples: ['5'] },
            lastlogid: { type: 'string', examples: ['2'] },
            lastdate: { type: 'string', examples: ['2018-09-19T09:44:26-05:00'] },
            completedElements: { type: 'string', examples: ['1'] },
            totalElements: { type: 'string', examples: ['2'] },
            completed: { type: 'integer', default: 0, examples: [1] },
            completeValue: { type: 'integer', default: 0, examples: [100] },
            links: {
              type: 'object',
              properties: {
                automation: {
                  type: 'string',
                  examples: [
                    'https://:account.api-us1.com/api/:version/contactAutomations/2/automation',
                  ],
                },
                contact: {
                  type: 'string',
                  examples: [
                    'https://:account.api-us1.com/api/:version/contactAutomations/2/contact',
                  ],
                },
                contactGoals: {
                  type: 'string',
                  examples: [
                    'https://:account.api-us1.com/api/:version/contactAutomations/2/contactGoals',
                  ],
                },
              },
            },
            id: { type: 'string', examples: ['2'] },
            automation: { type: 'string', examples: ['2'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for SubscriberSeries with id 3'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveAContactsScoreValue = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'id of the Contact',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        scoreValues: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              score: { type: 'string', examples: ['2'] },
              contact: { type: 'string', examples: ['1'] },
              deal: {},
              cdate: { type: 'string', examples: ['2018-03-08T14:01:16-06:00'] },
              mdate: { type: 'string', examples: ['2018-10-22T20:15:28-05:00'] },
              scoreValue: { type: 'string', examples: ['0'] },
              links: {
                type: 'object',
                properties: {
                  score: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/scoreValues/1/score'],
                  },
                  contact: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/scoreValues/1/contact'],
                  },
                  deal: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/scoreValues/1/deal'],
                  },
                },
              },
              id: { type: 'string', examples: ['1'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for Subscriber with id 100'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveACustomDealFieldMeta = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the field to retrieve',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        dealCustomFieldMetum: {
          type: 'object',
          properties: {
            id: { type: 'string', examples: ['1'] },
            fieldLabel: { type: 'string', examples: ['New Title'] },
            fieldType: { type: 'string', examples: ['text'] },
            fieldOptions: {},
            fieldDefault: { type: 'string', examples: ['Default Text'] },
            isFormVisible: { type: 'integer', default: 0, examples: [1] },
            isRequired: { type: 'integer', default: 0, examples: [1] },
            displayOrder: { type: 'integer', default: 0, examples: [1] },
            createdTimestamp: { type: 'string', examples: ['2018-10-22 19:57:37'] },
            updatedTimestamp: { type: 'string', examples: ['2018-10-22 20:04:21'] },
            links: {
              type: 'object',
              properties: {
                dealCustomFieldData: {
                  type: 'string',
                  examples: [
                    'https://:account.api-us1.com/api/:version/dealCustomFieldMeta/1/dealCustomFieldData',
                  ],
                },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              status: { type: 'integer', default: 0, examples: [404] },
              title: { type: 'string', examples: ['Not Found'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveACustomDealFieldValue = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the dealCustomFieldData to retrieve',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        dealCustomFieldDatum: {
          type: 'object',
          properties: {
            id: { type: 'string', examples: ['1'] },
            dealCustomFieldMetumId: { type: 'integer', default: 0, examples: [5] },
            dealId: { type: 'integer', default: 0, examples: [2] },
            customFieldId: { type: 'integer', default: 0, examples: [5] },
            createdTimestamp: { type: 'string', examples: ['2018-10-29 20:40:38'] },
            updatedTimestamp: { type: 'string', examples: ['2018-11-06 02:21:36'] },
            fieldValue: { type: 'string', examples: ['New title'] },
            links: {
              type: 'object',
              properties: {
                deal: {
                  type: 'string',
                  examples: [
                    'https://:account.api-us1.com/api/:version/dealCustomFieldData/1/deal',
                  ],
                },
                dealCustomFieldMetum: {
                  type: 'string',
                  examples: [
                    'https://:account.api-us1.com/api/:version/dealCustomFieldData/1/dealCustomFieldMetum',
                  ],
                },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              status: { type: 'integer', default: 0, examples: [404] },
              title: { type: 'string', examples: ['Not Found'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveACustomFieldContact = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the field to retrieve',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        fieldOptions: { type: 'array', items: {} },
        fieldRels: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              field: { type: 'string', examples: ['1'] },
              relid: { type: 'string', examples: ['0'] },
              dorder: { type: 'string', examples: ['0'] },
              cdate: { type: 'string', examples: ['2018-08-17T11:09:43-05:00'] },
              links: { type: 'array', items: {} },
              id: { type: 'string', examples: ['1'] },
            },
          },
        },
        field: {
          type: 'object',
          properties: {
            title: { type: 'string', examples: ['test'] },
            descript: { type: 'string', examples: [''] },
            type: { type: 'string', examples: ['text'] },
            isrequired: { type: 'string', examples: ['0'] },
            perstag: { type: 'string', examples: ['TEST'] },
            defval: { type: 'string', examples: [''] },
            show_in_list: { type: 'string', examples: ['0'] },
            rows: { type: 'string', examples: ['0'] },
            cols: { type: 'string', examples: ['0'] },
            visible: { type: 'string', examples: ['1'] },
            service: { type: 'string', examples: [''] },
            ordernum: { type: 'string', examples: ['1'] },
            cdate: { type: 'string', examples: ['2018-08-17T11:09:43-05:00'] },
            udate: { type: 'string', examples: ['2018-08-17T11:09:43-05:00'] },
            options: { type: 'array', items: {} },
            relations: { type: 'array', items: { type: 'string', examples: ['1'] } },
            links: {
              type: 'object',
              properties: {
                options: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/fields/1/options'],
                },
                relations: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/fields/1/relations'],
                },
              },
            },
            id: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveACustomFieldMeta = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the field to retrieve',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        accountCustomFieldMetum: {
          type: 'object',
          properties: {
            id: { type: 'string', examples: ['1'] },
            fieldLabel: { type: 'string', examples: ['New Title'] },
            fieldType: { type: 'string', examples: ['text'] },
            fieldOptions: {},
            fieldDefault: { type: 'string', examples: ['Default Text'] },
            isFormVisible: { type: 'integer', default: 0, examples: [1] },
            isRequired: { type: 'integer', default: 0, examples: [1] },
            displayOrder: { type: 'integer', default: 0, examples: [1] },
            createdTimestamp: { type: 'string', examples: ['2018-10-22 19:57:37'] },
            updatedTimestamp: { type: 'string', examples: ['2018-10-22 20:04:21'] },
            links: {
              type: 'object',
              properties: {
                accountCustomFieldData: {
                  type: 'string',
                  examples: [
                    'https://:account.api-us1.com/api/:version/accountCustomFieldMeta/1/accountCustomFieldData',
                  ],
                },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              status: { type: 'integer', default: 0, examples: [404] },
              title: { type: 'string', examples: ['Not Found'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveACustomFieldValue = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the dealCustomFieldData to retrieve',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        accountCustomFieldDatum: {
          type: 'object',
          properties: {
            id: { type: 'string', examples: ['1'] },
            accountId: { type: 'integer', default: 0, examples: [2] },
            customFieldId: { type: 'integer', default: 0, examples: [5] },
            createdTimestamp: { type: 'string', examples: ['2018-10-29 20:40:38'] },
            updatedTimestamp: { type: 'string', examples: ['2018-11-06 02:21:36'] },
            fieldValue: { type: 'string', examples: ['New title'] },
            links: {
              type: 'object',
              properties: {
                account: {
                  type: 'string',
                  examples: [
                    'https://:account.api-us1.com/api/:version/accountCustomFieldData/1/account',
                  ],
                },
                accountCustomFieldMetum: {
                  type: 'string',
                  examples: [
                    'https://:account.api-us1.com/api/:version/accountCustomFieldData/1/accountCustomFieldMetum',
                  ],
                },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              status: { type: 'integer', default: 0, examples: [404] },
              title: { type: 'string', examples: ['Not Found'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveADeal = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "The Deal's id",
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        deal: {
          type: 'object',
          properties: {
            id: { type: 'string', examples: ['2'] },
            isDisabled: { type: 'boolean', default: true, examples: [true] },
            title: { type: 'string', examples: ['Demo Requested'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveADealStage = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Deal stage's id",
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        dealStage: {
          type: 'object',
          properties: {
            cardRegion1: { type: 'string', examples: ['title'] },
            cardRegion2: { type: 'string', examples: ['next-action'] },
            cardRegion3: { type: 'string', examples: ['show-avatar'] },
            cardRegion4: { type: 'string', examples: ['contact-fullname-orgname'] },
            cardRegion5: { type: 'string', examples: ['value'] },
            cdate: { type: 'string', examples: ['2017-01-20T09:27:32-06:00'] },
            color: { type: 'string', examples: ['C481DF'] },
            dealOrder: { type: 'string', examples: ['score DESC'] },
            group: { type: 'string', examples: ['1'] },
            id: { type: 'string', examples: ['1'] },
            links: {
              type: 'object',
              properties: { group: { type: 'string', examples: ['/api/3/dealStages/1/group'] } },
            },
            order: { type: 'string', examples: ['1'] },
            title: { type: 'string', examples: ['Stage 1'] },
            udate: { type: 'string', examples: ['2017-03-02T11:41:01-06:00'] },
            width: { type: 'string', examples: ['280'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveADealTaskType = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Deal task type's id",
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        dealTasktype: {
          type: 'object',
          properties: {
            cdate: { type: 'string', examples: ['2017-03-02T14:22:51-06:00'] },
            defduration: { type: 'string', examples: ['0'] },
            id: { type: 'string', examples: ['5'] },
            links: { type: 'array', items: {} },
            status: { type: 'string', examples: ['0'] },
            title: { type: 'string', examples: ['Skype'] },
            udate: { type: 'string', examples: ['2017-03-02T14:22:51-06:00'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveAFieldvalues = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the fieldValue to retrieve',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        fieldValue: {
          type: 'object',
          properties: {
            contact: { type: 'string', examples: ['0'] },
            field: {},
            value: {},
            cdate: { type: 'string', examples: ['2018-09-18T10:30:31-05:00'] },
            udate: { type: 'string', examples: ['2018-09-18T10:30:31-05:00'] },
            links: {
              type: 'object',
              properties: {
                owner: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/fieldValues/2/owner'],
                },
                field: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/fieldValues/2/field'],
                },
              },
            },
            id: { type: 'string', examples: ['2'] },
            owner: {},
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '403': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for FieldValue with id 10'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveAGroup = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the group to retrieve',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        group: {
          type: 'object',
          properties: {
            title: { type: 'string', examples: ['TEST TITLE'] },
            descript: {
              type: 'string',
              examples: ['This is a group for admin users (people that can manage content)'],
            },
            unsubscribelink: { type: 'string', examples: ['0'] },
            optinconfirm: { type: 'string', examples: ['0'] },
            p_admin: { type: 'string', examples: ['1'] },
            pgListAdd: { type: 'string', examples: ['1'] },
            pgListEdit: { type: 'string', examples: ['1'] },
            pgListDelete: { type: 'string', examples: ['1'] },
            pgListHeaders: { type: 'string', examples: ['1'] },
            pgListEmailaccount: { type: 'string', examples: ['1'] },
            pgListBounce: { type: 'string', examples: ['1'] },
            pgMessageAdd: { type: 'string', examples: ['1'] },
            pgMessageEdit: { type: 'string', examples: ['1'] },
            pgMessageDelete: { type: 'string', examples: ['1'] },
            pgMessageSend: { type: 'string', examples: ['1'] },
            pgContactAdd: { type: 'string', examples: ['1'] },
            pgContactEdit: { type: 'string', examples: ['1'] },
            pgContactDelete: { type: 'string', examples: ['1'] },
            pgContactMerge: { type: 'string', examples: ['1'] },
            pgContactImport: { type: 'string', examples: ['1'] },
            pgContactApprove: { type: 'string', examples: ['1'] },
            pgContactExport: { type: 'string', examples: ['1'] },
            pgContactSync: { type: 'string', examples: ['1'] },
            pgContactFilters: { type: 'string', examples: ['1'] },
            pgContactActions: { type: 'string', examples: ['0'] },
            pgContactFields: { type: 'string', examples: ['1'] },
            pg_user_add: { type: 'string', examples: ['1'] },
            pg_user_edit: { type: 'string', examples: ['1'] },
            pg_user_delete: { type: 'string', examples: ['1'] },
            pgGroupAdd: { type: 'string', examples: ['1'] },
            pgGroupEdit: { type: 'string', examples: ['1'] },
            pgGroupDelete: { type: 'string', examples: ['1'] },
            pgTemplateAdd: { type: 'string', examples: ['1'] },
            pgTemplateEdit: { type: 'string', examples: ['1'] },
            pgTemplateDelete: { type: 'string', examples: ['1'] },
            pgPersonalizationAdd: { type: 'string', examples: ['1'] },
            pgPersonalizationEdit: { type: 'string', examples: ['1'] },
            pgPersonalizationDelete: { type: 'string', examples: ['1'] },
            pgAutomationManage: { type: 'string', examples: ['1'] },
            pgFormEdit: { type: 'string', examples: ['1'] },
            pgReportsCampaign: { type: 'string', examples: ['1'] },
            pgReportsList: { type: 'string', examples: ['1'] },
            pgReportsUser: { type: 'string', examples: ['1'] },
            pgReportsTrend: { type: 'string', examples: ['1'] },
            pgStartupReports: { type: 'string', examples: ['1'] },
            pgStartupGettingstarted: { type: 'string', examples: ['1'] },
            pgDeal: { type: 'string', examples: ['1'] },
            pgDealDelete: { type: 'string', examples: ['1'] },
            pgDealReassign: { type: 'string', examples: ['1'] },
            pgDealGroupAdd: { type: 'string', examples: ['1'] },
            pgDealGroupEdit: { type: 'string', examples: ['1'] },
            pgDealGroupDelete: { type: 'string', examples: ['1'] },
            pgSavedResponsesManage: { type: 'string', examples: ['1'] },
            sdate: { type: 'string', examples: ['2018-09-20T10:51:14-05:00'] },
            reqApproval: { type: 'string', examples: ['0'] },
            reqApproval1st: { type: 'string', examples: ['2'] },
            reqApprovalNotify: { type: 'string', examples: [''] },
            socialdata: { type: 'string', examples: ['0'] },
            links: {
              type: 'object',
              properties: {
                userGroups: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/groups/3/userGroups'],
                },
                groupLimit: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/groups/3/groupLimit'],
                },
                dealGroupGroups: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/groups/3/dealGroupGroups'],
                },
                listGroups: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/groups/3/listGroups'],
                },
                addressGroups: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/groups/3/addressGroups'],
                },
                automationGroups: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/groups/3/automationGroups'],
                },
              },
            },
            id: { type: 'string', examples: ['3'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '403': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for Group with id 10'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveAList = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the lists to retrieve',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        list: {
          type: 'object',
          properties: {
            stringid: { type: 'string', examples: ['email-subscription'] },
            userid: { type: 'string', examples: ['1'] },
            name: { type: 'string', examples: ['Email Subscription'] },
            cdate: { type: 'string', examples: ['2018-08-06T16:30:41-05:00'] },
            p_use_tracking: { type: 'string', examples: ['1'] },
            p_use_analytics_read: { type: 'string', examples: ['0'] },
            p_use_analytics_link: { type: 'string', examples: ['0'] },
            p_use_twitter: { type: 'string', examples: ['0'] },
            p_use_facebook: { type: 'string', examples: ['0'] },
            p_embed_image: { type: 'string', examples: ['1'] },
            p_use_captcha: { type: 'string', examples: ['1'] },
            send_last_broadcast: { type: 'string', examples: ['0'] },
            private: { type: 'string', examples: ['0'] },
            analytics_domains: {},
            analytics_source: { type: 'string', examples: [''] },
            analytics_ua: { type: 'string', examples: [''] },
            twitter_token: { type: 'string', examples: [''] },
            twitter_token_secret: { type: 'string', examples: [''] },
            facebook_session: {},
            carboncopy: {},
            subscription_notify: {},
            unsubscription_notify: {},
            require_name: { type: 'string', examples: ['0'] },
            get_unsubscribe_reason: { type: 'string', examples: ['0'] },
            to_name: { type: 'string', examples: ['Subscriber'] },
            optinoptout: { type: 'string', examples: ['1'] },
            sender_name: { type: 'string', examples: [''] },
            sender_addr1: { type: 'string', examples: [''] },
            sender_addr2: { type: 'string', examples: [''] },
            sender_city: { type: 'string', examples: [''] },
            sender_state: { type: 'string', examples: [''] },
            sender_zip: { type: 'string', examples: [''] },
            sender_country: { type: 'string', examples: [''] },
            sender_phone: { type: 'string', examples: [''] },
            sender_url: { type: 'string', examples: ['http://www.activecampaign.com'] },
            sender_reminder: { type: 'string', examples: ['You signed up for my mailing list.'] },
            fulladdress: { type: 'string', examples: [''] },
            optinmessageid: { type: 'string', examples: ['0'] },
            optoutconf: { type: 'string', examples: ['0'] },
            deletestamp: {},
            udate: {},
            links: {
              type: 'object',
              properties: {
                contactGoalLists: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/lists/1/contactGoalLists'],
                },
                user: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/lists/1/user'],
                },
                addressLists: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/lists/1/addressLists'],
                },
              },
            },
            id: { type: 'string', examples: ['1'] },
            user: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '403': {
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              status: { type: 'integer', default: 0, examples: [403] },
              title: { type: 'string', examples: ['Forbidden'] },
              detail: { type: 'string', examples: ['You do not have permission to view lists.'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for _List with id 7'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveAMessage = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the message to retrieve',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        message: {
          type: 'object',
          properties: {
            userid: { type: 'string', examples: ['1'] },
            ed_instanceid: { type: 'string', examples: ['1'] },
            ed_version: { type: 'string', examples: ['2'] },
            cdate: { type: 'string', examples: ['2018-08-17T13:47:32-05:00'] },
            mdate: { type: 'string', examples: ['2018-08-17T13:47:32-05:00'] },
            name: { type: 'string', examples: ['Please confirm your subscription to %LISTNAME%'] },
            fromname: { type: 'string', examples: ['John Doe'] },
            fromemail: { type: 'string', examples: ['noreply@example.com'] },
            reply2: { type: 'string', examples: [''] },
            priority: { type: 'string', examples: ['3'] },
            charset: { type: 'string', examples: ['utf-8'] },
            encoding: { type: 'string', examples: ['8bit'] },
            format: { type: 'string', examples: ['mime'] },
            subject: {
              type: 'string',
              examples: ['Please confirm your subscription to %LISTNAME%'],
            },
            preheader_text: { type: 'string', examples: [''] },
            text: {
              type: 'string',
              examples: [
                ' \n\nThank you for subscribing to %LISTNAME%!\n\nYou or someone has subscribed to this list on %SUBDATE% using the\naddress %EMAIL%.\n\nTo confirm that you wish to be subscribed, please click the link below:\n\nConfirm My Subscription <%CONFIRMLINK%> \n\nIf you believe that this is a mistake and you did not intend on\nsubscribing to this list,\nyou can ignore this message and nothing else will happen.',
              ],
            },
            html: {
              type: 'string',
              examples: [
                '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n<html lang="en" style="margin: 0; outline: none; padding: 0;"><head><!--[if !mso]><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]--><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta http-equiv="Content-Language" content="locale_contentlang"><meta name="format-detection" content="telephone=no"><meta name="format-detection" content="date=no"><meta name="format-detection" content="address=no"><meta name="format-detection" content="email=no"><title>Preview</title><style data-ac-keep="true">\n.ExternalClass {width:100%; background:inherit; background-color:inherit;}\n.ExternalClass p, .ExternalClass ul, .ExternalClass ol { Margin: 0; }\n.undoreset div p, .undoreset p { margin-bottom: 20px; }\ndiv[class^="aolmail_divbody"] { overflow: auto; }\n[owa] #ac-footer { padding: 20px 0px!important; background:inherit; background-color:inherit; }\n</style><style data-ac-keep="true">\n@media only screen and (max-width: 600px) {\t/*-------------------------------------------------------------------------*\\ Abandoned Cart widget \\*------------------------------------------------------------------------*/ .td_abandoned-cart img {display: block;padding-right: 0 !important;padding-bottom: 0 !important;width: 100% !important;max-width: 100% !important;height: auto !important;} body { padding: 0!important; font-size:1em!important; } * { -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; } *[class].divbody {-webkit-text-size-adjust:none !important; width:auto !important;} *[class].td_picture img {width:auto !important;} *[class].td_text { line-height: 110%; } *[class].td_button { width: auto; } /* Collapse all block elements */ :not(.body) table { display: block!important; float:none!important; border-collapse:collapse !important; width:100% !important; min-width:100% !important; clear:both!important; } :not(.body) thead, :not(.body) tbody, :not(.body) tr { display:block!important; float:none!important; width:100% !important; } :not(.body) th, :not(.body) td, :not(.body) p { display:block!important; float:none!important; width:100% !important; clear:both!important; } /* Remove browser default styling for elements */ ul, ol { margin-left: 20px; margin-bottom: 10px; margin-top: 10px; -webkit-margin-before: 0; -webkit-margin-after: 0; -webkit-padding-start: 0; } /* Set default height for spacer once collapse */ *[class].spacer { height: auto!important; } a[href^=date]{ color:inherit !important; text-decoration:none !important;} a[href^=telephone]{ color:inherit !important; text-decoration:none !important;} a[href^=address]{ color:inherit !important; text-decoration:none !important;} a[href^=email]{ color:inherit !important; text-decoration:none !important;} /* Default table cell height */ td[height="10"]{height:10px!important;font-size:10px!important;line-height:10px!important;}\ntd[height="13"]{height:13px!important;font-size:13px!important;line-height:13px!important;}\ntd[height="14"]{height:14px!important;font-size:14px!important;line-height:14px!important;}\ntd[height="12"]{height:12px!important;font-size:12px!important;line-height:12px!important;} /* Default social icons */ *[class].ac-social-icon-16 {width:16px !important; height:16px !important;} *[class].ac-social-icon-24 {width:24px !important; height:24px !important;} *[class].ac-social-icon-28 {width:28px !important; height:28px !important;} *[class].__ac_social_icons { margin-right: 0px !important; } }\n</style><style data-ac-keep="true"> </style><!--[if !mso]><!-- webfonts --><!--<![endif]--><!--[if lt mso 12]> <![endif]--></head><body id="ac-designer" class="body" style="font-family: Arial; line-height: 1.1; margin: 0px; background-color: #f5f5f5; width: 100%; text-align: center;"><div class="divbody" style="margin: 0px; outline: none; padding: 0px; color: #000000; font-family: arial; line-height: 1.1; width: 100%; background-color: #f5f5f5; background: #f5f5f5; text-align: center;"><table class="template-table" border="0" cellpadding="0" cellspacing="0" width="100%" align="left" style="font-size: 13px; min-width: auto; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f5f5f5; background: #f5f5f5;"><tr><td align="center" valign="top" width="100%"><table class="template-table" border="0" cellpadding="0" cellspacing="0" width="650" bgcolor="#f5f5f5" style="font-size: 13px; min-width: auto; mso-table-lspace: 0pt; mso-table-rspace: 0pt; max-width: 650px;"><tr><td id="layout_table_4c01fd59953b175598dbdb0163afc56680171ae4" valign="top" align="center" width="650" style="background-color: #f5f5f5;"><table cellpadding="0" cellspacing="0" border="0" class="layout layout-table root-table" width="650" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f5f5f5;"><tr style="background-color: #f5f5f5;"><td id="layout-row-margin2" valign="top" style="background-color: #f5f5f5;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr id="layout-row2" class="layout layout-row widget _widget_spacer "><td id="layout-row-padding2" valign="top"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td valign="top" height="30"><div class="spacer" style="margin: 0; outline: none; padding: 0; height: 30px;"><table cellpadding="0" cellspacing="0" border="0" width="100%" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tbody><tr><td class="spacer-body" valign="top" height="30" width="650"> </td></tr></tbody></table></div></td></tr></table></td></tr></table></td></tr><tr style="background-color: #f5f5f5;"><td id="layout-row-margin1" valign="top" style="padding: 0; background-color: #f5f5f5;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: initial !important;"><tr id="layout-row1" class="layout layout-row widget _widget_text style1" style="margin: 0; padding: 0;"><td id="layout-row-padding1" valign="top" style="padding: 0 20px 20px 20px;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td id="text_div1" class="td_text td_block" valign="top" align="left" style="color: inherit; font-size: 12px; font-weight: inherit; line-height: 1; text-decoration: inherit; font-family: Arial;"> <span class="" style="color: inherit; font-size: 10px; font-weight: inherit; line-height: inherit; text-decoration: inherit;"> </span><p style="margin: 0; outline: none; padding: 0; color: inherit; font-size: inherit; font-weight: inherit; line-height: inherit; text-decoration: inherit; text-align: center;"><span style="color: #000000; font-size: 16px; font-weight: inherit; line-height: inherit; text-decoration: inherit;" class="">Thank you for subscribing to %LISTNAME%!</span></p></td></tr></table></td></tr></table></td></tr><tr style="background-color: #f5f5f5;"><td id="layout-row-margin3" valign="top" style="padding: 0; background-color: #f5f5f5;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: initial !important;"><tr id="layout-row3" class="layout layout-row widget _widget_text style3" style="margin: 0; padding: 0;"><td id="layout-row-padding3" valign="top" style="padding: 0 20px 20px 20px;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td id="text_div3" class="td_text td_block" valign="top" align="left" style="color: inherit; font-size: 12px; font-weight: inherit; line-height: 1; text-decoration: inherit; font-family: Arial;"> <span class="" style="color: inherit; font-size: 16px; font-weight: inherit; line-height: inherit; text-decoration: inherit;"> </span><p style="margin: 0; outline: none; padding: 0; color: inherit; font-size: inherit; font-weight: inherit; line-height: inherit; text-decoration: inherit; text-align: center;"><span style="color: inherit; font-size: 13px; font-weight: inherit; line-height: inherit; text-decoration: inherit;" class="">You or someone has subscribed to this list on %SUBDATE% using the address %EMAIL%.</span></p></td></tr></table></td></tr></table></td></tr><tr style="background-color: #f5f5f5;"><td id="layout-row-margin4" valign="top" style="padding: 0 20px 0 20px; background-color: #f5f5f5;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: initial !important;"><tr id="layout-row4" class="layout layout-row widget _widget_text style4" style="margin: 0; padding: 0; background-color: #ffffff;"><td id="layout-row-padding4" valign="top" style="background-color: #ffffff; padding: 30px 30px 20px 30px;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td id="text_div4" class="td_text td_block" valign="top" align="left" style="color: inherit; font-size: 12px; font-weight: inherit; line-height: 1; text-decoration: inherit; font-family: Arial;"> <span class="" style="color: inherit; font-size: 16px; font-weight: inherit; line-height: inherit; text-decoration: inherit;"> </span><p style="margin: 0; outline: none; padding: 0; color: inherit; font-size: inherit; font-weight: inherit; line-height: inherit; text-decoration: inherit; text-align: center;"><span class="" style="color: inherit; font-size: inherit; font-weight: inherit; line-height: inherit; text-decoration: inherit;">To confirm that you wish to be subscribed, please click the link below:</span></p></td></tr></table></td></tr></table></td></tr><tr style="background-color: #f5f5f5;"><td id="layout-row-margin5" valign="top" style="padding: 0 20px 0 20px; background-color: #f5f5f5;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: initial !important;"><tr id="layout-row5" class="layout layout-row widget _widget_button style5" style="background-color: #ffffff;"><td id="layout-row-padding5" valign="top" style="background-color: #ffffff; padding: 0px 30px 30px 30px;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td class="td_button td_block customizable" valign="top" align="left" width="550"> <div class="button-wrapper" style="margin: 0; outline: none; padding: 0; text-align: center;">\n<!--[if mso]> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="%CONFIRMLINK%" style="v-text-anchor:middle; width:202px; height:64px; " arcsize="10%" strokecolor="#4dcba9" strokeweight="1pt" fillcolor="#4dcba9" o:button="true" o:allowincell="true" o:allowoverlap="false" > <v:textbox inset="2px,2px,2px,2px"> <center style="color:#ffffff;font-family:Arial; font-size:14px; line-height: 1.1;">Confirm My Subscription</center> </v:textbox> </v:roundrect>\n<![endif]--> <a href="%CONFIRMLINK%" style="margin: 0; outline: none; padding: 14px; color: #ffffff; background-color: #4dcba9; border: 1px solid #4dcba9; border-radius: 4px; font-family: Arial; font-size: 14px; display: inline-block; line-height: 1.1; text-align: center; text-decoration: none; mso-hide: all;"> <span style="color:#ffffff;font-family:Arial;font-size:14px;"> Confirm My Subscription </span> </a> </div>\n</td></tr></table></td></tr></table></td></tr><tr style="background-color: #f5f5f5;"><td id="layout-row-margin6" valign="top" style="padding: 0; background-color: #f5f5f5;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: initial !important;"><tr id="layout-row6" class="layout layout-row widget _widget_text style6" style="margin: 0; padding: 0;"><td id="layout-row-padding6" valign="top" style="padding: 20px;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td id="text_div6" class="td_text td_block" valign="top" align="left" style="color: inherit; font-size: 12px; font-weight: inherit; line-height: 1; text-decoration: inherit; font-family: Arial;"> <span class="" style="color: inherit; font-size: 16px; font-weight: inherit; line-height: inherit; text-decoration: inherit;"> </span><p style="margin: 0; outline: none; padding: 0; color: inherit; font-size: inherit; font-weight: inherit; line-height: inherit; text-decoration: inherit; text-align: center;"><span style="color: inherit; font-size: 12px; font-weight: inherit; line-height: inherit; text-decoration: inherit;" class="">If you believe that this is a mistake and you did not intend on subscribing to this list,<br>you can ignore this message and nothing else will happen.</span></p></td></tr></table></td></tr></table></td></tr></table></td></tr></table></td></tr></table></div></body></html>\n',
              ],
            },
            htmlfetch: { type: 'string', examples: ['now'] },
            textfetch: { type: 'string', examples: ['now'] },
            hidden: { type: 'string', examples: ['0'] },
            preview_mime: { type: 'string', examples: [''] },
            preview_data: { type: 'string', examples: [''] },
            links: {
              type: 'object',
              properties: {
                user: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/messages/3/user'],
                },
              },
            },
            id: { type: 'string', examples: ['3'] },
            user: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for Message with id 10'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveANote = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the note to retrieve',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        note: {
          type: 'object',
          properties: {
            relid: { type: 'string', examples: ['2'] },
            reltype: { type: 'string', examples: ['Subscriber'] },
            userid: { type: 'string', examples: ['1'] },
            cdate: { type: 'string', examples: ['2018-09-12T17:20:20-05:00'] },
            mdate: { type: 'string', examples: ['2018-09-20T09:10:06-05:00'] },
            note: { type: 'string', examples: ['TEST NOTE'] },
            links: {
              type: 'object',
              properties: {
                activities: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/notes/2/activities'],
                },
                user: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/notes/2/user'],
                },
                mentions: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/notes/2/mentions'],
                },
                notes: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/notes/2/notes'],
                },
                owner: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/notes/2/owner'],
                },
              },
            },
            id: { type: 'string', examples: ['2'] },
            user: { type: 'string', examples: ['1'] },
            owner: {
              type: 'object',
              properties: {
                type: { type: 'string', examples: ['contact'] },
                id: { type: 'string', examples: ['2'] },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveAPipeline = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Pipeline's id",
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        dealGroup: {
          type: 'object',
          properties: {
            allgroups: { type: 'string', examples: ['1'] },
            allusers: { type: 'string', examples: ['0'] },
            autoassign: { type: 'string', examples: ['1'] },
            cdate: { type: 'string', examples: ['2017-03-30T12:11:30-05:00'] },
            currency: { type: 'string', examples: ['eur'] },
            id: { type: 'string', examples: ['4'] },
            links: {
              type: 'object',
              properties: {
                dealGroupGroups: {
                  type: 'string',
                  examples: ['/api/3/dealGroups/4/dealGroupGroups'],
                },
                dealGroupUsers: {
                  type: 'string',
                  examples: ['/api/3/dealGroups/4/dealGroupUsers'],
                },
                stages: { type: 'string', examples: ['/api/3/dealGroups/4/stages'] },
              },
            },
            stages: { type: 'array', items: { type: 'string', examples: ['9'] } },
            title: { type: 'string', examples: ['Qualifications'] },
            udate: { type: 'string', examples: ['2017-03-30T13:44:32-05:00'] },
          },
        },
        dealStages: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              cardRegion1: { type: 'string', examples: ['title'] },
              cardRegion2: { type: 'string', examples: ['next-action'] },
              cardRegion3: { type: 'string', examples: ['show-avatar'] },
              cardRegion4: { type: 'string', examples: ['contact-fullname-orgname'] },
              cardRegion5: { type: 'string', examples: ['value'] },
              cdate: {},
              color: { type: 'string', examples: ['18D499'] },
              dealOrder: { type: 'string', examples: ['next-action DESC'] },
              group: { type: 'string', examples: ['4'] },
              id: { type: 'string', examples: ['9'] },
              links: {
                type: 'object',
                properties: { group: { type: 'string', examples: ['/api/3/dealStages/9/group'] } },
              },
              order: { type: 'string', examples: ['1'] },
              title: { type: 'string', examples: ['To Contact'] },
              udate: {},
              width: { type: 'string', examples: ['280'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveASavedresponse = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the saved response to remove',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for SavedResponse with id 1'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveASchema = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Id of the Schema',
          },
        },
        required: ['id'],
      },
      {
        type: 'object',
        properties: {
          showFields: {
            type: 'string',
            default: 'all',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              'Toggle which fields are shown in the response body of a schema (if there hidden due to e.g. recently being deleted). Omit this parameter entirely to hide fields by default.',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        schema: {
          type: 'object',
          properties: {
            id: { type: 'string', examples: ['6449c3f3-b68d-46d1-850b-c8aea998ce1b'] },
            slug: { type: 'string', examples: ['my-object'] },
            visibility: { type: 'string', examples: ['private'] },
            labels: {
              type: 'object',
              properties: {
                singular: { type: 'string', examples: ['My Object'] },
                plural: { type: 'string', examples: ['My Objects'] },
              },
            },
            description: { type: 'string', examples: ['Sample Schema'] },
            createdTimestamp: { type: 'string', examples: ['2021-04-16T15:08:25.783751329Z'] },
            updatedTimestamp: { type: 'string', examples: ['2021-04-16T15:08:25.783751329Z'] },
            fields: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'string', examples: ['my-number-field'] },
                  labels: {
                    type: 'object',
                    properties: {
                      singular: { type: 'string', examples: ['Number'] },
                      plural: { type: 'string', examples: ['Numbers'] },
                    },
                  },
                  type: { type: 'string', examples: ['number'] },
                  required: { type: 'boolean', default: true, examples: [false] },
                  scale: { type: 'integer', default: 0, examples: [0] },
                },
              },
            },
            icons: {
              type: 'object',
              properties: {
                default: {
                  type: 'string',
                  examples: ['https://d226aj4ao1t61q.cloudfront.net/n9mayqo2d_customobject.png'],
                },
              },
            },
            relationships: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'string', examples: ['primary-contact'] },
                  labels: {
                    type: 'object',
                    properties: {
                      singular: { type: 'string', examples: ['Primary Contact'] },
                      plural: { type: 'string', examples: ['Primary Contacts'] },
                    },
                  },
                  description: { type: 'string', examples: ['Primary contact to this object'] },
                  namespace: { type: 'string', examples: ['contacts'] },
                  hasMany: { type: 'boolean', default: true, examples: [false] },
                },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: { message: { type: 'string', examples: ['Not Found'] } },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveAScore = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the score to retrieve',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        score: {
          type: 'object',
          properties: {
            reltype: { type: 'string', examples: ['contact'] },
            name: { type: 'string', examples: ['Link Engagement Score'] },
            descript: { type: 'string', examples: ['+50 points when user clicks any link sent'] },
            status: { type: 'string', examples: ['1'] },
            cdate: { type: 'string', examples: ['2018-12-13T15:05:42-06:00'] },
            mdate: { type: 'string', examples: ['2018-12-13T16:23:07-06:00'] },
            links: { type: 'array', items: {} },
            id: { type: 'string', examples: ['2'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for Score with id 1'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveASecondaryContact = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Secondary Contact's id",
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        contactDeal: {
          type: 'object',
          properties: {
            deal: { type: 'string', examples: ['2'] },
            contact: { type: 'string', examples: ['1'] },
            cdate: { type: 'string', examples: ['2019-02-25T08:16:56-06:00'] },
            links: {
              type: 'object',
              properties: {
                deal: { type: 'string', examples: ['/api/3/contactDeals/1/deal'] },
                contact: { type: 'string', examples: ['/api/3/contactDeals/1/contact'] },
              },
            },
            id: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for SubscriberDeal with id 100'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveASegment = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the segment to be retrieved',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        segment: {
          type: 'object',
          properties: {
            name: { type: 'string', examples: ['Segment of test'] },
            logic: { type: 'string', examples: ['and'] },
            hidden: { type: 'string', examples: ['0'] },
            seriesid: { type: 'string', examples: ['0'] },
            links: { type: 'array', items: {} },
            id: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveATag = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the tag to retrieve',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        tag: {
          type: 'object',
          properties: {
            tagType: { type: 'string', examples: ['contact'] },
            tag: { type: 'string', examples: ['My Tag'] },
            description: { type: 'string', examples: ['Description'] },
            cdate: { type: 'string', examples: ['2018-10-04T14:55:13-05:00'] },
            subscriber_count: { type: 'string', examples: ['0'] },
            links: {
              type: 'object',
              properties: {
                contactGoalTags: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/tags/1/contactGoalTags'],
                },
              },
            },
            id: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: { message: { type: 'string', examples: ['No Result found for Tag with id 1'] } },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveATaskOutcome = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Task outcome's id",
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        taskOutcome: {
          type: 'object',
          properties: {
            title: { type: 'string', examples: ['Interested'] },
            sentiment: { type: 'string', examples: ['POSITIVE'] },
            disabled: { type: 'string', examples: ['0'] },
            created_by: { type: 'string', examples: ['1'] },
            updated_by: { type: 'string', examples: ['1'] },
            created_utc_timestamp: { type: 'string', examples: ['2021-02-16T12:26:15-06:00'] },
            updated_utc_timestamp: { type: 'string', examples: ['2021-02-16T12:27:56-06:00'] },
            dealTasktype_ids: { type: 'array', items: {} },
            links: {
              type: 'object',
              properties: {
                tasktypeOutcomeRels: {
                  type: 'string',
                  examples: [
                    'https://youraccountname.api-us1.com/api/3/taskOutcomes/1/tasktypeOutcomeRels',
                  ],
                },
                dealTasks: {
                  type: 'string',
                  examples: ['https://youraccountname.api-us1.com/api/3/taskOutcomes/1/dealTasks'],
                },
              },
            },
            id: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for TaskOutcome with id 111'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveATaskTypeOutcomeRelation = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Task type - outcome relation's id",
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        tasktypeOutcomeRel: {
          type: 'object',
          properties: {
            tasktype_id: { type: 'string', examples: ['1'] },
            outcome_id: { type: 'string', examples: ['9'] },
            display_order: { type: 'string', examples: ['0'] },
            created_by: { type: 'string', examples: ['0'] },
            created_utc_timestamp: { type: 'string', examples: ['2021-04-05T15:19:36-05:00'] },
            updated_by: {},
            updated_utc_timestamp: { type: 'string', examples: ['2021-04-05 15:19:36'] },
            links: {
              type: 'object',
              properties: {
                tasktype: {
                  type: 'string',
                  examples: ['http://hosted.localdev/api/3/tasktypeOutcomeRels/1/tasktype'],
                },
                outcome: {
                  type: 'string',
                  examples: ['http://hosted.localdev/api/3/tasktypeOutcomeRels/1/outcome'],
                },
                createdBy: {
                  type: 'string',
                  examples: ['http://hosted.localdev/api/3/tasktypeOutcomeRels/1/createdBy'],
                },
              },
            },
            id: { type: 'string', examples: ['1'] },
            tasktype: { type: 'string', examples: ['1'] },
            outcome: { type: 'string', examples: ['1'] },
            createdBy: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: {
          type: 'string',
          examples: ['No Result found for TasktypeOutcomeRel with id 111'],
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveATemplate = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the template to retrieve',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        template: {
          type: 'object',
          properties: {
            userid: { type: 'string', examples: ['1'] },
            ed_instanceid: { type: 'string', examples: ['0'] },
            ed_version: { type: 'string', examples: ['0'] },
            name: { type: 'string', examples: ['Test 2'] },
            subject: {},
            content: { type: 'string', examples: ['sdsf'] },
            categoryid: { type: 'string', examples: ['1'] },
            used: { type: 'string', examples: ['1'] },
            waitpreview: { type: 'string', examples: ['1'] },
            importnum: { type: 'string', examples: ['0'] },
            mdate: { type: 'string', examples: ['2018-08-28 11:54:54'] },
            preview_content: {},
            modified: { type: 'string', examples: ['1'] },
            hidden: { type: 'string', examples: ['0'] },
            links: { type: 'array', items: {} },
            id: { type: 'string', examples: ['2'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for Template with id 10'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveAllCustomDealFieldMeta = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          limit: {
            type: 'integer',
            format: 'int32',
            default: 100,
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'The number of fields returned per request.',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        dealCustomFieldMeta: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string', examples: ['1'] },
              fieldLabel: { type: 'string', examples: ['Text Example'] },
              fieldType: { type: 'string', examples: ['text'] },
              fieldOptions: {},
              fieldDefault: { type: 'integer', default: 0, examples: [1] },
              fieldDefaultCurrency: {},
              isFormVisible: { type: 'integer', default: 0, examples: [0] },
              isRequired: { type: 'integer', default: 0, examples: [0] },
              displayOrder: { type: 'integer', default: 0, examples: [1] },
              personalization: { type: 'string', examples: [''] },
              knownFieldId: {},
              hideFieldFlag: { type: 'integer', default: 0, examples: [0] },
              createdTimestamp: { type: 'string', examples: ['2019-04-23 15:34:00'] },
              updatedTimestamp: { type: 'string', examples: ['2019-05-03 15:16:51'] },
              links: {
                type: 'object',
                properties: {
                  dealCustomFieldData: {
                    type: 'string',
                    examples: [
                      'https://:account.api-us1.com/api/:version/dealCustomFieldMeta/1/dealCustomFieldData',
                    ],
                  },
                },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveAllLists = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          'filters[name]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Filter by the name of the list',
          },
          limit: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Limit the number of returned results',
          },
          'filters[name][<operator>]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              'Filters lists by list name according to the operator specified. Operators currently supported: eq, neq, lt, lte, gt, gte, contains, starts_with',
          },
          'orders[name]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              'Orders filtered results by weight, ascending order, or descending order. If weight is used, exact matches are returned first, followed by matches starting with what was filtered by, followed by the rest of the results.',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        lists: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              stringid: { type: 'string', examples: ['email-subscription'] },
              userid: { type: 'string', examples: ['1'] },
              name: { type: 'string', examples: ['Email Subscription'] },
              cdate: { type: 'string', examples: ['2018-08-06T16:30:41-05:00'] },
              p_use_tracking: { type: 'string', examples: ['1'] },
              p_use_analytics_read: { type: 'string', examples: ['0'] },
              p_use_analytics_link: { type: 'string', examples: ['0'] },
              p_use_twitter: { type: 'string', examples: ['0'] },
              p_use_facebook: { type: 'string', examples: ['0'] },
              p_embed_image: { type: 'string', examples: ['1'] },
              p_use_captcha: { type: 'string', examples: ['1'] },
              send_last_broadcast: { type: 'string', examples: ['0'] },
              private: { type: 'string', examples: ['0'] },
              analytics_domains: {},
              analytics_source: { type: 'string', examples: [''] },
              analytics_ua: { type: 'string', examples: [''] },
              twitter_token: { type: 'string', examples: [''] },
              twitter_token_secret: { type: 'string', examples: [''] },
              facebook_session: {},
              carboncopy: {},
              subscription_notify: {},
              unsubscription_notify: {},
              require_name: { type: 'string', examples: ['0'] },
              get_unsubscribe_reason: { type: 'string', examples: ['0'] },
              to_name: { type: 'string', examples: ['Subscriber'] },
              optinoptout: { type: 'string', examples: ['1'] },
              sender_name: { type: 'string', examples: [''] },
              sender_addr1: { type: 'string', examples: [''] },
              sender_addr2: { type: 'string', examples: [''] },
              sender_city: { type: 'string', examples: [''] },
              sender_state: { type: 'string', examples: [''] },
              sender_zip: { type: 'string', examples: [''] },
              sender_country: { type: 'string', examples: [''] },
              sender_phone: { type: 'string', examples: [''] },
              sender_url: { type: 'string', examples: ['http://www.ilankreimont.com'] },
              sender_reminder: { type: 'string', examples: ['You signed up for my mailing list.'] },
              fulladdress: { type: 'string', examples: [''] },
              optinmessageid: { type: 'string', examples: ['0'] },
              optoutconf: { type: 'string', examples: ['0'] },
              deletestamp: {},
              udate: {},
              links: {
                type: 'object',
                properties: {
                  contactGoalLists: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/lists/1/contactGoalLists'],
                  },
                  user: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/lists/1/user'],
                  },
                  addressLists: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/lists/1/addressLists'],
                  },
                },
              },
              id: { type: 'string', examples: ['1'] },
              user: { type: 'string', examples: ['1'] },
            },
          },
        },
        meta: { type: 'object', properties: { total: { type: 'string', examples: ['4'] } } },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '403': {
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              status: { type: 'integer', default: 0, examples: [403] },
              title: { type: 'string', examples: ['Forbidden'] },
              detail: { type: 'string', examples: ['You do not have permission to view lists.'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveAllTags = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          search: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Filter by name of tag(s); "contains" operator is assumed.',
          },
          'filters[search][<operator>]': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              'Filters tags by tag name according to the operator specified. Operators currently supported: `eq`, `neq`, `lt`, `lte`, `gt`, `gte`, `contains`, `starts_with`',
          },
          'orders[search]': {
            type: 'string',
            enum: ['weight', 'asc', 'desc'],
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              'Orders filtered results by weight, ascending order, or descending order. If `weight` is used, exact matches are returned first, followed by matches starting with what was filtered by, followed by the rest of the results.',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        tags: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              tagType: { type: 'string', examples: ['contact'] },
              tag: { type: 'string', examples: ['one'] },
              description: { type: 'string', examples: [''] },
              cdate: { type: 'string', examples: ['2018-08-17T09:43:15-05:00'] },
              links: {
                type: 'object',
                properties: {
                  contactGoalTags: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/tags/1/contactGoalTags'],
                  },
                },
              },
              id: { type: 'string', examples: ['1'] },
            },
          },
        },
        meta: { type: 'object', properties: { total: { type: 'string', examples: ['5'] } } },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveAnAccount = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Account's ID",
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        account: {
          type: 'object',
          properties: {
            name: { type: 'string', examples: ['Example Account'] },
            accountUrl: { type: 'string', examples: ['https://www.example.com'] },
            createdTimestamp: { type: 'string', examples: ['2019-05-15T15:58:16-05:00'] },
            updatedTimestamp: { type: 'string', examples: ['2019-05-15T15:58:16-05:00'] },
            links: { type: 'array', items: {} },
            id: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveAnAddress = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the Address to retrieve',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        address: {
          type: 'object',
          properties: {
            companyName: { type: 'string', examples: ['Test Company Name'] },
            address1: { type: 'string', examples: ['Test Address'] },
            address2: { type: 'string', examples: [''] },
            city: { type: 'string', examples: [''] },
            state: { type: 'string', examples: [''] },
            district: { type: 'string', examples: [''] },
            zip: { type: 'string', examples: [''] },
            country: { type: 'string', examples: ['US'] },
            allgroup: { type: 'string', examples: ['0'] },
            isDefault: { type: 'string', examples: ['1'] },
            links: {
              type: 'object',
              properties: {
                addressGroup: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/addresses/1/addressGroup'],
                },
                addressList: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/addresses/1/addressList'],
                },
                forms: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/addresses/1/forms'],
                },
              },
            },
            id: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveAnAssociation = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Association's ID",
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        accountContact: {
          type: 'object',
          properties: {
            account: { type: 'string', examples: ['2'] },
            contact: { type: 'string', examples: ['1'] },
            jobTitle: { type: 'string', examples: ['Product Manager'] },
            createdTimestamp: { type: 'string', examples: ['2019-06-26T11:26:09-05:00'] },
            updatedTimestamp: { type: 'string', examples: ['2019-06-26T11:26:09-05:00'] },
            links: {
              type: 'object',
              properties: {
                account: {
                  type: 'string',
                  examples: ['http://hosted.localdev/api/3/accountContacts/18/account'],
                },
                contact: {
                  type: 'string',
                  examples: ['http://hosted.localdev/api/3/accountContacts/18/contact'],
                },
              },
            },
            id: { type: 'string', examples: ['18'] },
          },
        },
        meta: {
          type: 'object',
          properties: {
            queryLog: {
              type: 'object',
              properties: {
                queries: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      stmt: {
                        type: 'string',
                        examples: [
                          "SELECT  * FROM em_customer_account_subscriber t   WHERE 1 AND id = '18' LIMIT 0, 1",
                        ],
                      },
                      time: { type: 'number', default: 0, examples: [0.31304359436035] },
                    },
                  },
                },
                by_time: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      stmt: {
                        type: 'string',
                        examples: [
                          "SELECT  * FROM em_customer_account_subscriber t   WHERE 1 AND id = '18' LIMIT 0, 1",
                        ],
                      },
                      time: { type: 'number', default: 0, examples: [0.31304359436035] },
                    },
                  },
                },
                total: { type: 'number', default: 0, examples: [0.31304359436035] },
                mode: { type: 'string', examples: ['read/write'] },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: {
          type: 'string',
          examples: ['No Result found for CustomerAccountSubscriber with id 100'],
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveAnEcomorderproduct = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "The ID of the product you'd like returned.",
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        ecomOrderProduct: {
          type: 'object',
          properties: {
            orderid: { type: 'string', examples: ['1'] },
            connectionid: { type: 'string', examples: ['1'] },
            externalid: { type: 'string', examples: ['1269385775'] },
            sku: { type: 'string', examples: ['SKATE-8'] },
            name: { type: 'string', examples: ['My Cool Skateboard'] },
            description: {
              type: 'string',
              examples: ['This skateboard is so cool, it rides itself'],
            },
            price: { type: 'string', examples: ['5000'] },
            quantity: { type: 'string', examples: ['1'] },
            category: { type: 'string', examples: ['skateboards'] },
            imageUrl: { type: 'string', examples: ['https://example.com/images/skateboard.jpg'] },
            productUrl: { type: 'string', examples: ['http://example.com/products/skate-8'] },
            createdDate: { type: 'string', examples: ['2019-06-28T18:04:19-05:00'] },
            updatedDate: { type: 'string', examples: ['2019-06-28T18:04:19-05:00'] },
            tstamp: { type: 'string', examples: ['2019-06-28T18:04:19-05:00'] },
            links: {
              type: 'object',
              properties: {
                ecomOrder: {
                  type: 'string',
                  examples: [
                    'https://commissiontheatre.api-us1.com/api/3/ecomOrderProducts/1/ecomOrder',
                  ],
                },
              },
            },
            id: { type: 'string', examples: ['1'] },
            ecomOrder: { type: 'string', examples: ['2'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: {
          type: 'string',
          examples: ['No Result found for EcomOrderProduct with id {the id requested}'],
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveContactAccountContacts = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the contact',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        accountContacts: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              account: { type: 'string', examples: ['9'] },
              contact: { type: 'string', examples: ['7'] },
              jobTitle: { type: 'string', examples: [''] },
              createdTimestamp: { type: 'string', examples: ['2021-05-21T16:30:23-05:00'] },
              updatedTimestamp: { type: 'string', examples: ['2021-05-21T16:30:23-05:00'] },
              links: {
                type: 'object',
                properties: {
                  account: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/accountContacts/7/account'],
                  },
                  contact: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/accountContacts/7/contact'],
                  },
                },
              },
              id: { type: 'string', examples: ['7'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for Subscriber with id 100'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveContactAutomationEntryCounts = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the contact',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        automationEntryCounts: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string', examples: ['2'] },
              name: { type: 'string', examples: ['Pages: Lead Delivery'] },
              status: { type: 'string', examples: ['1'] },
              hidden: { type: 'string', examples: ['0'] },
              contactEntryCount: { type: 'string', examples: ['1'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for Subscriber with id 100'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveContactBounceLogs = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the contact',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        bounceLogs: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              tstamp: { type: 'string', examples: ['2021-05-12T11:30:06-05:00'] },
              bounceid: { type: 'string', examples: ['1'] },
              subscriberid: { type: 'string', examples: ['4'] },
              campaignid: { type: 'string', examples: ['11'] },
              messageid: { type: 'string', examples: ['12'] },
              codeid: { type: 'string', examples: ['48'] },
              email: { type: 'string', examples: ['uhOhBounced@example.com'] },
              error: { type: 'string', examples: [''] },
              source: {
                type: 'string',
                examples: [
                  'Return-Path: <>\nReceived: from xxx.xxxx.xxxxxxc.com (unknown [XX.X.XX.XX]) ...',
                ],
              },
              created_timestamp: { type: 'string', examples: ['2021-05-12 11:30:06'] },
              updated_timestamp: { type: 'string', examples: ['2021-05-12 11:30:06'] },
              created_by: {},
              updated_by: {},
              links: {
                type: 'object',
                properties: {
                  bounce: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/bounceLogs/23/bounce'],
                  },
                  contact: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/bounceLogs/23/contact'],
                  },
                  campaign: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/bounceLogs/23/campaign'],
                  },
                  message: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/bounceLogs/23/message'],
                  },
                  code: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/bounceLogs/23/code'],
                  },
                },
              },
              id: { type: 'string', examples: ['23'] },
              bounce: { type: 'string', examples: ['1'] },
              contact: { type: 'string', examples: ['4'] },
              campaign: { type: 'string', examples: ['11'] },
              message: { type: 'string', examples: ['12'] },
              code: { type: 'string', examples: ['48'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for Subscriber with id 100'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveContactData = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the contact',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        contactDatum: {
          type: 'object',
          properties: {
            contact: { type: 'string', examples: ['4'] },
            tstamp: { type: 'string', examples: ['2021-06-09T14:35:10-05:00'] },
            geoTstamp: {},
            geoIp4: { type: 'string', examples: ['0'] },
            geoCountry2: { type: 'string', examples: [''] },
            geo_country: { type: 'string', examples: [''] },
            geoState: { type: 'string', examples: [''] },
            geoCity: { type: 'string', examples: [''] },
            geoZip: { type: 'string', examples: [''] },
            geoArea: { type: 'string', examples: ['0'] },
            geoLat: { type: 'string', examples: ['0.000000'] },
            geoLon: { type: 'string', examples: ['0.000000'] },
            geoTz: { type: 'string', examples: [''] },
            geoTzOffset: { type: 'string', examples: ['0.00'] },
            ga_campaign_source: { type: 'string', examples: [''] },
            ga_campaign_name: { type: 'string', examples: [''] },
            ga_campaign_medium: { type: 'string', examples: [''] },
            ga_campaign_term: { type: 'string', examples: [''] },
            ga_campaign_content: { type: 'string', examples: [''] },
            ga_campaign_customsegment: { type: 'string', examples: [''] },
            ga_first_visit: {},
            ga_times_visited: { type: 'string', examples: ['0'] },
            fb_id: { type: 'string', examples: ['0'] },
            fb_name: { type: 'string', examples: [''] },
            tw_id: { type: 'string', examples: ['0'] },
            created_timestamp: { type: 'string', examples: ['0000-00-00 00:00:00'] },
            updated_timestamp: { type: 'string', examples: ['0000-00-00 00:00:00'] },
            created_by: { type: 'string', examples: ['0'] },
            updated_by: { type: 'string', examples: ['0'] },
            links: { type: 'array', items: {} },
            id: { type: 'string', examples: ['12'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for Subscriber with id 121'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveContactDeals = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the contact',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        deals: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              hash: { type: 'string', examples: ['8be32as98'] },
              owner: { type: 'string', examples: ['8'] },
              contact: { type: 'string', examples: ['8'] },
              organization: { type: 'string', examples: ['5'] },
              group: { type: 'string', examples: ['1'] },
              stage: { type: 'string', examples: ['4'] },
              title: { type: 'string', examples: ['Acme Corp'] },
              description: { type: 'string', examples: [''] },
              percent: { type: 'string', examples: ['0'] },
              cdate: { type: 'string', examples: ['2021-06-30T15:27:44-05:00'] },
              mdate: { type: 'string', examples: ['2021-06-30T15:27:44-05:00'] },
              nextdate: {},
              nexttaskid: {},
              value: { type: 'string', examples: ['494227'] },
              currency: { type: 'string', examples: ['usd'] },
              winProbability: {},
              winProbabilityMdate: {},
              status: { type: 'string', examples: ['2'] },
              activitycount: { type: 'string', examples: ['1'] },
              nextdealid: { type: 'string', examples: ['3060'] },
              edate: {},
              links: {
                type: 'object',
                properties: {
                  dealActivities: {
                    type: 'string',
                    examples: ['https://:acount.api-us1.com/api/3/deals/3057/dealActivities'],
                  },
                  contact: {
                    type: 'string',
                    examples: ['https://:acount.api-us1.com/api/3/deals/3057/contact'],
                  },
                  contactDeals: {
                    type: 'string',
                    examples: ['https://:acount.api-us1.com/api/3/deals/3057/contactDeals'],
                  },
                  group: {
                    type: 'string',
                    examples: ['https://:acount.api-us1.com/api/3/deals/3057/group'],
                  },
                  nextTask: {
                    type: 'string',
                    examples: ['https://:acount.api-us1.com/api/3/deals/3057/nextTask'],
                  },
                  notes: {
                    type: 'string',
                    examples: ['https://:acount.api-us1.com/api/3/deals/3057/notes'],
                  },
                  account: {
                    type: 'string',
                    examples: ['https://:acount.api-us1.com/api/3/deals/3057/account'],
                  },
                  customerAccount: {
                    type: 'string',
                    examples: ['https://:acount.api-us1.com/api/3/deals/3057/customerAccount'],
                  },
                  organization: {
                    type: 'string',
                    examples: ['https://:acount.api-us1.com/api/3/deals/3057/organization'],
                  },
                  owner: {
                    type: 'string',
                    examples: ['https://:acount.api-us1.com/api/3/deals/3057/owner'],
                  },
                  scoreValues: {
                    type: 'string',
                    examples: ['https://:acount.api-us1.com/api/3/deals/3057/scoreValues'],
                  },
                  stage: {
                    type: 'string',
                    examples: ['https://:acount.api-us1.com/api/3/deals/3057/stage'],
                  },
                  tasks: {
                    type: 'string',
                    examples: ['https://:acount.api-us1.com/api/3/deals/3057/tasks'],
                  },
                  dealCustomFieldData: {
                    type: 'string',
                    examples: ['https://:acount.api-us1.com/api/3/deals/3057/dealCustomFieldData'],
                  },
                },
              },
              id: { type: 'string', examples: ['3057'] },
              isDisabled: { type: 'boolean', default: true, examples: [false] },
              account: { type: 'string', examples: ['5'] },
              customerAccount: { type: 'string', examples: ['5'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for Subscriber with id 100'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveContactDealsList = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the contact',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        contacts: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              cdate: { type: 'string', examples: ['2021-11-28T00:00:00-06:00'] },
              email: { type: 'string', examples: ['john.doe@example.com'] },
              phone: { type: 'string', examples: ['555-555-5555'] },
              firstName: { type: 'string', examples: ['John'] },
              lastName: { type: 'string', examples: ['Doe'] },
              orgid: { type: 'string', examples: ['XX'] },
              orgname: { type: 'string', examples: ['Opulence Time'] },
              segmentio_id: { type: 'string', examples: [''] },
              bounced_hard: { type: 'string', examples: ['0'] },
              bounced_soft: { type: 'string', examples: ['0'] },
              bounced_date: { type: 'string', examples: ['0000-00-00'] },
              ip: { type: 'string', examples: ['0'] },
              ua: { type: 'string', examples: [''] },
              hash: { type: 'string', examples: ['43fa9ikvd23cbc59915f89asd234gsda27b33'] },
              socialdata_lastcheck: { type: 'string', examples: ['0000-00-00 00:00:00'] },
              email_local: { type: 'string', examples: [''] },
              email_domain: { type: 'string', examples: [''] },
              sentcnt: { type: 'string', examples: ['0'] },
              rating_tstamp: { type: 'string', examples: ['0000-00-00'] },
              gravatar: { type: 'string', examples: ['0'] },
              deleted: { type: 'string', examples: ['0'] },
              anonymized: { type: 'string', examples: ['0'] },
              adate: { type: 'string', examples: ['2021-11-28T00:00:00-06:00'] },
              udate: { type: 'string', examples: ['2021-11-28T00:00:00-06:00'] },
              edate: { type: 'string', examples: ['2021-12-20T06:23:31-06:00'] },
              deleted_at: { type: 'string', examples: ['0000-00-00 00:00:00'] },
              created_utc_timestamp: { type: 'string', examples: ['2021-11-28 00:00:00'] },
              updated_utc_timestamp: { type: 'string', examples: ['2022-01-25 16:26:37'] },
              created_timestamp: { type: 'string', examples: ['2021-11-28 00:00:00'] },
              updated_timestamp: { type: 'string', examples: ['2021-12-09 00:00:00'] },
              created_by: { type: 'string', examples: ['0'] },
              updated_by: { type: 'string', examples: ['0'] },
              email_empty: { type: 'boolean', default: true, examples: [false] },
              mpp_tracking: { type: 'string', examples: ['0'] },
              links: {
                type: 'object',
                properties: {
                  bounceLogs: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/contacts/1107/bounceLogs'],
                  },
                  contactAutomations: {
                    type: 'string',
                    examples: [
                      'https://:account.api-us1.com/api/3/contacts/1107/contactAutomations?limit=1000&orders%5Blastdate%5D=DESC',
                    ],
                  },
                  contactData: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/contacts/1107/contactData'],
                  },
                  contactGoals: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/contacts/1107/contactGoals'],
                  },
                  contactLists: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/contacts/1107/contactLists'],
                  },
                  contactLogs: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/contacts/1107/contactLogs'],
                  },
                  contactTags: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/contacts/1107/contactTags'],
                  },
                  contactDeals: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/contacts/1107/contactDeals'],
                  },
                  deals: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/contacts/1107/deals'],
                  },
                  fieldValues: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/contacts/1107/fieldValues'],
                  },
                  geoIps: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/contacts/1107/geoIps'],
                  },
                  notes: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/contacts/1107/notes'],
                  },
                  organization: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/contacts/1107/organization'],
                  },
                  plusAppend: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/contacts/1107/plusAppend'],
                  },
                  trackingLogs: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/contacts/1107/trackingLogs'],
                  },
                  scoreValues: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/contacts/1107/scoreValues'],
                  },
                  accountContacts: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/contacts/1107/accountContacts'],
                  },
                  automationEntryCounts: {
                    type: 'string',
                    examples: [
                      'https://:account.api-us1.com/api/3/contacts/1107/automationEntryCounts',
                    ],
                  },
                },
              },
              id: { type: 'string', examples: ['XXXX'] },
              organization: { type: 'string', examples: ['XX'] },
            },
          },
        },
        deals: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              hash: { type: 'string', examples: ['dx60eh125'] },
              owner: { type: 'string', examples: ['8'] },
              contact: { type: 'string', examples: ['XXXX'] },
              organization: { type: 'string', examples: ['31'] },
              group: { type: 'string', examples: ['1'] },
              stage: { type: 'string', examples: ['1'] },
              title: { type: 'string', examples: ['Opulence Time'] },
              description: { type: 'string', examples: [''] },
              percent: { type: 'string', examples: ['0'] },
              cdate: { type: 'string', examples: ['2022-01-24T00:00:00-06:00'] },
              mdate: { type: 'string', examples: ['2022-01-25T00:00:00-06:00'] },
              nextdate: {},
              nexttaskid: { type: 'string', examples: ['0'] },
              value: { type: 'string', examples: ['7320163'] },
              currency: { type: 'string', examples: ['usd'] },
              winProbability: {},
              winProbabilityMdate: {},
              status: { type: 'string', examples: ['0'] },
              activitycount: { type: 'string', examples: ['24'] },
              nextdealid: { type: 'string', examples: ['4218'] },
              edate: { type: 'string', examples: ['2022-03-07 00:00:00'] },
              links: {
                type: 'object',
                properties: {
                  dealActivities: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/deals/4228/dealActivities'],
                  },
                  contact: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/deals/4228/contact'],
                  },
                  contactDeals: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/deals/4228/contactDeals'],
                  },
                  group: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/deals/4228/group'],
                  },
                  nextTask: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/deals/4228/nextTask'],
                  },
                  notes: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/deals/4228/notes'],
                  },
                  account: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/deals/4228/account'],
                  },
                  customerAccount: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/deals/4228/customerAccount'],
                  },
                  organization: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/deals/4228/organization'],
                  },
                  owner: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/deals/4228/owner'],
                  },
                  scoreValues: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/deals/4228/scoreValues'],
                  },
                  stage: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/deals/4228/stage'],
                  },
                  tasks: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/deals/4228/tasks'],
                  },
                  dealCustomFieldData: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/deals/4228/dealCustomFieldData'],
                  },
                },
              },
              id: { type: 'string', examples: ['4228'] },
              isDisabled: { type: 'boolean', default: true, examples: [false] },
              nextTask: {},
              account: { type: 'string', examples: ['31'] },
              customerAccount: { type: 'string', examples: ['31'] },
            },
          },
        },
        contactDeals: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              deal: { type: 'string', examples: ['4228'] },
              contact: { type: 'string', examples: ['5'] },
              role: {},
              cdate: { type: 'string', examples: ['2021-10-22T13:16:27-05:00'] },
              created_timestamp: { type: 'string', examples: ['2021-10-22 13:16:27'] },
              updated_timestamp: { type: 'string', examples: ['2021-10-22 13:16:27'] },
              created_by: {},
              updated_by: {},
              links: {
                type: 'object',
                properties: {
                  deal: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/contactDeals/4248/deal'],
                  },
                  contact: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/contactDeals/4248/contact'],
                  },
                  role: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/contactDeals/4248/role'],
                  },
                },
              },
              id: { type: 'string', examples: ['4248'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for Subscriber with id 100'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveContactFieldValues = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the contact',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        fieldValues: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              contact: { type: 'string', examples: ['5'] },
              field: { type: 'string', examples: ['1'] },
              value: { type: 'string', examples: ['United States'] },
              cdate: { type: 'string', examples: ['2021-05-12T14:19:38-05:00'] },
              udate: { type: 'string', examples: ['2021-05-12T14:54:57-05:00'] },
              created_by: { type: 'string', examples: ['0'] },
              updated_by: { type: 'string', examples: ['0'] },
              links: {
                type: 'object',
                properties: {
                  owner: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/fieldValues/1/owner'],
                  },
                  field: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/fieldValues/1/field'],
                  },
                },
              },
              id: { type: 'string', examples: ['1'] },
              owner: { type: 'string', examples: ['5'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for Subscriber with id 100'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveContactGeoIps = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the contact',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        geoIps: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              contact: { type: 'string', examples: ['49'] },
              campaignid: { type: 'string', examples: ['11'] },
              messageid: { type: 'string', examples: ['12'] },
              geoaddrid: { type: 'string', examples: ['2'] },
              ip4: { type: 'string', examples: ['1123637995'] },
              tstamp: { type: 'string', examples: ['2021-05-12T11:10:06-05:00'] },
              links: {
                type: 'object',
                properties: {
                  geoAddress: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/geoIps/4/geoAddress'],
                  },
                },
              },
              id: { type: 'string', examples: ['4'] },
              geoAddress: { type: 'string', examples: ['2'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for Subscriber with id 100'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveContactGoals = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the contact',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        contactGoals: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              goalid: { type: 'string', examples: ['3'] },
              seriesid: { type: 'string', examples: ['2'] },
              subscriberid: { type: 'string', examples: ['5'] },
              subscriberseriesid: { type: 'string', examples: ['83'] },
              timespan: { type: 'string', examples: ['1'] },
              tstamp: { type: 'string', examples: ['2021-05-12T14:55:19-05:00'] },
              links: {
                type: 'object',
                properties: {
                  goal: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/contactGoals/3/goal'],
                  },
                  automation: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/contactGoals/3/automation'],
                  },
                  contact: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/contactGoals/3/contact'],
                  },
                  contactAutomation: {
                    type: 'string',
                    examples: [
                      'https://:account.api-us1.com/api/3/contactGoals/3/contactAutomation',
                    ],
                  },
                  contactGoalLists: {
                    type: 'string',
                    examples: [
                      'https://:account.api-us1.com/api/3/contactGoals/3/contactGoalLists',
                    ],
                  },
                  contactGoalTags: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/contactGoals/3/contactGoalTags'],
                  },
                },
              },
              id: { type: 'string', examples: ['3'] },
              goal: { type: 'string', examples: ['3'] },
              automation: { type: 'string', examples: ['2'] },
              contact: { type: 'string', examples: ['5'] },
              contactAutomation: { type: 'string', examples: ['83'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for Subscriber with id 121'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveContactListMemberships = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the contact',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        contactLists: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              contact: { type: 'string', examples: ['19'] },
              list: { type: 'string', examples: ['1'] },
              form: {},
              seriesid: { type: 'string', examples: ['0'] },
              sdate: { type: 'string', examples: ['2021-04-08T11:17:44-05:00'] },
              udate: { type: 'string', examples: ['2021-05-12T11:10:06-05:00'] },
              status: { type: 'string', examples: ['3'] },
              responder: { type: 'string', examples: ['1'] },
              sync: { type: 'string', examples: ['1'] },
              unsubreason: {},
              campaign: {},
              message: {},
              first_name: { type: 'string', examples: ['John'] },
              last_name: { type: 'string', examples: ['Doe'] },
              ip4Sub: { type: 'string', examples: ['XXXXXXXXXX'] },
              sourceid: { type: 'string', examples: ['1'] },
              autosyncLog: {},
              ip4_last: { type: 'string', examples: ['0'] },
              ip4Unsub: { type: 'string', examples: ['0'] },
              created_timestamp: { type: 'string', examples: ['2021-04-08 11:17:44'] },
              updated_timestamp: { type: 'string', examples: ['2021-05-12 11:10:06'] },
              created_by: {},
              updated_by: {},
              unsubscribeAutomation: {},
              links: {
                type: 'object',
                properties: {
                  automation: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/contactLists/19/automation'],
                  },
                  list: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/contactLists/19/list'],
                  },
                  contact: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/contactLists/19/contact'],
                  },
                  form: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/contactLists/19/form'],
                  },
                  autosyncLog: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/contactLists/19/autosyncLog'],
                  },
                  campaign: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/contactLists/19/campaign'],
                  },
                  unsubscribeAutomation: {
                    type: 'string',
                    examples: [
                      'https://:account.api-us1.com/api/3/contactLists/19/unsubscribeAutomation',
                    ],
                  },
                  message: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/contactLists/19/message'],
                  },
                },
              },
              id: { type: 'string', examples: ['19'] },
              automation: {},
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for Subscriber with id 121'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveContactLogs = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the contact',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: { contactLogs: { type: 'array', items: {} } },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for Subscriber with id 100'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveContactNotes = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the contact',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        notes: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              relid: { type: 'string', examples: ['7'] },
              reltype: { type: 'string', examples: ['Subscriber'] },
              userid: { type: 'string', examples: ['1'] },
              is_draft: { type: 'string', examples: ['0'] },
              cdate: { type: 'string', examples: ['2022-02-04T14:21:28-06:00'] },
              mdate: { type: 'string', examples: ['2022-02-04T14:21:28-06:00'] },
              note: { type: 'string', examples: ['Here is a note!'] },
              links: {
                type: 'object',
                properties: {
                  activities: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/notes/1/activities'],
                  },
                  user: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/notes/1/user'],
                  },
                  mentions: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/notes/1/mentions'],
                  },
                  notes: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/notes/1/notes'],
                  },
                  owner: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/notes/1/owner'],
                  },
                },
              },
              id: { type: 'string', examples: ['1'] },
              user: { type: 'string', examples: ['1'] },
              owner: {
                type: 'object',
                properties: {
                  type: { type: 'string', examples: ['contact'] },
                  id: { type: 'string', examples: ['7'] },
                },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for Subscriber with id 100'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveContactOrganization = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the contact',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        organization: {
          type: 'object',
          properties: {
            name: { type: 'string', examples: ['M Corp'] },
            created_timestamp: { type: 'string', examples: ['2021-05-21T16:15:47-05:00'] },
            updated_timestamp: { type: 'string', examples: ['2021-08-24T06:28:56-05:00'] },
            userid: { type: 'string', examples: ['1'] },
            id: { type: 'string', examples: ['9'] },
            owner: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for Subscriber with id 100'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveContactPlusAppend = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the contact',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        plusAppend: {
          type: 'object',
          properties: {
            contact: { type: 'string', examples: ['3'] },
            last_updated_rapleaf: {},
            last_updated_fliptop: {},
            last_updated_fullcontact: {},
            imageUrl: {
              type: 'string',
              examples: [
                'https://img.fullcontact.com/static/ece148ad832u8f2c66f23442_3e5923f243234234cec57395be553465p96u9345u69u3456354345634',
              ],
            },
            membershipsFacebook: { type: 'string', examples: [''] },
            membershipsTwitter: {
              type: 'string',
              examples: ['https://twitter.com/twitterHandleHere'],
            },
            membershipsLinkedin: { type: 'string', examples: [''] },
            links: {
              type: 'object',
              properties: {
                contact: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/plusAppends/2/contact'],
                },
              },
            },
            id: { type: 'string', examples: ['2'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for Subscriber with id 100'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveContactTrackingLogs = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the contact',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: { trackingLogs: { type: 'array', items: {} } },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for Subscriber with id 100'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveEventTrackingStatus = {
  response: { '200': { $schema: 'https://json-schema.org/draft/2020-12/schema#' } },
} as const;
const RetrieveFields = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          limit: {
            type: 'integer',
            format: 'int32',
            default: 100,
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'The number of fields returned per request.',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        fieldOptions: { type: 'array', items: {} },
        fieldRels: { type: 'array', items: {} },
        fields: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              title: { type: 'string', examples: ['Another Test Title'] },
              descript: {},
              type: { type: 'string', examples: [''] },
              isrequired: { type: 'string', examples: ['0'] },
              perstag: { type: 'string', examples: ['ANOTHER_TEST_TITLE'] },
              defval: {},
              show_in_list: { type: 'string', examples: ['0'] },
              rows: { type: 'string', examples: ['0'] },
              cols: { type: 'string', examples: ['0'] },
              visible: { type: 'string', examples: ['1'] },
              service: { type: 'string', examples: [''] },
              ordernum: { type: 'string', examples: ['2'] },
              cdate: { type: 'string', examples: ['2018-11-15T21:43:38-06:00'] },
              udate: { type: 'string', examples: ['2018-11-15T21:43:38-06:00'] },
              options: { type: 'array', items: {} },
              relations: { type: 'array', items: {} },
              links: {
                type: 'object',
                properties: {
                  options: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/fields/2/options'],
                  },
                  relations: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/fields/2/relations'],
                  },
                },
              },
              id: { type: 'string', examples: ['2'] },
            },
          },
        },
        meta: { type: 'object', properties: { total: { type: 'string', examples: ['2'] } } },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveForms = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the form to retrieve',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        form: {
          type: 'object',
          properties: {
            name: { type: 'string', examples: ['Test Form'] },
            action: { type: 'string', examples: [''] },
            actiondata: {
              type: 'object',
              properties: {
                actions: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      type: { type: 'string', examples: ['email-results'] },
                      email: { type: 'string', examples: ['johndoe@example.com'] },
                      fromname: { type: 'string', examples: ['John Doe'] },
                      fromemail: { type: 'string', examples: ['johndoe@example.com'] },
                      subject: { type: 'string', examples: ['Form submission results'] },
                    },
                  },
                },
              },
            },
            submit: { type: 'string', examples: ['show-thank-you'] },
            submitdata: { type: 'object', properties: { url: { type: 'string', examples: [''] } } },
            url: { type: 'string', examples: [''] },
            layout: { type: 'string', examples: ['inline-form'] },
            title: { type: 'string', examples: [''] },
            body: { type: 'string', examples: [''] },
            button: { type: 'string', examples: ['Submit'] },
            thanks: { type: 'string', examples: ['Thanks for signing up!'] },
            style: {
              type: 'object',
              properties: {
                background: { type: 'string', examples: ['FFFFFF'] },
                dark: { type: 'boolean', default: true, examples: [true] },
                fontcolor: { type: 'string', examples: ['000000'] },
                layout: { type: 'string', examples: ['normal'] },
                border: {
                  type: 'object',
                  properties: {
                    width: { type: 'integer', default: 0, examples: [0] },
                    style: { type: 'string', examples: ['solid'] },
                    color: { type: 'string', examples: ['B0B0B0'] },
                    radius: { type: 'integer', default: 0, examples: [0] },
                  },
                },
                width: { type: 'integer', default: 0, examples: [500] },
                ac_branding: { type: 'boolean', default: true, examples: [true] },
                button: {
                  type: 'object',
                  properties: {
                    padding: { type: 'integer', default: 0, examples: [10] },
                    background: { type: 'string', examples: ['333333'] },
                    fontcolor: { type: 'string', examples: ['FFFFFF'] },
                    border: {
                      type: 'object',
                      properties: {
                        radius: { type: 'integer', default: 0, examples: [4] },
                        color: { type: 'string', examples: ['333333'] },
                        style: { type: 'string', examples: ['solid'] },
                        width: { type: 'integer', default: 0, examples: [0] },
                      },
                    },
                  },
                },
                customcss: { type: 'string', examples: [''] },
              },
            },
            options: {
              type: 'object',
              properties: {
                blanks_overwrite: { type: 'boolean', default: true, examples: [true] },
                confaction: { type: 'string', examples: ['show-message'] },
              },
            },
            cfields: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  type: { type: 'string', examples: ['header'] },
                  header: { type: 'string', examples: ['Contact Us'] },
                  class: { type: 'string', examples: ['_x29498744'] },
                  required_options: { type: 'object', properties: {} },
                },
              },
            },
            parentformid: { type: 'string', examples: ['0'] },
            userid: { type: 'string', examples: ['1'] },
            addressid: { type: 'string', examples: ['0'] },
            cdate: { type: 'string', examples: ['2018-10-07T09:12:46-06:00'] },
            udate: { type: 'string', examples: ['2018-10-12T11:18:52-06:00'] },
            entries: { type: 'string', examples: ['0'] },
            aid: {},
            links: {
              type: 'object',
              properties: {
                address: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/forms/13/address'],
                },
              },
            },
            id: { type: 'string', examples: ['13'] },
            address: {},
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '403': {
      type: 'object',
      properties: { message: { type: 'string', examples: ['No Result found for Form with id 7'] } },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveInaccessiblePipelinesByUser = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          'dealIds[]': {
            type: 'array',
            items: { type: 'integer', format: 'int32', minimum: -2147483648, maximum: 2147483647 },
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Deal Ids',
          },
          userId: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "User's Id",
          },
        },
        required: ['dealIds[]', 'userId'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        dealGroups: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              title: { type: 'string', examples: ['p1'] },
              currency: { type: 'string', examples: ['usd'] },
              autoassign: { type: 'string', examples: ['0'] },
              allusers: { type: 'string', examples: ['1'] },
              allgroups: { type: 'string', examples: ['0'] },
              win_probability_initialize_date: {
                type: 'string',
                examples: ['0000-00-00 00:00:00'],
              },
              cdate: { type: 'string', examples: ['2021-08-10T12:16:06-05:00'] },
              udate: { type: 'string', examples: ['2021-11-09T10:09:25-06:00'] },
              links: {
                type: 'object',
                properties: {
                  stages: {
                    type: 'string',
                    examples: ['http://hosted.localdev/api/3/dealGroups/1/stages'],
                  },
                  dealGroupUsers: {
                    type: 'string',
                    examples: ['http://hosted.localdev/api/3/dealGroups/1/dealGroupUsers'],
                  },
                  dealGroupGroups: {
                    type: 'string',
                    examples: ['http://hosted.localdev/api/3/dealGroups/1/dealGroupGroups'],
                  },
                  winProbabilityFeatures: {
                    type: 'string',
                    examples: ['http://hosted.localdev/api/3/dealGroups/1/winProbabilityFeatures'],
                  },
                },
              },
              id: { type: 'string', examples: ['1'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '422': {
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              status: { type: 'integer', default: 0, examples: [422] },
              title: { type: 'string', examples: ['Invalid Input Parameter'] },
              detail: { type: 'string', examples: ['Parameter userId is required.'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveLinksAssociatedCampaign = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of campaign to retrieve Links for',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        links: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              campaignid: { type: 'string', examples: ['1'] },
              messageid: { type: 'string', examples: ['3'] },
              link: { type: 'string', examples: ['open'] },
              name: { type: 'string', examples: ['Read Tracker'] },
              ref: { type: 'string', examples: [''] },
              tracked: { type: 'string', examples: ['1'] },
              links: {
                type: 'object',
                properties: {
                  campaign: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/links/1/campaign'],
                  },
                  message: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/links/1/message'],
                  },
                },
              },
              id: { type: 'string', examples: ['1'] },
              campaign: { type: 'string', examples: ['1'] },
              message: { type: 'string', examples: ['3'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': { $schema: 'https://json-schema.org/draft/2020-12/schema#' },
  },
} as const;
const RetrieveSiteTrackingCode = {
  response: {
    '200': { $schema: 'https://json-schema.org/draft/2020-12/schema#' },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const RetrieveSiteTrackingStatus = {
  response: {
    '200': {
      type: 'object',
      properties: {
        siteTracking: {
          type: 'object',
          properties: { enabled: { type: 'boolean', default: true, examples: [true] } },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const SavedResponses = {
  body: {
    type: 'object',
    properties: {
      savedResponse: {
        properties: {
          title: {
            type: 'string',
            description: 'Title of the saved response being created',
            examples: ['Response Title'],
          },
          subject: {
            type: 'string',
            description: 'Subject of the saved response being created',
            examples: ['Response Subject'],
          },
          body: {
            type: 'string',
            description: 'Body of the saved response being created',
            examples: ['Response Body'],
          },
        },
        required: ['title', 'subject', 'body'],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '201': {
      type: 'object',
      properties: {
        savedResponse: {
          type: 'object',
          properties: {
            title: { type: 'string', examples: ['Response title'] },
            subject: { type: 'string', examples: ['Response subject'] },
            body: { type: 'string', examples: ['Response body'] },
            cdate: { type: 'string', examples: ['2018-11-16T02:50:54-06:00'] },
            links: {
              type: 'object',
              properties: {
                user: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/savedResponses/1/user'],
                },
                savedResponseCategorySavedResponse: {
                  type: 'string',
                  examples: [
                    'https://:account.api-us1.com/api/:version/savedResponses/1/savedResponseCategorySavedResponse',
                  ],
                },
              },
            },
            id: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '422': {
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              title: { type: 'string', examples: ['This field is required.'] },
              detail: { type: 'string', examples: [''] },
              code: { type: 'string', examples: ['field_missing'] },
              source: {
                type: 'object',
                properties: { pointer: { type: 'string', examples: ['/data/attributes/title'] } },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const SetConfig = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the config to edit',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        config: {
          type: 'object',
          properties: {
            keyname: { type: 'string', examples: ['pagination.users_index'] },
            section: { type: 'string', examples: [''] },
            item: { type: 'string', examples: [''] },
            userid: { type: 'string', examples: ['1'] },
            val: { type: 'string', examples: ['20'] },
            cdate: { type: 'string', examples: ['2018-08-08T13:38:38-05:00'] },
            udate: { type: 'string', examples: ['2018-09-20T14:07:07-05:00'] },
            links: {
              type: 'object',
              properties: {
                owner: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/configs/6/owner'],
                },
              },
            },
            id: { type: 'string', examples: ['6'] },
            owner: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for ConfigResult with id 100'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const SyncAContactsData = {
  body: {
    type: 'object',
    properties: {
      contact: {
        properties: {
          email: {
            type: 'string',
            description: 'Email address of the contact to sync',
            examples: ['jondoe@example.com'],
          },
          firstName: { type: 'string', examples: ['John'] },
          lastName: { type: 'string', examples: ['Doe'] },
          phone: { type: 'string', examples: ['7223224241'] },
          fieldValues: {
            type: 'array',
            description: "Contact's custom field values [{field, value}]",
            items: {},
          },
          orgid: {
            type: 'integer',
            description: '(Deprecated) Please use Account-Contact end points',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
          },
          deleted: { type: 'boolean', description: '(Deprecated) Please use the DELETE endpoint' },
        },
        required: ['email'],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '201': {
      type: 'object',
      properties: {
        fieldValues: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              contact: { type: 'string', examples: ['10'] },
              field: { type: 'string', examples: ['2'] },
              value: { type: 'string', examples: ['Albany'] },
              cdate: { type: 'string', examples: ['2022-04-14T10:03:23-05:00'] },
              udate: { type: 'string', examples: ['2022-04-14T10:03:23-05:00'] },
              created_by: {},
              updated_by: {},
              links: {
                type: 'object',
                properties: {
                  owner: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/fieldValues/14/owner'],
                  },
                  field: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/fieldValues/14/field'],
                  },
                },
              },
              id: { type: 'string', examples: ['14'] },
              owner: { type: 'string', examples: ['10'] },
            },
          },
        },
        contact: {
          type: 'object',
          properties: {
            email: { type: 'string', examples: ['johndoe@example.com'] },
            phone: { type: 'string', examples: ['7223224241'] },
            firstName: { type: 'string', examples: ['John'] },
            lastName: { type: 'string', examples: ['Doe'] },
            email_empty: { type: 'boolean', default: true, examples: [false] },
            cdate: { type: 'string', examples: ['2022-04-14T10:03:23-05:00'] },
            udate: { type: 'string', examples: ['2022-04-14T10:03:23-05:00'] },
            orgid: { type: 'string', examples: [''] },
            orgname: { type: 'string', examples: [''] },
            links: {
              type: 'object',
              properties: {
                bounceLogs: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/contacts/10/bounceLogs'],
                },
                contactAutomations: {
                  type: 'string',
                  examples: [
                    'https://:account.api-us1.com/api/3/contacts/10/contactAutomations?limit=1000&orders%5Blastdate%5D=DESC',
                  ],
                },
                contactData: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/contacts/10/contactData'],
                },
                contactGoals: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/contacts/10/contactGoals'],
                },
                contactLists: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/contacts/10/contactLists'],
                },
                contactLogs: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/contacts/10/contactLogs'],
                },
                contactTags: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/contacts/10/contactTags'],
                },
                contactDeals: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/contacts/10/contactDeals'],
                },
                deals: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/contacts/10/deals'],
                },
                fieldValues: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/contacts/10/fieldValues'],
                },
                geoIps: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/contacts/10/geoIps'],
                },
                notes: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/contacts/10/notes'],
                },
                organization: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/contacts/10/organization'],
                },
                plusAppend: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/contacts/10/plusAppend'],
                },
                trackingLogs: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/contacts/10/trackingLogs'],
                },
                scoreValues: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/contacts/10/scoreValues'],
                },
                accountContacts: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/contacts/10/accountContacts'],
                },
                automationEntryCounts: {
                  type: 'string',
                  examples: [
                    'https://:account.api-us1.com/api/3/contacts/10/automationEntryCounts',
                  ],
                },
              },
            },
            hash: { type: 'string', examples: ['75b8163f768dff1f0f7b5f69476b986a'] },
            fieldValues: { type: 'array', items: { type: 'string', examples: ['14'] } },
            id: { type: 'string', examples: ['10'] },
            organization: { type: 'string', examples: [''] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const UpdateAAccountNote = {
  body: {
    type: 'object',
    properties: {
      note: {
        properties: { note: { type: 'string', description: "Account note's content" } },
        required: ['note'],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Account's id to assign new note to",
          },
          noteid: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Account note's id to update",
          },
        },
        required: ['id', 'noteid'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        accounts: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              name: { type: 'string', examples: ['Example Account'] },
              accountUrl: { type: 'string', examples: ['https://www.example.url'] },
              createdTimestamp: { type: 'string', examples: ['2019-04-03T13:29:35-05:00'] },
              updatedTimestamp: { type: 'string', examples: ['2019-06-12T16:59:54-05:00'] },
              links: {
                type: 'object',
                properties: {
                  notes: {
                    type: 'string',
                    examples: ['https://hosted.localdev/api/3/accounts/1/notes'],
                  },
                },
              },
              id: { type: 'string', examples: ['1'] },
            },
          },
        },
        note: {
          type: 'object',
          properties: {
            cdate: { type: 'string', examples: ['2017-06-01T13:42:13-05:00'] },
            id: { type: 'string', examples: ['2'] },
            links: {
              type: 'object',
              properties: {
                activities: { type: 'string', examples: ['/api/3/notes/2/activities'] },
                mentions: { type: 'string', examples: ['/api/3/notes/2/mentions'] },
                notes: { type: 'string', examples: ['/api/3/notes/2/notes'] },
                owner: { type: 'string', examples: ['/api/3/notes/2/owner'] },
                user: { type: 'string', examples: ['/api/3/notes/2/user'] },
              },
            },
            mdate: { type: 'string', examples: ['2017-06-01T13:42:13-05:00'] },
            note: { type: 'string', examples: ['Update with more info'] },
            owner: {
              type: 'object',
              properties: {
                id: { type: 'string', examples: ['1'] },
                type: { type: 'string', examples: ['account'] },
              },
            },
            relid: { type: 'string', examples: ['1'] },
            reltype: { type: 'string', examples: ['CustomerAccount'] },
            user: { type: 'string', examples: ['1'] },
            userid: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const UpdateACalendarFeed = {
  body: {
    type: 'object',
    properties: {
      calendar: {
        properties: {
          title: {
            type: 'string',
            description: 'Title of the calendar feed',
            examples: ['Calendar Title'],
          },
          type: {
            type: 'string',
            description: "Possible Values: 'All', 'Deals', or 'Contacts'",
            examples: ['Deals'],
          },
          notification: {
            type: 'boolean',
            description: 'Whether or not this calendar has notifications',
          },
        },
        required: [],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          ':id': {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the calendar feed to update',
          },
        },
        required: [':id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        calendar: {
          type: 'object',
          properties: {
            userid: { type: 'string', examples: ['1'] },
            title: { type: 'string', examples: ['Calendar Title'] },
            type: { type: 'string', examples: ['Deals'] },
            token: { type: 'string', examples: ['5540950ac4ed4f11591db934b701aff8'] },
            notification: { type: 'integer', default: 0, examples: [0] },
            cdate: { type: 'string', examples: ['2018-11-15T22:26:35-06:00'] },
            mdate: { type: 'string', examples: ['2018-11-16T02:11:40-06:00'] },
            links: {
              type: 'object',
              properties: {
                calendarRels: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/calendars/1/calendarRels'],
                },
                calendarUsers: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/calendars/1/calendarUsers'],
                },
              },
            },
            id: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const UpdateAContactNew = {
  body: {
    type: 'object',
    properties: {
      contact: {
        properties: {
          email: {
            type: 'string',
            description: "Contact's email address",
            examples: ['johndoe@example.com'],
          },
          firstName: { type: 'string', description: "Contact's first name", examples: ['John'] },
          lastName: { type: 'string', description: "Contact's last name", examples: ['Doe'] },
          phone: { type: 'string', description: "Contact's phone number" },
          fieldValues: {
            type: 'array',
            description: "Contact's custom field values [{field, value}]",
            items: {},
          },
          deleted: {
            type: 'boolean',
            description: '(Deprecated) Please use the the Delete endpoint',
          },
          orgid: {
            type: 'integer',
            description: '(Deprecated) Please use Account-Contact end points',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
          },
        },
        required: [],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the contact to update',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        fieldValues: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              contact: { type: 'string', examples: ['113'] },
              field: { type: 'string', examples: ['1'] },
              value: { type: 'string', examples: ['The Value for First Field'] },
              cdate: { type: 'string', examples: ['2020-08-01T10:54:59-05:00'] },
              udate: { type: 'string', examples: ['2020-08-01T14:13:34-05:00'] },
              links: {
                type: 'object',
                properties: {
                  owner: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/fieldValues/11797/owner'],
                  },
                  field: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/fieldValues/11797/field'],
                  },
                },
              },
              id: { type: 'string', examples: ['11797'] },
              owner: { type: 'string', examples: ['113'] },
            },
          },
        },
        contact: {
          type: 'object',
          properties: {
            cdate: { type: 'string', examples: ['2018-09-28T13:50:41-05:00'] },
            email: { type: 'string', examples: ['johndoe@example.com'] },
            phone: { type: 'string', examples: [''] },
            firstName: { type: 'string', examples: ['John'] },
            lastName: { type: 'string', examples: ['Doe'] },
            orgid: { type: 'string', examples: ['0'] },
            segmentio_id: { type: 'string', examples: [''] },
            bounced_hard: { type: 'string', examples: ['0'] },
            bounced_soft: { type: 'string', examples: ['0'] },
            bounced_date: {},
            ip: { type: 'string', examples: ['0'] },
            ua: {},
            hash: { type: 'string', examples: ['8309146b50af1ed5f9cb40c7465a0315'] },
            socialdata_lastcheck: {},
            email_local: { type: 'string', examples: [''] },
            email_domain: { type: 'string', examples: [''] },
            sentcnt: { type: 'string', examples: ['0'] },
            rating_tstamp: {},
            gravatar: { type: 'string', examples: ['0'] },
            deleted: { type: 'string', examples: ['0'] },
            anonymized: { type: 'string', examples: ['0'] },
            adate: {},
            udate: { type: 'string', examples: ['2018-09-28T13:55:59-05:00'] },
            edate: {},
            deleted_at: {},
            created_utc_timestamp: { type: 'string', examples: ['2018-09-28 13:50:41'] },
            updated_utc_timestamp: { type: 'string', examples: ['2018-09-28 13:50:41'] },
            links: {
              type: 'object',
              properties: {
                bounceLogs: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/contacts/113/bounceLogs'],
                },
                contactAutomations: {
                  type: 'string',
                  examples: [
                    'https://:account.api-us1.com/api/:version/contacts/113/contactAutomations',
                  ],
                },
                contactData: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/contacts/113/contactData'],
                },
                contactGoals: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/contacts/113/contactGoals'],
                },
                contactLists: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/contacts/113/contactLists'],
                },
                contactLogs: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/contacts/113/contactLogs'],
                },
                contactTags: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/contacts/113/contactTags'],
                },
                contactDeals: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/contacts/113/contactDeals'],
                },
                deals: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/contacts/113/deals'],
                },
                fieldValues: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/contacts/113/fieldValues'],
                },
                geoIps: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/contacts/113/geoIps'],
                },
                notes: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/contacts/113/notes'],
                },
                organization: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/contacts/113/organization'],
                },
                plusAppend: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/contacts/113/plusAppend'],
                },
                trackingLogs: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/contacts/113/trackingLogs'],
                },
                scoreValues: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/contacts/113/scoreValues'],
                },
              },
            },
            id: { type: 'string', examples: ['113'] },
            organization: {},
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for Subscriber with id 1'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const UpdateACustomDealFieldMeta = {
  body: {
    type: 'object',
    properties: {
      dealCustomFieldMetum: {
        properties: {
          fieldLabel: { type: 'string', description: 'Name of the field', examples: ['New Title'] },
          fieldOptions: {
            type: 'array',
            description:
              'Options for the field. Only necessary if field_type is dropdown, multiselect, radio, or checkbox.',
            items: { type: 'string' },
          },
          fieldDefault: {
            type: 'string',
            description: 'Default value of the field',
            examples: ['Default Text'],
          },
          isFormVisible: {
            type: 'boolean',
            description: 'Whether or not the field is visible on forms',
            examples: [1],
          },
          displayOrder: {
            type: 'integer',
            description: 'Order for displaying the field on Manage Fields page and deal profiles',
            format: 'int32',
            examples: [1],
            minimum: -2147483648,
            maximum: 2147483647,
          },
        },
        required: [],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the custom field to update',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        dealCustomFieldMetum: {
          type: 'object',
          properties: {
            id: { type: 'string', examples: ['1'] },
            fieldLabel: { type: 'string', examples: ['New Title'] },
            fieldType: { type: 'string', examples: ['text'] },
            fieldOptions: {},
            fieldDefault: { type: 'string', examples: ['Default Text'] },
            isFormVisible: { type: 'integer', default: 0, examples: [1] },
            isRequired: { type: 'integer', default: 0, examples: [0] },
            displayOrder: { type: 'integer', default: 0, examples: [1] },
            createdTimestamp: { type: 'string', examples: ['2018-10-22 19:57:37'] },
            updatedTimestamp: { type: 'string', examples: ['2018-10-22 20:04:21'] },
            links: {
              type: 'object',
              properties: {
                dealCustomFieldData: {
                  type: 'string',
                  examples: [
                    'https://:account.api-us1.com/api/:version/dealCustomFieldMeta/1/dealCustomFieldData',
                  ],
                },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              status: { type: 'integer', default: 0, examples: [404] },
              title: { type: 'string', examples: ['Not Found'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const UpdateACustomDealFieldValue = {
  body: {
    type: 'object',
    properties: {
      dealCustomFieldDatum: {
        properties: {
          fieldValue: { type: 'string', description: 'Values for text', examples: ['New title'] },
          fieldCurrency: {
            type: 'string',
            description: 'Currency code for the `currency` value',
            default: 'Default Currency for Field',
          },
        },
        required: [],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the custom fields value to update',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        dealCustomFieldDatum: {
          type: 'object',
          properties: {
            id: { type: 'string', examples: ['1'] },
            dealCustomFieldMetumId: { type: 'integer', default: 0, examples: [5] },
            dealId: { type: 'integer', default: 0, examples: [2] },
            customFieldId: { type: 'integer', default: 0, examples: [5] },
            createdTimestamp: { type: 'string', examples: ['2018-10-29 20:40:38'] },
            updatedTimestamp: { type: 'string', examples: ['2018-11-06 02:21:36'] },
            fieldValue: { type: 'string', examples: ['New title'] },
            links: {
              type: 'object',
              properties: {
                deal: {
                  type: 'string',
                  examples: [
                    'https://:account.api-us1.com/api/:version/dealCustomFieldData/1/deal',
                  ],
                },
                dealCustomFieldMetum: {
                  type: 'string',
                  examples: [
                    'https://:account.api-us1.com/api/:version/dealCustomFieldData/1/dealCustomFieldMetum',
                  ],
                },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              status: { type: 'integer', default: 0, examples: [404] },
              title: { type: 'string', examples: ['Not Found'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '422': {
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              detail: {
                type: 'string',
                examples: [
                  'The custom field value could not be saved to the custom field of type `number`.',
                ],
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const UpdateACustomField = {
  body: {
    type: 'object',
    properties: {
      accountCustomFieldMetum: {
        properties: {
          fieldLabel: { type: 'string', description: 'Name of the field', examples: ['New Title'] },
          fieldOptions: {
            type: 'array',
            description:
              'Options for the field. Only necessary if field_type is dropdown, multiselect, radio, or checkbox.',
            items: { type: 'string' },
          },
          fieldDefault: {
            type: 'string',
            description: 'Default value of the field',
            examples: ['Default Text'],
          },
          isFormVisible: {
            type: 'boolean',
            description: 'Whether or not the field is visible on forms',
            examples: [1],
          },
          displayOrder: {
            type: 'integer',
            description: 'Order for displaying the field on Manage Fields page and deal profiles',
            format: 'int32',
            examples: [1],
            minimum: -2147483648,
            maximum: 2147483647,
          },
        },
        required: [],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the custom field to update',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        accountCustomFieldMetum: {
          type: 'object',
          properties: {
            id: { type: 'string', examples: ['1'] },
            fieldLabel: { type: 'string', examples: ['New Title'] },
            fieldType: { type: 'string', examples: ['text'] },
            fieldOptions: {},
            fieldDefault: { type: 'string', examples: ['Default Text'] },
            isFormVisible: { type: 'integer', default: 0, examples: [1] },
            isRequired: { type: 'integer', default: 0, examples: [1] },
            displayOrder: { type: 'integer', default: 0, examples: [1] },
            createdTimestamp: { type: 'string', examples: ['2018-10-22 19:57:37'] },
            updatedTimestamp: { type: 'string', examples: ['2018-10-22 20:04:21'] },
            links: {
              type: 'object',
              properties: {
                accountCustomFieldData: {
                  type: 'string',
                  examples: [
                    'https://:account.api-us1.com/api/:version/accountCustomFieldMeta/1/accountCustomFieldData',
                  ],
                },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              status: { type: 'integer', default: 0, examples: [404] },
              title: { type: 'string', examples: ['Not Found'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const UpdateACustomFieldValue = {
  body: {
    type: 'object',
    properties: {
      accountCustomFieldDatum: {
        properties: {
          fieldValue: { type: 'string', description: 'Values for text', examples: ['New title'] },
          fieldCurrency: {
            type: 'string',
            description: 'Currency code for the `currency` value',
            default: 'Default Currency for Field',
          },
        },
        required: [],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the custom fields value to update',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        accountCustomFieldDatum: {
          type: 'object',
          properties: {
            id: { type: 'string', examples: ['1'] },
            accountId: { type: 'integer', default: 0, examples: [2] },
            customFieldId: { type: 'integer', default: 0, examples: [5] },
            createdTimestamp: { type: 'string', examples: ['2018-10-29 20:40:38'] },
            updatedTimestamp: { type: 'string', examples: ['2018-11-06 02:21:36'] },
            fieldValue: { type: 'string', examples: ['New title'] },
            links: {
              type: 'object',
              properties: {
                account: {
                  type: 'string',
                  examples: [
                    'https://:account.api-us1.com/api/:version/accountCustomFieldData/1/account',
                  ],
                },
                accountCustomFieldMetum: {
                  type: 'string',
                  examples: [
                    'https://:account.api-us1.com/api/:version/accountCustomFieldData/1/accountCustomFieldMetum',
                  ],
                },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              status: { type: 'integer', default: 0, examples: [404] },
              title: { type: 'string', examples: ['Not Found'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const UpdateACustomFieldValueForContact = {
  body: {
    type: 'object',
    properties: {
      fieldValue: {
        properties: {
          contact: {
            type: 'string',
            description: "ID of the contact whose field value you're updating",
            examples: [4],
          },
          field: {
            type: 'string',
            description: "ID of the custom field whose value you're updating for the contact",
            examples: [24],
          },
          value: {
            type: 'string',
            description: "Value for the field that you're updating",
            examples: ['Blue'],
          },
        },
        required: ['contact', 'field', 'value'],
        type: 'object',
      },
      useDefaults: {
        type: 'boolean',
        description:
          'If true, this will populate the missing required fields for this contact with default values',
        default: false,
        examples: [true],
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the fieldValue to update',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        contacts: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              cdate: { type: 'string', examples: ['2018-08-06T16:56:43-05:00'] },
              email: { type: 'string', examples: ['johndoe@example.com'] },
              phone: { type: 'string', examples: [''] },
              firstName: { type: 'string', examples: ['John'] },
              lastName: { type: 'string', examples: ['Doe'] },
              orgid: { type: 'string', examples: ['0'] },
              segmentio_id: { type: 'string', examples: [''] },
              bounced_hard: { type: 'string', examples: ['0'] },
              bounced_soft: { type: 'string', examples: ['0'] },
              bounced_date: { type: 'string', examples: ['0000-00-00'] },
              ip: { type: 'string', examples: ['4'] },
              ua: { type: 'string', examples: [''] },
              hash: { type: 'string', examples: ['867d56644591991f6b50e1cb913f038b'] },
              socialdata_lastcheck: { type: 'string', examples: ['0000-00-00 00:00:00'] },
              email_local: { type: 'string', examples: [''] },
              email_domain: { type: 'string', examples: [''] },
              sentcnt: { type: 'string', examples: ['0'] },
              rating_tstamp: { type: 'string', examples: ['0000-00-00'] },
              gravatar: { type: 'string', examples: ['0'] },
              deleted: { type: 'string', examples: ['0'] },
              anonymized: { type: 'string', examples: ['0'] },
              adate: { type: 'string', examples: ['2018-10-24T13:33:06-05:00'] },
              udate: { type: 'string', examples: ['2018-10-24T13:33:11-05:00'] },
              edate: { type: 'string', examples: ['2018-10-24T13:33:07-05:00'] },
              deleted_at: { type: 'string', examples: ['0000-00-00 00:00:00'] },
              created_utc_timestamp: { type: 'string', examples: ['2018-09-21 12:04:48'] },
              updated_utc_timestamp: { type: 'string', examples: ['2018-10-24 13:33:11'] },
              links: {
                type: 'object',
                properties: {
                  bounceLogs: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/24/bounceLogs'],
                  },
                  contactAutomations: {
                    type: 'string',
                    examples: [
                      'https://:account.api-us1.com/api/:version/contacts/24/contactAutomations',
                    ],
                  },
                  contactData: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/24/contactData'],
                  },
                  contactGoals: {
                    type: 'string',
                    examples: [
                      'https://:account.api-us1.com/api/:version/contacts/24/contactGoals',
                    ],
                  },
                  contactLists: {
                    type: 'string',
                    examples: [
                      'https://:account.api-us1.com/api/:version/contacts/24/contactLists',
                    ],
                  },
                  contactLogs: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/24/contactLogs'],
                  },
                  contactTags: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/24/contactTags'],
                  },
                  contactDeals: {
                    type: 'string',
                    examples: [
                      'https://:account.api-us1.com/api/:version/contacts/24/contactDeals',
                    ],
                  },
                  deals: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/24/deals'],
                  },
                  fieldValues: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/24/fieldValues'],
                  },
                  geoIps: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/24/geoIps'],
                  },
                  notes: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/24/notes'],
                  },
                  organization: {
                    type: 'string',
                    examples: [
                      'https://:account.api-us1.com/api/:version/contacts/24/organization',
                    ],
                  },
                  plusAppend: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/24/plusAppend'],
                  },
                  trackingLogs: {
                    type: 'string',
                    examples: [
                      'https://:account.api-us1.com/api/:version/contacts/24/trackingLogs',
                    ],
                  },
                  scoreValues: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/24/scoreValues'],
                  },
                },
              },
              id: { type: 'string', examples: ['24'] },
              organization: {},
            },
          },
        },
        fieldValue: {
          type: 'object',
          properties: {
            contact: { type: 'integer', default: 0, examples: [4] },
            field: { type: 'integer', default: 0, examples: [24] },
            value: { type: 'string', examples: ['Blue'] },
            cdate: { type: 'string', examples: ['2018-10-24T13:32:52-05:00'] },
            udate: { type: 'string', examples: ['2018-10-24T13:33:11-05:00'] },
            links: {
              type: 'object',
              properties: {
                owner: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/fieldValues/15/owner'],
                },
                field: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/fieldValues/15/field'],
                },
              },
            },
            owner: { type: 'integer', default: 0, examples: [4] },
            id: { type: 'string', examples: ['15'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const UpdateADealNew = {
  body: {
    type: 'object',
    properties: {
      deal: {
        description: 'deal.description',
        properties: {
          title: { type: 'string', description: "Deal's title.", examples: ['AC Deal'] },
          description: {
            type: 'string',
            description: "Deal's description",
            examples: ['This deal is an important deal'],
          },
          account: { type: 'string', description: "Deal's account id", examples: ['45'] },
          contact: { type: 'string', description: "Deal's primary contact id.", examples: ['51'] },
          value: {
            type: 'integer',
            description:
              "Deal's value in cents. (i.e. $456.78 => 45678). Must be greater than or equal to zero.",
            format: 'int32',
            examples: [45600],
            minimum: -2147483648,
            maximum: 2147483647,
          },
          currency: {
            type: 'string',
            description: "Deal's currency in 3-digit ISO format, lowercased.",
            examples: ['usd'],
          },
          group: {
            type: 'string',
            description:
              "Deal's pipeline id. Deal's stage or `deal.stage` should belong to `deal.group`.",
            examples: ['1'],
          },
          stage: {
            type: 'string',
            description:
              "Deal's stage id. `deal.stage` should belong to Deal's pipeline or `deal.group`.",
            default: '0',
            examples: ['1'],
          },
          owner: { type: 'string', description: "Deal's owner id.", examples: ['1'] },
          percent: {
            type: 'integer',
            description: "Deal's percentage.",
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
          },
          status: {
            type: 'integer',
            description: 'Deal\'s status (0="open", 1="won", or 2="lost")',
            default: 0,
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
          },
          fields: {
            type: 'array',
            description:
              "Deal's custom field values `{customFieldId: string, fieldValue: string, fieldCurrency?:string}[]`",
            items: {
              properties: {
                customFieldId: {
                  type: 'integer',
                  description: 'Field ID, ID of the Custom Field Meta Data',
                  format: 'int32',
                  examples: [1],
                  minimum: -2147483648,
                  maximum: 2147483647,
                },
                fieldValue: {
                  type: 'string',
                  description:
                    'Updated field value. For `currency` field, this needs to be in cents not dollars (or 100 x Base Unit).',
                  examples: ['First field value'],
                },
                fieldCurrency: {
                  type: 'string',
                  description:
                    'Required only for the `currency` field type. The three letter currency code for the currency value',
                },
              },
              required: ['customFieldId', 'fieldValue'],
              type: 'object',
            },
          },
        },
        required: [],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "The Deal's id",
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': { $schema: 'https://json-schema.org/draft/2020-12/schema#' },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const UpdateADealNote = {
  body: {
    type: 'object',
    properties: {
      note: {
        properties: { note: { type: 'string', description: "Deal note's content" } },
        required: ['note'],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Deal's id to assign new note to",
          },
          noteId: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Deal note's id to update",
          },
        },
        required: ['id', 'noteId'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        deals: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              activitycount: { type: 'string', examples: ['3'] },
              cdate: { type: 'string', examples: ['2017-06-01T13:40:04-05:00'] },
              contact: { type: 'string', examples: ['1'] },
              currency: { type: 'string', examples: ['usd'] },
              edate: { type: 'string', examples: ['0000-00-00 00:00:00'] },
              group: { type: 'string', examples: ['1'] },
              hash: { type: 'string', examples: ['5604d5b5'] },
              id: { type: 'string', examples: ['1'] },
              links: {
                type: 'object',
                properties: {
                  dealActivities: { type: 'string', examples: ['/api/3/deals/1/dealActivities'] },
                  contact: { type: 'string', examples: ['/api/3/deals/1/contact'] },
                  contactDeals: { type: 'string', examples: ['/api/3/deals/1/contactDeals'] },
                  group: { type: 'string', examples: ['/api/3/deals/1/group'] },
                  nextTask: { type: 'string', examples: ['/api/3/deals/1/nextTask'] },
                  notes: { type: 'string', examples: ['/api/3/deals/1/notes'] },
                  organization: { type: 'string', examples: ['/api/3/deals/1/organization'] },
                  owner: { type: 'string', examples: ['/api/3/deals/1/owner'] },
                  scoreValues: { type: 'string', examples: ['/api/3/deals/1/scoreValues'] },
                  stage: { type: 'string', examples: ['/api/3/deals/1/stage'] },
                  tasks: { type: 'string', examples: ['/api/3/deals/1/tasks'] },
                },
              },
              mdate: { type: 'string', examples: ['2017-06-01T13:41:57-05:00'] },
              nextTask: { type: 'string', examples: ['1'] },
              nextdate: { type: 'string', examples: ['2017-06-02T12:00:00-05:00'] },
              nextdealid: { type: 'string', examples: ['1'] },
              nexttaskid: { type: 'string', examples: ['1'] },
              organization: {},
              owner: { type: 'string', examples: ['1'] },
              percent: { type: 'string', examples: ['0'] },
              stage: { type: 'string', examples: ['1'] },
              status: { type: 'string', examples: ['0'] },
              title: { type: 'string', examples: ['New deal'] },
              value: { type: 'string', examples: ['10000'] },
            },
          },
        },
        note: {
          type: 'object',
          properties: {
            cdate: { type: 'string', examples: ['2017-06-01T13:42:13-05:00'] },
            id: { type: 'string', examples: ['2'] },
            links: {
              type: 'object',
              properties: {
                activities: { type: 'string', examples: ['/api/3/notes/2/activities'] },
                mentions: { type: 'string', examples: ['/api/3/notes/2/mentions'] },
                notes: { type: 'string', examples: ['/api/3/notes/2/notes'] },
                owner: { type: 'string', examples: ['/api/3/notes/2/owner'] },
                user: { type: 'string', examples: ['/api/3/notes/2/user'] },
              },
            },
            mdate: { type: 'string', examples: ['2017-06-01T13:42:13-05:00'] },
            note: { type: 'string', examples: ['Update with more info'] },
            owner: {
              type: 'object',
              properties: {
                id: { type: 'string', examples: ['1'] },
                type: { type: 'string', examples: ['deal'] },
              },
            },
            relid: { type: 'string', examples: ['1'] },
            reltype: { type: 'string', examples: ['Deal'] },
            user: { type: 'string', examples: ['1'] },
            userid: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const UpdateADealStage = {
  body: {
    type: 'object',
    properties: {
      dealStage: {
        properties: {
          title: {
            type: 'string',
            description: "Deal stage's title",
            examples: ['Qualifications - Low'],
          },
          group: { type: 'string', description: "Deal stage's pipeline id", examples: ['4'] },
          order: {
            type: 'integer',
            description:
              'Order of the deal stage. If more than one deal stage share the same order value, the order of those deal stages may not be always the same',
            format: 'int32',
            examples: [1],
            minimum: -2147483648,
            maximum: 2147483647,
          },
          dealOrder: {
            type: 'string',
            description:
              'Option and direction to be used to sort deals in the deal stage. The option and direction should be delimited by a space. Direction can be either "ASC" or "DESC". See [available options](#section-deal-stage-parameters-available-values)',
            examples: ['title ASC'],
          },
          cardRegion1: {
            type: 'string',
            description:
              'What to show in upper-left corner of Deal Cards. See [available values](#section-deal-stage-parameters-available-values)',
            examples: ['contact-orgname'],
          },
          cardRegion2: {
            type: 'string',
            description:
              'What to show in upper-right corner of Deal Cards. See [available values](#section-deal-stage-parameters-available-values)',
            examples: ['next-action'],
          },
          cardRegion3: {
            type: 'string',
            description:
              'Whether to show the avatar in Deal Cards. Can be one of `show-avatar` and `hide-avatar`. If set to `show-avatar`, deal cards will show the avatars. If set to `hide-avatar`, deal cards will hide the avatars',
            examples: ['hide-avatar'],
          },
          cardRegion4: {
            type: 'string',
            description:
              'What to show next to the avatar in Deal Cards. See [available values](#section-deal-stage-parameters-available-values)',
            examples: ['contact-fullname-orgname'],
          },
          cardRegion5: {
            type: 'string',
            description:
              'What to show in lower-right corner of Deal Cards. See [available values](#section-deal-stage-parameters-available-values)',
            examples: ['value'],
          },
          color: {
            type: 'string',
            description:
              'Deal Stage\'s color. 6-character HEX color code without the hashtag. e.g. "434343" to assign the hex color value "#434343"',
            examples: ['696969'],
          },
          width: {
            type: 'integer',
            description: "Deal stage's width in pixels, without `px` unit",
            format: 'int32',
            examples: [270],
            minimum: -2147483648,
            maximum: 2147483647,
          },
        },
        required: [],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Deal stage's id",
          },
        },
        required: ['id'],
      },
      {
        type: 'object',
        properties: {
          reorder: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              'Whether to reorder stages within the pipeline after creating a new deal stage. Can be one of `0` and `1`. If set to `1`, new order values will be assigned to all stages within the same pipeline. If deal stages with the same order exists, the stage with the highest `id` will be assigned with the lowest `order`',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        dealStage: {
          type: 'object',
          properties: {
            cardRegion1: { type: 'string', examples: ['contact-orgname'] },
            cardRegion2: { type: 'string', examples: ['next-action'] },
            cardRegion3: { type: 'string', examples: ['hide-avatar'] },
            cardRegion4: { type: 'string', examples: ['contact-fullname-orgname'] },
            cardRegion5: { type: 'string', examples: ['value'] },
            cdate: { type: 'string', examples: ['2017-03-01T15:55:58-06:00'] },
            color: { type: 'string', examples: ['696969'] },
            dealOrder: { type: 'string', examples: ['title ASC'] },
            group: { type: 'string', examples: ['4'] },
            id: { type: 'string', examples: ['16'] },
            links: {
              type: 'object',
              properties: { group: { type: 'string', examples: ['/api/3/dealStages/16/group'] } },
            },
            order: { type: 'integer', default: 0, examples: [1] },
            title: { type: 'string', examples: ['Qualifications - Low'] },
            udate: { type: 'string', examples: ['2017-03-01T16:03:57-06:00'] },
            width: { type: 'integer', default: 0, examples: [270] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const UpdateADealTaskType = {
  body: {
    type: 'object',
    properties: {
      dealTasktype: {
        properties: {
          title: {
            type: 'string',
            description:
              "Deal task type's title. The title should be unique among deal task types.",
            examples: ['Meet in person'],
          },
          status: {
            type: 'string',
            description: '0 - Active status, 1 - Disabled status',
            default: '0',
            enum: ['0', '1'],
            examples: [1],
          },
        },
        required: [],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Deal task type's id",
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        dealTasktype: {
          type: 'object',
          properties: {
            cdate: { type: 'string', examples: ['2017-03-02T14:28:53-06:00'] },
            defduration: { type: 'string', examples: ['0'] },
            id: { type: 'string', examples: ['7'] },
            links: { type: 'array', items: {} },
            status: { type: 'string', examples: ['1'] },
            title: { type: 'string', examples: ['Meet in person'] },
            udate: { type: 'string', examples: ['2017-03-02T14:32:20-06:00'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const UpdateAField = {
  body: {
    type: 'object',
    properties: {
      field: {
        properties: {
          type: {
            type: 'string',
            description:
              'Possible Values: dropdown, hidden, checkbox, date, datetime, text, textarea, NULL, listbox, radio',
            examples: ['textarea'],
          },
          title: {
            type: 'string',
            description: 'Title of the field being updated',
            examples: ['Title'],
          },
          descript: {
            type: 'string',
            description: 'Description of field being updated',
            examples: ['Field  description'],
          },
          perstag: {
            type: 'string',
            description: 'The perstag that represents the field being created',
            examples: ['Personalized Tag'],
          },
          defval: {
            type: 'string',
            description: 'Default value of the field being created',
            examples: ['Defaut Value'],
          },
          show_in_list: {
            type: 'boolean',
            description: 'Show this field in the contact list view (No longer Used)',
            examples: [1],
          },
          visible: { type: 'boolean', description: 'Setting to show/hide field', examples: [1] },
          service: {
            type: 'string',
            description:
              'Possible Vales: nimble, contactually, mindbody, salesforce, highrise, google_spreadsheets, pipedrive, onepage, google_contacts, freshbooks, shopify, zendesk, etsy, NULL, bigcommerce, capsule, bigcommerce_oauth, sugarcrm, zohocrm, batchbook',
            examples: ['google'],
          },
          ordernum: {
            type: 'string',
            description: 'Order of appearance in ‘My Fields’ tab.',
            examples: [3],
          },
        },
        required: [],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the field to update',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        field: {
          type: 'object',
          properties: {
            title: { type: 'string', examples: ['Title'] },
            descript: { type: 'string', examples: ['Field  description'] },
            type: { type: 'string', examples: ['textarea'] },
            isrequired: { type: 'integer', default: 0, examples: [0] },
            perstag: { type: 'string', examples: ['PERSONALIZEDTAG'] },
            defval: { type: 'string', examples: ['Defaut Value'] },
            show_in_list: { type: 'integer', default: 0, examples: [1] },
            rows: { type: 'integer', default: 0, examples: [2] },
            cols: { type: 'integer', default: 0, examples: [2] },
            visible: { type: 'integer', default: 0, examples: [1] },
            service: { type: 'string', examples: ['google'] },
            ordernum: { type: 'integer', default: 0, examples: [3] },
            cdate: { type: 'string', examples: ['2018-09-25T16:06:08-05:00'] },
            udate: { type: 'string', examples: ['2018-09-29T18:23:20-05:00'] },
            links: {
              type: 'object',
              properties: {
                options: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/fields/3/options'],
                },
                relations: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/fields/3/relations'],
                },
              },
            },
            id: { type: 'string', examples: ['3'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '403': {
      type: 'object',
      properties: { message: { type: 'string', examples: ['Forbidden'] } },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const UpdateAGroup = {
  body: {
    type: 'object',
    properties: {
      group: {
        properties: {
          title: { type: 'string', examples: ['TEST TITLE'] },
          descript: {
            type: 'string',
            description: 'Group description',
            examples: ['Description Text'],
          },
          pgMessageAdd: {
            type: 'boolean',
            description: 'Permission for adding messages',
            default: false,
            examples: [1],
          },
          unsubscribelink: {
            type: 'boolean',
            description: 'Whether or not to force unsubscribe links',
            default: false,
            examples: ['0'],
          },
          optinconfirm: {
            type: 'boolean',
            description: 'Whether or not to force optin confirm for this group',
            default: false,
            examples: ['0'],
          },
          pgListAdd: {
            type: 'boolean',
            description: 'Permission for adding lists',
            default: false,
            examples: [1],
          },
          pgListEdit: {
            type: 'boolean',
            description: 'Permission for editing lists',
            default: false,
            examples: [1],
          },
          pgListDelete: {
            type: 'boolean',
            description: 'Permission for deleting lists',
            default: false,
            examples: [1],
          },
          pgListHeaders: {
            type: 'boolean',
            description: 'Permission for managing custom email headers',
            default: false,
            examples: [1],
          },
          pgListEmailaccount: {
            type: 'boolean',
            description: 'Permission for managing Unsubscribe By Email',
            default: false,
            examples: [1],
          },
          pgListBounce: {
            type: 'boolean',
            description: 'Permission for accessing list bounce settings',
            default: false,
            examples: [1],
          },
          pgMessageEdit: {
            type: 'boolean',
            description: 'Permission for editing messages',
            default: false,
            examples: [1],
          },
          pgMessageDelete: {
            type: 'boolean',
            description: 'Permission for deleting messages',
            default: false,
            examples: [1],
          },
          pgMessageSend: {
            type: 'boolean',
            description: 'Permission for sending messages',
            default: false,
            examples: [1],
          },
          pgContactAdd: {
            type: 'boolean',
            description: 'Permission for adding contacts',
            default: false,
            examples: [1],
          },
          pgContactEdit: {
            type: 'boolean',
            description: 'Permission for editing contacts',
            default: false,
            examples: [1],
          },
          pgContactDelete: {
            type: 'boolean',
            description: 'Permission for deleting contacts',
            default: false,
            examples: [1],
          },
          pgContactMerge: {
            type: 'boolean',
            description: 'Permission for merging contacts',
            default: false,
            examples: [1],
          },
          pgContactImport: {
            type: 'boolean',
            description: 'Permission for importing contacts',
            default: false,
            examples: [1],
          },
          pgContactApprove: {
            type: 'boolean',
            description: 'Permission for approving contacts',
            default: false,
            examples: [1],
          },
          pgContactExport: {
            type: 'boolean',
            description: 'Permission for exporting contacts',
            default: false,
            examples: [1],
          },
          pgContactSync: {
            type: 'boolean',
            description: 'Permission for syncing contacts',
            default: false,
            examples: [1],
          },
          pgContactFilters: {
            type: 'boolean',
            description: 'Permission for managing contact list segments',
            default: false,
            examples: [1],
          },
          pgContactActions: {
            type: 'boolean',
            description: 'Permission for managing contact actions',
            default: false,
            examples: [1],
          },
          pgContactFields: {
            type: 'boolean',
            description: 'Permission for managing contact custom fields',
            default: false,
            examples: [1],
          },
          pg_user_add: {
            type: 'boolean',
            description: 'Permission for adding users',
            default: false,
            examples: ['0'],
          },
          pg_user_edit: {
            type: 'boolean',
            description: 'Permission for editing users',
            default: false,
            examples: ['0'],
          },
          pg_user_delete: {
            type: 'boolean',
            description: 'Permission for deleting users',
            default: false,
            examples: ['0'],
          },
          pgGroupAdd: {
            type: 'boolean',
            description: 'Permission for adding groups',
            default: false,
            examples: [1],
          },
          pgGroupEdit: {
            type: 'boolean',
            description: 'Permission for editing groups',
            default: false,
            examples: [1],
          },
          pgGroupDelete: {
            type: 'boolean',
            description: 'Permission for deleting groups',
            default: false,
            examples: [1],
          },
          pgTemplateAdd: {
            type: 'boolean',
            description: 'Permission for adding templates',
            default: false,
            examples: [1],
          },
          pgTemplateEdit: {
            type: 'boolean',
            description: 'Permission for editing templates',
            default: false,
            examples: [1],
          },
          pgTemplateDelete: {
            type: 'boolean',
            description: 'Permission for deleting templates',
            default: false,
            examples: [1],
          },
          pgPersonalizationAdd: {
            type: 'boolean',
            description: 'Permission for adding personalization tags',
            default: false,
            examples: [1],
          },
          pgPersonalizationEdit: {
            type: 'boolean',
            description: 'Permission for editing personalization tags',
            default: false,
            examples: [1],
          },
          pgPersonalizationDelete: {
            type: 'boolean',
            description: 'Permission for deleting personalization tags',
            default: false,
            examples: [1],
          },
          pgAutomationManage: { type: 'boolean', default: false, examples: [1] },
          pgFormEdit: {
            type: 'boolean',
            description: 'Permission for editing subscription forms',
            default: false,
            examples: [1],
          },
          pgReportsCampaign: {
            type: 'boolean',
            description: 'Permission for viewing campaign reports',
            default: false,
            examples: [1],
          },
          pgReportsList: {
            type: 'boolean',
            description: 'Permission for viewing list reports',
            default: false,
            examples: [1],
          },
          pgReportsUser: {
            type: 'boolean',
            description: 'Permission for viewing user reports',
            default: false,
            examples: [1],
          },
          pgStartupReports: {
            type: 'boolean',
            description:
              'Campaign ID of last campaign report viewed to decide whether to show link on startup',
            default: false,
            examples: [1],
          },
          pgReportsTrend: {
            type: 'boolean',
            description: 'Permission for viewing trend reports',
            default: false,
            examples: [1],
          },
          pgStartupGettingstarted: {
            type: 'boolean',
            description: 'Whether or not to show the "getting started" tutorial on overview page',
            default: false,
            examples: [1],
          },
          pgDeal: {
            type: 'boolean',
            description: 'Permission for viewing deals',
            default: false,
            examples: [1],
          },
          pgDealDelete: {
            type: 'boolean',
            description: 'Permission for deleting deals',
            default: false,
            examples: [1],
          },
          pgDealReassign: {
            type: 'boolean',
            description: 'Permission for reassigning deals',
            default: false,
            examples: [1],
          },
          pgDealGroupAdd: {
            type: 'boolean',
            description: 'Permission for adding deal groups',
            default: false,
            examples: [1],
          },
          pgDealGroupEdit: {
            type: 'boolean',
            description: 'Permission for editing deal groups',
            default: false,
            examples: [1],
          },
          pgDealGroupDelete: {
            type: 'boolean',
            description: 'Permission for deleting deals groups',
            default: false,
            examples: [1],
          },
          pgSavedResponsesManage: {
            type: 'boolean',
            description: 'Permission for managing saved responses',
            default: false,
            examples: [1],
          },
          reqApproval: {
            type: 'boolean',
            description: 'Whether or not this group requires all campaigns to be approved',
            default: false,
            examples: [1],
          },
          reqApproval1st: {
            type: 'boolean',
            description: 'Whether or not this group requires first campaign to be approved',
            default: false,
            examples: [1],
          },
          reqApprovalNotify: {
            type: 'string',
            description: 'Who to notify for approval related issues (email)',
            examples: ['JohnDoe@gmail.com'],
          },
          socialdata: {
            type: 'boolean',
            description: 'Whether or not to show social links in campaigns sent from this group',
            default: false,
          },
        },
        required: [],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the group to update',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        group: {
          type: 'object',
          properties: {
            title: { type: 'string', examples: ['My Groups Title'] },
            p_admin: { type: 'integer', default: 0, examples: [1] },
            links: {
              type: 'object',
              properties: {
                userGroups: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/groups/7/userGroups'],
                },
                groupLimit: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/groups/7/groupLimit'],
                },
                dealGroupGroups: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/groups/7/dealGroupGroups'],
                },
                listGroups: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/groups/7/listGroups'],
                },
                addressGroups: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/groups/7/addressGroups'],
                },
                automationGroups: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/groups/7/automationGroups'],
                },
              },
            },
            id: { type: 'string', examples: ['7'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '403': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for Group with id 8'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const UpdateAMessage = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the message to update',
          },
        },
        required: ['id'],
      },
      {
        type: 'object',
        properties: {
          'message.fromname': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Name of sender',
          },
          'message.email': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Email of sender',
          },
          'message.reply2': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Reply email for the recipient to reply to',
          },
          'message.subject': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Subject of message',
          },
          'message.preheader_text': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Preheader Text',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        message: {
          type: 'object',
          properties: {
            userid: { type: 'string', examples: ['1'] },
            ed_instanceid: { type: 'string', examples: ['1'] },
            ed_version: { type: 'string', examples: ['2'] },
            cdate: { type: 'string', examples: ['2018-08-06T16:31:45-05:00'] },
            mdate: { type: 'string', examples: ['2018-08-06T16:33:23-05:00'] },
            name: { type: 'string', examples: ['Hello, %FIRSTNAME%'] },
            fromname: { type: 'string', examples: ['John Doe'] },
            fromemail: { type: 'string', examples: ['noreply@example.com'] },
            reply2: { type: 'string', examples: ['hello@example.com'] },
            priority: { type: 'string', examples: ['3'] },
            charset: { type: 'string', examples: ['utf-8'] },
            encoding: { type: 'string', examples: ['8bit'] },
            format: { type: 'string', examples: ['mime'] },
            subject: { type: 'string', examples: ['You are subscribing to %LISTNAME%'] },
            preheader_text: { type: 'string', examples: ['Pre-header Text'] },
            text: {
              type: 'string',
              examples: [
                ' \n\n \n\n \n\nUndercover \n\n**Lorem ipsum dolar sit amet, consectetur adipiscing elit.**\n\n**A**liquam finibus tempus nulla gravida tincidunt. Donec auctor a felis\nnon pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nVestibulum at hendrerit lectus. Mauris turpis ligula, rutrum quis leo\nsit amet, finibus laoreet urna. Nullam et lacinia nunc, ac gravida\nlibero. Nunc tellus erat, ullamcorper a nulla ut, pharetra auctor justo.\n\nProin volutpat nunc at nulla consectetur suscipit. Fusce malesuada nisi\nnulla, sed ornare turpis gravida at. Nam mollis ipsum eu vestibulum\nscelerisque.\n\nSuspendisse ultrices a arcu vel cursus. Mauris quis luctus lacus.\nAliquam iaculis, augue sit amet euismod viverra, lorem nulla consequat\nleo, non congue lorem ipsum nec magna. Donec a lorem eget nunc posuere\nconvallis vitae imperdiet purus.\n\nMauris turpis ligula, rutrum quis leo sit amet, finibus laoreet urna.\nNullam et lacinia nunc, ac gravida libero. Nunc tellus erat, ullamcorper\na nulla ut, pharetra auctor justo.\n\n \n\n01 - Lorem ipsum dolar sit \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit.  Donec\ntristique, tellus et sodales ornare, orci risus venenatis metus, et\nscelerisque erat quam sed est. Donec dictum fermentum feugiat. In sed\nmetus sed eros ullamcorper cursus. Vivamus eu magna at lacus tempus\negestas.\n\n02 - Lorem ipsum dolar sit \n\n \n\n \n\n \n\n"Lorem ipsum dolar sit amet, consectetur."\n\n- S. Williams\n\n \n\n \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec\ntristique, tellus et sodales ornare, orci risus venenatis metus, et\nscelerisque erat quam sed est. Donec dictum fermentum feugiat. In sed\nmetus sed eros ullamcorper cursus. Vivamus eu magna at lacus tempus\negestas.\n\nDonec tristique, tellus et sodales ornare, orci risus venenatis metus,\net scelerisque erat quam sed est. Donec dictum fermentum feugiat. In sed\nmetus sed eros ullamcorper cursus. Vivamus eu magna at lacus tempus\negestas.\n\n \n\n%SENDER-INFO-SINGLELINE%\n\nClick here to unsubscribe <%UNSUBSCRIBELINK%>',
              ],
            },
            html: {
              type: 'string',
              examples: [
                '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n<html lang="en" style="margin: 0; outline: none; padding: 0;"><head><!--[if !mso]><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]--><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta http-equiv="Content-Language" content="locale_contentlang"><meta name="format-detection" content="telephone=no"><meta name="format-detection" content="date=no"><meta name="format-detection" content="address=no"><meta name="format-detection" content="email=no"><style data-ac-keep="true">\n.ExternalClass {width:100%; background:inherit; background-color:inherit;}\n.ExternalClass p, .ExternalClass ul, .ExternalClass ol { Margin: 0; }\n.undoreset div p, .undoreset p { margin-bottom: 20px; }\ndiv[class^="aolmail_divbody"] { overflow: auto; }\n[owa] #ac-footer { padding: 20px 0px!important; background:inherit; background-color:inherit; }\n</style><style data-ac-keep="true">\n@media only screen and (max-width: 600px) {\t/*-------------------------------------------------------------------------*\\ Abandoned Cart widget \\*------------------------------------------------------------------------*/ .td_abandoned-cart img {display: block;padding-right: 0 !important;padding-bottom: 0 !important;width: 100% !important;max-width: 100% !important;height: auto !important;} body { padding: 0!important; font-size:1em!important; } * { -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; } *[class].divbody {-webkit-text-size-adjust:none !important; width:auto !important;} *[class].td_picture img {width:auto !important;} *[class].td_text { line-height: 110%; } *[class].td_button { width: auto; } /* Collapse all block elements */ :not(.body) table { display: block!important; float:none!important; border-collapse:collapse !important; width:100% !important; min-width:100% !important; clear:both!important; } :not(.body) thead, :not(.body) tbody, :not(.body) tr { display:block!important; float:none!important; width:100% !important; } :not(.body) th, :not(.body) td, :not(.body) p { display:block!important; float:none!important; width:100% !important; clear:both!important; } /* Remove browser default styling for elements */ ul, ol { margin-left: 20px; margin-bottom: 10px; margin-top: 10px; -webkit-margin-before: 0; -webkit-margin-after: 0; -webkit-padding-start: 0; } /* Set default height for spacer once collapse */ *[class].spacer { height: auto!important; } a[href^=date]{ color:inherit !important; text-decoration:none !important;} a[href^=telephone]{ color:inherit !important; text-decoration:none !important;} a[href^=address]{ color:inherit !important; text-decoration:none !important;} a[href^=email]{ color:inherit !important; text-decoration:none !important;} /* Default table cell height */ /* Default social icons */ *[class].ac-social-icon-16 {width:16px !important; height:16px !important;} *[class].ac-social-icon-24 {width:24px !important; height:24px !important;} *[class].ac-social-icon-28 {width:28px !important; height:28px !important;} *[class].__ac_social_icons { margin-right: 0px !important; } }\n</style><style data-ac-keep="true"> @media only screen and (max-width: 320px) { #layout-row1 { max-height: 0px!important; font-size: 0px!important; display: none!important; visibility: hidden!important; } #layout-row3 img { width: 100% !important; height: auto !important; max-width: 184px !important; } #layout-row4 img { width: 100% !important; height: auto !important; max-width: 320px !important; } #layout-row10 .break-line { width: 100% !important; margin: auto !important; } #layout-row13 img { width: 100% !important; height: auto !important; max-width: 320px !important; } #layout-row14 img { width: 100% !important; height: auto !important; max-width: 320px !important; } #layout-row18 { max-height: 0px!important; font-size: 0px!important; display: none!important; visibility: hidden!important; } #layout-row20 .break-line { width: 100% !important; margin: auto !important; } #layout-row25 { max-height: 0px!important; font-size: 0px!important; display: none!important; visibility: hidden!important; } #layout-row29 { max-height: 0px!important; font-size: 0px!important; display: none!important; visibility: hidden!important; } .td_rss .rss-item img.iphone_large_image { width: auto !important; } u + .body { display: table !important; width: 100vw !important; min-width: 100vw !important; } u + .body table { display: table !important; width: 100% !important; min-width: 100% !important; } u + .body td { display: block !important; width: 100% !important; min-width: 100% !important; } u + .body img { display: inline-block !important; margin: auto !important; width: auto !important; vertical-align: bottom !important; } u + .body center { display: block !important; margin: auto !important; width: 100% !important; min-width: 100% !important; text-align: center !important; } u + .body table._ac_social_table, u + .body table._ac_social_table td, u + .body table._ac_social_table div, u + .body table._ac_social_table a { display: inline-block !important; margin: auto !important; width: auto !important; min-width: auto !important; text-align: center !important; } u + .body table._ac_social_table img { display: inline-block !important; margin: auto !important; width: 32px !important; min-width: 32px !important; max-width: 32px !important; }\n}\n@media only screen and (max-width: 375px) { #layout-row1 { max-height: 0px!important; font-size: 0px!important; display: none!important; visibility: hidden!important; } #layout-row3 img { width: 100% !important; height: auto !important; max-width: 184px !important; } #layout-row4 img { width: 100% !important; height: auto !important; max-width: 375px !important; } #layout-row10 .break-line { width: 100% !important; margin: auto !important; } #layout-row13 img { width: 100% !important; height: auto !important; max-width: 375px !important; } #layout-row14 img { width: 100% !important; height: auto !important; max-width: 375px !important; } #layout-row18 { max-height: 0px!important; font-size: 0px!important; display: none!important; visibility: hidden!important; } #layout-row20 .break-line { width: 100% !important; margin: auto !important; } #layout-row25 { max-height: 0px!important; font-size: 0px!important; display: none!important; visibility: hidden!important; } #layout-row29 { max-height: 0px!important; font-size: 0px!important; display: none!important; visibility: hidden!important; } .td_rss .rss-item img.iphone_large_image { width: auto !important; } u + .body { display: table !important; width: 100vw !important; min-width: 100vw !important; } u + .body table { display: table !important; width: 100% !important; min-width: 100% !important; } u + .body td { display: block !important; width: 100% !important; min-width: 100% !important; } u + .body img { display: inline-block !important; margin: auto !important; width: auto !important; vertical-align: bottom !important; } u + .body center { display: block !important; margin: auto !important; width: 100% !important; min-width: 100% !important; text-align: center !important; } u + .body table._ac_social_table, u + .body table._ac_social_table td, u + .body table._ac_social_table div, u + .body table._ac_social_table a { display: inline-block !important; margin: auto !important; width: auto !important; min-width: auto !important; text-align: center !important; } u + .body table._ac_social_table img { display: inline-block !important; margin: auto !important; width: 32px !important; min-width: 32px !important; max-width: 32px !important; }\n}\n@media only screen and (max-width: 414px) { #layout-row1 { max-height: 0px!important; font-size: 0px!important; display: none!important; visibility: hidden!important; } #layout-row3 img { width: 100% !important; height: auto !important; max-width: 184px !important; } #layout-row4 img { width: 100% !important; height: auto !important; max-width: 414px !important; } #layout-row10 .break-line { width: 100% !important; margin: auto !important; } #layout-row13 img { width: 100% !important; height: auto !important; max-width: 414px !important; } #layout-row14 img { width: 100% !important; height: auto !important; max-width: 414px !important; } #layout-row18 { max-height: 0px!important; font-size: 0px!important; display: none!important; visibility: hidden!important; } #layout-row20 .break-line { width: 100% !important; margin: auto !important; } #layout-row25 { max-height: 0px!important; font-size: 0px!important; display: none!important; visibility: hidden!important; } #layout-row29 { max-height: 0px!important; font-size: 0px!important; display: none!important; visibility: hidden!important; } .td_rss .rss-item img.iphone_large_image { width: auto !important; } u + .body { display: table !important; width: 100vw !important; min-width: 100vw !important; } u + .body table { display: table !important; width: 100% !important; min-width: 100% !important; } u + .body td { display: block !important; width: 100% !important; min-width: 100% !important; } u + .body img { display: inline-block !important; margin: auto !important; width: auto !important; vertical-align: bottom !important; } u + .body center { display: block !important; margin: auto !important; width: 100% !important; min-width: 100% !important; text-align: center !important; } u + .body table._ac_social_table, u + .body table._ac_social_table td, u + .body table._ac_social_table div, u + .body table._ac_social_table a { display: inline-block !important; margin: auto !important; width: auto !important; min-width: auto !important; text-align: center !important; } u + .body table._ac_social_table img { display: inline-block !important; margin: auto !important; width: 32px !important; min-width: 32px !important; max-width: 32px !important; }\n}\n@media only screen and (max-width: 667px) { #layout-row1 { max-height: 0px!important; font-size: 0px!important; display: none!important; visibility: hidden!important; } #layout-row3 img { width: 100% !important; height: auto !important; max-width: 184px !important; } #layout-row4 img { width: 100% !important; height: auto !important; max-width: 667px !important; } #layout-row10 .break-line { width: 100% !important; margin: auto !important; } #layout-row13 img { width: 100% !important; height: auto !important; max-width: 536px !important; } #layout-row14 img { width: 100% !important; height: auto !important; max-width: 534px !important; } #layout-row18 { max-height: 0px!important; font-size: 0px!important; display: none!important; visibility: hidden!important; } #layout-row20 .break-line { width: 100% !important; margin: auto !important; } #layout-row25 { max-height: 0px!important; font-size: 0px!important; display: none!important; visibility: hidden!important; } #layout-row29 { max-height: 0px!important; font-size: 0px!important; display: none!important; visibility: hidden!important; } .td_rss .rss-item img.iphone_large_image { width: auto !important; } u + .body { display: table !important; width: 100vw !important; min-width: 100vw !important; } u + .body table { display: table !important; width: 100% !important; min-width: 100% !important; } u + .body td { display: block !important; width: 100% !important; min-width: 100% !important; } u + .body img { display: inline-block !important; margin: auto !important; width: auto !important; vertical-align: bottom !important; } u + .body center { display: block !important; margin: auto !important; width: 100% !important; min-width: 100% !important; text-align: center !important; } u + .body table._ac_social_table, u + .body table._ac_social_table td, u + .body table._ac_social_table div, u + .body table._ac_social_table a { display: inline-block !important; margin: auto !important; width: auto !important; min-width: auto !important; text-align: center !important; } u + .body table._ac_social_table img { display: inline-block !important; margin: auto !important; width: 32px !important; min-width: 32px !important; max-width: 32px !important; }\n}\n</style><!--[if !mso]><!-- webfonts --><!--<![endif]--><!--[if lt mso 12]> <![endif]--></head><body id="ac-designer" class="body" style="font-family: Arial; line-height: 1.1; margin: 0px; background-color: #343434; width: 100%; text-align: center;"><div class="divbody" style="margin: 0px; outline: none; padding: 0px; color: #000000; font-family: arial; line-height: 1.1; width: 100%; background-color: #343434; background: #343434; text-align: center;"><table class="template-table" border="0" cellpadding="0" cellspacing="0" width="100%" align="left" style="font-size: 13px; min-width: auto; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #343434; background: #343434;"><tr><td align="center" valign="top" width="100%"><table class="template-table" border="0" cellpadding="0" cellspacing="0" width="650" bgcolor="#343434" style="font-size: 13px; min-width: auto; mso-table-lspace: 0pt; mso-table-rspace: 0pt; max-width: 650px;"><tr><td id="layout_table_1021313e38e49afad28844ffa18a6c210aadc587" valign="top" align="center" width="650"><table cellpadding="0" cellspacing="0" border="0" class="layout layout-table root-table" width="650" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td id="layout-row-margin31" valign="top"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr id="layout-row31" class="layout layout-row widget _widget_spacer "><td id="layout-row-padding31" valign="top"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td valign="top" height="25"><div class="spacer" style="margin: 0; outline: none; padding: 0; height: 25px;"><table cellpadding="0" cellspacing="0" border="0" width="100%" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tbody><tr><td class="spacer-body" valign="top" height="25" width="650"> </td></tr></tbody></table></div></td></tr></table></td></tr></table></td></tr><tr><td id="layout-row-margin3" valign="top" style="padding: 0;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: initial !important;"><tr id="layout-row3" class="layout layout-row widget _widget_picture style3" align="center" style="background-color: #343434;"><td id="layout-row-padding3" valign="top" style="background-color: #343434; padding: 0;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td class="image-td" align="center" valign="top" width="650"><img src="http://test-enterprise-8./public//4f397db254489cbcc56cec456cd7b3db.png?r=871859732" alt="" width="184" style="display: block; border: none; outline: none; width: 184px; opacity: 1; max-width: 100%;"></td></tr></table></td></tr></table></td></tr><tr><td id="layout-row-margin27" valign="top"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr id="layout-row27" class="layout layout-row widget _widget_spacer "><td id="layout-row-padding27" valign="top"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td valign="top" height="30"><div class="spacer" style="margin: 0; outline: none; padding: 0; height: 30px;"><table cellpadding="0" cellspacing="0" border="0" width="100%" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tbody><tr><td class="spacer-body" valign="top" height="30" width="650"> </td></tr></tbody></table></div></td></tr></table></td></tr></table></td></tr><tr><td id="layout-row-margin4" valign="top" style="padding: 0px 0 0 0;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: initial !important;"><tr id="layout-row4" class="layout layout-row widget _widget_picture style4" align="left" style="background-color: #343434;"><td id="layout-row-padding4" valign="top" style="background-color: #343434; padding: 0px 0 0 0;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td class="image-td" align="left" valign="top" width="650"><img src="http://test-enterprise-8./public//714a6a68462f305dcc07900019176da9.png?r=92350116" alt="" width="650" style="display: block; border: none; outline: none; width: 650px; opacity: 1; max-width: 100%;"></td></tr></table></td></tr></table></td></tr><tr><td id="layout-row-margin5" valign="top" style="padding: 0;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: initial !important;"><tr id="layout-row5" class="layout layout-row widget _widget_spacer style5" style=""><td id="layout-row-padding5" valign="top" style="padding: 0;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td valign="top" height="52"><div class="spacer" style="margin: 0; outline: none; padding: 0; height: 52px;"><table cellpadding="0" cellspacing="0" border="0" width="100%" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tbody><tr><td class="spacer-body" valign="top" height="52" width="650"> </td></tr></tbody></table></div></td></tr></table></td></tr></table></td></tr><tr id="layout-row8" class="layout layout-row clear-this "><td id="layout-row-padding8" valign="top"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td id="layout_table_3f45c3a8c98792148cfe613227982408eef75ad2" valign="top" width="325"><table cellpadding="0" cellspacing="0" border="0" class="layout layout-table " width="325" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td id="layout-row-margin6" valign="top" style="padding: 0;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: initial !important;"><tr id="layout-row6" class="layout layout-row widget _widget_text style6" style="margin: 0; padding: 0;"><td id="layout-row-padding6" valign="top" style="padding: 0 26px 10px 26px;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td id="text_div6" class="td_text td_block" valign="top" align="left" style="line-height: 100%; color: inherit; font-size: 12px; font-weight: inherit; line-height: 1; text-decoration: inherit; font-family: Arial; mso-line-height-rule: exactly;"> <div style="line-height: 100%; margin: 0; outline: none; padding: 0; color: #999999; mso-line-height-rule: exactly; line-height: 1;" data-line-height="1"> <span class="" style="color: #999999; font-size: 48px; font-weight: inherit; line-height: inherit; text-decoration: inherit; font-family: georgia; font-style: italic;">Undercover</span> </div><!--[if (gte mso 12)&(lte mso 15) ]>\n<style data-ac-keep="true" data-ac-inline="false"> #text_div6, #text_div6 div { line-height: 100% !important; };\n</style>\n<![endif]--></td></tr></table></td></tr></table></td></tr><tr><td id="layout-row-margin9" valign="top" style="padding: 0;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: initial !important;"><tr id="layout-row9" class="layout layout-row widget _widget_text style9" style="margin: 0; padding: 0;"><td id="layout-row-padding9" valign="top" style="padding: 0 26px 16px 26px;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td id="text_div8" class="td_text td_block" valign="top" align="left" style="line-height: 110%; color: inherit; font-size: 12px; font-weight: inherit; line-height: 1.1; text-decoration: inherit; font-family: Arial; mso-line-height-rule: exactly;"> <div data-line-height="1.1" style="line-height: 110%; margin: 0; outline: none; padding: 0; mso-line-height-rule: exactly; line-height: 1.1;"> <p class="p1" style="margin: 0; outline: none; padding: 0; color: inherit; font-size: inherit; font-weight: inherit; line-height: inherit; text-decoration: inherit;"><i class="" style="margin: 0; outline: none; padding: 0; font-family: \'times new roman\'; font-size: 26px; color: #999999;">Lorem ipsum dolar sit amet, consectetur adipiscing elit.</i></p> </div><!--[if (gte mso 12)&(lte mso 15) ]>\n<style data-ac-keep="true" data-ac-inline="false"> #text_div8, #text_div8 div { line-height: 110% !important; };\n</style>\n<![endif]--></td></tr></table></td></tr></table></td></tr><tr><td id="layout-row-margin10" valign="top" style="padding: 0;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: initial !important;"><tr id="layout-row10" class="layout layout-row widget _widget_break style10" style=""><td id="layout-row-padding10" valign="top" style="line-height: 0; mso-line-height-rule: exactly; padding: 0 26px 0 26px;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; line-height: 0; mso-line-height-rule: exactly;"><tr><td height="10" style="line-height: 0; mso-line-height-rule: exactly;"></td></tr><tr><td align="center" height="1" width="273" style="line-height: 0; mso-line-height-rule: exactly;"> <table align="center" border="0" cellpadding="0" cellspacing="0" height="1" width="273" style="font-size: 13px; min-width: auto!important; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; line-height: 0; mso-line-height-rule: exactly; width: 100%; max-width: 100%;"><tr><td class="break-line" bgcolor="#999999" height="1" width="273" style="line-height: 1px; mso-line-height-rule: exactly; height: 1px; width: 273px; background-color: #999999;"> </td> </tr></table></td> </tr><tr><td height="10" style="line-height: 0; mso-line-height-rule: exactly;"></td></tr></table></td></tr></table></td></tr><tr><td id="layout-row-margin11" valign="top" style="padding: 0;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: initial !important;"><tr id="layout-row11" class="layout layout-row widget _widget_text style11" style="margin: 0; padding: 0;"><td id="layout-row-padding11" valign="top" style="padding: 20px 26px 26px 26px;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td id="text_div10" class="td_text td_block" valign="top" align="left" style="line-height: 140%; color: inherit; font-size: 12px; font-weight: inherit; line-height: 1.4; text-decoration: inherit; font-family: Arial; mso-line-height-rule: exactly;"> <div style="line-height: 140%; margin: 0; outline: none; padding: 0; color: #999999; mso-line-height-rule: exactly; line-height: 1.4;" data-line-height="1.4"> <p class="p1" style="margin: 0; outline: none; padding: 0; color: #999999; font-size: inherit; font-weight: inherit; line-height: inherit; text-decoration: inherit;"><span class="" style="color: #999999; font-size: 16px; font-weight: inherit; line-height: inherit; text-decoration: inherit; font-family: georgia;"><b class="" style="margin: 0; outline: none; padding: 0; font-size: 27px; color: #999999;">A</b>liquam finibus tempus nulla gravida tincidunt. Donec auctor a felis non pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at hendrerit lectus. Mauris turpis ligula, rutrum quis leo sit amet, finibus laoreet urna. Nullam et lacinia nunc, ac gravida libero. Nunc tellus erat, ullamcorper a nulla ut, pharetra auctor justo.</span></p> </div><!--[if (gte mso 12)&(lte mso 15) ]>\n<style data-ac-keep="true" data-ac-inline="false"> #text_div10, #text_div10 div { line-height: 140% !important; };\n</style>\n<![endif]--></td></tr></table></td></tr></table></td></tr></table></td><td id="layout_table_671b17cb4782b654db485de21cbc09bb8b42a7c1" valign="top" width="325"><table cellpadding="0" cellspacing="0" border="0" class="layout layout-table " width="325" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td id="layout-row-margin7" valign="top" style="padding: 0;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: initial !important;"><tr id="layout-row7" class="layout layout-row widget _widget_text style7" style="margin: 0; padding: 0;"><td id="layout-row-padding7" valign="top" style="padding: 10px 26px 0 26px;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td id="text_div7" class="td_text td_block" valign="top" align="left" style="line-height: 140%; color: inherit; font-size: 12px; font-weight: inherit; line-height: 1.4; text-decoration: inherit; font-family: Arial; mso-line-height-rule: exactly;"> <div data-line-height="1.4" style="line-height: 140%; margin: 0; outline: none; padding: 0; mso-line-height-rule: exactly; line-height: 1.4; color: #999999;"> <p class="p1" style="margin: 0; outline: none; padding: 0; color: #999999; font-size: inherit; font-weight: inherit; line-height: inherit; text-decoration: inherit;"><span class="" style="color: #999999; font-size: 16px; font-weight: inherit; line-height: inherit; text-decoration: inherit; font-family: georgia;">Proin volutpat nunc at nulla consectetur suscipit. Fusce malesuada nisi nulla, sed ornare turpis gravida at. Nam mollis ipsum eu vestibulum scelerisque.</span></p> <p class="p2" style="margin: 0; outline: none; padding: 0; color: #999999; font-size: inherit; font-weight: inherit; line-height: inherit; text-decoration: inherit;"><br style="font-family: georgia; font-size: 16px; color: #999999;color: #999999;"></p> <p class="p1" style="margin: 0; outline: none; padding: 0; color: #999999; font-size: inherit; font-weight: inherit; line-height: inherit; text-decoration: inherit;"><span class="" style="color: #999999; font-size: 16px; font-weight: inherit; line-height: inherit; text-decoration: inherit; font-family: georgia;">Suspendisse ultrices a arcu vel cursus. Mauris quis luctus lacus. Aliquam iaculis, augue sit amet euismod viverra, lorem nulla consequat leo, non congue lorem ipsum nec magna. Donec a lorem eget nunc posuere convallis vitae imperdiet purus.</span></p><p class="p1" style="margin: 0; outline: none; padding: 0; color: #999999; font-size: inherit; font-weight: inherit; line-height: inherit; text-decoration: inherit;"><br style="font-family: georgia; font-size: 16px; color: #999999;color: #999999;"></p><p class="p1" style="margin: 0; outline: none; padding: 0; color: #999999; font-size: inherit; font-weight: inherit; line-height: inherit; text-decoration: inherit;"><span class="" style="color: #999999; font-size: 16px; font-weight: inherit; line-height: inherit; text-decoration: inherit; font-family: georgia;"><span style="color: #999999; font-size: inherit; font-weight: inherit; line-height: inherit; text-decoration: inherit; font-family: georgia;">Mauris turpis ligula, rutrum quis leo sit amet, finibus laoreet urna. Nullam et lacinia nunc, ac gravida libero. Nunc tellus erat, ullamcorper a nulla ut, pharetra auctor justo.</span><br style="color: #999999;"></span></p><p class="p1" style="margin: 0; outline: none; padding: 0; color: #999999; font-size: inherit; font-weight: inherit; line-height: inherit; text-decoration: inherit;"><br style="color: #999999;color: #999999;"></p><br></div><!--[if (gte mso 12)&(lte mso 15) ]>\n<style data-ac-keep="true" data-ac-inline="false"> #text_div7, #text_div7 div { line-height: 140% !important; };\n</style>\n<![endif]--></td></tr></table></td></tr></table></td></tr></table></td></tr></table></td></tr><tr><td id="layout-row-margin12" valign="top" style="padding: 0;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: initial !important;"><tr id="layout-row12" class="layout layout-row widget _widget_spacer style12" style=""><td id="layout-row-padding12" valign="top" style="padding: 0;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td valign="top" height="30"><div class="spacer" style="margin: 0; outline: none; padding: 0; height: 30px;"><table cellpadding="0" cellspacing="0" border="0" width="100%" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tbody><tr><td class="spacer-body" valign="top" height="30" width="650"> </td></tr></tbody></table></div></td></tr></table></td></tr></table></td></tr><tr id="layout-row15" class="layout layout-row clear-this "><td id="layout-row-padding15" valign="top"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td id="layout_table_fda5dd4152a83e24c40d194350d6d45090bf0979" valign="top" width="325"><table cellpadding="0" cellspacing="0" border="0" class="layout layout-table " width="325" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td id="layout-row-margin13" valign="top" style="padding: 0;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: initial !important;"><tr id="layout-row13" class="layout layout-row widget _widget_picture style13" align="left" style=""><td id="layout-row-padding13" valign="top" style="padding: 0 26px 10px 26px;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td class="image-td" align="left" valign="top" width="273"><img src="http://test-enterprise-8./public//a85847a4efbab68055b6ada532261c12.png?r=704215052" alt="" width="273" style="display: block; border: none; outline: none; width: 273px; opacity: 1; max-width: 100%;"></td></tr></table></td></tr></table></td></tr><tr><td id="layout-row-margin16" valign="top" style="padding: 0;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: initial !important;"><tr id="layout-row16" class="layout layout-row widget _widget_text style16" style="margin: 0; padding: 0;"><td id="layout-row-padding16" valign="top" style="padding: 0 26px 30px 26px;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td id="text_div14" class="td_text td_block" valign="top" align="left" style="line-height: 130%; color: inherit; font-size: 12px; font-weight: inherit; line-height: 1.3; text-decoration: inherit; font-family: Arial; mso-line-height-rule: exactly;"> <div style="line-height: 130%; margin: 0; outline: none; padding: 0; color: #999999; mso-line-height-rule: exactly; line-height: 1.3;" data-line-height="1.3"> <span class="" style=\'color: #999999; font-size: 16px; font-weight: inherit; line-height: inherit; text-decoration: inherit; font-family: "times new roman"; font-style: italic;\'><span style="color: #999999; font-size: inherit; font-weight: bold; line-height: inherit; text-decoration: inherit;"> 01 -</span> Lorem ipsum dolar sit</span> </div><!--[if (gte mso 12)&(lte mso 15) ]>\n<style data-ac-keep="true" data-ac-inline="false"> #text_div14, #text_div14 div { line-height: 130% !important; };\n</style>\n<![endif]--></td></tr></table></td></tr></table></td></tr><tr><td id="layout-row-margin17" valign="top" style="padding: 0;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: initial !important;"><tr id="layout-row17" class="layout layout-row widget _widget_text style17" style="margin: 0; padding: 0;"><td id="layout-row-padding17" valign="top" style="padding: 0 26px 39px 26px;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td id="text_div15" class="td_text td_block" valign="top" align="left" style="line-height: 140%; color: inherit; font-size: 12px; font-weight: inherit; line-height: 1.4; text-decoration: inherit; font-family: Arial; mso-line-height-rule: exactly;"> <div style="line-height: 140%; margin: 0; outline: none; padding: 0; color: #999999; mso-line-height-rule: exactly; line-height: 1.4;" data-line-height="1.4"> <p class="p1" style="margin: 0; outline: none; padding: 0; color: #999999; font-size: inherit; font-weight: inherit; line-height: inherit; text-decoration: inherit;"><span class="" style="color: #999999; font-size: 16px; font-weight: inherit; line-height: inherit; text-decoration: inherit; font-family: georgia;">Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Donec tristique, tellus et sodales ornare, orci risus venenatis metus, et scelerisque erat quam sed est. Donec dictum fermentum feugiat. In sed metus sed eros ullamcorper cursus. Vivamus eu magna at lacus tempus egestas.</span></p> </div><!--[if (gte mso 12)&(lte mso 15) ]>\n<style data-ac-keep="true" data-ac-inline="false"> #text_div15, #text_div15 div { line-height: 140% !important; };\n</style>\n<![endif]--></td></tr></table></td></tr></table></td></tr></table></td><td id="layout_table_1903ee6fde2ab10b81f6790da79880e983ad0639" valign="top" width="325"><table cellpadding="0" cellspacing="0" border="0" class="layout layout-table " width="325" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td id="layout-row-margin14" valign="top" style="padding: 0;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: initial !important;"><tr id="layout-row14" class="layout layout-row widget _widget_picture style14" align="left" style=""><td id="layout-row-padding14" valign="top" style="padding: 0 26px 10px 26px;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td class="image-td" align="left" valign="top" width="273"><img src="http://test-enterprise-8./public//19e0532e4430dd99a6d8e3d9a69e8722.png?r=2014676670" alt="" width="273" style="display: block; border: none; outline: none; width: 273px; opacity: 1; max-width: 100%;"></td></tr></table></td></tr></table></td></tr><tr><td id="layout-row-margin19" valign="top" style="padding: 0;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: initial !important;"><tr id="layout-row19" class="layout layout-row widget _widget_text style19" style="margin: 0; padding: 0;"><td id="layout-row-padding19" valign="top" style="padding: 0 26px 30px 26px;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td id="text_div17" class="td_text td_block" valign="top" align="left" style="line-height: 130%; color: inherit; font-size: 12px; font-weight: inherit; line-height: 1.3; text-decoration: inherit; font-family: Arial; mso-line-height-rule: exactly;"> <div style="line-height: 130%; margin: 0; outline: none; padding: 0; color: #999999; mso-line-height-rule: exactly; line-height: 1.3;" data-line-height="1.3"> <span class="" style=\'color: #999999; font-size: 16px; font-weight: inherit; line-height: inherit; text-decoration: inherit; font-family: "times new roman"; font-style: italic;\'><span style="color: #999999; font-size: inherit; font-weight: bold; line-height: inherit; text-decoration: inherit;"> 02 -</span> Lorem ipsum dolar sit</span> </div><!--[if (gte mso 12)&(lte mso 15) ]>\n<style data-ac-keep="true" data-ac-inline="false"> #text_div17, #text_div17 div { line-height: 130% !important; };\n</style>\n<![endif]--></td></tr></table></td></tr></table></td></tr></table></td></tr></table></td></tr><tr><td id="layout-row-margin18" valign="top" style="padding: 0;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: initial !important;"><tr id="layout-row18" class="layout layout-row widget _widget_spacer style18" style=""><td id="layout-row-padding18" valign="top" style="padding: 0;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td valign="top" height="30"><div class="spacer" style="margin: 0; outline: none; padding: 0; height: 30px;"><table cellpadding="0" cellspacing="0" border="0" width="100%" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tbody><tr><td class="spacer-body" valign="top" height="30" width="650"> </td></tr></tbody></table></div></td></tr></table></td></tr></table></td></tr><tr><td id="layout-row-margin20" valign="top" style="padding: 0;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: initial !important;"><tr id="layout-row20" class="layout layout-row widget _widget_break style20" style=""><td id="layout-row-padding20" valign="top" style="line-height: 0; mso-line-height-rule: exactly; padding: 0 26px 0 26px;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; line-height: 0; mso-line-height-rule: exactly;"><tr><td height="10" style="line-height: 0; mso-line-height-rule: exactly;"></td></tr><tr><td align="center" height="1" width="598" style="line-height: 0; mso-line-height-rule: exactly;"> <table align="center" border="0" cellpadding="0" cellspacing="0" height="1" width="598" style="font-size: 13px; min-width: auto!important; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; line-height: 0; mso-line-height-rule: exactly; width: 100%; max-width: 100%;"><tr><td class="break-line" bgcolor="#999999" height="1" width="598" style="line-height: 1px; mso-line-height-rule: exactly; height: 1px; width: 598px; background-color: #999999;"> </td> </tr></table></td> </tr><tr><td height="10" style="line-height: 0; mso-line-height-rule: exactly;"></td></tr></table></td></tr></table></td></tr><tr><td id="layout-row-margin21" valign="top" style="padding: 0;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: initial !important;"><tr id="layout-row21" class="layout layout-row widget _widget_spacer style21" style=""><td id="layout-row-padding21" valign="top" style="padding: 0;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td valign="top" height="43"><div class="spacer" style="margin: 0; outline: none; padding: 0; height: 43px;"><table cellpadding="0" cellspacing="0" border="0" width="100%" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tbody><tr><td class="spacer-body" valign="top" height="43" width="650"> </td></tr></tbody></table></div></td></tr></table></td></tr></table></td></tr><tr id="layout-row23" class="layout layout-row clear-this "><td id="layout-row-padding23" valign="top"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td id="layout_table_9929bd7219b5a483f72e371041f557266f23face" valign="top" width="295"><table cellpadding="0" cellspacing="0" border="0" class="layout layout-table " width="295" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr id="layout-row26" class="layout layout-row clear-this "><td id="layout-row-padding26" valign="top"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td id="layout_table_a5d42e4016ba95676c5d0c08dded0a92da76cf78" valign="top" width="26"><table cellpadding="0" cellspacing="0" border="0" class="layout layout-table " width="26" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td id="layout-row-margin25" valign="top" style="padding: 0;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: initial !important;"><tr id="layout-row25" class="layout layout-row widget _widget_spacer style25" style=""><td id="layout-row-padding25" valign="top" style="padding: 0;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td valign="top" height="388"><div class="spacer" style="margin: 0; outline: none; padding: 0; height: 388px;"><table cellpadding="0" cellspacing="0" border="0" width="100%" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tbody><tr><td class="spacer-body" valign="top" height="388" width="26"> </td></tr></tbody></table></div></td></tr></table></td></tr></table></td></tr></table></td><td id="layout_table_2a8bd49bfe6839890ddad1d3770bbc80e298784c" valign="top" width="269"><table cellpadding="0" cellspacing="0" border="0" class="layout layout-table " width="269" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td id="layout-row-margin22" valign="top" style="padding: 0px;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: initial !important;"><tr id="layout-row22" class="layout layout-row widget _widget_text style22" style="margin: 0; padding: 0;"><td id="layout-row-border22" valign="top" style="border-color: #999999; border-style: solid; border-width: 1px;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td id="layout-row-padding22" valign="top" style="padding: 20px 20px 30px 20px;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td id="text_div20" class="td_text td_block" valign="top" align="left" style="line-height: 100%; color: inherit; font-size: 12px; font-weight: inherit; line-height: 1; text-decoration: inherit; font-family: Arial; mso-line-height-rule: exactly;"> <div style="line-height: 100%; margin: 0; outline: none; padding: 0; color: #999999; mso-line-height-rule: exactly; line-height: 1;" data-line-height="1"> <span class="" style=\'color: #999999; font-size: 34px; font-weight: inherit; line-height: inherit; text-decoration: inherit; font-family: "times new roman"; font-style: italic;\'><span style="color: #999999; font-size: inherit; font-weight: inherit; line-height: inherit; text-decoration: inherit;" class="">"Lorem ipsum dolar sit amet, consectetur."<br style="color: #999999;"><br style="color: #999999;"></span><span class="" style="color: #999999; font-size: 26px; font-weight: inherit; line-height: inherit; text-decoration: inherit;"><span style="color: #999999; font-size: inherit; font-weight: inherit; line-height: inherit; text-decoration: inherit;" class="">- S. Williams</span><br style="color: #999999;"></span></span> </div><!--[if (gte mso 12)&(lte mso 15) ]>\n<style data-ac-keep="true" data-ac-inline="false"> #text_div20, #text_div20 div { line-height: 100% !important; };\n</style>\n<![endif]--></td></tr></table></td></tr></table></td></tr></table></td></tr><tr><td id="layout-row-margin28" valign="top"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr id="layout-row28" class="layout layout-row widget _widget_spacer "><td id="layout-row-padding28" valign="top"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td valign="top" height="30"><div class="spacer" style="margin: 0; outline: none; padding: 0; height: 30px;"><table cellpadding="0" cellspacing="0" border="0" width="100%" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tbody><tr><td class="spacer-body" valign="top" height="30" width="269"> </td></tr></tbody></table></div></td></tr></table></td></tr></table></td></tr></table></td></tr></table></td></tr></table></td><td id="layout_table_07718ed3fc601a3c0d938b6fc0e27261628cdabc" valign="top" width="355"><table cellpadding="0" cellspacing="0" border="0" class="layout layout-table " width="355" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr id="layout-row30" class="layout layout-row clear-this "><td id="layout-row-padding30" valign="top"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td id="layout_table_8d9015d9aacd6b421019b80822dc49a7c0f795e5" valign="top" width="30"><table cellpadding="0" cellspacing="0" border="0" class="layout layout-table " width="30" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td id="layout-row-margin29" valign="top"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr id="layout-row29" class="layout layout-row widget _widget_spacer "><td id="layout-row-padding29" valign="top"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td valign="top" height="325"><div class="spacer" style="margin: 0; outline: none; padding: 0; height: 325px;"><table cellpadding="0" cellspacing="0" border="0" width="100%" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tbody><tr><td class="spacer-body" valign="top" height="325" width="30"> </td></tr></tbody></table></div></td></tr></table></td></tr></table></td></tr></table></td><td id="layout_table_1b61b68595417473009d9c168031e942c5c96f11" valign="top" width="325"><table cellpadding="0" cellspacing="0" border="0" class="layout layout-table " width="325" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td id="layout-row-margin24" valign="top" style="padding: 0;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: initial !important;"><tr id="layout-row24" class="layout layout-row widget _widget_text style24" style="margin: 0; padding: 0;"><td id="layout-row-padding24" valign="top" style="padding: 0 26px 36px 26px;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td id="text_div21" class="td_text td_block" valign="top" align="left" style="line-height: 140%; color: inherit; font-size: 12px; font-weight: inherit; line-height: 1.4; text-decoration: inherit; font-family: Arial; mso-line-height-rule: exactly;"> <div style="line-height: 140%; margin: 0; outline: none; padding: 0; color: #999999; mso-line-height-rule: exactly; line-height: 1.4;" data-line-height="1.4"> <p class="p1" style="margin: 0; outline: none; padding: 0; color: #999999; font-size: inherit; font-weight: inherit; line-height: inherit; text-decoration: inherit;"><span class="" style="color: #999999; font-size: 16px; font-weight: inherit; line-height: inherit; text-decoration: inherit; font-family: georgia;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique, tellus et sodales ornare, orci risus venenatis metus, et scelerisque erat quam sed est. Donec dictum fermentum feugiat. In sed metus sed eros ullamcorper cursus. Vivamus eu magna at lacus tempus egestas.</span></p><p class="p1" style="margin: 0; outline: none; padding: 0; color: #999999; font-size: inherit; font-weight: inherit; line-height: inherit; text-decoration: inherit;"><br style="font-family: georgia; font-size: 16px; color: #999999;color: #999999;"></p><p class="p1" style="margin: 0; outline: none; padding: 0; color: #999999; font-size: inherit; font-weight: inherit; line-height: inherit; text-decoration: inherit;"><span class="" style="color: #999999; font-size: 16px; font-weight: inherit; line-height: inherit; text-decoration: inherit; font-family: georgia;"><span style="color: #999999; font-size: inherit; font-weight: inherit; line-height: inherit; text-decoration: inherit; font-family: georgia;" class="">Donec tristique, tellus et sodales ornare, orci risus venenatis metus, et scelerisque erat quam sed est. Donec dictum fermentum feugiat. In sed metus sed eros ullamcorper cursus. Vivamus eu magna at lacus tempus egestas.</span><br style="color: #999999;"></span></p> </div><!--[if (gte mso 12)&(lte mso 15) ]>\n<style data-ac-keep="true" data-ac-inline="false"> #text_div21, #text_div21 div { line-height: 140% !important; };\n</style>\n<![endif]--></td></tr></table></td></tr></table></td></tr></table></td></tr></table></td></tr></table></td></tr></table></td></tr><tr><td id="layout-row-margin1" valign="top"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr id="layout-row1" class="layout layout-row widget _widget_spacer "><td id="layout-row-padding1" valign="top"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td valign="top" height="30"><div class="spacer" style="margin: 0; outline: none; padding: 0; height: 30px;"><table cellpadding="0" cellspacing="0" border="0" width="100%" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tbody><tr><td class="spacer-body" valign="top" height="30" width="650"> </td></tr></tbody></table></div></td></tr></table></td></tr></table></td></tr><tr><td id="layout-row-margin2" valign="top" style="padding: 0;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: initial !important;"><tr id="layout-row2" class="layout layout-row widget _widget_text style2" style="margin: 0; padding: 0;"><td id="layout-row-padding2" valign="top" style="padding: 20px;"><table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 13px; min-width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><tr><td id="text_div2" class="td_text td_block" valign="top" align="left" style="line-height: 150%; color: inherit; font-size: 12px; font-weight: inherit; line-height: 1.5; text-decoration: inherit; font-family: Arial; mso-line-height-rule: exactly;"> <div style="line-height: 150%; margin: 0; outline: none; padding: 0; text-align: center; mso-line-height-rule: exactly; line-height: 1.5;" data-line-height="1.5"> <p class="p1" style="margin: 0; outline: none; padding: 0; color: inherit; font-size: inherit; font-weight: inherit; line-height: inherit; text-decoration: inherit;"><span style="color: #555555; font-size: inherit; font-weight: inherit; line-height: inherit; text-decoration: inherit;" class="">%SENDER-INFO-SINGLELINE%</span></p><p class="p1" style="margin: 0; outline: none; padding: 0; color: inherit; font-size: inherit; font-weight: inherit; line-height: inherit; text-decoration: inherit;"><br style="color: #555555;"></p><p class="p1" style="margin: 0; outline: none; padding: 0; color: inherit; font-size: inherit; font-weight: inherit; line-height: inherit; text-decoration: inherit;"><a href="%UNSUBSCRIBELINK%" target="_blank" style="margin: 0; outline: none; padding: 0; color: #555555; text-decoration: underline;" class=""><span style="color: #555555; font-size: inherit; font-weight: inherit; line-height: inherit; text-decoration: inherit;">Click here to unsubscribe</span></a></p></div><!--[if (gte mso 12)&(lte mso 15) ]>\n<style data-ac-keep="true" data-ac-inline="false"> #text_div2, #text_div2 div { line-height: 150% !important; };\n</style>\n<![endif]--></td></tr></table></td></tr></table></td></tr></table></td></tr></table></td></tr></table></div></body></html>\n',
              ],
            },
            htmlfetch: { type: 'string', examples: ['now'] },
            textfetch: { type: 'string', examples: ['now'] },
            hidden: { type: 'string', examples: ['0'] },
            preview_mime: { type: 'string', examples: [''] },
            preview_data: { type: 'string', examples: [''] },
            links: {
              type: 'object',
              properties: {
                user: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/messages/3/user'],
                },
              },
            },
            id: { type: 'string', examples: ['3'] },
            user: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for Message with id 10'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const UpdateANote = {
  body: {
    type: 'object',
    properties: {
      note: {
        properties: {
          note: { type: 'string' },
          reltype: {
            type: 'string',
            description: 'Possible Values: Activity, Deal, DealTask, Subscriber, CustomerAccount',
            examples: ['Subscriber'],
          },
          relid: { type: 'string', examples: [2] },
        },
        required: ['note', 'reltype', 'relid'],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the note to update',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        note: {
          type: 'object',
          properties: {
            relid: { type: 'string', examples: ['107'] },
            reltype: { type: 'string', examples: ['Subscriber'] },
            userid: { type: 'string', examples: ['1'] },
            cdate: { type: 'string', examples: ['2018-09-21T11:52:41-05:00'] },
            mdate: { type: 'string', examples: ['2018-09-28T18:39:44-05:00'] },
            note: { type: 'string', examples: ['This is the text of the note'] },
            links: {
              type: 'object',
              properties: {
                activities: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/notes/1/activities'],
                },
                user: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/notes/1/user'],
                },
                mentions: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/notes/1/mentions'],
                },
                notes: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/notes/1/notes'],
                },
                owner: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/notes/1/owner'],
                },
              },
            },
            id: { type: 'string', examples: ['1'] },
            user: { type: 'string', examples: ['1'] },
            owner: {
              type: 'object',
              properties: {
                type: { type: 'string', examples: ['contact'] },
                id: { type: 'string', examples: ['107'] },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '403': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for Subscriber with id 1'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const UpdateAPipeline = {
  body: {
    type: 'object',
    properties: {
      dealGroup: {
        properties: {
          title: { type: 'string', description: "Pipeline's title", examples: ['Qualifications'] },
          currency: {
            type: 'string',
            description: 'Default currency to assign to new deals that belong to this deal group.',
            examples: ['eur'],
          },
          allgroups: {
            type: 'integer',
            description:
              'Whether all user groups have permission to manage this pipeline. Can be either `1` or `0`. If `1`, all user groups can manage this pipeline. If `0`, only user groups in `dealGroup.groups` parameter can manage this pipeline.',
            default: 1,
            format: 'int32',
            examples: [1],
            minimum: -2147483648,
            maximum: 2147483647,
          },
          allusers: {
            type: 'integer',
            description:
              'Whether new deals get auto-assigned to all users. Can be either `1` or `0`. If `1`, new deals are auto-assigned to all users unless auto-assign is disabled. If `0`, new deals are auto-assigned to only the users in `dealGroup.users` parameter.',
            default: 0,
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
          },
          autoassign: {
            type: 'integer',
            description:
              'Deal auto-assign option. Can be one of `0`, `1`, and `2`. If `0`, auto-assign is disabled. If `1`, Round Robin method is used to auto-assign new deals. If `2`, deals are distributed based on deal values.',
            default: 1,
            format: 'int32',
            examples: [1],
            minimum: -2147483648,
            maximum: 2147483647,
          },
          users: {
            type: 'array',
            description:
              'List of user ids to auto-assign new deals to unless auto-assign option is disabled.',
            items: { type: 'string', examples: ['3'] },
          },
          groups: {
            type: 'array',
            description: 'List of user group ids to allow managing this pipeline.',
            items: { type: 'string' },
          },
        },
        required: [],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Pipeline's id",
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        dealGroup: {
          type: 'object',
          properties: {
            allgroups: { type: 'integer', default: 0, examples: [1] },
            allusers: { type: 'integer', default: 0, examples: [0] },
            autoassign: { type: 'integer', default: 0, examples: [1] },
            cdate: { type: 'string', examples: ['2017-03-30T12:11:30-05:00'] },
            currency: { type: 'string', examples: ['eur'] },
            dealGroupGroups: { type: 'array', items: {} },
            dealGroupUsers: { type: 'array', items: { type: 'string', examples: ['4'] } },
            id: { type: 'string', examples: ['4'] },
            links: {
              type: 'object',
              properties: {
                dealGroupGroups: {
                  type: 'string',
                  examples: ['/api/3/dealGroups/4/dealGroupGroups'],
                },
                dealGroupUsers: {
                  type: 'string',
                  examples: ['/api/3/dealGroups/4/dealGroupUsers'],
                },
                stages: { type: 'string', examples: ['/api/3/dealGroups/4/stages'] },
              },
            },
            title: { type: 'string', examples: ['Qualifications'] },
            udate: { type: 'string', examples: ['2017-03-30T13:44:32-05:00'] },
          },
        },
        dealGroupGroups: { type: 'array', items: {} },
        dealGroupUsers: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              cdate: {},
              dealGroup: { type: 'string', examples: ['4'] },
              id: { type: 'string', examples: ['4'] },
              links: {
                type: 'object',
                properties: {
                  dealGroup: { type: 'string', examples: ['/api/3/dealGroupUsers/4/dealGroup'] },
                  user: { type: 'string', examples: ['/api/3/dealGroupUsers/4/user'] },
                },
              },
              user: { type: 'string', examples: ['3'] },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const UpdateASavedResponse = {
  body: {
    type: 'object',
    properties: {
      savedResponse: {
        properties: {
          title: {
            type: 'string',
            description: 'Title of the saved response being updated',
            examples: ['Response title'],
          },
          subject: {
            type: 'string',
            description: 'Subject of the saved response being updated',
            examples: ['Response subject'],
          },
          body: {
            type: 'string',
            description: 'Body of the saved response being updated',
            examples: ['Response body'],
          },
        },
        required: [],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the saved response to update',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        savedResponse: {
          type: 'object',
          properties: {
            title: { type: 'string', examples: ['New Response Title'] },
            subject: { type: 'string', examples: ['New Response Subject'] },
            body: { type: 'string', examples: ['New Response Body'] },
            ldate: {},
            last_sent_user_id: {},
            cdate: { type: 'string', examples: ['2018-11-16T02:50:54-06:00'] },
            mdate: { type: 'string', examples: ['2018-11-16T11:19:30-06:00'] },
            links: {
              type: 'object',
              properties: {
                user: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/savedResponses/1/user'],
                },
                savedResponseCategorySavedResponse: {
                  type: 'string',
                  examples: [
                    'https://:account.api-us1.com/api/:version/savedResponses/1/savedResponseCategorySavedResponse',
                  ],
                },
              },
            },
            id: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '422': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for SavedResponse with id 0'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const UpdateASchema = {
  body: {
    type: 'object',
    properties: {
      schema: {
        description: 'schema.description',
        properties: {
          slug: { type: 'string', examples: ['stripe-order'] },
          labels: {
            properties: {
              singular: {
                type: 'string',
                description: 'Singular label for Schema',
                examples: ['Stripe Order'],
              },
              plural: {
                type: 'string',
                description: 'Plural label for Schema',
                examples: ['Stripe Orders'],
              },
            },
            required: [],
            type: 'object',
          },
          description: {
            type: 'string',
            description: 'Text description of the Schema',
            examples: ['Orders placed through the Stripe integration'],
          },
          appId: { type: 'string', examples: ['123456'] },
          fields: {
            type: 'array',
            items: {
              properties: {
                id: { type: 'string', description: 'id of the field', examples: ['name'] },
                value: { type: 'mixed type', description: 'Data type, appropriate for the field' },
              },
              type: 'object',
            },
          },
          icons: {
            properties: {
              default: {
                type: 'string',
                description: 'URI location of the default icon shown on Schema',
                examples: ['https://d226aj4ao1t61q.cloudfront.net/n9mayqo2d_customobject.png'],
              },
            },
            required: [],
            type: 'object',
          },
          relationships: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              labels: {
                type: 'object',
                properties: {
                  singular: { type: 'string', description: 'human-readable singular name' },
                  plural: { type: 'string', description: 'human-readable plural name' },
                },
              },
              description: { type: 'string' },
              namespace: { type: 'string' },
              hasMany: { type: 'boolean' },
            },
          },
        },
        required: [],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          ':id': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Id of Schema being updated',
          },
        },
        required: [':id'],
      },
      {
        type: 'object',
        properties: {
          showFields: {
            type: 'string',
            default: 'all',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              'Toggle which fields are shown in the response body of a schema (if there hidden due to e.g. recently being deleted). Omit this parameter entirely to hide fields by default.',
          },
        },
        required: [],
      },
      {
        type: 'object',
        properties: {
          validateOnly: {
            type: 'boolean',
            default: false,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description:
              'When set to `true` the API will validate the schema update without saving changes',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        schema: {
          type: 'object',
          properties: {
            id: { type: 'string', examples: ['schema-9999-9999'] },
            slug: { type: 'string', examples: ['stripe-order'] },
            labels: {
              type: 'object',
              properties: {
                singular: { type: 'string', examples: ['Stripe Order'] },
                plural: { type: 'string', examples: ['Stripe Orders'] },
              },
            },
            description: {
              type: 'string',
              examples: ['Orders placed through the Stripe integration'],
            },
            appId: { type: 'string', examples: ['123456'] },
            fields: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'string', examples: ['name'] },
                  labels: {
                    type: 'object',
                    properties: {
                      singular: { type: 'string', examples: ['Product Name'] },
                      plural: { type: 'string', examples: ['Product Name'] },
                    },
                  },
                  description: {
                    type: 'string',
                    examples: ['Name of the product from the Stripe integration'],
                  },
                  isRequired: { type: 'boolean', default: true, examples: [true] },
                  origin: { type: 'string', examples: ['stripe'] },
                  type: { type: 'string', examples: ['text'] },
                },
              },
            },
            icons: {
              type: 'object',
              properties: {
                default: {
                  type: 'string',
                  examples: ['https://activehosted.com/temp-placeholder.svg'],
                },
              },
            },
            relationships: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'string', examples: ['primary-contact'] },
                  labels: {
                    type: 'object',
                    properties: {
                      singular: { type: 'string', examples: ['Primary Contact'] },
                      plural: { type: 'string', examples: ['Primary Contacts'] },
                    },
                  },
                  description: {
                    type: 'string',
                    examples: ['Products purchased in this Stripe order'],
                  },
                  namespace: { type: 'string', examples: ['contacts'] },
                  hasMany: { type: 'boolean', default: true, examples: [false] },
                },
              },
            },
            createdTimestamp: { type: 'string', examples: ['2021-04-13T21:12:53.390Z'] },
            updatedTimestamp: { type: 'string', examples: ['2021-04-13T21:12:53.390Z'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': { $schema: 'https://json-schema.org/draft/2020-12/schema#' },
    '422': {
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              title: { type: 'string', examples: ['Invalid value for field "{field_name}"'] },
              detail: { type: 'string', examples: ['{description}'] },
              source: {
                type: 'object',
                properties: {
                  type: { type: 'string', examples: ['pointer'] },
                  value: { type: 'string', examples: ['/data/attributes/{field_name}'] },
                },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const UpdateASecondaryContact = {
  body: {
    type: 'object',
    properties: {
      contactDeal: {
        properties: {
          deal: { type: 'string', description: "Deal's id", examples: [1] },
          contact: { type: 'string', description: "Contact's id", examples: [4] },
          role: {
            type: 'integer',
            description: 'role id to associate with the contact',
            format: 'int32',
            examples: [1],
            minimum: -2147483648,
            maximum: 2147483647,
          },
        },
        required: [],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Secondary Contact's id",
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        deals: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              hash: { type: 'string', examples: ['c7b5a271'] },
              owner: { type: 'string', examples: ['1'] },
              contact: { type: 'string', examples: ['2'] },
              organization: {},
              group: { type: 'string', examples: ['1'] },
              stage: { type: 'string', examples: ['1'] },
              title: { type: 'string', examples: ['deal1'] },
              description: { type: 'string', examples: [''] },
              percent: { type: 'string', examples: ['0'] },
              cdate: { type: 'string', examples: ['2018-10-31T13:33:09-05:00'] },
              mdate: { type: 'string', examples: ['2018-10-31T13:33:09-05:00'] },
              nexttaskid: {},
              value: { type: 'string', examples: ['10000'] },
              currency: { type: 'string', examples: ['usd'] },
              winProbability: {},
              winProbabilityMdate: { type: 'string', examples: ['2018-10-31T13:33:09-05:00'] },
              status: { type: 'string', examples: ['0'] },
              activitycount: { type: 'string', examples: ['1'] },
              nextdealid: { type: 'string', examples: ['2'] },
              edate: {},
              links: {
                type: 'object',
                properties: {
                  dealActivities: { type: 'string', examples: ['/api/3/deals/2/dealActivities'] },
                  contact: { type: 'string', examples: ['/api/3/deals/2/contact'] },
                  contactDeals: { type: 'string', examples: ['/api/3/deals/2/contactDeals'] },
                  group: { type: 'string', examples: ['/api/3/deals/2/group'] },
                  nextTask: { type: 'string', examples: ['/api/3/deals/2/nextTask'] },
                  notes: { type: 'string', examples: ['/api/3/deals/2/notes'] },
                  organization: { type: 'string', examples: ['/api/3/deals/2/organization'] },
                  owner: { type: 'string', examples: ['/api/3/deals/2/owner'] },
                  scoreValues: { type: 'string', examples: ['/api/3/deals/2/scoreValues'] },
                  stage: { type: 'string', examples: ['/api/3/deals/2/stage'] },
                  tasks: { type: 'string', examples: ['/api/3/deals/2/tasks'] },
                  dealCustomFieldData: {
                    type: 'string',
                    examples: ['/api/3/deals/2/dealCustomFieldData'],
                  },
                },
              },
              id: { type: 'string', examples: ['2'] },
              isDisabled: { type: 'boolean', default: true, examples: [false] },
            },
          },
        },
        contactDeal: {
          type: 'object',
          properties: {
            deal: { type: 'string', examples: ['2'] },
            contact: { type: 'integer', default: 0, examples: [4] },
            role: { type: 'integer', default: 0, examples: [1] },
            cdate: { type: 'string', examples: ['2019-02-25T08:16:56-06:00'] },
            links: {
              type: 'object',
              properties: {
                deal: { type: 'string', examples: ['/api/3/contactDeals/1/deal'] },
                contact: { type: 'string', examples: ['/api/3/contactDeals/1/contact'] },
              },
            },
            id: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for SubscriberDeal with id 100'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '422': {
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              title: {
                type: 'string',
                examples: ['The given contact is already associated to the deal'],
              },
              detail: { type: 'string', examples: [''] },
              code: { type: 'string', examples: ['field_invalid'] },
              source: {
                type: 'object',
                properties: { pointer: { type: 'string', examples: ['/data/attributes/contact'] } },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const UpdateATag = {
  body: {
    type: 'object',
    properties: {
      tag: {
        description: 'tag.description',
        properties: {
          tag: { type: 'string', description: 'Name of the tag being updated' },
          tagType: {
            type: 'string',
            description: 'Tag-type of the tag being updated. Possible Values: template, contact',
            examples: ['contact'],
          },
          description: {
            type: 'string',
            description: 'Description of the tag being updated',
            examples: ['Description'],
          },
        },
        required: [],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the tag to update',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        tag: {
          type: 'object',
          properties: {
            tagType: { type: 'string', examples: ['contact'] },
            tag: { type: 'string', examples: ['My Tag'] },
            description: { type: 'string', examples: ['Description'] },
            cdate: { type: 'string', examples: ['2018-08-17T13:41:16-05:00'] },
            links: {
              type: 'object',
              properties: {
                contactGoalTags: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/tags/2/contactGoalTags'],
                },
              },
            },
            id: { type: 'string', examples: ['2'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const UpdateATaskOutcome = {
  body: {
    type: 'object',
    required: ['title', 'sentiment'],
    properties: {
      title: {
        type: 'string',
        description: "Task outcome's title. The title should be unique among task outcomes.",
      },
      sentiment: {
        type: 'string',
        description: 'Sentiment of the outcome. Only three values are currently allowed.',
        enum: ['Positive', 'Neutral', 'or Negative'],
      },
      disabled: {
        type: 'string',
        description: '1 is for disabled and 0 is for active outcome.',
        enum: ['0 or 1'],
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Task outcome's id",
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        taskOutcome: {
          type: 'object',
          properties: {
            title: { type: 'string', examples: ['Interested'] },
            sentiment: { type: 'string', examples: ['NEUTRAL'] },
            disabled: { type: 'string', examples: ['0'] },
            created_by: { type: 'string', examples: ['1'] },
            updated_by: { type: 'string', examples: ['1'] },
            created_utc_timestamp: { type: 'string', examples: ['2021-02-16T12:26:15-06:00'] },
            updated_utc_timestamp: { type: 'string', examples: ['2021-02-16T12:27:56-06:00'] },
            links: {
              type: 'object',
              properties: {
                tasktypeOutcomeRels: {
                  type: 'string',
                  examples: [
                    'https://youraccountname.api-us1.com/api/3/taskOutcomes/1/tasktypeOutcomeRels',
                  ],
                },
                dealTasks: {
                  type: 'string',
                  examples: ['https://youraccountname.api-us1.com/api/3/taskOutcomes/1/dealTasks'],
                },
              },
            },
            id: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '422': {
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              title: {
                type: 'string',
                examples: ['A task outcome with the same title already exists.'],
              },
              detail: { type: 'string', examples: [''] },
              code: { type: 'string', examples: ['field_invalid'] },
              error: { type: 'string', examples: [''] },
              source: {
                type: 'object',
                properties: { pointer: { type: 'string', examples: ['/data/attributes/title'] } },
              },
            },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const UpdateATaskOutcome1 = {
  body: {
    type: 'object',
    properties: {
      dealTasktype: {
        properties: {
          title: {
            type: 'string',
            description:
              "Deal task type's title. The title should be unique among deal task types.",
          },
        },
        required: [],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Task type - outcome relation's id",
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        taskOutcome: {
          type: 'object',
          properties: {
            title: { type: 'string', examples: ['Interested'] },
            sentiment: { type: 'string', examples: ['POSITIVE'] },
            disabled: { type: 'string', examples: ['0'] },
            created_by: { type: 'string', examples: ['1'] },
            updated_by: { type: 'string', examples: ['1'] },
            created_utc_timestamp: { type: 'string', examples: ['2021-02-16T12:26:15-06:00'] },
            updated_utc_timestamp: { type: 'string', examples: ['2021-02-16T12:27:56-06:00'] },
            links: {
              type: 'object',
              properties: {
                tasktypeOutcomeRels: {
                  type: 'string',
                  examples: [
                    'https://task-outcomes.staging.api-us1.com/api/3/taskOutcomes/1/tasktypeOutcomeRels',
                  ],
                },
                dealTasks: {
                  type: 'string',
                  examples: [
                    'https://task-outcomes.staging.api-us1.com/api/3/taskOutcomes/1/dealTasks',
                  ],
                },
              },
            },
            id: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '422': {
      oneOf: [
        {
          type: 'object',
          properties: {
            errors: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  title: { type: 'string', examples: ['The taskOutcome title was not provided.'] },
                  detail: { type: 'string', examples: [''] },
                  code: { type: 'string', examples: ['field_missing'] },
                  error: { type: 'string', examples: ['taskOutcome_title_was_not_provided'] },
                  source: {
                    type: 'object',
                    properties: {
                      pointer: { type: 'string', examples: ['/data/attributes/title'] },
                    },
                  },
                },
              },
            },
          },
        },
        {
          type: 'object',
          properties: {
            errors: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  title: {
                    type: 'string',
                    examples: ['A task outcome with the same title already exists.'],
                  },
                  detail: { type: 'string', examples: [''] },
                  code: { type: 'string', examples: ['field_invalid'] },
                  error: { type: 'string', examples: [''] },
                  source: {
                    type: 'object',
                    properties: {
                      pointer: { type: 'string', examples: ['/data/attributes/title'] },
                    },
                  },
                },
              },
            },
          },
        },
      ],
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const UpdateAnAccountNew = {
  body: {
    type: 'object',
    properties: {
      account: {
        properties: {
          name: { type: 'string', description: "Account's name", examples: ['Exmaple Account'] },
          accountUrl: {
            type: 'string',
            description: "Account's website",
            examples: ['https://www.example.com'],
          },
          fields: {
            type: 'array',
            description:
              "Account's custom field values `{customFieldId: int, fieldValue: string, fieldCurrency?:string}[]`",
            items: {
              properties: {
                customFieldId: {
                  type: 'integer',
                  description: 'Field ID, ID of the Custom Field Meta Data',
                  format: 'int32',
                  examples: [9],
                  minimum: -2147483648,
                  maximum: 2147483647,
                },
                fieldValue: {
                  type: 'string',
                  description:
                    'Updated field value. For `currency` field, this needs to be in cents not dollars (or 100 x Base Unit).',
                  examples: ['500-1000'],
                },
                fieldCurrency: {
                  type: 'string',
                  description:
                    'Required only for the `currency` field type. The three letter currency code for the currency value',
                },
              },
              required: ['customFieldId', 'fieldValue'],
              type: 'object',
            },
          },
          owner: {
            type: 'integer',
            description: 'The userId of the Account owner.',
            default: 1,
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
          },
        },
        required: [],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Account's id",
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        account: {
          type: 'object',
          properties: {
            name: { type: 'string', examples: ['Exmaple Account'] },
            accountUrl: { type: 'string', examples: ['https://www.example.com'] },
            createdTimestamp: { type: 'string', examples: ['2019-04-03T13:57:31-05:00'] },
            updatedTimestamp: { type: 'string', examples: ['2019-06-12T16:55:32-05:00'] },
            links: { type: 'array', items: {} },
            fields: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  customFieldId: { type: 'integer', default: 0, examples: [9] },
                  fieldValue: { type: 'string', examples: ['501 - 1000'] },
                  accountId: { type: 'string', examples: ['1'] },
                },
              },
            },
            id: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const UpdateAnAddress = {
  body: {
    type: 'object',
    properties: {
      address: {
        properties: {
          groupid: { type: 'integer', format: 'int32', minimum: -2147483648, maximum: 2147483647 },
          global: { type: 'mixed type' },
          company_name: { type: 'string' },
          address_1: { type: 'string' },
          address_2: { type: 'string' },
          city: { type: 'string', examples: ['New Test City'] },
          state: { type: 'string', examples: ['Florida'] },
          zip: { type: 'string', examples: ['12345'] },
          district: { type: 'string', description: '(Optional for countries that use it)' },
          country: {
            type: 'string',
            description: "Accepts a (2) two character string - country code (eg 'US', 'CA', 'MX')",
            examples: ['US'],
          },
          allgroup: { type: 'integer', format: 'int32', minimum: -2147483648, maximum: 2147483647 },
          is_default: { type: 'boolean', description: 'Indicates default address' },
        },
        required: ['company_name', 'address_1', 'country'],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          ':id': {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the Address being changed',
          },
        },
        required: [':id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        address: {
          type: 'object',
          properties: {
            companyName: { type: 'string', examples: ['New Test Company Name'] },
            address1: { type: 'string', examples: ['111 New Test Address'] },
            address2: { type: 'string', examples: [''] },
            city: { type: 'string', examples: ['New Test City'] },
            state: { type: 'string', examples: ['Florida'] },
            district: { type: 'string', examples: [''] },
            zip: { type: 'string', examples: ['12345'] },
            country: { type: 'string', examples: ['US'] },
            allgroup: { type: 'string', examples: ['0'] },
            isDefault: { type: 'string', examples: ['1'] },
            links: {
              type: 'object',
              properties: {
                addressGroup: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/addresses/1/addressGroup'],
                },
                addressList: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/addresses/1/addressList'],
                },
                forms: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/addresses/1/forms'],
                },
              },
            },
            id: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '404': {
      type: 'object',
      properties: {
        message: { type: 'string', examples: ['No Result found for Address with id 3'] },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const UpdateAnAssociation1 = {
  body: {
    type: 'object',
    properties: {
      accountContact: {
        properties: {
          account: {
            type: 'integer',
            description: 'Account ID',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
          },
          contact: {
            type: 'integer',
            description: 'Contact ID',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
          },
          jobTitle: {
            type: 'string',
            description: 'Job Title of the contact at the account',
            examples: ['Product Manager'],
          },
        },
        required: ['account', 'contact'],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: "Association's ID",
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        accountContact: {
          type: 'object',
          properties: {
            account: { type: 'string', examples: ['3'] },
            contact: { type: 'string', examples: ['2'] },
            jobTitle: { type: 'string', examples: ['CEO'] },
            createdTimestamp: { type: 'string', examples: ['2019-06-26T11:26:15-05:00'] },
            updatedTimestamp: { type: 'string', examples: ['2019-06-26T11:29:57-05:00'] },
            links: {
              type: 'object',
              properties: {
                account: {
                  type: 'string',
                  examples: ['http://hosted.localdev/api/3/accountContacts/19/account'],
                },
                contact: {
                  type: 'string',
                  examples: ['http://hosted.localdev/api/3/accountContacts/19/contact'],
                },
              },
            },
            id: { type: 'string', examples: ['19'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const UpdateBranding = {
  body: {
    type: 'object',
    properties: {
      branding: {
        properties: {
          groupid: {
            type: 'integer',
            description: 'The group ID. This value will always be 3.',
            default: 3,
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
          },
          siteName: {
            type: 'string',
            description: "Title of software. Example: 'ActiveCampaign Email Marketing'",
          },
          siteLogo: { type: 'string' },
          siteLogoSmall: {
            type: 'string',
            description: 'URL of small logo. Small logos appear in the header of the admin panel.',
          },
          headerTextValue: {
            type: 'string',
            description: 'Content of non-removable header. Example: text header content',
          },
          headerHtmlValue: {
            type: 'string',
            description: 'Content of non-removable header. Example: <p>header content here</p>',
          },
          footerTextValue: {
            type: 'string',
            description: 'Content of non-removeable footer. Example: text footer content',
          },
          footerHtmlValue: {
            type: 'string',
            description: 'Content of non-removeable footer. Example: <p>footer content here</p>',
          },
          copyright: { type: 'boolean', description: 'unknown' },
          version: { type: 'boolean', description: 'unknown' },
          license: { type: 'boolean', description: 'unknown' },
          links: {
            type: 'boolean',
            description:
              'External links. To enable (which is the default) exclude this parameter entirely. To disable (remove our branding), just pass this parameter with any value.',
          },
          help: { type: 'string' },
          adminTemplateHtm: {
            type: 'string',
            description: 'The actual HTML template (ONLY AVAILABLE FOR CERTAIN PLANS)',
          },
          adminTemplateCss: {
            type: 'string',
            description:
              'The actual CSS. Example: test color: green; (ONLY AVAILABLE FOR CERTAIN PLANS)',
          },
          publicTemplateHtm: {
            type: 'string',
            description: 'The actual HTML template (ONLY AVAILABLE FOR CERTAIN PLANS)',
          },
          publicTemplateCss: {
            type: 'string',
            description:
              'The actual CSS. Example: test color: green; (ONLY AVAILABLE FOR CERTAIN PLANS)',
          },
          favicon: { type: 'string', description: 'URL of the favicon.' },
        },
        required: [],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            default: 1,
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'Branding ID',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        branding: {
          type: 'object',
          properties: {
            groupid: { type: 'string', examples: ['3'] },
            siteName: { type: 'string', examples: ['ActiveCampaign Email Marketing'] },
            siteLogo: { type: 'string', examples: ['http://mysite.com/logo.jpg'] },
            siteLogoSmall: { type: 'string', examples: ['http://mysite.com/logo_small.jpg'] },
            headerTextValue: { type: 'string', examples: ['my custom text header'] },
            headerHtmlValue: { type: 'string', examples: ['<p>my custom HTML header</p>'] },
            footerTextValue: { type: 'string', examples: ['my custom text footer'] },
            footerHtmlValue: { type: 'string', examples: ['<p>my custom HTML footer</p>'] },
            copyright: { type: 'string', examples: ['1'] },
            version: { type: 'string', examples: ['1'] },
            license: { type: 'string', examples: ['1'] },
            links: { type: 'string', examples: ['1'] },
            help: { type: 'string', examples: ['1'] },
            adminTemplateHtm: { type: 'string', examples: [''] },
            adminTemplateCss: { type: 'string', examples: [''] },
            publicTemplateHtm: { type: 'string', examples: [''] },
            publicTemplateCss: { type: 'string', examples: [''] },
            favicon: {},
            id: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const UpdateConnection = {
  body: {
    type: 'object',
    properties: {
      connection: {
        properties: {
          service: { type: 'string', description: 'The name of the service.' },
          externalid: {
            type: 'string',
            description: 'The id of the account in the external service.',
            examples: ['johndoe@example.com'],
          },
          name: {
            type: 'string',
            description: 'The name associated with the account in the external service.',
            examples: ['Acme, Inc.'],
          },
          logoUrl: {
            type: 'string',
            description: 'The URL to a logo image for the third-party service.',
          },
          linkUrl: {
            type: 'string',
            description: "The link to the third-party integrator's site.",
          },
          status: {
            type: 'integer',
            description: 'The status of the connection (0 = error; 1 = connected)',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
          },
          syncStatus: {
            type: 'integer',
            description:
              'The status of a sync triggered on the connection (0 = sync stopped; 1 = sync running).',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
          },
        },
        required: [],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'The id of the connection to update',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        connection: {
          type: 'object',
          properties: {
            service: { type: 'string', examples: ['fooCommerce'] },
            externalid: { type: 'string', examples: ['johndoe@example.com'] },
            name: { type: 'string', examples: ['Acme, Inc.'] },
            isInternal: { type: 'string', examples: ['0'] },
            status: { type: 'string', examples: ['1'] },
            syncStatus: { type: 'string', examples: ['0'] },
            logoUrl: { type: 'string', examples: ['http://foocorp.net/i/path3523.png'] },
            linkUrl: { type: 'string', examples: ['http://example.com/'] },
            cdate: { type: 'string', examples: ['2017-02-02T14:56:05-06:00'] },
            udate: { type: 'string', examples: ['2017-02-03T15:54:51-06:00'] },
            links: {
              type: 'object',
              properties: {
                customers: { type: 'string', examples: ['/api/3/connections/2/customers'] },
              },
            },
            id: { type: 'string', examples: ['2'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const UpdateCustomer = {
  body: {
    type: 'object',
    properties: {
      ecomCustomer: {
        properties: {
          externalid: {
            type: 'string',
            description: 'The id of the customer in the external service.',
            examples: ['98765'],
          },
          connectionid: {
            type: 'string',
            description:
              'The id of the connection object for the service where the customer originates.',
          },
          email: { type: 'string', description: 'The email address of the customer.' },
          acceptsMarketing: {
            type: 'string',
            description:
              'Indication of whether customer has opt-ed in to marketing communications. 0 = not opted-in, 1 = opted-in. A value of 0 means the contact will match the "Has not opted in to marketing" segment condition and a value of 1 means the contact will match the "Has opted in to marketing" segment condition.',
          },
        },
        required: [],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'The id of the customer to update',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        ecomCustomer: {
          type: 'object',
          properties: {
            connectionid: { type: 'string', examples: ['1'] },
            externalid: { type: 'string', examples: ['98765'] },
            email: { type: 'string', examples: ['alice@example.com'] },
            totalRevenue: { type: 'string', examples: ['3280'] },
            totalOrders: { type: 'string', examples: ['2'] },
            totalProducts: { type: 'string', examples: ['2'] },
            avgRevenuePerOrder: { type: 'string', examples: ['2285'] },
            avgProductCategory: { type: 'string', examples: ['Electronics'] },
            tstamp: { type: 'string', examples: ['2017-02-06T14:05:31-06:00'] },
            links: {
              type: 'object',
              properties: {
                connection: { type: 'string', examples: ['/api/3/ecomCustomers/1/connection'] },
                orders: { type: 'string', examples: ['/api/3/ecomCustomers/1/orders'] },
              },
            },
            id: { type: 'string', examples: ['1'] },
            connection: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const UpdateListStatusForContact = {
  body: {
    type: 'object',
    properties: {
      contactList: {
        properties: {
          list: {
            type: 'string',
            description: 'ID of the list to subscribe the contact to',
            examples: [2],
          },
          contact: {
            type: 'string',
            description: 'ID of the contact to subscribe to the list',
            examples: [1],
          },
          status: {
            type: 'string',
            description:
              'Set to "1" to subscribe the contact to the list. Set to "2" to unsubscribe the contact from the list. WARNING: If you change a status from unsubscribed to active, you can re-subscribe a contact to a list from which they had manually unsubscribed.',
            examples: [1],
          },
          sourceid: {
            type: 'integer',
            description: 'Set to "4" when re-subscribing a contact to a list',
            default: 0,
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
          },
        },
        required: ['list', 'contact', 'status'],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        contacts: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              cdate: { type: 'string', examples: ['2017-07-24T12:09:52-05:00'] },
              email: { type: 'string', examples: ['johndoe@example.com'] },
              phone: { type: 'string', examples: [''] },
              firstName: { type: 'string', examples: ['John'] },
              lastName: { type: 'string', examples: ['Doe'] },
              orgid: { type: 'string', examples: ['0'] },
              segmentio_id: { type: 'string', examples: [''] },
              bounced_hard: { type: 'string', examples: ['0'] },
              bounced_soft: { type: 'string', examples: ['0'] },
              bounced_date: { type: 'string', examples: ['0000-00-00'] },
              ip: { type: 'string', examples: ['0'] },
              ua: { type: 'string', examples: [''] },
              hash: { type: 'string', examples: ['1234567890'] },
              socialdata_lastcheck: { type: 'string', examples: ['0000-00-00 00:00:00'] },
              email_local: { type: 'string', examples: [''] },
              email_domain: { type: 'string', examples: [''] },
              sentcnt: { type: 'string', examples: ['1'] },
              rating_tstamp: { type: 'string', examples: ['0000-00-00'] },
              gravatar: { type: 'string', examples: ['0'] },
              deleted: { type: 'string', examples: ['0'] },
              anonymized: { type: 'string', examples: ['0'] },
              adate: { type: 'string', examples: ['2018-10-16T13:52:32-05:00'] },
              udate: { type: 'string', examples: ['2018-10-16T13:50:18-05:00'] },
              deleted_at: { type: 'string', examples: ['0000-00-00 00:00:00'] },
              created_utc_timestamp: { type: 'string', examples: ['2018-10-01 08:40:10'] },
              updated_utc_timestamp: { type: 'string', examples: ['2018-10-16 13:50:18'] },
              links: {
                type: 'object',
                properties: {
                  bounceLogs: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/1/bounceLogs'],
                  },
                  contactAutomations: {
                    type: 'string',
                    examples: [
                      'https://:account.api-us1.com/api/:version/contacts/1/contactAutomations',
                    ],
                  },
                  contactData: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/1/contactData'],
                  },
                  contactGoals: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/1/contactGoals'],
                  },
                  contactLists: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/1/contactLists'],
                  },
                  contactLogs: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/1/contactLogs'],
                  },
                  contactTags: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/1/contactTags'],
                  },
                  contactDeals: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/1/contactDeals'],
                  },
                  deals: {
                    type: 'string',
                    examples: ['https://staging-tjahn.api-us1.com/api/3/contacts/1/deals'],
                  },
                  fieldValues: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/1/fieldValues'],
                  },
                  geoIps: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/1/geoIps'],
                  },
                  notes: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/1/notes'],
                  },
                  organization: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/1/organization'],
                  },
                  plusAppend: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/1/plusAppend'],
                  },
                  trackingLogs: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/1/trackingLogs'],
                  },
                  scoreValues: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/:version/contacts/1/scoreValues'],
                  },
                },
              },
              id: { type: 'string', examples: ['1'] },
              organization: {},
            },
          },
        },
        contactList: {
          type: 'object',
          properties: {
            contact: { type: 'string', examples: ['1'] },
            list: { type: 'string', examples: ['2'] },
            form: {},
            seriesid: { type: 'string', examples: ['0'] },
            sdate: { type: 'string', examples: ['2018-10-16T13:52:35-05:00'] },
            status: { type: 'integer', default: 0, examples: [1] },
            responder: { type: 'string', examples: ['1'] },
            sync: { type: 'string', examples: ['0'] },
            unsubreason: { type: 'string', examples: [''] },
            campaign: {},
            message: {},
            first_name: { type: 'string', examples: ['John'] },
            last_name: { type: 'string', examples: ['Doe'] },
            ip4Sub: { type: 'string', examples: ['0'] },
            sourceid: { type: 'string', examples: ['3'] },
            autosyncLog: {},
            ip4_last: { type: 'string', examples: ['0'] },
            ip4Unsub: { type: 'string', examples: ['0'] },
            unsubscribeAutomation: {},
            links: {
              type: 'object',
              properties: {
                automation: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/contactLists/2/automation'],
                },
                list: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/contactLists/2/list'],
                },
                contact: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/contactLists/2/contact'],
                },
                form: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/contactLists/2/form'],
                },
                autosyncLog: {
                  type: 'string',
                  examples: [
                    'https://:account.api-us1.com/api/:version/contactLists/2/autosyncLog',
                  ],
                },
                campaign: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/contactLists/2/campaign'],
                },
                unsubscribeAutomation: {
                  type: 'string',
                  examples: [
                    'https://:account.api-us1.com/api/:version/contactLists/2/unsubscribeAutomation',
                  ],
                },
                message: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/:version/contactLists/2/message'],
                },
              },
            },
            id: { type: 'string', examples: ['2'] },
            automation: {},
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const UpdateOrder = {
  body: {
    type: 'object',
    properties: {
      ecomOrder: {
        properties: {
          externalid: {
            type: 'string',
            description:
              'The id of the order in the external service. ONLY REQUIRED IF EXTERNALCHECKOUTID NOT INCLUDED.',
            examples: ['3246315237'],
          },
          externalcheckoutid: {
            type: 'string',
            description:
              'The id of the cart in the external service. ONLY REQUIRED IF EXTERNALID IS NOT INCLUDED.',
          },
          email: {
            type: 'string',
            description: 'The email address of the customer who placed the order.',
            examples: ['alice@example.com'],
          },
          orderProducts: {
            description: 'ecomOrder.orderProducts.description',
            properties: {
              name: { type: 'string', description: 'The name of the product' },
              price: {
                type: 'integer',
                description:
                  'The price of the product, in cents. (i.e. $456.78 => 45678). Must be greater than or equal to zero.',
                format: 'int32',
                minimum: -2147483648,
                maximum: 2147483647,
              },
              quantity: {
                type: 'integer',
                description: 'The quantity ordered.',
                format: 'int32',
                minimum: -2147483648,
                maximum: 2147483647,
              },
              externalid: {
                type: 'string',
                description: 'The id of the product in the external service.',
              },
              category: { type: 'string', description: 'The category of the product.' },
              sku: { type: 'string', description: 'The SKU for the product' },
              description: { type: 'string', description: 'The description of the product' },
              imageUrl: {
                type: 'string',
                description: 'An Image URL that displays an image of the product',
              },
              productUrl: {
                type: 'string',
                description: 'A URL linking to the product in your store',
              },
            },
            required: [],
            type: 'object',
          },
          totalPrice: {
            type: 'integer',
            description:
              'The total price of the order in cents, including tax and shipping charges. (i.e. $456.78 => 45678). Must be greater than or equal to zero.',
            format: 'int32',
            examples: [9111],
            minimum: -2147483648,
            maximum: 2147483647,
          },
          shippingAmount: {
            type: 'integer',
            description: 'The total shipping amount in cents for the order',
            format: 'int32',
            examples: [200],
            minimum: -2147483648,
            maximum: 2147483647,
          },
          taxAmount: {
            type: 'integer',
            description: 'The total tax amount for the order in cents',
            format: 'int32',
            examples: [500],
            minimum: -2147483648,
            maximum: 2147483647,
          },
          discountAmount: {
            type: 'integer',
            description: 'The total discount amount for the order in cents',
            format: 'int32',
            examples: [100],
            minimum: -2147483648,
            maximum: 2147483647,
          },
          currency: {
            type: 'string',
            description: "The currency of the order (3-digit ISO code, e.g., 'USD').",
            examples: ['USD'],
          },
          orderUrl: {
            type: 'string',
            description: 'The URL for the order in the external service.',
          },
          externalUpdatedDate: {
            type: 'string',
            description: 'The date the order was updated.',
            examples: ['2016-09-15T17:41:39-04:00'],
          },
          abandonedDate: {
            type: 'string',
            description:
              'The date the cart was abandoned. REQUIRED ONLY IF INCLUDING EXTERNALCHECKOUTID.',
          },
          shippingMethod: {
            type: 'string',
            description: 'The shipping method of the order.',
            examples: ['UPS Ground'],
          },
          orderNumber: {
            type: 'string',
            description:
              'The order number in your system. This can be different than the external ID.',
            examples: ['12345-1'],
          },
          orderDiscounts: {
            properties: {
              name: { type: 'string', description: 'The discount code or name of the discount' },
              type: {
                type: 'string',
                description:
                  "The type of discount, either 'order' for discount on the order, or 'shipping' for free shipping.",
              },
              discountAmount: {
                type: 'string',
                description: 'The amount of the discount in cents.',
              },
            },
            required: [],
            type: 'object',
          },
        },
        required: [],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'The ID of the order to update',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        ecomOrderProducts: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              orderid: { type: 'string', examples: ['1'] },
              connectionid: { type: 'string', examples: ['1'] },
              externalid: { type: 'string', examples: ['PROD12345'] },
              sku: { type: 'string', examples: ['POGO-12'] },
              name: { type: 'string', examples: ['Pogo Stick'] },
              description: { type: 'string', examples: ['lorem ipsum...'] },
              price: { type: 'string', examples: ['4900'] },
              quantity: { type: 'string', examples: ['1'] },
              category: { type: 'string', examples: ['Toys'] },
              imageUrl: { type: 'string', examples: ['https://example.com/product.jpg'] },
              productUrl: { type: 'string', examples: ['https://store.example.com/product12345'] },
              createdDate: { type: 'string', examples: ['2019-09-05T13:55:37-05:00'] },
              updatedDate: { type: 'string', examples: ['2019-09-05T13:55:37-05:00'] },
              tstamp: { type: 'string', examples: ['2019-09-05T13:55:37-05:00'] },
              links: {
                type: 'object',
                properties: {
                  ecomOrder: {
                    type: 'string',
                    examples: [
                      'https://youraccounthere.api-us1.com/api/3/ecomOrderProducts/1/ecomOrder',
                    ],
                  },
                },
              },
              id: { type: 'string', examples: ['3'] },
              ecomOrder: { type: 'string', examples: ['1'] },
            },
          },
        },
        ecomOrderDiscounts: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              name: { type: 'string', examples: ['1OFF'] },
              type: { type: 'string', examples: ['order'] },
              orderid: { type: 'string', examples: ['5355'] },
              discountAmount: { type: 'string', examples: ['100'] },
              id: { type: 'string', examples: ['1'] },
              createdDate: { type: 'string', examples: ['2019-09-05T12:16:18-05:00'] },
              updatedDate: { type: 'string', examples: ['2019-09-05T12:16:18-05:00'] },
            },
          },
        },
        ecomOrder: {
          type: 'object',
          properties: {
            customerid: { type: 'string', examples: ['1'] },
            connectionid: { type: 'string', examples: ['1'] },
            state: { type: 'string', examples: ['1'] },
            source: { type: 'string', examples: ['1'] },
            externalid: { type: 'string', examples: ['3246315237'] },
            orderNumber: { type: 'string', examples: [''] },
            email: { type: 'string', examples: ['alice@example.com'] },
            totalPrice: { type: 'integer', default: 0, examples: [9111] },
            discountAmount: { type: 'integer', default: 0, examples: [100] },
            shippingAmount: { type: 'integer', default: 0, examples: [200] },
            taxAmount: { type: 'integer', default: 0, examples: [500] },
            totalProducts: { type: 'integer', default: 0, examples: [2] },
            currency: { type: 'string', examples: ['USD'] },
            shippingMethod: { type: 'string', examples: ['UPS Ground'] },
            orderUrl: { type: 'string', examples: ['https://example.com/orders/3246315233'] },
            externalCreatedDate: { type: 'string', examples: ['2016-09-13T16:41:39-05:00'] },
            externalUpdatedDate: { type: 'string', examples: ['2016-09-15T16:41:39-05:00'] },
            createdDate: { type: 'string', examples: ['2019-09-05T12:52:13-05:00'] },
            updatedDate: { type: 'string', examples: ['2019-09-05T13:55:37-05:00'] },
            orderProducts: { type: 'array', items: { type: 'string', examples: ['3'] } },
            orderDiscounts: { type: 'array', items: { type: 'string', examples: ['1'] } },
            customer: { type: 'string', examples: ['1'] },
            orderDate: { type: 'string', examples: ['2016-09-13T16:41:39-05:00'] },
            tstamp: { type: 'string', examples: ['2019-09-05T13:55:37-05:00'] },
            links: {
              type: 'object',
              properties: {
                connection: {
                  type: 'string',
                  examples: ['https://youraccounthere.api-us1.com/api/3/ecomOrders/1/connection'],
                },
                customer: {
                  type: 'string',
                  examples: ['https://youraccounthere.api-us1.com/api/3/ecomOrders/1/customer'],
                },
                orderProducts: {
                  type: 'string',
                  examples: [
                    'https://youraccounthere.api-us1.com/api/3/ecomOrders/1/orderProducts',
                  ],
                },
                orderDiscounts: {
                  type: 'string',
                  examples: [
                    'https://exampleaccount.api-us1.com/api/3/ecomOrders/1/orderDiscounts',
                  ],
                },
                orderActivities: {
                  type: 'string',
                  examples: [
                    'https://youraccounthere.api-us1.com/api/3/ecomOrders/1/orderActivities',
                  ],
                },
              },
            },
            id: { type: 'string', examples: ['1'] },
            connection: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const UpdateTask = {
  body: {
    type: 'object',
    properties: {
      dealTask: {
        properties: {
          title: { type: 'string', description: 'The title to be assigned to the task' },
          ownerType: {
            type: 'string',
            description:
              'The name of the relating object. Valid values are `contact` or `deal`. (see relationships table)',
            default: 'deal',
          },
          relid: {
            type: 'integer',
            description: 'The id of the relational object for this task',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
          },
          status: {
            type: 'integer',
            description:
              'Task status means complete or incomplete. 1 is complete and 0 is incomplete.',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
          },
          note: { type: 'string', description: 'The content describing the task' },
          duedate: { type: 'string', description: 'Due date of the task', format: 'date' },
          dealTasktype: {
            type: 'integer',
            description: 'The type of the task based on the available Task Types in the account',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
          },
          assignee: {
            type: 'integer',
            description: 'The id of an user the task will be assigned to',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
          },
          outcomeId: {
            type: 'integer',
            description: "Task outcome's id is required at the time of task being completed.",
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
          },
          outcomeInfo: {
            type: 'string',
            description: 'More information about task completion with the outcome selection.',
          },
        },
        required: [],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'The ID of the task',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '201': { $schema: 'https://json-schema.org/draft/2020-12/schema#' },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const UpdateUser = {
  body: {
    type: 'object',
    properties: {
      user: {
        properties: {
          username: { type: 'string', description: 'Username. Username cannot be changed!' },
          password: { type: 'string', description: "Password. Example: 'newpassword'" },
          email: {
            type: 'string',
            description: "Email address of the user. Example: 'test@example.com'",
          },
          firstName: {
            type: 'string',
            description: "First name of the user. Example: 'FirstName'",
          },
          lastName: { type: 'string', description: "Last name of the user. Example: 'LastName'" },
          group: {
            type: 'integer',
            description: 'Assign to Groups',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
          },
        },
        required: [],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'ID of the user',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        userGroups: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              userid: { type: 'string', examples: ['3'] },
              groupid: { type: 'string', examples: ['3'] },
              links: {
                type: 'object',
                properties: {
                  group: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/userGroups/3/group'],
                  },
                  user: {
                    type: 'string',
                    examples: ['https://:account.api-us1.com/api/3/userGroups/3/user'],
                  },
                },
              },
              id: { type: 'string', examples: ['3'] },
              group: { type: 'string', examples: ['3'] },
              user: { type: 'string', examples: ['3'] },
            },
          },
        },
        user: {
          type: 'object',
          properties: {
            username: { type: 'string', examples: ['user'] },
            firstName: { type: 'string', examples: ['John'] },
            lastName: { type: 'string', examples: ['Doe'] },
            email: { type: 'string', examples: ['johndoe@example.com'] },
            phone: { type: 'string', examples: [''] },
            signature: { type: 'string', examples: [''] },
            userGroup: { type: 'string', examples: ['3'] },
            links: {
              type: 'object',
              properties: {
                lists: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/users/3/lists'],
                },
                userGroup: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/users/3/userGroup'],
                },
                dealGroupTotals: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/users/3/dealGroupTotals'],
                },
                dealGroupUsers: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/users/3/dealGroupUsers'],
                },
                configs: {
                  type: 'string',
                  examples: ['https://:account.api-us1.com/api/3/users/3/configs'],
                },
              },
            },
            id: { type: 'string', examples: ['3'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
const UpdateWebhook = {
  body: {
    type: 'object',
    properties: {
      webhook: {
        properties: {
          name: {
            type: 'string',
            description: 'A name (or label) to give the webhook.',
            examples: ['My Hook'],
          },
          url: {
            type: 'string',
            description:
              'The URL where the webhook will send the POST request when the event occurs.',
            examples: ['http://example.com/my-hook'],
          },
          events: {
            type: 'array',
            description:
              'The The [event(s)](#section-events) that will trigger the webhook to fire. that will trigger the webhook to fire.',
            items: { type: 'string', examples: ['subscribe'] },
          },
          sources: {
            type: 'array',
            description: 'The [source(s)](#section-sources) causing an event to occur.',
            items: { type: 'string', examples: ['public'] },
          },
          listid: {
            type: 'integer',
            description: 'The id of a list associated with an event (required for some events).',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
          },
        },
        required: [],
        type: 'object',
      },
    },
    $schema: 'https://json-schema.org/draft/2020-12/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32',
            minimum: -2147483648,
            maximum: 2147483647,
            $schema: 'https://json-schema.org/draft/2020-12/schema#',
            description: 'The webhook id',
          },
        },
        required: ['id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        webhook: {
          type: 'object',
          properties: {
            cdate: { type: 'string', examples: ['2016-01-01T12:00:00-00:00'] },
            listid: { type: 'string', examples: ['0'] },
            name: { type: 'string', examples: ['My Hook'] },
            url: { type: 'string', examples: ['http://example.com/my-hook'] },
            events: { type: 'array', items: { type: 'string', examples: ['subscribe'] } },
            sources: { type: 'array', items: { type: 'string', examples: ['public'] } },
            links: { type: 'array', items: {} },
            id: { type: 'string', examples: ['1'] },
          },
        },
      },
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
    '400': {
      type: 'object',
      properties: {},
      $schema: 'https://json-schema.org/draft/2020-12/schema#',
    },
  },
} as const;
export {
  AddDomainToWhitelist,
  Brandings,
  BulkCreateACustomAccountFieldValue,
  BulkCreateACustomDealFieldValue,
  BulkDeleteAccounts,
  BulkImportContacts,
  BulkImportStatusInfo,
  BulkImportStatusList,
  BulkUpdateACustomAccountFieldValue,
  BulkUpdateACustomFieldValue,
  BulkUpdateDealOwners,
  CreateACalendarFeed,
  CreateAChildSchema,
  CreateAContactCustomField,
  CreateACustomFieldRelationshipToLists,
  CreateACustomFieldValue,
  CreateACustomfieldmeta,
  CreateADealNew,
  CreateADealNote,
  CreateADealRole,
  CreateADealStage,
  CreateADealTaskType,
  CreateAListGroupPermission,
  CreateANewContact,
  CreateANewEventNameOnly,
  CreateANewGroup,
  CreateANewTag,
  CreateANote,
  CreateAPipeline,
  CreateAPublicSchema,
  CreateASchema,
  CreateASecondaryContact,
  CreateATaskOutcome,
  CreateATaskOutcome1,
  CreateATaskReminder,
  CreateAnAccount1,
  CreateAnAccountNew,
  CreateAnAccountNote,
  CreateAnAddress,
  CreateConnection,
  CreateContactTag,
  CreateCustomDealFieldMeta,
  CreateCustomDealFieldValue,
  CreateCustomFieldOptions,
  CreateCustomer,
  CreateFieldvalue,
  CreateNewContactautomation,
  CreateNewList,
  CreateOrUpdateRecord,
  CreateOrder,
  CreateTask,
  CreateUser,
  CreateWebhook,
  DeleteAContactautomation,
  DeleteACustomDealFieldData,
  DeleteACustomDealFieldMeta,
  DeleteACustomField,
  DeleteACustomFieldRelationshipToLists,
  DeleteACustomFieldValue,
  DeleteADeal,
  DeleteADealRole,
  DeleteADealStage,
  DeleteADealTaskType,
  DeleteAField,
  DeleteAField1,
  DeleteAFieldvalue1,
  DeleteAGroup1,
  DeleteAList,
  DeleteAMessage,
  DeleteAPipeline,
  DeleteARecord,
  DeleteARecordByExternalId,
  DeleteASchema,
  DeleteASecondaryContact,
  DeleteATag,
  DeleteATaskOutcome,
  DeleteATaskTypeOutcomeRelation,
  DeleteAnAccount,
  DeleteAnAddress,
  DeleteAnAddressgroup,
  DeleteAnAddresslist,
  DeleteAnAssociation1,
  DeleteConnection,
  DeleteContact,
  DeleteCustomer,
  DeleteNote,
  DeleteOrder,
  DeleteTask,
  DeleteUser,
  DeleteWebhook,
  EnableDisableEventTracking,
  EnableDisableSiteTracking,
  Forms1,
  GetAListOfWebhookEvents,
  GetAListOfWebhooks,
  GetASavedresponse,
  GetASingleRecord,
  GetASingleRecordUsingExternalId,
  GetBranding,
  GetConnection,
  GetContact,
  GetContactByEventId,
  GetContactsTrackingLogsevents,
  GetCustomer,
  GetOrder,
  GetTask,
  GetUser,
  GetUserEmail,
  GetUserLoggedin,
  GetUserUsername,
  GetWebhook,
  ListAllAccounts,
  ListAllAddresses,
  ListAllAssociations1,
  ListAllAutomations,
  ListAllCalendarFeeds,
  ListAllCalendarFeeds1,
  ListAllCampaigns,
  ListAllConnections,
  ListAllContactAutomations,
  ListAllContactautomationsForContact,
  ListAllContacts,
  ListAllCustomFieldValues,
  ListAllCustomFieldValues2,
  ListAllCustomFielddataFieldValues,
  ListAllCustomFieldsMeta,
  ListAllCustomers,
  ListAllDealRoles,
  ListAllDealStages,
  ListAllDealTaskTypes,
  ListAllDeals,
  ListAllEmailActivities,
  ListAllEventTypes,
  ListAllGroupLimits,
  ListAllGroups,
  ListAllMessages,
  ListAllOrders,
  ListAllPipelines,
  ListAllSavedResponses,
  ListAllSchemas,
  ListAllScores,
  ListAllSecondaryContacts,
  ListAllSegments,
  ListAllTaskOutcomes,
  ListAllTaskTypeOutcomeRelations,
  ListAllTasks,
  ListAllUsers,
  ListAllWhitelistedDomains,
  ListContactActivities,
  ListEcomorderproducts,
  ListProductsForOrder,
  ListRecordsCreatedFromASchema,
  LocalEvents,
  MoveDealTasksToAnotherDealTaskType,
  MoveDealsToAnotherDealStage,
  RemoveACalendarFeed,
  RemoveAContactsTag,
  RemoveDomainFromWhitelist,
  RemoveEventNameOnly,
  RetrieveACampaign,
  RetrieveAContactautomation,
  RetrieveAContactsScoreValue,
  RetrieveACustomDealFieldMeta,
  RetrieveACustomDealFieldValue,
  RetrieveACustomFieldContact,
  RetrieveACustomFieldMeta,
  RetrieveACustomFieldValue,
  RetrieveADeal,
  RetrieveADealStage,
  RetrieveADealTaskType,
  RetrieveAFieldvalues,
  RetrieveAGroup,
  RetrieveAList,
  RetrieveAMessage,
  RetrieveANote,
  RetrieveAPipeline,
  RetrieveASavedresponse,
  RetrieveASchema,
  RetrieveAScore,
  RetrieveASecondaryContact,
  RetrieveASegment,
  RetrieveATag,
  RetrieveATaskOutcome,
  RetrieveATaskTypeOutcomeRelation,
  RetrieveATemplate,
  RetrieveAllCustomDealFieldMeta,
  RetrieveAllLists,
  RetrieveAllTags,
  RetrieveAnAccount,
  RetrieveAnAddress,
  RetrieveAnAssociation,
  RetrieveAnEcomorderproduct,
  RetrieveContactAccountContacts,
  RetrieveContactAutomationEntryCounts,
  RetrieveContactBounceLogs,
  RetrieveContactData,
  RetrieveContactDeals,
  RetrieveContactDealsList,
  RetrieveContactFieldValues,
  RetrieveContactGeoIps,
  RetrieveContactGoals,
  RetrieveContactListMemberships,
  RetrieveContactLogs,
  RetrieveContactNotes,
  RetrieveContactOrganization,
  RetrieveContactPlusAppend,
  RetrieveContactTrackingLogs,
  RetrieveEventTrackingStatus,
  RetrieveFields,
  RetrieveForms,
  RetrieveInaccessiblePipelinesByUser,
  RetrieveLinksAssociatedCampaign,
  RetrieveSiteTrackingCode,
  RetrieveSiteTrackingStatus,
  SavedResponses,
  SetConfig,
  SyncAContactsData,
  UpdateAAccountNote,
  UpdateACalendarFeed,
  UpdateAContactNew,
  UpdateACustomDealFieldMeta,
  UpdateACustomDealFieldValue,
  UpdateACustomField,
  UpdateACustomFieldValue,
  UpdateACustomFieldValueForContact,
  UpdateADealNew,
  UpdateADealNote,
  UpdateADealStage,
  UpdateADealTaskType,
  UpdateAField,
  UpdateAGroup,
  UpdateAMessage,
  UpdateANote,
  UpdateAPipeline,
  UpdateASavedResponse,
  UpdateASchema,
  UpdateASecondaryContact,
  UpdateATag,
  UpdateATaskOutcome,
  UpdateATaskOutcome1,
  UpdateAnAccountNew,
  UpdateAnAddress,
  UpdateAnAssociation1,
  UpdateBranding,
  UpdateConnection,
  UpdateCustomer,
  UpdateListStatusForContact,
  UpdateOrder,
  UpdateTask,
  UpdateUser,
  UpdateWebhook,
};
