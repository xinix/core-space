<script lang="ts" setup>

import { computed, ref } from 'vue'
import { useTokens } from '@/stores/tokens'
import { onMounted } from 'vue'
import TokenDetails from '@/components/tokens/TokenDetails.vue'


const showDetails = ref(false)



    


const tokens = useTokens()  

const qSummary = computed(
    () => `Search results for: <strong>${tokens.q}</strong>`
)

const onClear = (ev: MouseEvent) => {
    tokens.q = ''
    return ev
}

//create new instance of tokens called tokens1
const tokens1 = useTokens();
const tokens2 = useTokens();
const tokens3 = useTokens();
const tokens4 = useTokens();
const tokens5 = useTokens();

const latestsavestateID = ref(0);

const toggleShowDetails = () => {
    if (showDetails.value === true) {
        showDetails.value = false;
    } else {
        showDetails.value = true;
    }
//write showdetails to console
    console.log(`showDetails: ${showDetails.value}`);

}


const saveState = (savestateID: number) => {
    localStorage.setItem(`tokens${savestateID}`, JSON.stringify(tokens.$state));
    latestsavestateID.value = savestateID;

    console.log(`State saved with ID ${savestateID}:`, `tokens${savestateID}`.$state);
};



const restoreState = (savestateID: number) => {
    const savedState = localStorage.getItem(`tokens${savestateID}`);
    if (savedState) {
        //set the state of productstore using savedState
        tokens.$state = JSON.parse(savedState);
        latestsavestateID.value = savestateID;

// set the vlaue of the serachinput element to the value of the q property
        // @ts-ignore   
        document.getElementById("q").value = tokens.$state.q;
        



        console.log(`State restored with ID ${savestateID}:`, tokens.$state);
    }
};

const activeCharacter = computed(() => {
    if (latestsavestateID.value === 1) {
        return "Cassie";
    } else if (latestsavestateID.value === 2) {
        return "Balcor";
    }
    else if (latestsavestateID.value === 3) {
        return "Wade";
    }
    else if (latestsavestateID.value === 4) {
        return "Hopper";
    }
    else if (latestsavestateID.value === 5) {
        return "Ship";
    }
     else {
        return "None";
    }
});


</script>

<template>
  
  <button class="buy-me-a-coffee" @click="toggleShowDetails">Details View</button>

    <h1>Active Character: {{ activeCharacter }}</h1>
    <div class="state-buttons,buy-me-a-coffee">
         <button class="buy-me-a-coffee" @click="saveState(1)">Save Cassie</button>
        <!-- Insert 8 spaces -->
        &nbsp;&nbsp;
         <button class="buy-me-a-coffee" @click="restoreState(1)">Restore Cassie</button>
         &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;  
        <button class="buy-me-a-coffee" @click="saveState(2)">Save Balcor</button>
        &nbsp;&nbsp;
        <button class="buy-me-a-coffee" @click="restoreState(2)">Restore Balcor</button>
        &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
         <button class="buy-me-a-coffee" @click="saveState(3)">Save Wade</button>
        
        &nbsp;&nbsp;
         <button class="buy-me-a-coffee" @click="restoreState(3)">Restore Wade</button>
         &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
        <button class="buy-me-a-coffee" @click="saveState(4)">Save Hopper</button>
        &nbsp;&nbsp;
        <button class="buy-me-a-coffee" @click="restoreState(4)">Restore Hopper</button>
        &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
        <button class="buy-me-a-coffee" @click="saveState(5)">Save Ship</button>
        &nbsp;&nbsp;
        <button class="buy-me-a-coffee" @click="restoreState(5)">Restore Ship</button>
    </div>        
  
    <section v-if="!showDetails" class="container">
        <p v-if="tokens.q" class="summary">
            <span v-html="qSummary" />
            <button class="btn-link" type="button" @click="onClear">
                {{ $t('clear_filter') }}
            </button>
        </p>

        <p v-if="tokens.items.length === 0" class="empty">
            <em>🥹</em>
            <br />
            <br />
            {{ $t('no_result') }}
        </p>

        <div :class="{ 'with-q': tokens.q !== '' }" class="tokens">
            <TokenDetails
                v-for="item in tokens.items"
                :key="item.key"
                :item="item"
                class="item"
            />
        </div>
    </section>

    <section v-if="showDetails" class="container" >
hello
        <main  class="details">
            <TokenDetails v-for="item in tokens.items" :key="item.key" :item="item" />
        </main>
    </section>


   
</template>
                 
    


<style lang="scss" scoped>

.details {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.container {
    padding-bottom: 50vh;
}

.tokens {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    &.with-q {
        justify-content: center;
    }
}

.empty {
    font-size: 1.5em;
    line-height: 1.4;
    max-width: 600px;
    margin: 0 auto;
    padding: 1em;
    text-align: center;

    em {
        font-size: 3em;
        font-style: normal;
    }
}

.summary {
    margin: 1em;
    text-align: center;
}

/* transition: list */
/* moving */
.list-move {
    transition: all 600ms ease-in-out 50ms;
}

/* appearing */
.list-enter-active {
    transition: all 300ms ease-out;
}

/* disappearing */
.list-leave-active {
    position: absolute;
    z-index: 0;
    transition: all 200ms ease-in;
}

/* appear at / disappear to */
.list-enter,
.list-leave-to {
    opacity: 0;
}

.buy-me-a-coffee {
        font-weight: bold;
        display: inline-flex;
        align-items: center;
        margin: 1em 0;
        padding: 0.5em 1.5em;
        transition: all 0.2s ease-in;
        text-decoration: none;
        color: black;
        border-radius: 2em;
        background-color: white;
        box-shadow: var(--shadow-md);
        gap: 0.75em;
}

</style>
