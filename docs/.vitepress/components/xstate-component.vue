<template>
  <div>
    <button @click="send('TOGGLE')">Click me</button>
    {{ state.matches('active') }}
  </div>
</template>

<script>
import { Machine } from 'xstate'
import { useMachine } from '@xstate/vue'

const machine = Machine({
  id: 'toggle',
  initial: 'inactive',
  states: {
    inactive: {
      on: { TOGGLE: 'active' }
    },
    active: {
      on: { TOGGLE: 'inactive' }
    }
  }
})

export default {
  name: 'Test',

  setup () {
    const { state, send } = useMachine(machine)

    return {
      state,
      send,
    }
  },
}
</script>
