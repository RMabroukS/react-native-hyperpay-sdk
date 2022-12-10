

export type PaymentStatus = {
    code: string,
    description: string,
    status: 'successfully' | 'rejected' | 'Chargeback' | 'pending' | 'error'
}

export type PaymentStatusesGroups = 'successfully' |
    'manuallyReviewed' |
    'pending' |
    'rejection3DsecureAndIntercardRiskChecks' |
    'rejectionsByTheExternalBank' |
    'rejectionsDueToCommunicationErrors' |
    'rejectionsDueToSystemErrors' |
    'rejectionsDueToErrorInAsynchonousWorkflow' |
    'softDeclines' |
    'rejectionsDueToChecksByExternalRiskSystems' |
    'rejectionsDueToAddressValidation' |
    'rejectionsDueTo3Dsecure' |
    'rejectionsDueToBlacklistValidation' |
    'rejectionsDueToRiskValidation' |
    'rejectionsDueToConfigurationValidation' |
    'rejectionsDueToRegistrationValidation' |
    'rejectionsDueToJobValidation' |
    'rejectionsDueToReferenceValidation' |
    'rejectionsDueToFormatValidation' |
    'rejectionsDueToAddressValidation' |
    'rejectionsDueToContactValidation' |
    'rejectionsDueToAccountValidation' |
    'rejectionsDueToAmountValidation' |
    'rejectionsDueToRiskManagement' |
    'chargebackRelatedResultCodes'


