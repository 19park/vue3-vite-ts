import { ref, onMounted } from 'vue'

export default function useRecoUsers() {
  const users = ref<string[]>([])
  const getRecoUsers = async () => {
    users.value = await Promise.resolve(["손열호", "이현수", "김기영"])
  }

  onMounted(getRecoUsers)

  return {
    users,
    getRecoUsers
  }
}