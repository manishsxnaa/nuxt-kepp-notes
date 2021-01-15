<template>
    <!-- <div class="container mt-15">
        <div class="tile is-ancestor">
            <div class="tile is-parent is-3" v-for="note in notes" :key="note.id">
                <NoteList :note="note" />
            </div>
        </div>
    </div> -->
    <div class="container mt-12">
        <nuxt-link to="/add-note">
            <i class="fa fa-plus-square add-note " aria-hidden="true" ></i>
        </nuxt-link>
        <div class="row">
            <div class="col-sm-4 "  v-for="note in notes" :key="note.id">
                <NoteList :note="note" />
            </div>
        </div>
    </div>
</template>

<script>
//import Vue from 'vue'
import NoteList from '@/components/NoteList';
import { mapGetters } from 'vuex'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// library.add(faUserSecret)

// Vue.component('font-awesome-icon', FontAwesomeIcon)
export default {
    components: {
        NoteList
    },
    async asyncData({ $axios,$auth }){
        let response = await $axios.get('notes',{});
        const {data} = response.data;
        return {
            notes: data
        }
    },
    middleware: 'auth',
}
</script>

<style scoped>
    .mt-12{
        margin-top:12px;
    }
    .add-note {
        font-size: 50px;
        cursor: pointer;
    }
</style>