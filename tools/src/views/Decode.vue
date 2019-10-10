<template>
  <div class="decoder">
    <h1>Decoder</h1>
    <v-form
      ref="form"
      v-model="valid"
    >
      <v-textarea
        v-model="input"
        auto-grow
        clearable
        counter
        filled
        label="Input text"
        placeholder="デコードしたい文字列を入力してください。"
        rounded
        row-height="40"
        rows="4"
        shaped
        :rules="inputRules"
        required
      ></v-textarea>

      <v-btn class="ma-2" x-large color="indigo" v-on:click="decodeBase64" :disabled="!valid" outlined>
        Decode Base64
      </v-btn>
      <v-btn class="ma-2" x-large color="teal" v-on:click="decodeUrlEncode" :disabled="!valid" outlined>
        Decode URL
      </v-btn>
      <v-btn class="ma-2" x-large color="success" v-on:click="unescapeUnicode" :disabled="!valid" outlined>
        unicode unescape
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset">
        Reset Form
      </v-btn>

      <v-btn color="warning" @click="resetValidation">
        Reset Validation
      </v-btn>

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
    </v-form>

    <info-text/>
  </div>
</template>

<script>
  export default {

    name: 'Decode',

    components: {},

    data: () => ({
      valid: true,
      input: '',
      inputRules: [
        v => !!v || 'input is required',
      ],
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
      reset() {
        this.$refs.form.reset()
      },
      resetValidation() {
        this.$refs.form.resetValidation()
      },
      initialize: function () {
        this.input = ''
        this.result = ''
      },
      checkBase64: function (str) {
        return str.match(/^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/)
      },
      decodeBase64: function () {
        let val = this.input
        let valss = val.replace(/-/g, '+').replace(/_/g, '/').replace(/\./g, '')

        if (!this.checkBase64(valss)) {
          this.result = "変換できませんでした。入力されたデータがBase64でない可能性があります。"
          return
        }
        this.result = decodeURIComponent(escape(atob(valss)))
      },
      decodeUrlEncode: function () {
        let vald = decodeURIComponent(this.input);
        if (this.input === vald) {
          this.result = "変換できませんでした。入力されたデータがURLエンコードされたデータでない可能性があります。"
          return
        }
        this.result = vald
      },
      unescapeUnicode: function () {
        let unsc = '', strs = this.input.match(/\\u.{4}/ig)
        if (!strs) {
          this.result = "変換できませんでした。入力されたデータがUnicodeでない可能性があります。"
          return
        }
        for (let i = 0, len = strs.length; i < len; i++) {
          unsc += String.fromCharCode(Number(strs[i].replace('\\u', '0x')))
        }
        this.result = unsc
      }
    }
  }
</script>
