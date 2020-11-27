<template>
  <div>
    <h1>Project List Page</h1>
    <ul>
      <li>{{ projects.name }}</li>
      <li>{{ projects.developer }}</li>
      <li>{{ projects.client }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: {
        name: "Test Project 1",
        developer: "Jaydeep",
        client: "Volvo"
      }
    };
  }
};
</script>

<style lang="stylus" scoped></style>
