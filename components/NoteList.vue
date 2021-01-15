<template>
    <div class="row m-2 shadow">
        <div class="card" >
            <div class="row fs-20">
                <div class="col-sm-10">
                    {{note.title | capitalizeWholeStringCustomized}}
                </div>
                <div class="col-sm-2">
                    <div class="navbar-item has-dropdown is-hoverable"  >
                        <a class="navbar-link navbar-link-customized">
                        </a>
                        <div class="navbar-dropdown navbar-dropdown-customized" >
                            <nuxt-link class="navbar-item" :to="`/notes/edit/${note._id}`"><i title="Edit Note" class="fa fa-pencil fs-20" aria-hidden="true" ></i> Edit</nuxt-link>
                            <hr class="navbar-divider"/>
                            
                            <a class="navbar-item" @click="deleteNote(note._id)"> <i title="Delete Note" class="fa fa-times cursor-pointer" aria-hidden="true" style="padding-right:8px;"></i> Delete</a>
                        </div>
                    </div>
                </div>
      
            </div>
            <div class="card-body" style="padding-left:5px;">
                {{note.description}}
            </div>
            <!-- <div class="row justify-content-end parent-edit-button">
                <div class="col-sm-1" style="margin-right:5px;">
                    <nuxt-link :to="`/notes/edit/${note._id}`" class="col-sm-4">
                        <i title="Edit Note" class="fa fa-pencil fs-20" aria-hidden="true" ></i>
                    </nuxt-link>
                </div>
                <div class="col-sm-1">
                    <i title="Delete Note" class="fa fa-times cursor-pointer" aria-hidden="true" @click="deleteNote(note._id)" ></i>
                </div>
            </div> -->
            <div class="row justify-content-end">
                <div class="priority" v-bind:class="{ 'bg-danger': note.priority == '3', 'bg-warning': note.priority == '2', 'bg-light': note.priority == '1' }">
                    &nbsp;
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>

export default {
    props:["note","deleteNote"]
}
</script>

<style scoped>
    .cursor-pointer {
        cursor: pointer;
        font-size: 20px;
    }
    .fs-20 {
        font-size: 18px;
        font-weight: bold;
        padding:10px 5px 5px 5px
    }
    .float-right {
        float: right !important;
    }
    .parent-edit-button {
        margin: 0 0 5px 0
    }
    .navbar-dropdown-customized {
        border: 1px solid #dbdbdb;
        border-radius: 10px;
        left:-75px
    }
    .priority{
        width: 25px;
        height: 25px;
        border-radius: 15px;
        margin: 10px 10px;
        margin-right: 15px;
        margin-bottom: 8px;
    }

</style>