<template>
    <section class="section">
        <div class="container">
            <Notification :message="dataToSent.error" v-if="dataToSent.error"/>
            <div class="columns">
                <NoteForm :dataToSent="dataToSent" :submitForm="editNoteForm" />
            </div>
        </div>
    </section>
</template>

<script>
import NoteForm from '@/components/NoteForm'
import Notification from '@/components/Notification'
export default {
    components: {
        NoteForm,
        Notification
    },
    async asyncData({ $axios,$auth,route }){
        let response = await $axios.get(`notes/${route.params.id}`,{});
        const {data} = response.data;
        return {
            dataToSent: {
                heading: "Edit Note",
                button: "Update",
                id:data._id,
                title:data.title,
                description:data.description,
                priority:data.priority,
                error:null,
                hasSuccess:null
            }
        }
    },
    methods: {
        async editNoteForm(noteData) {
            try {
                
                await this.$axios.put(`notes/${this.$route.params.id}`, noteData
                ).then((response) => {
                    let {data} = response;
                    if(data.status == "error"){
                        this.dataToSent.error = data.msg;
                        this.dataToSent.hasSuccess = false;
                    }else{
                        this.dataToSent.hasSuccess = true;
                        this.$router.push('/notes?isUpdated=true')
                    }
                })
                
            } catch (err){
                this.dataToSent.hasSuccess = false;
                this.dataToSent.error = err.response.data.msg
            }
            setTimeout(() => this.dataToSent.error = false, 5000)
        }
    },
    middleware: 'auth'
}
</script>