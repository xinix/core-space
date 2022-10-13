import { App } from 'vue'

import RareIcon from '@/components/icons/RareIcon.vue'
import EffortlessIcon from '@/components/icons/EffortlessIcon.vue'
import ScatterIcon from '@/components/icons/ScatterIcon.vue'
import FlipIcon from '@/components/icons/FlipIcon.vue'
import DiscardIcon from '@/components/icons/DiscardIcon.vue'
import PhysicalArmourIcon from '@/components/icons/PhysicalArmourIcon.vue'
import PhaseIcon from '@/components/icons/PhaseIcon.vue'
import ReRollIcon from '@/components/icons/ReRollIcon.vue'
import CloseIcon from '@/components/icons/CloseIcon.vue'
import ThrowIcon from '@/components/icons/ThrowIcon.vue'
import GrenadeIcon from '@/components/icons/GrenadeIcon.vue'
import DysonIcon from '@/components/icons/DysonIcon.vue'
import DysonThrowIcon from '@/components/icons/DysonThrowIcon.vue'
import DysonRangeIcon from '@/components/icons/DysonRangeIcon.vue'
import RangeIcon from '@/components/icons/RangeIcon.vue'
import BoomerangIcon from '@/components/icons/BoomerangIcon.vue'

export function loadGlobalComponents(app: App) {
    app.component('BoomerangIcon', BoomerangIcon)
    app.component('RangeIcon', RangeIcon)
    app.component('DysonRangeIcon', DysonRangeIcon)
    app.component('DysonThrowIcon', DysonThrowIcon)
    app.component('DysonIcon', DysonIcon)
    app.component('GrenadeIcon', GrenadeIcon)
    app.component('ThrowIcon', ThrowIcon)
    app.component('CloseIcon', CloseIcon)
    app.component('ReRollIcon', ReRollIcon)
    app.component('PhaseIcon', PhaseIcon)
    app.component('PhysicalArmourIcon', PhysicalArmourIcon)
    app.component('DiscardIcon', DiscardIcon)
    app.component('FlipIcon', FlipIcon)
    app.component('ScatterIcon', ScatterIcon)
    app.component('EffortlessIcon', EffortlessIcon)
    app.component('RareIcon', RareIcon)
}
