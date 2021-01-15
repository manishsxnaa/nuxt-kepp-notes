<template>
    <div class="container mt-12">
        <div class="row justify-content-end mr-0" >
            <div class="col-sm-2">
                <nuxt-link to="/notes/add">
                    <button  type="button" class="button is-dark is-fullwidth">Add Note</button>
                    <!-- <i  title="Add Note" class="fa fa-plus-square add-note " aria-hidden="true" ></i> -->
                </nuxt-link>
            </div>
            
        </div>
        <div class="row " >
            <div class="col-sm-2">
                <input
                    type="text"
                    class="form-control"
                    name="keyword"
                    v-model="keyword"
                    
                /> 
            </div>
            <div class="col-sm-1">
                <button type="button" class="button is-dark is-fullwidth" @click="searchNote(keyword)">Search</button>
            </div>
            <div class="col-sm-2">
                <div class="field">
                    <div class="control">
                        <select class="form-select" name="sort"
                        v-model="sort" @change="sortBy(sort)"
                        >
                            <option v-for="sorting in sortings" :key="sorting.id" v-bind:value="sorting.id">
                                {{ sorting.name }}
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" style="margin-top:5%;">
            <Notification :message="dataToSent.error" v-if="dataToSent.error" :hasSuccess="dataToSent.hasSuccess" />
            <div class="col-sm-4 "  v-for="note in notes" :key="note.id" v-show="notes.length > 0">
                <NoteList :note="note" :deleteNote="deleteNote" />
            </div>
            <div class="col-sm-12"  v-show="notes.length <= 0" style="text-align:center;margin-top:100px;">
                <h1>No Records Found</h1>
            </div>
        </div>
        
        <div class="row justify-content-end" style="margin-top:15px;margin-bottom:15px;" v-show="totalNotes > perPage">
            <Pagination :totalPages="totalPages" :currentPage="currentPage" :keyword="keyword" :sort="sort" />  
        </div>
    </div>
</template>

<script>
import NoteList from '@/components/NoteList';
import Pagination from '@/components/Pagination';
import { mapGetters } from 'vuex'
export default {
    watchQuery:['page','keyword','sort'], 
    //watch:true,
    data() {
        return {
            dataToSent: {
                error: null,
                hasSuccess:null
            },
            isShowNotification:false,
            notes: [],
            totalNotes: 0,
            totalPages: 0,
            perPage: 0,
            currentPage:1,
            keyword:this.$route.query.keyword || "",
            sort:this.$route.query.sort || "",
            sortings: [
                {id: '', name: 'Sort By'},
                {id: "ASC", name: 'ASC'},
                {id: "DESC", name: 'DESC'}
            ]
        }
    },
    
    components: {
        NoteList,
        Pagination
    },
    
    created() {
        console.log("created");
        if(this.$route.query.isUpdated || this.$route.query.isAdded) {
           
            let note = "updated";
            let param = "isUpdated";
            if(this.$route.query.isAdded){
                note = "added";
                param = "isAdded";
            }
            history.replaceState(null, "", location.href.split("?")[0]);
            this.dataToSent.hasSuccess = true;
            this.dataToSent.error = `Note has been ${note} successfully.`;
            setTimeout(() => this.dataToSent.error = false, 5000);
        }
    },
    async asyncData({ $axios,$auth,query }){
        let page = query.page || 1;
        let sort = query.sort || -1;
        let keyword = query.keyword || "";
        let response = await $axios.get(`notes?page=${page}&keyword=${keyword}&sort=${sort}`,{});
        const {data,total,totalPages,perPage} = response.data;
        return {
            notes: data,
            totalNotes: total,
            totalPages: totalPages,
            perPage: perPage,
            currentPage:page
        }
        
    },
    // async fetch({query,$axios}) {
    //         console.log("fetch");
          
           
    //         console.log(query);
    //         console.log($axios);
    //     let page = 1;
    //     let response = await $axios.$get(`notes?page=${page}`,{});
    //     const {data,total,totalPages,perPage} = response;
    //    console.log(data);
    //     this.notes = data;
    //       console.log("notes");
    //     console.log(this.notes);
    //     this.totalNotes= total;
    //     this.totalPages= totalPages;
    //     this.perPage= perPage;
    //     this.currentPage=page;
    // },
    //fetchOnServer: true,
    methods: {
        async deleteNote(id) {
            try {
                await this.$axios.delete(`notes/${id}`
                ).then((response) => {
                    let {data} = response;
                    
                    if(data.status == "success"){
                        this.dataToSent.error = data.msg;
                        this.dataToSent.hasSuccess = true;
                        this.notes= this.notes.filter(note=>note._id != id)
                    }else {
                        this.dataToSent.error = data.msg;
                        this.dataToSent.hasSuccess = false;
                        this.dataToSent.errorclass
                    }
                })
                
            } catch (err){
                this.dataToSent.hasSuccess = false;
                this.dataToSent.error = err.response.data.msg
            }
            setTimeout(() => this.dataToSent.error = false, 5000)
        },
        searchNote(keyword){
            //let page = this.$route.query.page || 1;
            this.$router.push(`/notes?keyword=${keyword}`);
        },
        sortBy(sort){
            this.$router.push(`/notes?sort=${sort}`);
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
        float: right;
    }
    .mr-0 {
        margin-right: 0px;
    }
</style>