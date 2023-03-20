import type { FromSchema } from 'json-schema-to-ts';
import * as schemas from './schemas';

export type AddDomainToWhitelistBodyParam = FromSchema<typeof schemas.AddDomainToWhitelist.body>;
export type AddDomainToWhitelistResponse200 = FromSchema<(typeof schemas.AddDomainToWhitelist.response)['200']>;
export type AddDomainToWhitelistResponse400 = FromSchema<(typeof schemas.AddDomainToWhitelist.response)['400']>;
export type BrandingsMetadataParam = FromSchema<typeof schemas.Brandings.metadata>;
export type BrandingsResponse200 = FromSchema<(typeof schemas.Brandings.response)['200']>;
export type BrandingsResponse400 = FromSchema<(typeof schemas.Brandings.response)['400']>;
export type BulkCreateACustomAccountFieldValueBodyParam = FromSchema<
  typeof schemas.BulkCreateACustomAccountFieldValue.body
>;
export type BulkCreateACustomAccountFieldValueResponse200 = FromSchema<
(typeof schemas.BulkCreateACustomAccountFieldValue.response)['200']
>;
export type BulkCreateACustomDealFieldValueBodyParam = FromSchema<typeof schemas.BulkCreateACustomDealFieldValue.body>;
export type BulkCreateACustomDealFieldValueResponse200 = FromSchema<
(typeof schemas.BulkCreateACustomDealFieldValue.response)['200']
>;
export type BulkDeleteAccountsMetadataParam = FromSchema<typeof schemas.BulkDeleteAccounts.metadata>;
export type BulkDeleteAccountsResponse200 = FromSchema<(typeof schemas.BulkDeleteAccounts.response)['200']>;
export type BulkDeleteAccountsResponse400 = FromSchema<(typeof schemas.BulkDeleteAccounts.response)['400']>;
export type BulkImportContactsBodyParam = FromSchema<typeof schemas.BulkImportContacts.body>;
export type BulkImportContactsMetadataParam = FromSchema<typeof schemas.BulkImportContacts.metadata>;
export type BulkImportContactsResponse200 = FromSchema<(typeof schemas.BulkImportContacts.response)['200']>;
export type BulkImportContactsResponse400 = FromSchema<(typeof schemas.BulkImportContacts.response)['400']>;
export type BulkImportStatusInfoMetadataParam = FromSchema<typeof schemas.BulkImportStatusInfo.metadata>;
export type BulkImportStatusInfoResponse200 = FromSchema<(typeof schemas.BulkImportStatusInfo.response)['200']>;
export type BulkImportStatusInfoResponse400 = FromSchema<(typeof schemas.BulkImportStatusInfo.response)['400']>;
export type BulkImportStatusListResponse200 = FromSchema<(typeof schemas.BulkImportStatusList.response)['200']>;
export type BulkUpdateACustomAccountFieldValueBodyParam = FromSchema<
  typeof schemas.BulkUpdateACustomAccountFieldValue.body
>;
export type BulkUpdateACustomAccountFieldValueResponse200 = FromSchema<
(typeof schemas.BulkUpdateACustomAccountFieldValue.response)['200']
>;
export type BulkUpdateACustomFieldValueBodyParam = FromSchema<typeof schemas.BulkUpdateACustomFieldValue.body>;
export type BulkUpdateACustomFieldValueResponse200 = FromSchema<
(typeof schemas.BulkUpdateACustomFieldValue.response)['200']
>;
export type BulkUpdateDealOwnersBodyParam = FromSchema<typeof schemas.BulkUpdateDealOwners.body>;
export type BulkUpdateDealOwnersResponse200 = FromSchema<(typeof schemas.BulkUpdateDealOwners.response)['200']>;
export type BulkUpdateDealOwnersResponse422 = FromSchema<(typeof schemas.BulkUpdateDealOwners.response)['422']>;
export type CreateACalendarFeedBodyParam = FromSchema<typeof schemas.CreateACalendarFeed.body>;
export type CreateACalendarFeedResponse200 = FromSchema<(typeof schemas.CreateACalendarFeed.response)['200']>;
export type CreateAChildSchemaMetadataParam = FromSchema<typeof schemas.CreateAChildSchema.metadata>;
export type CreateAChildSchemaResponse200 = FromSchema<(typeof schemas.CreateAChildSchema.response)['200']>;
export type CreateAChildSchemaResponse400 = FromSchema<(typeof schemas.CreateAChildSchema.response)['400']>;
export type CreateAContactCustomFieldBodyParam = FromSchema<typeof schemas.CreateAContactCustomField.body>;
export type CreateAContactCustomFieldResponse201 = FromSchema<
(typeof schemas.CreateAContactCustomField.response)['201']
>;
export type CreateAContactCustomFieldResponse403 = FromSchema<
(typeof schemas.CreateAContactCustomField.response)['403']
>;
export type CreateAContactCustomFieldResponse422 = FromSchema<
(typeof schemas.CreateAContactCustomField.response)['422']
>;
export type CreateACustomFieldRelationshipToListsBodyParam = FromSchema<
  typeof schemas.CreateACustomFieldRelationshipToLists.body
