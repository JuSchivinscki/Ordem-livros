<script lang="ts">
    export let serie: any = null;
</script>

{#if serie}
<!-- sombreamento com tailwind css -->
    <a href="/series/{serie.id}" class="flex flex-col rounded-md overflow-hidden border border-zinc-300 bg-white shadow-lg"> 
        <img src={serie.imagem} alt="Imagem"  class="h-96 object-cover"/>
        <div class="flex flex-col gap-2 p-5 ">
            <span class="text-2xl font-serif font-black text-zinc-800 text-justify">{serie.titulo}</span>
            <span>{serie.descricao}</span>
            <button class="botao vermelho self-end">Leia Mais</button>
        </div>
    </a>
{/if}