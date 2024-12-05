<script>
    import {page} from "$app/stores"
    import ConteudoAutor from "../../../components/autor/ConteudoAutor.svelte";
</script>


<ConteudoAutor autor={$page.data.autor} />
