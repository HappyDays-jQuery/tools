<template>
  <div class="decode">
    <h1>Decode</h1>
    <v-textarea
      v-model="input"
      auto-grow
      clearable
      counter
      filled
      label="Input text"
      persistent-hint="persistentHint"
      placeholder="デコードしたい文字列を入力してください。"
      rounded
      row-height="40"
      rows="4"
      shaped
    ></v-textarea>

    <v-btn class="ma-2" x-large color="indigo" v-on:click="decodeBase64" outlined>Decode Base64</v-btn>
    <v-btn class="ma-2" x-large color="teal" outlined>Decode URL</v-btn>
    <v-btn class="ma-2" x-large color="success" outlined>unicode unescape</v-btn>

    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title>サンプル</v-list-item-title>
        <v-list-item-subtitle>
          <b>[base64]</b> YWJjZGVmZw==
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          <b>[URL Encode]</b> %E3%82%B5%E3%83%B3%E3%83%97%E3%83%AB
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          <b>[unicode]</b> \u30b5\u30f3\u30d7\u30eb
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-textarea
      v-model="result"
      auto-grow
      clearable
      counter
      filled
      label="Decoded Result"
      rounded
      row-height="40"
      rows="4"
      shaped
    ></v-textarea>

    <info-text/>
  </div>
</template>

<script>
  export default {

    name: 'Decode',

    components: {},

    data: () => ({
      input: '',
      result: '',
    }),

    props: [],

    created() {
      this.debug('Decode Component created.')
      this.initialize()
    },

    mounted() {
      this.debug('Decode Component mounted.')
    },

    methods: {
      initialize: function () {
        this.input = ''
        this.result = ''
      },
      checkBase64: function (str) {
        return str.match(/^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/)
      },
      decodeBase64: function () {
        if(this.input === '') {
          this.result = "入力してください。"
          return
        }

        let val = this.input
        let valss = val.replace(/-/g, '+').replace(/_/g, '/').replace(/\./g, '')

        if (!this.checkBase64(valss)) {
          this.result = "変換できませんでした。入力されたデータがBase64でない可能性があります。"
          return
        }
        this.result = decodeURIComponent(escape(atob(valss)))
      }
    },

  }
</script>
