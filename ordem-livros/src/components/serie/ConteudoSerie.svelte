<script lang="ts">
    import ItemLivro from "./ItemLivro.svelte";

    export let serie: any = null;
</script>

{#if serie}
    <div class="flex flex-col gap-5">
        <h1 class="text-2xl font-serif font-black text-zinc-800 text-justify">{serie.titulo}</h1>
        <a href="/autores/{serie.autor.id}" class="text-2xl font-medium text-red-800 -mt-4">{serie.autor.nome}</a>
        <img src="{serie.imagem}" alt="imagem da Série" class="h-96 object-cover">
        <p class="text-lg text-justify">{serie.descricao}</p>

        <h2 class="font-semibold px-3 py-10 text-center text-2xl  text-red-800"> Livros </h2>
        <div class="grid grid-cols-3 gap-6">
            {#each serie.livros as livro}
                <ItemLivro {livro}/>
            {/each}

        </div>
    </div>
{/if}