<template>
    <v-list two-line>
        <template v-for="(item, index) in items">
            <v-subheader v-if="item.header" :key="item.header">
                {{ item.header }}
            </v-subheader>
            <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"/>
            <v-list-tile v-else :key="item.title" avatar @click="">
                <v-list-tile-avatar>
                    <img :src="item.avatar">
                </v-list-tile-avatar>

                <v-list-tile-content>
                    <v-list-tile-title v-html="item.title"/>
                    <v-list-tile-sub-title v-html="item.subtitle"/>
                </v-list-tile-content>
            </v-list-tile>
        </template>
    </v-list>
</template>

<script>
    export default {
        name: "Contacts",
        data (){
            return
        }
    }
</script>

<style scoped>

</style>