<script lang="ts">
    export let autor: any = null;
</script>

{#if autor}
<div>
    <img src={autor.imagem} alt="Foto do Autor">
</div>
{/if}