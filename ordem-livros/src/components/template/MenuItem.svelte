<script>
    export let href = "/"
    export let texto = ""
</script>

<li>
    <a {href} 
        class="flex gap-2 items-center cursor-pointer px-4 py-2 hover:bg-gray-300/30 ">
        <span>{texto}</span>
    </a>
</li>