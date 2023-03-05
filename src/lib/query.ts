import { useSession } from 'next-auth/react';

/*export type AuthQuery = (url: string, options: RequestInit) => Promise<any>;

export const useAuthQuery = (): AuthQuery => {
  const { data: session } = useSession();
  const authQuery: AuthQuery = async (url, options) =>
    await fetch(url, {
      method: 'post',
      headers: {
        authorization: `Bearer ${String(session?.accessToken)}`,
        ...options?.headers,
      },
      ...options,
    });
  return authQuery;
};

export const query = async (body: any): Promise<Response> =>
  await fetch(process.env.NEXT_PUBLIC_GRAPHQL_SERVER_API_ENDPOINT as string, {
    method: 'POST',
    body,
  });
 */
