import {
    groups
} from './groups';
import type {
    PaymentStatusType,
} from '../../lib/typescript/PaymentStatus'
import {
    PaymentStatus
} from './paymentStatus'

export const getPaymentStatus = (code: string): PaymentStatusType => {
    const selectedGroup = groups.find((group) => group.reg.test(code))
    if (selectedGroup)
        return PaymentStatus[selectedGroup.group][code]
    else
        return {
            code,
            description: "This status code is invalid",
            status: "error"
        }
}
