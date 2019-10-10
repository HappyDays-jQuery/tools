<script>
  export default {
    methods: {
      debug(msg) {
        if (process.env.VUE_APP_DEBUG) {
          // eslint-disable-next-line no-console
          console.log(msg)
        }
      }
    }
  }
</script>
