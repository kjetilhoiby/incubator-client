<script>
  export let context;
  import { devices } from "../data/stores";

  let list = [];
  devices.subscribe(items => {
    list = items;
  });
</script>

<style>

</style>

<ul>

  {#each list as device}
    <li>{device.alias}</li>
  {/each}

</ul>
