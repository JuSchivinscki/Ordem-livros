<script>
    import ItemSerie from "../components/serie/ItemSerie.svelte";
    import series from "../constants/series";

</script>

{#each series as serie}
    <ItemSerie {serie} />
{/each}

