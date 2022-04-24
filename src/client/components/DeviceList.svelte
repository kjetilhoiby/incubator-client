<script>
  export let context;
  import { devices } from "../data/stores";

  let list = [];
  devices.subscribe(items => {
    list = items;
  });
</script>

<style>

  ul {
    padding-inline-start: 0px;
    list-style: none;
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  li {
    display: i
  }

</style>

<ul>

  {#each list as device}
    <li>{device.alias}</li>
  {/each}

</ul>
