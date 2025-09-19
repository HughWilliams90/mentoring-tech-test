import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {HealthResponse, SystemService} from "../services/system.service";

export function useSystemInfoQueries(){
    const fetchHealthQuery: UseQueryResult<HealthResponse> = useQuery({
        queryKey: ['health'],
        queryFn: ()  => SystemService.getHealth(),
        retry: false,
        refetchOnMount: false,
    });

    return { fetchHealthQuery }
}

