<template>
    <div class="column is-4 is-offset-4">        
        <h2 class="title has-text-centered">{{dataToSent.heading}}</h2>
        
        <form method="post" @submit.prevent="submitForm(noteData)">
            <div class="field">
                <label class="label">Title</label>
                <div class="control">
                <input
                    type="text"
                    class="form-control"
                    name="title"
                    v-model="noteData.title"
                    required
                />
                </div>
            </div>
            <div class="field">
                <label class="label">Description</label>
                <div class="control">
                <textarea
                    class="form-control"
                    name="description"
                    v-model="noteData.description"
                    required
                ></textarea>
                </div>
            </div>
            <div class="field">
                <label class="label">Priority </label>
                <div class="control">
                <select class="form-select" aria-label="Default select example"  name="priority"
                    v-model="noteData.priority"
                    required>
                    <option value="1" selected>Low</option>
                    <option value="2">Medium</option>
                    <option value="3">High</option>
                </select>
                </div>
            </div>
            <div class="control">
                <input type="hidden" v-model="noteData.id"  class="input"
                    name="id" >
                <button  type="submit" class="button is-dark is-fullwidth">{{dataToSent.button}}</button>
            </div>
        </form>
    </div>
</template>

<script>

export default {
   // props: ["dataToSent"],
    props: {
        dataToSent: {
            type: Object,
            required:true
        },
        submitForm: {
            type: Function
        }
    },
    data() {
        return {
            noteData:{
                id:this.dataToSent.id,
                title: this.dataToSent.title,
                description: this.dataToSent.description,
                priority: this.dataToSent.priority
            }
        }
    },
    components :{
        
    }
}
</script>

<style>

</style>