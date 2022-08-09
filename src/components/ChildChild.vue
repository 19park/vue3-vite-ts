<template>
    <h2>{{provideValue}}..</h2>
</template>
<script type="ts">
import { inject } from 'vue'

export default {
    setup() {
        
        const provideValue = inject("message")

        return {
            provideValue,
        }
    },
}
</script>