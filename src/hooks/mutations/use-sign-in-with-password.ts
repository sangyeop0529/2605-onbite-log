import { signInWithPassword, signUp } from "@/api/auth";
import type { useMutationCallback } from "@/types";
import { useMutation } from "@tanstack/react-query";

export function useSignInWithPassword(cbs: useMutationCallback) {
  return useMutation({
    mutationFn: signInWithPassword,
    onError: (error) => {
      console.error(error);
      if (cbs?.onError) cbs.onError(error);
    },
  });
}
