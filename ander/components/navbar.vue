<template>
    <div class="mx-auto flex w-4/5">
        <div
            class="m-3 flex h-10 w-[90%] select-none items-center rounded bg-zinc-200 p-3 shadow-lg shadow-black/30 sm:h-12 md:h-14 lg:h-16 dark:bg-zinc-700"
        >
            <nuxt-link
                class="text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl"
                to="/"
            >
                Ander
            </nuxt-link>
        </div>
        <div
            class="m-3 flex h-10 w-[10%] select-none items-center justify-evenly rounded bg-zinc-200 p-3 shadow-lg shadow-black/30 sm:h-12 md:h-14 lg:h-16 dark:bg-zinc-700"
        >
            <themepicker />
        </div>
    </div>
</template>

<script>
export default {
    name: "navbar",
};
</script>