>;
export type CreateACustomFieldRelationshipToListsResponse201 = FromSchema<
(typeof schemas.CreateACustomFieldRelationshipToLists.response)['201']
>;
export type CreateACustomFieldRelationshipToListsResponse403 = FromSchema<
(typeof schemas.CreateACustomFieldRelationshipToLists.response)['403']
>;
export type CreateACustomFieldValueBodyParam = FromSchema<typeof schemas.CreateACustomFieldValue.body>;
export type CreateACustomFieldValueResponse200 = FromSchema<(typeof schemas.CreateACustomFieldValue.response)['200']>;
export type CreateACustomfieldmetaBodyParam = FromSchema<typeof schemas.CreateACustomfieldmeta.body>;
export type CreateACustomfieldmetaResponse200 = FromSchema<(typeof schemas.CreateACustomfieldmeta.response)['200']>;
export type CreateACustomfieldmetaResponse422 = FromSchema<(typeof schemas.CreateACustomfieldmeta.response)['422']>;
export type CreateADealNewBodyParam = FromSchema<typeof schemas.CreateADealNew.body>;
export type CreateADealNewResponse201 = FromSchema<(typeof schemas.CreateADealNew.response)['201']>;
export type CreateADealNewResponse400 = FromSchema<(typeof schemas.CreateADealNew.response)['400']>;
export type CreateADealNoteBodyParam = FromSchema<typeof schemas.CreateADealNote.body>;
export type CreateADealNoteMetadataParam = FromSchema<typeof schemas.CreateADealNote.metadata>;
export type CreateADealNoteResponse201 = FromSchema<(typeof schemas.CreateADealNote.response)['201']>;
export type CreateADealRoleBodyParam = FromSchema<typeof schemas.CreateADealRole.body>;
export type CreateADealRoleResponse200 = FromSchema<(typeof schemas.CreateADealRole.response)['200']>;
export type CreateADealRoleResponse400 = FromSchema<(typeof schemas.CreateADealRole.response)['400']>;
export type CreateADealStageBodyParam = FromSchema<typeof schemas.CreateADealStage.body>;
export type CreateADealStageMetadataParam = FromSchema<typeof schemas.CreateADealStage.metadata>;
export type CreateADealStageResponse200 = FromSchema<(typeof schemas.CreateADealStage.response)['200']>;
export type CreateADealStageResponse400 = FromSchema<(typeof schemas.CreateADealStage.response)['400']>;
export type CreateADealTaskTypeBodyParam = FromSchema<typeof schemas.CreateADealTaskType.body>;
export type CreateADealTaskTypeResponse200 = FromSchema<(typeof schemas.CreateADealTaskType.response)['200']>;
export type CreateADealTaskTypeResponse400 = FromSchema<(typeof schemas.CreateADealTaskType.response)['400']>;
export type CreateAListGroupPermissionBodyParam = FromSchema<typeof schemas.CreateAListGroupPermission.body>;
export type CreateAListGroupPermissionResponse201 = FromSchema<
(typeof schemas.CreateAListGroupPermission.response)['201']
>;
export type CreateAListGroupPermissionResponse403 = FromSchema<
(typeof schemas.CreateAListGroupPermission.response)['403']
>;
export type CreateANewContactBodyParam = FromSchema<typeof schemas.CreateANewContact.body>;
export type CreateANewContactResponse201 = FromSchema<(typeof schemas.CreateANewContact.response)['201']>;
export type CreateANewContactResponse404 = FromSchema<(typeof schemas.CreateANewContact.response)['404']>;
export type CreateANewContactResponse422 = FromSchema<(typeof schemas.CreateANewContact.response)['422']>;
export type CreateANewEventNameOnlyBodyParam = FromSchema<typeof schemas.CreateANewEventNameOnly.body>;
export type CreateANewEventNameOnlyResponse201 = FromSchema<(typeof schemas.CreateANewEventNameOnly.response)['201']>;
export type CreateANewGroupBodyParam = FromSchema<typeof schemas.CreateANewGroup.body>;
export type CreateANewGroupResponse200 = FromSchema<(typeof schemas.CreateANewGroup.response)['200']>;
export type CreateANewTagBodyParam = FromSchema<typeof schemas.CreateANewTag.body>;
export type CreateANewTagResponse201 = FromSchema<(typeof schemas.CreateANewTag.response)['201']>;
export type CreateANoteBodyParam = FromSchema<typeof schemas.CreateANote.body>;
export type CreateANoteResponse201 = FromSchema<(typeof schemas.CreateANote.response)['201']>;
export type CreateANoteResponse400 = FromSchema<(typeof schemas.CreateANote.response)['400']>;
export type CreateAPipelineBodyParam = FromSchema<typeof schemas.CreateAPipeline.body>;
export type CreateAPipelineResponse200 = FromSchema<(typeof schemas.CreateAPipeline.response)['200']>;
export type CreateAPipelineResponse400 = FromSchema<(typeof schemas.CreateAPipeline.response)['400']>;
export type CreateAPublicSchemaBodyParam = FromSchema<typeof schemas.CreateAPublicSchema.body>;
export type CreateAPublicSchemaResponse200 = FromSchema<(typeof schemas.CreateAPublicSchema.response)['200']>;
export type CreateAPublicSchemaResponse400 = FromSchema<(typeof schemas.CreateAPublicSchema.response)['400']>;
export type CreateASchemaBodyParam = FromSchema<typeof schemas.CreateASchema.body>;
export type CreateASchemaResponse201 = FromSchema<(typeof schemas.CreateASchema.response)['201']>;
export type CreateASchemaResponse422 = FromSchema<(typeof schemas.CreateASchema.response)['422']>;
export type CreateASecondaryContactBodyParam = FromSchema<typeof schemas.CreateASecondaryContact.body>;
export type CreateASecondaryContactResponse200 = FromSchema<(typeof schemas.CreateASecondaryContact.response)['200']>;
export type CreateASecondaryContactResponse422 = FromSchema<(typeof schemas.CreateASecondaryContact.response)['422']>;
export type CreateATaskOutcome1BodyParam = FromSchema<typeof schemas.CreateATaskOutcome1.body>;
export type CreateATaskOutcome1Response200 = FromSchema<(typeof schemas.CreateATaskOutcome1.response)['200']>;
export type CreateATaskOutcome1Response400 = FromSchema<(typeof schemas.CreateATaskOutcome1.response)['400']>;
export type CreateATaskOutcome1Response422 = FromSchema<(typeof schemas.CreateATaskOutcome1.response)['422']>;
export type CreateATaskOutcomeBodyParam = FromSchema<typeof schemas.CreateATaskOutcome.body>;
export type CreateATaskOutcomeResponse200 = FromSchema<(typeof schemas.CreateATaskOutcome.response)['200']>;
export type CreateATaskOutcomeResponse422 = FromSchema<(typeof schemas.CreateATaskOutcome.response)['422']>;
export type CreateATaskReminderBodyParam = FromSchema<typeof schemas.CreateATaskReminder.body>;
export type CreateATaskReminderResponse200 = FromSchema<(typeof schemas.CreateATaskReminder.response)['200']>;
export type CreateATaskReminderResponse422 = FromSchema<(typeof schemas.CreateATaskReminder.response)['422']>;
export type CreateAnAccount1BodyParam = FromSchema<typeof schemas.CreateAnAccount1.body>;
export type CreateAnAccount1Response201 = FromSchema<(typeof schemas.CreateAnAccount1.response)['201']>;
export type CreateAnAccount1Response422 = FromSchema<(typeof schemas.CreateAnAccount1.response)['422']>;
export type CreateAnAccountNewBodyParam = FromSchema<typeof schemas.CreateAnAccountNew.body>;
export type CreateAnAccountNewResponse201 = FromSchema<(typeof schemas.CreateAnAccountNew.response)['201']>;
export type CreateAnAccountNewResponse422 = FromSchema<(typeof schemas.CreateAnAccountNew.response)['422']>;
export type CreateAnAccountNoteBodyParam = FromSchema<typeof schemas.CreateAnAccountNote.body>;
export type CreateAnAccountNoteMetadataParam = FromSchema<typeof schemas.CreateAnAccountNote.metadata>;
export type CreateAnAccountNoteResponse201 = FromSchema<(typeof schemas.CreateAnAccountNote.response)['201']>;
export type CreateAnAddressBodyParam = FromSchema<typeof schemas.CreateAnAddress.body>;
export type CreateAnAddressResponse200 = FromSchema<(typeof schemas.CreateAnAddress.response)['200']>;
export type CreateAnAddressResponse400 = FromSchema<(typeof schemas.CreateAnAddress.response)['400']>;
export type CreateConnectionBodyParam = FromSchema<typeof schemas.CreateConnection.body>;
export type CreateConnectionResponse200 = FromSchema<(typeof schemas.CreateConnection.response)['200']>;
export type CreateContactTagBodyParam = FromSchema<typeof schemas.CreateContactTag.body>;
export type CreateContactTagResponse201 = FromSchema<(typeof schemas.CreateContactTag.response)['201']>;
export type CreateContactTagResponse404 = FromSchema<(typeof schemas.CreateContactTag.response)['404']>;
export type CreateContactTagResponse422 = FromSchema<(typeof schemas.CreateContactTag.response)['422']>;
export type CreateCustomDealFieldMetaBodyParam = FromSchema<typeof schemas.CreateCustomDealFieldMeta.body>;
export type CreateCustomDealFieldMetaResponse200 = FromSchema<
(typeof schemas.CreateCustomDealFieldMeta.response)['200']
>;
export type CreateCustomDealFieldMetaResponse422 = FromSchema<
(typeof schemas.CreateCustomDealFieldMeta.response)['422']
>;
export type CreateCustomDealFieldValueBodyParam = FromSchema<typeof schemas.CreateCustomDealFieldValue.body>;
export type CreateCustomDealFieldValueResponse200 = FromSchema<
(typeof schemas.CreateCustomDealFieldValue.response)['200']
>;
export type CreateCustomDealFieldValueResponse422 = FromSchema<
(typeof schemas.CreateCustomDealFieldValue.response)['422']
>;
export type CreateCustomFieldOptionsBodyParam = FromSchema<typeof schemas.CreateCustomFieldOptions.body>;
export type CreateCustomFieldOptionsResponse201 = FromSchema<(typeof schemas.CreateCustomFieldOptions.response)['201']>;
export type CreateCustomFieldOptionsResponse422 = FromSchema<(typeof schemas.CreateCustomFieldOptions.response)['422']>;
export type CreateCustomerBodyParam = FromSchema<typeof schemas.CreateCustomer.body>;
export type CreateCustomerResponse201 = FromSchema<(typeof schemas.CreateCustomer.response)['201']>;
export type CreateCustomerResponse400 = FromSchema<(typeof schemas.CreateCustomer.response)['400']>;
export type CreateFieldvalueBodyParam = FromSchema<typeof schemas.CreateFieldvalue.body>;
export type CreateFieldvalueResponse200 = FromSchema<(typeof schemas.CreateFieldvalue.response)['200']>;
export type CreateFieldvalueResponse403 = FromSchema<(typeof schemas.CreateFieldvalue.response)['403']>;
export type CreateNewContactautomationBodyParam = FromSchema<typeof schemas.CreateNewContactautomation.body>;
export type CreateNewContactautomationResponse201 = FromSchema<
(typeof schemas.CreateNewContactautomation.response)['201']
>;
export type CreateNewContactautomationResponse403 = FromSchema<
(typeof schemas.CreateNewContactautomation.response)['403']
>;
export type CreateNewListBodyParam = FromSchema<typeof schemas.CreateNewList.body>;
export type CreateNewListResponse200 = FromSchema<(typeof schemas.CreateNewList.response)['200']>;
export type CreateNewListResponse400 = FromSchema<(typeof schemas.CreateNewList.response)['400']>;
export type CreateNewListResponse403 = FromSchema<(typeof schemas.CreateNewList.response)['403']>;
export type CreateOrUpdateRecordBodyParam = FromSchema<typeof schemas.CreateOrUpdateRecord.body>;
export type CreateOrUpdateRecordMetadataParam = FromSchema<typeof schemas.CreateOrUpdateRecord.metadata>;
export type CreateOrUpdateRecordResponse201 = FromSchema<(typeof schemas.CreateOrUpdateRecord.response)['201']>;
export type CreateOrUpdateRecordResponse400 = FromSchema<(typeof schemas.CreateOrUpdateRecord.response)['400']>;
export type CreateOrUpdateRecordResponse422 = FromSchema<(typeof schemas.CreateOrUpdateRecord.response)['422']>;
export type CreateOrderBodyParam = FromSchema<typeof schemas.CreateOrder.body>;
export type CreateOrderResponse201 = FromSchema<(typeof schemas.CreateOrder.response)['201']>;
export type CreateTaskBodyParam = FromSchema<typeof schemas.CreateTask.body>;
export type CreateTaskResponse201 = FromSchema<(typeof schemas.CreateTask.response)['201']>;
export type CreateTaskResponse400 = FromSchema<(typeof schemas.CreateTask.response)['400']>;
export type CreateUserBodyParam = FromSchema<typeof schemas.CreateUser.body>;
export type CreateUserResponse201 = FromSchema<(typeof schemas.CreateUser.response)['201']>;
export type CreateUserResponse400 = FromSchema<(typeof schemas.CreateUser.response)['400']>;
export type CreateWebhookBodyParam = FromSchema<typeof schemas.CreateWebhook.body>;
export type CreateWebhookResponse201 = FromSchema<(typeof schemas.CreateWebhook.response)['201']>;
export type DeleteAContactautomationMetadataParam = FromSchema<typeof schemas.DeleteAContactautomation.metadata>;
export type DeleteAContactautomationResponse200 = FromSchema<(typeof schemas.DeleteAContactautomation.response)['200']>;
export type DeleteAContactautomationResponse403 = FromSchema<(typeof schemas.DeleteAContactautomation.response)['403']>;
export type DeleteACustomDealFieldDataMetadataParam = FromSchema<typeof schemas.DeleteACustomDealFieldData.metadata>;
export type DeleteACustomDealFieldDataResponse200 = FromSchema<
(typeof schemas.DeleteACustomDealFieldData.response)['200']
>;
export type DeleteACustomDealFieldDataResponse404 = FromSchema<
(typeof schemas.DeleteACustomDealFieldData.response)['404']
>;
export type DeleteACustomDealFieldMetaMetadataParam = FromSchema<typeof schemas.DeleteACustomDealFieldMeta.metadata>;
export type DeleteACustomDealFieldMetaResponse200 = FromSchema<
(typeof schemas.DeleteACustomDealFieldMeta.response)['200']
>;
export type DeleteACustomDealFieldMetaResponse404 = FromSchema<
(typeof schemas.DeleteACustomDealFieldMeta.response)['404']
>;
export type DeleteACustomFieldMetadataParam = FromSchema<typeof schemas.DeleteACustomField.metadata>;
export type DeleteACustomFieldRelationshipToListsMetadataParam = FromSchema<
  typeof schemas.DeleteACustomFieldRelationshipToLists.metadata
