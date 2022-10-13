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
import RepairIcon from '@/components/icons/RepairIcon.vue'
import EventIcon from '@/components/icons/EventIcon.vue'
import SilentIcon from '@/components/icons/SilentIcon.vue'
import InfiniteIcon from '@/components/icons/InfiniteIcon.vue'
import MineIcon from '@/components/icons/MineIcon.vue'
import ShieldArmourIcon from '@/components/icons/ShieldArmourIcon.vue'
import MechIcon from '@/components/icons/MechIcon.vue'
import Burst1Icon from '@/components/icons/Burst1Icon.vue'
import Burst2Icon from '@/components/icons/Burst2Icon.vue'
import FullChargeIcon from '@/components/icons/FullChargeIcon.vue'
import HeavyIcon from '@/components/icons/HeavyIcon.vue'

export function loadGlobalComponents(app: App) {
    app.component('HeavyIcon', HeavyIcon)
    app.component('FullChargeIcon', FullChargeIcon)
    app.component('Burst2Icon', Burst2Icon)
    app.component('Burst1Icon', Burst1Icon)
    app.component('MechIcon', MechIcon)
    app.component('ShieldArmourIcon', ShieldArmourIcon)
    app.component('MineIcon', MineIcon)
    app.component('InfiniteIcon', InfiniteIcon)
    app.component('SilentIcon', SilentIcon)
    app.component('EventIcon', EventIcon)
    app.component('RepairIcon', RepairIcon)
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
