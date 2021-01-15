<template>
  <section class="section">
    <div class="container">
      <Notification :message="dataToSent.error" v-if="dataToSent.error"/>
      
      <div class="columns">
        <NoteForm :dataToSent="dataToSent" :submitForm="addNoteForm" />
      </div>
    </div>
  </section>
</template>

<script>
import NoteForm from '@/components/NoteForm'
import Notification from '@/components/Notification'
export default {
  data(){
    return {
      dataToSent: {
        heading: "Add Note",
        button: "Submit",
        error:null,
        hasSuccess:null
      }
    }
  },
  components: {
    NoteForm,
    Notification
  },
  methods: {
    async addNoteForm(noteData) {
        try {
            await this.$axios.post('notes', noteData
            ).then((response) => {
                let {data} = response;
                if(data.status == "error"){
                  this.dataToSent.hasSuccess = false;
                  this.dataToSent.error = data.msg;
                }else {
                  this.dataToSent.hasSuccess = true;
                  this.$router.push('/notes?isAdded=true')
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