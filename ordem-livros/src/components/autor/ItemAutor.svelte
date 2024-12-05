<script lang="ts">
    export let autor: any = null;
</script>

{#if autor}
    <a href="/autores/{autor.id}" class="flex flex-col rounded-md relative overflow-hidden border border-zinc-500">
        <img src="{autor.imagem}" alt="Foto do autor" class="h-96 object-cover">
        <div class="absolute bottom-0 flex w-full justify-end px-6 py-4 color: text-white bg-black/30">
            <span class="text-2xl font-black">{autor.nome}</span>
        </div>
    </a>
{/if}