>;
export type DeleteACustomFieldRelationshipToListsResponse200 = FromSchema<
(typeof schemas.DeleteACustomFieldRelationshipToLists.response)['200']
>;
export type DeleteACustomFieldRelationshipToListsResponse403 = FromSchema<
(typeof schemas.DeleteACustomFieldRelationshipToLists.response)['403']
>;
export type DeleteACustomFieldResponse200 = FromSchema<(typeof schemas.DeleteACustomField.response)['200']>;
export type DeleteACustomFieldResponse404 = FromSchema<(typeof schemas.DeleteACustomField.response)['404']>;
export type DeleteACustomFieldValueMetadataParam = FromSchema<typeof schemas.DeleteACustomFieldValue.metadata>;
export type DeleteACustomFieldValueResponse200 = FromSchema<(typeof schemas.DeleteACustomFieldValue.response)['200']>;
export type DeleteACustomFieldValueResponse404 = FromSchema<(typeof schemas.DeleteACustomFieldValue.response)['404']>;
export type DeleteADealMetadataParam = FromSchema<typeof schemas.DeleteADeal.metadata>;
export type DeleteADealResponse200 = FromSchema<(typeof schemas.DeleteADeal.response)['200']>;
export type DeleteADealResponse400 = FromSchema<(typeof schemas.DeleteADeal.response)['400']>;
export type DeleteADealRoleMetadataParam = FromSchema<typeof schemas.DeleteADealRole.metadata>;
export type DeleteADealRoleResponse200 = FromSchema<(typeof schemas.DeleteADealRole.response)['200']>;
export type DeleteADealRoleResponse400 = FromSchema<(typeof schemas.DeleteADealRole.response)['400']>;
export type DeleteADealStageMetadataParam = FromSchema<typeof schemas.DeleteADealStage.metadata>;
export type DeleteADealStageResponse200 = FromSchema<(typeof schemas.DeleteADealStage.response)['200']>;
export type DeleteADealTaskTypeMetadataParam = FromSchema<typeof schemas.DeleteADealTaskType.metadata>;
export type DeleteADealTaskTypeResponse200 = FromSchema<(typeof schemas.DeleteADealTaskType.response)['200']>;
export type DeleteAField1MetadataParam = FromSchema<typeof schemas.DeleteAField1.metadata>;
export type DeleteAField1Response202 = FromSchema<(typeof schemas.DeleteAField1.response)['202']>;
export type DeleteAFieldMetadataParam = FromSchema<typeof schemas.DeleteAField.metadata>;
export type DeleteAFieldResponse200 = FromSchema<(typeof schemas.DeleteAField.response)['200']>;
export type DeleteAFieldResponse404 = FromSchema<(typeof schemas.DeleteAField.response)['404']>;
export type DeleteAFieldvalue1MetadataParam = FromSchema<typeof schemas.DeleteAFieldvalue1.metadata>;
export type DeleteAFieldvalue1Response200 = FromSchema<(typeof schemas.DeleteAFieldvalue1.response)['200']>;
export type DeleteAFieldvalue1Response403 = FromSchema<(typeof schemas.DeleteAFieldvalue1.response)['403']>;
export type DeleteAGroup1MetadataParam = FromSchema<typeof schemas.DeleteAGroup1.metadata>;
export type DeleteAGroup1Response200 = FromSchema<(typeof schemas.DeleteAGroup1.response)['200']>;
export type DeleteAGroup1Response400 = FromSchema<(typeof schemas.DeleteAGroup1.response)['400']>;
export type DeleteAListMetadataParam = FromSchema<typeof schemas.DeleteAList.metadata>;
export type DeleteAListResponse200 = FromSchema<(typeof schemas.DeleteAList.response)['200']>;
export type DeleteAListResponse403 = FromSchema<(typeof schemas.DeleteAList.response)['403']>;
export type DeleteAMessageMetadataParam = FromSchema<typeof schemas.DeleteAMessage.metadata>;
export type DeleteAMessageResponse200 = FromSchema<(typeof schemas.DeleteAMessage.response)['200']>;
export type DeleteAMessageResponse400 = FromSchema<(typeof schemas.DeleteAMessage.response)['400']>;
export type DeleteAPipelineMetadataParam = FromSchema<typeof schemas.DeleteAPipeline.metadata>;
export type DeleteAPipelineResponse200 = FromSchema<(typeof schemas.DeleteAPipeline.response)['200']>;
export type DeleteARecordByExternalIdMetadataParam = FromSchema<typeof schemas.DeleteARecordByExternalId.metadata>;
export type DeleteARecordByExternalIdResponse202 = FromSchema<
(typeof schemas.DeleteARecordByExternalId.response)['202']
>;
export type DeleteARecordByExternalIdResponse400 = FromSchema<
(typeof schemas.DeleteARecordByExternalId.response)['400']
>;
export type DeleteARecordMetadataParam = FromSchema<typeof schemas.DeleteARecord.metadata>;
export type DeleteARecordResponse202 = FromSchema<(typeof schemas.DeleteARecord.response)['202']>;
export type DeleteARecordResponse400 = FromSchema<(typeof schemas.DeleteARecord.response)['400']>;
export type DeleteASchemaMetadataParam = FromSchema<typeof schemas.DeleteASchema.metadata>;
export type DeleteASchemaResponse200 = FromSchema<(typeof schemas.DeleteASchema.response)['200']>;
export type DeleteASchemaResponse404 = FromSchema<(typeof schemas.DeleteASchema.response)['404']>;
export type DeleteASecondaryContactMetadataParam = FromSchema<typeof schemas.DeleteASecondaryContact.metadata>;
export type DeleteASecondaryContactResponse200 = FromSchema<(typeof schemas.DeleteASecondaryContact.response)['200']>;
export type DeleteASecondaryContactResponse404 = FromSchema<(typeof schemas.DeleteASecondaryContact.response)['404']>;
export type DeleteATagMetadataParam = FromSchema<typeof schemas.DeleteATag.metadata>;
export type DeleteATagResponse200 = FromSchema<(typeof schemas.DeleteATag.response)['200']>;
export type DeleteATagResponse404 = FromSchema<(typeof schemas.DeleteATag.response)['404']>;
export type DeleteATaskOutcomeMetadataParam = FromSchema<typeof schemas.DeleteATaskOutcome.metadata>;
export type DeleteATaskOutcomeResponse200 = FromSchema<(typeof schemas.DeleteATaskOutcome.response)['200']>;
export type DeleteATaskOutcomeResponse404 = FromSchema<(typeof schemas.DeleteATaskOutcome.response)['404']>;
export type DeleteATaskTypeOutcomeRelationMetadataParam = FromSchema<
  typeof schemas.DeleteATaskTypeOutcomeRelation.metadata
>;
export type DeleteATaskTypeOutcomeRelationResponse200 = FromSchema<
(typeof schemas.DeleteATaskTypeOutcomeRelation.response)['200']
>;
export type DeleteATaskTypeOutcomeRelationResponse404 = FromSchema<
(typeof schemas.DeleteATaskTypeOutcomeRelation.response)['404']
>;
export type DeleteAnAccountMetadataParam = FromSchema<typeof schemas.DeleteAnAccount.metadata>;
export type DeleteAnAccountResponse200 = FromSchema<(typeof schemas.DeleteAnAccount.response)['200']>;
export type DeleteAnAccountResponse400 = FromSchema<(typeof schemas.DeleteAnAccount.response)['400']>;
export type DeleteAnAddressMetadataParam = FromSchema<typeof schemas.DeleteAnAddress.metadata>;
export type DeleteAnAddressResponse200 = FromSchema<(typeof schemas.DeleteAnAddress.response)['200']>;
export type DeleteAnAddressResponse404 = FromSchema<(typeof schemas.DeleteAnAddress.response)['404']>;
export type DeleteAnAddressgroupMetadataParam = FromSchema<typeof schemas.DeleteAnAddressgroup.metadata>;
export type DeleteAnAddressgroupResponse200 = FromSchema<(typeof schemas.DeleteAnAddressgroup.response)['200']>;
export type DeleteAnAddressgroupResponse404 = FromSchema<(typeof schemas.DeleteAnAddressgroup.response)['404']>;
export type DeleteAnAddresslistMetadataParam = FromSchema<typeof schemas.DeleteAnAddresslist.metadata>;
export type DeleteAnAddresslistResponse200 = FromSchema<(typeof schemas.DeleteAnAddresslist.response)['200']>;
export type DeleteAnAddresslistResponse404 = FromSchema<(typeof schemas.DeleteAnAddresslist.response)['404']>;
export type DeleteAnAssociation1MetadataParam = FromSchema<typeof schemas.DeleteAnAssociation1.metadata>;
export type DeleteAnAssociation1Response200 = FromSchema<(typeof schemas.DeleteAnAssociation1.response)['200']>;
export type DeleteAnAssociation1Response404 = FromSchema<(typeof schemas.DeleteAnAssociation1.response)['404']>;
export type DeleteConnectionMetadataParam = FromSchema<typeof schemas.DeleteConnection.metadata>;
export type DeleteConnectionResponse200 = FromSchema<(typeof schemas.DeleteConnection.response)['200']>;
export type DeleteConnectionResponse400 = FromSchema<(typeof schemas.DeleteConnection.response)['400']>;
export type DeleteContactMetadataParam = FromSchema<typeof schemas.DeleteContact.metadata>;
export type DeleteContactResponse200 = FromSchema<(typeof schemas.DeleteContact.response)['200']>;
export type DeleteContactResponse404 = FromSchema<(typeof schemas.DeleteContact.response)['404']>;
export type DeleteCustomerMetadataParam = FromSchema<typeof schemas.DeleteCustomer.metadata>;
export type DeleteCustomerResponse200 = FromSchema<(typeof schemas.DeleteCustomer.response)['200']>;
export type DeleteCustomerResponse400 = FromSchema<(typeof schemas.DeleteCustomer.response)['400']>;
export type DeleteNoteMetadataParam = FromSchema<typeof schemas.DeleteNote.metadata>;
export type DeleteNoteResponse200 = FromSchema<(typeof schemas.DeleteNote.response)['200']>;
export type DeleteNoteResponse403 = FromSchema<(typeof schemas.DeleteNote.response)['403']>;
export type DeleteOrderMetadataParam = FromSchema<typeof schemas.DeleteOrder.metadata>;
export type DeleteOrderResponse200 = FromSchema<(typeof schemas.DeleteOrder.response)['200']>;
export type DeleteTaskMetadataParam = FromSchema<typeof schemas.DeleteTask.metadata>;
export type DeleteTaskResponse200 = FromSchema<(typeof schemas.DeleteTask.response)['200']>;
export type DeleteTaskResponse400 = FromSchema<(typeof schemas.DeleteTask.response)['400']>;
export type DeleteUserMetadataParam = FromSchema<typeof schemas.DeleteUser.metadata>;
export type DeleteUserResponse200 = FromSchema<(typeof schemas.DeleteUser.response)['200']>;
export type DeleteUserResponse400 = FromSchema<(typeof schemas.DeleteUser.response)['400']>;
export type DeleteWebhookMetadataParam = FromSchema<typeof schemas.DeleteWebhook.metadata>;
export type DeleteWebhookResponse200 = FromSchema<(typeof schemas.DeleteWebhook.response)['200']>;
export type EnableDisableEventTrackingBodyParam = FromSchema<typeof schemas.EnableDisableEventTracking.body>;
export type EnableDisableEventTrackingResponse200 = FromSchema<
(typeof schemas.EnableDisableEventTracking.response)['200']
>;
export type EnableDisableEventTrackingResponse400 = FromSchema<
(typeof schemas.EnableDisableEventTracking.response)['400']
>;
export type EnableDisableSiteTrackingBodyParam = FromSchema<typeof schemas.EnableDisableSiteTracking.body>;
export type EnableDisableSiteTrackingResponse200 = FromSchema<
(typeof schemas.EnableDisableSiteTracking.response)['200']
>;
export type EnableDisableSiteTrackingResponse400 = FromSchema<
(typeof schemas.EnableDisableSiteTracking.response)['400']
>;
export type Forms1Response200 = FromSchema<(typeof schemas.Forms1.response)['200']>;
export type Forms1Response400 = FromSchema<(typeof schemas.Forms1.response)['400']>;
export type GetAListOfWebhookEventsResponse200 = FromSchema<(typeof schemas.GetAListOfWebhookEvents.response)['200']>;
export type GetAListOfWebhooksMetadataParam = FromSchema<typeof schemas.GetAListOfWebhooks.metadata>;
export type GetAListOfWebhooksResponse200 = FromSchema<(typeof schemas.GetAListOfWebhooks.response)['200']>;
export type GetAListOfWebhooksResponse400 = FromSchema<(typeof schemas.GetAListOfWebhooks.response)['400']>;
export type GetASavedresponseMetadataParam = FromSchema<typeof schemas.GetASavedresponse.metadata>;
export type GetASavedresponseResponse200 = FromSchema<(typeof schemas.GetASavedresponse.response)['200']>;
export type GetASavedresponseResponse400 = FromSchema<(typeof schemas.GetASavedresponse.response)['400']>;
export type GetASingleRecordMetadataParam = FromSchema<typeof schemas.GetASingleRecord.metadata>;
export type GetASingleRecordResponse200 = FromSchema<(typeof schemas.GetASingleRecord.response)['200']>;
export type GetASingleRecordResponse400 = FromSchema<(typeof schemas.GetASingleRecord.response)['400']>;
export type GetASingleRecordUsingExternalIdMetadataParam = FromSchema<
  typeof schemas.GetASingleRecordUsingExternalId.metadata
