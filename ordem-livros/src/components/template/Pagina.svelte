<script>
    import AreaLateral from "./AreaLateral.svelte";
    import Cabecalho from "./Cabecalho.svelte";
    import Rodape from "./Rodape.svelte";
</script>

<div class="flex flex-col min-h-screen bg-white 5 text-black ">

    <Cabecalho/>
    <div class="flex flex-1 max-w-7xl mx-auto w-full p-5 gap-5">
        <main class="flex-1">
            <slot></slot>
        </main>
        <AreaLateral/>
    </div>
    <Rodape/>
</div>