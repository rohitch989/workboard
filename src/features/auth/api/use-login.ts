import { useMutation } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { client } from '@/lib/rps';


type ResponseType = InferResponseType<typeof client.api.auth.login["$post"]>;
type RequestType = InferRequestType<typeof client.api.auth.login["$post"]>;
type ApiError = { message: string; code?: number };

export const useLogin = () => {
    const mutation = useMutation<
        ResponseType, ApiError, RequestType
    >({
        mutationFn: async ({ json }) => {
            console.log(json);
            const response = await client.api.auth.login["$post"]({ json });
            if (!response.ok) {
                const errorBody = await response.json();
                throw errorBody as unknown as ApiError;

            }
            return await response.json();
        },
        onError: (error) => {
            console.error("Login failed:", error.message);
        },

    });
    return mutation;
}
