<i18n src="../i18n/user.json"></i18n>

<template>
  <div class="index view">
    <p>Index view with <router-link to="other">link to another view</router-link></p>
    <p>Locale <a @click="toggleLocale()">{{ languages[locale].name }}</a></p>
    <p>{{ $t('user.guest') }} seen this page {{ $moment.utc().local().calendar() }}</p>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import { SET_LOCALE } from "@/store/types"

  export default {
    name: 'Index',
    data(){
        return {
            languages: {
                en: { name: 'En', toggle: 'ru' },
                ru: { name: 'Рус', toggle: 'en' },
            }
        }
    },
    components: {},
    created(){
        this.setLocale()
    },
    computed: {
        ...mapGetters([
            'locale',
        ])
    },
    methods: {
        toggleLocale(){
            let locale = this.languages[this.locale].toggle
            this.setLocale(locale)
        },
        setLocale(locale){
            this.SET_LOCALE(locale)
                .then(()=>{
                    this.$i18n.locale = this.locale
                    this.$moment.locale(this.locale)
                }).catch((error)=>{
                  console.log(error)
            })


        },
        ...mapActions([
            SET_LOCALE,
        ]),
    }
  }
</script>

<style lang="scss" scoped>

</style>