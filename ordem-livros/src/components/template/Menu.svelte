<script>
    export let titulo = "Menu";

</script>

<div class="flex flex-col gap-5">
    <span class="text-sm font-bold text-red-700">{titulo}</span>
    <ul>
        <slot></slot>
    </ul>
</div>