>;
export type GetASingleRecordUsingExternalIdResponse200 = FromSchema<
(typeof schemas.GetASingleRecordUsingExternalId.response)['200']
>;
export type GetASingleRecordUsingExternalIdResponse400 = FromSchema<
(typeof schemas.GetASingleRecordUsingExternalId.response)['400']
>;
export type GetBrandingMetadataParam = FromSchema<typeof schemas.GetBranding.metadata>;
export type GetBrandingResponse200 = FromSchema<(typeof schemas.GetBranding.response)['200']>;
export type GetBrandingResponse400 = FromSchema<(typeof schemas.GetBranding.response)['400']>;
export type GetConnectionMetadataParam = FromSchema<typeof schemas.GetConnection.metadata>;
export type GetConnectionResponse200 = FromSchema<(typeof schemas.GetConnection.response)['200']>;
export type GetConnectionResponse400 = FromSchema<(typeof schemas.GetConnection.response)['400']>;
export type GetContactByEventIdMetadataParam = FromSchema<typeof schemas.GetContactByEventId.metadata>;
export type GetContactByEventIdResponse200 = FromSchema<(typeof schemas.GetContactByEventId.response)['200']>;
export type GetContactMetadataParam = FromSchema<typeof schemas.GetContact.metadata>;
export type GetContactResponse200 = FromSchema<(typeof schemas.GetContact.response)['200']>;
export type GetContactResponse404 = FromSchema<(typeof schemas.GetContact.response)['404']>;
export type GetContactsTrackingLogseventsMetadataParam = FromSchema<
  typeof schemas.GetContactsTrackingLogsevents.metadata
>;
export type GetContactsTrackingLogseventsResponse200 = FromSchema<
(typeof schemas.GetContactsTrackingLogsevents.response)['200']
>;
export type GetCustomerMetadataParam = FromSchema<typeof schemas.GetCustomer.metadata>;
export type GetCustomerResponse200 = FromSchema<(typeof schemas.GetCustomer.response)['200']>;
export type GetCustomerResponse400 = FromSchema<(typeof schemas.GetCustomer.response)['400']>;
export type GetOrderMetadataParam = FromSchema<typeof schemas.GetOrder.metadata>;
export type GetOrderResponse200 = FromSchema<(typeof schemas.GetOrder.response)['200']>;
export type GetTaskMetadataParam = FromSchema<typeof schemas.GetTask.metadata>;
export type GetTaskResponse201 = FromSchema<(typeof schemas.GetTask.response)['201']>;
export type GetTaskResponse400 = FromSchema<(typeof schemas.GetTask.response)['400']>;
export type GetUserEmailMetadataParam = FromSchema<typeof schemas.GetUserEmail.metadata>;
export type GetUserEmailResponse200 = FromSchema<(typeof schemas.GetUserEmail.response)['200']>;
export type GetUserEmailResponse400 = FromSchema<(typeof schemas.GetUserEmail.response)['400']>;
export type GetUserLoggedinResponse200 = FromSchema<(typeof schemas.GetUserLoggedin.response)['200']>;
export type GetUserLoggedinResponse400 = FromSchema<(typeof schemas.GetUserLoggedin.response)['400']>;
export type GetUserMetadataParam = FromSchema<typeof schemas.GetUser.metadata>;
export type GetUserResponse200 = FromSchema<(typeof schemas.GetUser.response)['200']>;
export type GetUserResponse400 = FromSchema<(typeof schemas.GetUser.response)['400']>;
export type GetUserUsernameMetadataParam = FromSchema<typeof schemas.GetUserUsername.metadata>;
export type GetUserUsernameResponse200 = FromSchema<(typeof schemas.GetUserUsername.response)['200']>;
export type GetUserUsernameResponse400 = FromSchema<(typeof schemas.GetUserUsername.response)['400']>;
export type GetWebhookMetadataParam = FromSchema<typeof schemas.GetWebhook.metadata>;
export type GetWebhookResponse200 = FromSchema<(typeof schemas.GetWebhook.response)['200']>;
export type ListAllAccountsMetadataParam = FromSchema<typeof schemas.ListAllAccounts.metadata>;
export type ListAllAccountsResponse200 = FromSchema<(typeof schemas.ListAllAccounts.response)['200']>;
export type ListAllAccountsResponse400 = FromSchema<(typeof schemas.ListAllAccounts.response)['400']>;
export type ListAllAddressesResponse200 = FromSchema<(typeof schemas.ListAllAddresses.response)['200']>;
export type ListAllAddressesResponse400 = FromSchema<(typeof schemas.ListAllAddresses.response)['400']>;
export type ListAllAssociations1MetadataParam = FromSchema<typeof schemas.ListAllAssociations1.metadata>;
export type ListAllAssociations1Response200 = FromSchema<(typeof schemas.ListAllAssociations1.response)['200']>;
export type ListAllAutomationsResponse200 = FromSchema<(typeof schemas.ListAllAutomations.response)['200']>;
export type ListAllAutomationsResponse400 = FromSchema<(typeof schemas.ListAllAutomations.response)['400']>;
export type ListAllCalendarFeeds1MetadataParam = FromSchema<typeof schemas.ListAllCalendarFeeds1.metadata>;
export type ListAllCalendarFeeds1Response200 = FromSchema<(typeof schemas.ListAllCalendarFeeds1.response)['200']>;
export type ListAllCalendarFeeds1Response404 = FromSchema<(typeof schemas.ListAllCalendarFeeds1.response)['404']>;
export type ListAllCalendarFeedsResponse200 = FromSchema<(typeof schemas.ListAllCalendarFeeds.response)['200']>;
export type ListAllCampaignsMetadataParam = FromSchema<typeof schemas.ListAllCampaigns.metadata>;
export type ListAllCampaignsResponse200 = FromSchema<(typeof schemas.ListAllCampaigns.response)['200']>;
export type ListAllCampaignsResponse400 = FromSchema<(typeof schemas.ListAllCampaigns.response)['400']>;
export type ListAllConnectionsMetadataParam = FromSchema<typeof schemas.ListAllConnections.metadata>;
export type ListAllConnectionsResponse200 = FromSchema<(typeof schemas.ListAllConnections.response)['200']>;
export type ListAllConnectionsResponse400 = FromSchema<(typeof schemas.ListAllConnections.response)['400']>;
export type ListAllContactAutomationsResponse200 = FromSchema<
(typeof schemas.ListAllContactAutomations.response)['200']
>;
export type ListAllContactautomationsForContactMetadataParam = FromSchema<
  typeof schemas.ListAllContactautomationsForContact.metadata
>;
export type ListAllContactautomationsForContactResponse200 = FromSchema<
(typeof schemas.ListAllContactautomationsForContact.response)['200']
>;
export type ListAllContactautomationsForContactResponse404 = FromSchema<
(typeof schemas.ListAllContactautomationsForContact.response)['404']
>;
export type ListAllContactsMetadataParam = FromSchema<typeof schemas.ListAllContacts.metadata>;
export type ListAllContactsResponse200 = FromSchema<(typeof schemas.ListAllContacts.response)['200']>;
export type ListAllContactsResponse400 = FromSchema<(typeof schemas.ListAllContacts.response)['400']>;
export type ListAllCustomFieldValues2MetadataParam = FromSchema<typeof schemas.ListAllCustomFieldValues2.metadata>;
export type ListAllCustomFieldValues2Response200 = FromSchema<
(typeof schemas.ListAllCustomFieldValues2.response)['200']
>;
export type ListAllCustomFieldValuesMetadataParam = FromSchema<typeof schemas.ListAllCustomFieldValues.metadata>;
export type ListAllCustomFieldValuesResponse200 = FromSchema<(typeof schemas.ListAllCustomFieldValues.response)['200']>;
export type ListAllCustomFieldValuesResponse400 = FromSchema<(typeof schemas.ListAllCustomFieldValues.response)['400']>;
export type ListAllCustomFielddataFieldValuesMetadataParam = FromSchema<
  typeof schemas.ListAllCustomFielddataFieldValues.metadata
