if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,r)=>{const o=s||("document"in self?document.currentScript.src:"")||location.href;if(e[o])return;let i={};const u=s=>l(s,o),a={module:{uri:o},exports:i,require:u};e[o]=Promise.all(n.map((s=>a[s]||u(s)))).then((s=>(r(...s),i)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"3e29db1d0fa987280b5462012b99746a"},{url:"assets/Action2Icon.b66bd408.js",revision:null},{url:"assets/Ammo21Icon.71470cd5.js",revision:null},{url:"assets/Ammo7Icon.5cd8cbc3.js",revision:null},{url:"assets/AmmoBoxIcon.dade1b67.js",revision:null},{url:"assets/AmmoD6Icon.2cdf4af1.js",revision:null},{url:"assets/AmmoIcon.d5ecc835.js",revision:null},{url:"assets/AmmoReturnsIcon.f7c10095.js",revision:null},{url:"assets/ArmourReRollIcon.da3413b0.js",revision:null},{url:"assets/ArtifactIcon.febb6eec.js",revision:null},{url:"assets/AutoCloseHitIcon.a27497b0.js",revision:null},{url:"assets/BackpackAllIcon.a63b2e3d.js",revision:null},{url:"assets/BackpackNanoIcon.2120ba31.js",revision:null},{url:"assets/BaseIcon.vue_vue_type_script_setup_true_lang.753cbfea.js",revision:null},{url:"assets/BeltIcon.91cd7f57.js",revision:null},{url:"assets/Blast2Icon.ce88f057.js",revision:null},{url:"assets/BlueArmourIcon.1b783727.js",revision:null},{url:"assets/BlueArmourRegenIcon.83735706.js",revision:null},{url:"assets/BombIcon.1b30c1df.js",revision:null},{url:"assets/BoomerangIcon.b14ff26b.js",revision:null},{url:"assets/BreachIcon.f14ace12.js",revision:null},{url:"assets/Burst1Icon.7bb5046c.js",revision:null},{url:"assets/Burst2Icon.f9fed042.js",revision:null},{url:"assets/BurstIcon.cecac1f3.js",revision:null},{url:"assets/CannotReloadIcon.ac3f6b51.js",revision:null},{url:"assets/CloseIcon.43fda8cc.js",revision:null},{url:"assets/CuffsIcon.e3f5ebb5.js",revision:null},{url:"assets/DangerousIcon.5c625a30.js",revision:null},{url:"assets/DataIcon.c0971c4c.js",revision:null},{url:"assets/DeflectIcon.1b9a2c27.js",revision:null},{url:"assets/DiscardIcon.6a8a9aaa.js",revision:null},{url:"assets/DysonIcon.d791101c.js",revision:null},{url:"assets/DysonRangeIcon.6930d5f9.js",revision:null},{url:"assets/DysonThrowIcon.1962bb02.js",revision:null},{url:"assets/EffortlessArmourIcon.8f7b1375.js",revision:null},{url:"assets/EffortlessIcon.3adc1088.js",revision:null},{url:"assets/EffortlessReloadIcon.393caecc.js",revision:null},{url:"assets/EventIcon.dca1441d.js",revision:null},{url:"assets/ExplodeIcon.e9956b78.js",revision:null},{url:"assets/FadeToBlack3Icon.6c3def22.js",revision:null},{url:"assets/FearIcon.0985de62.js",revision:null},{url:"assets/FfIcon.cd8e6113.js",revision:null},{url:"assets/FireIcon.8ad2e750.js",revision:null},{url:"assets/FlashIcon.0d09f941.js",revision:null},{url:"assets/FlipIcon.05d2193e.js",revision:null},{url:"assets/FreeCloseIcon.fae41c90.js",revision:null},{url:"assets/FreezeIcon.d844b927.js",revision:null},{url:"assets/FuelIcon.6f98f98e.js",revision:null},{url:"assets/FullChargeIcon.d6325a46.js",revision:null},{url:"assets/GearIcon.8878d69c.js",revision:null},{url:"assets/GrappleIcon.5b050aea.js",revision:null},{url:"assets/GrenadeIcon.9b9015d9.js",revision:null},{url:"assets/GrenadeLauncherIcon.0a8ddb19.js",revision:null},{url:"assets/Heal2Icon.9d517e6a.js",revision:null},{url:"assets/HeavyIcon.e8556441.js",revision:null},{url:"assets/HoverIcon.280822b1.js",revision:null},{url:"assets/IgnoreArmourIcon.6c94217a.js",revision:null},{url:"assets/IgnoreKnowledgeIcon.c421587b.js",revision:null},{url:"assets/IgnoreShieldIcon.7013db34.js",revision:null},{url:"assets/Impervious1Icon.55374378.js",revision:null},{url:"assets/index.ceb07f34.js",revision:null},{url:"assets/InfiniteIcon.f2209f1e.js",revision:null},{url:"assets/InfraLensIcon.5fc0c8a3.js",revision:null},{url:"assets/InterruptIcon.65fe71a9.js",revision:null},{url:"assets/JamIcon.3ff57b75.js",revision:null},{url:"assets/KeyIcon.2ff205c4.js",revision:null},{url:"assets/main.51ef2d8c.css",revision:null},{url:"assets/main.7a6e3466.js",revision:null},{url:"assets/Manipulate3Icon.f2b59cdc.js",revision:null},{url:"assets/MechIcon.a107a2f9.js",revision:null},{url:"assets/MineIcon.1b767602.js",revision:null},{url:"assets/MissionKeyIcon.f0ce9525.js",revision:null},{url:"assets/MoveIcon.fbe35fb4.js",revision:null},{url:"assets/NaIcon.cc9cda34.js",revision:null},{url:"assets/NecroFlaskIcon.0e16193c.js",revision:null},{url:"assets/notFound.2f02226c.js",revision:null},{url:"assets/ObjectiveIcon.2aeddb37.js",revision:null},{url:"assets/PairsIcon.4081c741.js",revision:null},{url:"assets/PhaseIcon.f38d5ff2.js",revision:null},{url:"assets/PhysicalArmourIcon.6ae6c1da.js",revision:null},{url:"assets/RangeIcon.9c82c741.js",revision:null},{url:"assets/RareIcon.0db21031.js",revision:null},{url:"assets/ReliableIcon.59bcb90e.js",revision:null},{url:"assets/Repair2Icon.aee8a94c.js",revision:null},{url:"assets/RepairIcon.e8452402.js",revision:null},{url:"assets/ReRollIcon.ecbbd8ff.js",revision:null},{url:"assets/ReRollRangedIcon.1b89e965.js",revision:null},{url:"assets/ScatterIcon.c3c1953f.js",revision:null},{url:"assets/ScrambleIcon.e5827494.js",revision:null},{url:"assets/ScytheIcon.05ed337f.js",revision:null},{url:"assets/SearchIcon.4f365ebe.js",revision:null},{url:"assets/SettingsPage.54c02af2.css",revision:null},{url:"assets/SettingsPage.9f13cfb4.js",revision:null},{url:"assets/ShieldArmourIcon.c6a190ce.js",revision:null},{url:"assets/SilentIcon.b8a2373b.js",revision:null},{url:"assets/SpecialArmourIcon.f0cc84da.js",revision:null},{url:"assets/StimCombatIcon.420b48a3.js",revision:null},{url:"assets/StimHealIcon.5318726f.js",revision:null},{url:"assets/StimHealPlusIcon.8512b45b.js",revision:null},{url:"assets/StimSkillIcon.c20509df.js",revision:null},{url:"assets/StimSkillPlusIcon.0404973d.js",revision:null},{url:"assets/StunIcon.71375f20.js",revision:null},{url:"assets/SuperAmmoIcon.79bf22af.js",revision:null},{url:"assets/SuperReliableIcon.f1213d79.js",revision:null},{url:"assets/SupplyDropIcon.90f8405d.js",revision:null},{url:"assets/SustainedFireIcon.103bdd9f.js",revision:null},{url:"assets/SwapIcon.ea2cc608.js",revision:null},{url:"assets/TargetLockIcon.4118d319.js",revision:null},{url:"assets/TempArmourIcon.219fceda.js",revision:null},{url:"assets/ThrowIcon.2118882a.js",revision:null},{url:"assets/TimePulseIcon.594275bd.js",revision:null},{url:"assets/TimewarpIcon.44691dd5.js",revision:null},{url:"assets/TokenDetails.12d968cb.js",revision:null},{url:"assets/TokenDetails.7f8c2a0f.css",revision:null},{url:"assets/TokenPage.2456ea3e.css",revision:null},{url:"assets/TokenPage.246e8ad7.js",revision:null},{url:"assets/TokensPage.1d1bb833.js",revision:null},{url:"assets/TokensPage.962e5d4f.css",revision:null},{url:"assets/ToxicIcon.ad7d79a6.js",revision:null},{url:"assets/TripleChargeIcon.6525377a.js",revision:null},{url:"assets/TrophyIcon.376485a1.js",revision:null},{url:"assets/TrueBornIcon.d19b9263.js",revision:null},{url:"assets/WeaponMountIcon.783ffe29.js",revision:null},{url:"index.html",revision:"3e29db1d0fa987280b5462012b99746a"},{url:"registerSW.js",revision:"3ac8fe5223dad1361b1a0ed876f53751"},{url:"favicon.ico",revision:"4570d517380ed45ead51e67d31601dcd"},{url:"apple-touch-icon.png",revision:"85cc02e5f0d0b2381ee5817608149ea6"},{url:"logo.svg",revision:"9e476a498687c54cf96ff2ddb276d894"},{url:"pwa-192x192.png",revision:"9cb3c5e6cc2a2e206670ce5191cfaba2"},{url:"pwa-512x512.png",revision:"71b2cb0b8f9464d2c90f62797fee9ca7"},{url:"manifest.webmanifest",revision:"edac96dc497f4993f0e43d4634fd4a48"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
