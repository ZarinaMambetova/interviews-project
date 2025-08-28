<template>
<app-menubar :model="items" class="menu">
    <template #item="{item, props}">
        <router-link v-ripple  :to="item.path" class="flex items-center" v-bind="props.action">
            <span :class="item.icon" class="p-menuitem-icon"></span>
            <span class="ml-2">{{ item.label }}</span>
        </router-link>
    </template>
</app-menubar>
</template>

<script setup lang="ts">
import {
  ref
} from "vue";

const items = ref([{
    label: 'Авторизация',
    icon: 'pi pi-user',
    path: '/auth'
  },
  {
    label: 'Добавить',
    icon: 'pi pi-plus',
    path: '/'
  },
  {
    label: 'Список собеседований',
    icon: 'pi pi-list',
    path: '/auth'
  },
  {
    label: 'Статистика',
    icon: 'pi pi-chart-pie',
    path: '/statistic'
  },
])
</script>

<style scoped>
.menu {
  margin: 30px 0
}

.menu-exit {
  cursor: pointer
}
</style>
