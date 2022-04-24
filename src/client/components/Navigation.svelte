<script>
  export let context;

  const views = [
    {
      label: "Nå", 
      url: '/'
    },
    {
      label: "Historikk", 
      url: '/history'
    }
  ]

</script>

<style>
</style>

<nav>
  {#each views as view} 
    <div>{view.label}</div>
  {/each}
</nav>
