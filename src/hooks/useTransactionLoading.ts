import { useEffect, useState } from 'react';
import { eventEmitter } from '../utils';

let isCalledTransactionLoading: boolean = false

export function useTransactionLoading() {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        if (!isCalledTransactionLoading) {
            const _event = eventEmitter.addListener('onProgress', (isLoading: boolean) => {
                setLoading(isLoading)
                if (!isLoading) _event.remove(); isCalledTransactionLoading = false
            })
            isCalledTransactionLoading = true
        }
    }, [isCalledTransactionLoading])
    return loading
}




