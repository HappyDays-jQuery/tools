<script>
  export default {
    methods: {
      debug(msg) {
        if (process.env.MIX_DEBUG) {
          // eslint-disable-next-line no-console
          console.log(msg)
        }
      }
    }
  }
</script>
