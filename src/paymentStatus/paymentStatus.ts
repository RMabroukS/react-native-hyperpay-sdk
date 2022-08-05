import type {
    PaymentStatusesGroups,
    PaymentStatusType
} from "lib/typescript/PaymentStatus"

export const PaymentStatus:
    Record<PaymentStatusesGroups,
        Record<string, PaymentStatusType>> = {
    "successfully": {
        "000.000.000": {
            "code": "000.000.000",
            "description": "Transaction succeeded",
            "status": "successfully"
        },
        "000.000.100": {
            "code": "000.000.100",
            "description": "successful request",
            "status": "successfully"
        },
        "000.100.105": {
            "code": "000.100.105",
            "description": "Chargeback Representment is successful",
            "status": "successfully"
        },
        "000.100.106": {
            "code": "000.100.106",
            "description": "Chargeback Representment cancellation is successful",
            "status": "successfully"
        },
        "000.100.110": {
            "code": "000.100.110",
            "description": "Request successfully processed in 'Merchant in Integrator Test Mode'",
            "status": "successfully"
        },
        "000.100.111": {
            "code": "000.100.111",
            "description": "Request successfully processed in 'Merchant in Validator Test Mode'",
            "status": "successfully"
        },
        "000.100.112": {
            "code": "000.100.112",
            "description": "Request successfully processed in 'Merchant in Connector Test Mode'",
            "status": "successfully"
        },
        "000.300.000": {
            "code": "000.300.000",
            "description": "Two-step transaction succeeded",
            "status": "successfully"
        },
        "000.300.100": {
            "code": "000.300.100",
            "description": "Risk check successful",
            "status": "successfully"
        },
        "000.300.101": {
            "code": "000.300.101",
            "description": "Risk bank account check successful",
            "status": "successfully"
        },
        "000.300.102": {
            "code": "000.300.102",
            "description": "Risk report successful",
            "status": "successfully"
        },
        "000.300.103": {
            "code": "000.300.103",
            "description": "Exemption check successful",
            "status": "successfully"
        },
        "000.310.100": {
            "code": "000.310.100",
            "description": "Account updated",
            "status": "successfully"
        },
        "000.310.101": {
            "code": "000.310.101",
            "description": "Account updated (Credit card expired)",
            "status": "successfully"
        },
        "000.310.110": {
            "code": "000.310.110",
            "description": "No updates found, but account is valid",
            "status": "successfully"
        },
        "000.600.000": {
            "code": "000.600.000",
            "description": "transaction succeeded due to external update",
            "status": "successfully"
        }
    },
    "manuallyReviewed": {
        "000.400.000": {
            "code": "000.400.000",
            "description": "Transaction succeeded (please review manually due to fraud suspicion)",
            "status": "successfully"
        },
        "000.400.010": {
            "code": "000.400.010",
            "description": "Transaction succeeded (please review manually due to AVS return code)",
            "status": "successfully"
        },
        "000.400.020": {
            "code": "000.400.020",
            "description": "Transaction succeeded (please review manually due to CVV return code)",
            "status": "successfully"
        },
        "000.400.040": {
            "code": "000.400.040",
            "description": "Transaction succeeded (please review manually due to amount mismatch)",
            "status": "successfully"
        },
        "000.400.050": {
            "code": "000.400.050",
            "description": "Transaction succeeded (please review manually because transaction is pending)",
            "status": "successfully"
        },
        "000.400.060": {
            "code": "000.400.060",
            "description": "Transaction succeeded (approved at merchant's risk)",
            "status": "successfully"
        },
        "000.400.070": {
            "code": "000.400.070",
            "description": "Transaction succeeded (waiting for external risk review)",
            "status": "successfully"
        },
        "000.400.080": {
            "code": "000.400.080",
            "description": "Transaction succeeded (please review manually because the service was unavailable)",
            "status": "successfully"
        },
        "000.400.081": {
            "code": "000.400.081",
            "description": "Transaction succeeded (please review manually, as the risk status not available yet due network timeout)",
            "status": "successfully"
        },
        "000.400.082": {
            "code": "000.400.082",
            "description": "Transaction succeeded (please review manually, as the risk status not available yet due processing timeout)",
            "status": "successfully"
        },
        "000.400.090": {
            "code": "000.400.090",
            "description": "Transaction succeeded (please review manually due to external risk check)",
            "status": "successfully"
        },
        "000.400.091": {
            "code": "000.400.091",
            "description": "Transaction succeeded (Data only)",
            "status": "successfully"
        },
        "000.400.100": {
            "code": "000.400.100",
            "description": "Transaction succeeded, risk after payment rejected",
            "status": "successfully"
        },
        "000.400.110": {
            "code": "000.400.110",
            "description": "Authentication successful (frictionless flow)",
            "status": "successfully"
        }
    },
    "pending": {
        "000.200.000": {
            "code": "000.200.000",
            "description": "transaction pending",
            "status": "pending"
        },
        "000.200.001": {
            "code": "000.200.001",
            "description": "Transaction pending for acquirer, the consumer is not present",
            "status": "pending"
        },
        "000.200.100": {
            "code": "000.200.100",
            "description": "successfully created checkout",
            "status": "pending"
        },
        "000.200.101": {
            "code": "000.200.101",
            "description": "successfully updated checkout",
            "status": "pending"
        },
        "000.200.102": {
            "code": "000.200.102",
            "description": "successfully deleted checkout",
            "status": "pending"
        },
        "000.200.103": {
            "code": "000.200.103",
            "description": "checkout is pending",
            "status": "pending"
        },
        "000.200.200": {
            "code": "000.200.200",
            "description": "Transaction initialized",
            "status": "pending"
        },
        "000.200.201": {
            "code": "000.200.201",
            "description": "QR Scanned/Link Clicked, waiting for the final authentication result",
            "status": "pending"
        },
        "100.400.500": {
            "code": "100.400.500",
            "description": "waiting for external risk",
            "status": "pending"
        },
        "800.400.500": {
            "code": "800.400.500",
            "description": "Waiting for confirmation of non-instant payment. Denied for now.",
            "status": "pending"
        },
        "800.400.501": {
            "code": "800.400.501",
            "description": "Waiting for confirmation of non-instant debit. Denied for now.",
            "status": "pending"
        },
        "800.400.502": {
            "code": "800.400.502",
            "description": "Waiting for confirmation of non-instant refund. Denied for now.",
            "status": "pending"
        }
    },
    "rejection3DsecureAndIntercardRiskChecks": {
        "000.400.101": {
            "code": "000.400.101",
            "description": "card not participating/authentication unavailable",
            "status": "rejected"
        },
        "000.400.102": {
            "code": "000.400.102",
            "description": "user not enrolled",
            "status": "rejected"
        },
        "000.400.103": {
            "code": "000.400.103",
            "description": "Technical Error in 3D system",
            "status": "rejected"
        },
        "000.400.104": {
            "code": "000.400.104",
            "description": "Missing or malformed 3DSecure Configuration for Channel",
            "status": "rejected"
        },
        "000.400.105": {
            "code": "000.400.105",
            "description": "Unsupported User Device - Authentication not possible",
            "status": "rejected"
        },
        "000.400.106": {
            "code": "000.400.106",
            "description": "invalid payer authentication response(PARes) in 3DSecure Transaction",
            "status": "rejected"
        },
        "000.400.107": {
            "code": "000.400.107",
            "description": "Communication Error to Scheme Directory Server",
            "status": "rejected"
        },
        "000.400.108": {
            "code": "000.400.108",
            "description": "Cardholder Not Found - card number provided is not found in the ranges of the issuer",
            "status": "rejected"
        },
        "000.400.109": {
            "code": "000.400.109",
            "description": "Card is not enrolled for 3DS version 2",
            "status": "rejected"
        },
        "000.400.111": {
            "code": "000.400.111",
            "description": "Data Only request failed",
            "status": "rejected"
        },
        "000.400.200": {
            "code": "000.400.200",
            "description": "risk management check communication error",
            "status": "rejected"
        }
    },
    "rejectionsByTheExternalBank": {
        "800.100.100": {
            "code": "800.100.100",
            "description": "transaction declined for unknown reason",
            "status": "rejected"
        },
        "800.100.150": {
            "code": "800.100.150",
            "description": "transaction declined (refund on gambling tx not allowed)",
            "status": "rejected"
        },
        "800.100.151": {
            "code": "800.100.151",
            "description": "transaction declined (invalid card)",
            "status": "rejected"
        },
        "800.100.152": {
            "code": "800.100.152",
            "description": "transaction declined by authorization system",
            "status": "rejected"
        },
        "800.100.153": {
            "code": "800.100.153",
            "description": "transaction declined (invalid CVV)",
            "status": "rejected"
        },
        "800.100.154": {
            "code": "800.100.154",
            "description": "transaction declined (transaction marked as invalid)",
            "status": "rejected"
        },
        "800.100.155": {
            "code": "800.100.155",
            "description": "transaction declined (amount exceeds credit)",
            "status": "rejected"
        },
        "800.100.156": {
            "code": "800.100.156",
            "description": "transaction declined (format error)",
            "status": "rejected"
        },
        "800.100.157": {
            "code": "800.100.157",
            "description": "transaction declined (wrong expiry date)",
            "status": "rejected"
        },
        "800.100.158": {
            "code": "800.100.158",
            "description": "transaction declined (suspecting manipulation)",
            "status": "rejected"
        },
        "800.100.159": {
            "code": "800.100.159",
            "description": "transaction declined (stolen card)",
            "status": "rejected"
        },
        "800.100.160": {
            "code": "800.100.160",
            "description": "transaction declined (card blocked)",
            "status": "rejected"
        },
        "800.100.161": {
            "code": "800.100.161",
            "description": "transaction declined (too many invalid tries)",
            "status": "rejected"
        },
        "800.100.162": {
            "code": "800.100.162",
            "description": "transaction declined (limit exceeded)",
            "status": "rejected"
        },
        "800.100.163": {
            "code": "800.100.163",
            "description": "transaction declined (maximum transaction frequency exceeded)",
            "status": "rejected"
        },
        "800.100.164": {
            "code": "800.100.164",
            "description": "transaction declined (merchants limit exceeded)",
            "status": "rejected"
        },
        "800.100.165": {
            "code": "800.100.165",
            "description": "transaction declined (card lost)",
            "status": "rejected"
        },
        "800.100.166": {
            "code": "800.100.166",
            "description": "transaction declined (Incorrect personal identification number)",
            "status": "rejected"
        },
        "800.100.167": {
            "code": "800.100.167",
            "description": "transaction declined (referencing transaction does not match)",
            "status": "rejected"
        },
        "800.100.168": {
            "code": "800.100.168",
            "description": "transaction declined (restricted card)",
            "status": "rejected"
        },
        "800.100.169": {
            "code": "800.100.169",
            "description": "transaction declined (card type is not processed by the authorization center)",
            "status": "rejected"
        },
        "800.100.170": {
            "code": "800.100.170",
            "description": "transaction declined (transaction not permitted)",
            "status": "rejected"
        },
        "800.100.171": {
            "code": "800.100.171",
            "description": "transaction declined (pick up card)",
            "status": "rejected"
        },
        "800.100.172": {
            "code": "800.100.172",
            "description": "transaction declined (account blocked)",
            "status": "rejected"
        },
        "800.100.173": {
            "code": "800.100.173",
            "description": "transaction declined (invalid currency, not processed by authorization center)",
            "status": "rejected"
        },
        "800.100.174": {
            "code": "800.100.174",
            "description": "transaction declined (invalid amount)",
            "status": "rejected"
        },
        "800.100.175": {
            "code": "800.100.175",
            "description": "transaction declined (invalid brand)",
            "status": "rejected"
        },
        "800.100.176": {
            "code": "800.100.176",
            "description": "transaction declined (account temporarily not available. Please try again later)",
            "status": "rejected"
        },
        "800.100.177": {
            "code": "800.100.177",
            "description": "transaction declined (amount field should not be empty)",
            "status": "rejected"
        },
        "800.100.178": {
            "code": "800.100.178",
            "description": "transaction declined (PIN entered incorrectly too often)",
            "status": "rejected"
        },
        "800.100.179": {
            "code": "800.100.179",
            "description": "transaction declined (exceeds withdrawal count limit)",
            "status": "rejected"
        },
        "800.100.190": {
            "code": "800.100.190",
            "description": "transaction declined (invalid configuration data)",
            "status": "rejected"
        },
        "800.100.191": {
            "code": "800.100.191",
            "description": "transaction declined (transaction in wrong state on aquirer side)",
            "status": "rejected"
        },
        "800.100.192": {
            "code": "800.100.192",
            "description": "transaction declined (invalid CVV, Amount has still been reserved on the customer's card and will be released in a few business days. Please ensure the CVV code is accurate before retrying the transaction)",
            "status": "rejected"
        },
        "800.100.195": {
            "code": "800.100.195",
            "description": "transaction declined (UserAccount Number/ID unknown)",
            "status": "rejected"
        },
        "800.100.196": {
            "code": "800.100.196",
            "description": "transaction declined (registration error)",
            "status": "rejected"
        },
        "800.100.197": {
            "code": "800.100.197",
            "description": "transaction declined (registration cancelled externally)",
            "status": "rejected"
        },
        "800.100.198": {
            "code": "800.100.198",
            "description": "transaction declined (invalid holder)",
            "status": "rejected"
        },
        "800.100.199": {
            "code": "800.100.199",
            "description": "transaction declined (invalid tax number)",
            "status": "rejected"
        },
        "800.100.200": {
            "code": "800.100.200",
            "description": "Refer to Payer due to reason not specified",
            "status": "rejected"
        },
        "800.100.201": {
            "code": "800.100.201",
            "description": "Account or Bank Details Incorrect",
            "status": "rejected"
        },
        "800.100.202": {
            "code": "800.100.202",
            "description": "Account Closed",
            "status": "rejected"
        },
        "800.100.203": {
            "code": "800.100.203",
            "description": "Insufficient Funds",
            "status": "rejected"
        },
        "800.100.204": {
            "code": "800.100.204",
            "description": "Mandate Expired",
            "status": "rejected"
        },
        "800.100.205": {
            "code": "800.100.205",
            "description": "Mandate Discarded",
            "status": "rejected"
        },
        "800.100.206": {
            "code": "800.100.206",
            "description": "Refund of an authorized payment requested by the customer",
            "status": "rejected"
        },
        "800.100.207": {
            "code": "800.100.207",
            "description": "Refund requested",
            "status": "rejected"
        },
        "800.100.208": {
            "code": "800.100.208",
            "description": "Direct debit not enabled for the specified account or bank",
            "status": "rejected"
        },
        "800.100.402": {
            "code": "800.100.402",
            "description": "cc/bank account holder not valid",
            "status": "rejected"
        },
        "800.100.403": {
            "code": "800.100.403",
            "description": "transaction declined (revocation of authorisation order)",
            "status": "rejected"
        },
        "800.100.500": {
            "code": "800.100.500",
            "description": "Card holder has advised his bank to stop this recurring payment",
            "status": "rejected"
        },
        "800.100.501": {
            "code": "800.100.501",
            "description": "Card holder has advised his bank to stop all recurring payments for this merchant",
            "status": "rejected"
        },
        "800.700.100": {
            "code": "800.700.100",
            "description": "transaction for the same session is currently being processed, please try again later.",
            "status": "rejected"
        },
        "800.700.101": {
            "code": "800.700.101",
            "description": "family name too long",
            "status": "rejected"
        },
        "800.700.201": {
            "code": "800.700.201",
            "description": "given name too long",
            "status": "rejected"
        },
        "800.700.500": {
            "code": "800.700.500",
            "description": "company name too long",
            "status": "rejected"
        },
        "800.800.102": {
            "code": "800.800.102",
            "description": "Invalid street",
            "status": "rejected"
        },
        "800.800.202": {
            "code": "800.800.202",
            "description": "Invalid zip",
            "status": "rejected"
        },
        "800.800.302": {
            "code": "800.800.302",
            "description": "Invalid city",
            "status": "rejected"
        }
    },
    "rejectionsDueToCommunicationErrors": {
        "000.400.030": {
            "code": "000.400.030",
            "description": "Transaction partially failed (please reverse manually due to failed automatic reversal)",
            "status": "rejected"
        },
        "900.100.100": {
            "code": "900.100.100",
            "description": "unexpected communication error with connector/acquirer",
            "status": "rejected"
        },
        "900.100.200": {
            "code": "900.100.200",
            "description": "error response from connector/acquirer",
            "status": "rejected"
        },
        "900.100.201": {
            "code": "900.100.201",
            "description": "error on the external gateway (e.g. on the part of the bank, acquirer,...)",
            "status": "rejected"
        },
        "900.100.202": {
            "code": "900.100.202",
            "description": "invalid transaction flow, the requested function is not applicable for the referenced transaction.",
            "status": "rejected"
        },
        "900.100.203": {
            "code": "900.100.203",
            "description": "error on the internal gateway",
            "status": "rejected"
        },
        "900.100.204": {
            "code": "900.100.204",
            "description": "Error during message parsing",
            "status": "rejected"
        },
        "900.100.300": {
            "code": "900.100.300",
            "description": "timeout, uncertain result",
            "status": "rejected"
        },
        "900.100.301": {
            "code": "900.100.301",
            "description": "Transaction timed out without response from connector/acquirer. It was reversed.",
            "status": "rejected"
        },
        "900.100.310": {
            "code": "900.100.310",
            "description": "Transaction timed out due to internal system misconfiguration. Request to acquirer has not been sent.",
            "status": "rejected"
        },
        "900.100.400": {
            "code": "900.100.400",
            "description": "timeout at connectors/acquirer side",
            "status": "rejected"
        },
        "900.100.500": {
            "code": "900.100.500",
            "description": "timeout at connectors/acquirer side (try later)",
            "status": "rejected"
        },
        "900.100.600": {
            "code": "900.100.600",
            "description": "connector/acquirer currently down",
            "status": "rejected"
        },
        "900.100.700": {
            "code": "900.100.700",
            "description": "error on the external service provider",
            "status": "rejected"
        },
        "900.200.100": {
            "code": "900.200.100",
            "description": "Message Sequence Number of Connector out of sync",
            "status": "rejected"
        },
        "900.300.600": {
            "code": "900.300.600",
            "description": "user session timeout",
            "status": "rejected"
        },
        "900.400.100": {
            "code": "900.400.100",
            "description": "unexpected communication error with external risk provider",
            "status": "rejected"
        }
    },
    "rejectionsDueToSystemErrors": {
        "600.100.100": {
            "code": "600.100.100",
            "description": "Unexpected Integrator Error (Request could not be processed)",
            "status": "rejected"
        },
        "800.500.100": {
            "code": "800.500.100",
            "description": "direct debit transaction declined for unknown reason",
            "status": "rejected"
        },
        "800.500.110": {
            "code": "800.500.110",
            "description": "Unable to process transaction - ran out of terminalIds - please contact acquirer",
            "status": "rejected"
        },
        "800.600.100": {
            "code": "800.600.100",
            "description": "transaction is being already processed",
            "status": "rejected"
        },
        "800.800.400": {
            "code": "800.800.400",
            "description": "Connector/acquirer system is under maintenance",
            "status": "rejected"
        },
        "800.800.800": {
            "code": "800.800.800",
            "description": "The payment system is currenty unavailable, please contact support in case this happens again.",
            "status": "rejected"
        },
        "800.800.801": {
            "code": "800.800.801",
            "description": "The payment system is currenty unter maintenance. Please apologize for the inconvenience this may cause. If you were not informed of this maintenance window in advance, contact your sales representative.",
            "status": "rejected"
        },
        "999.999.888": {
            "code": "999.999.888",
            "description": "UNDEFINED PLATFORM DATABASE ERROR",
            "status": "rejected"
        },
        "999.999.999": {
            "code": "999.999.999",
            "description": "UNDEFINED CONNECTOR/ACQUIRER ERROR",
            "status": "rejected"
        }
    },
    "rejectionsDueToErrorInAsynchonousWorkflow": {
        "100.395.101": {
            "code": "100.395.101",
            "description": "Bank not supported for Giropay",
            "status": "rejected"
        },
        "100.395.102": {
            "code": "100.395.102",
            "description": "Account not enabled for Giropay e.g. test account",
            "status": "rejected"
        },
        "100.395.501": {
            "code": "100.395.501",
            "description": "Previously pending online transfer transaction timed out",
            "status": "rejected"
        },
        "100.395.502": {
            "code": "100.395.502",
            "description": "Acquirer/Bank reported timeout on online transfer transaction",
            "status": "rejected"
        },
        "100.396.101": {
            "code": "100.396.101",
            "description": "Cancelled by user",
            "status": "rejected"
        },
        "100.396.102": {
            "code": "100.396.102",
            "description": "Not confirmed by user",
            "status": "rejected"
        },
        "100.396.103": {
            "code": "100.396.103",
            "description": "Previously pending transaction timed out",
            "status": "rejected"
        },
        "100.396.104": {
            "code": "100.396.104",
            "description": "Uncertain status - probably cancelled by user",
            "status": "rejected"
        },
        "100.396.106": {
            "code": "100.396.106",
            "description": "User did not agree to payment method terms",
            "status": "rejected"
        },
        "100.396.201": {
            "code": "100.396.201",
            "description": "Cancelled by merchant",
            "status": "rejected"
        },
        "100.397.101": {
            "code": "100.397.101",
            "description": "Cancelled by user due to external update",
            "status": "rejected"
        },
        "100.397.102": {
            "code": "100.397.102",
            "description": "Rejected by connector/acquirer due to external update",
            "status": "rejected"
        }
    },
    "softDeclines": {
        "300.100.100": {
            "code": "300.100.100",
            "description": "Transaction declined (additional customer authentication required)",
            "status": "rejected"
        }
    },
    "rejectionsDueToChecksByExternalRiskSystems": {
        "100.370.100": {
            "code": "100.370.100",
            "description": "transaction declined",
            "status": "rejected"
        },
        "100.370.110": {
            "code": "100.370.110",
            "description": "transaction must be executed for German address",
            "status": "rejected"
        },
        "100.370.111": {
            "code": "100.370.111",
            "description": "system error( possible incorrect/missing input data)",
            "status": "rejected"
        },
        "100.380.100": {
            "code": "100.380.100",
            "description": "transaction declined",
            "status": "rejected"
        },
        "100.380.101": {
            "code": "100.380.101",
            "description": "transaction contains no risk management part",
            "status": "rejected"
        },
        "100.380.110": {
            "code": "100.380.110",
            "description": "transaction must be executed for German address",
            "status": "rejected"
        },
        "100.380.201": {
            "code": "100.380.201",
            "description": "no risk management process type specified",
            "status": "rejected"
        },
        "100.380.305": {
            "code": "100.380.305",
            "description": "no frontend information provided for asynchronous transaction",
            "status": "rejected"
        },
        "100.380.306": {
            "code": "100.380.306",
            "description": "no authentication data provided in risk management transaction",
            "status": "rejected"
        },
        "100.380.401": {
            "code": "100.380.401",
            "description": "User Authentication Failed",
            "status": "rejected"
        },
        "100.380.501": {
            "code": "100.380.501",
            "description": "risk management transaction timeout",
            "status": "rejected"
        },
        "100.400.000": {
            "code": "100.400.000",
            "description": "transaction declined (Wrong Address)",
            "status": "rejected"
        },
        "100.400.001": {
            "code": "100.400.001",
            "description": "transaction declined (Wrong Identification)",
            "status": "rejected"
        },
        "100.400.002": {
            "code": "100.400.002",
            "description": "transaction declined (Insufficient credibility score)",
            "status": "rejected"
        },
        "100.400.005": {
            "code": "100.400.005",
            "description": "transaction must be executed for German address",
            "status": "rejected"
        },
        "100.400.007": {
            "code": "100.400.007",
            "description": "System error ( possible incorrect/missing input data)",
            "status": "rejected"
        },
        "100.400.020": {
            "code": "100.400.020",
            "description": "transaction declined",
            "status": "rejected"
        },
        "100.400.021": {
            "code": "100.400.021",
            "description": "transaction declined for country",
            "status": "rejected"
        },
        "100.400.030": {
            "code": "100.400.030",
            "description": "transaction not authorized. Please check manually",
            "status": "rejected"
        },
        "100.400.039": {
            "code": "100.400.039",
            "description": "transaction declined for other error",
            "status": "rejected"
        },
        "100.400.040": {
            "code": "100.400.040",
            "description": "authorization failure",
            "status": "rejected"
        },
        "100.400.041": {
            "code": "100.400.041",
            "description": "transaction must be executed for German address",
            "status": "rejected"
        },
        "100.400.042": {
            "code": "100.400.042",
            "description": "transaction declined by SCHUFA (Insufficient credibility score)",
            "status": "rejected"
        },
        "100.400.043": {
            "code": "100.400.043",
            "description": "transaction declined because of missing obligatory parameter(s)",
            "status": "rejected"
        },
        "100.400.044": {
            "code": "100.400.044",
            "description": "transaction not authorized. Please check manually",
            "status": "rejected"
        },
        "100.400.045": {
            "code": "100.400.045",
            "description": "SCHUFA result not definite. Please check manually",
            "status": "rejected"
        },
        "100.400.051": {
            "code": "100.400.051",
            "description": "SCHUFA system error (possible incorrect/missing input data)",
            "status": "rejected"
        },
        "100.400.060": {
            "code": "100.400.060",
            "description": "authorization failure",
            "status": "rejected"
        },
        "100.400.061": {
            "code": "100.400.061",
            "description": "transaction declined (Insufficient credibility score)",
            "status": "rejected"
        },
        "100.400.063": {
            "code": "100.400.063",
            "description": "transaction declined because of missing obligatory parameter(s)",
            "status": "rejected"
        },
        "100.400.064": {
            "code": "100.400.064",
            "description": "transaction must be executed for Austrian, German or Swiss address",
            "status": "rejected"
        },
        "100.400.065": {
            "code": "100.400.065",
            "description": "result ambiguous. Please check manually",
            "status": "rejected"
        },
        "100.400.071": {
            "code": "100.400.071",
            "description": "system error (possible incorrect/missing input data)",
            "status": "rejected"
        },
        "100.400.080": {
            "code": "100.400.080",
            "description": "authorization failure",
            "status": "rejected"
        },
        "100.400.081": {
            "code": "100.400.081",
            "description": "transaction declined",
            "status": "rejected"
        },
        "100.400.083": {
            "code": "100.400.083",
            "description": "transaction declined because of missing obligatory parameter(s)",
            "status": "rejected"
        },
        "100.400.084": {
            "code": "100.400.084",
            "description": "transaction can not be executed for given country",
            "status": "rejected"
        },
        "100.400.085": {
            "code": "100.400.085",
            "description": "result ambiguous. Please check manually",
            "status": "rejected"
        },
        "100.400.086": {
            "code": "100.400.086",
            "description": "transaction declined (Wrong Address)",
            "status": "rejected"
        },
        "100.400.087": {
            "code": "100.400.087",
            "description": "transaction declined (Wrong Identification)",
            "status": "rejected"
        },
        "100.400.091": {
            "code": "100.400.091",
            "description": "system error (possible incorrect/missing input data)",
            "status": "rejected"
        },
        "100.400.100": {
            "code": "100.400.100",
            "description": "transaction declined - very bad rating",
            "status": "rejected"
        },
        "100.400.120": {
            "code": "100.400.120",
            "description": "authorization failure",
            "status": "rejected"
        },
        "100.400.121": {
            "code": "100.400.121",
            "description": "account blacklisted",
            "status": "rejected"
        },
        "100.400.122": {
            "code": "100.400.122",
            "description": "transaction must be executed for valid German account",
            "status": "rejected"
        },
        "100.400.123": {
            "code": "100.400.123",
            "description": "transaction declined because of missing obligatory parameter(s)",
            "status": "rejected"
        },
        "100.400.130": {
            "code": "100.400.130",
            "description": "system error (possible incorrect/missing input data)",
            "status": "rejected"
        },
        "100.400.139": {
            "code": "100.400.139",
            "description": "system error (possible incorrect/missing input data)",
            "status": "rejected"
        },
        "100.400.140": {
            "code": "100.400.140",
            "description": "transaction declined by GateKeeper",
            "status": "rejected"
        },
        "100.400.141": {
            "code": "100.400.141",
            "description": "Challenge by ReD Shield",
            "status": "rejected"
        },
        "100.400.142": {
            "code": "100.400.142",
            "description": "Deny by ReD Shield",
            "status": "rejected"
        },
        "100.400.143": {
            "code": "100.400.143",
            "description": "Noscore by ReD Shield",
            "status": "rejected"
        },
        "100.400.144": {
            "code": "100.400.144",
            "description": "ReD Shield data error",
            "status": "rejected"
        },
        "100.400.145": {
            "code": "100.400.145",
            "description": "ReD Shield connection error",
            "status": "rejected"
        },
        "100.400.146": {
            "code": "100.400.146",
            "description": "Line item error by ReD Shield",
            "status": "rejected"
        },
        "100.400.147": {
            "code": "100.400.147",
            "description": "Payment void and transaction denied by ReD Shield",
            "status": "rejected"
        },
        "100.400.148": {
            "code": "100.400.148",
            "description": "Payment void and transaction challenged by ReD Shield",
            "status": "rejected"
        },
        "100.400.149": {
            "code": "100.400.149",
            "description": "Payment void and data error by ReD Shield",
            "status": "rejected"
        },
        "100.400.150": {
            "code": "100.400.150",
            "description": "Payment void and connection error by ReD Shield",
            "status": "rejected"
        },
        "100.400.151": {
            "code": "100.400.151",
            "description": "Payment void and line item error by ReD Shield",
            "status": "rejected"
        },
        "100.400.152": {
            "code": "100.400.152",
            "description": "Payment void and error returned by ReD Shield",
            "status": "rejected"
        },
        "100.400.241": {
            "code": "100.400.241",
            "description": "Challenged by Threat Metrix",
            "status": "rejected"
        },
        "100.400.242": {
            "code": "100.400.242",
            "description": "Denied by Threat Metrix",
            "status": "rejected"
        },
        "100.400.243": {
            "code": "100.400.243",
            "description": "Invalid sessionId",
            "status": "rejected"
        },
        "100.400.260": {
            "code": "100.400.260",
            "description": "authorization failure",
            "status": "rejected"
        },
        "100.400.300": {
            "code": "100.400.300",
            "description": "abort checkout process",
            "status": "rejected"
        },
        "100.400.301": {
            "code": "100.400.301",
            "description": "reenter age/birthdate",
            "status": "rejected"
        },
        "100.400.302": {
            "code": "100.400.302",
            "description": "reenter address (packstation not allowed)",
            "status": "rejected"
        },
        "100.400.303": {
            "code": "100.400.303",
            "description": "reenter address",
            "status": "rejected"
        },
        "100.400.304": {
            "code": "100.400.304",
            "description": "invalid input data",
            "status": "rejected"
        },
        "100.400.305": {
            "code": "100.400.305",
            "description": "invalid foreign address",
            "status": "rejected"
        },
        "100.400.306": {
            "code": "100.400.306",
            "description": "delivery address error",
            "status": "rejected"
        },
        "100.400.307": {
            "code": "100.400.307",
            "description": "offer only secure methods of payment",
            "status": "rejected"
        },
        "100.400.308": {
            "code": "100.400.308",
            "description": "offer only secure methods of payment; possibly abort checkout",
            "status": "rejected"
        },
        "100.400.309": {
            "code": "100.400.309",
            "description": "confirm corrected address; if not confirmed, offer secure methods of payment only",
            "status": "rejected"
        },
        "100.400.310": {
            "code": "100.400.310",
            "description": "confirm bank account data; if not confirmed, offer secure methods of payment only",
            "status": "rejected"
        },
        "100.400.311": {
            "code": "100.400.311",
            "description": "transaction declined (format error)",
            "status": "rejected"
        },
        "100.400.312": {
            "code": "100.400.312",
            "description": "transaction declined (invalid configuration data)",
            "status": "rejected"
        },
        "100.400.313": {
            "code": "100.400.313",
            "description": "currency field is invalid or missing",
            "status": "rejected"
        },
        "100.400.314": {
            "code": "100.400.314",
            "description": "amount invalid or empty",
            "status": "rejected"
        },
        "100.400.315": {
            "code": "100.400.315",
            "description": "invalid or missing email address (probably invalid syntax)",
            "status": "rejected"
        },
        "100.400.316": {
            "code": "100.400.316",
            "description": "transaction declined (card missing)",
            "status": "rejected"
        },
        "100.400.317": {
            "code": "100.400.317",
            "description": "transaction declined (invalid card)",
            "status": "rejected"
        },
        "100.400.318": {
            "code": "100.400.318",
            "description": "invalid IP number",
            "status": "rejected"
        },
        "100.400.319": {
            "code": "100.400.319",
            "description": "transaction declined by risk system",
            "status": "rejected"
        },
        "100.400.320": {
            "code": "100.400.320",
            "description": "shopping cart data invalid or missing",
            "status": "rejected"
        },
        "100.400.321": {
            "code": "100.400.321",
            "description": "payment type invalid or missing",
            "status": "rejected"
        },
        "100.400.322": {
            "code": "100.400.322",
            "description": "encryption method invalid or missing",
            "status": "rejected"
        },
        "100.400.323": {
            "code": "100.400.323",
            "description": "certificate invalid or missing",
            "status": "rejected"
        },
        "100.400.324": {
            "code": "100.400.324",
            "description": "Error on the external risk system",
            "status": "rejected"
        },
        "100.400.325": {
            "code": "100.400.325",
            "description": "External risk system not available",
            "status": "rejected"
        },
        "100.400.326": {
            "code": "100.400.326",
            "description": "Risk bank account check unsuccessful",
            "status": "rejected"
        },
        "100.400.327": {
            "code": "100.400.327",
            "description": "Risk report unsuccessful",
            "status": "rejected"
        },
        "100.400.328": {
            "code": "100.400.328",
            "description": "Risk report unsuccessful (invalid data)",
            "status": "rejected"
        }
    },
    "rejectionsDueToAddressValidation": {
        "100.800.100": {
            "code": "100.800.100",
            "description": "request contains no street",
            "status": "rejected"
        },
        "100.800.101": {
            "code": "100.800.101",
            "description": "The combination of street1 and street2 must not exceed 201 characters.",
            "status": "rejected"
        },
        "100.800.102": {
            "code": "100.800.102",
            "description": "The combination of street1 and street2 must not contain only numbers.",
            "status": "rejected"
        },
        "100.800.200": {
            "code": "100.800.200",
            "description": "request contains no zip",
            "status": "rejected"
        },
        "100.800.201": {
            "code": "100.800.201",
            "description": "zip too long",
            "status": "rejected"
        },
        "100.800.202": {
            "code": "100.800.202",
            "description": "invalid zip",
            "status": "rejected"
        },
        "100.800.300": {
            "code": "100.800.300",
            "description": "request contains no city",
            "status": "rejected"
        },
        "100.800.301": {
            "code": "100.800.301",
            "description": "city too long",
            "status": "rejected"
        },
        "100.800.302": {
            "code": "100.800.302",
            "description": "invalid city",
            "status": "rejected"
        },
        "100.800.400": {
            "code": "100.800.400",
            "description": "invalid state/country combination",
            "status": "rejected"
        },
        "100.800.401": {
            "code": "100.800.401",
            "description": "state too long",
            "status": "rejected"
        },
        "100.800.500": {
            "code": "100.800.500",
            "description": "request contains no country",
            "status": "rejected"
        },
        "100.800.501": {
            "code": "100.800.501",
            "description": "invalid country",
            "status": "rejected"
        },
        "800.400.100": {
            "code": "800.400.100",
            "description": "AVS Check Failed",
            "status": "rejected"
        },
        "800.400.101": {
            "code": "800.400.101",
            "description": "Mismatch of AVS street value",
            "status": "rejected"
        },
        "800.400.102": {
            "code": "800.400.102",
            "description": "Mismatch of AVS street number",
            "status": "rejected"
        },
        "800.400.103": {
            "code": "800.400.103",
            "description": "Mismatch of AVS PO box value fatal",
            "status": "rejected"
        },
        "800.400.104": {
            "code": "800.400.104",
            "description": "Mismatch of AVS zip code value fatal",
            "status": "rejected"
        },
        "800.400.105": {
            "code": "800.400.105",
            "description": "Mismatch of AVS settings (AVSkip, AVIgnore, AVSRejectPolicy) value",
            "status": "rejected"
        },
        "800.400.110": {
            "code": "800.400.110",
            "description": "AVS Check Failed. Amount has still been reserved on the customer's card and will be released in a few business days. Please ensure the billing address is accurate before retrying the transaction.",
            "status": "rejected"
        },
        "800.400.150": {
            "code": "800.400.150",
            "description": "Implausible address data",
            "status": "rejected"
        },
        "800.400.151": {
            "code": "800.400.151",
            "description": "Implausible address state data",
            "status": "rejected"
        }
    },
    "rejectionsDueTo3Dsecure": {
        "100.390.101": {
            "code": "100.390.101",
            "description": "purchase amount/currency mismatch",
            "status": "rejected"
        },
        "100.390.102": {
            "code": "100.390.102",
            "description": "PARes Validation failed",
            "status": "rejected"
        },
        "100.390.103": {
            "code": "100.390.103",
            "description": "PARes Validation failed - problem with signature",
            "status": "rejected"
        },
        "100.390.104": {
            "code": "100.390.104",
            "description": "XID mismatch",
            "status": "rejected"
        },
        "100.390.105": {
            "code": "100.390.105",
            "description": "Transaction rejected because of technical error in 3DSecure system",
            "status": "rejected"
        },
        "100.390.106": {
            "code": "100.390.106",
            "description": "Transaction rejected because of error in 3DSecure configuration",
            "status": "rejected"
        },
        "100.390.107": {
            "code": "100.390.107",
            "description": "Transaction rejected because cardholder authentication unavailable",
            "status": "rejected"
        },
        "100.390.108": {
            "code": "100.390.108",
            "description": "Transaction rejected because merchant not participating in 3DSecure program",
            "status": "rejected"
        },
        "100.390.109": {
            "code": "100.390.109",
            "description": "Transaction rejected because of VISA status 'U' or AMEX status 'N' or 'U' in 3DSecure program",
            "status": "rejected"
        },
        "100.390.110": {
            "code": "100.390.110",
            "description": "Cardholder Not Found - card number provided is not found in the ranges of the issuer",
            "status": "rejected"
        },
        "100.390.111": {
            "code": "100.390.111",
            "description": "Communication Error to Scheme Directory Server",
            "status": "rejected"
        },
        "100.390.112": {
            "code": "100.390.112",
            "description": "Technical Error in 3D system",
            "status": "rejected"
        },
        "100.390.113": {
            "code": "100.390.113",
            "description": "Unsupported User Device - Authentication not possible",
            "status": "rejected"
        },
        "100.390.114": {
            "code": "100.390.114",
            "description": "Not authenticated because the issuer is rejecting authentication",
            "status": "rejected"
        },
        "100.390.115": {
            "code": "100.390.115",
            "description": "Authentication failed due to invalid message format",
            "status": "rejected"
        },
        "100.390.116": {
            "code": "100.390.116",
            "description": "Access denied to the authentication system",
            "status": "rejected"
        },
        "100.390.117": {
            "code": "100.390.117",
            "description": "Authentication failed due to invalid data fields",
            "status": "rejected"
        },
        "100.390.118": {
            "code": "100.390.118",
            "description": "Authentication failed due to suspected fraud",
            "status": "rejected"
        },
        "800.400.200": {
            "code": "800.400.200",
            "description": "Invalid Payer Authentication in 3DSecure transaction",
            "status": "rejected"
        }
    },
    "rejectionsDueToBlacklistValidation": {
        "100.100.701": {
            "code": "100.100.701",
            "description": "suspecting fraud, this card may not be processed",
            "status": "rejected"
        },
        "800.200.159": {
            "code": "800.200.159",
            "description": "account or user is blacklisted (card stolen)",
            "status": "rejected"
        },
        "800.200.160": {
            "code": "800.200.160",
            "description": "account or user is blacklisted (card blocked)",
            "status": "rejected"
        },
        "800.200.165": {
            "code": "800.200.165",
            "description": "account or user is blacklisted (card lost)",
            "status": "rejected"
        },
        "800.200.202": {
            "code": "800.200.202",
            "description": "account or user is blacklisted (account closed)",
            "status": "rejected"
        },
        "800.200.208": {
            "code": "800.200.208",
            "description": "account or user is blacklisted (account blocked)",
            "status": "rejected"
        },
        "800.200.220": {
            "code": "800.200.220",
            "description": "account or user is blacklisted (fraudulent transaction)",
            "status": "rejected"
        },
        "800.300.101": {
            "code": "800.300.101",
            "description": "account or user is blacklisted",
            "status": "rejected"
        },
        "800.300.102": {
            "code": "800.300.102",
            "description": "country blacklisted",
            "status": "rejected"
        },
        "800.300.200": {
            "code": "800.300.200",
            "description": "email is blacklisted",
            "status": "rejected"
        },
        "800.300.301": {
            "code": "800.300.301",
            "description": "ip blacklisted",
            "status": "rejected"
        },
        "800.300.302": {
            "code": "800.300.302",
            "description": "ip is anonymous proxy",
            "status": "rejected"
        },
        "800.300.401": {
            "code": "800.300.401",
            "description": "bin blacklisted",
            "status": "rejected"
        },
        "800.300.500": {
            "code": "800.300.500",
            "description": "transaction temporary blacklisted (too many tries invalid CVV)",
            "status": "rejected"
        },
        "800.300.501": {
            "code": "800.300.501",
            "description": "transaction temporary blacklisted (too many tries invalid expire date)",
            "status": "rejected"
        },
        "800.310.200": {
            "code": "800.310.200",
            "description": "Account closed",
            "status": "rejected"
        },
        "800.310.210": {
            "code": "800.310.210",
            "description": "Account not found",
            "status": "rejected"
        },
        "800.310.211": {
            "code": "800.310.211",
            "description": "Account not found (BIN/issuer not participating)",
            "status": "rejected"
        }
    },
    "rejectionsDueToRiskValidation": {
        "800.110.100": {
            "code": "800.110.100",
            "description": "duplicate transaction",
            "status": "rejected"
        },
        "800.120.100": {
            "code": "800.120.100",
            "description": "Rejected by Throttling.",
            "status": "rejected"
        },
        "800.120.101": {
            "code": "800.120.101",
            "description": "maximum number of transactions per account already exceeded",
            "status": "rejected"
        },
        "800.120.102": {
            "code": "800.120.102",
            "description": "maximum number of transactions per ip already exceeded",
            "status": "rejected"
        },
        "800.120.103": {
            "code": "800.120.103",
            "description": "maximum number of transactions per email already exceeded",
            "status": "rejected"
        },
        "800.120.200": {
            "code": "800.120.200",
            "description": "maximum total volume of transactions already exceeded",
            "status": "rejected"
        },
        "800.120.201": {
            "code": "800.120.201",
            "description": "maximum total volume of transactions per account already exceeded",
            "status": "rejected"
        },
        "800.120.202": {
            "code": "800.120.202",
            "description": "maximum total volume of transactions per ip already exceeded",
            "status": "rejected"
        },
        "800.120.203": {
            "code": "800.120.203",
            "description": "maximum total volume of transactions per email already exceeded",
            "status": "rejected"
        },
        "800.120.300": {
            "code": "800.120.300",
            "description": "chargeback rate per bin exceeded",
            "status": "rejected"
        },
        "800.120.401": {
            "code": "800.120.401",
            "description": "maximum number of transactions or total volume for configured MIDs or CIs exceeded",
            "status": "rejected"
        },
        "800.130.100": {
            "code": "800.130.100",
            "description": "Transaction with same TransactionId already exists",
            "status": "rejected"
        },
        "800.140.100": {
            "code": "800.140.100",
            "description": "maximum number of registrations per mobile number exceeded",
            "status": "rejected"
        },
        "800.140.101": {
            "code": "800.140.101",
            "description": "maximum number of registrations per email address exceeded",
            "status": "rejected"
        },
        "800.140.110": {
            "code": "800.140.110",
            "description": "maximum number of registrations of mobile per credit card number exceeded",
            "status": "rejected"
        },
        "800.140.111": {
            "code": "800.140.111",
            "description": "maximum number of registrations of credit card number per mobile exceeded",
            "status": "rejected"
        },
        "800.140.112": {
            "code": "800.140.112",
            "description": "maximum number of registrations of email per credit card number exceeded",
            "status": "rejected"
        },
        "800.140.113": {
            "code": "800.140.113",
            "description": "maximum number of registrations of credit card number per email exceeded",
            "status": "rejected"
        },
        "800.150.100": {
            "code": "800.150.100",
            "description": "Account Holder does not match Customer Name",
            "status": "rejected"
        },
        "800.160.100": {
            "code": "800.160.100",
            "description": "Invalid payment data for configured Shopper Dispatching Type",
            "status": "rejected"
        },
        "800.160.110": {
            "code": "800.160.110",
            "description": "Invalid payment data for configured Payment Dispatching Type",
            "status": "rejected"
        },
        "800.160.120": {
            "code": "800.160.120",
            "description": "Invalid payment data for configured Recurring Transaction Dispatching Type",
            "status": "rejected"
        },
        "800.160.130": {
            "code": "800.160.130",
            "description": "Invalid payment data for configured TicketSize Dispatching Type",
            "status": "rejected"
        }
    },
    "rejectionsDueToConfigurationValidation": {
        "500.100.201": {
            "code": "500.100.201",
            "description": "Channel/Merchant is disabled (no processing possible)",
            "status": "rejected"
        },
        "500.100.202": {
            "code": "500.100.202",
            "description": "Channel/Merchant is new (no processing possible yet)",
            "status": "rejected"
        },
        "500.100.203": {
            "code": "500.100.203",
            "description": "Channel/Merchant is closed (no processing possible)",
            "status": "rejected"
        },
        "500.100.301": {
            "code": "500.100.301",
            "description": "Merchant-Connector is disabled (no processing possible)",
            "status": "rejected"
        },
        "500.100.302": {
            "code": "500.100.302",
            "description": "Merchant-Connector is new (no processing possible yet)",
            "status": "rejected"
        },
        "500.100.303": {
            "code": "500.100.303",
            "description": "Merchant-Connector is closed (no processing possible)",
            "status": "rejected"
        },
        "500.100.304": {
            "code": "500.100.304",
            "description": "Merchant-Connector is disabled at gateway (no processing possible)",
            "status": "rejected"
        },
        "500.100.401": {
            "code": "500.100.401",
            "description": "Connector is unavailable (no processing possible)",
            "status": "rejected"
        },
        "500.100.402": {
            "code": "500.100.402",
            "description": "Connector is new (no processing possible yet)",
            "status": "rejected"
        },
        "500.100.403": {
            "code": "500.100.403",
            "description": "Connector is unavailable (no processing possible)",
            "status": "rejected"
        },
        "500.200.101": {
            "code": "500.200.101",
            "description": "No target account configured for DD transaction",
            "status": "rejected"
        },
        "600.200.100": {
            "code": "600.200.100",
            "description": "invalid Payment Method",
            "status": "rejected"
        },
        "600.200.200": {
            "code": "600.200.200",
            "description": "Unsupported Payment Method",
            "status": "rejected"
        },
        "600.200.201": {
            "code": "600.200.201",
            "description": "Channel/Merchant not configured for this payment method",
            "status": "rejected"
        },
        "600.200.202": {
            "code": "600.200.202",
            "description": "Channel/Merchant not configured for this payment type",
            "status": "rejected"
        },
        "600.200.300": {
            "code": "600.200.300",
            "description": "invalid Payment Type",
            "status": "rejected"
        },
        "600.200.310": {
            "code": "600.200.310",
            "description": "invalid Payment Type for given Payment Method",
            "status": "rejected"
        },
        "600.200.400": {
            "code": "600.200.400",
            "description": "Unsupported Payment Type",
            "status": "rejected"
        },
        "600.200.500": {
            "code": "600.200.500",
            "description": "Invalid payment data. You are not configured for this currency or sub type (country or brand)",
            "status": "rejected"
        },
        "600.200.501": {
            "code": "600.200.501",
            "description": "Invalid payment data for Recurring transaction. Merchant or transaction data has wrong recurring configuration.",
            "status": "rejected"
        },
        "600.200.600": {
            "code": "600.200.600",
            "description": "invalid payment code (type or method)",
            "status": "rejected"
        },
        "600.200.700": {
            "code": "600.200.700",
            "description": "invalid payment mode (you are not configured for the requested transaction mode)",
            "status": "rejected"
        },
        "600.200.800": {
            "code": "600.200.800",
            "description": "invalid brand for given payment method and payment mode (you are not configured for the requested transaction mode)",
            "status": "rejected"
        },
        "600.200.810": {
            "code": "600.200.810",
            "description": "invalid return code provided",
            "status": "rejected"
        },
        "600.300.101": {
            "code": "600.300.101",
            "description": "Merchant key not found",
            "status": "rejected"
        },
        "600.300.200": {
            "code": "600.300.200",
            "description": "merchant source IP address not whitelisted",
            "status": "rejected"
        },
        "600.300.210": {
            "code": "600.300.210",
            "description": "merchant notificationUrl not whitelisted",
            "status": "rejected"
        },
        "600.300.211": {
            "code": "600.300.211",
            "description": "shopperResultUrl not whitelisted",
            "status": "rejected"
        },
        "800.121.100": {
            "code": "800.121.100",
            "description": "Channel not configured for given source type. Please contact your account manager.",
            "status": "rejected"
        },
        "800.121.200": {
            "code": "800.121.200",
            "description": "Secure Query is not enabled for this entity. Please contact your account manager.",
            "status": "rejected"
        }
    },
    "rejectionsDueToRegistrationValidation": {
        "100.150.100": {
            "code": "100.150.100",
            "description": "request contains no Account data and no registration id",
            "status": "rejected"
        },
        "100.150.101": {
            "code": "100.150.101",
            "description": "invalid format for specified registration id (must be uuid format)",
            "status": "rejected"
        },
        "100.150.200": {
            "code": "100.150.200",
            "description": "registration does not exist",
            "status": "rejected"
        },
        "100.150.201": {
            "code": "100.150.201",
            "description": "registration is not confirmed yet",
            "status": "rejected"
        },
        "100.150.202": {
            "code": "100.150.202",
            "description": "registration is already deregistered",
            "status": "rejected"
        },
        "100.150.203": {
            "code": "100.150.203",
            "description": "registration is not valid, probably initially rejected",
            "status": "rejected"
        },
        "100.150.204": {
            "code": "100.150.204",
            "description": "account registration reference pointed to no registration transaction",
            "status": "rejected"
        },
        "100.150.205": {
            "code": "100.150.205",
            "description": "referenced registration does not contain an account",
            "status": "rejected"
        },
        "100.150.300": {
            "code": "100.150.300",
            "description": "payment only allowed with valid initial registration",
            "status": "rejected"
        },
        "100.350.100": {
            "code": "100.350.100",
            "description": "referenced session is REJECTED (no action possible).",
            "status": "rejected"
        },
        "100.350.101": {
            "code": "100.350.101",
            "description": "referenced session is CLOSED (no action possible)",
            "status": "rejected"
        },
        "100.350.200": {
            "code": "100.350.200",
            "description": "undefined session state",
            "status": "rejected"
        },
        "100.350.201": {
            "code": "100.350.201",
            "description": "referencing a registration through reference id is not applicable for this payment type",
            "status": "rejected"
        },
        "100.350.301": {
            "code": "100.350.301",
            "description": "confirmation (CF) must be registered (RG) first",
            "status": "rejected"
        },
        "100.350.302": {
            "code": "100.350.302",
            "description": "session already confirmed (CF)",
            "status": "rejected"
        },
        "100.350.303": {
            "code": "100.350.303",
            "description": "cannot deregister (DR) unregistered account and/or customer",
            "status": "rejected"
        },
        "100.350.310": {
            "code": "100.350.310",
            "description": "cannot confirm (CF) session via XML",
            "status": "rejected"
        },
        "100.350.311": {
            "code": "100.350.311",
            "description": "cannot confirm (CF) on a registration passthrough channel",
            "status": "rejected"
        },
        "100.350.312": {
            "code": "100.350.312",
            "description": "cannot do passthrough on non-internal connector",
            "status": "rejected"
        },
        "100.350.313": {
            "code": "100.350.313",
            "description": "registration of this type has to provide confirmation url",
            "status": "rejected"
        },
        "100.350.314": {
            "code": "100.350.314",
            "description": "customer could not be notified of pin to confirm registration (channel)",
            "status": "rejected"
        },
        "100.350.315": {
            "code": "100.350.315",
            "description": "customer could not be notified of pin to confirm registration (sending failed)",
            "status": "rejected"
        },
        "100.350.316": {
            "code": "100.350.316",
            "description": "cannot extend the token (TE) on unregistered account",
            "status": "rejected"
        },
        "100.350.400": {
            "code": "100.350.400",
            "description": "no or invalid PIN (email/SMS/MicroDeposit authentication) entered",
            "status": "rejected"
        },
        "100.350.500": {
            "code": "100.350.500",
            "description": "unable to obtain personal (virtual) account - most likely no more accounts available",
            "status": "rejected"
        },
        "100.350.601": {
            "code": "100.350.601",
            "description": "registration is not allowed to reference another transaction",
            "status": "rejected"
        },
        "100.350.602": {
            "code": "100.350.602",
            "description": "Registration is not allowed for recurring payment migration",
            "status": "rejected"
        }
    },
    "rejectionsDueToJobValidation": {
        "100.250.100": {
            "code": "100.250.100",
            "description": "job contains no execution information",
            "status": "rejected"
        },
        "100.250.105": {
            "code": "100.250.105",
            "description": "invalid or missing action type",
            "status": "rejected"
        },
        "100.250.106": {
            "code": "100.250.106",
            "description": "invalid or missing duration unit",
            "status": "rejected"
        },
        "100.250.107": {
            "code": "100.250.107",
            "description": "invalid or missing notice unit",
            "status": "rejected"
        },
        "100.250.110": {
            "code": "100.250.110",
            "description": "missing job execution",
            "status": "rejected"
        },
        "100.250.111": {
            "code": "100.250.111",
            "description": "missing job expression",
            "status": "rejected"
        },
        "100.250.120": {
            "code": "100.250.120",
            "description": "invalid execution parameters, combination does not conform to standard",
            "status": "rejected"
        },
        "100.250.121": {
            "code": "100.250.121",
            "description": "invalid execution parameters, hour must be between 0 and 23",
            "status": "rejected"
        },
        "100.250.122": {
            "code": "100.250.122",
            "description": "invalid execution parameters, minute and seconds must be between 0 and 59",
            "status": "rejected"
        },
        "100.250.123": {
            "code": "100.250.123",
            "description": "invalid execution parameters, Day of month must be between 1 and 31",
            "status": "rejected"
        },
        "100.250.124": {
            "code": "100.250.124",
            "description": "invalid execution parameters, month must be between 1 and 12",
            "status": "rejected"
        },
        "100.250.125": {
            "code": "100.250.125",
            "description": "invalid execution parameters, Day of week must be between 1 and 7",
            "status": "rejected"
        },
        "100.250.250": {
            "code": "100.250.250",
            "description": "Job tag missing",
            "status": "rejected"
        },
        "100.360.201": {
            "code": "100.360.201",
            "description": "unknown schedule type",
            "status": "rejected"
        },
        "100.360.300": {
            "code": "100.360.300",
            "description": "cannot schedule(SD) unscheduled job",
            "status": "rejected"
        },
        "100.360.303": {
            "code": "100.360.303",
            "description": "cannot deschedule(DS) unscheduled job",
            "status": "rejected"
        },
        "100.360.400": {
            "code": "100.360.400",
            "description": "schedule module not configured for LIVE transaction mode",
            "status": "rejected"
        }
    },
    "rejectionsDueToReferenceValidation": {
        "700.100.100": {
            "code": "700.100.100",
            "description": "reference id not existing",
            "status": "rejected"
        },
        "700.100.200": {
            "code": "700.100.200",
            "description": "non matching reference amount",
            "status": "rejected"
        },
        "700.100.300": {
            "code": "700.100.300",
            "description": "invalid amount (probably too large)",
            "status": "rejected"
        },
        "700.100.400": {
            "code": "700.100.400",
            "description": "referenced payment method does not match with requested payment method",
            "status": "rejected"
        },
        "700.100.500": {
            "code": "700.100.500",
            "description": "referenced payment currency does not match with requested payment currency",
            "status": "rejected"
        },
        "700.100.600": {
            "code": "700.100.600",
            "description": "referenced mode does not match with requested payment mode",
            "status": "rejected"
        },
        "700.100.700": {
            "code": "700.100.700",
            "description": "referenced transaction is of inappropriate type",
            "status": "rejected"
        },
        "700.100.701": {
            "code": "700.100.701",
            "description": "referenced a DB transaction without explicitly providing an account. Not allowed to used referenced account.",
            "status": "rejected"
        },
        "700.100.710": {
            "code": "700.100.710",
            "description": "cross-linkage of two transaction-trees",
            "status": "rejected"
        },
        "700.300.100": {
            "code": "700.300.100",
            "description": "referenced tx can not be refunded, captured or reversed (invalid type)",
            "status": "rejected"
        },
        "700.300.200": {
            "code": "700.300.200",
            "description": "referenced tx was rejected",
            "status": "rejected"
        },
        "700.300.300": {
            "code": "700.300.300",
            "description": "referenced tx can not be refunded, captured or reversed (already refunded, captured or reversed)",
            "status": "rejected"
        },
        "700.300.400": {
            "code": "700.300.400",
            "description": "referenced tx can not be captured (cut off time reached)",
            "status": "rejected"
        },
        "700.300.500": {
            "code": "700.300.500",
            "description": "chargeback error (multiple chargebacks)",
            "status": "rejected"
        },
        "700.300.600": {
            "code": "700.300.600",
            "description": "referenced tx can not be refunded or reversed (was chargebacked)",
            "status": "rejected"
        },
        "700.300.700": {
            "code": "700.300.700",
            "description": "referenced tx can not be reversed (reversal not possible anymore)",
            "status": "rejected"
        },
        "700.300.800": {
            "code": "700.300.800",
            "description": "referenced tx can not be voided",
            "status": "rejected"
        },
        "700.400.000": {
            "code": "700.400.000",
            "description": "serious workflow error (call support)",
            "status": "rejected"
        },
        "700.400.100": {
            "code": "700.400.100",
            "description": "cannot capture (PA value exceeded, PA reverted or invalid workflow?)",
            "status": "rejected"
        },
        "700.400.101": {
            "code": "700.400.101",
            "description": "cannot capture (Not supported by authorization system)",
            "status": "rejected"
        },
        "700.400.200": {
            "code": "700.400.200",
            "description": "cannot refund (refund volume exceeded or tx reversed or invalid workflow?)",
            "status": "rejected"
        },
        "700.400.300": {
            "code": "700.400.300",
            "description": "cannot reverse (already refunded|reversed, invalid workflow or amount exceeded)",
            "status": "rejected"
        },
        "700.400.400": {
            "code": "700.400.400",
            "description": "cannot chargeback (already chargebacked or invalid workflow?)",
            "status": "rejected"
        },
        "700.400.402": {
            "code": "700.400.402",
            "description": "chargeback can only be generated internally by the payment system",
            "status": "rejected"
        },
        "700.400.410": {
            "code": "700.400.410",
            "description": "cannot reversal chargeback (chargeback is already reversaled or invalid workflow?)",
            "status": "rejected"
        },
        "700.400.411": {
            "code": "700.400.411",
            "description": "cannot reverse chargeback or invalid workflow (second chargeback)",
            "status": "rejected"
        },
        "700.400.420": {
            "code": "700.400.420",
            "description": "cannot reversal chargeback (no chargeback existing or invalid workflow?)",
            "status": "rejected"
        },
        "700.400.510": {
            "code": "700.400.510",
            "description": "capture needs at least one successful transaction of type (PA)",
            "status": "rejected"
        },
        "700.400.520": {
            "code": "700.400.520",
            "description": "refund needs at least one successful transaction of type (CP or DB or RB or RC)",
            "status": "rejected"
        },
        "700.400.530": {
            "code": "700.400.530",
            "description": "reversal needs at least one successful transaction of type (CP or DB or RB or PA)",
            "status": "rejected"
        },
        "700.400.540": {
            "code": "700.400.540",
            "description": "reconceile needs at least one successful transaction of type (CP or DB or RB)",
            "status": "rejected"
        },
        "700.400.550": {
            "code": "700.400.550",
            "description": "chargeback needs at least one successful transaction of type (CP or DB or RB)",
            "status": "rejected"
        },
        "700.400.560": {
            "code": "700.400.560",
            "description": "receipt needs at least one successful transaction of type (PA or CP or DB or RB)",
            "status": "rejected"
        },
        "700.400.561": {
            "code": "700.400.561",
            "description": "receipt on a registration needs a successfull registration in state 'OPEN'",
            "status": "rejected"
        },
        "700.400.562": {
            "code": "700.400.562",
            "description": "receipts are configured to be generated only internally by the payment system",
            "status": "rejected"
        },
        "700.400.565": {
            "code": "700.400.565",
            "description": "finalize needs at least one successful transaction of type (PA or DB)",
            "status": "rejected"
        },
        "700.400.570": {
            "code": "700.400.570",
            "description": "cannot reference a waiting/pending transaction",
            "status": "rejected"
        },
        "700.400.580": {
            "code": "700.400.580",
            "description": "cannot find transaction",
            "status": "rejected"
        },
        "700.400.590": {
            "code": "700.400.590",
            "description": "installment needs at least one successful transaction of type (DB or PA)",
            "status": "rejected"
        },
        "700.400.600": {
            "code": "700.400.600",
            "description": "finalize needs at least one successful transaction of type (IN, DB, PA or CD)",
            "status": "rejected"
        },
        "700.400.700": {
            "code": "700.400.700",
            "description": "initial and referencing channel-ids do not match",
            "status": "rejected"
        },
        "700.450.001": {
            "code": "700.450.001",
            "description": "cannot transfer money from one account to the same account",
            "status": "rejected"
        },
        "700.500.001": {
            "code": "700.500.001",
            "description": "referenced session contains too many transactions",
            "status": "rejected"
        },
        "700.500.002": {
            "code": "700.500.002",
            "description": "capture or preauthorization appears too late in referenced session",
            "status": "rejected"
        },
        "700.500.003": {
            "code": "700.500.003",
            "description": "test accounts not allowed in production",
            "status": "rejected"
        },
        "700.500.004": {
            "code": "700.500.004",
            "description": "cannot refer a transaction which contains deleted customer information",
            "status": "rejected"
        }
    },
    "rejectionsDueToFormatValidation": {
        "100.300.101": {
            "code": "100.300.101",
            "description": "invalid test mode (please use LIVE or INTEGRATOR_TEST or CONNECTOR_TEST)",
            "status": "rejected"
        },
        "100.300.200": {
            "code": "100.300.200",
            "description": "transaction id too long",
            "status": "rejected"
        },
        "100.300.300": {
            "code": "100.300.300",
            "description": "invalid reference id",
            "status": "rejected"
        },
        "100.300.400": {
            "code": "100.300.400",
            "description": "missing or invalid channel id",
            "status": "rejected"
        },
        "100.300.401": {
            "code": "100.300.401",
            "description": "missing or invalid sender id",
            "status": "rejected"
        },
        "100.300.402": {
            "code": "100.300.402",
            "description": "missing or invalid version",
            "status": "rejected"
        },
        "100.300.501": {
            "code": "100.300.501",
            "description": "invalid response id",
            "status": "rejected"
        },
        "100.300.600": {
            "code": "100.300.600",
            "description": "invalid or missing user login",
            "status": "rejected"
        },
        "100.300.601": {
            "code": "100.300.601",
            "description": "invalid or missing user pwd",
            "status": "rejected"
        },
        "100.300.700": {
            "code": "100.300.700",
            "description": "invalid relevance",
            "status": "rejected"
        },
        "100.300.701": {
            "code": "100.300.701",
            "description": "invalid relevance for given payment type",
            "status": "rejected"
        },
        "100.370.101": {
            "code": "100.370.101",
            "description": "responseUrl not set in Transaction/Frontend",
            "status": "rejected"
        },
        "100.370.102": {
            "code": "100.370.102",
            "description": "malformed responseUrl in Transaction/Frontend",
            "status": "rejected"
        },
        "100.370.121": {
            "code": "100.370.121",
            "description": "no or unknown ECI Type defined in Authentication",
            "status": "rejected"
        },
        "100.370.122": {
            "code": "100.370.122",
            "description": "parameter with null key provided in 3DSecure Authentication",
            "status": "rejected"
        },
        "100.370.123": {
            "code": "100.370.123",
            "description": "no or unknown verification type defined in 3DSecure Authentication",
            "status": "rejected"
        },
        "100.370.124": {
            "code": "100.370.124",
            "description": "unknown parameter key in 3DSecure Authentication",
            "status": "rejected"
        },
        "100.370.125": {
            "code": "100.370.125",
            "description": "Invalid 3DSecure Verification_ID. Must have Base64 encoding a Length of 28 digits",
            "status": "rejected"
        },
        "100.370.131": {
            "code": "100.370.131",
            "description": "no or unknown authentication type defined in Transaction/Authentication@type",
            "status": "rejected"
        },
        "100.370.132": {
            "code": "100.370.132",
            "description": "no result indicator defined Transaction/Authentication/resultIndicator",
            "status": "rejected"
        },
        "100.500.101": {
            "code": "100.500.101",
            "description": "payment method invalid",
            "status": "rejected"
        },
        "100.500.201": {
            "code": "100.500.201",
            "description": "payment type invalid",
            "status": "rejected"
        },
        "100.500.301": {
            "code": "100.500.301",
            "description": "invalid due date",
            "status": "rejected"
        },
        "100.500.302": {
            "code": "100.500.302",
            "description": "invalid mandate date of signature",
            "status": "rejected"
        },
        "100.500.303": {
            "code": "100.500.303",
            "description": "invalid mandate id",
            "status": "rejected"
        },
        "100.500.304": {
            "code": "100.500.304",
            "description": "invalid mandate external id",
            "status": "rejected"
        },
        "100.600.500": {
            "code": "100.600.500",
            "description": "usage field too long",
            "status": "rejected"
        },
        "100.900.500": {
            "code": "100.900.500",
            "description": "invalid recurrence mode",
            "status": "rejected"
        },
        "200.100.101": {
            "code": "200.100.101",
            "description": "invalid Request Message. No valid XML. XML must be url-encoded! maybe it contains a not encoded ampersand or something similar.",
            "status": "rejected"
        },
        "200.100.102": {
            "code": "200.100.102",
            "description": "invalid Request. XML load missing (XML string must be sent within parameter 'load')",
            "status": "rejected"
        },
        "200.100.103": {
            "code": "200.100.103",
            "description": "invalid Request Message. The request contains structural errors",
            "status": "rejected"
        },
        "200.100.150": {
            "code": "200.100.150",
            "description": "transaction of multirequest not processed because of subsequent problems",
            "status": "rejected"
        },
        "200.100.151": {
            "code": "200.100.151",
            "description": "multi-request is allowed with a maximum of 10 transactions only",
            "status": "rejected"
        },
        "200.100.199": {
            "code": "200.100.199",
            "description": "Wrong Web Interface / URL used. Please check out the Tech Quick Start Doc Chapter 3.",
            "status": "rejected"
        },
        "200.100.201": {
            "code": "200.100.201",
            "description": "invalid Request/Transaction tag (not present or [partially] empty)",
            "status": "rejected"
        },
        "200.100.300": {
            "code": "200.100.300",
            "description": "invalid Request/Transaction/Payment tag (no or invalid code specified)",
            "status": "rejected"
        },
        "200.100.301": {
            "code": "200.100.301",
            "description": "invalid Request/Transaction/Payment tag (not present or [partially] empty)",
            "status": "rejected"
        },
        "200.100.302": {
            "code": "200.100.302",
            "description": "invalid Request/Transaction/Payment/Presentation tag (not present or [partially] empty)",
            "status": "rejected"
        },
        "200.100.401": {
            "code": "200.100.401",
            "description": "invalid Request/Transaction/Account tag (not present or [partially] empty)",
            "status": "rejected"
        },
        "200.100.402": {
            "code": "200.100.402",
            "description": "invalid Request/Transaction/Account(Customer, Relevance) tag (one of Account/Customer/Relevance must be present)",
            "status": "rejected"
        },
        "200.100.403": {
            "code": "200.100.403",
            "description": "invalid Request/Transaction/Analysis tag (Criterions must have a name and value)",
            "status": "rejected"
        },
        "200.100.404": {
            "code": "200.100.404",
            "description": "invalid Request/Transaction/Account (must not be present)",
            "status": "rejected"
        },
        "200.100.501": {
            "code": "200.100.501",
            "description": "invalid or missing customer",
            "status": "rejected"
        },
        "200.100.502": {
            "code": "200.100.502",
            "description": "invalid Request/Transaction/Customer/Name tag (not present or [partially] empty)",
            "status": "rejected"
        },
        "200.100.503": {
            "code": "200.100.503",
            "description": "invalid Request/Transaction/Customer/Contact tag (not present or [partially] empty)",
            "status": "rejected"
        },
        "200.100.504": {
            "code": "200.100.504",
            "description": "invalid Request/Transaction/Customer/Address tag (not present or [partially] empty)",
            "status": "rejected"
        },
        "200.100.601": {
            "code": "200.100.601",
            "description": "invalid Request/Transaction/(ApplePay|GooglePay) tag (not present or [partially] empty)",
            "status": "rejected"
        },
        "200.100.602": {
            "code": "200.100.602",
            "description": "invalid Request/Transaction/(ApplePay|GooglePay)/PaymentToken tag (not present or [partially] empty)",
            "status": "rejected"
        },
        "200.100.603": {
            "code": "200.100.603",
            "description": "invalid Request/Transaction/(ApplePay|GooglePay)/PaymentToken tag (decryption error)",
            "status": "rejected"
        },
        "200.200.106": {
            "code": "200.200.106",
            "description": "duplicate transaction. Please verify that the UUID is unique",
            "status": "rejected"
        },
        "200.300.403": {
            "code": "200.300.403",
            "description": "Invalid HTTP method",
            "status": "rejected"
        },
        "200.300.404": {
            "code": "200.300.404",
            "description": "invalid or missing parameter",
            "status": "rejected"
        },
        "200.300.405": {
            "code": "200.300.405",
            "description": "Duplicate entity",
            "status": "rejected"
        },
        "200.300.406": {
            "code": "200.300.406",
            "description": "Entity not found",
            "status": "rejected"
        },
        "200.300.407": {
            "code": "200.300.407",
            "description": "Entity not specific enough",
            "status": "rejected"
        },
        "800.900.100": {
            "code": "800.900.100",
            "description": "sender authorization failed ",
            "status": "rejected"
        },
        "800.900.101": {
            "code": "800.900.101",
            "description": "invalid email address (probably invalid syntax)",
            "status": "rejected"
        },
        "800.900.200": {
            "code": "800.900.200",
            "description": "invalid phone number (has to start with a digit or a '+', at least 7 and max 25 chars long)",
            "status": "rejected"
        },
        "800.900.201": {
            "code": "800.900.201",
            "description": "unknown channel",
            "status": "rejected"
        },
        "800.900.300": {
            "code": "800.900.300",
            "description": "invalid authentication information",
            "status": "rejected"
        },
        "800.900.301": {
            "code": "800.900.301",
            "description": "user authorization failed, user has no sufficient rights to process transaction",
            "status": "rejected"
        },
        "800.900.302": {
            "code": "800.900.302",
            "description": "Authorization failed",
            "status": "rejected"
        },
        "800.900.303": {
            "code": "800.900.303",
            "description": "No token created",
            "status": "rejected"
        },
        "800.900.399": {
            "code": "800.900.399",
            "description": "Secure Registration Problem",
            "status": "rejected"
        },
        "800.900.401": {
            "code": "800.900.401",
            "description": "Invalid IP number",
            "status": "rejected"
        },
        "800.900.450": {
            "code": "800.900.450",
            "description": "Invalid birthdate",
            "status": "rejected"
        }
    },
    "rejectionsDueToContactValidation": {
        "100.700.100": {
            "code": "100.700.100",
            "description": "customer.surname may not be null",
            "status": "rejected"
        },
        "100.700.101": {
            "code": "100.700.101",
            "description": "customer.surname length must be between 0 and 50",
            "status": "rejected"
        },
        "100.700.200": {
            "code": "100.700.200",
            "description": "customer.givenName may not be null",
            "status": "rejected"
        },
        "100.700.201": {
            "code": "100.700.201",
            "description": "customer.givenName length must be between 0 and 50",
            "status": "rejected"
        },
        "100.700.300": {
            "code": "100.700.300",
            "description": "invalid salutation",
            "status": "rejected"
        },
        "100.700.400": {
            "code": "100.700.400",
            "description": "invalid title",
            "status": "rejected"
        },
        "100.700.500": {
            "code": "100.700.500",
            "description": "company name too long",
            "status": "rejected"
        },
        "100.700.800": {
            "code": "100.700.800",
            "description": "identity contains no or invalid 'paper'",
            "status": "rejected"
        },
        "100.700.801": {
            "code": "100.700.801",
            "description": "identity contains no or invalid identification value",
            "status": "rejected"
        },
        "100.700.802": {
            "code": "100.700.802",
            "description": "identification value too long",
            "status": "rejected"
        },
        "100.700.810": {
            "code": "100.700.810",
            "description": "specify at least one identity",
            "status": "rejected"
        },
        "100.900.100": {
            "code": "100.900.100",
            "description": "request contains no email address",
            "status": "rejected"
        },
        "100.900.101": {
            "code": "100.900.101",
            "description": "invalid email address (probably invalid syntax)",
            "status": "rejected"
        },
        "100.900.105": {
            "code": "100.900.105",
            "description": "email address too long (max 50 chars)",
            "status": "rejected"
        },
        "100.900.200": {
            "code": "100.900.200",
            "description": "invalid phone number (has to start with a digit or a '+', at least 7 and max 25 chars long)",
            "status": "rejected"
        },
        "100.900.300": {
            "code": "100.900.300",
            "description": "invalid mobile phone number (has to start with a digit or a '+', at least 7 and max 25 chars long)",
            "status": "rejected"
        },
        "100.900.301": {
            "code": "100.900.301",
            "description": "mobile phone number mandatory",
            "status": "rejected"
        },
        "100.900.400": {
            "code": "100.900.400",
            "description": "request contains no ip number",
            "status": "rejected"
        },
        "100.900.401": {
            "code": "100.900.401",
            "description": "invalid ip number",
            "status": "rejected"
        },
        "100.900.450": {
            "code": "100.900.450",
            "description": "invalid birthdate",
            "status": "rejected"
        }
    },
    "rejectionsDueToAccountValidation": {
        "100.100.100": {
            "code": "100.100.100",
            "description": "request contains no creditcard, bank account number or bank name",
            "status": "rejected"
        },
        "100.100.101": {
            "code": "100.100.101",
            "description": "invalid creditcard, bank account number or bank name",
            "status": "rejected"
        },
        "100.100.104": {
            "code": "100.100.104",
            "description": "invalid unique id / root unique id",
            "status": "rejected"
        },
        "100.100.200": {
            "code": "100.100.200",
            "description": "request contains no month",
            "status": "rejected"
        },
        "100.100.201": {
            "code": "100.100.201",
            "description": "invalid month",
            "status": "rejected"
        },
        "100.100.300": {
            "code": "100.100.300",
            "description": "request contains no year",
            "status": "rejected"
        },
        "100.100.301": {
            "code": "100.100.301",
            "description": "invalid year",
            "status": "rejected"
        },
        "100.100.303": {
            "code": "100.100.303",
            "description": "card expired",
            "status": "rejected"
        },
        "100.100.304": {
            "code": "100.100.304",
            "description": "card not yet valid",
            "status": "rejected"
        },
        "100.100.305": {
            "code": "100.100.305",
            "description": "invalid expiration date format",
            "status": "rejected"
        },
        "100.100.400": {
            "code": "100.100.400",
            "description": "request contains no cc/bank account holder",
            "status": "rejected"
        },
        "100.100.401": {
            "code": "100.100.401",
            "description": "cc/bank account holder too short or too long",
            "status": "rejected"
        },
        "100.100.402": {
            "code": "100.100.402",
            "description": "cc/bank account holder not valid",
            "status": "rejected"
        },
        "100.100.500": {
            "code": "100.100.500",
            "description": "request contains no credit card brand",
            "status": "rejected"
        },
        "100.100.501": {
            "code": "100.100.501",
            "description": "invalid credit card brand",
            "status": "rejected"
        },
        "100.100.600": {
            "code": "100.100.600",
            "description": "empty CVV for VISA,MASTER, AMEX not allowed",
            "status": "rejected"
        },
        "100.100.601": {
            "code": "100.100.601",
            "description": "invalid CVV/brand combination",
            "status": "rejected"
        },
        "100.100.650": {
            "code": "100.100.650",
            "description": "empty CreditCardIssueNumber for MAESTRO not allowed",
            "status": "rejected"
        },
        "100.100.651": {
            "code": "100.100.651",
            "description": "invalid CreditCardIssueNumber",
            "status": "rejected"
        },
        "100.100.700": {
            "code": "100.100.700",
            "description": "invalid cc number/brand combination",
            "status": "rejected"
        },
        "100.200.100": {
            "code": "100.200.100",
            "description": "bank account contains no or invalid country",
            "status": "rejected"
        },
        "100.200.103": {
            "code": "100.200.103",
            "description": "bank account has invalid bankcode/name account number combination",
            "status": "rejected"
        },
        "100.200.104": {
            "code": "100.200.104",
            "description": "bank account has invalid acccount number format",
            "status": "rejected"
        },
        "100.200.200": {
            "code": "100.200.200",
            "description": "bank account needs to be registered and confirmed first. Country is mandate based.",
            "status": "rejected"
        },
        "100.210.101": {
            "code": "100.210.101",
            "description": "virtual account contains no or invalid Id",
            "status": "rejected"
        },
        "100.210.102": {
            "code": "100.210.102",
            "description": "virtual account contains no or invalid brand",
            "status": "rejected"
        },
        "100.211.101": {
            "code": "100.211.101",
            "description": "user account contains no or invalid Id",
            "status": "rejected"
        },
        "100.211.102": {
            "code": "100.211.102",
            "description": "user account contains no or invalid brand",
            "status": "rejected"
        },
        "100.211.103": {
            "code": "100.211.103",
            "description": "no password defined for user account",
            "status": "rejected"
        },
        "100.211.104": {
            "code": "100.211.104",
            "description": "password does not meet safety requirements (needs 8 digits at least and must contain letters and numbers)",
            "status": "rejected"
        },
        "100.211.105": {
            "code": "100.211.105",
            "description": "wallet id has to be a valid email address",
            "status": "rejected"
        },
        "100.211.106": {
            "code": "100.211.106",
            "description": "voucher ids have 32 digits always",
            "status": "rejected"
        },
        "100.212.101": {
            "code": "100.212.101",
            "description": "wallet account registration must not have an initial balance",
            "status": "rejected"
        },
        "100.212.102": {
            "code": "100.212.102",
            "description": "wallet account contains no or invalid brand",
            "status": "rejected"
        },
        "100.212.103": {
            "code": "100.212.103",
            "description": "wallet account payment transaction needs to reference a registration",
            "status": "rejected"
        }
    },
    "rejectionsDueToAmountValidation": {
        "100.550.300": {
            "code": "100.550.300",
            "description": "request contains no amount or too low amount",
            "status": "rejected"
        },
        "100.550.301": {
            "code": "100.550.301",
            "description": "amount too large",
            "status": "rejected"
        },
        "100.550.303": {
            "code": "100.550.303",
            "description": "amount format invalid (only two decimals allowed).",
            "status": "rejected"
        },
        "100.550.310": {
            "code": "100.550.310",
            "description": "amount exceeds limit for the registered account.",
            "status": "rejected"
        },
        "100.550.311": {
            "code": "100.550.311",
            "description": "exceeding account balance",
            "status": "rejected"
        },
        "100.550.312": {
            "code": "100.550.312",
            "description": "Amount is outside allowed ticket size boundaries",
            "status": "rejected"
        },
        "100.550.400": {
            "code": "100.550.400",
            "description": "request contains no currency",
            "status": "rejected"
        },
        "100.550.401": {
            "code": "100.550.401",
            "description": "invalid currency",
            "status": "rejected"
        },
        "100.550.601": {
            "code": "100.550.601",
            "description": "risk amount too large",
            "status": "rejected"
        },
        "100.550.603": {
            "code": "100.550.603",
            "description": "risk amount format invalid (only two decimals allowed)",
            "status": "rejected"
        },
        "100.550.605": {
            "code": "100.550.605",
            "description": "risk amount is smaller than amount (it must be equal or bigger then amount)",
            "status": "rejected"
        },
        "100.550.701": {
            "code": "100.550.701",
            "description": "amounts not matched",
            "status": "rejected"
        },
        "100.550.702": {
            "code": "100.550.702",
            "description": "currencies not matched",
            "status": "rejected"
        }
    },
    "rejectionsDueToRiskManagement": {},
    "chargebackRelatedResultCodes": {
        "000.100.200": {
            "code": "000.100.200",
            "description": "Reason not Specified",
            "status": "Chargeback"
        },
        "000.100.201": {
            "code": "000.100.201",
            "description": "Account or Bank Details Incorrect",
            "status": "Chargeback"
        },
        "000.100.202": {
            "code": "000.100.202",
            "description": "Account Closed",
            "status": "Chargeback"
        },
        "000.100.203": {
            "code": "000.100.203",
            "description": "Insufficient Funds",
            "status": "Chargeback"
        },
        "000.100.204": {
            "code": "000.100.204",
            "description": "Mandate not Valid",
            "status": "Chargeback"
        },
        "000.100.205": {
            "code": "000.100.205",
            "description": "Mandate Cancelled",
            "status": "Chargeback"
        },
        "000.100.206": {
            "code": "000.100.206",
            "description": "Revocation or Dispute",
            "status": "Chargeback"
        },
        "000.100.207": {
            "code": "000.100.207",
            "description": "Cancellation in Clearing Network",
            "status": "Chargeback"
        },
        "000.100.208": {
            "code": "000.100.208",
            "description": "Account Blocked",
            "status": "Chargeback"
        },
        "000.100.209": {
            "code": "000.100.209",
            "description": "Account does not exist",
            "status": "Chargeback"
        },
        "000.100.210": {
            "code": "000.100.210",
            "description": "Invalid Amount",
            "status": "Chargeback"
        },
        "000.100.211": {
            "code": "000.100.211",
            "description": "Transaction succeeded (amount of transaction is smaller then amount of pre-authorization)",
            "status": "Chargeback"
        },
        "000.100.212": {
            "code": "000.100.212",
            "description": "Transaction succeeded (amount of transaction is greater then amount of pre-authorization)",
            "status": "Chargeback"
        },
        "000.100.220": {
            "code": "000.100.220",
            "description": "Fraudulent Transaction",
            "status": "Chargeback"
        },
        "000.100.221": {
            "code": "000.100.221",
            "description": "Merchandise Not Received",
            "status": "Chargeback"
        },
        "000.100.222": {
            "code": "000.100.222",
            "description": "Transaction Not Recognized By Cardholder",
            "status": "Chargeback"
        },
        "000.100.223": {
            "code": "000.100.223",
            "description": "Service Not Rendered",
            "status": "Chargeback"
        },
        "000.100.224": {
            "code": "000.100.224",
            "description": "Duplicate Processing",
            "status": "Chargeback"
        },
        "000.100.225": {
            "code": "000.100.225",
            "description": "Credit Not Processed",
            "status": "Chargeback"
        },
        "000.100.226": {
            "code": "000.100.226",
            "description": "Cannot be settled",
            "status": "Chargeback"
        },
        "000.100.227": {
            "code": "000.100.227",
            "description": "Configuration Issue",
            "status": "Chargeback"
        },
        "000.100.228": {
            "code": "000.100.228",
            "description": "Temporary Communication Error - Retry",
            "status": "Chargeback"
        },
        "000.100.229": {
            "code": "000.100.229",
            "description": "Incorrect Instructions",
            "status": "Chargeback"
        },
        "000.100.230": {
            "code": "000.100.230",
            "description": "Unauthorised Charge",
            "status": "Chargeback"
        },
        "000.100.231": {
            "code": "000.100.231",
            "description": "Late Representment",
            "status": "Chargeback"
        },
        "000.100.232": {
            "code": "000.100.232",
            "description": "Liability Shift",
            "status": "Chargeback"
        },
        "000.100.233": {
            "code": "000.100.233",
            "description": "Authorization-Related Chargeback",
            "status": "Chargeback"
        },
        "000.100.234": {
            "code": "000.100.234",
            "description": "Non receipt of merchandise",
            "status": "Chargeback"
        },
        "000.100.299": {
            "code": "000.100.299",
            "description": "Unspecified (Technical)",
            "status": "Chargeback"
        }
    }
}