>;
export type ListAllCustomFielddataFieldValuesResponse200 = FromSchema<
(typeof schemas.ListAllCustomFielddataFieldValues.response)['200']
>;
export type ListAllCustomFieldsMetaMetadataParam = FromSchema<typeof schemas.ListAllCustomFieldsMeta.metadata>;
export type ListAllCustomFieldsMetaResponse200 = FromSchema<(typeof schemas.ListAllCustomFieldsMeta.response)['200']>;
export type ListAllCustomersMetadataParam = FromSchema<typeof schemas.ListAllCustomers.metadata>;
export type ListAllCustomersResponse200 = FromSchema<(typeof schemas.ListAllCustomers.response)['200']>;
export type ListAllDealRolesMetadataParam = FromSchema<typeof schemas.ListAllDealRoles.metadata>;
export type ListAllDealRolesResponse200 = FromSchema<(typeof schemas.ListAllDealRoles.response)['200']>;
export type ListAllDealRolesResponse400 = FromSchema<(typeof schemas.ListAllDealRoles.response)['400']>;
export type ListAllDealStagesMetadataParam = FromSchema<typeof schemas.ListAllDealStages.metadata>;
export type ListAllDealStagesResponse200 = FromSchema<(typeof schemas.ListAllDealStages.response)['200']>;
export type ListAllDealStagesResponse400 = FromSchema<(typeof schemas.ListAllDealStages.response)['400']>;
export type ListAllDealTaskTypesResponse200 = FromSchema<(typeof schemas.ListAllDealTaskTypes.response)['200']>;
export type ListAllDealTaskTypesResponse400 = FromSchema<(typeof schemas.ListAllDealTaskTypes.response)['400']>;
export type ListAllDealsMetadataParam = FromSchema<typeof schemas.ListAllDeals.metadata>;
export type ListAllDealsResponse200 = FromSchema<(typeof schemas.ListAllDeals.response)['200']>;
export type ListAllDealsResponse400 = FromSchema<(typeof schemas.ListAllDeals.response)['400']>;
export type ListAllEmailActivitiesMetadataParam = FromSchema<typeof schemas.ListAllEmailActivities.metadata>;
export type ListAllEmailActivitiesResponse200 = FromSchema<(typeof schemas.ListAllEmailActivities.response)['200']>;
export type ListAllEmailActivitiesResponse400 = FromSchema<(typeof schemas.ListAllEmailActivities.response)['400']>;
export type ListAllEventTypesResponse200 = FromSchema<(typeof schemas.ListAllEventTypes.response)['200']>;
export type ListAllEventTypesResponse400 = FromSchema<(typeof schemas.ListAllEventTypes.response)['400']>;
export type ListAllGroupLimitsResponse200 = FromSchema<(typeof schemas.ListAllGroupLimits.response)['200']>;
export type ListAllGroupsResponse200 = FromSchema<(typeof schemas.ListAllGroups.response)['200']>;
export type ListAllMessagesResponse200 = FromSchema<(typeof schemas.ListAllMessages.response)['200']>;
export type ListAllMessagesResponse400 = FromSchema<(typeof schemas.ListAllMessages.response)['400']>;
export type ListAllOrdersMetadataParam = FromSchema<typeof schemas.ListAllOrders.metadata>;
export type ListAllOrdersResponse200 = FromSchema<(typeof schemas.ListAllOrders.response)['200']>;
export type ListAllOrdersResponse422 = FromSchema<(typeof schemas.ListAllOrders.response)['422']>;
export type ListAllPipelinesMetadataParam = FromSchema<typeof schemas.ListAllPipelines.metadata>;
export type ListAllPipelinesResponse200 = FromSchema<(typeof schemas.ListAllPipelines.response)['200']>;
export type ListAllPipelinesResponse400 = FromSchema<(typeof schemas.ListAllPipelines.response)['400']>;
export type ListAllSavedResponsesResponse200 = FromSchema<(typeof schemas.ListAllSavedResponses.response)['200']>;
export type ListAllSchemasMetadataParam = FromSchema<typeof schemas.ListAllSchemas.metadata>;
export type ListAllSchemasResponse200 = FromSchema<(typeof schemas.ListAllSchemas.response)['200']>;
export type ListAllSchemasResponse400 = FromSchema<(typeof schemas.ListAllSchemas.response)['400']>;
export type ListAllScoresResponse200 = FromSchema<(typeof schemas.ListAllScores.response)['200']>;
export type ListAllSecondaryContactsResponse200 = FromSchema<(typeof schemas.ListAllSecondaryContacts.response)['200']>;
export type ListAllSecondaryContactsResponse400 = FromSchema<(typeof schemas.ListAllSecondaryContacts.response)['400']>;
export type ListAllSegmentsResponse200 = FromSchema<(typeof schemas.ListAllSegments.response)['200']>;
export type ListAllSegmentsResponse400 = FromSchema<(typeof schemas.ListAllSegments.response)['400']>;
export type ListAllTaskOutcomesMetadataParam = FromSchema<typeof schemas.ListAllTaskOutcomes.metadata>;
export type ListAllTaskOutcomesResponse200 = FromSchema<(typeof schemas.ListAllTaskOutcomes.response)['200']>;
export type ListAllTaskOutcomesResponse400 = FromSchema<(typeof schemas.ListAllTaskOutcomes.response)['400']>;
export type ListAllTaskTypeOutcomeRelationsResponse200 = FromSchema<
(typeof schemas.ListAllTaskTypeOutcomeRelations.response)['200']
>;
export type ListAllTaskTypeOutcomeRelationsResponse400 = FromSchema<
(typeof schemas.ListAllTaskTypeOutcomeRelations.response)['400']
>;
export type ListAllTasksMetadataParam = FromSchema<typeof schemas.ListAllTasks.metadata>;
export type ListAllTasksResponse201 = FromSchema<(typeof schemas.ListAllTasks.response)['201']>;
export type ListAllTasksResponse400 = FromSchema<(typeof schemas.ListAllTasks.response)['400']>;
export type ListAllUsersResponse200 = FromSchema<(typeof schemas.ListAllUsers.response)['200']>;
export type ListAllUsersResponse400 = FromSchema<(typeof schemas.ListAllUsers.response)['400']>;
export type ListAllWhitelistedDomainsResponse200 = FromSchema<
(typeof schemas.ListAllWhitelistedDomains.response)['200']
>;
export type ListContactActivitiesMetadataParam = FromSchema<typeof schemas.ListContactActivities.metadata>;
export type ListContactActivitiesResponse200 = FromSchema<(typeof schemas.ListContactActivities.response)['200']>;
export type ListContactActivitiesResponse400 = FromSchema<(typeof schemas.ListContactActivities.response)['400']>;
export type ListEcomorderproductsResponse200 = FromSchema<(typeof schemas.ListEcomorderproducts.response)['200']>;
export type ListEcomorderproductsResponse400 = FromSchema<(typeof schemas.ListEcomorderproducts.response)['400']>;
export type ListProductsForOrderMetadataParam = FromSchema<typeof schemas.ListProductsForOrder.metadata>;
export type ListProductsForOrderResponse200 = FromSchema<(typeof schemas.ListProductsForOrder.response)['200']>;
export type ListProductsForOrderResponse400 = FromSchema<(typeof schemas.ListProductsForOrder.response)['400']>;
export type ListRecordsCreatedFromASchemaMetadataParam = FromSchema<
  typeof schemas.ListRecordsCreatedFromASchema.metadata
>;
export type ListRecordsCreatedFromASchemaResponse200 = FromSchema<
(typeof schemas.ListRecordsCreatedFromASchema.response)['200']
>;
export type ListRecordsCreatedFromASchemaResponse400 = FromSchema<
(typeof schemas.ListRecordsCreatedFromASchema.response)['400']
>;
export type ListRecordsCreatedFromASchemaResponse404 = FromSchema<
(typeof schemas.ListRecordsCreatedFromASchema.response)['404']
>;
export type LocalEventsBodyParam = FromSchema<typeof schemas.LocalEvents.body>;
export type LocalEventsResponse201 = FromSchema<(typeof schemas.LocalEvents.response)['201']>;
export type LocalEventsResponse403 = FromSchema<(typeof schemas.LocalEvents.response)['403']>;
export type MoveDealTasksToAnotherDealTaskTypeBodyParam = FromSchema<
  typeof schemas.MoveDealTasksToAnotherDealTaskType.body
>;
export type MoveDealTasksToAnotherDealTaskTypeMetadataParam = FromSchema<
  typeof schemas.MoveDealTasksToAnotherDealTaskType.metadata
>;
export type MoveDealTasksToAnotherDealTaskTypeResponse200 = FromSchema<
(typeof schemas.MoveDealTasksToAnotherDealTaskType.response)['200']
>;
export type MoveDealTasksToAnotherDealTaskTypeResponse400 = FromSchema<
(typeof schemas.MoveDealTasksToAnotherDealTaskType.response)['400']
>;
export type MoveDealsToAnotherDealStageBodyParam = FromSchema<typeof schemas.MoveDealsToAnotherDealStage.body>;
export type MoveDealsToAnotherDealStageMetadataParam = FromSchema<typeof schemas.MoveDealsToAnotherDealStage.metadata>;
export type MoveDealsToAnotherDealStageResponse200 = FromSchema<
(typeof schemas.MoveDealsToAnotherDealStage.response)['200']
>;
export type MoveDealsToAnotherDealStageResponse422 = FromSchema<
(typeof schemas.MoveDealsToAnotherDealStage.response)['422']
>;
export type RemoveACalendarFeedMetadataParam = FromSchema<typeof schemas.RemoveACalendarFeed.metadata>;
export type RemoveACalendarFeedResponse200 = FromSchema<(typeof schemas.RemoveACalendarFeed.response)['200']>;
export type RemoveAContactsTagMetadataParam = FromSchema<typeof schemas.RemoveAContactsTag.metadata>;
export type RemoveAContactsTagResponse200 = FromSchema<(typeof schemas.RemoveAContactsTag.response)['200']>;
export type RemoveAContactsTagResponse404 = FromSchema<(typeof schemas.RemoveAContactsTag.response)['404']>;
export type RemoveDomainFromWhitelistMetadataParam = FromSchema<typeof schemas.RemoveDomainFromWhitelist.metadata>;
export type RemoveDomainFromWhitelistResponse204 = FromSchema<
(typeof schemas.RemoveDomainFromWhitelist.response)['204']
>;
export type RemoveEventNameOnlyMetadataParam = FromSchema<typeof schemas.RemoveEventNameOnly.metadata>;
export type RemoveEventNameOnlyResponse200 = FromSchema<(typeof schemas.RemoveEventNameOnly.response)['200']>;
export type RemoveEventNameOnlyResponse400 = FromSchema<(typeof schemas.RemoveEventNameOnly.response)['400']>;
export type RetrieveACampaignMetadataParam = FromSchema<typeof schemas.RetrieveACampaign.metadata>;
export type RetrieveACampaignResponse200 = FromSchema<(typeof schemas.RetrieveACampaign.response)['200']>;
export type RetrieveAContactautomationMetadataParam = FromSchema<typeof schemas.RetrieveAContactautomation.metadata>;
export type RetrieveAContactautomationResponse200 = FromSchema<
(typeof schemas.RetrieveAContactautomation.response)['200']
>;
export type RetrieveAContactautomationResponse404 = FromSchema<
(typeof schemas.RetrieveAContactautomation.response)['404']
>;
export type RetrieveAContactsScoreValueMetadataParam = FromSchema<typeof schemas.RetrieveAContactsScoreValue.metadata>;
export type RetrieveAContactsScoreValueResponse200 = FromSchema<
(typeof schemas.RetrieveAContactsScoreValue.response)['200']
>;
export type RetrieveAContactsScoreValueResponse404 = FromSchema<
(typeof schemas.RetrieveAContactsScoreValue.response)['404']
>;
export type RetrieveACustomDealFieldMetaMetadataParam = FromSchema<
  typeof schemas.RetrieveACustomDealFieldMeta.metadata
>;
export type RetrieveACustomDealFieldMetaResponse200 = FromSchema<
(typeof schemas.RetrieveACustomDealFieldMeta.response)['200']
>;
export type RetrieveACustomDealFieldMetaResponse404 = FromSchema<
(typeof schemas.RetrieveACustomDealFieldMeta.response)['404']
>;
export type RetrieveACustomDealFieldValueMetadataParam = FromSchema<
  typeof schemas.RetrieveACustomDealFieldValue.metadata
