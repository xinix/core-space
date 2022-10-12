import { App } from 'vue'

import RareIcon from '@/components/icons/RareIcon.vue'
import EffortlessIcon from '@/components/icons/EffortlessIcon.vue'
import ScatterIcon from '@/components/icons/ScatterIcon.vue'
import FlipIcon from '@/components/icons/FlipIcon.vue'
import DiscardIcon from '@/components/icons/DiscardIcon.vue'
import PhysicalArmourIcon from '@/components/icons/PhysicalArmourIcon.vue'

export function loadGlobalComponents(app: App) {
    app.component('PhysicalArmourIcon', PhysicalArmourIcon)
    app.component('DiscardIcon', DiscardIcon)
    app.component('FlipIcon', FlipIcon)
    app.component('ScatterIcon', ScatterIcon)
    app.component('EffortlessIcon', EffortlessIcon)
    app.component('RareIcon', RareIcon)
}
