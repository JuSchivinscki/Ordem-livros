<script>
    import Livro from "../../components/livros/Livro.svelte";
    import livros from "../../constants/livros";


</script>

<div>
    {#each livros as livro}
        <Livro {livro}/>
    {/each}
</div>