>;
export type RetrieveACustomDealFieldValueResponse200 = FromSchema<
(typeof schemas.RetrieveACustomDealFieldValue.response)['200']
>;
export type RetrieveACustomDealFieldValueResponse404 = FromSchema<
(typeof schemas.RetrieveACustomDealFieldValue.response)['404']
>;
export type RetrieveACustomFieldContactMetadataParam = FromSchema<typeof schemas.RetrieveACustomFieldContact.metadata>;
export type RetrieveACustomFieldContactResponse200 = FromSchema<
(typeof schemas.RetrieveACustomFieldContact.response)['200']
>;
export type RetrieveACustomFieldContactResponse400 = FromSchema<
(typeof schemas.RetrieveACustomFieldContact.response)['400']
>;
export type RetrieveACustomFieldMetaMetadataParam = FromSchema<typeof schemas.RetrieveACustomFieldMeta.metadata>;
export type RetrieveACustomFieldMetaResponse200 = FromSchema<(typeof schemas.RetrieveACustomFieldMeta.response)['200']>;
export type RetrieveACustomFieldMetaResponse404 = FromSchema<(typeof schemas.RetrieveACustomFieldMeta.response)['404']>;
export type RetrieveACustomFieldValueMetadataParam = FromSchema<typeof schemas.RetrieveACustomFieldValue.metadata>;
export type RetrieveACustomFieldValueResponse200 = FromSchema<
(typeof schemas.RetrieveACustomFieldValue.response)['200']
>;
export type RetrieveACustomFieldValueResponse404 = FromSchema<
(typeof schemas.RetrieveACustomFieldValue.response)['404']
>;
export type RetrieveADealMetadataParam = FromSchema<typeof schemas.RetrieveADeal.metadata>;
export type RetrieveADealResponse200 = FromSchema<(typeof schemas.RetrieveADeal.response)['200']>;
export type RetrieveADealStageMetadataParam = FromSchema<typeof schemas.RetrieveADealStage.metadata>;
export type RetrieveADealStageResponse200 = FromSchema<(typeof schemas.RetrieveADealStage.response)['200']>;
export type RetrieveADealStageResponse400 = FromSchema<(typeof schemas.RetrieveADealStage.response)['400']>;
export type RetrieveADealTaskTypeMetadataParam = FromSchema<typeof schemas.RetrieveADealTaskType.metadata>;
export type RetrieveADealTaskTypeResponse200 = FromSchema<(typeof schemas.RetrieveADealTaskType.response)['200']>;
export type RetrieveADealTaskTypeResponse400 = FromSchema<(typeof schemas.RetrieveADealTaskType.response)['400']>;
export type RetrieveAFieldvaluesMetadataParam = FromSchema<typeof schemas.RetrieveAFieldvalues.metadata>;
export type RetrieveAFieldvaluesResponse200 = FromSchema<(typeof schemas.RetrieveAFieldvalues.response)['200']>;
export type RetrieveAFieldvaluesResponse403 = FromSchema<(typeof schemas.RetrieveAFieldvalues.response)['403']>;
export type RetrieveAGroupMetadataParam = FromSchema<typeof schemas.RetrieveAGroup.metadata>;
export type RetrieveAGroupResponse200 = FromSchema<(typeof schemas.RetrieveAGroup.response)['200']>;
export type RetrieveAGroupResponse403 = FromSchema<(typeof schemas.RetrieveAGroup.response)['403']>;
export type RetrieveAListMetadataParam = FromSchema<typeof schemas.RetrieveAList.metadata>;
export type RetrieveAListResponse200 = FromSchema<(typeof schemas.RetrieveAList.response)['200']>;
export type RetrieveAListResponse403 = FromSchema<(typeof schemas.RetrieveAList.response)['403']>;
export type RetrieveAListResponse404 = FromSchema<(typeof schemas.RetrieveAList.response)['404']>;
export type RetrieveAMessageMetadataParam = FromSchema<typeof schemas.RetrieveAMessage.metadata>;
export type RetrieveAMessageResponse200 = FromSchema<(typeof schemas.RetrieveAMessage.response)['200']>;
export type RetrieveAMessageResponse404 = FromSchema<(typeof schemas.RetrieveAMessage.response)['404']>;
export type RetrieveANoteMetadataParam = FromSchema<typeof schemas.RetrieveANote.metadata>;
export type RetrieveANoteResponse200 = FromSchema<(typeof schemas.RetrieveANote.response)['200']>;
export type RetrieveANoteResponse400 = FromSchema<(typeof schemas.RetrieveANote.response)['400']>;
export type RetrieveAPipelineMetadataParam = FromSchema<typeof schemas.RetrieveAPipeline.metadata>;
export type RetrieveAPipelineResponse200 = FromSchema<(typeof schemas.RetrieveAPipeline.response)['200']>;
export type RetrieveAPipelineResponse400 = FromSchema<(typeof schemas.RetrieveAPipeline.response)['400']>;
export type RetrieveASavedresponseMetadataParam = FromSchema<typeof schemas.RetrieveASavedresponse.metadata>;
export type RetrieveASavedresponseResponse200 = FromSchema<(typeof schemas.RetrieveASavedresponse.response)['200']>;
export type RetrieveASavedresponseResponse404 = FromSchema<(typeof schemas.RetrieveASavedresponse.response)['404']>;
export type RetrieveASchemaMetadataParam = FromSchema<typeof schemas.RetrieveASchema.metadata>;
export type RetrieveASchemaResponse200 = FromSchema<(typeof schemas.RetrieveASchema.response)['200']>;
export type RetrieveASchemaResponse404 = FromSchema<(typeof schemas.RetrieveASchema.response)['404']>;
export type RetrieveAScoreMetadataParam = FromSchema<typeof schemas.RetrieveAScore.metadata>;
export type RetrieveAScoreResponse200 = FromSchema<(typeof schemas.RetrieveAScore.response)['200']>;
export type RetrieveAScoreResponse404 = FromSchema<(typeof schemas.RetrieveAScore.response)['404']>;
export type RetrieveASecondaryContactMetadataParam = FromSchema<typeof schemas.RetrieveASecondaryContact.metadata>;
export type RetrieveASecondaryContactResponse200 = FromSchema<
(typeof schemas.RetrieveASecondaryContact.response)['200']
>;
export type RetrieveASecondaryContactResponse404 = FromSchema<
(typeof schemas.RetrieveASecondaryContact.response)['404']
>;
export type RetrieveASegmentMetadataParam = FromSchema<typeof schemas.RetrieveASegment.metadata>;
export type RetrieveASegmentResponse200 = FromSchema<(typeof schemas.RetrieveASegment.response)['200']>;
export type RetrieveATagMetadataParam = FromSchema<typeof schemas.RetrieveATag.metadata>;
export type RetrieveATagResponse200 = FromSchema<(typeof schemas.RetrieveATag.response)['200']>;
export type RetrieveATagResponse404 = FromSchema<(typeof schemas.RetrieveATag.response)['404']>;
export type RetrieveATaskOutcomeMetadataParam = FromSchema<typeof schemas.RetrieveATaskOutcome.metadata>;
export type RetrieveATaskOutcomeResponse200 = FromSchema<(typeof schemas.RetrieveATaskOutcome.response)['200']>;
export type RetrieveATaskOutcomeResponse404 = FromSchema<(typeof schemas.RetrieveATaskOutcome.response)['404']>;
export type RetrieveATaskTypeOutcomeRelationMetadataParam = FromSchema<
  typeof schemas.RetrieveATaskTypeOutcomeRelation.metadata
>;
export type RetrieveATaskTypeOutcomeRelationResponse200 = FromSchema<
(typeof schemas.RetrieveATaskTypeOutcomeRelation.response)['200']
>;
export type RetrieveATaskTypeOutcomeRelationResponse404 = FromSchema<
(typeof schemas.RetrieveATaskTypeOutcomeRelation.response)['404']
>;
export type RetrieveATemplateMetadataParam = FromSchema<typeof schemas.RetrieveATemplate.metadata>;
export type RetrieveATemplateResponse200 = FromSchema<(typeof schemas.RetrieveATemplate.response)['200']>;
export type RetrieveATemplateResponse404 = FromSchema<(typeof schemas.RetrieveATemplate.response)['404']>;
export type RetrieveAllCustomDealFieldMetaMetadataParam = FromSchema<
  typeof schemas.RetrieveAllCustomDealFieldMeta.metadata
>;
export type RetrieveAllCustomDealFieldMetaResponse200 = FromSchema<
(typeof schemas.RetrieveAllCustomDealFieldMeta.response)['200']
>;
export type RetrieveAllListsMetadataParam = FromSchema<typeof schemas.RetrieveAllLists.metadata>;
export type RetrieveAllListsResponse200 = FromSchema<(typeof schemas.RetrieveAllLists.response)['200']>;
export type RetrieveAllListsResponse403 = FromSchema<(typeof schemas.RetrieveAllLists.response)['403']>;
export type RetrieveAllTagsMetadataParam = FromSchema<typeof schemas.RetrieveAllTags.metadata>;
export type RetrieveAllTagsResponse200 = FromSchema<(typeof schemas.RetrieveAllTags.response)['200']>;
export type RetrieveAllTagsResponse400 = FromSchema<(typeof schemas.RetrieveAllTags.response)['400']>;
export type RetrieveAnAccountMetadataParam = FromSchema<typeof schemas.RetrieveAnAccount.metadata>;
export type RetrieveAnAccountResponse200 = FromSchema<(typeof schemas.RetrieveAnAccount.response)['200']>;
export type RetrieveAnAddressMetadataParam = FromSchema<typeof schemas.RetrieveAnAddress.metadata>;
export type RetrieveAnAddressResponse200 = FromSchema<(typeof schemas.RetrieveAnAddress.response)['200']>;
export type RetrieveAnAddressResponse400 = FromSchema<(typeof schemas.RetrieveAnAddress.response)['400']>;
export type RetrieveAnAssociationMetadataParam = FromSchema<typeof schemas.RetrieveAnAssociation.metadata>;
export type RetrieveAnAssociationResponse200 = FromSchema<(typeof schemas.RetrieveAnAssociation.response)['200']>;
export type RetrieveAnAssociationResponse404 = FromSchema<(typeof schemas.RetrieveAnAssociation.response)['404']>;
export type RetrieveAnEcomorderproductMetadataParam = FromSchema<typeof schemas.RetrieveAnEcomorderproduct.metadata>;
export type RetrieveAnEcomorderproductResponse200 = FromSchema<
(typeof schemas.RetrieveAnEcomorderproduct.response)['200']
>;
export type RetrieveAnEcomorderproductResponse400 = FromSchema<
(typeof schemas.RetrieveAnEcomorderproduct.response)['400']
>;
export type RetrieveAnEcomorderproductResponse404 = FromSchema<
(typeof schemas.RetrieveAnEcomorderproduct.response)['404']
>;
export type RetrieveContactAccountContactsMetadataParam = FromSchema<
  typeof schemas.RetrieveContactAccountContacts.metadata
>;
export type RetrieveContactAccountContactsResponse200 = FromSchema<
(typeof schemas.RetrieveContactAccountContacts.response)['200']
>;
export type RetrieveContactAccountContactsResponse404 = FromSchema<
(typeof schemas.RetrieveContactAccountContacts.response)['404']
>;
export type RetrieveContactAutomationEntryCountsMetadataParam = FromSchema<
  typeof schemas.RetrieveContactAutomationEntryCounts.metadata
>;
export type RetrieveContactAutomationEntryCountsResponse200 = FromSchema<
(typeof schemas.RetrieveContactAutomationEntryCounts.response)['200']
>;
export type RetrieveContactAutomationEntryCountsResponse404 = FromSchema<
(typeof schemas.RetrieveContactAutomationEntryCounts.response)['404']
>;
export type RetrieveContactBounceLogsMetadataParam = FromSchema<typeof schemas.RetrieveContactBounceLogs.metadata>;
export type RetrieveContactBounceLogsResponse200 = FromSchema<
(typeof schemas.RetrieveContactBounceLogs.response)['200']
>;
export type RetrieveContactBounceLogsResponse404 = FromSchema<
(typeof schemas.RetrieveContactBounceLogs.response)['404']
>;
export type RetrieveContactDataMetadataParam = FromSchema<typeof schemas.RetrieveContactData.metadata>;
export type RetrieveContactDataResponse200 = FromSchema<(typeof schemas.RetrieveContactData.response)['200']>;
export type RetrieveContactDataResponse404 = FromSchema<(typeof schemas.RetrieveContactData.response)['404']>;
export type RetrieveContactDealsListMetadataParam = FromSchema<typeof schemas.RetrieveContactDealsList.metadata>;
export type RetrieveContactDealsListResponse200 = FromSchema<(typeof schemas.RetrieveContactDealsList.response)['200']>;
export type RetrieveContactDealsListResponse404 = FromSchema<(typeof schemas.RetrieveContactDealsList.response)['404']>;
export type RetrieveContactDealsMetadataParam = FromSchema<typeof schemas.RetrieveContactDeals.metadata>;
export type RetrieveContactDealsResponse200 = FromSchema<(typeof schemas.RetrieveContactDeals.response)['200']>;
export type RetrieveContactDealsResponse404 = FromSchema<(typeof schemas.RetrieveContactDeals.response)['404']>;
export type RetrieveContactFieldValuesMetadataParam = FromSchema<typeof schemas.RetrieveContactFieldValues.metadata>;
export type RetrieveContactFieldValuesResponse200 = FromSchema<
(typeof schemas.RetrieveContactFieldValues.response)['200']
>;
export type RetrieveContactFieldValuesResponse404 = FromSchema<
(typeof schemas.RetrieveContactFieldValues.response)['404']
>;
export type RetrieveContactGeoIpsMetadataParam = FromSchema<typeof schemas.RetrieveContactGeoIps.metadata>;
export type RetrieveContactGeoIpsResponse200 = FromSchema<(typeof schemas.RetrieveContactGeoIps.response)['200']>;
export type RetrieveContactGeoIpsResponse404 = FromSchema<(typeof schemas.RetrieveContactGeoIps.response)['404']>;
export type RetrieveContactGoalsMetadataParam = FromSchema<typeof schemas.RetrieveContactGoals.metadata>;
export type RetrieveContactGoalsResponse200 = FromSchema<(typeof schemas.RetrieveContactGoals.response)['200']>;
export type RetrieveContactGoalsResponse404 = FromSchema<(typeof schemas.RetrieveContactGoals.response)['404']>;
export type RetrieveContactListMembershipsMetadataParam = FromSchema<
  typeof schemas.RetrieveContactListMemberships.metadata
