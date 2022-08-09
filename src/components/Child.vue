<template>
    <ChildChild />
    <h3>buffer test 8 : {{uint8Array}}</h3>
    <h3>buffer test 16 : {{uint16Array}}</h3>
    <h3>buffer test 32: {{uint32Array}}</h3>
    <h3>uint8Array ref : {{testRef[0]}}</h3>
    <button @click="doPlus">plus buffer[0] value</button>

    <h3>number test : {{numRef}}</h3>
    <button @click="doPlusNum">plus number value</button>
</template>
<script setup type="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import ChildChild from './ChildChild.vue'
import eventBus from '../eventBus'

    onMounted(() => {
        eventBus.on('foo', e => {
            console.log("foo foo..?")

            setTimeout(() => {
                console.log("foo foo..")
            }, 3000)
        })
    })
    onUnmounted(() => {
        eventBus.off('foo')
    })

    // 16Byte의 ArrayBuffer(바이너리 데이터) 생성
    const arrayBuffer = new ArrayBuffer(16); 
    // 1byte(8bit)의 unsinged int 배열 생성
    const uint8Array = new Uint8Array(arrayBuffer); 
    // 2byte(16bit)의 unsinged int 배열 생성
    const uint16Array = new Uint16Array(arrayBuffer);
    // 4byte(32bit)의 unsinged int 배열 생성
    const uint32Array = new Uint32Array(arrayBuffer);

    const testRef = ref(uint8Array)
    const compRef = computed(() => testRef.value[0])

    const numRef = ref(0)

    const doPlus = () => {
    testRef.value[0] = testRef.value[0] + 11
    }
    const doPlusNum = () => {
    numRef.value++
    }
</script>