<script>
    import Menu from "./Menu.svelte";
    import MenuItem from "./MenuItem.svelte";

</script>
<aside class="flex flex-col gap-10 self-start w-72 border rounded-md border-zinc-500 p-5 ">
<Menu titulo="Navegação">
    <MenuItem texto= "Inicio" href = "/"/>
    <MenuItem texto= "Personagens" href = "/"/>
    <MenuItem texto= "Autores" href = "/autores"/>
    <MenuItem texto= "Séries" href = "/"/>
</Menu>
<Menu titulo="Principais Autores">
    <MenuItem texto= "Ali Hazelwood" href = "/autores/ali-hazelwood"/>
    <MenuItem texto= "Jenny Han" href = "/autores/jenny-han"/>
    <MenuItem texto= "Sarah Adams" href = "/autores/sarah-adams"/>


    
    </Menu>
<Menu titulo="Outras categorias">
    <MenuItem texto= "Últimas Notícias" href = "/"/>
    <MenuItem texto= "Series Populares" href = "/"/>
    <MenuItem texto= "LinkedIn" href = "/"/>
    <MenuItem texto= "Instagram" href = "/"/>
    <MenuItem texto= "Youtube" href = "/"/>
</Menu>

</aside>