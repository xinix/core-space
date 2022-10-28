import { computed } from 'vue'
import { useTokens } from '@/stores/tokens'
import { useProducts } from '@/stores/products'

export function useCoreSpaceTokens() {
    const tokens = useTokens()
    const products = useProducts()

    if (tokens.changed) {
        tokens.load(products.active).then()
    }

    const qSummary = computed(() =>
        tokens.q.length > 0
            ? `Search results for: <strong>${tokens.q}</strong>`
            : ''
    )

    const containerClass = computed(() => ({
        'with-q': tokens.q !== '',
    }))

    const onClear = (ev: MouseEvent) => {
        tokens.q = ''
        return ev
    }

    const items = computed(() => tokens.items)
    const loading = computed(() => tokens.loading)
    return { loading, items, qSummary, containerClass, onClear }
}