>;
export type RetrieveContactListMembershipsResponse200 = FromSchema<
(typeof schemas.RetrieveContactListMemberships.response)['200']
>;
export type RetrieveContactListMembershipsResponse404 = FromSchema<
(typeof schemas.RetrieveContactListMemberships.response)['404']
>;
export type RetrieveContactLogsMetadataParam = FromSchema<typeof schemas.RetrieveContactLogs.metadata>;
export type RetrieveContactLogsResponse200 = FromSchema<(typeof schemas.RetrieveContactLogs.response)['200']>;
export type RetrieveContactLogsResponse404 = FromSchema<(typeof schemas.RetrieveContactLogs.response)['404']>;
export type RetrieveContactNotesMetadataParam = FromSchema<typeof schemas.RetrieveContactNotes.metadata>;
export type RetrieveContactNotesResponse200 = FromSchema<(typeof schemas.RetrieveContactNotes.response)['200']>;
export type RetrieveContactNotesResponse404 = FromSchema<(typeof schemas.RetrieveContactNotes.response)['404']>;
export type RetrieveContactOrganizationMetadataParam = FromSchema<typeof schemas.RetrieveContactOrganization.metadata>;
export type RetrieveContactOrganizationResponse200 = FromSchema<
(typeof schemas.RetrieveContactOrganization.response)['200']
>;
export type RetrieveContactOrganizationResponse404 = FromSchema<
(typeof schemas.RetrieveContactOrganization.response)['404']
>;
export type RetrieveContactPlusAppendMetadataParam = FromSchema<typeof schemas.RetrieveContactPlusAppend.metadata>;
export type RetrieveContactPlusAppendResponse200 = FromSchema<
(typeof schemas.RetrieveContactPlusAppend.response)['200']
>;
export type RetrieveContactPlusAppendResponse404 = FromSchema<
(typeof schemas.RetrieveContactPlusAppend.response)['404']
>;
export type RetrieveContactTrackingLogsMetadataParam = FromSchema<typeof schemas.RetrieveContactTrackingLogs.metadata>;
export type RetrieveContactTrackingLogsResponse200 = FromSchema<
(typeof schemas.RetrieveContactTrackingLogs.response)['200']
>;
export type RetrieveContactTrackingLogsResponse404 = FromSchema<
(typeof schemas.RetrieveContactTrackingLogs.response)['404']
>;
export type RetrieveEventTrackingStatusResponse200 = FromSchema<
(typeof schemas.RetrieveEventTrackingStatus.response)['200']
>;
export type RetrieveFieldsMetadataParam = FromSchema<typeof schemas.RetrieveFields.metadata>;
export type RetrieveFieldsResponse200 = FromSchema<(typeof schemas.RetrieveFields.response)['200']>;
export type RetrieveFormsMetadataParam = FromSchema<typeof schemas.RetrieveForms.metadata>;
export type RetrieveFormsResponse200 = FromSchema<(typeof schemas.RetrieveForms.response)['200']>;
export type RetrieveFormsResponse403 = FromSchema<(typeof schemas.RetrieveForms.response)['403']>;
export type RetrieveInaccessiblePipelinesByUserMetadataParam = FromSchema<
  typeof schemas.RetrieveInaccessiblePipelinesByUser.metadata
>;
export type RetrieveInaccessiblePipelinesByUserResponse200 = FromSchema<
(typeof schemas.RetrieveInaccessiblePipelinesByUser.response)['200']
>;
export type RetrieveInaccessiblePipelinesByUserResponse422 = FromSchema<
(typeof schemas.RetrieveInaccessiblePipelinesByUser.response)['422']
>;
export type RetrieveLinksAssociatedCampaignMetadataParam = FromSchema<
  typeof schemas.RetrieveLinksAssociatedCampaign.metadata
>;
export type RetrieveLinksAssociatedCampaignResponse200 = FromSchema<
(typeof schemas.RetrieveLinksAssociatedCampaign.response)['200']
>;
export type RetrieveLinksAssociatedCampaignResponse404 = FromSchema<
(typeof schemas.RetrieveLinksAssociatedCampaign.response)['404']
>;
export type RetrieveSiteTrackingCodeResponse200 = FromSchema<(typeof schemas.RetrieveSiteTrackingCode.response)['200']>;
export type RetrieveSiteTrackingCodeResponse400 = FromSchema<(typeof schemas.RetrieveSiteTrackingCode.response)['400']>;
export type RetrieveSiteTrackingStatusResponse200 = FromSchema<
(typeof schemas.RetrieveSiteTrackingStatus.response)['200']
>;
export type RetrieveSiteTrackingStatusResponse400 = FromSchema<
(typeof schemas.RetrieveSiteTrackingStatus.response)['400']
>;
export type SavedResponsesBodyParam = FromSchema<typeof schemas.SavedResponses.body>;
export type SavedResponsesResponse201 = FromSchema<(typeof schemas.SavedResponses.response)['201']>;
export type SavedResponsesResponse422 = FromSchema<(typeof schemas.SavedResponses.response)['422']>;
export type SetConfigMetadataParam = FromSchema<typeof schemas.SetConfig.metadata>;
export type SetConfigResponse200 = FromSchema<(typeof schemas.SetConfig.response)['200']>;
export type SetConfigResponse404 = FromSchema<(typeof schemas.SetConfig.response)['404']>;
export type SyncAContactsDataBodyParam = FromSchema<typeof schemas.SyncAContactsData.body>;
export type SyncAContactsDataResponse201 = FromSchema<(typeof schemas.SyncAContactsData.response)['201']>;
export type SyncAContactsDataResponse400 = FromSchema<(typeof schemas.SyncAContactsData.response)['400']>;
export type UpdateAAccountNoteBodyParam = FromSchema<typeof schemas.UpdateAAccountNote.body>;
export type UpdateAAccountNoteMetadataParam = FromSchema<typeof schemas.UpdateAAccountNote.metadata>;
export type UpdateAAccountNoteResponse200 = FromSchema<(typeof schemas.UpdateAAccountNote.response)['200']>;
export type UpdateACalendarFeedBodyParam = FromSchema<typeof schemas.UpdateACalendarFeed.body>;
export type UpdateACalendarFeedMetadataParam = FromSchema<typeof schemas.UpdateACalendarFeed.metadata>;
export type UpdateACalendarFeedResponse200 = FromSchema<(typeof schemas.UpdateACalendarFeed.response)['200']>;
export type UpdateAContactNewBodyParam = FromSchema<typeof schemas.UpdateAContactNew.body>;
export type UpdateAContactNewMetadataParam = FromSchema<typeof schemas.UpdateAContactNew.metadata>;
export type UpdateAContactNewResponse200 = FromSchema<(typeof schemas.UpdateAContactNew.response)['200']>;
export type UpdateAContactNewResponse404 = FromSchema<(typeof schemas.UpdateAContactNew.response)['404']>;
export type UpdateACustomDealFieldMetaBodyParam = FromSchema<typeof schemas.UpdateACustomDealFieldMeta.body>;
export type UpdateACustomDealFieldMetaMetadataParam = FromSchema<typeof schemas.UpdateACustomDealFieldMeta.metadata>;
export type UpdateACustomDealFieldMetaResponse200 = FromSchema<
(typeof schemas.UpdateACustomDealFieldMeta.response)['200']
>;
export type UpdateACustomDealFieldMetaResponse404 = FromSchema<
(typeof schemas.UpdateACustomDealFieldMeta.response)['404']
>;
export type UpdateACustomDealFieldValueBodyParam = FromSchema<typeof schemas.UpdateACustomDealFieldValue.body>;
export type UpdateACustomDealFieldValueMetadataParam = FromSchema<typeof schemas.UpdateACustomDealFieldValue.metadata>;
export type UpdateACustomDealFieldValueResponse200 = FromSchema<
(typeof schemas.UpdateACustomDealFieldValue.response)['200']
>;
export type UpdateACustomDealFieldValueResponse404 = FromSchema<
(typeof schemas.UpdateACustomDealFieldValue.response)['404']
>;
export type UpdateACustomDealFieldValueResponse422 = FromSchema<
(typeof schemas.UpdateACustomDealFieldValue.response)['422']
>;
export type UpdateACustomFieldBodyParam = FromSchema<typeof schemas.UpdateACustomField.body>;
export type UpdateACustomFieldMetadataParam = FromSchema<typeof schemas.UpdateACustomField.metadata>;
export type UpdateACustomFieldResponse200 = FromSchema<(typeof schemas.UpdateACustomField.response)['200']>;
export type UpdateACustomFieldResponse404 = FromSchema<(typeof schemas.UpdateACustomField.response)['404']>;
export type UpdateACustomFieldValueBodyParam = FromSchema<typeof schemas.UpdateACustomFieldValue.body>;
export type UpdateACustomFieldValueForContactBodyParam = FromSchema<
  typeof schemas.UpdateACustomFieldValueForContact.body
>;
export type UpdateACustomFieldValueForContactMetadataParam = FromSchema<
  typeof schemas.UpdateACustomFieldValueForContact.metadata
