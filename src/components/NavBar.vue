<template>
  <div id="nav">
    <router-link :to="{ name: 'projects-list' }">List</router-link> |
    <router-link :to="{ name: 'project-create' }">Create</router-link> |
    <router-link :to="{ name: 'project-view' }">View</router-link>
  </div>
</template>
