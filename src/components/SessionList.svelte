<script>
  export let context;
  import { activeSessions } from "../data/stores";

  let list = [];
  activeSessions.subscribe(items => {
    list = items;
  });
</script>

<style>

</style>

<ul>

  {#each list as session}
    <li>{session.alias}</li>
  {/each}

</ul>