>;
export type UpdateACustomFieldValueForContactResponse200 = FromSchema<
(typeof schemas.UpdateACustomFieldValueForContact.response)['200']
>;
export type UpdateACustomFieldValueForContactResponse400 = FromSchema<
(typeof schemas.UpdateACustomFieldValueForContact.response)['400']
>;
export type UpdateACustomFieldValueMetadataParam = FromSchema<typeof schemas.UpdateACustomFieldValue.metadata>;
export type UpdateACustomFieldValueResponse200 = FromSchema<(typeof schemas.UpdateACustomFieldValue.response)['200']>;
export type UpdateACustomFieldValueResponse404 = FromSchema<(typeof schemas.UpdateACustomFieldValue.response)['404']>;
export type UpdateADealNewBodyParam = FromSchema<typeof schemas.UpdateADealNew.body>;
export type UpdateADealNewMetadataParam = FromSchema<typeof schemas.UpdateADealNew.metadata>;
export type UpdateADealNewResponse200 = FromSchema<(typeof schemas.UpdateADealNew.response)['200']>;
export type UpdateADealNewResponse400 = FromSchema<(typeof schemas.UpdateADealNew.response)['400']>;
export type UpdateADealNoteBodyParam = FromSchema<typeof schemas.UpdateADealNote.body>;
export type UpdateADealNoteMetadataParam = FromSchema<typeof schemas.UpdateADealNote.metadata>;
export type UpdateADealNoteResponse200 = FromSchema<(typeof schemas.UpdateADealNote.response)['200']>;
export type UpdateADealStageBodyParam = FromSchema<typeof schemas.UpdateADealStage.body>;
export type UpdateADealStageMetadataParam = FromSchema<typeof schemas.UpdateADealStage.metadata>;
export type UpdateADealStageResponse200 = FromSchema<(typeof schemas.UpdateADealStage.response)['200']>;
export type UpdateADealStageResponse400 = FromSchema<(typeof schemas.UpdateADealStage.response)['400']>;
export type UpdateADealTaskTypeBodyParam = FromSchema<typeof schemas.UpdateADealTaskType.body>;
export type UpdateADealTaskTypeMetadataParam = FromSchema<typeof schemas.UpdateADealTaskType.metadata>;
export type UpdateADealTaskTypeResponse200 = FromSchema<(typeof schemas.UpdateADealTaskType.response)['200']>;
export type UpdateADealTaskTypeResponse400 = FromSchema<(typeof schemas.UpdateADealTaskType.response)['400']>;
export type UpdateAFieldBodyParam = FromSchema<typeof schemas.UpdateAField.body>;
export type UpdateAFieldMetadataParam = FromSchema<typeof schemas.UpdateAField.metadata>;
export type UpdateAFieldResponse200 = FromSchema<(typeof schemas.UpdateAField.response)['200']>;
export type UpdateAFieldResponse403 = FromSchema<(typeof schemas.UpdateAField.response)['403']>;
export type UpdateAGroupBodyParam = FromSchema<typeof schemas.UpdateAGroup.body>;
export type UpdateAGroupMetadataParam = FromSchema<typeof schemas.UpdateAGroup.metadata>;
export type UpdateAGroupResponse200 = FromSchema<(typeof schemas.UpdateAGroup.response)['200']>;
export type UpdateAGroupResponse403 = FromSchema<(typeof schemas.UpdateAGroup.response)['403']>;
export type UpdateAMessageMetadataParam = FromSchema<typeof schemas.UpdateAMessage.metadata>;
export type UpdateAMessageResponse200 = FromSchema<(typeof schemas.UpdateAMessage.response)['200']>;
export type UpdateAMessageResponse404 = FromSchema<(typeof schemas.UpdateAMessage.response)['404']>;
export type UpdateANoteBodyParam = FromSchema<typeof schemas.UpdateANote.body>;
export type UpdateANoteMetadataParam = FromSchema<typeof schemas.UpdateANote.metadata>;
export type UpdateANoteResponse200 = FromSchema<(typeof schemas.UpdateANote.response)['200']>;
export type UpdateANoteResponse403 = FromSchema<(typeof schemas.UpdateANote.response)['403']>;
export type UpdateAPipelineBodyParam = FromSchema<typeof schemas.UpdateAPipeline.body>;
export type UpdateAPipelineMetadataParam = FromSchema<typeof schemas.UpdateAPipeline.metadata>;
export type UpdateAPipelineResponse200 = FromSchema<(typeof schemas.UpdateAPipeline.response)['200']>;
export type UpdateAPipelineResponse400 = FromSchema<(typeof schemas.UpdateAPipeline.response)['400']>;
export type UpdateASavedResponseBodyParam = FromSchema<typeof schemas.UpdateASavedResponse.body>;
export type UpdateASavedResponseMetadataParam = FromSchema<typeof schemas.UpdateASavedResponse.metadata>;
export type UpdateASavedResponseResponse200 = FromSchema<(typeof schemas.UpdateASavedResponse.response)['200']>;
export type UpdateASavedResponseResponse422 = FromSchema<(typeof schemas.UpdateASavedResponse.response)['422']>;
export type UpdateASchemaBodyParam = FromSchema<typeof schemas.UpdateASchema.body>;
export type UpdateASchemaMetadataParam = FromSchema<typeof schemas.UpdateASchema.metadata>;
export type UpdateASchemaResponse200 = FromSchema<(typeof schemas.UpdateASchema.response)['200']>;
export type UpdateASchemaResponse404 = FromSchema<(typeof schemas.UpdateASchema.response)['404']>;
export type UpdateASchemaResponse422 = FromSchema<(typeof schemas.UpdateASchema.response)['422']>;
export type UpdateASecondaryContactBodyParam = FromSchema<typeof schemas.UpdateASecondaryContact.body>;
export type UpdateASecondaryContactMetadataParam = FromSchema<typeof schemas.UpdateASecondaryContact.metadata>;
export type UpdateASecondaryContactResponse200 = FromSchema<(typeof schemas.UpdateASecondaryContact.response)['200']>;
export type UpdateASecondaryContactResponse404 = FromSchema<(typeof schemas.UpdateASecondaryContact.response)['404']>;
export type UpdateASecondaryContactResponse422 = FromSchema<(typeof schemas.UpdateASecondaryContact.response)['422']>;
export type UpdateATagBodyParam = FromSchema<typeof schemas.UpdateATag.body>;
export type UpdateATagMetadataParam = FromSchema<typeof schemas.UpdateATag.metadata>;
export type UpdateATagResponse200 = FromSchema<(typeof schemas.UpdateATag.response)['200']>;
export type UpdateATaskOutcome1BodyParam = FromSchema<typeof schemas.UpdateATaskOutcome1.body>;
export type UpdateATaskOutcome1MetadataParam = FromSchema<typeof schemas.UpdateATaskOutcome1.metadata>;
export type UpdateATaskOutcome1Response200 = FromSchema<(typeof schemas.UpdateATaskOutcome1.response)['200']>;
export type UpdateATaskOutcome1Response400 = FromSchema<(typeof schemas.UpdateATaskOutcome1.response)['400']>;
export type UpdateATaskOutcome1Response422 = FromSchema<(typeof schemas.UpdateATaskOutcome1.response)['422']>;
export type UpdateATaskOutcomeBodyParam = FromSchema<typeof schemas.UpdateATaskOutcome.body>;
export type UpdateATaskOutcomeMetadataParam = FromSchema<typeof schemas.UpdateATaskOutcome.metadata>;
export type UpdateATaskOutcomeResponse200 = FromSchema<(typeof schemas.UpdateATaskOutcome.response)['200']>;
export type UpdateATaskOutcomeResponse422 = FromSchema<(typeof schemas.UpdateATaskOutcome.response)['422']>;
export type UpdateAnAccountNewBodyParam = FromSchema<typeof schemas.UpdateAnAccountNew.body>;
export type UpdateAnAccountNewMetadataParam = FromSchema<typeof schemas.UpdateAnAccountNew.metadata>;
export type UpdateAnAccountNewResponse200 = FromSchema<(typeof schemas.UpdateAnAccountNew.response)['200']>;
export type UpdateAnAccountNewResponse400 = FromSchema<(typeof schemas.UpdateAnAccountNew.response)['400']>;
export type UpdateAnAddressBodyParam = FromSchema<typeof schemas.UpdateAnAddress.body>;
export type UpdateAnAddressMetadataParam = FromSchema<typeof schemas.UpdateAnAddress.metadata>;
export type UpdateAnAddressResponse200 = FromSchema<(typeof schemas.UpdateAnAddress.response)['200']>;
export type UpdateAnAddressResponse404 = FromSchema<(typeof schemas.UpdateAnAddress.response)['404']>;
export type UpdateAnAssociation1BodyParam = FromSchema<typeof schemas.UpdateAnAssociation1.body>;
export type UpdateAnAssociation1MetadataParam = FromSchema<typeof schemas.UpdateAnAssociation1.metadata>;
export type UpdateAnAssociation1Response200 = FromSchema<(typeof schemas.UpdateAnAssociation1.response)['200']>;
export type UpdateBrandingBodyParam = FromSchema<typeof schemas.UpdateBranding.body>;
export type UpdateBrandingMetadataParam = FromSchema<typeof schemas.UpdateBranding.metadata>;
export type UpdateBrandingResponse200 = FromSchema<(typeof schemas.UpdateBranding.response)['200']>;
export type UpdateBrandingResponse400 = FromSchema<(typeof schemas.UpdateBranding.response)['400']>;
export type UpdateConnectionBodyParam = FromSchema<typeof schemas.UpdateConnection.body>;
export type UpdateConnectionMetadataParam = FromSchema<typeof schemas.UpdateConnection.metadata>;
export type UpdateConnectionResponse200 = FromSchema<(typeof schemas.UpdateConnection.response)['200']>;
export type UpdateConnectionResponse400 = FromSchema<(typeof schemas.UpdateConnection.response)['400']>;
export type UpdateCustomerBodyParam = FromSchema<typeof schemas.UpdateCustomer.body>;
export type UpdateCustomerMetadataParam = FromSchema<typeof schemas.UpdateCustomer.metadata>;
export type UpdateCustomerResponse200 = FromSchema<(typeof schemas.UpdateCustomer.response)['200']>;
export type UpdateListStatusForContactBodyParam = FromSchema<typeof schemas.UpdateListStatusForContact.body>;
export type UpdateListStatusForContactResponse200 = FromSchema<
(typeof schemas.UpdateListStatusForContact.response)['200']
>;
export type UpdateListStatusForContactResponse400 = FromSchema<
(typeof schemas.UpdateListStatusForContact.response)['400']
>;
export type UpdateOrderBodyParam = FromSchema<typeof schemas.UpdateOrder.body>;
export type UpdateOrderMetadataParam = FromSchema<typeof schemas.UpdateOrder.metadata>;
export type UpdateOrderResponse200 = FromSchema<(typeof schemas.UpdateOrder.response)['200']>;
export type UpdateTaskBodyParam = FromSchema<typeof schemas.UpdateTask.body>;
export type UpdateTaskMetadataParam = FromSchema<typeof schemas.UpdateTask.metadata>;
export type UpdateTaskResponse201 = FromSchema<(typeof schemas.UpdateTask.response)['201']>;
export type UpdateTaskResponse400 = FromSchema<(typeof schemas.UpdateTask.response)['400']>;
export type UpdateUserBodyParam = FromSchema<typeof schemas.UpdateUser.body>;
export type UpdateUserMetadataParam = FromSchema<typeof schemas.UpdateUser.metadata>;
export type UpdateUserResponse200 = FromSchema<(typeof schemas.UpdateUser.response)['200']>;
export type UpdateUserResponse400 = FromSchema<(typeof schemas.UpdateUser.response)['400']>;
export type UpdateWebhookBodyParam = FromSchema<typeof schemas.UpdateWebhook.body>;
export type UpdateWebhookMetadataParam = FromSchema<typeof schemas.UpdateWebhook.metadata>;
export type UpdateWebhookResponse200 = FromSchema<(typeof schemas.UpdateWebhook.response)['200']>;
export type UpdateWebhookResponse400 = FromSchema<(typeof schemas.UpdateWebhook.response)['400']>;
