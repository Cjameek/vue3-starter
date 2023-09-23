import { reactive, computed } from "vue";

const state = reactive({
    title: 'You did it!'
});

const setTitle = (newTitle) => state.title = newTitle;

const getTitle = computed(() => state.title);

export const composition = {
    ...state,
    setTitle,
    getTitle
}