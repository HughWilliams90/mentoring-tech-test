import {useMutation, UseMutationResult, useQuery, UseQueryResult} from "@tanstack/react-query";
import {SystemService, Task} from "../services/system.service";
import {queryClient} from "../services/query.client";
import {DateTime} from "luxon";

export function useTaskQueries() {
    const fetchTasksQuery: UseQueryResult<Task[]> = useQuery({
        queryKey: ['tasks'],
        queryFn: ()  => SystemService.getTasks(),
    });

    const completeTaskMutation: UseMutationResult<string> = useMutation({
        mutationFn: (task: Task) => SystemService.completeTask(task.id),
        onMutate: (task: Task) => {
            const previousTasks = queryClient.getQueryData<Task[]>(['tasks']);
            const index = previousTasks.findIndex(item => item.id === task.id);
            const updatedTasks = [...previousTasks];
            updatedTasks[index] = {...task, completed: !task.completed, completedAt: task.completed ? undefined : DateTime.now().toFormat("dd/MM/yyyy")};
            queryClient.setQueryData<Task[]>(['tasks'], updatedTasks);
            return previousTasks;
        },
        onError: (err, newTask, previousTasks) => {
            if (previousTasks) {
                queryClient.setQueryData(['tasks'], previousTasks)
            }
        },
    })

    return {fetchTasksQuery, completeTaskMutation}
}