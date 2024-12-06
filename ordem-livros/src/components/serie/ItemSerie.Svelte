<script lang="ts">
    export let serie: any = null;
</script>

{#if serie}
    <a href="/series/{serie.id}">
        <img src={serie.imagem} alt="Imagem" />
    </a>
{/if}