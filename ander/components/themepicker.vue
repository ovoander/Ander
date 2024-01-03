<template>
    <select
        class="cursor-pointer rounded bg-zinc-300 p-1 dark:bg-zinc-600"
        v-model="$colorMode.preference"
    >
        <option value="system">Auto</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
    </select>
</template>

<script>
export default {
    name: "themepicker",
};
</script>
