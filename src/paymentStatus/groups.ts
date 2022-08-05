import type {
    PaymentStatusesGroups
} from "../../lib/typescript/PaymentStatus"

export const groups: {
    group: PaymentStatusesGroups,
    reg: RegExp,
    status: "successfully" | "rejected" | "Chargeback" | "pending"
}[] =
    [
        { group: "successfully", reg: /^(000\.000\.|000\.100\.1|000\.[36])/, status: "successfully" },
        { group: "manuallyReviewed", reg: /^(000\.400\.0[^3]|000\.400\.[0-1]{2}0)/, status: "successfully" },
        { group: "pending", reg: /^(000\.200)/, status: "pending" },
        { group: "pending", reg: /^(800\.400\.5|100\.400\.500)/, status: "pending" },
        { group: "rejection3DsecureAndIntercardRiskChecks", reg: /^(000\.400\.[1][0-9][1-9]|000\.400\.2)/, status: "rejected" },
        { group: "rejectionsByTheExternalBank", reg: /^(800\.[17]00|800\.800\.[123])/, status: "rejected" },
        { group: "rejectionsDueToCommunicationErrors", reg: /^(900\.[1234]00|000\.400\.030)/, status: "rejected" },
        { group: "rejectionsDueToSystemErrors", reg: /^(800\.[56]|999\.|600\.1|800\.800\.[84])/, status: "rejected" },
        { group: "rejectionsDueToErrorInAsynchonousWorkflow", reg: /^(100\.39[765])/, status: "rejected" },
        { group: "softDeclines", reg: /^(300\.100\.100)/, status: "rejected" },
        { group: "rejectionsDueToChecksByExternalRiskSystems", reg: /^(100\.400\.[0-3]|100\.38|100\.370\.100|100\.370\.11)/, status: "rejected" },
        { group: "rejectionsDueToAddressValidation", reg: /^(800\.400\.1)/, status: "rejected" },
        { group: "rejectionsDueTo3Dsecure", reg: /^(800\.400\.2|100\.380\.4|100\.390)/, status: "rejected" },
        { group: "rejectionsDueToBlacklistValidation", reg: /^(100\.100\.701|800\.[32])/, status: "rejected" },
        { group: "rejectionsDueToRiskValidation", reg: /^(800\.1[123456]0)/, status: "rejected" },
        { group: "rejectionsDueToConfigurationValidation", reg: /^(600\.[23]|500\.[12]|800\.121)/, status: "rejected" },
        { group: "rejectionsDueToRegistrationValidation", reg: /^(100\.[13]50)/, status: "rejected" },
        { group: "rejectionsDueToJobValidation", reg: /^(100\.250|100\.360)/, status: "rejected" },
        { group: "rejectionsDueToReferenceValidation", reg: /^(700\.[1345][05]0)/, status: "rejected" },
        { group: "rejectionsDueToFormatValidation", reg: /^(200\.[123]|100\.[53][07]|800\.900|100\.[69]00\.500)/, status: "rejected" },
        { group: "rejectionsDueToAddressValidation", reg: /^(100\.800)/, status: "rejected" },
        { group: "rejectionsDueToContactValidation", reg: /^(100\.[97]00)/, status: "rejected" },
        { group: "rejectionsDueToAccountValidation", reg: /^(100\.100|100.2[01])/, status: "rejected" },
        { group: "rejectionsDueToAmountValidation", reg: /^(100\.55)/, status: "rejected" },
        { group: "rejectionsDueToRiskManagement", reg: /^(100\.380\.[23]|100\.380\.101)/, status: "rejected" },
        { group: "chargebackRelatedResultCodes", reg: /^(000\.100\.2)/, status: "Chargeback" },
    ]