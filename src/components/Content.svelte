<script>
  export let context;
  import DeviceList from "./DeviceList.svelte";
  import SessionList from "./SessionList.svelte";

  let title = context.config.title;
</script>

<style>

</style>

<div>
  <SessionList {context} />

  <DeviceList {context} />

</div>
