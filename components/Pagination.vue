<template>
    <nav aria-label="...">
        <ul class="pagination">
            <li class="page-item" v-bind:class="{ 'disabled': currentPage <= 1 }">
                <nuxt-link
                :to="`?page=1&keyword=${keyword}&sort=${sort}`" class="page-link">
                First
                </nuxt-link>
            </li>
           

            
            <li class="page-item" v-for="page in totalPages" :key="page"  v-bind:class="{ 'disabled': currentPage == page }">
                <nuxt-link
                :to="`?page=${page}&keyword=${keyword}&sort=${sort}`" class="page-link">
                {{page}}
                </nuxt-link>
            </li>
            
            <li class="page-item" v-bind:class="{ 'disabled': currentPage == totalPages }">
                 <nuxt-link
                :to="`?page=${totalPages}&keyword=${keyword}&sort=${sort}`" class="page-link">
                Last
                </nuxt-link>    
                
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    props:["totalPages","currentPage","keyword","sort"]
}
</script>

<style>

</style>