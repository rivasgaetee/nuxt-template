export interface TaskResponse {
  id: number
  status: TaskStatusResponse
  title: string
  description: string
  completed: boolean
  created_at: Date
  updated_at: Date
  user: number
}

export interface TaskStatusResponse {
  id: number
  name: string
}
