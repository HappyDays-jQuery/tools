<template>
  <div class="encoder">
    <h1>Encoder</h1>
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
        placeholder="エンコードしたい文字列を入力してください。"
        rounded
        row-height="40"
        rows="4"
        shaped
        :rules="inputRules"
        required
      ></v-textarea>

      <v-btn class="ma-2" x-large color="indigo" v-on:click="encodeBase64" :disabled="!valid" outlined>
        Encode Base64
      </v-btn>
      <v-btn class="ma-2" x-large color="teal" v-on:click="encodeUrlEncode" :disabled="!valid" outlined>
        Encode URL
      </v-btn>
      <v-btn class="ma-2" x-large color="success" v-on:click="escapeUnicode" :disabled="!valid" outlined>
        escape unicode
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset">
        Reset Form
      </v-btn>

      <v-btn color="warning" @click="resetValidation">
        Reset Validation
      </v-btn>

      <v-textarea
        v-model="result"
        auto-grow
        clearable
        counter
        filled
        label="Encoded Result"
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
      this.debug('Encode Component created.')
      this.initialize()
    },

    mounted() {
      this.debug('Encode Component mounted.')
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
      encodeBase64: function () {
        this.result = btoa(unescape(encodeURIComponent(this.input)))
      },
      encodeUrlEncode: function () {
        this.result = encodeURIComponent(this.input)
      },
      escapeUnicode: function () {
        let num = '\\u'
        for (let i = 0, len = this.input.length; i < len; i++) {
          if (i !== 0) {
            num += '\\u';
          }
          num += this.input.charCodeAt(i).toString(16);
        }
        this.result = num
      }
    }
  }
</script>
