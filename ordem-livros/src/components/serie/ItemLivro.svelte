<script lang="ts">
    export let livro: any = null;
</script>


{#if livro}
    <a target="_blank" href={livro.link} class="flex flex-col rounded-md overflow-hidden bg-zinc-100 shadow-1xl">
        <img src={livro.imagem} alt="Imagem do livro" class="h-96">
        <div class="flex-1 flex flex-col  p-5 gap-2">
            <span class="flex-1 font-bold text-center">{livro.titulo}</span>
            <button class="botao vermelho"> Link do Livro </button>
        </div>
    </a>
{/if}