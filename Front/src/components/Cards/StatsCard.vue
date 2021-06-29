<template>
  <md-card class="md-card-stats h-100">
    <md-card-header :data-background-color="dataBackgroundColor" class="bg-dark">
      <slot name="header"></slot>
    </md-card-header>

    <md-card-content>
      <slot name="content"></slot>
    </md-card-content>

  </md-card>
</template>
<script>
export default {
  name: "stats-card",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  }
};
</script>
